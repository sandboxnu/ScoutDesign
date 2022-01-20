/** Design inspiration for this component comes from React Native Elements LineItem. */
import React, { useState } from "react";

import theme from "../../theme";
import { Box, mapRadius, StandardRadius } from "../../Atoms/utility";
import { Text, Icon } from "../../Atoms/UI";
import { upCaret, downCaret } from "../../../icons";
import { Pressable, PressableProps } from "../../Atoms/utility";

const LineItemToggleIcon = ({ open }: { open: boolean }) => {
  if (open) {
    return <Icon icon={downCaret} color="darkGrey" size="s" />;
  }
  return <Icon icon={upCaret} color="darkGrey" size="s" />;
};

type LineItemHeadingProps = {
  accessibilityLabel: string;
  color?: keyof typeof theme.colors;
  weight?: "medium" | "light";
  children: React.ReactNode;
};

interface Props extends PressableProps {
  accessibilityLabel: string;
  type: "button" | "static" | "accordion" | "formField";
  topBorder?: boolean;
  bottomBorder?: boolean;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  accordionContent?: React.ReactNode;
  textColor?: keyof typeof theme.colors;
  backgroundColor?: keyof typeof theme.colors;
  radius?: StandardRadius;
  children?: any;
}

/** ListItems display a row of information, such as a list of troops
 * with their respective icon or menu row.
 * They are very customizable and can contain switches, avatars, badges, icons, and more. */
const LineItem = ({
  accessibilityLabel,
  type,
  leftComponent,
  rightComponent,
  accordionContent,
  bottomBorder,
  topBorder,
  radius,
  children,
  ...rest
}: Props) => {
  const accordion = type === "accordion";
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  if (type === "accordion" && !accordionContent) {
    console.error(
      "LineItem with type='accordion' must include JSX to include in the accordion"
    );
    return null;
  }
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      justifyContent="center"
      flexDirection="column"
      marginVertical="s"
      borderRadius={mapRadius(radius)}
      sideEffect={
        accordion ? () => setAccordionIsOpen((prev) => !prev) : undefined
      }
      {...rest}
    >
      {topBorder && (
        <Box
          height={0}
          borderTopColor="slateGrey"
          borderTopWidth={0.25}
          marginHorizontal="l"
        />
      )}
      <Box
        paddingVertical="xs"
        marginHorizontal="m"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        flex={1}
      >
        <Box
          paddingVertical={topBorder ? "micro" : "s"}
          flex={1}
          alignItems="center"
          flexDirection="row"
        >
          {leftComponent}
          <Box
            paddingLeft="m"
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            marginVertical={topBorder ? "xs" : undefined}
          >
            {children}
          </Box>
        </Box>
        {accordion ? (
          <LineItemToggleIcon open={accordionIsOpen} />
        ) : (
          rightComponent
        )}
      </Box>
      {accordionIsOpen ? accordionContent : null}
      {bottomBorder && (
        <Box
          height={0}
          borderBottomColor="slateGrey"
          borderBottomWidth={0.25}
          marginHorizontal="l"
        />
      )}
    </Pressable>
  );
};

LineItem.Heading = ({
  accessibilityLabel,
  color = "darkGrey",
  weight = "light",
  children,
}: LineItemHeadingProps) => {
  return (
    <Text
      preset={weight === "light" ? "label-light" : "label"}
      color={color}
      accessibilityLabel={accessibilityLabel}
    >
      {children}
    </Text>
  );
};

LineItem.Subheading = ({
  accessibilityLabel,
  weight = "light",
  color = "darkGrey",
  children,
}: LineItemHeadingProps) => {
  return (
    <Text
      preset={weight === "light" ? "sublabel-light" : "sublabel"}
      color={color}
      accessibilityLabel={accessibilityLabel}
    >
      {children}
    </Text>
  );
};

export default LineItem;
