import theme, { Theme } from "../../../../theme";
import { AssetProps, Radius, Size } from "../Asset";

import { createBox } from "@shopify/restyle";

type IconPayloadObj = {
  name: string;
  component: React.ElementType;
};

export class IconPayload {
  name: string;
  component: React.ElementType;

  constructor(icon: IconPayloadObj) {
    this.name = icon.name;
    this.component = icon.component;
  }

  isValid() {
    return this.name && this.component;
  }
}

interface IconProps extends AssetProps {
  name: string;
  IconComponent: React.ElementType;
  color: keyof typeof theme.colors;
  backgroundColor?: keyof typeof theme.colors;
}

const Box = createBox<Theme>();

const Icon = ({
  radius,
  name,
  IconComponent,
  size,
  color,
  backgroundColor,
}: IconProps) => {
  const mapSize = (size: Size): number => {
    switch (size) {
      case "xs":
        return theme.assetSizes.xs;
      case "sm":
        return theme.assetSizes.sm;
      case "md":
        return theme.assetSizes.md;
      case "lg":
        return theme.assetSizes.lg;
      default:
        return theme.assetSizes.sm;
    }
  };

  const mapRadius = (size: Size, radius: Radius): number | undefined => {
    switch (radius) {
      case "none":
        return undefined;
      case "rounded":
        return theme.assetSizes[size] / 4;
      case "circle":
        return theme.assetSizes[size];
      default:
        return undefined;
    }
  };

  return (
    <Box
      width={mapSize(size) * 1.2}
      height={mapSize(size) * 1.2}
      justifyContent="center"
      alignItems="center"
      backgroundColor={backgroundColor}
      borderRadius={mapRadius(size, radius)}
    >
      <IconComponent
        name={name}
        size={mapSize(size)}
        color={color ? theme.colors?.[color] : undefined}
      />
    </Box>
  );
};

export default Icon;
