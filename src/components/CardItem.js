import React from 'react';
import { Text, View, StyleSheet } from 'react-native'


export const CardItem = ({textContent, cardName}) =>{



    return (
        <View style={styles.container}>
            <View style={styles.cardNameContainer}>
                <Text style={styles.cardNameText}>{cardName}</Text>
            </View>
            <View style={styles.textContentContainer}>
                <Text style={styles.textContentText}>{textContent}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ffcd20',
        position: 'relative',
        top: 20
        
    },
    cardNameContainer: {
        position: 'relative',
        bottom: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#828282'


    },
    cardNameText: {
        fontFamily: 'HKGroteskRegular',
        fontSize: 18,
        fontWeight: '300',
        textAlign: 'center',
        margin: 10,
        
    },
    textContentContainer: {
        justifyContent: 'center',
        alignItems: 'center'

    },
    textContentText: {
        textAlign: 'center',
        fontFamily: 'HKGroteskRegular',
        fontSize: 14,
        color: 'white',
        paddingBottom: 20,
        paddingHorizontal: 10
    }
})