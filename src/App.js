import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator, HomeNavigator} from './navigation/index';

const authenticated = false;
const App = () => {
  return (
    <NavigationContainer>
      {!authenticated ? AuthNavigator() : HomeNavigator()}
    </NavigationContainer>
  );
};

export default App;
