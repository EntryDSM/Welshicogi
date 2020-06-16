import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme,
} from "styled-components";

export enum COLORS {
  MAIN_COLOR_1 = "#62d3e8",
  MAIN_COLOR_2 = "#ffffff",
  SERVE_COLOR_1 = "#ededed",
  SERVE_COLOR_2 = "#000000",
  SERVE_COLOR_3 = "#efefef",
  SERVE_COLOR_4 = "#6f6f6f",
  SERVE_COLOR_5 = "#e3e3e3",
  HR_COLOR = "#dbdbdb",
  DEFAULT_SHADOW = "0 4px 6px 0 rgba(0, 0, 0, 0.12)",
}

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
  
  ::-moz-selection {
    background: #c5c5c5;
    color: #000;
  }
  ::selection {
    background: #c5c5c5;
    color: #000;
  }

  html, body {
    width: 100%;
    min-width: 1024px;
    font-family: 'NanumSquare', sans-serif;
  }
  input, textarea {
    &:-webkit-autofill {
      box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0.8) inset;
    }
    border: solid 1px #ffa2c0;
    border-radius: 5px;
    &[type=password] {
    font-family: sans-serif;
    }
    &:focus {
      outline: none;
    }
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  a {
    &:link{
      text-decoration: none;
    }
    &:visited{
      text-decoration: none;
    }
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  div {
    &::-webkit-scrollbar {
      width: 6px;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      width: 6px;
      background: rgb(160, 160, 160);
    }
  }
  button {
    all: unset;
    cursor: pointer;
    
    &:focus, &:active {
      outline: "#0000FF"
    }
  }
`;

export default GlobalStyle;
