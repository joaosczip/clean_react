import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
    font-family: "Roboto", sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    background-color: #ededed;
  }

  button {
    cursor: pointer;
  }
`;
