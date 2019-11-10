import React, { useReducer } from "react";

let reducer = (state, action) => {
  switch (action.type) {
    case "SET_GAME_STATE":
      return { ...state, gameState: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_LEVEL":
      return { ...state, level: action.payload };
    case "SET_SCORE":
      return { ...state, score: action.payload };
    case "CLEAR_STATE":
      return initialState;
    default:
      return;
  }
};
const initialState = {
  gameState: "welcome",
  user: "",
  level: "easy",
  score: 0
};
const GameContext = React.createContext(initialState);
const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
export { GameContext, GameProvider };
