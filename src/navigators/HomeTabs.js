import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { SearchScreen } from '../screens/SearchScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
                tabBarIcon: ({color})=>(<MaterialCommunityIcons name="home" color={color} size={26} />)
            }}
            />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}