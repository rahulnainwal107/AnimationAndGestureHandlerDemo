import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import ButtonComponent from '../../components/ButtonComponent';

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

  const navigateToImageScalingAnimation = () => {
    navigation.navigate('ImageScalingAnimation');
  };

  const navigateToContinuesImageScalingAnimation = () => {
    navigation.navigate('ContinuesImageScalingAnimation');
  };

  const navigateToRippleAnimation = () => {
    navigation.navigate('RippleAnimation');
  };

  const navigateToContinuesRippleAnimation = () => {
    navigation.navigate('ContinuesRippleAnimation');
  };

  const navigateToMoveBall = () => {
    navigation.navigate('MoveBall');
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
        buttonName="Sequence Animation"
      />
      <ButtonComponent
        onPress={navigateToStaggerAnimated}
        buttonName="Stagger Animated"
      />
      <ButtonComponent
        onPress={navigateToImageScalingAnimation}
        buttonName="Image Scaling Animation"
      />
      <ButtonComponent
        onPress={navigateToContinuesImageScalingAnimation}
        buttonName="Continues Image Scaling Animation"
      />
      <ButtonComponent
        onPress={navigateToRippleAnimation}
        buttonName="Ripple Animation"
      />
      <ButtonComponent
        onPress={navigateToContinuesRippleAnimation}
        buttonName="Continues Ripple Animation"
      />
      <ButtonComponent onPress={navigateToMoveBall} buttonName="Move Ball" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});

export default ButtonScreen;
