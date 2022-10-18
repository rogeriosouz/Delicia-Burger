import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }: any) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;
      outline: none;
    }

    button {
      border: 0 none;
      cursor: pointer;
    }

    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      font-size: 1.6rem;

      font-family: 'Inter', sans-serif;
    }
  `}
`;
