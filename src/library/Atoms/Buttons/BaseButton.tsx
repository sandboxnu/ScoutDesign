import React from "react";
import { BoxProps, TextProps } from "@shopify/restyle";
import { ActivityIndicator, TouchableHighlight } from "react-native";
import { Theme } from "../../theme";
import Box from "../Box/Box";
import Text from "../Text/Text";

type ButtonProps = {
  onPress: () => void;
  loading?: boolean;
  text: string;
  textProps?: TextProps<Theme>;
} & Partial<BoxProps<Theme>>;

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  loading,
  text,
  textProps,
  ...props
}) => (
  <TouchableHighlight underlayColor="transparent" onPress={onPress}>
    <Box
      py="s"
      px="m"
      backgroundColor="primary"
      alignSelf="center"
      borderRadius={20}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text variant="alt" ID="button-text">
          {text}
        </Text>
      )}
    </Box>
  </TouchableHighlight>
);

export default Button;
