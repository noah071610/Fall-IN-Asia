"use strict";
exports.id = 119;
exports.ids = [119];
exports.modules = {

/***/ 3119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1796);
/* harmony import */ var _components_Cards_ArticleColumnCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8751);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3215);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7381);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);










const StoryArticleListWrapper = (grid, gap) => /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.css)("@media (max-width: 1000px){grid-template-columns:repeat(3, 1fr);gap:0.5rem;}@media (max-width: 750px){grid-template-columns:repeat(2, 1fr);gap:0.5rem;}@media (max-width: 460px){display:block;}position:relative; transition:0.3s all;", (0,config__WEBPACK_IMPORTED_MODULE_4__/* .GRID_STYLE */ .U6)(gap, `repeat(${grid},1fr)`), ";" + ( true ? "" : 0),  true ? "" : 0);

const StoryArticleList = ({
  stories,
  grid,
  gap,
  setSize
}) => {
  var _stories$;

  const {
    0: isReachingEnd,
    1: setIsReachingEnd
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const isVisible = (0,_hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(ref);
  const isEmpty = (stories === null || stories === void 0 ? void 0 : (_stories$ = stories[0]) === null || _stories$ === void 0 ? void 0 : _stories$.length) === 0;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (stories) {
      var _stories;

      setIsReachingEnd(((_stories = stories[stories.length - 1]) === null || _stories === void 0 ? void 0 : _stories.length) < 10);
    }
  }, [stories]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isVisible && !isReachingEnd && !isEmpty) {
      setSize(prev => prev + 1).then(() => {});
    }
  }, [isVisible]);
  const storiesData = stories ? stories === null || stories === void 0 ? void 0 : stories.flat() : [];
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      css: StoryArticleListWrapper(grid, gap),
      children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        id: "article_list",
        className: "anchor-offset-controller"
      }), storiesData === null || storiesData === void 0 ? void 0 : storiesData.map((v, i) => {
        return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cards_ArticleColumnCard__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          story: v
        }, i);
      })]
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      ref: ref
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(StoryArticleList));

/***/ })

};
;