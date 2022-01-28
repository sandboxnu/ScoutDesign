import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import TextInput from "../../utility/TextInput/TextInput";
import { TextFieldProps } from "../formTypes";
// import Colors from "../../../constants/Colors";
// import Fonts from "../../../constants/Fonts";

const Input = ({
  placeholder,
  onInputChange,
  disabled,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    onInputChange(value);
  }, [value]);

  return (
    <TextInput
      value={value}
      backgroundColor="white"
      borderWidth={2}
      borderColor="mintGrey"
      paddingVertical="m"
      paddingHorizontal="l"
      borderRadius={7}
      onChangeText={setValue}
      placeholder={placeholder}
      {...props}
      editable={!disabled}
      placeholderTextColor="#382B14"
      style={!disabled ? styles.input : styles.disabledInput}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 25,
    paddingVertical: 18,
    fontSize: 18,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    // borderColor: Colors.purple,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,

    elevation: 3,
  },
  disabledInput: {
    padding: 8,
    fontSize: 18,
    borderRadius: 4,
    // backgroundColor: Colors.tabIconDefault,
    borderBottomWidth: 2,
    // borderBottomColor: Colors.tabIconDefault,
  },
});

export default Input;
