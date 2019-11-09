import React, { useContext } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GameContext } from "../context";
import Welcome from "./Welcome";
import Finish from "./Finish";
import Game from "./Game";

const Root = () => {
  const { state } = useContext(GameContext);
  console.log(state);
  switch (state.gameState) {
    case "play":
      return <Game />;
    case "finished":
      return <Finish />;
    default:
      return <Welcome />;
  }
};

export default Root;
