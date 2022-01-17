/** Design inspiration for this component comes from React Native Elements LineItem. */
import React from "react";

import { Asset } from "../../Atoms/UI/Assets/Asset";
import theme from "../../theme";
import Box from "../../Atoms/Utility/Box/Box";
import Pressable, {
  PressableProps,
} from "../../Atoms/Utility/Pressable/Pressable";

interface PressableLineItem extends PressableProps {
  type: "navigation";
  topBorder?: boolean;
  bottomBorder?: boolean;
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
  textColor?: keyof typeof theme.colors;
  backgroundColor?: keyof typeof theme.colors;
  children?: any;
}

interface StaticLineItem {
  accessibilityLabel: string;
  onPress?: undefined;
  type: "static" | "accordion" | "formField";
  topBorder?: boolean;
  bottomBorder?: boolean;
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
  textColor?: keyof typeof theme.colors;
  backgroundColor?: keyof typeof theme.colors;
  children?: any;
}

type LineItemProps = PressableLineItem | StaticLineItem;

/** ListItems display a row of information, such as a list of troops
 * with their respective icon or menu row.
 * They are very customizable and can contain switches, avatars, badges, icons, and more. */
const LineItemBase = ({
  accessibilityLabel,
  type,
  leftComponent,
  rightComponent,
  bottomBorder,
  topBorder,
  children,
  ...rest
}: LineItemProps) => {
  if (rest.onPress) {
    return (
      <Pressable
        accessibilityLabel={accessibilityLabel}
        marginVertical="xs"
        paddingHorizontal="l"
        alignItems="stretch"
        justifyContent="space-between"
        flexDirection="row"
        borderRadius={20}
        {...rest}
      >
        {leftComponent}
        {children}
        {rightComponent}
      </Pressable>
    );
  }
  return (
    <Box
      accessibilityLabel={accessibilityLabel}
      paddingHorizontal="m"
      justifyContent="center"
      flexDirection="column"
      marginVertical="m"
      borderRadius={12}
      {...rest}
    >
      <Box
        height={0}
        borderTopColor="slateGrey"
        borderTopWidth={0.2}
        marginHorizontal="m"
      />
      <Box
        marginVertical="s"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
      >
        <Box alignItems="center" flexDirection="row">
          {leftComponent}
          <Box
            paddingLeft="m"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            marginTop="micro"
          >
            {children}
          </Box>
        </Box>
        {rightComponent}
      </Box>
    </Box>
  );
};

export default LineItemBase;
