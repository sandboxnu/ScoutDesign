import React from "react";
import { Animated, Easing, TouchableOpacity, View } from "react-native";
import theme from "../../../theme";
import Icon, { IconPayload } from "../Assets/Icon/Icon";

export type CircleButtonProps = {
  accessibilityLabel: string;
  icon: IconPayload;
  onPress: any;
  backgroundColor: keyof typeof theme.colors;
  animated?: boolean;
};

const CircleButton = ({
  accessibilityLabel,
  backgroundColor,
  icon,
  onPress,
  animated,
}: CircleButtonProps) => {
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  let scaleValue = new Animated.Value(0);
  const cardScale = scaleValue.interpolate({
    inputRange: [0, 0.25, 0.5, 0.99, 1],
    outputRange: [1, 3, 25, 40, 1],
  });

  return (
    <View
      nativeID={accessibilityLabel}
      style={{
        position: "relative",
        alignSelf: "flex-start",
        marginVertical: theme.spacing.xs,
      }}
    >
      <AnimatedTouchable
        style={{
          height: 50,
          width: 50,
          borderRadius: 25,
          transform: [{ scale: cardScale }],
          backgroundColor: theme.colors[backgroundColor],
        }}
      />
      <AnimatedTouchable
        onPress={() => {
          scaleValue.setValue(0);
          animated &&
            Animated.timing(scaleValue, {
              toValue: 1,
              duration: 650,
              easing: Easing.linear,
              useNativeDriver: true,
            }).start();
          return setTimeout(() => {
            onPress();
          }, 300);
        }}
        style={[
          {
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: backgroundColor,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
          },
        ]}
      >
        <Icon icon={icon} color="white" size="m" />
      </AnimatedTouchable>
    </View>
  );
};

export default CircleButton;
