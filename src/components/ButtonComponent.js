import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import Colors from '../theme/Colors';

const ButtonComponent = ({onPress, buttonName, buttonStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, buttonStyle]}
      onPress={onPress}>
      <Text style={styles.textStyle}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    margin: 10,
    padding: 10,
    backgroundColor: Colors.white,
    elevation: 1,
    shadowOpacity: 0.5,
  },
  textStyle: {
    alignSelf: 'center',
  },
});

export default ButtonComponent;
