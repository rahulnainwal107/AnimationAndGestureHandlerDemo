import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ButtonsScreen from '../screens/ButtonsScreen';

const Stack = createStackNavigator();

export default function MainRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'ButtonScreen'}
          component={ButtonsScreen}
          options={{headerTransparent: false, headerShown: true}}
        />
        {/* <Stack.Screen
          name={'OrderDetail'}
          component={OrderDetailScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: true,
            headerBackTitleVisible: false,
            headerLeft: ({onPress, label, labelStyle}) => (
              <HeaderLeftComponent onPress={onPress} />
            ),
          }}
        />
        <Stack.Screen
          name={'CollectionDetails'}
          component={CollectionsScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: true,
            headerBackTitleVisible: false,
            headerLeft: ({onPress, label, labelStyle}) => (
              <HeaderLeftComponent onPress={onPress} />
            ),
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
