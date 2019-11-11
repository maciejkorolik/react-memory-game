import styled from "styled-components";

const Button = styled.button`
  width: auto;
  min-width: 220px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "McLaren", sans-serif;
  line-height: 1;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.color2};
  border-radius: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  @media (min-width: 500px) {
    min-width: 240px;
    height: 65px;
  }
  @media (min-width: 700px) {
    min-width: 260px;
    height: 70px;
    font-size: 3rem;
  }
`;

export default Button;
