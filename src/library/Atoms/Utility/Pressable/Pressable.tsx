import {
  Pressable as RNPressable,
  View,
  GestureResponderEvent,
} from "react-native";
import { Theme } from "../../../theme";
import Box from "../Box/Box";
import {
  useRestyle,
  spacing,
  border,
  layout,
  position,
  backgroundColor,
  SpacingProps,
  LayoutProps,
  PositionProps,
  BorderProps,
  BackgroundColorProps,
} from "@shopify/restyle";

export interface PressableProps {
  disabled?: boolean;
  disabledStyle?: any;
  onPress?: (nativeEvent: GestureResponderEvent) => void;
  onLongPress?: (nativeEvent: GestureResponderEvent) => void;
}

const restyleFunctions = [spacing, layout, border, position, backgroundColor];
type Props = SpacingProps<Theme> &
  LayoutProps<Theme> &
  PositionProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  PressableProps & {
    accessibilityLabel: string;
    children: any;
  };

const Pressable = ({
  accessibilityLabel,
  disabled = false,
  onPress,
  onLongPress,
  children,
  ...rest
}: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  if (!onPress && !onLongPress) {
    return (
      <Box testID={accessibilityLabel} nativeID={accessibilityLabel} {...rest}>
        {children}
      </Box>
    );
  }

  return (
    <RNPressable
      onPress={onPress}
      onLongPress={onLongPress}
      hitSlop={8}
      disabled={disabled}
      testID={accessibilityLabel}
      nativeID={accessibilityLabel}
      style={({ pressed }: { pressed: boolean }) => [
        disabled ? { backgroundColor: "#ccc" } : undefined,
        { opacity: pressed ? 0.4 : 1 },
      ]}
    >
      {({ pressed }) => <View {...props}>{children}</View>}
    </RNPressable>
  );
};

export default Pressable;
