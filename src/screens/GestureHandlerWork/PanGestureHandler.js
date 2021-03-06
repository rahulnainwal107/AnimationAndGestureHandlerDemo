import React from 'react';
import {View, Text, Animated, Dimensions} from 'react-native';

const circleRadius = 30;
const windowWidth = Dimensions.get('window').width;

const PanGestureHandler = () => {
  const touchX = new Animated.Value(windowWidth / 2 - circleRadius);
  const onPanGestureEvent = Animated.event([{nativeEvent: {x: this._touchX}}], {
    useNativeDriver: true,
  });
  return (
    <PanGestureHandler onGestureEvent={onPanGestureEvent}>
      <Animated.View
        style={{
          height: 150,
          justifyContent: 'center',
          backgroundColor: 'skyblue',
        }}>
        <Animated.View
          style={[
            {
              backgroundColor: '#42a5f5',
              borderRadius: circleRadius,
              height: circleRadius * 2,
              width: circleRadius * 2,
            },
            {
              transform: [
                {
                  translateX: Animated.add(
                    touchX,
                    new Animated.Value(-circleRadius),
                  ),
                },
              ],
            },
          ]}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default PanGestureHandler;
