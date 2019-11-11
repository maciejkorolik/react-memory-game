import React, { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../context";

const LevelSelector = () => {
  const { state, dispatch } = useContext(GameContext);

  const handleClick = () => {
    const level = state.level === "easy" ? "hard" : "easy";
    dispatch({ type: "SET_LEVEL", payload: level });
  };

  return (
    <LevelWrapper onClick={handleClick}>
      <Indicator level={state.level} />
      <Level>easy</Level>
      <Level>hard</Level>
    </LevelWrapper>
  );
};

export default LevelSelector;

//Styled components

const LevelWrapper = styled.div`
  position: relative;
  height: 60px;
  width: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.color1};
  border: 3px solid ${({ theme }) => theme.color2};
  cursor: pointer;
`;

const Level = styled.div`
  width: 50%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.white};
  font-family: "McLaren", sans-serif;
  line-height: 1;
  font-size: ${({ theme }) => theme.fontSize.l};
  z-index: 2;
  user-select: none;
`;

const Indicator = styled.div`
  position: absolute;
  top: -3px;
  left: -3px;
  z-index: 1;
  height: 60px;
  width: 110px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color2};
  transition: transform 0.2s ease-out;
  transform: ${({ level }) =>
    level === "easy" ? "translateX(0)" : "translateX(110px)"};
`;
