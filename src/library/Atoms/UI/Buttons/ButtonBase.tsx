import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import theme from "../../../theme";
import {
  mapRadius,
  Pressable,
  PressableProps,
  StandardRadius,
} from "../../utility";
import Icon from "../Assets/Icon/Icon";
import Text from "../Text/Text";
import { IconPayload } from "../../../../icons";

export interface ButtonProps extends PressableProps {
  accessibilityLabel: string;
  text?: string;
  textColor?: keyof typeof theme.colors;
  backgroundColor?: keyof typeof theme.colors | "gradient";
  icon?: IconPayload;
}

type Props = ButtonProps & {
  alignSelf?: "flex-start";
  paddingVertical: keyof typeof theme.spacing;
  paddingHorizontal: keyof typeof theme.spacing;
  borderRadius: StandardRadius;
  textPadding?: keyof typeof theme.spacing;
  iconPadding: keyof typeof theme.spacing;
  iconSize: keyof typeof theme.assetSizes;
  children?: any;
};

const Button = ({
  accessibilityLabel,
  onPress,
  text,
  icon,
  backgroundColor = "brandAction",
  textColor = "white",
  borderRadius,
  textPadding,
  iconPadding,
  iconSize,
  children,
  ...props
}: Props) => {
  const gradient = backgroundColor === "gradient";
  if (gradient) textColor = "brandActionDark";

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      marginVertical="xs"
      backgroundColor={gradient ? undefined : backgroundColor}
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      overflow="hidden"
      borderRadius={mapRadius(borderRadius)}
      {...props}
    >
      {gradient && (
        <LinearGradient
          colors={["rgba(23, 161, 101, 0.095)", "rgba(104, 237, 180, 0.065)"]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.625, y: 0 }}
          style={StyleSheet.absoluteFill}
        />
      )}

      {!!icon && icon.isValid() && (
        <Icon icon={icon} color={textColor} size={iconSize} />
      )}
      {children ? (
        children
      ) : (
        <Text
          accessibilityLabel="button-text"
          color={textColor}
          preset="button"
          padding={textPadding}
          paddingLeft={icon ? iconPadding : undefined}
        >
          {text}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
