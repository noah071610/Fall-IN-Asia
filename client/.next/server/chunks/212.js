"use strict";
exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4617);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_html2textConverter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9398);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2372);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5145);




function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }








const ListCardWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("li",  true ? {
  target: "e13arn230"
} : 0)( true ? {
  name: "15ky558",
  styles: "position:relative;width:100%;padding:1rem;cursor:pointer;margin-bottom:0.5rem;--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); transition:0.3s all;&:hover{--tw-shadow:0px 0px 15px rgba(0, 0, 0, 0.3);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); .anticon{display:block;}}.anticon{display:none;position:absolute;right:1rem;--tw-text-opacity:1;color:rgba(209, 213, 219, var(--tw-text-opacity)); top:50%;transform:translateY(-50%);&:hover{--tw-text-opacity:1;color:rgba(107, 114, 128, var(--tw-text-opacity));;}}h4{margin-bottom:0.25rem;font-size:0.75rem;line-height:1rem;;}p{font-weight:700;font-size:0.75rem;line-height:1.5rem;padding-right:1.5rem;;}"
} : 0);

const ListCard = ({
  title,
  content,
  onClickListCard,
  noticeId,
  revalidateUserInfo
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const onClickDeleteNotice = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e, noticeId) => {
    e.stopPropagation();
    axios__WEBPACK_IMPORTED_MODULE_4___default().delete(`/user/notice/${noticeId}`).then(() => {
      if (revalidateUserInfo) {
        revalidateUserInfo();
      } else {
        dispatch((0,actions_user__WEBPACK_IMPORTED_MODULE_6__/* .getUserInfoAction */ .pZ)());
      }
    });
  }, [noticeId]);
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ListCardWrapper, {
    onClick: onClickListCard,
    className: "list-card-wrapper",
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
      children: title
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      children: (0,utils_html2textConverter__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(content)
    }), noticeId && _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
      onClick: e => onClickDeleteNotice(e, noticeId),
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DeleteOutlined, {})
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListCard);

/***/ }),

/***/ 2209:
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slices_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3640);



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





const OverlayWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div",  true ? {
  target: "e1uhlky70"
} : 0)( true ? {
  name: "1twvrb1",
  styles: "position:fixed;top:0px;left:0px;width:100vw;height:100vh;--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity));opacity:0.4; z-index:80"
} : 0);

const Overlay = ({
  isMobile
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const closeModal = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    dispatch(slices_main__WEBPACK_IMPORTED_MODULE_4__/* .mainSlice.actions.closeModal */ .P.actions.closeModal());
  }, []);
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OverlayWrapper, {
    className: isMobile ? "mobile-overlay" : "",
    onClick: closeModal
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overlay);

/***/ }),

/***/ 8981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useInput(initialValue) {
  const {
    0: Value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  const handler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setValue(e.target.value);
  }, []);
  return [Value, handler, setValue];
}

/***/ }),

/***/ 9398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ html2textConverter)
/* harmony export */ });
function html2textConverter(content) {
  return (content === null || content === void 0 ? void 0 : content.replace(/(<([^>]+)>)/gi, "").replaceAll(/&nbsp;|&amp;/gi, "")) || "";
}

/***/ })

};
;