import { TextInputProps as RNTextInputProps } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Color } from "../../utility";
import TextInput from "../../utility/TextInput/TextInput";
import { FormFieldProps } from "../formTypes";
import { StackableProps } from "../../../Widgets/Stack/Stack";

interface TextInputProps extends FormFieldProps, StackableProps {
  placeholder?: string;
  noStyles?: boolean;
  type: "basic" | "primary";
}

type Props = TextInputProps & RNTextInputProps;

const Input = ({
  placeholder,
  onValueChange,
  value,
  disabled,
  valid,
  error,
  noStyles = false,
  type,
  isStackBottom,
  isStackTop,
  stackRadius,
  ...props
}: Props) => {
  const backgroundColorFromProps = (): Color | undefined => {
    if (disabled) {
      return "lightMintGrey";
    } else if (error) {
      return "lightRedGrey";
    } else if (noStyles) {
      return undefined;
    } else {
      return "white";
    }
  };

  if (type === "primary") {
    return (
      <TextInput
        {...props}
        borderRadius={7}
        borderBottomWidth={4}
        topRightRadius={isStackTop ? stackRadius : undefined}
        topLeftRadius={isStackTop ? stackRadius : undefined}
        bottomRightRadius={isStackBottom ? stackRadius : undefined}
        bottomLeftRadius={isStackBottom ? stackRadius : undefined}
        value={value}
        backgroundColor={backgroundColorFromProps()}
        borderWidth={0.5}
        borderColor={disabled ? "mediumGrey" : error ? "danger" : "mintGrey"}
        paddingVertical="m"
        paddingHorizontal="l"
        borderBottomColor={
          disabled ? "mediumGrey" : error ? "danger" : "brandAction"
        }
        borderBottomLeftRadius={0}
        borderBottomRightRadius={0}
        onChangeText={onValueChange}
        placeholder={placeholder}
        placeholderTextColor="#90A7A5"
        editable={!disabled}
        style={styles.input}
      />
    );
  }

  if (type === "basic") {
    return (
      <TextInput
        {...props}
        borderWidth={disabled || error ? 2 : noStyles ? undefined : 0.5}
        borderColor={disabled ? "mediumGrey" : error ? "danger" : "mintGrey"}
        borderRadius={noStyles ? undefined : 7}
        topRightRadius={isStackTop ? stackRadius : undefined}
        topLeftRadius={isStackTop ? stackRadius : undefined}
        bottomRightRadius={isStackBottom ? stackRadius : undefined}
        bottomLeftRadius={isStackBottom ? stackRadius : undefined}
        value={value}
        backgroundColor={backgroundColorFromProps()}
        paddingVertical="m"
        paddingHorizontal="l"
        onChangeText={onValueChange}
        placeholder={placeholder}
        placeholderTextColor="#90A7A5"
        editable={!disabled}
        style={styles.input}
      />
    );
  }

  return null;
};

const styles = StyleSheet.create({
  input: {
    fontSize: 17,
  },
});

export default Input;
