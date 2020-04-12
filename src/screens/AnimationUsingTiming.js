import React, {useState, useEffect} from 'react';
import {View, Text, Animated, StyleSheet, Easing} from 'react-native';

const AnimationUsingTiming = () => {
  let spinValue = new Animated.Value(0);

  useEffect(() => {
    spinImage();
  }, []);

  const spinImage = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => spinImage());
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const opacityValue = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <View style={styles.mainView}>
      <Text style={{textAlign: 'center'}}>
        Circular animation using Animated.timing
      </Text>
      <View style={styles.containerView}>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{rotate: spin}],
            opacity: opacityValue,
          }}
          source={{
            uri:
              'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
          }}
        />
      </View>
    </View>
  );
};

export default AnimationUsingTiming;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  containerView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
