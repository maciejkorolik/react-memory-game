import React from "react";
import { GameProvider } from "./context";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import { theme } from "./theme/theme";
import Root from "./views/Root";

const App = () => (
  <GameProvider>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </GameProvider>
);

export default App;
