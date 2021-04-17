import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {useUser} from '../providers/UserContextProvider'
import {LoadingItem} from '../components/LoadingItem';



export const LoginScreen = ({navigation})=>{
    const {checkLoggedIn} = useUser()
    const [isLoading, setIsLoading] = React.useState(true)


    const checkAuth = async () => {
        const isLoggedIn = await checkLoggedIn();
        if(isLoggedIn){
            navigation.reset({index: 0, routes: [{name: 'HomeTabs' }]});
        } else { 
            setIsLoading(false);
        }   
    };
    
    useEffect(() => {
        checkAuth()

    }, []);
    

    return isLoading ? (<LoadingItem />) : (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/LoginPage.jpg')}
                style={styles.image}
            />
            <ImageBackground
                source={require('../../assets/Gradient.jpg')}
                style={styles.imageGradient}
            />
            <View style={styles.imageBox}>
            <Image
                source={require('../../assets/tower_with_name.png')}
                style={styles.logo}
            />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('HonorCodeScreen', {
                            userName: null
                        })
                    }}
                >
                    <Image source={require('../../assets/GoogleSignIn.png')}  style={styles.button}/>

                </TouchableOpacity>
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
        alignItems: 'center',
        width: '100%',
        padding: 10,
    },
    button: {
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginTop: 120
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
        height: 155,
        width: 305,
        resizeMode: 'cover',
        position: 'absolute',
    },
    imageBox: {
        position: 'relative',
        bottom: 175,
        right: 150,
    }

})