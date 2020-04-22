import React from 'react';
import {View, Text, Alert} from 'react-native';
import {State, LongPressGestureHandler} from 'react-native-gesture-handler';

const StateOfGestureHandler = () => {
  const _handleStateChange = ({nativeEvent}) => {
    if (nativeEvent.state === State.ACTIVE) {
      Alert.alert('ACTIVE');
    }
    if (nativeEvent.state === State.ACTIVE) {
      Alert.alert('ACTIVE');
    } else if (nativeEvent.state === State.UNDETERMINED) {
      Alert.alert('UNDETERMINED');
    } else if (nativeEvent.state === State.FAILED) {
      Alert.alert('FAILED');
    } else if (nativeEvent.state === State.END) {
      Alert.alert('END');
    } else if (nativeEvent.state === State.BEGAN) {
      Alert.alert('BEGAN');
    } else {
      Alert.alert('CANCELLED');
    }
  };

  return (
    <>
      <Text>A handler state can be one of them :</Text>
      <Text>1-UNDETERMINED</Text>
      <Text>2-FAILED</Text>
      <Text>3-BEGAN</Text>
      <Text>4-CANCELLED</Text>
      <Text>5-ACTIVE</Text>
      <Text>6-END</Text>
      <LongPressGestureHandler onHandlerStateChange={_handleStateChange}>
        <Text style={{padding: 10, backgroundColor: 'green'}}>Long Press</Text>
      </LongPressGestureHandler>
    </>
  );
};
export default StateOfGestureHandler;
