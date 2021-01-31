import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LoginScreen} from './src/screens/LoginScreen';
import {HonorCodeScreen} from './src/screens/HonorCodeScreen';
import {HomeTabs} from './src/navigators/HomeTabs';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{title: "Log in"}}/>
        <Stack.Screen name="HonorCodeScreen" component={HonorCodeScreen} options={{title: "Honor Code"}}/>
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;