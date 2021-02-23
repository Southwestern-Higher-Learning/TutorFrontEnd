import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {ProfileScreen} from '../screens/ProfileScreen'
import {EditProfileScreen} from '../screens/EditProfileScreen'

const ProfileScreenStack = createStackNavigator()

export const ProfileScreenStackNavigator = ()=>{
    return (
        <ProfileScreenStack.Navigator>
            <ProfileScreenStack.Screen
            name='profile'
            component={ProfileScreen}
            options={{ headerShown: false }}
            />
            <ProfileScreenStack.Screen
            name='editProfile'
            component={EditProfileScreen}
            options={{headerTitle: 'Edit Profile'}}
            
            />
        </ProfileScreenStack.Navigator>
    )
}