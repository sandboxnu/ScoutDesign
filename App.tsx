import React from "react";
import { ThemeProvider } from "@shopify/restyle";

import theme from "./src/theme";
import DesignSystem from "./src/library/index";

const App = () => (
  <ThemeProvider theme={theme}>
    <DesignSystem />
  </ThemeProvider>
);

export default App;
