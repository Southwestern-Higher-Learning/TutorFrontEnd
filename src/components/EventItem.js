import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {PressableButton} from './PressableButton'

export const EventItem = ({startTime, sessionID, tutorID, endTime, summary})=>{
    const start = formatDateTime(startTime)
    
    const end = formatDateTime(endTime)
    return (
        <View style={styles.Container}>
            <View style={styles.TextContainer}>
                <Text>Start time: {start}</Text>
                <Text>End Time: {end}</Text>
                <Text>Summary: {summary}</Text>
            </View>
            <PressableButton 
                buttonText={"Add to Calendar"}
                actionOnPress={()=>{
                    console.log(`Schedule session with session_id: ${sessionID} and tutor_id: ${tutorID}`)
                }}
                />
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
        flex: 2,
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    Text: {
        fontSize: 16,
        fontFamily: 'HKGroteskRegular'
    }
})


const formatDateTime = (datetime) =>{
    const start = new Date(datetime)
    return `${new Intl.DateTimeFormat('en-us', {weekday: 'short', day: '2-digit', month: 'short', hour12: true, hour: 'numeric', minute: '2-digit'}).format(start)}`
}