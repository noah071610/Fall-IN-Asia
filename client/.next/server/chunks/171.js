"use strict";
exports.id = 171;
exports.ids = [171];
exports.modules = {

/***/ 171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4617);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Cards_NewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6394);
/* harmony import */ var _hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1796);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);




function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





const NewsArticleListWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div",  true ? {
  target: "evzrmgf0"
} : 0)( true ? {
  name: "79elbk",
  styles: "position:relative;"
} : 0);

const NewsArticleList = ({
  articles,
  setSize
}) => {
  var _articles$;

  const {
    0: isReachingEnd,
    1: setIsReachingEnd
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const isVisible = (0,_hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(ref);
  const isEmpty = (articles === null || articles === void 0 ? void 0 : (_articles$ = articles[0]) === null || _articles$ === void 0 ? void 0 : _articles$.length) === 0;
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (articles) {
      var _articles;

      setIsReachingEnd(((_articles = articles[articles.length - 1]) === null || _articles === void 0 ? void 0 : _articles.length) < 10);
    }
  }, [articles]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (isVisible && !isReachingEnd && !isEmpty) {
      setSize(prev => prev + 1).then(() => {});
    }
  }, [isVisible]);
  const articlesData = articles ? articles === null || articles === void 0 ? void 0 : articles.flat() : [];
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(NewsArticleListWrapper, {
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      id: "article_list",
      className: "anchor-offset-controller"
    }), articlesData === null || articlesData === void 0 ? void 0 : articlesData.map((v, i) => {
      return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cards_NewsCard__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        article: v
      }, i);
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      ref: ref
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsArticleList);

/***/ })

};
;