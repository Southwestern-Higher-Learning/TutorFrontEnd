import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native'


export const NameOrSubject = ({selectionCallBack})=>{
    const [isActive, setIsActive] = React.useState(false)
    return (
        <View style={styles.container}>
            <Pressable
            onPress={()=>{
                setIsActive(!isActive)
                selectionCallBack(!isActive)
            
            }}
            >
                <Text style={!isActive ? styles.buttonTextActive : styles.buttonTextNotActive}>Subject</Text>
            </Pressable>
            <Pressable
            onPress={()=>{
                setIsActive(!isActive)
                selectionCallBack(!isActive)
            }}
            >
                <Text style={isActive ? styles.buttonTextActive : styles.buttonTextNotActive}>Name</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: 'auto',
        justifyContent: 'space-evenly',
        paddingTop: 5
    },
    buttonTextNotActive: {
        fontFamily: 'HKGroteskSemiBold',
        fontSize: 20,
        color: 'gray',
        textDecorationLine: 'none'
    },
    buttonTextActive: {
        fontFamily: 'HKGroteskSemiBold',
        fontSize: 20,
        color: 'black',
        textDecorationLine: 'underline'
    }
})