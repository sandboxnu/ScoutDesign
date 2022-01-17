import { createTheme } from "@shopify/restyle";

const palette = {
  sunglowYellow: "#FFCC00",
  mustardYellow: "#FFD633",
  crayolaYellow: "#FFEB99",
  darkOrange: "#F7951D",
  yellorange: "#FAAC38",
  lightPeach: "#FFDCAD",
  crimsonRed: "#C92238",
  amaranth: "#DD4055",
  mauvelous: "#EF9FAA",
  airforceBlue: "#16559C",
  brightNavy: "#1F74D6",
  tuftsBlue: "#4C94E6",
  darkOliveBrown: "#48390A",
  bisterBrown: "#7E6411",
  lemonCurryBrown: "#C9A326",
  darkSpringGreen: "#127D46",
  pantoneGreen: "#1CB55C",
  aquamarine: "#74E7AA",
  teaGreen: "#DBFBDF",
  greenGlow: "#F4FBF4",

  black: "#191710",

  darkGrey: "#3D444D",
  slateGrey: "#738487",
  mediumGrey: "#B3CCC8",
  mintGrey: "#DBE6E1",
  lightMintGrey: "#F5F5F5",

  offWhite: "#F8FCFA",
  white: "#FFFFFF",
};

const theme = createTheme({
  colors: {
    brandActionLight: palette.aquamarine,
    brandAction: palette.pantoneGreen,
    brandActionDark: palette.darkSpringGreen,

    brandInactionLight: palette.lemonCurryBrown,
    brandInaction: palette.bisterBrown,
    brandInactionDark: palette.darkOliveBrown,

    questionLight: palette.lightPeach,
    question: palette.yellorange,
    questionDark: palette.darkOrange,

    answerLight: palette.tuftsBlue,
    answer: palette.brightNavy,
    answerDark: palette.airforceBlue,

    dangerLight: palette.mauvelous,
    danger: palette.amaranth,
    dangerDark: palette.crimsonRed,

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
  assetSizes: {
    xs: 10,
    sm: 14,
    md: 24,
    lg: 28,
    xl: 96,
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
      fontSize: 27,
      lineHeight: 36,
      fontFamily: "metropolis-bold",
      fontWeight: "bold",
    },
    input: {
      fontSize: 18,
      lineHeight: 24,
      fontFamily: "open-sans-regular",
    },
    button: {
      fontSize: 18,
      lineHeight: 27,
      fontFamily: "open-sans-bold",
      fontWeight: "600",
    },
    micro: {
      fontSize: 11,
      lineHeight: 25,
      fontFamily: "metropolis-bold",
    },

    "label-medium": {
      fontSize: 21,
      lineHeight: 25,
      fontFamily: "metropolis-medium",
      fontWeight: "500",
    },
    "label-regular": {
      fontSize: 21,
      lineHeight: 25,
      fontFamily: "metropolis-regular",
      fontWeight: "400",
    },
    "label-light": {
      fontSize: 21,
      lineHeight: 25,
      fontFamily: "metropolis-light",
      fontWeight: "300",
    },

    "sublabel-medium": {
      fontSize: 15,
      lineHeight: 15,
      fontFamily: "metropolis-medium",
      fontWeight: "500",
    },
    "sublabel-regular": {
      fontSize: 15,
      lineHeight: 15,
      fontFamily: "metropolis-regular",
      fontWeight: "400",
    },
    "sublabel-light": {
      fontSize: 15,
      lineHeight: 15,
      fontFamily: "metropolis-light",
      fontWeight: "300",
    },

    "lg-bold": {
      fontSize: 20,
      fontFamily: "open-sans-bold",
      fontWeight: "bold",
    },
    "lg-regular": {
      fontSize: 20,
      fontFamily: "open-sans-regular",
    },
    "lg-light": {
      fontSize: 20,
      fontFamily: "open-sans-light",
      fontWeight: "300",
    },

    "md-black": {
      fontSize: 17,
      fontFamily: "open-sans-black",
      fontWeight: "900",
    },
    "md-bold": {
      fontSize: 17,
      fontFamily: "open-sans-bold",
      fontWeight: "bold",
    },
    "md-regular": {
      fontSize: 17,
      fontFamily: "open-sans-regular",
    },
    "md-light": {
      fontSize: 17,
      fontFamily: "open-sans-light",
      fontWeight: "300",
    },

    "sm-bold": {
      fontSize: 15,
      fontFamily: "open-sans-bold",
      fontWeight: "bold",
    },
    "sm-regular": {
      fontSize: 15,
      fontFamily: "open-sans-regular",
    },
    "sm-light": {
      fontSize: 15,
      fontFamily: "open-sans-light",
      fontWeight: "300",
    },

    "xs-bold": {
      fontSize: 10,
      fontFamily: "open-sans-bold",
      fontWeight: "bold",
    },
    "xs-regular": {
      fontSize: 10,
      fontFamily: "open-sans-regular",
    },
    "xs-light": {
      fontSize: 10,
      fontFamily: "open-sans-light",
      fontWeight: "300",
    },
  },
});

export type Theme = typeof theme;
export default theme;
