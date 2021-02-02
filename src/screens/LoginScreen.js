import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'
import * as AuthSession from 'expo-auth-session';


export const LoginScreen = ({navigation})=>{

    _asyncSignIn = async () => {
        const googleWebAppId = "217927433662-hkbspdt6kb2vm5p3eoolug35d1jp1obh.apps.googleusercontent.com";
        const redirectUrl = AuthSession.makeRedirectUri({useProxy: true});
        let result = await AuthSession.startAsync({
            authUrl:
              `https://accounts.google.com/o/oauth2/v2/auth?` +
              `&client_id=${googleWebAppId}` +
              `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
              `&response_type=code` +
              `&access_type=offline` +
              `&scope=profile` + 
              `&prompt=consent`,
          });
        console.log(result);
    }

    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Button
                onPress={this._asyncSignIn}
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