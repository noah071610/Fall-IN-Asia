"use strict";
exports.id = 297;
exports.ids = [297];
exports.modules = {

/***/ 5821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4617);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3215);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);







const EditorWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div",  true ? {
  target: "e16grxhd0"
} : 0)("margin-bottom:2rem;button{&:hover{border-radius:5px;background:", config__WEBPACK_IMPORTED_MODULE_3__/* .GRAY_COLOR */ .eR, ";}}" + ( true ? "" : 0));

const QuillEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 5038, 23)), {
  ssr: false,
  loading: () => _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
    children: "\uC5D0\uB514\uD130 \uBD88\uB7EC\uC624\uB294\uC911 ..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5038)],
    modules: ["..\\components\\Editor\\EditorWithoutImage.tsx -> " + "react-quill"]
  }
});

const EditorWithoutImage = ({
  content,
  setContent
}) => {
  const onChangeEditor = content => {
    setContent(content);
  };

  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EditorWrapper, {
    children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(QuillEditor, {
      modules: (0,config__WEBPACK_IMPORTED_MODULE_3__/* .quillModules */ .Fu)(true),
      formats: config__WEBPACK_IMPORTED_MODULE_3__/* .qullFormats */ .pC,
      value: content || "",
      onChange: (content, delta, source, editor) => onChangeEditor(editor.getHTML())
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(EditorWithoutImage));

/***/ })

};
;