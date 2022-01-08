import React from "react";
import { View, Text } from "react-native";
import { Button } from "../library";

const DesignSystem = () => {
  return (
    <View style={{ padding: 20 }}>
      <Button text="Click me!" onPress={() => {}} />
      <Text style={{ fontFamily: "Montserrat", fontSize: 30 }}>Montserrat</Text>
    </View>
  );
};

export default DesignSystem;
