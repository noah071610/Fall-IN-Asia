"use strict";
(() => {
var exports = {};
exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 8738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3215);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_LGLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2584);
/* harmony import */ var _sections_MainPage_MomentPostingForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3368);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var configureStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4603);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var actions_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5145);
/* harmony import */ var utils_fetcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4608);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7749);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_11__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const edit = ({
  initialMoment
}) => {
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    user
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.user);
  const {
    data: moment
  } = swr__WEBPACK_IMPORTED_MODULE_11___default()(`/moment/${query === null || query === void 0 ? void 0 : query.code}/${query === null || query === void 0 ? void 0 : query.momentId}/0`, utils_fetcher__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, _objectSpread({
    initialData: initialMoment
  }, config__WEBPACK_IMPORTED_MODULE_2__/* .noRevalidate */ .nb));
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!user) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default().back();
    }

    if (moment) {
      if ((user === null || user === void 0 ? void 0 : user.id) !== (moment === null || moment === void 0 ? void 0 : moment.user.id)) {
        next_router__WEBPACK_IMPORTED_MODULE_3___default().back();
      }
    }
  }, [user, moment]);
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_LGLayout__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      className: "main-title",
      children: "\uBAA8\uBA58\uD2B8 \uC218\uC815"
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_MainPage_MomentPostingForm__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      editMoment: moment
    })]
  });
};

const getServerSideProps = configureStore__WEBPACK_IMPORTED_MODULE_7__/* .wrapper.getServerSideProps */ .Y.getServerSideProps(store => async ({
  req,
  query
}) => {
  const cookie = req ? req.headers.cookie : "";
  (axios__WEBPACK_IMPORTED_MODULE_8___default().defaults.headers.Cookie) = "";

  if (req && cookie) {
    (axios__WEBPACK_IMPORTED_MODULE_8___default().defaults.headers.Cookie) = cookie;
  }

  await store.dispatch((0,actions_user__WEBPACK_IMPORTED_MODULE_9__/* .getUserInfoAction */ .pZ)());
  const initialMoment = await (0,utils_fetcher__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(query && `/moment/${query === null || query === void 0 ? void 0 : query.code}/${query === null || query === void 0 ? void 0 : query.momentId}?uuid=0`);
  return {
    props: {
      initialMoment
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);

/***/ }),

/***/ 2372:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

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

/***/ 9639:
/***/ ((module) => {

module.exports = require("next/dynamic");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5038:
/***/ ((module) => {

module.exports = require("react-quill");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 2034:
/***/ ((module) => {

module.exports = require("react-toastify");

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
var __webpack_exports__ = __webpack_require__.X(0, [979,287,368,382], () => (__webpack_exec__(8738)));
module.exports = __webpack_exports__;

})();