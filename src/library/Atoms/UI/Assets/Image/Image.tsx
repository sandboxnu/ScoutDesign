import React from "react";
import { LinearGradient } from "expo-linear-gradient";
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

import Text from "../../Text/Text";

interface ImageProps extends AssetProps, PressableProps {
  accessibilityLabel: string;
  placement?: "background" | "foreground";
  source: ImageSourcePropType;
  title?: string;
  PlaceholderComponent?: React.ReactElement;
  resizeMode?: "cover" | "contain" | "stretch" | "center";
}

type Props = ImageProps & SpacingProps<Theme>;

const Image = ({
  accessibilityLabel,
  placement = "foreground",
  source,
  title,
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
      ? {
          position: "relative",
        }
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

        {title ? (
          <LinearGradient
            colors={["rgba(32, 32, 32, 0)", "rgba(25, 23, 16, 0.9)"]}
            style={[
              StyleSheet.absoluteFillObject,
              {
                zIndex: 5,
                padding: theme.spacing.m,
                justifyContent: "flex-end",
              },
            ]}
          >
            <Text accessibilityLabel={title} color="white" preset="h2">
              {title}
            </Text>
          </LinearGradient>
        ) : null}
      </Box>
    </Pressable>
  );
};

export default Image;
