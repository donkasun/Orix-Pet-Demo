import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/Authentication/Login';
import SignupScreen from '../screens/Authentication/Signup';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
