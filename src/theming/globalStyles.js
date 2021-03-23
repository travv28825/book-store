import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-weight: 400;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-size: 16px;
    line-height: 1.4;
    font-family: "IBM Plex Sans", sans-serif;
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
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    background-size: 400% 400%;
    background-position: var(--bg-position);
    transition: background-position 2s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .separator::before {
    content: '•';
    color: white;
    padding: 0.4rem;
  }
  i{
    margin: 0 5px;
  }
  a:hover,a:focus{
    text-decoration: none;
  }
  a:active {
    color: blueviolet;
  }
  .modal-dialog{
    top: 100px;
  }

`;
export default GlobalStyle;
