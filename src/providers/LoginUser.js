import * as AuthSession from 'expo-auth-session'
import axios from 'axios'

export const LoginUser= async () => {
    let info
    const infoResponse = await axios.get('https://tutor.jakegut.com/auth/code/url')
    .then((response)=>{
        if (response.status === 200){
            info = response.data
            const result = await startAsync()
              if (result['errorCode'] === null) {
                    axios.post('https://tutor.jakegut.com/auth/swap', {
                    body: JSON.stringify({"code": result['params']['code'], "redirect_uri": redirectUrl}),
                    Headers: {
                        'Content-Type': 'application/json'
                    },
                    
                }).then((response)=>{
                    if(response.status === 200){
                        console.log(data)
                        return response.data
                    }
                }, (error) => console.log(error))

                }
        } 
    }).catch(err => console.log(err))
    

}


const startAsync = async ()=>{
    const redirectUrl = AuthSession.makeRedirectUri({useProxy: true});
    let result = AuthSession.startAsync({
        authUrl:
            `https://accounts.google.com/o/oauth2/auth?` +
            `&client_id=${info['client_id']}` +
            `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
            `&response_type=code` +
            `&access_type=offline` +
            `&scope=${encodeURIComponent(info['scopes'].join(' '))}` + 
            `&prompt=consent`,
        });
    return result
}






export const LoginU = async (navigation) => {

    const infoResponse = await fetch('https://tutor.jakegut.com/auth/code/url')
    const info = await infoResponse.json()
    const redirectUrl = AuthSession.makeRedirectUri({useProxy: true});
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

