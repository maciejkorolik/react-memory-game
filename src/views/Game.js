import React, { useState, useContext } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Board from "../components/Board";
import Heading from "../components/Heading";
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
        dispatch({ type: "SET_SCORE", payload: moves + 1 });
        dispatch({ type: "SET_GAME_STATE", payload: "finished" });
      }
    }, 1000);
  };

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <Heading small>Level: {state.level}</Heading>
          <Heading mobileHidden>memory card game</Heading>
          <Heading small>User: {state.user}</Heading>
        </TopBar>
        <Heading small>Moves: {moves}</Heading>
        <Board level={state.level}>
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
      </Container>
    </Wrapper>
  );
}

export default Game;

//Styled components

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  @media (min-width: 500px) {
    padding: 15px 25px;
  }
  @media (min-width: 700px) {
    padding: 20px 30px;
  }
  @media (min-width: 960px) {
    padding: 25px 40px;
  }
  @media (min-width: 1200px) {
    padding: 30px 50px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopBar = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 20px;
  box-shadow: 0px 1px 8px rgba(37, 104, 239, 0.4);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  @media (min-width: 500px) {
    height: 90px;
    padding: 20px 30px;
  }
  @media (min-width: 700px) {
    height: 100px;
    padding: 25px 40px;
  }
  @media (min-width: 1440px) {
    height: 140px;
    padding: 30px 80px;
  }
`;
