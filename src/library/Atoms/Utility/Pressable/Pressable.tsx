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
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
} from "@shopify/restyle";

const restyleFunctions = [spacing, border, backgroundColor];
type Props = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {
    disabled?: boolean;
    nativeID: string;
    onPress: (nativeEvent: GestureResponderEvent) => void;
    onLongPress?: (nativeEvent: GestureResponderEvent) => void;
    children: any;
  };

const Pressable = ({
  nativeID,
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
      nativeID={nativeID}
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
