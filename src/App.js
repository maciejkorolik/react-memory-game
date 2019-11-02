import React, { useState } from "react";
import Card from "./components/Card";
import Board from "./components/Board";
import allIcons from "./icons";
import shuffle from "lodash.shuffle";

const shuffledIcons = shuffle(allIcons);

function App() {
  const [flippedCards, setFlippedCards] = useState([]);
  const [flippedIcons, setFlippedIcons] = useState([]);
  const [won, setWon] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameState, setGameState] = useState("play");

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
        setGameState("finished");
      }
    }, 1000);
  };

  return (
    <>
      <h1>{moves} moves</h1>
      {gameState === "play" ? (
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
      ) : (
        <h1>Win!!</h1>
      )}
    </>
  );
}

export default App;
