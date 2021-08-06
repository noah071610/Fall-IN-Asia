import { BLUE_COLOR, BORDER_THIN, GRAY_COLOR, RGB_BLACK, WHITE_COLOR } from "config";
import tw from "twin.macro";

export const resetStyles = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');

*::-webkit-scrollbar {
  width: 5px;
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

body{
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
.map-gl{
  border-radius:15px;
  border:1px solid ${RGB_BLACK(0.08)};
}
.suggestions{
  li{
    width:100%;
  }
}
.mapboxgl-ctrl-geocoder{
  border-radius:10px ;
}
.mapboxgl-ctrl-geocoder--input{
  &:focus{
    outline:none;
    border:none;
    border-radius:10px ;
    box-shadow:0px 0px 8px ${RGB_BLACK(0.3)};

  }
}
.basic-input {
  background: ${WHITE_COLOR};
  border-radius:10px;
  ${BORDER_THIN("border")};
  &::placeholder {
    color: ${RGB_BLACK(0.25)};
  }
  padding: 0.5rem 1rem;
  transition:0.3s all;
  &:focus {
    box-shadow: 0px 0px 5px ${RGB_BLACK(0.15)} !important;
  }
  &:hover {
    box-shadow: 0px 0px 5px ${RGB_BLACK(0.15)} !important;
  }
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
  padding: 0.6rem 0.8rem;
  overflow: visible;
  cursor:pointer;
  background-color:inherit;
  ${BORDER_THIN("border")};
  border-radius:3px;
  &:hover{
    box-shadow:0px 0px 5px ${RGB_BLACK(0.15)};
  }
}

.ant-divider {
  background-color: white;
  .ant-divider-inner-text {
    color: ${RGB_BLACK(0.6)};
  }
}

.toast {
  padding:0.5rem;
}

.ql-toolbar {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom: none;
  background:white;
  border: 1px solid ${RGB_BLACK(0.15)};
}
.ql-container {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background:white;
  height:250px;
  padding-bottom:1rem;
  border: 1px solid ${RGB_BLACK(0.15)};
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

.confirm-btn-wrapper {
  margin-top:.75rem;
  button{
    padding:0.2rem 0.4rem;
    border-radius:10px;
    &:hover{
      background:${GRAY_COLOR};
    }
  }
  button:first-of-type {
    margin-right:0.5rem;
  }
}

.overlay {
  cursor: pointer;
  position: absolute;
  transition:0.3s all;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${RGB_BLACK(0.4)};
}

.post-content{
  ${tw`pt-16 pb-24`}
  font-size:1rem;
  line-height: 1.7;
  img {
    width: 50%;
  }
  .ql-size-large {
    ${tw`text-2xl font-bold`}
  }
  .ql-size-huge {
    ${tw`text-4xl font-bold`}
  }
  .ql-size-small {
    ${tw`text-sm`}
  }
  ul {
    list-style-type: disc;
    list-style: inherit;
    list-style-position: inside;
  }
  ol {
    list-style-type: decimal;
    list-style: decimal;
    list-style-position: inside;
  }
  li {
    display: list-item;
    list-style: inherit;
    list-style-position: inside;
  }
  .ql-align-center {
    text-align: center;
  }
  .ql-align-right {
    text-align: right;
  }
  blockquote {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 20px;
    padding-right: 20px;
    border-left: 10px solid ${GRAY_COLOR};
  }
  .ql-indent-1 {
    margin-left: 4rem;
  }
  .ql-indent-2 {
    margin-left: 8rem;
  }
  .ql-indent-3 {
    margin-left: 12rem;
  }
  .ql-indent-4 {
    margin-left: 16rem;
  }
  .ql-indent-5 {
    margin-left: 20rem;
  }
}

.anchor-offset-parent {
  position:relative;
}

.anchor-offset-controller {
  position:absolute; 
  top:-6rem;
}

.ant-divider-horizontal.ant-divider-with-text::before,
.ant-divider-horizontal.ant-divider-with-text::after {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}

.track-vertical{
  z-index:100;
}
`;
