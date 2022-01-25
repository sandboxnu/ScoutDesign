import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { TextProps } from "@shopify/restyle";
import theme, { Theme } from "../../../theme";
import { Pressable, PressableProps } from "../../utility";
import Icon from "../Assets/Icon/Icon";
import Text from "../Text/Text";
import { IconPayload } from "../../../../icons";

interface ButtonProps extends PressableProps {
  accessibilityLabel: string;
  text?: string;
  textColor?: keyof typeof theme.colors;
  backgroundColor?: keyof typeof theme.colors | "gradient";
  icon?: IconPayload;
  fullWidth?: boolean;
  animated?: boolean;
  children?: React.ReactNode;
}

type Props = ButtonProps & TextProps<Theme>;

const Button: React.FC<Props> = ({
  children,
  accessibilityLabel,
  onPress,
  text,
  icon,
  backgroundColor = "brandAction",
  textColor = "white",
  animated,
  fullWidth,
  ...props
}: Props) => {
  const gradient = backgroundColor === "gradient";
  if (gradient) textColor = "brandActionDark";

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      marginVertical="xs"
      paddingHorizontal="l"
      backgroundColor={gradient ? undefined : backgroundColor}
      alignSelf={!fullWidth ? "flex-start" : undefined}
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      borderRadius={20}
      height={40}
      overflow="hidden"
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
        <Icon icon={icon} color={textColor} size="xs" />
      )}
      <Text
        accessibilityLabel="button-text"
        color={textColor}
        preset="button"
        paddingLeft={icon ? "m" : undefined}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
