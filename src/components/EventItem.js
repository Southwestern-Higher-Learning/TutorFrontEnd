import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {PressableButton} from './PressableButton'

export const EventItem = ({startTime, sessionID, tutorID, endTime, summary})=>{
    return (
        <View style={styles.Container}>
            <View style={styles.TextContainer}>
                <Text>Start time: {startTime}</Text>
                <Text>End Time: {endTime}</Text>
                <Text>Summary: {summary}</Text>
                <PressableButton 
                buttonText={"Add to Calendar"}
                actionOnPress={()=>{
                    console.log(`Schedule session with session_id: ${sessionID} and tutor_id: ${tutorID}`)
                }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: 300,
        borderWidth: 2,
        borderColor: '#828282',
        borderRadius: 5,
        marginHorizontal: 20
    },
    TextContainer: {
        flex: 4,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        fontSize: 16,
        fontFamily: 'HKGroteskRegular'
    }
})
