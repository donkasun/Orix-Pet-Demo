import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
