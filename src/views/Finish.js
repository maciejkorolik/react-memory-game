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

const Image = styled.img`
  height: 100%;
  max-height: 200px;
  object-fit: contain;
  @media (min-width: 500px) {
    max-height: 250px;
  }
  @media (min-width: 700px) {
    max-height: 350px;
  }
  @media (min-width: 960px) {
    max-height: 400px;
  }
  @media (min-width: 1400px) {
    max-height: 500px;
  }
`;
