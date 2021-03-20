import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


export const ScheduleWithTutorScreen = ({route, navigation})=>{
    console.log(route.params)
    const {tutorState} = route.params
    // need to add reviews, style page, generate calendar info, schedule with tutor
    // need to make reviews from profile screen a separate ui component so we can use that here

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