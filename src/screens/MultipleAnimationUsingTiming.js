import React, {useEffect} from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Easing,
  Dimensions,
} from 'react-native';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const MultipleAnimationUsingTiming = () => {
  let animatedValue = new Animated.Value(0);

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => animate());
  };

  const marginLeft = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });
  const opacity = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });
  const movingMargin = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 300, 0],
  });
  const textSize = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [18, 32, 18],
  });
  const rotateX = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '180deg', '0deg'],
  });
  const scaleXRotation = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, screenWidth - 60, 0],
  });

  return (
    <View style={styles.mainView}>
      <Text style={{alignSelf: 'center'}}>lksdkl</Text>
      <View style={styles.container}>
        <Animated.View
          style={{
            marginLeft,
            height: 30,
            width: 40,
            backgroundColor: 'red',
          }}
        />
        <Animated.View
          style={{
            opacity,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: 'blue',
          }}
        />
        <Animated.View
          style={{
            marginLeft: movingMargin,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: 'orange',
          }}
        />
        <Animated.Text
          style={{
            fontSize: textSize,
            marginTop: 10,
            color: 'green',
          }}>
          Animated Text!
        </Animated.Text>
        <Animated.View
          style={{
            transform: [{rotateX}],
            marginTop: 50,
            height: 30,
            width: 40,
            backgroundColor: 'black',
          }}>
          <Text style={{color: 'white'}}>Hello from TransformX</Text>
        </Animated.View>
        <Animated.View
          style={{
            marginLeft: scaleXRotation,
            height: 60,
            width: 60,
            borderRadius: 30,
            backgroundColor: 'skyblue',
            justifyContent: 'center',
          }}>
          <Text style={{alignSelf: 'center'}}>HELLO</Text>
        </Animated.View>
      </View>
    </View>
  );
};
export default MultipleAnimationUsingTiming;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 150,
  },
});
