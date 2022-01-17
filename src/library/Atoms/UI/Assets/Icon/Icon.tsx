import theme, { Theme } from "../../../../theme";
import { Pressable } from "../../../utility";
import { AssetProps, PressableProps, Radius, Size } from "../../../utility";

type IconPayloadType = {
  name: string;
  component: React.ElementType;
};

export class IconPayload {
  name: string;
  component: React.ElementType;

  constructor(icon: IconPayloadType) {
    this.name = icon.name;
    this.component = icon.component;
  }

  isValid() {
    return this.name && this.component;
  }
}

interface Props extends AssetProps, PressableProps {
  icon: IconPayload;
  color: keyof typeof theme.colors;
  backgroundColor?: keyof typeof theme.colors;
}

const Icon = ({
  radius,
  icon,
  size,
  color,
  backgroundColor,
  ...rest
}: Props) => {
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
    <Pressable
      accessibilityLabel={icon.name}
      width={mapSize(size) * 1.2}
      height={mapSize(size) * 1.2}
      justifyContent="center"
      alignItems="center"
      backgroundColor={backgroundColor}
      borderRadius={mapRadius(size, radius)}
      {...rest}
    >
      <icon.component
        name={icon.name}
        size={mapSize(size)}
        color={color ? theme.colors?.[color] : undefined}
      />
    </Pressable>
  );
};

Icon.Payload = IconPayload;
export default Icon;
