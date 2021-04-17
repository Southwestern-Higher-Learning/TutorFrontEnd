import * as AuthSession from 'expo-auth-session'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

export const LoginUser = async () => {
    // initiate login process with exterior request
    const info = await getInitialRequest()
    const redirectUrl = AuthSession.makeRedirectUri({useProxy: true});
    try {
        let result = await AuthSession.startAsync({
            authUrl:
                `https://accounts.google.com/o/oauth2/auth?` +
                `&client_id=${info['client_id']}` +
                `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
                `&response_type=code` +
                `&access_type=offline` +
                `&scope=${encodeURIComponent(info['scopes'].join(' '))}` + 
                `&prompt=consent`,
            })
            if(result['errorCode'] === null){ // meaning there wasn't an error
            return axios({
                method: 'POST',
                url: 'https://tutor.jakegut.com/auth/swap',
                data: JSON.stringify({"code": result['params']['code'], "redirect_uri": redirectUrl}),
                headers: {
                    'contentType': 'application/json'
                }
            })
            .then(res => {
                axios.defaults.headers.common['Authorization'] =  `Bearer ${res.data['access_token']}`
                SecureStore.setItemAsync('refresh_token', res.data['refresh_token'])
                return res.data})
            .catch(err =>  {return Promise.reject(err)})
            }
            else{
                return Promise.reject("There was an error initializing the auth session")
            }
    } catch (error) {
        return Promise.reject("a valid reason, don't question it")
    }
    
}



const getInitialRequest = async ()=>{
    const req = await axios.get('https://tutor.jakegut.com/auth/code/url')
    return req.data
}


export const RefreshUser = async (refreshToken) => {
    const refreshResponse = await axios({
        method: 'GET',
        url: 'https://tutor.jakegut.com/auth/refresh',
        headers: {
            'contentType': 'application/json',
            'Authorization': `Bearer ${refreshToken}`
        }
    })
    const access_token = refreshResponse.data['access_token']

    axios.defaults.headers.common['Authorization'] =  `Bearer ${access_token}`

    const userResponse = await axios.get('https://tutor.jakegut.com/user/me');

    const user = userResponse.data;
    
    return { user }
}