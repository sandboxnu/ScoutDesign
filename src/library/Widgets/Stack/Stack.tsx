import Pressable from "../../Atoms/utility/Pressable/Pressable";
import Box from "../../Atoms/utility/Box/Box";
import { StandardRadius } from "../../Atoms/utility/types";
import {
  FormFieldProps,
  FormFieldStates,
} from "../../Atoms/FormFields/formTypes";

import theme from "../../theme";
import { IconPayload } from "../../../icons";

export interface StackableProps {
  stackRadius?: StandardRadius;
  isStackTop?: boolean;
  isStackBottom?: boolean;
}

interface StackDataItem extends FormFieldStates {
  id: string;
  text: string;
  icon?: IconPayload;
  onPress?: () => void;
  updateText?: () => void;
}

interface EveryStackItemProps extends FormFieldProps {
  textColor?: keyof typeof theme.colors;
  leftComponent?: React.ReactNode;
  placeholderColor?: keyof typeof theme.colors;
  onPress?: () => void;
}

type StackProps = {
  accessibilityLabel: string;
  borderColor?: keyof typeof theme.colors;
  backgroundColor?: keyof typeof theme.colors;
  radius: StandardRadius | "none";
  RenderItem: React.ElementType;
  type: "Pressable" | "FormField";
  everyItemProps: EveryStackItemProps;
  items: StackDataItem[];
};

const Stack = ({
  accessibilityLabel,
  borderColor = "mintGrey",
  backgroundColor = "white",
  radius,
  RenderItem,
  items,
  everyItemProps,
}: StackProps) => {
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      borderWidth={1}
      borderColor={borderColor}
      radius={radius === "none" ? undefined : radius}
    >
      {items.map((item: StackDataItem, index: number) => {
        const firstItem = index === 0;
        const lastItem = index === items.length - 1;
        return (
          <>
            {!firstItem && !item.disabled && !item?.error && (
              <Box backgroundColor={backgroundColor} height={1}>
                <Box
                  flex={1}
                  marginHorizontal="l"
                  backgroundColor={borderColor}
                />
              </Box>
            )}
            <RenderItem
              backgroundColor={backgroundColor}
              stackRadius={radius === "none" ? undefined : radius}
              isStackTop={firstItem}
              isStackBottom={lastItem}
              item={item}
              {...everyItemProps}
            />
          </>
        );
      })}
    </Pressable>
  );
};

export default Stack;
