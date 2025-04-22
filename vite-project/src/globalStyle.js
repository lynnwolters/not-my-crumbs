import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;  
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, p, li, a, button, span, label, input, textarea {
    font-family: "Cabin", sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;
