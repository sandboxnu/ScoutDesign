import Box from "../Box/Box";

type Corner = "top-right" | "top-left" | "bottom-right" | "bottom-left";
type DistanceFromCorner = "l" | "s";

type Position = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

type PositionFromDistance = {
  l?: Position;
  s?: Position;
};

type PositionObj = {
  "top-right": PositionFromDistance;
  "top-left": PositionFromDistance;
  "bottom-right": PositionFromDistance;
  "bottom-left": PositionFromDistance;
};

export interface FloatableProps {
  corner?: Corner;
  distanceFromCorner?: DistanceFromCorner;
}

const positions: PositionObj = {
  "top-right": {
    l: {
      top: 35,
      right: 25,
    },
    s: {
      top: 5,
      right: 5,
    },
  },
  "top-left": {
    l: {
      top: 35,
      left: 25,
    },
    s: {
      top: 5,
      left: 5,
    },
  },
  "bottom-right": {
    l: {
      bottom: 35,
      right: 25,
    },
    s: {
      bottom: 5,
      right: 5,
    },
  },
  "bottom-left": {
    l: {
      bottom: 35,
      left: 25,
    },
    s: {
      bottom: 5,
      left: 5,
    },
  },
};

type Props = FloatableProps & { children?: any };

const Float = ({ corner, distanceFromCorner, children, ...rest }: Props) => {
  if (corner && distanceFromCorner) {
    return (
      <Box
        position="absolute"
        zIndex={1000}
        {...positions[corner][distanceFromCorner]}
        {...rest}
      >
        {children}
      </Box>
    );
  } else {
    return <Box {...rest}>{children}</Box>;
  }
};

export default Float;
