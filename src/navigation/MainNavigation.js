/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {SplashScreen, FeedScreen, MapViewScreen } from '../screens/';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Splash" 
        component={SplashScreen} 
        options={{
            headerShown: false
        }} 
      />
      <Stack.Screen 
        name="Feed" 
        component={FeedScreen} 
        options={{
            headerShown: false
        }} 
      />
      <Stack.Screen 
        name="Map" 
        component={MapViewScreen} 
        options={{
            headerShown: false
        }} 
      />
    </Stack.Navigator>
  );
}

export default MainNavigation;