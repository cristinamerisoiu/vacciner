import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  font-size: 16px;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  width:100%;
  height:100%;
  background:#E8F1F2;  
}
`;
