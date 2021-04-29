import React from 'react';
import {ActivityIndicator, View, Text, StyleSheet} from 'react-native'


export const LoadingItem = ({screen})=>{
    return (
        screen ? (
            <View>
            <View style={styles.headerContainer}/**need to check if screen has actually been passed before rendering this */>
                <Text style={styles.headerText}>{screen}</Text>
            </View>
            <View style={{paddingTop: 100}}>   
                <ActivityIndicator size="large" color="black" />
            </View>
        </View>
        ) : (
            <View style={{paddingTop: 100}}>   
                <ActivityIndicator size="large" color="black" />
            </View>
        )
    )
}


const styles = StyleSheet.create({
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
    }
    
})