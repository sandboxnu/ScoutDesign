import React, { useEffect, useState } from "react";
import { useTheme, createText, TextProps } from "@shopify/restyle";
import { Theme } from "../../../theme";

const Text = createText<Theme>();

type weights = "black" | "bold" | "regular" | "light";
type sizes = "xs" | "sm" | "md" | "lg";
type presets = "h3" | "h2" | "h1" | "label" | "input" | "button" | "micro";

type textProps = React.ComponentProps<typeof Text> & {
  accessibilityLabel: string;
  size?: sizes;
  weight?: weights;
  preset?: presets;
} & TextProps<Theme>;

const ScoutText = ({
  accessibilityLabel,
  size = "md",
  weight = "regular",
  preset,
  children,
  color,
  style,
}: textProps) => {
  const theme = useTheme<Theme>();

  return (
    <Text
      style={[color ? { color: theme.colors[color] } : undefined, style]}
      variant={preset ? preset : `${size}-${weight}`}
      nativeID={accessibilityLabel}
    >
      {children}
    </Text>
  );
};

export default ScoutText;
