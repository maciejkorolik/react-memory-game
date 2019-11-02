import React from "react";
import styled, { css } from "styled-components";

const CardWrapper = styled.div`
  width: 100px;
  height: 150px;
  margin: 20px;
  position: relative;
  opacity: ${({ won }) => (won ? "0.2" : "1")};
`;

const CardSide = styled.div`
  position: absolute;
  cursor: ${({ flipped }) => (flipped ? "default" : "pointer")};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: transform 0.6s cubic-bezier(0.21, 1.39, 0.49, 1.1);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
  ${({ front }) =>
    front &&
    css`
      background-color: #9c92a3;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: ${({ flipped }) =>
        flipped ? "rotateY(0deg)" : "rotateY(180deg)"};
    `}
  ${({ back }) =>
    back &&
    css`
      background-color: #0b3142;
      transform: ${({ flipped }) =>
        flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
    `};
`;

const Card = ({ icon, id, flippedCards, hiddenCards, handleClick }) => {
  const clickable = !flippedCards.includes(id) && !hiddenCards.includes(icon);
  return (
    <>
      <CardWrapper
        won={hiddenCards.includes(icon)}
        onClick={clickable ? () => handleClick(icon, id) : null}
      >
        <CardSide front flipped={flippedCards.includes(id)}>
          <img src={icon} alt="icon" />
        </CardSide>
        <CardSide back flipped={flippedCards.includes(id)} />
      </CardWrapper>
    </>
  );
};

export default Card;
