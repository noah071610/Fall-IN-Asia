"use strict";
exports.id = 630;
exports.ids = [630];
exports.modules = {

/***/ 4630:
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
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2156);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_4__);







const TopNavigationWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("nav",  true ? {
  target: "enbig380"
} : 0)("position:sticky; top:3rem;z-index:1;", (0,config__WEBPACK_IMPORTED_MODULE_3__/* .BORDER_THIN */ .h_)("border-bottom"), ";.nav-outer{margin-left:0.5rem;margin-right:0.5rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));;}.nav-inner-list{margin-left:auto;margin-right:auto; width:100%;", (0,config__WEBPACK_IMPORTED_MODULE_3__/* .FLEX_STYLE */ .Yk)("center", "center"), ";li{padding:1rem;cursor:pointer;;}.active-list{font-weight:bold;border-bottom:0.25rem solid ", config__WEBPACK_IMPORTED_MODULE_3__/* .BLUE_COLOR */ .vX, ";padding-bottom:0.75rem;}}.nav-outer-small{display:none;;}@media (max-width: ", config__WEBPACK_IMPORTED_MODULE_3__/* .SM_SIZE */ .oe, "){.nav-outer{display:none;;}.nav-outer-small{display:grid;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity)); span{padding-top:1rem;padding-bottom:1rem;padding-left:0px;padding-right:0px;cursor:pointer; ", (0,config__WEBPACK_IMPORTED_MODULE_3__/* .FLEX_STYLE */ .Yk)("center", "center"), ";}.active-list{font-weight:bold;border-bottom:0.15rem solid ", config__WEBPACK_IMPORTED_MODULE_3__/* .BLUE_COLOR */ .vX, ";}}}" + ( true ? "" : 0));

const TopNavigation = ({
  filter,
  list,
  onClickList
}) => {
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TopNavigationWrapper, {
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "nav-outer",
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "nav-inner-list",
        children: list === null || list === void 0 ? void 0 : list.map((v, i) => {
          return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: filter === v.value ? "active-list" : "",
            onClick: () => onClickList(v.value),
            children: v.name
          }, i);
        })
      })
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
      slidesPerView: 4.4,
      freeMode: true,
      className: "nav-outer-small",
      children: list === null || list === void 0 ? void 0 : list.map((v, i) => {
        return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
          className: filter === v.value ? "active-list" : "",
          onClick: () => onClickList(v.value),
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: v.name
          })
        }, i);
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopNavigation);

/***/ })

};
;