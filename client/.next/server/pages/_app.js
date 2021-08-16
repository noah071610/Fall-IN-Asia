(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(7381);
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(3215);
;// CONCATENATED MODULE: ./styles/styles.ts

const globalStyle = `
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

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
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
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
    color: ${(0,config/* RGB_BLACK */.Xk)(0.3)};
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
  border:1px solid ${(0,config/* RGB_BLACK */.Xk)(0.08)};
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
    box-shadow:0px 0px 8px ${(0,config/* RGB_BLACK */.Xk)(0.3)};

  }
}
.basic-input {
  background: ${config/* WHITE_COLOR */.Y};
  border-radius:10px;
  ${(0,config/* BORDER_THIN */.h_)("border")};
  &::placeholder {
    color: ${(0,config/* RGB_BLACK */.Xk)(0.25)};
  }
  padding: 0.5rem 1rem;
  transition:0.3s all;
  &:focus {
    box-shadow: 0px 0px 5px ${(0,config/* RGB_BLACK */.Xk)(0.15)} !important;
  }
  &:hover {
    box-shadow: 0px 0px 5px ${(0,config/* RGB_BLACK */.Xk)(0.15)} !important;
  }
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active,
input:-internal-autofill-selected,
input:-internal-autofill-previewed {
  background-color: white !important;
  -webkit-box-shadow: 0 0 0 30px white inset, 0px 0px 5px ${(0,config/* RGB_BLACK */.Xk)(0.15)} !important;
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
    color: ${(0,config/* RGB_BLACK */.Xk)(0.25)};
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
  ${(0,config/* BORDER_THIN */.h_)("border")};
  border-radius:3px;
  &:hover{
    box-shadow:0px 0px 5px ${(0,config/* RGB_BLACK */.Xk)(0.15)};
  }
}

.ant-divider {
  background-color: white;
  .ant-divider-inner-text {
    color: ${(0,config/* RGB_BLACK */.Xk)(0.6)};
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
  border: 1px solid ${(0,config/* RGB_BLACK */.Xk)(0.15)};
}
.ql-container {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background:white;
  height:250px;
  padding-bottom:1rem;
  border: 1px solid ${(0,config/* RGB_BLACK */.Xk)(0.15)};
}

.ant-select-selector {
  border-radius: 10px !important;
  &:focus {
    border: 1px solid ${(0,config/* RGB_BLACK */.Xk)(0.08)} !important;
    box-shadow: 0px 0px 5px ${(0,config/* RGB_BLACK */.Xk)(0.15)} !important;
  }
  &:hover {
    border: 1px solid ${(0,config/* RGB_BLACK */.Xk)(0.08)} !important;
    box-shadow: 0px 0px 5px ${(0,config/* RGB_BLACK */.Xk)(0.15)} !important;
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
      background:${config/* GRAY_COLOR */.eR};
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
  background: ${(0,config/* RGB_BLACK */.Xk)(0.4)};
}

.mobile-overlay {
  display:none;
  @media (max-width: ${config/* MD_SIZE */.SO}) {
    display:block;
  }
}

.post-content{
  ${{
  "paddingTop": "4rem",
  "paddingBottom": "6rem"
}}
  font-size:1rem;
  line-height: 1.7;
  img {
    width: 50%;
  }
  .ql-size-large {
    ${{
  "fontSize": "1.5rem",
  "lineHeight": "2rem",
  "fontWeight": "700"
}}
  }
  .ql-size-huge {
    ${{
  "fontSize": "2.25rem",
  "lineHeight": "2.5rem",
  "fontWeight": "700"
}}
  }
  .ql-size-small {
    ${{
  "fontSize": "0.875rem",
  "lineHeight": "1.25rem"
}}
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
    border-left: 10px solid ${config/* GRAY_COLOR */.eR};
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./configureStore.ts + 1 modules
var configureStore = __webpack_require__(4603);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.min.css
var swiper_min = __webpack_require__(8722);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
;// CONCATENATED MODULE: ./layout/Header/styles.tsx


const HeaderWrapper = headerDownSize => /*#__PURE__*/(0,react_.css)("width:100%;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));position:fixed; ", headerDownSize ? {
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "paddingLeft": "1rem",
  "paddingRight": "1rem"
} : {
  "paddingTop": "1rem",
  "paddingBottom": "1rem",
  "paddingLeft": "2rem",
  "paddingRight": "2rem"
}, " z-index:60;transition:0.3s all;", (0,config/* BORDER_THIN */.h_)("border-bottom"), ";", (0,config/* FLEX_STYLE */.Yk)("space-between", "center"), ";.header-logo{width:10rem;height:2rem;margin-right:1.5rem; transition:0.3s all;", headerDownSize && `transform:scale(0.8);`, " img{width:100%;height:100%;;}}.header-list{transition:0.3s all;margin-left:0.75rem;position:relative; padding:0.3rem 0.5rem;&-anchor{transition:0.3s all;font-weight:700; ", headerDownSize ? {
  "fontSize": "0.875rem",
  "lineHeight": "1.25rem"
} : "font-size:1.05rem", ";}}.notice-icon,.search-icon,.menu-icon{", headerDownSize ? {
  "fontSize": "1rem",
  "lineHeight": "1.5rem"
} : {
  "fontSize": "1.5rem",
  "lineHeight": "2rem"
}, ";}.user-icon{width:2.5rem;height:2.5rem;border-radius:9999px; transition:0.3s all;", headerDownSize && {
  "width": "2rem",
  "height": "2rem"
}, ";}@media (max-width: ", config/* MD_SIZE */.SO, "){padding-left:1rem;padding-right:1rem;;}" + ( true ? "" : 0),  true ? "" : 0);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./slices/main.ts + 1 modules
var main = __webpack_require__(3640);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./components/Popups/SearchPopUp.tsx






const SearchPopUpWrapper = width => /*#__PURE__*/(0,react_.css)("width:", width, ";input,.ant-select-selector{background-color:transparent;height:100%;padding-left:0.25rem;padding-right:0.25rem; width:200px;&:hover{border:none!important;box-shadow:none!important;}&:focus{border:none!important;box-shadow:none!important;}}" + ( true ? "" : 0),  true ? "" : 0);

const SearchPopUp = ({
  searchWord,
  onChangeSearchWord,
  onPressEnter,
  inputRef,
  width,
  setSearchWord
}) => {
  const onSelectSearchWord = (0,external_react_.useCallback)(value => {
    setSearchWord(value);
  }, []);
  return jsx_runtime_.jsx("div", {
    css: SearchPopUpWrapper(width),
    onClick: e => {
      e.stopPropagation();
    },
    children: jsx_runtime_.jsx(external_antd_.AutoComplete, {
      children: jsx_runtime_.jsx("input", {
        value: searchWord,
        onChange: onChangeSearchWord,
        placeholder: "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694...",
        onKeyPress: onPressEnter,
        ref: inputRef
      }),
      onSelect: onSelectSearchWord,
      options: searchWord === "" ? [] : config/* searchOptions */.yt,
      filterOption: (inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    })
  });
};

/* harmony default export */ const Popups_SearchPopUp = (/*#__PURE__*/(0,external_react_.memo)(SearchPopUp));
// EXTERNAL MODULE: ./hooks/useInput.ts
var useInput = __webpack_require__(8981);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "lodash"
const external_lodash_namespaceObject = require("lodash");
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./layout/Header/HeaderLeft/index.tsx









const HeaderLeftWrapper = base_default()("ul",  true ? {
  target: "e1s7inmi0"
} : 0)((0,config/* FLEX_STYLE */.Yk)("flex-start", "center"), ";@media (max-width: ", config/* MD_SIZE */.SO, "){display:none;;}" + ( true ? "" : 0));

const leftHeaderLists = [{
  name: "모멘트",
  path: "/"
}, {
  name: "연대기",
  path: "/story"
}, {
  name: "관광소식",
  path: "/news"
}];

const HeaderLeft = () => {
  const {
    asPath
  } = (0,router_.useRouter)();
  const {
    0: activePath,
    1: setActivePath
  } = (0,external_react_.useState)("");
  (0,external_react_.useEffect)(() => {
    const pathChecker = asPath === null || asPath === void 0 ? void 0 : asPath.split("/")[1];

    switch (pathChecker) {
      case "":
        setActivePath("/");
        break;

      case "country":
        setActivePath("/");
        break;

      case "story":
        setActivePath("/story");
        break;

      case "news":
        setActivePath("/news");
        break;

      case "me":
        setActivePath("");
        break;

      default:
        return;
    }
  }, [asPath]);
  return (0,jsx_runtime_.jsxs)(HeaderLeftWrapper, {
    children: [jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: jsx_runtime_.jsx("a", {
        className: "header-logo",
        children: jsx_runtime_.jsx("img", {
          src: config/* FALL_IN_ASIA_LOGO */.p6,
          alt: "header-logo"
        })
      })
    }), leftHeaderLists.map((v, i) => {
      return jsx_runtime_.jsx("li", {
        className: "header-list",
        children: jsx_runtime_.jsx(next_link.default, {
          href: v.path,
          children: jsx_runtime_.jsx("a", {
            style: activePath === v.path ? {
              color: config/* BLUE_COLOR */.vX
            } : {},
            className: "header-list-anchor",
            children: v.name
          })
        })
      }, i);
    })]
  });
};

/* harmony default export */ const Header_HeaderLeft = (HeaderLeft);
;// CONCATENATED MODULE: ./components/Modals/LoginModal/styles.tsx


const LoginModalWrapper = base_default()("div",  true ? {
  target: "eqf0uzl0"
} : 0)("position:fixed;top:50%;left:50%;padding-top:2rem;padding-bottom:2rem;padding-left:3rem;padding-right:3rem;--tw-shadow:0px 0px 15px rgba(0, 0, 0, 0.3);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));border-radius:1rem; width:600px;z-index:90;transform:translate(-50%, -50%);.image-wrapper{padding-top:1rem;padding-bottom:1rem; ", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";img{width:70%;height:85px;}}h4{margin:1rem 0;.login-icon{margin-right:0.5rem;}}input{transition:0.3s all;box-shadow:0px 0px 5px ", (0,config/* RGB_BLACK */.Xk)(0.15), ";}.btn-wrapper{margin:2rem 0 1rem 0;", (0,config/* GRID_STYLE */.U6)(".7rem", "1fr 1fr"), ";button{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));font-weight:700;padding-top:0.75rem;padding-bottom:0.75rem;--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));border-radius:0.75rem;:hover{--tw-bg-opacity:1;background-color:rgba(156, 163, 175, var(--tw-bg-opacity));};}.btn-point{--tw-bg-opacity:1;background-color:rgba(96, 165, 250, var(--tw-bg-opacity));:hover{--tw-bg-opacity:1;background-color:rgba(59, 130, 246, var(--tw-bg-opacity));};}}.social-login-divider{margin-top:3rem;}.social-login-wrapper{", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";.google-icon{", (0,config/* BORDER_THIN */.h_)("border"), ";}li{margin-right:1rem;border-radius:9999px;--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);cursor:pointer;:hover{opacity:0.7;} img{width:3rem;height:3rem; padding:1rem;}}li:last-of-type{margin-right:0px;;}}@media (max-width: ", config/* MD_SIZE */.SO, "){width:91.666667%;padding-left:2rem;padding-right:2rem;padding-top:3rem;padding-bottom:3rem;;}@media (max-width: ", config/* SM_SIZE */.oe, "){padding-left:1rem;padding-right:1rem; width:95%;.image-wrapper{padding-top:0.75rem;padding-bottom:0.75rem; img{height:50px;}}}" + ( true ? "" : 0));
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
// EXTERNAL MODULE: ./actions/user.ts
var actions_user = __webpack_require__(5145);
// EXTERNAL MODULE: ./slices/user.ts
var slices_user = __webpack_require__(1322);
;// CONCATENATED MODULE: ./components/Modals/SignupModal/styles.tsx


const SignupModalWrapper = base_default()("div",  true ? {
  target: "expnnfa0"
} : 0)(".email-wrapper{", (0,config/* GRID_STYLE */.U6)("1rem", "calc(100% - 120px - 1rem) 120px"), " .ant-form-item-control-input-content{height:100%;button{width:100%;height:100%;border-radius:0.5rem;--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);font-size:0.75rem;line-height:1rem;;}}}.email-check-wrapper{width:50%;padding-right:1rem;;}input{box-shadow:none;background:", config/* GRAY_COLOR */.eR, ";border-radius:10px;padding:0.3rem 1rem;}.form-name{", (0,config/* GRID_STYLE */.U6)("1rem", "1fr 1fr"), ";}.ant-form-item{margin-bottom:0.8rem;}.term{font-size:0.9rem;font-weight:inherit;&:hover{font-weight:bold;color:", config/* BLUE_COLOR */.vX, ";}}" + ( true ? "" : 0));
;// CONCATENATED MODULE: external "antd/lib/checkbox/Checkbox"
const Checkbox_namespaceObject = require("antd/lib/checkbox/Checkbox");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_namespaceObject);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./components/Modals/SignupModal/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const formItemLayout = {
  labelCol: {
    span: 24
  },
  wrapperCol: {
    span: 24
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    }
  }
};

const SignupModal = ({
  onFinishSignUp,
  onClickSignUpToggle,
  setOnSignUp
}) => {
  const [form] = external_antd_.Form.useForm();
  const {
    signupDone
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const [email, onChangeEmail] = (0,useInput/* default */.Z)("");
  const {
    0: onEmailCheckForm,
    1: setOnEmailCheckForm
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (signupDone) {
      (0,config/* toastSuccessMessage */.bi)(`회원가입을 완료했어요! 로그인해주세요.`);
      setOnSignUp(false);
    }
  }, [signupDone]);
  const onClickSendEmailAuth = (0,external_react_.useCallback)(e => {
    e.preventDefault();

    if (!email || !(email !== null && email !== void 0 && email.trim())) {
      (0,config/* toastErrorMessage */.p4)("이메일을 입력해주세요.");
      return;
    }

    if (!email.match(/[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/)) {
      (0,config/* toastErrorMessage */.p4)("이메일을 형식을 올바르게 작성해주세요.");
      return;
    }

    external_axios_default().post("/auth/email", {
      email
    }).then(() => {
      setOnEmailCheckForm(true);
      (0,config/* toastSuccessMessage */.bi)(`${email}로 이메일이 발송되었습니다. 인증번호를 확인해주세요.`);
    }).catch(error => {
      (0,config/* toastErrorMessage */.p4)(error);
      throw error;
    });
  }, [email]);
  return jsx_runtime_.jsx(SignupModalWrapper, {
    children: (0,jsx_runtime_.jsxs)(external_antd_.Form, _objectSpread(_objectSpread({}, formItemLayout), {}, {
      form: form,
      name: "register",
      onFinish: onFinishSignUp,
      initialValues: {
        prefix: "86"
      },
      scrollToFirstError: true,
      children: [(0,jsx_runtime_.jsxs)("div", {
        className: "email-wrapper",
        children: [jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "email",
          label: "\uC774\uBA54\uC77C",
          rules: [{
            type: "email",
            message: "이메일을 정확히 적어주세요."
          }, {
            required: true,
            message: "이메일을 작성해주세요."
          }],
          children: jsx_runtime_.jsx("input", {
            onChange: onChangeEmail,
            value: email,
            type: "email"
          })
        }), jsx_runtime_.jsx(external_antd_.Form.Item, {
          label: "\uC778\uC99D\uBC88\uD638 \uBC1C\uC1A1",
          children: jsx_runtime_.jsx("button", {
            onClick: onClickSendEmailAuth,
            children: jsx_runtime_.jsx("span", {
              children: "\uC778\uC99D\uBC88\uD638 \uBC1C\uC1A1"
            })
          })
        })]
      }), onEmailCheckForm && jsx_runtime_.jsx(external_antd_.Form.Item, {
        className: "email-check-wrapper",
        name: "authNum",
        label: "\uC778\uC99D\uBC88\uD638\uC785\uB825",
        rules: [{
          required: true,
          message: "인증번호가 6자리가 필요합니다."
        }],
        children: jsx_runtime_.jsx("input", {
          type: "number"
        })
      }), (0,jsx_runtime_.jsxs)("div", {
        className: "form-name",
        children: [jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "first_name",
          label: "\uC131",
          rules: [{
            required: true,
            message: "성을 적어주세요.",
            whitespace: true
          }],
          children: jsx_runtime_.jsx("input", {
            type: "text"
          })
        }), jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "last_name",
          label: "\uC774\uB984",
          rules: [{
            required: true,
            message: "이름을 적어주세요.",
            whitespace: true
          }],
          children: jsx_runtime_.jsx("input", {
            type: "text"
          })
        })]
      }), jsx_runtime_.jsx(external_antd_.Form.Item, {
        name: "password",
        label: "\uBE44\uBC00\uBC88\uD638",
        rules: [{
          required: true,
          message: "비밀번호를 작성해주세요."
        }, {
          min: 9,
          message: "비밀번호는 9자 이상이어야 합니다."
        }],
        hasFeedback: true,
        children: jsx_runtime_.jsx("input", {
          type: "password"
        })
      }), jsx_runtime_.jsx(external_antd_.Form.Item, _objectSpread(_objectSpread({
        name: "agreement",
        valuePropName: "checked",
        style: {
          marginTop: "1rem"
        },
        rules: [{
          validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error("약관에 동의해주세요."))
        }]
      }, tailFormItemLayout), {}, {
        children: (0,jsx_runtime_.jsxs)((Checkbox_default()), {
          children: ["\uBC31\uD328\uCEE4\uC2A4\uC758 \uC774\uC6A9\uC57D\uAD00, \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68 \uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.", " ", jsx_runtime_.jsx("a", {
            onClick: () => router_default().push("/about#policy"),
            className: "term",
            children: "\uC57D\uAD00\uBCF4\uAE30"
          })]
        })
      })), (0,jsx_runtime_.jsxs)("div", {
        className: "btn-wrapper",
        children: [jsx_runtime_.jsx("button", {
          className: "btn-point",
          onSubmit: onFinishSignUp,
          children: "\uD68C\uC6D0\uAC00\uC785"
        }), jsx_runtime_.jsx("button", {
          onClick: onClickSignUpToggle,
          children: "\uB4A4\uB85C\uAC00\uAE30"
        })]
      })]
    }))
  });
};

/* harmony default export */ const Modals_SignupModal = (SignupModal);
;// CONCATENATED MODULE: ./components/Modals/LoginModal/index.tsx















const prod = true;

const LoginModal = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    logInDone,
    user
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    0: onSignUp,
    1: setOnSignUp
  } = (0,external_react_.useState)(false);
  const [email, onChangeEmail] = (0,useInput/* default */.Z)("");
  const [password, onChangePassword] = (0,useInput/* default */.Z)("");
  const onClickSignUpToggle = (0,external_react_.useCallback)(e => {
    e.preventDefault();
    setOnSignUp(prev => !prev);
  }, []);
  const onFinishSignUp = (0,external_react_.useCallback)(values => {
    var _values$email, _values$authNum, _values$password;

    if (!values.email || !((_values$email = values.email) !== null && _values$email !== void 0 && _values$email.trim())) {
      (0,config/* toastErrorMessage */.p4)("이메일을 입력해주세요.");
      return;
    }

    if (!values.authNum || !((_values$authNum = values.authNum) !== null && _values$authNum !== void 0 && _values$authNum.trim())) {
      (0,config/* toastErrorMessage */.p4)("이메일 인증번호가 필요합니다.");
      return;
    }

    if (!values.password || !((_values$password = values.password) !== null && _values$password !== void 0 && _values$password.trim())) {
      (0,config/* toastErrorMessage */.p4)("비밀번호를 입력해주세요.");
      return;
    }

    let name = (values === null || values === void 0 ? void 0 : values.first_name) + (values === null || values === void 0 ? void 0 : values.last_name);

    if (!name || !(name !== null && name !== void 0 && name.trim())) {
      (0,config/* toastErrorMessage */.p4)("이름을 입력해주세요.");
      return;
    }

    let form = {
      email: values.email,
      name,
      password: values.password,
      authNum: values.authNum
    };
    dispatch((0,actions_user/* signupAction */.Qu)(form));
  }, []);
  const onSubmitLogin = (0,external_react_.useCallback)(e => {
    e.preventDefault();
    let form = {
      email,
      password
    };
    dispatch((0,actions_user/* logInAction */.Re)(form));
  }, [email, password]);
  (0,external_react_.useEffect)(() => {
    if (logInDone && user) {
      (0,config/* toastSuccessMessage */.bi)(`${user.name}님! 어서오세요.`);
      dispatch(main/* mainSlice.actions.toggleLoginModal */.P.actions.toggleLoginModal());
      dispatch(slices_user/* userSlice.actions.logInClear */.s.actions.logInClear());
    }
  }, [logInDone, user]);
  return jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: (0,jsx_runtime_.jsxs)(LoginModalWrapper, {
      children: [jsx_runtime_.jsx("div", {
        className: "image-wrapper",
        children: jsx_runtime_.jsx("img", {
          src: config/* FALL_IN_ASIA_LOGO */.p6,
          alt: "logo-image"
        })
      }), onSignUp ? jsx_runtime_.jsx(Modals_SignupModal, {
        onClickSignUpToggle: onClickSignUpToggle,
        onFinishSignUp: onFinishSignUp,
        setOnSignUp: setOnSignUp
      }) : (0,jsx_runtime_.jsxs)("form", {
        onSubmit: onSubmitLogin,
        children: [(0,jsx_runtime_.jsxs)("h4", {
          children: [jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
            className: "login-icon",
            icon: free_solid_svg_icons_.faUser
          }), jsx_runtime_.jsx("span", {
            children: "\uC774\uBA54\uC77C"
          })]
        }), jsx_runtime_.jsx("input", {
          className: "basic-input",
          value: email,
          onChange: onChangeEmail,
          type: "email"
        }), (0,jsx_runtime_.jsxs)("h4", {
          children: [jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
            className: "login-icon",
            icon: free_solid_svg_icons_.faKey
          }), jsx_runtime_.jsx("span", {
            children: "\uD328\uC2A4\uC6CC\uB4DC"
          })]
        }), jsx_runtime_.jsx("input", {
          className: "basic-input",
          value: password,
          onChange: onChangePassword,
          type: "password"
        }), (0,jsx_runtime_.jsxs)("div", {
          className: "btn-wrapper",
          children: [jsx_runtime_.jsx("button", {
            className: "btn-point",
            onSubmit: onSubmitLogin,
            children: "\uB85C\uADF8\uC778"
          }), jsx_runtime_.jsx("button", {
            onClick: onClickSignUpToggle,
            children: "\uAC04\uD3B8\uD68C\uC6D0\uAC00\uC785"
          })]
        })]
      }), !onSignUp && (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [jsx_runtime_.jsx(external_antd_.Divider, {
          className: "social-login-divider",
          orientation: "center",
          children: "\uC18C\uC15C \uB85C\uADF8\uC778"
        }), (0,jsx_runtime_.jsxs)("ul", {
          className: "social-login-wrapper",
          children: [jsx_runtime_.jsx("li", {
            className: "google-icon",
            children: jsx_runtime_.jsx("a", {
              href:  false ? 0 : "http://localhost:3060/api" + "/auth/google",
              children: jsx_runtime_.jsx("img", {
                src: "https://img.icons8.com/color/144/000000/google-logo.png"
              })
            })
          }), jsx_runtime_.jsx("li", {
            style: {
              background: "#FAE301"
            },
            children: jsx_runtime_.jsx("a", {
              href:  false ? 0 : "http://localhost:3060/api" + "/auth/kakao",
              children: jsx_runtime_.jsx("img", {
                src: "https://user-images.githubusercontent.com/74864925/127008226-4ea6ec83-e82d-4e7f-bc9a-95b508f750cc.png"
              })
            })
          }), jsx_runtime_.jsx("li", {
            style: {
              background: "#54BA5C"
            },
            children: jsx_runtime_.jsx("a", {
              href:  false ? 0 : "http://localhost:3060/api" + "/auth/naver",
              children: jsx_runtime_.jsx("img", {
                src: "https://user-images.githubusercontent.com/74864925/127008231-213a4559-d3e8-488d-9901-0fe3f78b58c1.png"
              })
            })
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const Modals_LoginModal = (LoginModal);
// EXTERNAL MODULE: ./components/Modals/Overlay.tsx
var Overlay = __webpack_require__(2209);
// EXTERNAL MODULE: ./components/Cards/ListCard.tsx
var ListCard = __webpack_require__(330);
;// CONCATENATED MODULE: ./components/Popups/NoticePopUp.tsx





function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







const NoticePopUpWrapper = base_default()("ul",  true ? {
  target: "e1jjn7av0"
} : 0)( true ? {
  name: "1kejwm5",
  styles: "position:absolute;right:0px;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:0.75rem;overflow:hidden;width:20rem; top:130%;z-index:80;h2{padding-top:1rem;padding-left:1rem;padding-right:1rem;padding-bottom:0.5rem;font-size:0.875rem;line-height:1.25rem;font-weight:700;;}.notices-wrapper{.list-card-wrapper{border-style:none;border-radius:0px;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;margin:0px; box-shadow:none;a{.anticon{font-size:1rem;line-height:1.5rem;;}}&:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));;}}}.no-notices{padding-top:1rem;padding-bottom:2rem;padding-left:1rem;padding-right:1rem; p{font-size:0.75rem;line-height:1.25rem;;}}.more-notices{width:100%;padding:1rem;font-size:0.875rem;line-height:1.25rem;font-weight:700;display:flex;justify-content:center;cursor:pointer;:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));} transition:0.3s all;}"
} : 0);

const NoticePopUp = () => {
  var _user$notices, _user$notices2;

  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    user
  } = (0,external_react_redux_.useSelector)(state => state.user);
  (0,external_react_.useEffect)(() => {
    dispatch((0,actions_user/* readNoticeAction */.Bn)());
  }, []);
  const onClickListCard = (0,external_react_.useCallback)(v => {
    if (v.momentId) {
      router_default().push(`/country/${v.code}/${v.momentId}`);
    } else {
      router_default().push(`/story/${v.code}/${v.storyId}`);
    }
  }, []);
  return (0,jsx_runtime_.jsxs)(NoticePopUpWrapper, {
    onClick: e => {
      e.stopPropagation();
    },
    children: [jsx_runtime_.jsx("h2", {
      children: (user === null || user === void 0 ? void 0 : (_user$notices = user.notices) === null || _user$notices === void 0 ? void 0 : _user$notices.length) > 0 ? "알림" : "알림이 없습니다."
    }), (user === null || user === void 0 ? void 0 : (_user$notices2 = user.notices) === null || _user$notices2 === void 0 ? void 0 : _user$notices2.length) > 0 ? (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [jsx_runtime_.jsx("ul", {
        className: "notices-wrapper",
        children: user === null || user === void 0 ? void 0 : user.notices.slice(0, 5).map((v, i) => jsx_runtime_.jsx(ListCard/* default */.Z, {
          onClickListCard: () => onClickListCard(v),
          title: v.header + " 알림",
          content: v.content,
          noticeId: v.id
        }, i))
      }), jsx_runtime_.jsx("button", {
        onClick: () => router_default().push(`/me/${user === null || user === void 0 ? void 0 : user.id}`),
        className: "more-notices",
        children: jsx_runtime_.jsx("span", {
          children: "\uB354\uBCF4\uAE30"
        })
      })]
    }) : jsx_runtime_.jsx("div", {
      className: "no-notices",
      children: jsx_runtime_.jsx("p", {
        children: "\uC720\uC800\uB2D8\uC774 \uBAA8\uBA58\uD2B8,\uC5F0\uB300\uAE30,\uCF54\uBA58\uD2B8 \uC791\uC131 \uBC0F \uC218\uC815\uB4F1 \uD65C\uB3D9\uC744 \uD558\uBA74 \uC800\uD76C\uAC00 \uC54C\uB824\uC904\uAC8C\uC694!"
      })
    })]
  });
};

/* harmony default export */ const Popups_NoticePopUp = (NoticePopUp);
;// CONCATENATED MODULE: ./components/Popups/ProfilePopUp.tsx









const ProfilePopUpWrapper = base_default()("ul",  true ? {
  target: "ezyrx7f0"
} : 0)("position:absolute;right:0px;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:0.75rem;overflow:hidden;width:auto; top:120%;z-index:80;white-space:nowrap;li{width:auto;display:block;cursor:pointer;:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));}padding-top:0.75rem;padding-bottom:0.75rem;padding-left:2rem;padding-right:2rem;font-size:0.875rem;line-height:1.25rem;font-weight:700; ", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";}" + ( true ? "" : 0));

const ProfilePopUp = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    user
  } = (0,external_react_redux_.useSelector)(state => state.user);
  return (0,jsx_runtime_.jsxs)(ProfilePopUpWrapper, {
    onClick: e => {
      e.stopPropagation();
    },
    children: [jsx_runtime_.jsx(next_link.default, {
      href: `/me/${user === null || user === void 0 ? void 0 : user.id}`,
      children: jsx_runtime_.jsx("a", {
        children: jsx_runtime_.jsx("li", {
          children: "\uB0B4 \uD504\uB85C\uD544"
        })
      })
    }), jsx_runtime_.jsx(next_link.default, {
      href: `/story/post`,
      children: jsx_runtime_.jsx("a", {
        children: jsx_runtime_.jsx("li", {
          children: "\uC0C8 \uC5F0\uB300\uAE30 \uC791\uC131"
        })
      })
    }), jsx_runtime_.jsx("li", {
      onClick: () => {
        dispatch(main/* mainSlice.actions.toggleProfilePopUp */.P.actions.toggleProfilePopUp());
        dispatch(main/* mainSlice.actions.toggleNoticePopUp */.P.actions.toggleNoticePopUp());
      },
      children: "\uC54C\uB9BC"
    }), jsx_runtime_.jsx("li", {
      onClick: () => dispatch((0,actions_user/* logoutAction */.Cd)()),
      children: "\uB85C\uADF8\uC544\uC6C3"
    })]
  });
};

/* harmony default export */ const Popups_ProfilePopUp = (ProfilePopUp);
;// CONCATENATED MODULE: ./layout/Header/HeaderRight/index.tsx

















const HeaderRightWrapper = base_default()("ul",  true ? {
  target: "ej90lzs0"
} : 0)((0,config/* FLEX_STYLE */.Yk)("", "center"), ";.header-list{border-radius:9999px;:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));}position:relative; transition:0.3s all;.circle-icon{position:absolute;bottom:0px;right:0px;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgba(110, 231, 183, var(--tw-text-opacity));;}&-anchor{", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";}&-login{transition:0.3s all;margin-left:0.75rem;position:relative; padding:0.3rem 0.5rem;}}@media (max-width: ", config/* MD_SIZE */.SO, "){display:none;;}" + ( true ? "" : 0));

const HeaderRight = ({
  onClickSearchWord,
  children
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    onProfilePopUp,
    onNoticePopUp,
    onSearchPopUp,
    onLoginModal
  } = (0,external_react_redux_.useSelector)(state => state.main);
  const {
    user,
    readNoticeDone,
    logoutDone
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    0: isAllReadNotices,
    1: setIsAllReadNotices
  } = (0,external_react_.useState)(true);
  const onClickMenuPopup = (0,external_react_.useCallback)(type => {
    switch (type) {
      case "login":
        dispatch(main/* mainSlice.actions.toggleLoginModal */.P.actions.toggleLoginModal());
        break;

      case "profile":
        dispatch(main/* mainSlice.actions.toggleProfilePopUp */.P.actions.toggleProfilePopUp());
        break;

      case "notice":
        dispatch(main/* mainSlice.actions.toggleNoticePopUp */.P.actions.toggleNoticePopUp());
        break;

      case "search":
        dispatch(main/* mainSlice.actions.toggleSearchPopUp */.P.actions.toggleSearchPopUp());
        break;

      default:
        return;
    }
  }, []);
  (0,external_react_.useEffect)(() => {
    if (logoutDone) {
      (0,config/* toastSuccessMessage */.bi)("로그아웃 되었습니다.");
      dispatch(slices_user/* userSlice.actions.logoutClear */.s.actions.logoutClear());
    }
  }, [logoutDone]);
  (0,external_react_.useEffect)(() => {
    if (user) {
      if (readNoticeDone) {
        setIsAllReadNotices(true);
        dispatch(slices_user/* userSlice.actions.readNoticeClear */.s.actions.readNoticeClear());
      } else {
        var _user$notices;

        user === null || user === void 0 ? void 0 : (_user$notices = user.notices) === null || _user$notices === void 0 ? void 0 : _user$notices.find(v => {
          if (v.readAt === null) {
            setIsAllReadNotices(false);
            return;
          }
        });
      }
    }
  }, [user, readNoticeDone]);
  return (0,jsx_runtime_.jsxs)(HeaderRightWrapper, {
    children: [(0,jsx_runtime_.jsxs)("li", {
      style: onSearchPopUp ? {
        background: config/* GRAY_COLOR */.eR,
        display: "flex"
      } : {
        display: "flex"
      },
      className: "header-list",
      children: [children, jsx_runtime_.jsx("a", {
        className: "header-list-anchor",
        onClick: onSearchPopUp ? onClickSearchWord : () => onClickMenuPopup("search"),
        children: jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
          className: "search-icon",
          icon: free_solid_svg_icons_.faSearch
        })
      })]
    }), user ? (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [(0,jsx_runtime_.jsxs)("li", {
        className: "header-list",
        children: [(0,jsx_runtime_.jsxs)("a", {
          className: "header-list-anchor",
          onClick: () => onClickMenuPopup("notice"),
          children: [jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
            className: "notice-icon",
            icon: free_solid_svg_icons_.faBell
          }), !isAllReadNotices && jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
            className: "circle-icon",
            icon: free_solid_svg_icons_.faCircle
          })]
        }), onNoticePopUp && jsx_runtime_.jsx(Popups_NoticePopUp, {})]
      }), (0,jsx_runtime_.jsxs)("li", {
        className: "header-list",
        style: {
          padding: 0,
          marginLeft: "1.2rem"
        },
        children: [jsx_runtime_.jsx("a", {
          className: "header-list-anchor",
          onClick: () => onClickMenuPopup("profile"),
          children: jsx_runtime_.jsx("img", {
            className: "user-icon",
            src: user === null || user === void 0 ? void 0 : user.icon,
            alt: user === null || user === void 0 ? void 0 : user.name
          })
        }), onProfilePopUp && jsx_runtime_.jsx(Popups_ProfilePopUp, {})]
      })]
    }) : jsx_runtime_.jsx("li", {
      className: "header-list-login",
      children: jsx_runtime_.jsx("a", {
        className: "header-list-anchor",
        onClick: () => onClickMenuPopup("login"),
        children: "\uB85C\uADF8\uC778"
      })
    }), onLoginModal && (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [jsx_runtime_.jsx(Modals_LoginModal, {}), jsx_runtime_.jsx(Overlay/* default */.Z, {})]
    })]
  });
};

/* harmony default export */ const Header_HeaderRight = (/*#__PURE__*/(0,external_react_.memo)(HeaderRight));
;// CONCATENATED MODULE: ./layout/Header/HeaderSmall/index.tsx













const HeaderSmallWrapper = base_default()("ul",  true ? {
  target: "e10loslq0"
} : 0)("display:none;@media (max-width: ", config/* MD_SIZE */.SO, "){width:100%; ", (0,config/* FLEX_STYLE */.Yk)("space-between", "center"), ";li{", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";}.header{&-list{margin:0;}}.header-logo{margin:0!important;}}" + ( true ? "" : 0));

const HeaderSmall = ({
  onClickSearchWord,
  children
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    onSearchPopUp
  } = (0,external_react_redux_.useSelector)(state => state.main);
  const onClickSlideMenu = (0,external_react_.useCallback)(() => {
    dispatch(main/* mainSlice.actions.toggleSlideMenu */.P.actions.toggleSlideMenu());
  }, []);
  const onClickSearchPopup = (0,external_react_.useCallback)(() => {
    dispatch(main/* mainSlice.actions.toggleSearchPopUp */.P.actions.toggleSearchPopUp());
  }, []);
  return (0,jsx_runtime_.jsxs)(HeaderSmallWrapper, {
    children: [!onSearchPopUp && (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [jsx_runtime_.jsx("li", {
        className: "header-list",
        onClick: onClickSlideMenu,
        children: jsx_runtime_.jsx("a", {
          className: "header-list-anchor",
          children: jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
            className: "menu-icon",
            icon: free_solid_svg_icons_.faBars
          })
        })
      }), jsx_runtime_.jsx("li", {
        children: jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: jsx_runtime_.jsx("a", {
            className: "header-logo",
            children: jsx_runtime_.jsx("img", {
              src: config/* FALL_IN_ASIA_LOGO */.p6,
              alt: "logo"
            })
          })
        })
      })]
    }), children, jsx_runtime_.jsx("li", {
      className: "header-list",
      style: onSearchPopUp ? {
        height: "40px"
      } : {},
      children: jsx_runtime_.jsx("a", {
        className: "header-list-anchor",
        onClick: onSearchPopUp ? onClickSearchWord : onClickSearchPopup,
        children: jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
          className: "notice-icon",
          icon: free_solid_svg_icons_.faSearch
        })
      })
    })]
  });
};

/* harmony default export */ const Header_HeaderSmall = (/*#__PURE__*/(0,external_react_.memo)(HeaderSmall));
;// CONCATENATED MODULE: ./layout/Header/index.tsx














const Header = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const [searchWord, onChangeSearchWord, setSearchWord] = (0,useInput/* default */.Z)("");
  const searchInputRef = (0,external_react_.useRef)(null);
  const mobileSearchInputRef = (0,external_react_.useRef)(null);
  const {
    0: headerDownSize,
    1: setHeaderDownSize
  } = (0,external_react_.useState)(false);
  const {
    onSearchPopUp
  } = (0,external_react_redux_.useSelector)(state => state.main);
  (0,external_react_.useEffect)(() => {
    const scrollCallBack = () => {
      if (window.scrollY > 100) {
        setHeaderDownSize(true);
      } else {
        setHeaderDownSize(false);
      }
    };

    window.addEventListener("scroll", (0,external_lodash_namespaceObject.throttle)(scrollCallBack, 300));
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  (0,external_react_.useEffect)(() => {
    if (onSearchPopUp) {
      var _searchInputRef$curre, _mobileSearchInputRef;

      searchInputRef === null || searchInputRef === void 0 ? void 0 : (_searchInputRef$curre = searchInputRef.current) === null || _searchInputRef$curre === void 0 ? void 0 : _searchInputRef$curre.focus();
      mobileSearchInputRef === null || mobileSearchInputRef === void 0 ? void 0 : (_mobileSearchInputRef = mobileSearchInputRef.current) === null || _mobileSearchInputRef === void 0 ? void 0 : _mobileSearchInputRef.focus();
    }
  }, [onSearchPopUp, searchInputRef, mobileSearchInputRef]);
  const onClickSearchWord = (0,external_react_.useCallback)(() => {
    if (searchWord === "" || !(searchWord !== null && searchWord !== void 0 && searchWord.trim())) {
      dispatch(main/* mainSlice.actions.toggleSearchPopUp */.P.actions.toggleSearchPopUp());
      return;
    }

    router_default().push(`/search?keyword=${searchWord}`);
  }, [searchWord]);
  const onPressEnter = (0,external_react_.useCallback)(e => {
    if (e.key === "Enter") {
      if (searchWord === "" || !(searchWord !== null && searchWord !== void 0 && searchWord.trim())) {
        return;
      }

      router_default().push(`/search?keyword=${searchWord}`);
      dispatch(main/* mainSlice.actions.toggleSearchPopUp */.P.actions.toggleSearchPopUp());
    }
  }, [searchWord]);
  return (0,jsx_runtime_.jsxs)("header", {
    css: HeaderWrapper(headerDownSize),
    children: [jsx_runtime_.jsx(Header_HeaderSmall, {
      onClickSearchWord: onClickSearchWord,
      children: onSearchPopUp && jsx_runtime_.jsx(Popups_SearchPopUp, {
        width: "100%",
        inputRef: mobileSearchInputRef,
        onPressEnter: onPressEnter,
        searchWord: searchWord,
        setSearchWord: setSearchWord,
        onChangeSearchWord: onChangeSearchWord
      })
    }), jsx_runtime_.jsx(Header_HeaderLeft, {}), jsx_runtime_.jsx(Header_HeaderRight, {
      onClickSearchWord: onClickSearchWord,
      children: onSearchPopUp && jsx_runtime_.jsx(Popups_SearchPopUp, {
        width: "200px",
        inputRef: searchInputRef,
        onPressEnter: onPressEnter,
        searchWord: searchWord,
        setSearchWord: setSearchWord,
        onChangeSearchWord: onChangeSearchWord
      })
    })]
  });
};

/* harmony default export */ const layout_Header = (Header);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
;// CONCATENATED MODULE: ./layout/Footer/styles.tsx


const FooterWrapper = base_default()("div",  true ? {
  target: "e11onaq60"
} : 0)("padding-top:2rem;padding-bottom:2rem;padding-left:0.75rem;padding-right:0.75rem;--tw-bg-opacity:1;background-color:rgba(55, 65, 81, var(--tw-bg-opacity)); ", (0,config/* BORDER_THIN */.h_)("border-top"), ";.footer-inner{width:", config/* XLG_SIZE */.lv, ";margin-left:auto;margin-right:auto;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));padding-left:2rem;padding-right:2rem; h1,h2,h3,h4,a{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));;}h1,h2,h3{font-weight:700;;}.footer-top{margin-bottom:2rem; h1{margin-bottom:0.5rem;font-size:1.875rem;line-height:2.25rem;;}}.footer-list-wrapper{display:flex;margin-bottom:0.5rem; .footer-list{margin-right:3rem;margin-bottom:1rem; h2{margin-bottom:1rem;;}ul{li{display:block;padding-bottom:0.75rem;;}}.anticon{margin-right:0.5rem;;}}}.license{margin-bottom:1rem;;}}@media (max-width: 1300px){.footer-inner{width:100%;padding-left:0.5rem;padding-right:0.5rem;;}}@media (max-width: ", config/* SM_SIZE */.oe, "){.footer-inner{.footer-top{margin-bottom:1.5rem; span{font-size:0.75rem;line-height:1rem;;}}.footer-list-wrapper{", (0,config/* GRID_STYLE */.U6)("0.5rem", "1fr 2fr 1fr"), " margin-bottom:1.5rem; .footer-list{margin:0px; h2{font-size:0.875rem;line-height:1.25rem;;}ul{li{font-size:0.75rem;line-height:1rem;padding-bottom:0.75rem;;}}.anticon{margin-right:0.5rem;;}}}}.license{font-size:0.75rem;line-height:1rem;;}}" + ( true ? "" : 0));
;// CONCATENATED MODULE: ./layout/Footer/index.tsx









const Footer = () => {
  return jsx_runtime_.jsx(FooterWrapper, {
    children: (0,jsx_runtime_.jsxs)("div", {
      className: "footer-inner",
      children: [(0,jsx_runtime_.jsxs)("div", {
        className: "footer-top",
        children: [jsx_runtime_.jsx("h1", {
          children: "fallinasia.com"
        }), jsx_runtime_.jsx("span", {
          children: "\uC544\uC2DC\uC544\uB97C \uC0AC\uB791\uD558\uB294 \uC5EC\uD589\uC790\uB4E4\uC758 \uC791\uC740 \uCEE4\uBBA4\uB2C8\uD2F0"
        })]
      }), (0,jsx_runtime_.jsxs)("div", {
        className: "footer-list-wrapper",
        children: [(0,jsx_runtime_.jsxs)("div", {
          className: "footer-list footer-sitemap",
          children: [jsx_runtime_.jsx("h2", {
            children: "Site Map"
          }), (0,jsx_runtime_.jsxs)("ul", {
            children: [jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: jsx_runtime_.jsx("a", {
                children: jsx_runtime_.jsx("li", {
                  children: "\uBAA8\uBA58\uD2B8"
                })
              })
            }), jsx_runtime_.jsx(next_link.default, {
              href: "/story",
              children: jsx_runtime_.jsx("a", {
                children: jsx_runtime_.jsx("li", {
                  children: "\uC5F0\uB300\uAE30"
                })
              })
            }), jsx_runtime_.jsx(next_link.default, {
              href: "/news",
              children: jsx_runtime_.jsx("a", {
                children: jsx_runtime_.jsx("li", {
                  children: "\uAD00\uAD11\uB274\uC2A4"
                })
              })
            })]
          })]
        }), (0,jsx_runtime_.jsxs)("div", {
          className: "footer-list footer-contact",
          children: [jsx_runtime_.jsx("h2", {
            children: "Contact"
          }), (0,jsx_runtime_.jsxs)("ul", {
            children: [jsx_runtime_.jsx("li", {
              children: (0,jsx_runtime_.jsxs)("a", {
                href: "mailto:noah071610@naver.com",
                children: [jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                  className: "anticon",
                  icon: free_solid_svg_icons_.faEnvelope
                }), "noah071610@naver.com"]
              })
            }), jsx_runtime_.jsx("li", {
              children: (0,jsx_runtime_.jsxs)("a", {
                href: "https://www.instagram.com/salmonchobab/",
                target: "_blank",
                rel: "noreferrer",
                children: [jsx_runtime_.jsx(icons_.InstagramFilled, {}), "salmonchobab"]
              })
            }), jsx_runtime_.jsx("li", {
              children: (0,jsx_runtime_.jsxs)("a", {
                href: "https://github.com/noah071610",
                target: "_blank",
                rel: "noreferrer",
                children: [jsx_runtime_.jsx(icons_.GithubFilled, {}), "noah071610"]
              })
            })]
          })]
        }), (0,jsx_runtime_.jsxs)("div", {
          className: "footer-list footer-aboutsite",
          children: [jsx_runtime_.jsx("h2", {
            children: "About site"
          }), (0,jsx_runtime_.jsxs)("ul", {
            children: [jsx_runtime_.jsx(next_link.default, {
              href: "/about",
              children: jsx_runtime_.jsx("a", {
                children: jsx_runtime_.jsx("li", {
                  children: "\uAC1C\uBC1C\uC790 \uC815\uBCF4"
                })
              })
            }), jsx_runtime_.jsx(next_link.default, {
              href: "/about#policy",
              children: jsx_runtime_.jsx("a", {
                children: jsx_runtime_.jsx("li", {
                  children: "\uC774\uC6A9 \uC57D\uAD00"
                })
              })
            }), jsx_runtime_.jsx(next_link.default, {
              href: "/about",
              children: jsx_runtime_.jsx("a", {
                children: jsx_runtime_.jsx("li", {
                  children: "\uCEE4\uD53C \uC0AC\uC8FC\uAE30"
                })
              })
            })]
          })]
        })]
      }), jsx_runtime_.jsx("h4", {
        className: "license",
        children: "\u24D2 2021 JANG HYUN SOO (Noah) All Rights Resrved."
      })]
    })
  });
};

/* harmony default export */ const layout_Footer = (Footer);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./layout/MobileSlideMenu/styles.tsx


const MobileSlideMenuWrapper = base_default()("nav",  true ? {
  target: "ecyqefu0"
} : 0)("position:fixed;top:0px;left:0px;height:100vh;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));width:83.333333%;padding:1rem;display:none; z-index:100;transition:0.15s all;.slide-menu-logo{width:12rem;height:2.5rem;margin-bottom:1rem; transition:0.3s all;}.slide-menu-divider{margin-top:0px;margin-bottom:1rem; span{font-size:0.875rem;line-height:1.25rem;font-weight:700;;}}.user-profile-wrapper{", (0,config/* GRID_STYLE */.U6)("1rem", "1fr 2fr"), " margin-top:1rem;margin-bottom:1rem; .icon-wrapper{img{width:100%;border-radius:9999px;;}}h2{font-size:0.875rem;line-height:1.25rem;font-weight:700;;}p{font-size:0.75rem;line-height:1rem;margin-top:0.5rem; ", (0,config/* ELLIPSIS_STYLE */.kA)(1.4, 2, "auto"), ";}}.user-menu-list{margin-bottom:1rem; ", (0,config/* GRID_STYLE */.U6)("", "repeat(3,1fr)"), ";li{display:block;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.75rem;padding-bottom:0.75rem; ", (0,config/* FLEX_STYLE */.Yk)("center", "center", "column"), ";", (0,config/* BORDER_THIN */.h_)("border"), ";.list-icon{width:1.5rem;height:1.5rem;;}h4{font-size:0.75rem;line-height:1rem;margin-top:0.5rem;;}}.middle-list{border-left:none;border-right:none;}}.slide-menu-sub-title{padding-left:0.25rem;font-size:0.75rem;line-height:1rem;font-weight:700;;}.login-btn{width:100%;border-radius:0.375rem;display:block;padding:0.75rem;font-weight:700;font-size:0.875rem;line-height:1.25rem;margin-top:1rem;margin-bottom:1.5rem;--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); ", (0,config/* FLEX_STYLE */.Yk)("flex-start", "center"), ";.social-icon-wrapper{margin-left:0.75rem; li{margin-right:-0.5rem;border-radius:9999px;--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); img{width:1.75rem;height:1.75rem;padding:0.5rem;;}}li:last-of-type{margin-right:0px;;}}}.link-menu-list{padding-top:0.5rem; li{display:block;padding-top:0.75rem;padding-bottom:0.75rem;font-weight:700;padding-left:0.75rem;font-size:1rem;line-height:1.5rem; ", (0,config/* FLEX_STYLE */.Yk)("space-between", "center"), ";border-left:3px solid ", config/* GRAY_COLOR */.eR, ";.direct-link{width:100%;;}.anticon{transition:0.3s all;font-size:1.125rem;line-height:1.75rem;padding-left:1rem;;}}}.slide-menu-footer{position:absolute;bottom:2rem;left:1rem;padding-right:4rem; h4{line-height:1rem;font-size:0.75rem;margin-bottom:0.75rem;;}a{margin-right:1rem;;}}@media (max-width: ", config/* MD_SIZE */.SO, "){display:block;;}" + ( true ? "" : 0));
;// CONCATENATED MODULE: ./layout/MobileSlideMenu/index.tsx















const MobileSlideMenu = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: activePath,
    1: setActivePath
  } = (0,external_react_.useState)("");
  const {
    asPath
  } = (0,router_.useRouter)();
  const {
    user
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    onSlideMenu
  } = (0,external_react_redux_.useSelector)(state => state.main);
  (0,external_react_.useEffect)(() => {
    const pathChecker = asPath === null || asPath === void 0 ? void 0 : asPath.split("/")[1];

    switch (pathChecker) {
      case "":
        setActivePath("moment");
        break;

      case "country":
        setActivePath("moment");
        break;

      case "story":
        setActivePath("story");
        break;

      case "news":
        setActivePath("news");
        break;

      case "about":
        setActivePath("about");
        break;

      default:
        return;
    }
  }, [asPath]);
  const onClickLogin = (0,external_react_.useCallback)(() => {
    dispatch(main/* mainSlice.actions.toggleLoginModal */.P.actions.toggleLoginModal());
  }, []);
  return jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: (0,jsx_runtime_.jsxs)(MobileSlideMenuWrapper, {
      style: onSlideMenu ? {
        transform: "translateX(0)"
      } : {
        transform: "translateX(-100%)"
      },
      children: [jsx_runtime_.jsx("div", {
        children: jsx_runtime_.jsx("a", {
          children: jsx_runtime_.jsx("img", {
            className: "slide-menu-logo",
            src: config/* FALL_IN_ASIA_LOGO */.p6,
            alt: "logo"
          })
        })
      }), jsx_runtime_.jsx(external_antd_.Divider, {
        className: "slide-menu-divider",
        orientation: "left",
        children: jsx_runtime_.jsx("span", {
          children: user ? "프로필" : "로그인"
        })
      }), user ? (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [(0,jsx_runtime_.jsxs)("div", {
          className: "user-profile-wrapper",
          children: [jsx_runtime_.jsx("div", {
            className: "icon-wrapper",
            children: jsx_runtime_.jsx("img", {
              src: (user === null || user === void 0 ? void 0 : user.icon) || config/* DEFAULT_ICON_URL */.u5,
              alt: "icon-image"
            })
          }), (0,jsx_runtime_.jsxs)("div", {
            className: "user-info",
            children: [(0,jsx_runtime_.jsxs)("h2", {
              children: [user === null || user === void 0 ? void 0 : user.name, "\uB2D8"]
            }), jsx_runtime_.jsx("p", {
              children: user === null || user === void 0 ? void 0 : user.introduce
            })]
          })]
        }), (0,jsx_runtime_.jsxs)("ul", {
          className: "user-menu-list",
          children: [jsx_runtime_.jsx(next_link.default, {
            href: `/me/${user === null || user === void 0 ? void 0 : user.id}`,
            children: jsx_runtime_.jsx("a", {
              children: (0,jsx_runtime_.jsxs)("li", {
                children: [jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                  className: "list-icon",
                  icon: free_solid_svg_icons_.faUser
                }), jsx_runtime_.jsx("h4", {
                  children: "\uB0B4 \uD504\uB85C\uD544"
                }), " "]
              })
            })
          }), jsx_runtime_.jsx(next_link.default, {
            href: `/story/post`,
            children: jsx_runtime_.jsx("a", {
              children: (0,jsx_runtime_.jsxs)("li", {
                className: "middle-list",
                children: [jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                  className: "list-icon",
                  icon: free_solid_svg_icons_.faEdit
                }), jsx_runtime_.jsx("h4", {
                  children: "\uC0C8 \uC5F0\uB300\uAE30"
                })]
              })
            })
          }), jsx_runtime_.jsx("a", {
            onClick: () => dispatch((0,actions_user/* logoutAction */.Cd)()),
            children: (0,jsx_runtime_.jsxs)("li", {
              children: [jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                className: "list-icon",
                icon: free_solid_svg_icons_.faSignOutAlt
              }), jsx_runtime_.jsx("h4", {
                children: "\uB85C\uADF8\uC544\uC6C3"
              })]
            })
          })]
        })]
      }) : (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [jsx_runtime_.jsx("h3", {
          className: "slide-menu-sub-title",
          children: "\uB85C\uADF8\uC778\uD558\uACE0 \uB354 \uB9CE\uC740 \uC11C\uBE44\uC2A4\uB97C \uB204\uB9AC\uC138\uC694!"
        }), (0,jsx_runtime_.jsxs)("button", {
          onClick: onClickLogin,
          className: "login-btn",
          children: [jsx_runtime_.jsx("span", {
            children: "\uAC04\uD3B8\uB85C\uADF8\uC778"
          }), (0,jsx_runtime_.jsxs)("ul", {
            className: "social-icon-wrapper",
            children: [jsx_runtime_.jsx("li", {
              style: {
                background: config/* WHITE_COLOR */.Y
              },
              children: jsx_runtime_.jsx("img", {
                src: "https://img.icons8.com/color/144/000000/google-logo.png"
              })
            }), jsx_runtime_.jsx("li", {
              style: {
                background: "#FAE301"
              },
              children: jsx_runtime_.jsx("img", {
                src: "https://user-images.githubusercontent.com/74864925/127008226-4ea6ec83-e82d-4e7f-bc9a-95b508f750cc.png"
              })
            }), jsx_runtime_.jsx("li", {
              style: {
                background: "#54BA5C"
              },
              children: jsx_runtime_.jsx("img", {
                src: "https://user-images.githubusercontent.com/74864925/127008231-213a4559-d3e8-488d-9901-0fe3f78b58c1.png"
              })
            })]
          })]
        })]
      }), jsx_runtime_.jsx(external_antd_.Divider, {
        className: "slide-menu-divider",
        orientation: "left",
        children: jsx_runtime_.jsx("span", {
          children: "\uBC14\uB85C\uAC00\uAE30"
        })
      }), (0,jsx_runtime_.jsxs)("ul", {
        className: "link-menu-list",
        children: [jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: jsx_runtime_.jsx("a", {
            className: "direct-link",
            children: jsx_runtime_.jsx("li", {
              style: activePath === "moment" ? {
                borderLeft: `3px solid ${config/* BLUE_COLOR */.vX}`
              } : {},
              children: "\uBAA8\uBA58\uD2B8"
            })
          })
        }), jsx_runtime_.jsx(next_link.default, {
          href: "/story",
          children: jsx_runtime_.jsx("a", {
            className: "direct-link",
            children: jsx_runtime_.jsx("li", {
              style: activePath === "story" ? {
                borderLeft: `3px solid ${config/* BLUE_COLOR */.vX}`
              } : {},
              children: "\uC5F0\uB300\uAE30"
            })
          })
        }), jsx_runtime_.jsx(next_link.default, {
          href: "/news",
          children: jsx_runtime_.jsx("a", {
            className: "direct-link",
            children: jsx_runtime_.jsx("li", {
              style: activePath === "news" ? {
                borderLeft: `3px solid ${config/* BLUE_COLOR */.vX}`
              } : {},
              children: "\uC5EC\uD589\uC18C\uC2DD"
            })
          })
        })]
      }), (0,jsx_runtime_.jsxs)("div", {
        className: "slide-menu-footer",
        children: [jsx_runtime_.jsx("h4", {
          className: "license",
          children: "\u24D2 2021 JANG HYUN SOO (Noah) All Rights Resrved."
        }), (0,jsx_runtime_.jsxs)("div", {
          children: [jsx_runtime_.jsx(next_link.default, {
            href: "/about",
            children: jsx_runtime_.jsx("a", {
              children: "About us"
            })
          }), jsx_runtime_.jsx(next_link.default, {
            href: "/about#policy",
            children: jsx_runtime_.jsx("a", {
              children: "\uC774\uC6A9\uC57D\uAD00"
            })
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const layout_MobileSlideMenu = (MobileSlideMenu);
;// CONCATENATED MODULE: ./pages/_app.tsx




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























const App = ({
  Component,
  pageProps
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    onProfilePopUp,
    onNoticePopUp,
    onSearchPopUp,
    onSlideMenu
  } = (0,external_react_redux_.useSelector)(state => state.main);
  const onClickClosePopup = (0,external_react_.useCallback)(e => {
    if (onProfilePopUp) {
      dispatch(main/* mainSlice.actions.closeProfilePopUp */.P.actions.closeProfilePopUp());
    }

    if (onNoticePopUp) {
      dispatch(main/* mainSlice.actions.closeNoticePopUp */.P.actions.closeNoticePopUp());
    }

    if (onSearchPopUp && e.target.nodeName !== "HEADER") {
      dispatch(main/* mainSlice.actions.closeSearchPopUp */.P.actions.closeSearchPopUp());
    }
  }, [onProfilePopUp, onNoticePopUp, onSearchPopUp]);
  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [jsx_runtime_.jsx((head_default()), {
      children: jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })
    }), (0,jsx_runtime_.jsxs)("div", {
      onClick: onClickClosePopup,
      children: [jsx_runtime_.jsx(react_.Global, {
        styles: globalStyle
      }), jsx_runtime_.jsx(layout_Header, {}), jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps)), jsx_runtime_.jsx(layout_Footer, {}), jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {}), jsx_runtime_.jsx(layout_MobileSlideMenu, {}), onSlideMenu && jsx_runtime_.jsx(Overlay/* default */.Z, {
        isMobile: true
      })]
    })]
  });
};

/* harmony default export */ const _app = (configureStore/* wrapper.withRedux */.Y.withRedux(App));

/***/ }),

/***/ 4722:
/***/ (() => {



/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 2372:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 7381:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ 4554:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 4617:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/styled/base");

/***/ }),

/***/ 887:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 799:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 6139:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 953:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 2744:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 2034:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,979,212], () => (__webpack_exec__(4087)));
module.exports = __webpack_exports__;

})();