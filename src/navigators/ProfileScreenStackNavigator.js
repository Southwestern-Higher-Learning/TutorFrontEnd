import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {ProfileScreen} from '../screens/ProfileScreen'

const ProfileScreenStack = createStackNavigator()

export const ProfileScreenStackNavigator = ()=>{
    return (
        <ProfileScreenStack.Navigator>
            <ProfileScreenStack.Screen
            name='profile'
            component={ProfileScreen}
            options={{ headerShown: false }}
            />
        </ProfileScreenStack.Navigator>
    )
}