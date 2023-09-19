import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

:root {
  --color-primary: #27ae60;
  --color-primary-50: #93d7af;
  --color-secondary: #eb5757;
  --grey-100: #333333;
  --grey-50: #828282;
  --grey-20: #e0e0e0;
  --grey-0: #f5f5f5;
  --negative: #e60000;
  --warning: #ffcd07;
  --success: #168821;
  --information: #155bcb;
}

html{
  width: 100vw;
  height: 100vh;
}

body {
  font-family: "Inter", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

button {
  cursor: pointer;
  background: transparent;
  border: none;
}

ul,
ol {
  list-style: none;
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
time, mark, audio, video, button, input {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
  box-sizing: border-box;
  outline: none;
	
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;
