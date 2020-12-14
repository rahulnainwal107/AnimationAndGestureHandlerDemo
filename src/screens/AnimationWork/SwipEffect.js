import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  PanResponder,
  Animated,
} from 'react-native';

import SwipComponent from '../../components/SwipComponent';
import ButtonComponent from '../../components/ButtonComponent';
import Colors from '../../theme/Colors';

const DATA = [
  {
    id: 1,
    text: 'Card #1',
    uri: require('../../assets/a1.jpg'),
  },
  {
    id: 2,
    text: 'Card #2',
    uri: require('../../assets/a2.jpeg'),
  },
  {
    id: 3,
    text: 'Card #3',
    uri: require('../../assets/a3.jpeg'),
  },
  {
    id: 4,
    text: 'Card #4',
    uri: require('../../assets/a4.jpg'),
  },
  {
    id: 5,
    text: 'Card #5',
    uri: require('../../assets/a5.jpeg'),
  },
  {
    id: 6,
    text: 'Card #6',
    uri: require('../../assets/a6.jpeg'),
  },
  {
    id: 7,
    text: 'Card #7',
    uri: require('../../assets/a7.jpeg'),
  },
  {
    id: 8,
    text: 'Card #8',
    uri: require('../../assets/a8.jpeg'),
  },
];

const SwipEffect = () => {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      position.setValue({x: gesture.dx, y: gesture.dy});
    },
    onPanResponderRelease: (event, gesture) => {},
  });
  const renderItem = (item) => {
    return (
      <Animated.View
        key={item.id}
        style={[position.getLayout(), styles.cardContainer]}
        {...panResponder.panHandlers}>
        <Image source={item.uri} style={styles.imageStyle} />
        <Text style={styles.textStyle}>{item.text}</Text>
        <Text style={styles.textStyle}>I can customize the card further.</Text>
        <ButtonComponent
          buttonName="View Now!"
          buttonStyle={styles.buttonStyle}
        />
      </Animated.View>
    );
  };

  return (
    <View>
      <SwipComponent data={DATA} renderItem={renderItem} />
    </View>
  );
};

export default SwipEffect;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 5,
    shadowOpacity: 0.4,
    elevation: 3,
  },
  imageStyle: {width: '100%', height: 100, marginBottom: 10},
  textStyle: {
    marginBottom: 10,
  },
  buttonStyle: {
    margin: 0,
    backgroundColor: Colors.green,
  },
});
