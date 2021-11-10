import { createTheme } from '@shopify/restyle'

const palette = {
  yellow: '#FFCC00',
  lightYellow: '#e9d499',
  lightOrange: '#E7C69B',
  orange: '#E57D1F',
  darkOrange: '#E58950',
  red: '#CA2B3B',
  lightRed: '#f1bbc0',
  green: '#17A165',
  lightGreen: '#c9dbbc',
  brightGreen: '#25de8e',
  darkGreen: '#138855',
  purple: '#7F5289',
  brown: '#3a2e04',
  lightBrown: '#605d51',
  darkBrown: '#241C0D',
  blue: '#0864A3',
  lightBlue: '#7a92a5',
  backgroundBlue: '#a6ceee',

  black: '#0B0B0B',
  white: '#F0F2F3',
};


const theme = createTheme({
  colors: {
    primary: palette.green,
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
});

export type Theme = typeof theme;
export default theme;
