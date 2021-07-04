import { BLACK_COLOR, BLUE_COLOR, BORDER_THIN, RGB_BLACK, WHITE_COLOR } from "config";

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
  transition:0.3s all;
  &:hover{
    border:1px solid ${BLUE_COLOR};
    color:${BLUE_COLOR};
    span,a{
      color:${BLUE_COLOR}
    }
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

.basic-textarea {
  border: none;
  padding: 0.5rem 0.3rem;
  width: 100%;
  border-bottom: 2px solid ${RGB_BLACK(0.1)};
  line-height:1.7;
  &:focus {
    outline: none;
    border-bottom: 2px solid ${BLUE_COLOR};
  }
  &::placeholder {
    color: ${RGB_BLACK(0.25)};
  }
  &::-webkit-scrollbar {
    display: none;
}
  &:hover {
    border-bottom: 2px solid ${BLUE_COLOR};
  }
}

.basic-btn {
  border: none;
  margin: 0;
  padding: 0.6rem 1.5rem;
  width: auto;
  overflow: visible;
  cursor:pointer;
  background-color:inherit;
  transition:0.3s all;
  ${BORDER_THIN("border")};
  border-radius:3px;
  &:hover{
    border:1px solid ${BLUE_COLOR};
    color:${BLUE_COLOR};
  }
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

.toast {
  padding:0.5rem;
}

`;
