import React from "react";
import { GameProvider } from "./context";
import Root from "./views/Root";

const App = () => (
  <GameProvider>
    <Root />
  </GameProvider>
);

export default App;
