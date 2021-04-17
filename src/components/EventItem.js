import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


export const EventItem = ({startTime, sessionID, tutorID, endTime, summary})=>{
    const start = formatDateTime(startTime)
    
    const end = formatDateTime(endTime)
    return (
        <View style={styles.Container}>
            <View style={styles.TextContainer}>
                <Text>Start time: {start}</Text>
                <Text>End Time: {end}</Text>
                <Text>Event: {summary}</Text>
            </View>
            {tutorID ? (
                <TouchableOpacity
                style={styles.AddButton}
                actionOnPress={()=>{
                    console.log(`Schedule session with session_id: ${sessionID} and tutor_id: ${tutorID}`)
                }}
            >
                <Text>Add to Calendar</Text>
            </TouchableOpacity>
            ) : null}
            
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
    },
    AddButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 70,
        width: 140,
        backgroundColor: '#ffcd20',
        marginBottom: 10,
    }
})


const formatDateTime = (datetime) =>{
    const start = new Date(datetime)
    return `${new Intl.DateTimeFormat('en-us', {weekday: 'short', day: '2-digit', month: 'short', hour12: true, hour: 'numeric', minute: '2-digit'}).format(start)}`
}