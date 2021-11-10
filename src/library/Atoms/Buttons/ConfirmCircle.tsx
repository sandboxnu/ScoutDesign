import React, {useEffect} from 'react';
import {Animated, Easing, Text, Alert, TouchableOpacity} from 'react-native';
import Colors from '../../../src/constants/Colors';

export type ButtonProps = {
  ID: string;
  color: string;
  icon: any;
  onPress: any;
  primaryView: string;
  toolbar: boolean;
}

const ConfirmCircle = ({color, icon, onPress, primaryView, toolbar}: ButtonProps) => {
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  let scaleValue = new Animated.Value(0);
  const cardScale = scaleValue.interpolate({
    inputRange: [0, 0.25, 0.5, 0.99, 1],
    outputRange: [1, 3, 25, 40, 1],
  });

  return (
    <>
      <AnimatedTouchable
        style={{
          padding: 26,
          borderRadius: 26,
          transform: [{scale: cardScale}],
          backgroundColor: Colors.green,
          position: 'absolute',
          bottom: toolbar ? 55 : 15,
          right: 15,
        }}
      />
      <AnimatedTouchable
        onPress={() => {
          scaleValue.setValue(0);
          !primaryView &&
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 650,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start();
          return setTimeout( () => { onPress(); }, 300);
        }}
        style={[
          {
            height: 52,
            width: 52,
            borderRadius: 26,
            backgroundColor: Colors.yellow,
            justifyContent: 'center',
            alignItems: 'center',
          },
          !!color ? {backgroundColor: color} : undefined,
          {position: 'absolute', bottom: toolbar ? 55 : 15, right: 15},
        ]}>
        {icon}
      </AnimatedTouchable>
    </>
  );
};

export default ConfirmCircle;
