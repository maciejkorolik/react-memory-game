import React, { useState, useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../context";
import welcomeImage from "../assets/Welcome.png";
import Input from "../components/Input";
import Button from "../components/Button";
import LevelSelector from "../components/LevelSelector";

const Welcome = () => {
  const [user, setUser] = useState("");
  //   const [error, setError] = useState("");
  const { dispatch } = useContext(GameContext);

  const handleInputChange = e => {
    if (e.target.value.length < 16) {
      setUser(e.target.value);
    } else {
      alert("please use a shorter name");
    }
  };

  const handleSubmit = () => {
    if (/\S/.test(user)) {
      dispatch({ type: "SET_USER", payload: user });
      dispatch({ type: "SET_GAME_STATE", payload: "play" });
    } else {
      alert("please fill your name");
    }
  };

  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Heading>memory card game</Heading>
          <Input
            type="text"
            placeholder="Your name"
            maxlength="15"
            value={user}
            onChange={handleInputChange}
          />
          <LevelSelector />
          <Button onClick={handleSubmit}>play!</Button>
        </InnerWrapper>
        <Image src={welcomeImage} alt="welcome image" />
      </Container>
    </Wrapper>
  );
};

export default Welcome;

//Styled components
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 568px;
  background: ${({ theme }) => theme.color1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  @media (min-width: 500px) {
    padding: 25px;
  }
  @media (min-width: 700px) {
    padding: 30px;
  }
  @media (min-width: 960px) {
    padding: 40px;
  }
  @media (min-width: 1200px) {
    padding: 50px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  max-height: 900px;
  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const InnerWrapper = styled.div`
  height: 60vh;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
  align-items: center;
  @media (min-width: 960px) {
    align-items: flex-start;
    height: 100%;
    max-height: 100%;
  }
`;

const Heading = styled.h1`
  font-family: "McLaren", sans-serif;
  line-height: 1;
  font-size: 3rem;
  color: ${({ theme }) => theme.white};
  margin-bottom: 10px;
  @media (min-width: 700px) {
    font-size: 3.5rem;
  }
  @media (min-width: 960px) {
    font-size: 5rem;
  }
  @media (min-width: 1200px) {
    font-size: 6rem;
  }
  @media (min-width: 1440px) {
    font-size: 7rem;
  }
`;

const Image = styled.img`
  object-fit: contain;
  height: 150px;
  @media (min-width: 500px) {
    height: 300px;
  }
  @media (min-width: 700px) {
    height: 400px;
  }
  @media (min-width: 960px) {
    height: 100%;
  }
`;
