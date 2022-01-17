import React from "react";
import {
  Image as RNImage,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";
import { Pressable, AssetProps, PressableProps } from "../../../utility";

interface ImageProps extends AssetProps, PressableProps {
  accessibilityLabel: string;
  placement?: "background" | "foreground";
  source: ImageSourcePropType;
  PlaceholderComponent?: React.ReactElement;
  resizeMode?: "cover" | "contain" | "stretch" | "center";
}

const Image = ({
  accessibilityLabel,
  placement = "foreground",
  source,
  PlaceholderComponent,
  resizeMode = "cover",
  ...rest
}: ImageProps) => {
  return (
    <Pressable accessibilityLabel={accessibilityLabel} padding="s" {...rest}>
      <RNImage
        style={styles.tinyLogo}
        source={source}
        resizeMode={resizeMode}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
});

export default Image;
