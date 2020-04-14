import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

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

  const navigateToAnimationUsingTiming = () => {
    navigation.navigate('AnimationUsingTiming');
  };

  const navigateToMultipleAnimationUsingTiming = () => {
    navigation.navigate('MultipleAnimationUsingTiming');
  };

  const navigateToParallelAnimation = () => {
    navigation.navigate('ParallelAnimation');
  };

  const navigateToSequenceAnimation = () => {
    navigation.navigate('SequenceAnimation');
  };

  const navigateToStaggerAnimated = () => {
    navigation.navigate('StaggerAnimated');
  };

  return (
    <ScrollView style={styles.mainView}>
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
      <ButtonComponent
        onPress={navigateToAnimationUsingTiming}
        buttonName="Animation Using Timing"
      />
      <ButtonComponent
        onPress={navigateToMultipleAnimationUsingTiming}
        buttonName="Multiple Animation Using Timing"
      />
      <ButtonComponent
        onPress={navigateToParallelAnimation}
        buttonName="Parallel Animation"
      />
      <ButtonComponent
        onPress={navigateToSequenceAnimation}
        buttonName="SequenceAnimation"
      />
      <ButtonComponent
        onPress={navigateToStaggerAnimated}
        buttonName="StaggerAnimated"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});

export default ButtonScreen;
