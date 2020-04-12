import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  ButtonsScreen,
  FadeAnimation,
  HeaderScrollAnimation,
  SpringAnimation,
  EasingDemo,
  AnimationUsingTiming,
  MultipleAnimationUsingTiming,
} from '../screens/index';

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
        <Stack.Screen
          name="HeaderScrollAnimation"
          component={HeaderScrollAnimation}
          options={{
            headerTransparent: true,
            headerShown: true,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="SpringAnimation"
          component={SpringAnimation}
          options={{
            headerTransparent: false,
            headerShown: true,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="EasingDemo"
          component={EasingDemo}
          options={{
            headerTransparent: false,
            headerShown: true,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="AnimationUsingTiming"
          component={AnimationUsingTiming}
          options={{
            headerTransparent: false,
            headerShown: true,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="MultipleAnimationUsingTiming"
          component={MultipleAnimationUsingTiming}
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
