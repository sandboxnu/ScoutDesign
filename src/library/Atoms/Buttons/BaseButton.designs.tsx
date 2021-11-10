import React from "react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import { Button, Text } from "../../index";

storiesOf("Button", module)
  .addDecorator((getStory) => getStory())
  .add("with text", () => (
    <Button onPress={action("clicked-text")}>
      <Text ID="Hello">{text("Button text", "Hello Button")}</Text>
    </Button>
  ))
  .add("with some emoji", () => (
    <Button onPress={action("clicked-emoji")}>
      <Text ID="emojis">😀 😎 👍 💯</Text>
    </Button>
  ))
  .add("loading", () => (
    <Button onPress={action("loading")} loading>
      <Text ID="test">Test</Text>
    </Button>
  ));
