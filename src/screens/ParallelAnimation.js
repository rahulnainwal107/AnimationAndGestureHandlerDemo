import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableHighlight,
  Easing,
} from 'react-native';

const ParallelAnimation = () => {
  let animatedValue1 = new Animated.Value(0);
  let animatedValue2 = new Animated.Value(0);
  let animatedValue3 = new Animated.Value(0);

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    animatedValue1.setValue(0);
    animatedValue2.setValue(0);
    animatedValue3.setValue(0);

    const createAnimation = function (value, duration, easing, delay = 0) {
      return Animated.timing(value, {
        toValue: 1,
        duration,
        easing,
        delay,
        useNativeDriver: false,
      });
    };
    Animated.parallel([
      createAnimation(animatedValue1, 2000, Easing.ease),
      createAnimation(animatedValue2, 1000, Easing.ease, 1000),
      createAnimation(animatedValue3, 1000, Easing.ease, 2000),
    ]).start();
  };

  const scaleText = animatedValue1.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 2],
  });
  const spinText = animatedValue2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });
  const introButton = animatedValue3.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 400],
  });

  return (
    <View style={[styles.mainView]}>
      <Animated.View style={{transform: [{scale: scaleText}]}}>
        <Text>Welcome</Text>
      </Animated.View>
      <Animated.View style={{marginTop: 20, transform: [{rotate: spinText}]}}>
        <Text style={{fontSize: 20}}>to the App!</Text>
      </Animated.View>
      <Animated.View style={{top: introButton, position: 'absolute'}}>
        <TouchableHighlight onPress={animate.bind(this)} style={styles.button}>
          <Text style={{color: 'black', fontSize: 20}}>
            Click Here To Start
          </Text>
        </TouchableHighlight>
      </Animated.View>
    </View>
  );
};

export default ParallelAnimation;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
