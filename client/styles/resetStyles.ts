import { BLUE_COLOR, RGB_BLACK, WHITE_COLOR } from "config";

export const resetStyles = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');

body,
html {
  line-height: 1.2;
  font-family: 'Sawarabi Gothic', sans-serif;
}
html {
  overflow-x: hidden;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
ol,
ul,
li {
  list-style: none;
  margin:0;
  padding:0;
}
li {
  display: inline-block;
}
a {
  color:black;
}
p {
  margin:0;
}

.info-tag {
  margin-right:0.4rem;
  padding:0.2rem 0.4rem;
  background-color:${BLUE_COLOR};
  color:${WHITE_COLOR};
  border-radius : 5px;
  font-size:0.7rem;
  cursor:pointer;
}

.platform-tag{
  width:90px;
  margin-right:0.7rem;
}

button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  cursor:pointer;
  background-color:inherit;
}

`;
// html,
// body,
// div,
// span,
// applet,
// object,
// iframe,
// h1,
// h4,
// h5,
// h6,
// blockquote,
// pre,
// a,
// abbr,
// acronym,
// address,
// big,
// cite,
// code,
// del,
// dfn,
// em,
// img,
// ins,
// kbd,
// q,
// s,
// samp,
// small,
// strike,
// strong,
// sub,
// sup,
// tt,
// var,
// b,
// u,
// i,
// center,
// dl,
// dt,
// dd,
// ol,
// ul,
// li,
// fieldset,
// form,
// label,
// legend,
// table,
// caption,
// tbody,
// tfoot,
// thead,
// tr,
// th,
// td,
// article,
// aside,
// canvas,
// details,
// embed,
// figure,
// figcaption,
// footer,
// header,
// hgroup,
// menu,
// nav,
// output,
// ruby,
// section,
// summary,
// time,
// mark,
// audio,
// video {
//   margin: 0;
//   padding: 0;
//   border: 0;
//   font-size: 100%;
//   vertical-align: baseline;
//   box-sizing: border-box;
//   font-family: "Rubik", "Kosugi Maru", "Nanum Gothic Coding", sans-serif, monospace;
// }
// /* HTML5 display-role reset for older browsers */
// article,
// aside,
// details,
// figcaption,
// figure,
// footer,
// header,
// hgroup,
// menu,
// nav,
// section {
//   display: block;
// }
