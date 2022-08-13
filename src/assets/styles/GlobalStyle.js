import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;   
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
 
  }

  a,
  button {
    font-family: 'Montserrat', sans-serif;
  }
`;
