import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { default as Text, textProps } from "./Text";

const testTextProps: textProps = {
  ID: "test-text",
  preset: "title-alt",
  color: "base",
};

storiesOf("Text", module)
  .add("default", () => <Text {...testTextProps}>Base test</Text>)
  .add("brand", () => (
    <Text {...testTextProps} color="brand">
      Brand heading
    </Text>
  ))
  .add("gray heading", () => (
    <Text {...testTextProps} preset="heading" color="gray">
      Heading
    </Text>
  ));
