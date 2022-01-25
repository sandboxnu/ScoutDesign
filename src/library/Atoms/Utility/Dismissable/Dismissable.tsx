import React from "react";
import { View } from "react-native";
import Icon from "../../UI/Assets/Icon/Icon";
import { close } from "../../../../icons";

export interface DismissableProps {
  dismissComponent?: React.ReactNode;
  onDismiss?: () => void;
}

type Props = DismissableProps & {
  absolute?: boolean;
};

const DismissButton = ({
  absolute = false,
  dismissComponent,
  onDismiss,
}: Props) => {
  return (
    <View style={{ zIndex: absolute ? 10 : undefined }}>
      <Icon
        radius="circle"
        backgroundColor="lightMintGrey"
        icon={close}
        color="darkGrey"
        size="xs"
        onPress={onDismiss}
      />
    </View>
  );
};

export default DismissButton;
