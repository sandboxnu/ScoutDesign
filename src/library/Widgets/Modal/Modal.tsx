import { Platform, KeyboardAvoidingView, Dimensions } from "react-native";
import { CircleButton, DismissButton, Text } from "../../Atoms/UI";
import LineItem from "../LineItem/LineItem";
import { Box, mapRadius } from "../../Atoms/utility";
import { forwardArrow } from "../../../icons";

interface ModalProps {
  escape: () => void;
  next: () => void;
  title?: string;
  children: any;
}

const Modal = ({ escape, next, title, children }: ModalProps) => {
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
          backgroundColor="brandAction"
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
        <CircleButton
          accessibilityLabel="next"
          icon={forwardArrow}
          onPress={next}
          animated
          corner="bottom-right"
          distanceFromCorner="s"
        />
        {/* {!invalid ? (
          <CircleButton
            accessibilityLabel="next"
            icon={forwardArrow}
            onPress={next}
          />
        ) : null} */}
      </Box>
    </KeyboardAvoidingView>
  );
};

export default Modal;
