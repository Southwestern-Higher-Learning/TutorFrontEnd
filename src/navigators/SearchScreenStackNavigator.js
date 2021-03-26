import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {SearchScreen} from '../screens/SearchScreen'
import {ScheduleWithTutorScreen} from '../screens/ScheduleWithTutorScreen'

const SearchScreenStack = createStackNavigator()

export const SearchScreenStackNavigator = ()=>{
    return (
        <SearchScreenStack.Navigator>
            <SearchScreenStack.Screen
            name='Search'
            component={SearchScreen}
            options={{ headerShown: false }}
            />
            <SearchScreenStack.Screen
            name='Schedule'
            component={ScheduleWithTutorScreen}
            options={{headerTitle: 'Schedule'}}
            
            />
        </SearchScreenStack.Navigator>
    )
}