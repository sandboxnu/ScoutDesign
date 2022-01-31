import { Platform, KeyboardAvoidingView, Dimensions } from "react-native";
import CircleButton from "../../Atoms/UI/Buttons/CircleButton";
import DismissButton from "../../Atoms/UI/Buttons/DismissButton";
import Text from "../../Atoms/UI/Text/Text";
import LineItem from "../LineItem/LineItem";
import { Box, Color, mapRadius } from "../../Atoms/utility";
import { forwardArrow } from "../../../icons";
import { SimpleFormStates } from "../../Atoms/FormFields/formTypes";

interface ModalProps extends SimpleFormStates {
  escape: () => void;
  next: () => void;
  backgroundColor?: Color;
  title?: string;
  children: any;
}

const Modal = ({
  escape,
  next,
  backgroundColor = "brandPrimary",
  title,
  valid,
  children,
}: ModalProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(155, 155, 155, 0.88)",
      }}
    >
      <Box
        width={Dimensions.get("window").width * 0.89}
        height={Dimensions.get("window").height * 0.86}
        borderRadius={mapRadius("m")}
        backgroundColor="white"
      >
        <DismissButton
          onDismiss={escape}
          corner="top-right"
          distanceFromCorner="edge"
        />
        <LineItem
          accessibilityLabel="modal-header"
          bottomBorder={true}
          backgroundColor={backgroundColor}
          type="simpleRow"
          topLeftRadius="m"
          topRightRadius="m"
        >
          <Text
            color="white"
            paddingHorizontal="s"
            paddingVertical="m"
            preset="h1"
          >
            {title}
          </Text>
        </LineItem>
        <Box paddingHorizontal="l" paddingVertical="m">
          {children}
        </Box>
        {valid ? (
          <CircleButton
            accessibilityLabel="next"
            icon={forwardArrow}
            onPress={next}
            animated
            corner="bottom-right"
            distanceFromCorner="s"
          />
        ) : undefined}
      </Box>
    </KeyboardAvoidingView>
  );
};

export default Modal;
