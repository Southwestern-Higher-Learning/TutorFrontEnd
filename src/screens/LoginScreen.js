import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'


export const LoginScreen = ({navigation})=>{



    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Button
                onPress={()=>navigation.navigate('HonorCodeScreen')}
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