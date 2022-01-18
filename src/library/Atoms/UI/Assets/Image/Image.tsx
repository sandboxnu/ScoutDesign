import React from "react";
import { SpacingProps } from "@shopify/restyle";
import theme, { Theme } from "../../../../theme";

import {
  Image as RNImage,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";

import {
  Pressable,
  Box,
  AssetProps,
  PressableProps,
  Radius,
  Dimensions,
  SizePresets,
} from "../../../utility";

interface ImageProps extends AssetProps, PressableProps {
  accessibilityLabel: string;
  placement?: "background" | "foreground";
  source: ImageSourcePropType;
  PlaceholderComponent?: React.ReactElement;
  resizeMode?: "cover" | "contain" | "stretch" | "center";
}

type Props = ImageProps & SpacingProps<Theme>;

const Image = ({
  accessibilityLabel,
  placement = "foreground",
  source,
  PlaceholderComponent,
  resizeMode = "cover",
  radius,
  size,
  ...rest
}: Props) => {
  const mapRadius = (
    size: SizePresets | Dimensions,
    radius: Radius
  ): number | undefined => {
    switch (radius) {
      case "none":
        return undefined;
      case "rounded":
        return theme.fixedCornerSizes.md;
      case "circle":
        if (typeof size === "string") {
          return theme.assetSizes[size];
        } else if (size.height === size.width) {
          return size.height / 2;
        } else {
          return theme.fixedCornerSizes.lg;
        }
      default:
        return undefined;
    }
  };

  const backgroundImageProps =
    placement === "foreground"
      ? {}
      : {
          zIndex: -1,
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
        };

  return (
    <Pressable
      {...backgroundImageProps}
      accessibilityLabel={accessibilityLabel}
      {...rest}
    >
      <Box
        width={typeof size === "string" ? theme.assetSizes[size] : size.width}
        height={typeof size === "string" ? theme.assetSizes[size] : size.height}
        borderRadius={mapRadius(size, radius)}
        overflow="hidden"
      >
        <RNImage style={StyleSheet.absoluteFillObject} source={source} />
      </Box>
    </Pressable>
  );
};

export default Image;
