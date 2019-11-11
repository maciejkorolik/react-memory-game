import styled from "styled-components";

const Input = styled.input`
  width: 250px;
  margin: 0;
  height: 50px;
  border: none;
  background-color: transparent;
  font-family: "McLaren", sans-serif;
  line-height: 1.5;
  font-size: 2.5rem;
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

  @media (min-width: 500px) {
    width: 300px;
    font-size: 2.8rem;
    height: 55px;
  }
  @media (min-width: 700px) {
    width: 300px;
    font-size: 3.2rem;
    height: 60px;
  }
`;

export default Input;
