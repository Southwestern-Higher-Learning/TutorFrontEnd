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
                <Text style={!isActive ? styles.buttonTextActive : styles.buttonTextNotActive}>Tutor Subject</Text>
            </Pressable>
            <Pressable
            onPress={()=>{
                setIsActive(!isActive)
                selectionCallBack(!isActive)
            }}
            >
                <Text style={isActive ? styles.buttonTextActive : styles.buttonTextNotActive}>Tutor Name</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: 24,
        justifyContent: 'space-evenly',
    },
    buttonTextNotActive: {
        fontFamily: 'HKGroteskSemiBold',
        fontSize: 20,
        color: 'gray'
    },
    buttonTextActive: {
        fontFamily: 'HKGroteskSemiBold',
        fontSize: 20,
        color: 'black'
    }
})