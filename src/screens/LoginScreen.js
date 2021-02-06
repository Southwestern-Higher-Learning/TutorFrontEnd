import React from 'react';

import {View, Text, StyleSheet, Pressable, ImageBackground} from 'react-native';



export const LoginScreen = ({navigation})=>{



    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/LoginPage.jpg')}
                style={styles.image}
            />
            <ImageBackground
                source={require('../../assets/Gradient.jpg')}
                style={styles.imageGradient}
            />
            <ImageBackground
                source={require('../../assets/CrestNameLogoWhite.png')}
                style={styles.logo}
            />
            <View style={styles.buttonContainer}>
            <Pressable
                style={styles.button}
                onPress={()=>{
                    navigation.navigate('HonorCodeScreen', {
                        userName: null
                    })
                }}
            >
                <Text style={styles.buttonText}>Log in</Text>

            </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonContainer: {
        position: 'absolute',
        bottom: 90,
        alignItems: 'center',
        width: '100%',
        padding: 10,
    },
    button: {
        height: 45,
        width: '80%',
        opacity: 0.9,
        borderRadius: 23, 
        borderColor: 'black',
        backgroundColor: '#ffcd20',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    image: {
        width:'100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    imageGradient: {
        width:'100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        opacity: 0.40,
    },
    logo: {
        height: 275,
        width: 375,
        resizeMode: 'contain',
        position: 'absolute',
        top: 30,
    },
    imageBox: {
        height: 200,
        width: 200
    }

})