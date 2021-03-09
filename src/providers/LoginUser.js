import * as AuthSession from 'expo-auth-session'
import axios from 'axios'





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
                // at this point we have successfully obtained the user info
                // now we want to set the global axios authorization header with the users access_token
                // after we set the access_token, in the updateaboutme provider, we can remove the authorization token
                // then refactor to remove the access_token from the function that calls it
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



export const LoginU = async (navigation) => {

    const infoResponse = await fetch('https://tutor.jakegut.com/auth/code/url')
    const info = await infoResponse.json()
    console.log(info)
    const redirectUrl = AuthSession.makeRedirectUri({useProxy: true});
    console.log(redirectUrl)
    let result = await AuthSession.startAsync({
        authUrl:
          `https://accounts.google.com/o/oauth2/auth?` +
          `&client_id=${info['client_id']}` +
          `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
          `&response_type=code` +
          `&access_type=offline` +
          `&scope=${encodeURIComponent(info['scopes'].join(' '))}` + 
          `&prompt=consent`,
      });

    console.log(result) 
    if (result['errorCode'] == null) {
        return fetch("https://tutor.jakegut.com/auth/swap", {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"code": result['params']['code'], "redirect_uri": redirectUrl})
        })
        .then(response => response.json())
        .then((data) => {
            return data
        })
        .catch(err => {return err})
    }
    return Promise.reject()
}

