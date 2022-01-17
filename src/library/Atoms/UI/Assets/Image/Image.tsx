import { Image as RNImage, View, StyleSheet } from "react-native";

type PictureProps = {
  placement: "background" | "foreground";
};

const Image = ({ placement }: PictureProps) => {
  return (
    <View style={{ padding: 4 }}>
      <RNImage
        style={styles.tinyLogo}
        source={{
          uri: "https://picsum.photos/24",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
});

export default Image;
