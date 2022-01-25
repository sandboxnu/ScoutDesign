import React from "react";
import { View } from "react-native";
import Icon from "../Assets/Icon/Icon";
import theme from "../../../theme";
import { close, IconPayload } from "../../../../icons";
import { SizePresets } from "../../utility";

export interface DismissableProps {
  dismissComponent?: IconPayload;
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
        icon={dismissComponent ? dismissComponent : close}
        color="darkGrey"
        size="xs"
        onPress={onDismiss}
      />
    </View>
  );
};

export default DismissButton;
