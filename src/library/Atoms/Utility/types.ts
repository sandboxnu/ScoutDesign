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
  radius?: StandardRadius;
  borderTopRightRadius?: StandardRadius;
  borderTopLeftRadius?: StandardRadius;
  borderBottomRightRadius?: StandardRadius;
  borderBottomLeftRadius?: StandardRadius;
}
