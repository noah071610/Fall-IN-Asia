"use strict";
exports.id = 382;
exports.ids = [382];
exports.modules = {

/***/ 2584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4617);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3215);





const LGLayoutWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("main",  true ? {
  target: "e18l3cmt0"
} : 0)("padding-top:4rem; background-color:", config__WEBPACK_IMPORTED_MODULE_3__/* .GRAY_COLOR */ .eR, ";.layout{width:", config__WEBPACK_IMPORTED_MODULE_3__/* .LG_SIZE */ .PQ, ";margin-left:auto;margin-right:auto;padding-top:2rem;padding-bottom:2rem; .main-title{font-size:1rem;line-height:1.5rem;font-weight:700;margin-top:2rem;margin-bottom:1rem;;}.main-title:first-of-type{margin-top:0px;margin-bottom:1rem;;}@media (max-width: ", config__WEBPACK_IMPORTED_MODULE_3__/* .LG_SIZE */ .PQ, "){width:100%;padding-left:1rem;padding-right:1rem;padding-top:2rem;padding-bottom:4rem;;}}" + ( true ? "" : 0));

const LGLayout = ({
  children
}) => {
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LGLayoutWrapper, {
    children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "layout",
      children: children
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LGLayout);

/***/ }),

/***/ 4608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const fetcher = url => axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
  withCredentials: true
}).then(response => response.data.data);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);

/***/ })

};
;