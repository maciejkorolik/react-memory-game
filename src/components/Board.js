import styled from "styled-components";

const Board = styled.div`
  display: grid;
  grid-template-columns: ${({ level }) =>
    level === "hard" ? "repeat(6, 170px)" : "repeat(4, 170px)"};
  grid-gap: 48px;
`;

export default Board;
