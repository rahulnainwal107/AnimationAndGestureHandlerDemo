import React, {useState, useEffect} from 'react';
import {Animated, Text, View, Image} from 'react-native';

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0.3)); // Initial value for opacity: 0

  /***
   Animated API provides three type of animations :
   1 - Animated.decay() starts with an initial velocity and gradually slows to a stop.
   2 - Animated.spring() provides a basic spring physics model.
   3 - Animated.timing() animates a value over time using easing functions.
   */
  useEffect(() => {
    // Here we are using Animated.spring
    Animated.spring(fadeAnim, {
      toValue: 1,
      friction: 1,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        transform: [{scale: fadeAnim}],
      }}>
      {props.children}
    </Animated.View>
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default SpringAnimation = () => {
  return (
    <View style={{justifyContent: 'center', flex: 1, marginHorizontal: 10}}>
      <Text>
        Animated API provides three type of animations :{'\n'}1 -
        Animated.decay() starts with an initial velocity and gradually slows to
        a stop.{'\n'}2 - Animated.spring() provides a basic spring physics
        model.{'\n'}3 - Animated.timing() animates a value over time using
        easing functions.
      </Text>
      <Text>Here we are using Animated.timing</Text>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FadeInView style={{width: 250, height: 50}}>
          <Image
            style={{
              width: 227,
              height: 200,
            }}
            source={{
              uri:
                'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
            }}
          />
        </FadeInView>
      </View>
    </View>
  );
};
