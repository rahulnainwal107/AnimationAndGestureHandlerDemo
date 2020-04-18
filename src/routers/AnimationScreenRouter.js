import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  ButtonsScreen,
  FadeAnimation,
  HeaderScrollAnimation,
  SpringAnimation,
  EasingDemo,
  AnimationUsingTiming,
  MultipleAnimationUsingTiming,
  ParallelAnimation,
  SequenceAnimation,
  StaggerAnimated,
  ImageScalingAnimation,
  ContinuesImageScalingAnimation,
  RippleAnimation,
  ContinuesRippleAnimation,
} from '../screens/AnimationWork/index';

const Stack = createStackNavigator();

export default function MainRouter() {
  return (
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
      <Stack.Screen
        name="ParallelAnimation"
        component={ParallelAnimation}
        options={{
          headerTransparent: false,
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="SequenceAnimation"
        component={SequenceAnimation}
        options={{
          headerTransparent: false,
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="StaggerAnimated"
        component={StaggerAnimated}
        options={{
          headerTransparent: false,
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ImageScalingAnimation"
        component={ImageScalingAnimation}
        options={{
          headerTransparent: false,
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ContinuesImageScalingAnimation"
        component={ContinuesImageScalingAnimation}
        options={{
          headerTransparent: false,
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="RippleAnimation"
        component={RippleAnimation}
        options={{
          headerTransparent: false,
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="ContinuesRippleAnimation"
        component={ContinuesRippleAnimation}
        options={{
          headerTransparent: false,
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
