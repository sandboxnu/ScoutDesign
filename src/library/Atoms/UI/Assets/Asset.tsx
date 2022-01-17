import Icon from "./Icon/Icon";

export type Dimensions = {
  width: number;
  heiht: number;
};

export type Size = "xs" | "sm" | "md" | "lg";

export type Radius = "none" | "rounded" | "circle";

export interface AssetProps {
  size: Size;
  radius: Radius;
}

export type Asset = typeof Icon;
