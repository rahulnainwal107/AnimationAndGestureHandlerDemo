import React from 'react';
import {View, StyleSheet} from 'react-native';

import ButtonComponent from '../components/ButtonComponent';

const ButtonScreen = (props) => {
  const {navigation} = props;

  const navigateToFadeAnimation = () => {
    navigation.navigate('FadeAnimation');
  };

  return (
    <View style={styles.mainView}>
      <ButtonComponent
        onPress={navigateToFadeAnimation}
        buttonName="Fade Animation"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});

export default ButtonScreen;
