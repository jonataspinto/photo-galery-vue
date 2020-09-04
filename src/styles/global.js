import { injectGlobal } from 'vue-styled-components';
import theme from './theme'
import { variables } from './variables';

export const GlobalStyles = injectGlobal`
  *{
    ${variables}
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: var(${theme.backgroundColor});
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body, #app {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .router-link-exact-active {
    color: #42b983;
  }
`;