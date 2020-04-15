import React, {useEffect} from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Easing,
} from 'react-native';

const ContinuesImageScalingAnimation = () => {
  const animatedValue = new Animated.Value(0);

  //   useEffect(() => {
  //     animateImage();
  //   }, []);

  const animateImage = () => {
    Animated.sequence([
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
    ]).start(() => animateImage());
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.containerView}>
        <Animated.Image
          source={require('../assets/cat.jpg')}
          style={[
            styles.imageStyle,
            {
              transform: [
                // Apply if translating to different position
                // {
                //   translateX: animatedValue.interpolate({
                //     inputRange: [0, 1],
                //     outputRange: [0, 1],
                //   }),
                // },
                // {
                //   translateY: animatedValue.interpolate({
                //     inputRange: [0, 1],
                //     outputRange: [0, 1],
                //   }),
                // },
                {
                  scaleX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 5],
                  }),
                },
                {
                  scaleY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 5],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
      <TouchableOpacity style={styles.buttonStyle} onPress={animateImage}>
        <Text style={styles.buttonTextStyle}>Continue Image Animation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContinuesImageScalingAnimation;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerView: {
    height: 500,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
