import React from 'react';
import DepartList from './components/DepartList/DepartList';
import Flight from './components/Flight/Flight';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name="DepartList"
        component={DepartList}
      />
      <Stack.Screen
        name="Flight"
        component={Flight}
      />
    </Stack.Navigator>
  </NavigationContainer>
}