import React, { useState, useContext } from "react";
import Card from "../components/Card";
import Board from "../components/Board";
import { GameContext } from "../context";
import { hardIcons, easyIcons } from "../icons/icons";

function Game() {
  const [flippedCards, setFlippedCards] = useState([]);
  const [flippedIcons, setFlippedIcons] = useState([]);
  const [won, setWon] = useState([]);
  const [moves, setMoves] = useState(0);

  const { state, dispatch } = useContext(GameContext);

  const shuffledIcons = state.level === "hard" ? hardIcons : easyIcons;

  const handleClick = (icon, id) => {
    if (flippedCards.length < 2) {
      const newFlippedCards = [...flippedCards, id];
      setFlippedCards(newFlippedCards);
      const newFlippedIcons = [...flippedIcons, icon];
      setFlippedIcons(newFlippedIcons);
      if (newFlippedIcons.length === 2) {
        checkCards(newFlippedIcons);
      }
    }
  };

  const checkCards = icons => {
    setMoves(moves + 1);
    let newWon = [];
    setTimeout(() => {
      if (icons[0] === icons[1]) {
        newWon = [...won, ...icons];
        setWon(newWon);
      }
      setFlippedCards([]);
      setFlippedIcons([]);
      if (newWon.length === shuffledIcons.length) {
        dispatch({ type: "SET_GAME_STATE", payload: "finished" });
      }
    }, 1000);
  };

  return (
    <>
      <h1>{moves} moves</h1>
      <Board>
        {shuffledIcons.map((icon, index) => (
          <Card
            key={index}
            id={index}
            icon={icon}
            flippedCards={flippedCards}
            hiddenCards={won}
            handleClick={handleClick}
          />
        ))}
      </Board>
      <button
        onClick={() => dispatch({ type: "SET_GAME_STATE", payload: "welcome" })}
      >
        Powrót
      </button>
    </>
  );
}

export default Game;
