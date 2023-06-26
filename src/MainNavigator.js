// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
    console.log("navigation check")
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='loginScreen' 
                screenOptions={{ headerShown: false }}>
        <Stack.Screen name="loginScreen" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}