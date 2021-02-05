import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginScreen} from './src/screens/LoginScreen';
import {HonorCodeScreen} from './src/screens/HonorCodeScreen';
import {HomeTabs} from './src/navigators/HomeTabs';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{title: "Southwestern Higher Learning"}}/>
        <Stack.Screen name="HonorCodeScreen" component={HonorCodeScreen} options={{title: "Honor Code"}}/>
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;