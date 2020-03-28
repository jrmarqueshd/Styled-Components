import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    list-style: none;
    text-decoration: none;
    color: inherit;
    outline: transparent;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default Global;
