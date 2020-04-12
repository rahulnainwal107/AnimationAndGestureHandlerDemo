import React from 'react';
import {View, StyleSheet} from 'react-native';

import ButtonComponent from '../components/ButtonComponent';

const ButtonScreen = (props) => {
  const {navigation} = props;

  const navigateToFadeAnimation = () => {
    navigation.navigate('FadeAnimation');
  };

  const navigateToHeaderScrollAnimation = () => {
    navigation.navigate('HeaderScrollAnimation');
  };

  const navigateToSpringAnimation = () => {
    navigation.navigate('SpringAnimation');
  };

  return (
    <View style={styles.mainView}>
      <ButtonComponent
        onPress={navigateToFadeAnimation}
        buttonName="Fade Animation"
      />
      <ButtonComponent
        onPress={navigateToHeaderScrollAnimation}
        buttonName="Header Scroll Animation"
      />
      <ButtonComponent
        onPress={navigateToSpringAnimation}
        buttonName="Spring Animation"
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
