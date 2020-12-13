import React, {useEffect} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';

import Colors from '../../theme/Colors';

const MoveBall = () => {
  const position = new Animated.ValueXY(0, 0);

  useEffect(() => {
    Animated.spring(position, {
      toValue: {x: 200, y: 400},
      useNativeDriver: false,
    }).start();
  }, []);

  return <Animated.View style={[position.getLayout(), styles.ballContainer]} />;
};

export default MoveBall;

const styles = StyleSheet.create({
  ballContainer: {
    height: 60,
    width: 60,
    backgroundColor: Colors.black,
    margin: 10,
    borderRadius: 30,
  },
});
