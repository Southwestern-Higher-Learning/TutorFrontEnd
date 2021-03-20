import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


export const ScheduleWithTutorScreen = ({route, navigation})=>{
    console.log(route.params)
    const {tutorState} = route.params
    return (
        <View>
            <Text>
                Welcome to the schedule with tutor screen
            </Text>
            <Text>
                Description: {tutorState.description}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

})