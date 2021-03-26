import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {ProfileScreenStackNavigator} from '../navigators/ProfileScreenStackNavigator'
import { HomeScreen } from '../screens/HomeScreen'
import { SearchScreenStackNavigator } from '../navigators/SearchScreenStackNavigator'
import { Ionicons } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator()

export const HomeTabs = ()=>{
    
    return (
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#000000"
        inactiveColor="#FBFBF8"
        barStyle={{ backgroundColor: '#FFCD00'}}
        >
            <Tab.Screen name="Home" component={HomeScreen} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (
                    <Ionicons name="md-home" color={color} size={26} />
                )
            }}
            />
            <Tab.Screen name="Search" component={SearchScreenStackNavigator} 
            options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({color}) => (
                    <Ionicons name="md-search" color={color} size={26} />
                )
            }}
            />
            <Tab.Screen name="Profile" component={ProfileScreenStackNavigator} // profile screen has stack, initial page along with screen for editing profile
            // will need to do something similar for the SearchScreen so we can display the schedule screen
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({color}) => (
                    <Ionicons name="md-person" color={color} size={26} />
                )
            }}
            />
        </Tab.Navigator>
    )
}