import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  ButtonsScreen,
  StateOfGestureHandler,
  PanGestureHandler,
} from '../screens/GestureHandlerWork/index';

const Stack = createStackNavigator();

export default function GestureHandlerScreenRouter() {
  return (
    <Stack.Navigator initialRouteName="ButtonScreen">
      <Stack.Screen
        name="ButtonScreen"
        component={ButtonsScreen}
        options={{headerTransparent: false, headerShown: true}}
      />
      <Stack.Screen
        name="StateOfGestureHandler"
        component={StateOfGestureHandler}
        options={{
          headerTransparent: false,
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="PanGestureHandler"
        component={PanGestureHandler}
        options={{
          headerTransparent: false,
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
