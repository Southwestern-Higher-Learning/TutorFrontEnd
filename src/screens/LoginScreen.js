import React, {useEffect} from 'react';
import {useUser} from '../providers/UserContextProvider'
import {View, Text, StyleSheet, Pressable, ImageBackground, Image} from 'react-native';
import {LoadingItem} from '../components/LoadingItem'



export const LoginScreen = ({navigation})=>{
    const {checkLoggedIn} = useUser()
    const [isLoading, setIsLoading] = React.useState(true)


    const checkAuth = async () => {
        const isLoggedIn = checkLoggedIn();
        if(isLoggedIn){
            navigation.reset({index: 0, routes: [{name: 'HomeTabs' }]});
        }
        setIsLoading(false);
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
            <Pressable
                style={styles.button}
                onPress={()=>{
                    navigation.navigate('HonorCodeScreen', {
                        userName: null
                    })
                }}
            >
                <Text style={styles.buttonText}>Log In</Text>

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
        alignItems: 'center',
        width: '100%',
        padding: 10,
    },
    button: {
        height: 45,
        width: '36%',
        opacity: 0.9,
        borderRadius: 23, 
        backgroundColor: '#ffcd20',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 20
    },
    buttonText: {
        fontSize: 30,
        fontWeight: '400',
        opacity: 1,
        fontStyle: 'italic',
        fontFamily: 'HKGroteskRegular',
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