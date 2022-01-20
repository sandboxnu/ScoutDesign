import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import theme from "../../../theme";
import { Pressable, PressableProps } from "../../utility";
import Text from "../Text/Text";

interface BadgeProps extends PressableProps {
  accessibilityLabel: string;
  text?: string;
  color: "gradient" | keyof typeof theme.colors;
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  accessibilityLabel,
  onPress,
  text,
  color,
  ...props
}: BadgeProps) => {
  return (
    <Pressable
      alignSelf="flex-start"
      borderRadius={20}
      overflow="hidden"
      position="relative"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      backgroundColor={color !== "gradient" ? color : undefined}
      paddingVertical="micro"
      paddingHorizontal="s"
      {...props}
    >
      {color === "gradient" && (
        <LinearGradient
          colors={["rgba(23, 161, 101, 0.095)", "rgba(104, 237, 180, 0.065)"]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.625, y: 0 }}
          style={StyleSheet.absoluteFill}
        />
      )}
      <Text
        accessibilityLabel="button-text"
        color={color === "gradient" ? "brandActionDark" : "white"}
        preset="micro"
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default Badge;
