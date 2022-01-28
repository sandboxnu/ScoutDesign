import React, { forwardRef } from "react";
import {
  ColorProps,
  useRestyle,
  spacing,
  border,
  backgroundColor,
  BorderProps,
  BackgroundColorProps,
} from "@shopify/restyle";
import { TextInput as RNTextInput } from "react-native";
import { Theme } from "../../../theme";

type TextInputProps = React.ComponentPropsWithRef<typeof RNTextInput> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme>;

const restyleFunctions = [spacing, border, backgroundColor];

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ ...rest }, ref) => {
    const props = useRestyle(restyleFunctions as any, rest);
    return <RNTextInput ref={ref} {...props} />;
  }
);

export default TextInput;
