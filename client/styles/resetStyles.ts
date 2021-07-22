import { BLUE_COLOR, BORDER_THIN, RGB_BLACK, WHITE_COLOR, WHITE_STYLE } from "config";

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
  &:hover{
    color:black;
  }
}
button{
  background: none;
  border: none;
  cursor: pointer;
}
input {
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${RGB_BLACK(0.3)};
  }
}
p {
  margin:0;
}
h1,h2,h3,h4,h5{
  margin:0;
}

.basic-input {
  background: ${WHITE_COLOR};
  ${WHITE_STYLE(false)};
  &::placeholder {
    color: ${RGB_BLACK(0.25)};
  }
  padding: 0.5rem 1rem;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active,
input:-internal-autofill-selected,
input:-internal-autofill-previewed {
  background-color: white !important;
  -webkit-box-shadow: 0 0 0 30px white inset, 0px 0px 5px ${RGB_BLACK(0.15)} !important;
}

textarea {
  border: none;
  padding: 0.5rem 0.3rem;
  width: 100%;
  background:none;
  line-height:1.7;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${RGB_BLACK(0.25)};
  }
  &::-webkit-scrollbar {
    display: none;
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
  transition: 0.25s all;
  height:100%;
  transform:translateY(0);
}

.roll-up{
  transition: 0.1s all;
  height:0px;
  transform:translateY(-100%);
}

@keyframes modalIn {
  from {
    transform-origin: top right;
    transform: scale(0.3);
  }
  to {
    transform-origin: top right;
    transform: scale(1);
  }
}

.reverse {
  transform:rotate(180deg);
}

.toast {
  padding:0.5rem;
}

.slick-left-arrow {
  display: block;
  z-index: 1;
  top: 50%;
  position: absolute;
  font-size: 2rem;
  transform: translateY(-50%);
  color: ${WHITE_COLOR};
  cursor: pointer;
}
.slick-right-arrow {
  display: block;
  z-index: 1;
  top: 50%;
  right: 0;
  position: absolute;
  font-size: 2rem;
  transform: translateY(-50%);
  color: ${WHITE_COLOR};
  cursor: pointer;
}


.ant-select-selector {
  border-radius: 10px !important;
  &:focus {
    border: 1px solid ${RGB_BLACK(0.08)} !important;
    box-shadow: 0px 0px 5px ${RGB_BLACK(0.15)} !important;
  }
  &:hover {
    border: 1px solid ${RGB_BLACK(0.08)} !important;
    box-shadow: 0px 0px 5px ${RGB_BLACK(0.15)} !important;
  }
}

`;
