import React from 'react';
import {View, Text} from 'react-native';

const SwipComponent = ({data, renderItem}) => {
  return data.map((item, index) => renderItem(item));
};

export default SwipComponent;
