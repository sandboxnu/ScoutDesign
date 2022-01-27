export type StandardRadius = "xs" | "s" | "m" | "l" | "xl";

export type ExtendedRadius =
  | "default"
  | "circle"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl";

export type Radius = StandardRadius | ExtendedRadius;

export interface RadiusProps {
  radius?: Radius;
  topRightRadius?: StandardRadius;
  topLeftRadius?: StandardRadius;
  bottomRightRadius?: StandardRadius;
  bottomLeftRadius?: StandardRadius;
}

export type Modify<T, R> = Omit<T, keyof R> & R;
