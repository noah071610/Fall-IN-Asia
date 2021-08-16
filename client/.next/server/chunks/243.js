"use strict";
exports.id = 243;
exports.ids = [243];
exports.modules = {

/***/ 6243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ toastConfirmMessage)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);




const ConfirmToastForm = ({
  onClickConfirm,
  closeToast,
  message,
  type
}) => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
  style: {
    cursor: "default"
  },
  children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
    style: {
      marginLeft: "0.3rem"
    },
    children: message
  }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "confirm-btn-wrapper",
    children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
      onClick: () => {
        onClickConfirm();
        closeToast();
      },
      children: ["\uB124 ", type]
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
      onClick: closeToast,
      children: "\uC544\uB2C8\uC694"
    })]
  })]
});

const toastConfirmMessage = (onClickConfirm, message, type) => {
  (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConfirmToastForm, {
    onClickConfirm: onClickConfirm,
    message: message,
    type: type
  }), {
    position: "top-center",
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
};

/***/ })

};
;