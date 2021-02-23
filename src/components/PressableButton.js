import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native'


export const PressableButton = ({buttonText, actionOnPress})=>{
    return (
        <Pressable
        style={styles.scheduleButton}
        onPress={actionOnPress}
        >
            <Text>{buttonText}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    scheduleButton: {
        height: 45,
        width: '36%',
        opacity: 0.9,
        borderRadius: 23, 
        backgroundColor: '#ffcd20',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    buttonText: {
        fontFamily: 'HKGroteskSemiBold',
        fontSize: 20,
    }
})