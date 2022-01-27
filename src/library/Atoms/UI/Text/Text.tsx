import React from "react";
import { createText, TextProps } from "@shopify/restyle";
import { Theme } from "../../../theme";

const Text = createText<Theme>();

export type TextAlignmentWithinContainer = "right" | "center" | "left";

type weights = "bold" | "regular" | "light";
type sizes = "s" | "m" | "l";
type presets =
  | "h2"
  | "h1"
  | "subheading"
  | "label"
  | "label-light"
  | "sublabel"
  | "sublabel-light"
  | "button"
  | "micro";

type shadows = "strong" | "medium" | "subtle";

type textProps = React.ComponentProps<typeof Text> & {
  accessibilityLabel?: string;
  size?: sizes;
  weight?: weights;
  preset?: presets;
  shadow?: shadows;
} & TextProps<Theme>;

const ScoutText = ({
  accessibilityLabel,
  size = "m",
  weight = "regular",
  preset,
  shadow,
  children,
  ...rest
}: textProps) => {
  return (
    <Text
      variant={preset ? preset : `${size}-${weight}`}
      nativeID={accessibilityLabel}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default ScoutText;
