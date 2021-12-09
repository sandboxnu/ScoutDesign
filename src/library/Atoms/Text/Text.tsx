import React, { useEffect, useState } from "react";
import { createText } from "@shopify/restyle";
import { Theme } from "../../theme";

const Text = createText<Theme>();

type textVariants =
  | "micro"
  | "light"
  | "body"
  | "alt"
  | "subheader"
  | "header"
  | "title";

export type textProps = {
  ID: string;
  variant?: textVariants;
  children?: any;
};

const ScoutText = ({ ID, variant = "body", children }: textProps) => {
  return (
    <Text variant={variant} nativeID={ID}>
      {children}
    </Text>
  );
};

export default ScoutText;
