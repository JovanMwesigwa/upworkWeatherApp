/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppText from './src/components/AppText';
import AppScreen from './src/components/AppScreen';
import MainNavigation from './src/navigation/MainNavigation'


const App = () => {

  return (
    <NavigationContainer>
      <AppScreen>
        <MainNavigation />
      </AppScreen>
    </NavigationContainer>
  );
};


export default App;
