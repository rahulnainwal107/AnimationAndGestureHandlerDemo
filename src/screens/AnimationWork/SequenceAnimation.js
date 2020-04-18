import React, {useEffect} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';

const SequenceAnimation = () => {
  let animatedValue = [];
  const arr = [];

  for (let i = 0; i < 500; i++) {
    arr.push(i);
  }

  arr.forEach((value) => {
    animatedValue[value] = new Animated.Value(0);
  });

  useEffect(() => {
    animate();
  });

  function animate() {
    const animations = arr.map((item) => {
      return Animated.timing(animatedValue[item], {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      });
    });
    Animated.sequence(animations).start();
  }

  const animations = arr.map((a, i) => {
    return (
      <Animated.View
        key={i}
        style={{
          opacity: animatedValue[a],
          height: 20,
          width: 20,
          backgroundColor: 'red',
          marginLeft: 3,
          marginTop: 3,
        }}
      />
    );
  });

  return <View style={styles.container}>{animations}</View>;
};

export default SequenceAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
