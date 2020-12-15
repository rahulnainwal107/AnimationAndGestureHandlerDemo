import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

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
  const renderCard = (item) => {
    return (
      <View key={item.id} style={styles.cardContainer}>
        <Image source={item.uri} style={styles.imageStyle} />
        <Text style={styles.textStyle}>{item.text}</Text>
        <Text style={styles.textStyle}>I can customize the card further.</Text>
        <ButtonComponent
          buttonName="View Now!"
          buttonStyle={styles.buttonStyle}
        />
      </View>
    );
  };

  const renderNoMoreCards = () => {
    return (
      <Card title="All Done!">
        <Text style={{marginBottom: 10}}>There's no more content here!</Text>
        <Button backgroundColor="#03A9F4" title="Get more!" />
      </Card>
    );
  };

  return (
    <View>
      <SwipComponent
        data={DATA}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
      />
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
