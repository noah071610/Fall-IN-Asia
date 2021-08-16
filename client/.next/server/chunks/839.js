"use strict";
exports.id = 839;
exports.ids = [839];
exports.modules = {

/***/ 5839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3215);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;
const pinStyle = {
  fill: "#d00",
  stroke: "none"
};

const Pin = ({
  size,
  story,
  isUserInfoPage
}) => {
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: isUserInfoPage ? _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Popover, {
      className: "marker-popup",
      content: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        style: {
          width: "250px",
          height: "180px"
        },
        src: (story === null || story === void 0 ? void 0 : story.thumbnail) || config__WEBPACK_IMPORTED_MODULE_2__/* .NO_IMAGE_URL */ .Q7,
        alt: "story_thumbnail"
      }),
      title: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        style: {
          padding: "0.5rem 0"
        },
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default().push(`/story/${story === null || story === void 0 ? void 0 : story.code}/${story === null || story === void 0 ? void 0 : story.id}`),
        children: story === null || story === void 0 ? void 0 : story.region
      }),
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: "pin",
        height: size,
        viewBox: "0 0 24 24",
        style: pinStyle,
        children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: ICON
        })
      })
    }) : _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
      className: "pin",
      height: size,
      viewBox: "0 0 24 24",
      style: pinStyle,
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        d: ICON
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(Pin));

/***/ })

};
;