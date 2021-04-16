import React from 'react';
import {View, FlatList} from 'react-native'
import {EventItem} from './EventItem'

export const SessionEvents = ({eventsList, tutor_id})=>{
    return (
        <View>
            <FlatList
            snapToAlignment={'top'}
            horizontal
            data={eventsList}
            keyExtractor={result => result.id} 
            showsHorizontalScrollIndicator={false}
            renderItem={( {item} )=> {
                return <EventItem 
                startTime={item.start_time}
                sessionID={item.id}
                tutorID={tutor_id}
                endTime={item.end_time}
                summary={item.summary}
                />
            }}
            />
        </View>
        
    )
}