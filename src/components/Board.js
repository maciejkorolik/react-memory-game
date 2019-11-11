import styled from "styled-components";

const Board = styled.div`
  display: grid;
  /* grid-template-columns: ${({ level }) =>
    level === "hard" ? "repeat(6, 170px)" : "repeat(4, 170px)"}; */
  grid-template-columns: repeat(3, 90px);
  grid-auto-rows: 90px;
  grid-gap: 10px;
  @media (min-width: 400px) {
   grid-template-columns: repeat(3, 100px);
  grid-auto-rows: 100px;
  grid-gap: 15px;
  }
  @media (min-width: 500px) {
    grid-template-columns: repeat(3, 120px);
  grid-auto-rows: 120px;
  grid-gap: 20px;
  }
  @media (min-width: 700px) {
    grid-template-columns: repeat(4, 130px);
  grid-auto-rows: 130px;
  grid-gap: 20px;
  }
  @media (min-width: 960px) {
    grid-template-columns: ${({ level }) =>
      level === "hard" ? "repeat(6, 140px)" : "repeat(4, 140px)"};
  grid-auto-rows: 140px;
  grid-gap: 20px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: ${({ level }) =>
      level === "hard" ? "repeat(6, 145px)" : "repeat(4, 145px)"};
  grid-auto-rows: 145px;
  grid-gap: 25px;
  }
   @media (min-width: 1440px) {
    grid-template-columns: ${({ level }) =>
      level === "hard" ? "repeat(6, 170px)" : "repeat(4, 170px)"};
  grid-auto-rows: 170px;
  grid-gap: 40px;
  }
`;

export default Board;
