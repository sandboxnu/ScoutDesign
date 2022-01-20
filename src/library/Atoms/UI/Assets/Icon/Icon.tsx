import theme from "../../../../theme";
import {
  Pressable,
  AssetProps,
  PressableProps,
  Radius,
  SizePresets,
  mapRadius,
} from "../../../utility";

type IconPayloadType = {
  name: string;
  library: React.ElementType;
};

export class IconPayload {
  name: string;
  component: React.ElementType;

  constructor(icon: IconPayloadType) {
    this.name = icon.name;
    this.component = (props) => <icon.library {...props} />;
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
  if (typeof size !== "string") {
    console.error("Icon can only use size presets, not custom dimensions.");
    return null;
  } else {
    return (
      <Pressable
        accessibilityLabel={icon.name}
        borderRadius={mapRadius(radius, size)}
        overflow="hidden"
        {...rest}
      >
        <icon.component
          style={
            backgroundColor
              ? {
                  padding: 6,
                  backgroundColor: theme.colors[backgroundColor],
                }
              : undefined
          }
          name={icon.name}
          size={theme.assetSizes[size]}
          color={color ? theme.colors?.[color] : undefined}
        />
      </Pressable>
    );
  }
};

Icon.Payload = IconPayload;
export default Icon;
