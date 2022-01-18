export type Dimensions = {
  width?: number;
  height: number;
};

export type SizePresets = "xs" | "sm" | "md" | "lg" | "xl";

export type Radius = "none" | "rounded" | "circle";

export interface AssetProps {
  size: SizePresets | Dimensions;
  radius: Radius;
}
