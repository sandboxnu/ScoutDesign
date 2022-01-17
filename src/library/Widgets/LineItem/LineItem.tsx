/** Design inspiration for this component comes from React Native Elements LineItem. */
import React from "react";

import theme from "../../theme";
import Box from "../../Atoms/utility/Box/Box";
import { Pressable, PressableProps } from "../../Atoms/utility";

interface Props extends PressableProps {
  accessibilityLabel: string;
  type: "button" | "static" | "accordion" | "formField";
  topBorder?: boolean;
  bottomBorder?: boolean;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  textColor?: keyof typeof theme.colors;
  backgroundColor?: keyof typeof theme.colors;
  children?: any;
}

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
}: Props) => {
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      paddingHorizontal="m"
      justifyContent="center"
      flexDirection="column"
      marginVertical="m"
      {...rest}
    >
      {topBorder && (
        <Box
          height={0}
          borderTopColor="slateGrey"
          borderTopWidth={0.25}
          marginHorizontal="m"
        />
      )}
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
            marginTop={topBorder ? "micro" : undefined}
          >
            {children}
          </Box>
        </Box>
        {rightComponent}
      </Box>
      {bottomBorder && (
        <Box
          height={0}
          borderBottomColor="slateGrey"
          borderBottomWidth={0.25}
          marginHorizontal="m"
        />
      )}
    </Pressable>
  );
};

export default LineItemBase;
