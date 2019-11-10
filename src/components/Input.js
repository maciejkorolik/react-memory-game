import styled from "styled-components";

const Input = styled.input`
  width: auto;
  min-width: 290px;
  margin: 0;
  height: 60px;
  border: none;
  background-color: transparent;
  font-family: "McLaren", sans-serif;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.white};
  border-bottom: 3px solid ${({ theme }) => theme.white};
  padding: 7px 0;
  &:focus {
    outline: none;
  }
  &:invalid {
    border-bottom: 3px solid ${({ theme }) => theme.color2};
    color: ${({ theme }) => theme.color2};
  }
  &::placeholder {
    color: ${({ theme }) => theme.lightgray};
  }
`;

export default Input;
