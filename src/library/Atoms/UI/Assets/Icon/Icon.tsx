import theme, { Theme } from "../../../../theme";
import {
  Pressable,
  AssetProps,
  PressableProps,
  mapRadius,
} from "../../../utility";
import { SpacingProps } from "@shopify/restyle";
import { IconPayload } from "../../../../../icons";

interface IconProps extends AssetProps, PressableProps {
  icon: IconPayload;
  color: keyof typeof theme.colors;
  backgroundColor?: keyof typeof theme.colors;
}

type Props = IconProps & SpacingProps<Theme>;

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
