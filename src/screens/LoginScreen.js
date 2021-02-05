import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native'


export const LoginScreen = ({navigation})=>{



    return (
        <View style={styles.container}>

            <Image source={require('../../assets/suLogoPNG.png')} 
            style={{height: 250, width: 250, resizeMode: 'contain'}}
            />

            <Pressable 
            onPress={()=>navigation.navigate('HonorCodeScreen')}
            style={styles.button}
            >
                <Text style={styles.buttonText}>LOG IN!</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#ffcd03"

    },
    button: {
        width: 100,
        height: 50,
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 2,
        backgroundColor: 'white',
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '400'
    },
    imageBox: {
        height: 200,
        width: 200
    }
})