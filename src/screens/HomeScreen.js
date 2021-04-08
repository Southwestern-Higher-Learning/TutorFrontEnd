import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';


export const HomeScreen = () => {
    return (
        
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Home</Text>
            </View>
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
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headerContainer: {
        height: 70,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#ffcd20',
    },
    headerText: {
        fontSize: 30,
        fontWeight: '400',
        fontFamily: 'PlayfairDisplay',
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
        color: 'white', 
        fontFamily: 'HKGroteskRegular'
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