import React, { Children } from "react";

import { Box, mapRadius, Pressable, PressableProps } from "../../Atoms/utility";
import Text from "../../Atoms/UI/Text/Text";
import LineItem from "../../Widgets/LineItem/LineItem";
import DismissButton, {
  DismissableProps,
} from "../../Atoms/utility/Dismissable/Dismissable";

import { Theme } from "../../theme";
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

interface CardProps extends PressableProps, DismissableProps {
  accessibilityLabel: string;
  border?: boolean;
  shadow?: boolean;
  title?: string;
  dismissComponent?: React.ReactNode;
  headerLeft: React.ReactNode;
  children?: any;
  alignChildren?: "flex-start" | "center" | "flex-end";
}

type Props = CardProps & BackgroundColorProps<Theme>;

function Card({
  accessibilityLabel,
  title,
  headerLeft,
  children,
  alignChildren,
  dismissComponent,
  onDismiss,
  ...rest
}: Props) {
  return (
    <Pressable
      paddingHorizontal="m"
      paddingVertical="s"
      borderRadius={mapRadius("l")}
      justifyContent="center"
      accessibilityLabel={accessibilityLabel}
      borderColor="mediumGrey"
      borderWidth={0.25}
      backgroundColor="white"
      {...rest}
    >
      <LineItem
        type="simpleRow"
        accessibilityLabel="card-header"
        rightComponent={
          <DismissButton
            dismissComponent={dismissComponent}
            onDismiss={onDismiss ? onDismiss : () => {}}
          />
        }
        leftComponent={headerLeft}
        alignChildren={alignChildren}
      >
        <LineItem.Subheading accessibilityLabel="card-title">
          {title}
        </LineItem.Subheading>
      </LineItem>
      {Children.map(children, (child) => {
        return <Box marginVertical="xs">{child}</Box>;
      })}
    </Pressable>
  );
}

type DescriptionProps = {
  heading: string;
  sameLine?: boolean;
  bodyText: string;
};

const Description = ({
  heading,
  sameLine = true,
  bodyText,
}: DescriptionProps) => {
  if (sameLine) {
    return (
      <Text accessibilityLabel="card-description">
        <Text accessibilityLabel="heading" size="l" weight="bold">
          {heading}&nbsp;
        </Text>
        {bodyText}
      </Text>
    );
  }
  return (
    <>
      <Text accessibilityLabel="heading" size="l" weight="bold">
        {heading}
      </Text>
      <Text accessibilityLabel="card-description">{bodyText}</Text>
    </>
  );
};

Card.Description = Description;

export default Card;
