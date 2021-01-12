import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: Montserrat, sans-serif;
}
html,
body,
div,
h3,
h4,
p,
ul {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: 'Montserrat', sans-serif;
}`;

export default GlobalStyles;
