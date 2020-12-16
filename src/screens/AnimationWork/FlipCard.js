import React from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';

import ButtonComponent from '../../components/ButtonComponent';
import Colors from '../../theme/Colors';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const FlipCard = () => {
  const animatedValue = new Animated.Value(0);

  const getFrontAnimationStyle = () => {
    const frontInterpolate = animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });
    return {transform: [{rotateY: frontInterpolate}]};
  };

  const getBackAnimationStyle = () => {
    const backInterpolate = animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    });
    return {
      transform: [{rotateY: backInterpolate}],
    };
  };

  const flipCard = () => {
    // Animated.timing(animatedValue, {
    //   toValue: 180,
    //   duration: 1000,
    //   useNativeDriver: false,
    // }).start();
    Animated.spring(animatedValue, {
      toValue: 180,
      //duration: 1000,
      tension: 8,
      friction: 10,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View>
        <Animated.View style={[getFrontAnimationStyle(), styles.flipCard]}>
          <Text style={styles.flipText}>This is front side.</Text>
        </Animated.View>
        <Animated.View
          style={[
            getBackAnimationStyle(),
            styles.flipCard,
            styles.flipCardBack,
          ]}>
          <Text style={styles.flipText}>This is back side.</Text>
        </Animated.View>
      </View>
      <ButtonComponent buttonName="Flip" onPress={flipCard} />
    </View>
  );
};

export default FlipCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flipCard: {
    height: SCREEN_HEIGHT / 3,
    width: SCREEN_WIDTH - 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey,
    backfaceVisibility: 'hidden',
    borderRadius: 5,
  },
  flipCardBack: {
    backgroundColor: Colors.red,
    position: 'absolute',
  },
  flipText: {
    textAlign: 'center',
  },
});
