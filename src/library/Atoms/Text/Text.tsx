import React, { useEffect, useState } from "react";
import { createText } from "@shopify/restyle";
import { Theme } from "../../../theme";

const Text = createText<Theme>();
// import Colors from "../../../constants/Colors";

const presets = {
  micro: { fontSize: 10 },
  light: { fontSize: 16 },
  base: { fontSize: 16 },
  alt: { fontSize: 16 },
  lg: { fontSize: 16 },
  heading: { fontSize: 20 },
  title: { fontSize: 26 },
  "heading-alt": { fontSize: 20 },
  "title-alt": { fontSize: 26 },
};

// const colors = {
//   brand: { color: Colors.darkGreen },
//   base: { color: Colors.darkBrown },
//   gray: { color: Colors.darkGray },
//   white: { color: "#fff" },
// };

type textSizePresets =
  | "micro"
  | "base"
  | "alt"
  | "lg"
  | "heading"
  | "title"
  | "heading-alt"
  | "title-alt";

type textColors = "brand" | "base" | "gray" | "white";

export type textProps = {
  ID: string;
  preset?: textSizePresets;
  color?: textColors;
  style?: any;
  children?: any;
};

const ScoutText = ({
  ID,
  preset = "base",
  color = "base",
  style,
  children,
}: textProps) => {
  return (
    <Text nativeID={ID} style={[presets[preset], style]}>
      {children}
    </Text>
  );
};

export default ScoutText;
