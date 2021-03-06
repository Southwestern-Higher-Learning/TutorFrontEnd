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
            <View style={!isActive ? styles.buttonTextActive : styles.buttonTextNotActive}> 
                <Text style={!isActive ? styles.buttonTextPressed : styles.buttonTextNotPressed}>Subject</Text>
            </View>
            </Pressable>
            <Pressable
            onPress={()=>{
                setIsActive(!isActive)
                selectionCallBack(!isActive)
            }}
            >
            <View style={isActive ? styles.buttonTextActive : styles.buttonTextNotActive}> 
                <Text style={isActive ? styles.buttonTextPressed : styles.buttonTextNotPressed}>Name</Text>
            </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: 30,
        justifyContent: 'space-evenly',
        paddingTop: 5,
    },
    buttonTextNotActive: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 207,
        backgroundColor: '#ffdd20',
    },
    buttonTextActive: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 207,
        backgroundColor: '#ffcd20',
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    buttonTextNotPressed:{
        fontFamily: 'HKGroteskSemiBold',
        fontSize: 20,
        color: 'gray',
    },
    buttonTextPressed:{
        fontFamily: 'HKGroteskSemiBold',
        fontSize: 20,
        color: 'black',
    }
})