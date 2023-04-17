import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
#__next{
  width: 100%;
  height: 100%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-weight: 500;
}
html,
body {
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  background-color: #FFF8EA;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  border: 0;
  display: block;
}
header,
main,
footer,
nav,
section,
article,
aside {
  display: block;
}
.swiper{
  width: 100%;
  height: 700px;
}
.swiper-slide{
  border-radius: 5px;
}
`;
