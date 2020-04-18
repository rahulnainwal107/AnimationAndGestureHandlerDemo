import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AnimationScreenRouter from '../routers/AnimationScreenRouter';
import GestureHandlerScreenRouter from '../routers/GestureHandlerScreenRouter';
import Colors from '../theme/Colors';

const Tab = createBottomTabNavigator();

export default function BottomTabRouter() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route, navigation}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Animation') {
              iconName = '🚀';
            } else if (route.name === 'GestureHandler') {
              iconName = '✌️';
            } else {
              iconName = '😀';
            }
            return (
              <View>
                <Text>{iconName}</Text>
              </View>
            );
          },
        })}
        tabBarOptions={{
          showLabel: true,
          activeTintColor: Colors.red,
          inactiveTintColor: Colors.black,
          //labelStyle: {fontSize: Fonts.size.bottomTabTextSize},
        }}>
        <Tab.Screen name="Animation" component={AnimationScreenRouter} />
        <Tab.Screen
          name="GestureHandler"
          component={GestureHandlerScreenRouter}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
