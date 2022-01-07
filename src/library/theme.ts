import { createTheme } from "@shopify/restyle";

const palette = {
  sunglowYellow: "#FFCC00",
  mustardYellow: "#FFD633",
  crayolaYellow: "#FFEB99",
  tangerineOrange: "#F18A13",
  yelorannge: "#F9A94E",
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
    brandActionLight: palette.darkSpringGreen,
    brandAction: palette.pantoneGreen,
    brandActionDark: palette.aquamarine,

    brandInactionLight: palette.lemonCurryBrown,
    brandInaction: palette.bisterBrown,
    brandInactionDark: palette.darkOliveBrown,

    questionLight: palette.lightPeach,
    question: palette.yelorannge,
    questionDark: palette.tangerineOrange,

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
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    micro: {
      fontSize: 10,
      lineHeight: 10,
      color: "black",
    },
    light: {
      fontSize: 16,
      lineHeight: 20,
      color: "black",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: "black",
    },
    alt: {
      fontSize: 16,
      lineHeight: 24,
      color: "white",
    },
    subheader: {
      fontWeight: "600",
      fontSize: 18,
      lineHeight: 24,
      color: "black",
    },
    header: {
      fontWeight: "bold",
      fontSize: 24,
      lineHeight: 30,
      color: "black",
    },
    title: { fontSize: 28, lineHeight: 36 },
  },
});

export type Theme = typeof theme;
export default theme;
