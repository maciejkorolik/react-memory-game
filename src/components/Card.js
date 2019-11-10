import React from "react";
import styled, { css } from "styled-components";

const Card = ({ icon, id, flippedCards, hiddenCards, handleClick }) => {
  const clickable = !flippedCards.includes(id) && !hiddenCards.includes(icon);
  return (
    <>
      <CardWrapper onClick={clickable ? () => handleClick(icon, id) : null}>
        <CardSide front flipped={flippedCards.includes(id)}>
          <img src={icon} alt="icon" />
        </CardSide>
        <CardSide
          back
          won={hiddenCards.includes(icon)}
          flipped={flippedCards.includes(id)}
        />
      </CardWrapper>
    </>
  );
};

export default Card;

//Styled components

const CardWrapper = styled.div`
  width: 170px;
  height: 170px;
  margin: 0px;
  position: relative;
`;

const CardSide = styled.div`
  position: absolute;
  cursor: ${({ flipped }) => (flipped ? "default" : "pointer")};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  transition: transform 0.6s cubic-bezier(0.21, 1.39, 0.49, 1.1),
    background-color 0.6s ease;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  box-shadow: 0px 1px 8px rgba(37, 104, 239, 0.4);
  ${({ front }) =>
    front &&
    css`
      background-color: ${({ theme }) => theme.white};
      border: 2px solid ${({ theme }) => theme.color1};
      display: flex;
      justify-content: center;
      align-items: center;
      transform: ${({ flipped }) =>
        flipped ? "rotateY(0deg)" : "rotateY(180deg)"};
    `}
  ${({ back }) =>
    back &&
    css`
      background-color: ${({ theme, won }) =>
        won ? theme.white : theme.color1};
      transform: ${({ flipped }) =>
        flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
    `};
`;
