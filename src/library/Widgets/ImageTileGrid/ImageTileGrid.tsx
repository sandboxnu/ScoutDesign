import { Dimensions } from "react-native";
import Image, { ImageProps } from "../../Atoms/UI/Assets/Image/Image";
import { Box, PressableProps, Spacing } from "../../Atoms/utility";

export type TileProps = Omit<ImageProps, "size">;
interface EveryTileProps extends PressableProps {
  resizeMode?: "cover" | "contain" | "stretch" | "center";
}

interface ImageTileGridProps {
  rows: 2 | 3;
  padding: Spacing;
  tiles: TileProps[];
  everyItemProps?: EveryTileProps;
}

const mapToSmallerSpacing: { [key: string]: Spacing | undefined } = {
  micro: undefined,
  xs: "micro",
  s: "xs",
  m: "s",
  l: "m",
  xl: "l",
  xxl: "xl",
};

const ImageTileGrid = ({
  rows,
  padding,
  tiles,
  everyItemProps,
}: ImageTileGridProps) => {
  const calculatePaddingBottom = (index: number) => {
    if (index % 2 === 0 && index < tiles.length - 2) {
      return mapToSmallerSpacing[padding];
    } else if (index % 2 !== 0 && index < tiles.length - 2) {
      return mapToSmallerSpacing[padding];
    } else {
      return undefined;
    }
  };

  return (
    <Box flexDirection="row" flexWrap="wrap" alignItems="center">
      {tiles.map((imageProps, index) => {
        return (
          <Box
            width={
              rows === 2
                ? Dimensions.get("window").width / 2
                : Dimensions.get("window").width / 3
            }
            height={
              rows === 2
                ? Dimensions.get("window").width / 2
                : Dimensions.get("window").width / 3
            }
            padding={padding}
            paddingLeft={
              index % 2 === 0 ? undefined : mapToSmallerSpacing[padding]
            }
            paddingRight={
              index % 2 === 0 ? mapToSmallerSpacing[padding] : undefined
            }
            paddingTop={index > 1 ? mapToSmallerSpacing[padding] : undefined}
            paddingBottom={calculatePaddingBottom(index)}
          >
            <Image {...everyItemProps} {...imageProps} size="fill" />
          </Box>
        );
      })}
    </Box>
  );
};

export default ImageTileGrid;
