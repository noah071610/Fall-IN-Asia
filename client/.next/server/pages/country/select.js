"use strict";
(() => {
var exports = {};
exports.id = 672;
exports.ids = [672];
exports.modules = {

/***/ 9709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);






const AutoCompleteForm = ({
  countryOptions,
  selectedCountry,
  setCountry,
  disabled
}) => {
  const onChangeCountry = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(value => {
    setCountry(value);
  }, []);
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.AutoComplete, {
    allowClear: true,
    disabled: disabled,
    className: "autoComplete-form",
    options: selectedCountry !== "" ? countryOptions : countryOptions === null || countryOptions === void 0 ? void 0 : countryOptions.slice(0, 8).concat([{
      value: "...",
      code: ""
    }]),
    value: selectedCountry,
    onChange: onChangeCountry,
    placeholder: "\uAD6D\uAC00\uAC80\uC0C9",
    filterOption: (inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(AutoCompleteForm));

/***/ }),

/***/ 2227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4617);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AutoCompleteForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9709);
/* harmony import */ var _components_CountryPreviewSlide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(970);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7749);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4608);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3215);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layout_LGLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2584);
/* harmony import */ var configureStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4603);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var actions_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5145);
/* harmony import */ var _components_CountryAllview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4666);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }














const GobackBtn = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div",  true ? {
  target: "e1x651cc1"
} : 0)((0,config__WEBPACK_IMPORTED_MODULE_7__/* .FLEX_STYLE */ .Yk)("flex-end", "center"), ";margin-bottom:2rem;button{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));width:7rem;border-radius:0.75rem;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;:hover{--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);};}" + ( true ? "" : 0));

const AutoCompleteWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div",  true ? {
  target: "e1x651cc0"
} : 0)( true ? {
  name: "14r092o",
  styles: "--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));display:flex;padding:0.5rem;border-radius:1rem; .search-bar{width:100%;}.autoComplete-form{width:100%;.ant-select-selector{border:none;&:focus{border:none!important;}&:hover{border:none!important;}}}.search-btn{width:5rem;margin-left:1rem;border-radius:0.75rem;cursor:pointer;--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));:hover{--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));};}"
} : 0);

const select = ({
  initialCountries
}) => {
  const {
    data: countries
  } = swr__WEBPACK_IMPORTED_MODULE_5___default()("/country", utils_fetcher__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, _objectSpread({
    initialData: initialCountries
  }, config__WEBPACK_IMPORTED_MODULE_7__/* .noRevalidate */ .nb));
  const {
    0: selectedCountry,
    1: setCountry
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const countryOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => countries === null || countries === void 0 ? void 0 : countries.map((v, i) => {
    return {
      value: v.name,
      code: v.code
    };
  }), [countries]);
  const onClickGotoCountryPage = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    let pickCountry = countryOptions === null || countryOptions === void 0 ? void 0 : countryOptions.find(v => v.value === selectedCountry);

    if (pickCountry) {
      next_router__WEBPACK_IMPORTED_MODULE_8___default().push(`/country/${pickCountry.code}`);
    } else {
      (0,config__WEBPACK_IMPORTED_MODULE_7__/* .toastErrorMessage */ .p4)("유효하지 않은 국가입니다. 다시 확인해주세요.");
      return;
    }
  }, [selectedCountry, countryOptions]);
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_LGLayout__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GobackBtn, {
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_8___default().back(),
        children: "\uB4A4\uB85C\uAC00\uAE30"
      })
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      className: "main-title",
      children: "\uC778\uAE30\uC5EC\uD589\uC9C0"
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CountryPreviewSlide__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      isMain: true,
      slidesPerView: 4.7
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      className: "main-title",
      children: "\uAD6D\uAC00\uC120\uD0DD"
    }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AutoCompleteWrapper, {
      children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "search-bar",
        children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AutoCompleteForm__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          countryOptions: countryOptions,
          selectedCountry: selectedCountry,
          setCountry: setCountry
        })
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "search-btn",
        onClick: onClickGotoCountryPage,
        children: "\uC774\uB3D9"
      })]
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CountryAllview__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
      isMain: true,
      countries: countries
    })]
  });
};

const getServerSideProps = configureStore__WEBPACK_IMPORTED_MODULE_10__/* .wrapper.getServerSideProps */ .Y.getServerSideProps(store => async ({
  req,
  res
}) => {
  const cookie = req ? req.headers.cookie : "";
  (axios__WEBPACK_IMPORTED_MODULE_11___default().defaults.headers.Cookie) = "";

  if (req && cookie) {
    (axios__WEBPACK_IMPORTED_MODULE_11___default().defaults.headers.Cookie) = cookie;
  }

  await store.dispatch((0,actions_user__WEBPACK_IMPORTED_MODULE_12__/* .getUserInfoAction */ .pZ)());
  const initialCountries = await (0,utils_fetcher__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(`/country`);
  return {
    props: {
      initialCountries
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (select);

/***/ }),

/***/ 7381:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 4554:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 4617:
/***/ ((module) => {

module.exports = require("@emotion/styled/base");

/***/ }),

/***/ 6139:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 953:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2744:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2034:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 1596:
/***/ ((module) => {

module.exports = require("swiper/core");

/***/ }),

/***/ 2156:
/***/ ((module) => {

module.exports = require("swiper/react");

/***/ }),

/***/ 7749:
/***/ ((module) => {

module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [979,382,322,666], () => (__webpack_exec__(2227)));
module.exports = __webpack_exports__;

})();