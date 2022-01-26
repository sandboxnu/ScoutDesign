import React from "react";

import ButtonBase, { ButtonProps } from "./ButtonBase";

import { Floatable, FloatableProps } from "../../utility";
import Text from "../Text/Text";

type Props = ButtonProps & FloatableProps & {};

const LargeFloatingButton = ({
  text,
  textColor = "white",
  corner,
  distanceFromCorner,
  ...rest
}: Props) => {
  return (
    <Floatable corner={corner} distanceFromCorner={distanceFromCorner}>
      <ButtonBase
        paddingVertical="s"
        paddingHorizontal="m"
        borderRadius="l"
        iconPadding="s"
        iconSize="m"
        {...rest}
      >
        <Text
          accessibilityLabel="button-text"
          color={textColor}
          size="l"
          weight="bold"
          padding="xs"
          paddingLeft={rest.icon ? "s" : undefined}
        >
          {text}
        </Text>
      </ButtonBase>
    </Floatable>
  );
};

export default LargeFloatingButton;
