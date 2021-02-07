import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';


export const HomeScreen = () => {
    return (
        
        <View style={styles.container}>
            <ImageBackground 
            source={require('../../assets/LoginPage.jpg')}
            style={styles.image}
            blurRadius={1}
            />
            <View style={styles.bookedSessionsBox}>
                <Text style={styles.textOverGradient}>Your Upcoming Sessions</Text>
                <Text style={styles.textOverGradient}>Some other text of upcoming appointments</Text>
            </View>
            <View style={styles.helpfulInfo}>
                <Text style={styles.textOverGradient}>Helpful hints</Text>
                <View>
                    <Text style={styles.textOverGradient}>Before meeting with your consultant </Text>
                </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    image: {
        width:'100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    bookedSessionsBox: {
        marginTop: '15%',
        borderRadius: 5,
        height: 200,
        width: '85%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textOverGradient: {
        color: 'white'
    },
    helpfulInfo: {
        marginTop: 20,
        width: '85%',
        height: 400,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10
    }
})