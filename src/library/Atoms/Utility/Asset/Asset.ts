import theme from "../../../theme";
import { Radius } from "../types";

export type Dimensions = {
  width?: number;
  height: number;
};

export type SizePresets = "micro" | "xs" | "s" | "m" | "l" | "xl";

export const mapRadius = (
  radius?: Radius,
  size?: SizePresets | Dimensions
): number | undefined => {
  if (!radius) {
    return undefined;
  }

  if (size) {
    // If size is not a Dimension
    if (typeof size === "string") {
      if (radius === "default") {
        return theme.radii[size];
      } else if (radius === "circle") {
        return theme.assetSizes[size];
      } else {
        return theme.radii[radius];
      }
    }
    // If size is type Dimensions
    else {
      if (radius === "circle") {
        if (size.height === size.width) {
          return size.height / 2;
        } else {
          return theme.radii.xl;
        }
      } else if (radius === "default") {
        return theme.radii.xl;
      } else {
        return theme.radii[radius];
      }
    }
  } else {
    if (radius === "circle" || radius === "default") {
      console.warn(
        "You cannot pass 'circle' or 'default' if no size is specified."
      );
      return undefined;
    } else {
      return theme.radii[radius];
    }
  }
};

export interface AssetProps {
  size: SizePresets | Dimensions;
  radius?: Radius;
}
