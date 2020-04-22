import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import ButtonComponent from '../../components/ButtonComponent';

const ButtonsScreen = ({navigation}) => {
  const navigateToStateOfGestureHandler = () => {
    navigation.navigate('StateOfGestureHandler');
  };

  const navigateToPanGestureHandler = () => {
    navigation.navigate('PanGestureHandler');
  };

  return (
    <ScrollView>
      <ButtonComponent
        onPress={navigateToStateOfGestureHandler}
        buttonName="State Of GestureHandler"
      />
      <ButtonComponent
        onPress={navigateToPanGestureHandler}
        buttonName="Pan GestureHandler"
      />
    </ScrollView>
  );
};

export default ButtonsScreen;
