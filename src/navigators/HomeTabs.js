import React, { useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { SearchScreen } from '../screens/SearchScreen'
import { Ionicons } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator()

export const HomeTabs = ()=>{

    return (
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#000000"
        inactiveColor="#828282"
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
            <Tab.Screen name="Search" component={SearchScreen} 
            options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({color}) => (
                    <Ionicons name="md-search" color={color} size={26} />
                )
            }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} 
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