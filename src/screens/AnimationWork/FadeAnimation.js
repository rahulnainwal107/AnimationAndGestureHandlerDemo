import React, {useState, useEffect} from 'react';
import {Animated, Text, View, Easing} from 'react-native';

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  /***
   Animated API provides three type of animations :
   1 - Animated.decay() starts with an initial velocity and gradually slows to a stop.
   2 - Animated.spring() provides a basic spring physics model.
   3 - Animated.timing() animates a value over time using easing functions.
   */
  useEffect(() => {
    // Here we are using Animated.timing
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
      //easing: Easing.circle,
    }).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default FadeAnimation = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
      }}>
      <Text>
        Animated API provides three type of animations :{'\n'}1 -
        Animated.decay() starts with an initial velocity and gradually slows to
        a stop.{'\n'}2 - Animated.spring() provides a basic spring physics
        model.{'\n'}3 - Animated.timing() animates a value over time using
        easing functions.
      </Text>
      <Text>Here we are using Animated.timing</Text>
      <FadeInView
        style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
          Fading in
        </Text>
      </FadeInView>
    </View>
  );
};
