import { BLACK_COLOR, BLUE_COLOR, RGB_BLACK, WHITE_COLOR } from "config";

export const resetStyles = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');

*::-webkit-scrollbar {
  width: 7px;
}

/* Track */
*::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
*::-webkit-scrollbar-thumb {
  background: rgb(185, 185, 185);
}

/* Handle on hover */
*::-webkit-scrollbar-thumb:hover {
  background: rgb(153, 153, 153);
}

*{
  box-sizing: border-box;
}
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
h1,h2,h3,h4,h5{
  margin:0;
}
.tag {
  margin:0 0.4rem 0.4rem 0;
  padding:0.5rem 1rem;
  border-radius : 5px;
  background-color:${WHITE_COLOR};
  border:1px solid ${RGB_BLACK(0.15)};
  font-size:0.7rem;
  cursor:pointer;
  &:hover{
    border:1px solid ${BLUE_COLOR};
  }
}

.point {
  font-size:1.8rem;
  font-weight:bold;
  color:${BLUE_COLOR};
}

.margin-div{
  height:2rem;
}
.big-margin-div{
  height:10rem;
}

.basic-input {
  border: none;
  padding: 0.5rem 0.3rem;
  width: 100%;
  border-bottom: 2px solid ${RGB_BLACK(0.1)};
  transition: 0.3s all;
  &:focus {
    outline: none;
    border-bottom: 2px solid ${BLUE_COLOR};
  }
  &::placeholder {
    color: ${RGB_BLACK(0.25)};
  }
  &:hover {
    border-bottom: 2px solid ${BLUE_COLOR};
  }
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

.ant-divider {
  background-color: rgba(0, 0, 0, 0.15);
}

.drop-down {
  transition: 0.5s all;
  height:100%;
  transform:translateY(0);
}

.roll-up{
  transition: 0.5s all;
  height:0px;
  transform:translateY(-100%);
}

.reverse {
  transform:rotate(180deg);
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
