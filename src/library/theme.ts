import { createTheme } from "@shopify/restyle";

const palette = {
  sunglowYellow: "#FFCC00",
  mustardYellow: "#FFD633",
  crayolaYellow: "#FFEB99",
  darkOrange: "#E98D01",
  orangePeel: "#FDA521",
  lightPeach: "#FFDCAD",
  darkRed: "#C72B23",
  mediumRed: "#DF5349",
  mauvelous: "#EF9FAA",
  airforceBlue: "#16559C",
  brightNavy: "#1F74D6",
  tuftsBlue: "#4C94E6",
  darkOliveBrown: "#48390A",
  drabBrown: "#7D6012",
  lemonCurryBrown: "#C9A326",
  darkGreen: "#288555",
  shamrockGreen: "#34A86C",
  aquamarine: "#74E7AA",
  teaGreen: "#DBFBDF",
  greenGlow: "#F4FBF4",

  black: "#191710",

  darkGrey: "#3D444D",
  slateGrey: "#738487",
  mediumGrey: "#B3CCC8",
  mintGrey: "#DBE6E1",
  lightMintGrey: "#F4F6F5",
  lightRedGrey: "#F7F3F3",

  offWhite: "#F8FCFA",
  white: "#FFFFFF",
};

const theme = createTheme({
  colors: {
    brandActionLight: palette.aquamarine,
    brandAction: palette.shamrockGreen,
    brandActionDark: palette.darkGreen,

    brandInactionLight: palette.lemonCurryBrown,
    brandInaction: palette.drabBrown,
    brandInactionDark: palette.darkOliveBrown,

    questionLight: palette.lightPeach,
    question: palette.orangePeel,
    questionDark: palette.darkOrange,

    answerLight: palette.tuftsBlue,
    answer: palette.brightNavy,
    answerDark: palette.airforceBlue,

    dangerLight: palette.mauvelous,
    danger: palette.mediumRed,
    dangerDark: palette.darkRed,

    urgentLight: palette.crayolaYellow,
    urgent: palette.mustardYellow,
    urgentDark: palette.sunglowYellow,

    black: palette.black,

    darkGrey: palette.darkGrey,
    slateGrey: palette.slateGrey,
    mediumGrey: palette.mediumGrey,
    mintGrey: palette.mintGrey,
    lightMintGrey: palette.lightMintGrey,

    offWhite: palette.offWhite,
    white: palette.white,
  },
  spacing: {
    micro: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 96,
  },
  radii: {
    micro: 1,
    xs: 2,
    s: 4,
    m: 7,
    l: 14,
    xl: 18,
  },
  assetSizes: {
    micro: 9,
    xs: 14,
    s: 20,
    m: 24,
    l: 30,
    xl: 140,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    h1: {
      fontSize: 36,
      lineHeight: 45,
      fontFamily: "metropolis-black",
      fontWeight: "bold",
    },
    h2: {
      fontSize: 28,
      lineHeight: 36,
      fontFamily: "metropolis-bold",
      fontWeight: "bold",
    },
    subheading: {
      fontSize: 19.5,
      lineHeight: 24,
      fontFamily: "metropolis-regular",
    },
    button: {
      fontSize: 18,
      lineHeight: 27,
      fontFamily: "open-sans-bold",
      fontWeight: "600",
    },
    micro: {
      fontSize: 13,
      lineHeight: 13,
      fontFamily: "metropolis-bold",
    },

    label: {
      fontSize: 21,
      lineHeight: 27,
      fontFamily: "metropolis-medium",
      fontWeight: "500",
    },
    "label-light": {
      fontSize: 21,
      lineHeight: 27,
      fontFamily: "metropolis-light",
      fontWeight: "300",
    },

    sublabel: {
      fontSize: 16,
      lineHeight: 18,
      fontFamily: "metropolis-medium",
      fontWeight: "500",
    },
    "sublabel-light": {
      fontSize: 16,
      lineHeight: 18,
      fontFamily: "metropolis-light",
      fontWeight: "300",
    },

    "l-bold": {
      fontSize: 20,
      fontFamily: "open-sans-bold",
      fontWeight: "bold",
    },
    "l-regular": {
      fontSize: 20,
      fontFamily: "open-sans-regular",
    },
    "l-light": {
      fontSize: 20,
      fontFamily: "open-sans-light",
      fontWeight: "300",
    },

    "m-bold": {
      fontSize: 17,
      fontFamily: "open-sans-bold",
      fontWeight: "bold",
    },
    "m-regular": {
      fontSize: 17,
      fontFamily: "open-sans-regular",
    },
    "m-light": {
      fontSize: 17,
      fontFamily: "open-sans-light",
      fontWeight: "300",
    },

    "s-bold": {
      fontSize: 15,
      fontFamily: "open-sans-bold",
      fontWeight: "bold",
    },
    "s-regular": {
      fontSize: 15,
      fontFamily: "open-sans-regular",
    },
    "s-light": {
      fontSize: 15,
      fontFamily: "open-sans-light",
      fontWeight: "300",
    },
  },
});

export type Theme = typeof theme;
export default theme;
