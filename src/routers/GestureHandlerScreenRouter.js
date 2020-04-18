import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ButtonsScreen} from '../screens/GestureHandlerWork/index';

const Stack = createStackNavigator();

export default function GestureHandlerScreenRouter() {
  return (
    <Stack.Navigator initialRouteName="ButtonScreen">
      <Stack.Screen
        name="ButtonScreen"
        component={ButtonsScreen}
        options={{headerTransparent: false, headerShown: true}}
      />
    </Stack.Navigator>
  );
}
