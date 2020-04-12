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

  const navigateToEasingDemo = () => {
    navigation.navigate('EasingDemo');
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
      <ButtonComponent
        onPress={navigateToEasingDemo}
        buttonName="Easing Demo"
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
