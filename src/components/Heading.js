import styled, { css } from "styled-components";

const Heading = styled.h2`
  font-family: "McLaren", sans-serif;
  margin: 0;
  line-height: 1;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.color1};
  @media (min-width: 500px) {
    font-size: 2.8rem;
  }
  @media (min-width: 700px) {
    font-size: 3rem;
  }
  @media (min-width: 960px) {
    font-size: 3.2rem;
  }
  @media (min-width: 1200px) {
    font-size: 3.5rem;
  }
  ${({ small }) =>
    small &&
    css`
      font-size: 2rem;
      padding: 15px 0;
      @media (min-width: 500px) {
        font-size: 2.2rem;
      }
      @media (min-width: 700px) {
        font-size: 2.5rem;
      }
    `}
  ${({ mobileHidden }) =>
    mobileHidden &&
    css`
      display: none;
      @media (min-width: 800px) {
        display: block;
      }
    `}
`;

export default Heading;
