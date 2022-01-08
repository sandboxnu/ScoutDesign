import React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";

import theme from "./src/library/theme";
import DesignSystem from "./src/designs";

const App = () => {
  const [loaded] = useFonts({
    Metropolis: require("./assets/fonts/metropolis.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <DesignSystem />
    </ThemeProvider>
  );
};

export default App;
