import React, { useContext } from "react";
import styled from "styled-components";
import Heading from "../components/Heading";
import Button from "../components/Button";
import FinishImage from "../assets/Finish.png";
import { GameContext } from "../context";

const Finish = () => {
  const { state, dispatch } = useContext(GameContext);

  const handleButtonClick = () => {
    dispatch({ type: "CLEAR_STATE" });
  };

  return (
    <Wrapper>
      <Image src={FinishImage} />
      <Heading>Congratulations {state.user}!</Heading>
      <Heading small>Your score: {state.score} moves</Heading>
      <Button onClick={handleButtonClick}>play again!</Button>
    </Wrapper>
  );
};

export default Finish;

//Styled components
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const Image = styled.img`
  height: 100%;
  max-height: 480px;
  object-fit: contain;
`;
