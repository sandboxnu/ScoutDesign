import {
  Pressable as RNPressable,
  View,
  GestureResponderEvent,
} from "react-native";
import { Theme } from "../../../theme";
import {
  useRestyle,
  spacing,
  border,
  layout,
  backgroundColor,
  SpacingProps,
  LayoutProps,
  BorderProps,
  BackgroundColorProps,
} from "@shopify/restyle";

export interface PressableProps {
  accessibilityLabel: string;
  disabled?: boolean;
  disabledStyle?: any;
  onPress: (nativeEvent: GestureResponderEvent) => void;
  onLongPress?: (nativeEvent: GestureResponderEvent) => void;
}

const restyleFunctions = [spacing, layout, border, backgroundColor];
type Props = SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  PressableProps & {
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

  return (
    <RNPressable
      onPress={onPress}
      onLongPress={onLongPress}
      hitSlop={8}
      disabled={disabled}
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
