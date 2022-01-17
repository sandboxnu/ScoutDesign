import React from "react";
import { View, ScrollView } from "react-native";
import Constants from "expo-constants";
import {
  MaterialCommunityIcons,
  Foundation,
  Ionicons,
  EvilIcons,
} from "@expo/vector-icons";

import { Button, LineItem, Text, Icon, Image } from "../library";
import { IconPayload } from "../library/Atoms/UI/Assets/Icon/Icon";

const DesignSystem = () => {
  const boldPlus = new IconPayload({
    name: "plus",
    component: (props) => <Foundation {...props} />,
  });

  const thinPlus = new IconPayload({
    name: "plus",
    component: (props) => <MaterialCommunityIcons {...props} />,
  });

  const trash = new IconPayload({
    name: "trash",
    component: (props) => <Ionicons {...props} />,
  });

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 20,
        paddingBottom: 180,
      }}
    >
      <Text accessibilityLabel="ScoutDesign-heading-1" preset="h1">
        Heading 1
      </Text>
      <Text accessibilityLabel="ScoutDesign-heading-2" preset="h2">
        Heading 2
      </Text>

      <Text accessibilityLabel="home-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus
        diam et sagittis fringilla. Ut volutpat purus id efficitur dictum.
        Mauris metus sem, accumsan a sollicitudin sit amet, rutrum quis libero.
        Aenean ultricies tincidunt auctor. Pellentesque vehicula consectetur
        orci, tincidunt cursus nunc tempor ultricies. Cras pulvinar porta
        sagittis. Mauris semper nunc eget nisi lobortis, eu scelerisque ligula
        lobortis.
      </Text>

      <Text accessibilityLabel="Micro example" preset="micro">
        Micro
      </Text>
      <Button
        accessibilityLabel="solid-submit"
        text="Submit"
        fullWidth
        onPress={() => {}}
      />
      <Button
        accessibilityLabel="gradient-full-width"
        text="Confirm"
        fullWidth
        gradient
        onPress={() => {}}
      />
      <Button
        accessibilityLabel="solid-delete"
        text="Delete"
        icon={trash}
        backgroundColor="danger"
        onPress={() => {}}
      />
      <Button
        accessibilityLabel="solid-add-location"
        text="Location"
        icon={boldPlus}
        onPress={() => {}}
      />
      <Button
        accessibilityLabel="gradient-add-location"
        text="Location"
        icon={boldPlus}
        gradient
        onPress={() => {}}
      />
      <Button
        accessibilityLabel="add-icon-circle-button"
        icon={thinPlus}
        gradient
        onPress={() => {}}
      />
      <View
        style={{ position: "absolute", bottom: 35, right: 25, zIndex: 1000000 }}
      >
        <Button
          accessibilityLabel="add-icon-circle-button"
          icon={thinPlus}
          backgroundColor="question"
          animated
          gradient
          onPress={() => {}}
        />
      </View>
      <LineItem
        accessibilityLabel="basic-line-item"
        type="static"
        leftComponent={<Image placement="foreground" />}
        rightComponent={
          <Icon
            name="gear"
            IconComponent={(props) => <EvilIcons {...props} />}
            color="black"
            size="lg"
            radius="rounded"
          />
        }
        // backgroundColor="brandAction"
      >
        <Text
          preset="label-light"
          color="darkGrey"
          accessibilityLabel="home-text"
        >
          Kaleb Davenport
        </Text>
        <Text
          preset="sublabel-light"
          color="darkGrey"
          accessibilityLabel="home-text"
        >
          Troop 319
        </Text>
      </LineItem>
    </ScrollView>
  );
};

export default DesignSystem;
