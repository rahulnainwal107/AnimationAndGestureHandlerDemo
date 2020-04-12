import React from 'react';
import {View, StyleSheet} from 'react-native';

import ButtonComponent from '../components/ButtonComponent';

const ButtonScreen = () => {
  return (
    <View style={styles.mainView}>
      <ButtonComponent onPress={null} buttonName="Test Button" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});

export default ButtonScreen;
