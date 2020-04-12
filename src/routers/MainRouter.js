import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ButtonsScreen from '../screens/ButtonsScreen';
import FadeAnimation from '../screens/FadeAnimation';

const Stack = createStackNavigator();

export default function MainRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ButtonScreen">
        <Stack.Screen
          name="ButtonScreen"
          component={ButtonsScreen}
          options={{headerTransparent: false, headerShown: true}}
        />
        <Stack.Screen
          name="FadeAnimation"
          component={FadeAnimation}
          options={{
            headerTransparent: false,
            headerShown: true,
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
