import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginScreen} from './src/screens/LoginScreen';
import {HonorCodeScreen} from './src/screens/HonorCodeScreen';
import {HomeTabs} from './src/navigators/HomeTabs';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import ProviderComponent from './src/providers/UserContextProvider'

const Stack = createStackNavigator();

function App() {
  let [loaded] = Font.useFonts({
    ionicons: Ionicons.font['ionicons']
  })

  
  if(!loaded){
    return <AppLoading />
  } else {
    return (
      <ProviderComponent>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{title: "Southwestern Higher Learning", headerStyle:{backgroundColor: '#ffcd20'}}}/>
          <Stack.Screen name="HonorCodeScreen" component={HonorCodeScreen} options={{title: "Honor Code", headerStyle:{backgroundColor: '#ffcd20'}}}/>
          <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
      </ProviderComponent>
    );
  }
  
} 
export default App;