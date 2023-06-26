// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import ForgetPassword from './screens/forgetPassword';
import Registration from './screens/registration';
import DashBoard from './screens/dashboard';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
    console.log("navigation check")
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='loginScreen' 
                screenOptions={{ headerShown: false }}>
        <Stack.Screen name="loginScreen" component={Login} />
        <Stack.Screen name="forgetpasswordSrc" component={ForgetPassword} />
        <Stack.Screen name="registrationSrc" component={Registration} />
        <Stack.Screen name="dashboardSrc" component={DashBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}