import React from 'react';
import {View, Text, Animated, StyleSheet, Easing, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Colors from '../theme/Colors';

const ContinuesRippleAnimation = () => {
  const animatedValue = new Animated.Value(0);

  let color1, color2;

  const randomColor1 = () => {
    return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255,
    )},${Math.floor(Math.random() * 255)})`;
  };

  const randomColor2 = () => {
    console.log('2');
    return `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255,
    )},${Math.floor(Math.random() * 255)},${0.1})`;
  };

  const animated = () => {
    animatedValue.setValue(0);
    // randomColor1();
    // randomColor2();
    return Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 2000,
        Easing: Easing.ease,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 2000,
        Easing: Easing.ease,
        useNativeDriver: false,
      }),
    ]).start(() => animated());
  };

  const scaleX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2],
  });

  const scaleY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2],
  });
  const scaleXImage = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5],
  });

  const scaleYImage = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5],
  });
  console.table(color1, color2);
  return (
    <View style={styles.mainView}>
      <Animated.View
        style={[
          styles.containerView,
          {
            transform: [{scaleX: scaleX}, {scaleY: scaleY}],
            // opacity: animatedValue.interpolate({
            //   inputRange: [0, 0.4, 0.8, 1],
            //   outputRange: [1, 0.7, 0.4, 0],
            // }),
            backgroundColor: animatedValue.interpolate({
              inputRange: [0, 1],
              //outputRange: ['#028C26', '#C4F9D2'],
              //outputRange: [color1, color2],
              outputRange: [randomColor1(), randomColor2()],
            }),
          },
        ]}>
        <Animated.Image
          source={require('../assets/cat.jpg')}
          style={[
            styles.imageStyle,
            {
              transform: [{scaleX: scaleXImage}, {scaleY: scaleYImage}],
              opacity: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1],
              }),
            },
          ]}
        />
      </Animated.View>
      <TouchableOpacity style={styles.buttonStyle} onPress={animated}>
        <Text style={styles.buttonTextStyle}>Click To Start Animation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContinuesRippleAnimation;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerView: {
    height: 105,
    width: 105,
    borderRadius: 52.5,
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: Colors.red,
  },
  buttonStyle: {
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  buttonTextStyle: {
    alignItems: 'center',
    color: 'white',
  },
});
