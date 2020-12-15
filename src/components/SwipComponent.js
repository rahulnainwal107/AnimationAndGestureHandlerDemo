import React, {useState} from 'react';
import {View, Text, PanResponder, Animated, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIP_THRESHOLD = SCREEN_WIDTH * 0.25;
const SWIP_OUT_DURATION = 250;

const SwipComponent = ({data, renderCard, renderNoMoreCards}) => {
  const [currentIndex, setCurrentState] = useState(0);
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      position.setValue({x: gesture.dx, y: gesture.dy});
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > SWIP_THRESHOLD) {
        forceSwipeOut('right');
      } else if (gesture.dx < -SWIP_THRESHOLD) {
        forceSwipeOut('left');
      } else {
        resetPosition();
      }
    },
  });

  const forceSwipeOut = (direction) => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: {x, y: 0},
      duration: SWIP_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => onSwipComplete());
  };

  const onSwipComplete = () => {
    position.setValue({x: 0, y: 0});
    setCurrentState(currentIndex + 1);
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg'],
    });
    return {...position.getLayout(), transform: [{rotate: rotate}]};
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: {x: 0, y: 0},
      useNativeDriver: false,
    }).start();
  };

  if (currentIndex >= data.length) {
    return renderNoMoreCards();
  }

  return data.map((item, index) => {
    if (index < currentIndex) {
      return null;
    }
    if (index === currentIndex) {
      return (
        <Animated.View
          key={item.id}
          style={getCardStyle()}
          {...panResponder.panHandlers}>
          {renderCard(item)}
        </Animated.View>
      );
    }
    return renderCard(item);
  });
};

export default SwipComponent;
