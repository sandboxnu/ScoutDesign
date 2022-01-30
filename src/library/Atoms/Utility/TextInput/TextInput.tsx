import React, { forwardRef } from "react";
import { TextInput as RNTextInput } from "react-native";
import { mapRadius } from "../Asset/Asset";
import { RadiusProps } from "../types";
import {
  ColorProps,
  useRestyle,
  spacing,
  border,
  backgroundColor,
  BorderProps,
  BackgroundColorProps,
  SpacingProps,
} from "@shopify/restyle";

import { Theme } from "../../../theme";

type TextInputProps = RadiusProps &
  React.ComponentPropsWithRef<typeof RNTextInput> &
  BorderProps<Theme> &
  SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme>;

const restyleFunctions = [spacing, border, backgroundColor];

const TextInputBase = forwardRef<RNTextInput, TextInputProps>(
  ({ ...rest }, ref) => {
    const props = useRestyle(restyleFunctions as any, rest);
    return <RNTextInput ref={ref} {...props} />;
  }
);

const TextInput = (props: TextInputProps) => {
  return (
    <TextInputBase
      borderTopLeftRadius={mapRadius(props?.topLeftRadius)}
      borderTopRightRadius={mapRadius(props?.topRightRadius)}
      borderBottomLeftRadius={mapRadius(props?.bottomLeftRadius)}
      borderBottomRightRadius={mapRadius(props?.bottomRightRadius)}
      borderRadius={mapRadius(props?.radius)}
      {...props}
    >
      {props.children}
    </TextInputBase>
  );
};

export default TextInput;
