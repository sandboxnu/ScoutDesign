/** Design inspiration for this component comes from React Native Elements LineItem. */
type Props = {
  topBorder?: boolean;
  bottomBorder?: boolean;

  /** Spacing between the leftComponent, the heading, and the rightComponent. */
  spacing?: number;

  /** Replace element with custom element. */
  Component?: typeof React.Component;

  /** Container for linear gradient. */
  ViewComponent?: typeof React.Component;
  /** Props for linear gradient component. */
  linearGradientProps?: any;
  children?: any;
};

// Title
// Subtitle
// HiddenContainer

// type = "static" | "accordion" | "formField" | "navigation"

/** ListItems display a row of information, such as a list of troops
 * with their respective icon or menu row.
 * They are very customizable and can contain switches, avatars, badges, icons, and more. */
const LineItemBase = ({
  leftComponent,
  rightComponent,
  type,
  heading,
  subheading,
  weight,
    onPress,
    onLongPress,
    backgroundColor
    disabled,
    disabledStyle,
    bottomBorder,
    topBorder,
    spacing,
    linearGradientProps,
    children,
    ...rest
}) => {
  const Container = onPress | onLongPress ? Pressable : Box;
  return <Container
        nativeID={accessibilityLabel}
        onPress={onPress}
        marginVertical="xs"
        paddingHorizontal="l"
        backgroundColor={backgroundColor}
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        borderRadius={20}
        height={40}
        {...rest}
      ></Container>;
};
