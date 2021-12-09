import React from "react";
import { ThemeProvider } from "@shopify/restyle";

import theme from "./src/library/theme";
import DesignSystem from "./src/designs";

const App = () => (
  <ThemeProvider theme={theme}>
    <DesignSystem />
  </ThemeProvider>
);

export default App;
