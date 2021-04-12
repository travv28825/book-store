import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-weight: 400;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 16px;
    line-height: 1.4;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    resize: none;
    -webkit-scrollbar: none;
    text-decoration: none;
  }
  body {
    position: relative;
  }
  .separator::before {
    content: '•';
    color: white;
    padding: 0.4rem;
  }
`;

export default GlobalStyle;
