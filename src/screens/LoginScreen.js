import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'


export const LoginScreen = ({navigation})=>{

    const signIn = async () => {
        console.log("weee")
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
        console.log(result);
        if (result['errorCode'] == null) {
            console.log("Getting accesstoken...")
            fetch("https://tutor.jakegut.com/auth/swap", {
                method: 'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({"code": result['params']['code'], "redirect_uri": redirectUrl})
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
        }
    }

    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Button
                onPress={signIn}
                title="Log in"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})