import React from "react";
import { View, ScrollView, Dimensions } from "react-native";
import Constants from "expo-constants";

import { Badge, Button, LineItem, Text, Icon, Image } from "../library";
import {
  gearThin,
  light,
  plusBold,
  plusThin,
  searchThin,
  trash,
} from "../icons";

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
        placement="background"
        size={{
          height: Dimensions.get("window").height * 0.135,
        }}
        source={{
          uri: "https://picsum.photos/1200",
        }}
      />
      <Badge
        accessibilityLabel="campout-solid-badge"
        text="Campout"
        color="gradient"
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
            radius="circle"
            size="m"
            source={{
              uri: "https://picsum.photos/28",
            }}
          />
        }
        rightComponent={
          <Icon icon={gearThin} color="black" size="l" onPress={() => {}} />
        }
        topBorder
      >
        <LineItem.Heading accessibilityLabel="user-name">
          Kaleb Davenport
        </LineItem.Heading>
        <LineItem.Subheading accessibilityLabel="troop-number">
          Troop 319
        </LineItem.Subheading>
      </LineItem>
      <LineItem
        accessibilityLabel="basic-line-item"
        type="button"
        onPress={() => {}}
        leftComponent={<Icon icon={searchThin} color="darkGrey" size="l" />}
      >
        <LineItem.Subheading accessibilityLabel="troop-319">
          Celeste Slater 606-3727 Ullamcorper. Street Roseville NH 11523 (786)
          713-8616
        </LineItem.Subheading>
      </LineItem>
      <LineItem
        accessibilityLabel="basic-line-item"
        type="accordion"
        backgroundColor="lightMintGrey"
        leftComponent={
          <Icon
            radius="circle"
            backgroundColor="white"
            icon={light}
            color="darkGrey"
            size="s"
          />
        }
        accordionContent={
          <Badge
            onPress={() => {}}
            accessibilityLabel="campout-solid-badge"
            text="Campout"
            color="questionDark"
          />
        }
        radius="m"
      >
        <LineItem.Heading accessibilityLabel="troop-319">
          Troop 318
        </LineItem.Heading>
      </LineItem>

      <Image
        accessibilityLabel="user-profile"
        radius="m"
        onPress={() => {}}
        size="xl"
        source={{
          uri: "https://picsum.photos/500",
        }}
        title="Hike"
      />
    </ScrollView>
  );
};

export default DesignSystem;
