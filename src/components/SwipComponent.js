import React from 'react';
import {View, Text, PanResponder, Animated} from 'react-native';

const SwipComponent = ({data, renderCard, renderNoMoreCards}) => {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      position.setValue({x: gesture.dx, y: gesture.dy});
    },
    onPanResponderRelease: (event, gesture) => {},
  });

  return data.map((item, index) => {
    if (index === 0) {
      return (
        <Animated.View
          key={item.id}
          style={[position.getLayout()]}
          {...panResponder.panHandlers}>
          {renderCard(item)}
        </Animated.View>
      );
    }
    return renderCard(item);
  });
};

export default SwipComponent;
