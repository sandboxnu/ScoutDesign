import React from "react";
import { View, ScrollView, Dimensions } from "react-native";
import Constants from "expo-constants";

import { Button, LineItem, Text, Icon, Image } from "../library";
import { compass, gearThin, plusBold, plusThin, trash } from "../icons";

// There is currently no way to move an image around under the clipping mask. It's centered and that's the only option. If anyone knows how to move the image so I could pass "bottom center" and have the image anchored at the bottom and center that would be great, hmu

const DesignSystem = () => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 20,
        paddingBottom: 180,
      }}
    >
      <Text
        accessibilityLabel="ScoutDesign-heading-1"
        color="white"
        preset="h1"
      >
        Heading 1
      </Text>
      <Text
        accessibilityLabel="ScoutDesign-heading-2"
        color="white"
        preset="h2"
      >
        Heading 2
      </Text>
      <Image
        accessibilityLabel="user-profile"
        radius="none"
        placement="background"
        // radius="rounded"
        size={{
          height: Dimensions.get("window").height * 0.135,
        }}
        source={{
          uri: "https://picsum.photos/1200",
        }}
      />

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
        icon={plusBold}
        onPress={() => {}}
      />
      <Button
        accessibilityLabel="gradient-add-location"
        text="Location"
        icon={plusBold}
        gradient
        onPress={() => {}}
      />
      <Button
        accessibilityLabel="add-icon-circle-button"
        icon={plusThin}
        gradient
        onPress={() => {}}
      />
      <View
        style={{ position: "absolute", bottom: 35, right: 25, zIndex: 1000000 }}
      >
        <Button
          accessibilityLabel="add-icon-circle-button"
          icon={plusThin}
          backgroundColor="question"
          animated
          gradient
          onPress={() => {}}
        />
      </View>
      <LineItem
        accessibilityLabel="basic-line-item"
        type="static"
        leftComponent={
          <Image
            accessibilityLabel="user-profile"
            padding="s"
            radius="circle"
            size="md"
            source={{
              uri: "https://picsum.photos/24",
            }}
          />
        }
        rightComponent={
          <Icon
            icon={gearThin}
            color="black"
            size="lg"
            radius="rounded"
            onPress={() => {}}
          />
        }
        topBorder
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
      <LineItem
        accessibilityLabel="basic-line-item"
        type="button"
        onPress={() => {}}
        leftComponent={
          <Icon icon={compass} color="white" size="lg" radius="rounded" />
        }
        backgroundColor="brandAction"
      >
        <Text preset="label" color="white" accessibilityLabel="home-text">
          Troop 319
        </Text>
      </LineItem>
      <Image
        accessibilityLabel="user-profile"
        radius="rounded"
        size={{
          height: 120,
        }}
        source={{
          uri: "https://picsum.photos/500",
        }}
      />
    </ScrollView>
  );
};

export default DesignSystem;
