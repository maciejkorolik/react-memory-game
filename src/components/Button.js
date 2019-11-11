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
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.color2};
  border-radius: 50px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default Button;
