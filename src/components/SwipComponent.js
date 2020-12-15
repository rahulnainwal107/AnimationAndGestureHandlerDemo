import React from 'react';
import {View, Text, PanResponder, Animated, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SwipComponent = ({data, renderCard, renderNoMoreCards}) => {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      position.setValue({x: gesture.dx, y: gesture.dy});
    },
    onPanResponderRelease: (event, gesture) => {},
  });

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg'],
    });
    return {...position.getLayout(), transform: [{rotate: rotate}]};
  };

  return data.map((item, index) => {
    if (index === 0) {
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
