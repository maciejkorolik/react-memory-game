import React, { useState, useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../context";
import welcomeImage from "../assets/Welcome.png";
import Input from "../components/Input";
import Button from "../components/Button";

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
  background: ${({ theme }) => theme.color1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 900px;
`;

const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0;
  align-items: flex-start;
`;

const Heading = styled.h1`
  font-family: "McLaren", sans-serif;
  line-height: 1;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.white};
  margin-bottom: 30px;
`;

const Image = styled.img`
  height: 100%;
  object-fit: contain;
`;
