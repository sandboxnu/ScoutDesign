import React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";

import theme from "./src/library/theme";
import DesignSystem from "./src/designs";

const App = () => {
  const [loaded] = useFonts({
    "open-sans-bold": require("./assets/fonts/OpenSans/OpenSans-Bold.ttf"),
    "open-sans-semibold": require("./assets/fonts/OpenSans/OpenSans-SemiBold.ttf"),
    "open-sans-regular": require("./assets/fonts/OpenSans/OpenSans-Regular.ttf"),
    "open-sans-light": require("./assets/fonts/OpenSans/OpenSans-Light.ttf"),
    "metropolis-black": require("./assets/fonts/metropolis/Metropolis-Black.otf"),
    "metropolis-bold": require("./assets/fonts/metropolis/Metropolis-Bold.otf"),
    "metropolis-medium": require("./assets/fonts/metropolis/Metropolis-Medium.otf"),
    "metropolis-regular": require("./assets/fonts/metropolis/Metropolis-Regular.otf"),
    "metropolis-light": require("./assets/fonts/metropolis/Metropolis-Light.otf"),
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
