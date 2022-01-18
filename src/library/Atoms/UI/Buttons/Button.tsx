import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { TextProps } from "@shopify/restyle";
import theme, { Theme } from "../../../theme";
import { Pressable, PressableProps } from "../../utility";
import Text from "../Text/Text";
import Icon, { IconPayload } from "../Assets/Icon/Icon";
import CircleButton from "./CircleButton";

interface ButtonProps extends PressableProps {
  accessibilityLabel: string;
  text?: string;
  textColor?: keyof typeof theme.colors;
  backgroundColor?: keyof typeof theme.colors;
  icon?: IconPayload;
  fullWidth?: boolean;
  gradient?: boolean;
  animated?: boolean;
  children?: React.ReactNode;
}

type Props = ButtonProps & TextProps<Theme> & {};

const Button: React.FC<Props> = ({
  children,
  accessibilityLabel,
  onPress,
  text,
  icon,
  backgroundColor = "brandAction",
  textColor = "brandActionDark",
  animated,
  fullWidth,
  gradient,
  ...props
}: Props) => {
  if (icon && icon.isValid() && !text) {
    return (
      <CircleButton
        accessibilityLabel={accessibilityLabel}
        backgroundColor={backgroundColor}
        icon={icon}
        onPress={() => {}}
        animated={animated}
      />
    );
  }
  if (gradient) {
    return (
      <Pressable accessibilityLabel={accessibilityLabel} onPress={onPress}>
        <LinearGradient
          colors={["rgba(23, 161, 101, 0.095)", "rgba(104, 237, 180, 0.065)"]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.625, y: 0 }}
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            alignSelf: !fullWidth ? "flex-start" : undefined,
            height: 40,
            borderRadius: 20,
            paddingHorizontal: theme.spacing.l,
            marginVertical: theme.spacing.xs,
          }}
        >
          {!!icon && icon.isValid() && (
            <Icon icon={icon} color={textColor} size="sm" radius="rounded" />
          )}
          <Text
            accessibilityLabel="button-text"
            color={textColor}
            preset="button"
            style={{
              paddingLeft: icon ? 8 : undefined,
            }}
          >
            {text}
          </Text>
        </LinearGradient>
      </Pressable>
    );
  } else {
    return (
      <Pressable
        accessibilityLabel={accessibilityLabel}
        onPress={onPress}
        marginVertical="xs"
        paddingHorizontal="l"
        backgroundColor={backgroundColor}
        alignSelf={!fullWidth ? "flex-start" : undefined}
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        borderRadius={20}
        height={40}
        {...props}
      >
        {!!icon && icon.isValid() && (
          <Icon icon={icon} color="white" size="sm" radius="rounded" />
        )}
        <Text
          accessibilityLabel="button-text"
          color="white"
          preset="button"
          style={{
            paddingLeft: !!icon ? 8 : undefined,
          }}
        >
          {text}
        </Text>
      </Pressable>
    );
  }
};

export default Button;
