import styled, { css } from "styled-components";

const Heading = styled.h2`
  font-family: "McLaren", sans-serif;
  line-height: 1;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color1};
  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.m};
      padding: 20px 0;
    `}
`;

export default Heading;
