import theme from "../../../theme";

export type Dimensions = {
  width?: number;
  height: number;
};

export type SizePresets = "xs" | "s" | "m" | "l" | "xl";

export type StandardRadius = "xs" | "s" | "m" | "l" | "xl";
export type ExtendedRadius =
  | "circle"
  | "default"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl";

export type Radius = StandardRadius | ExtendedRadius;

export const mapRadius = (
  radius?: Radius,
  size?: SizePresets | Dimensions
): number | undefined => {
  if (!radius) {
    return undefined;
  }

  if (size) {
    if (typeof size === "string") {
      if (radius === "default") {
        return theme.fixedCornerSizes[size];
      } else if (radius === "circle") {
        return theme.assetSizes[size];
      } else {
        return theme.fixedCornerSizes[radius];
      }
    }
    // If size is type Dimensions
    else {
      if (radius === "circle") {
        if (size.height === size.width) {
          return size.height / 2;
        }
      } else {
        return theme.fixedCornerSizes.xl;
      }
    }
  } else {
    if (radius === "circle" || radius === "default") {
      return undefined;
    } else {
      return theme.fixedCornerSizes[radius];
    }
  }
};

export interface AssetProps {
  size: SizePresets | Dimensions;
  radius?: Radius;
}
