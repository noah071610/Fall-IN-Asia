"use strict";
exports.id = 412;
exports.ids = [412];
exports.modules = {

/***/ 6419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7381);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3215);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);







const PosterCardWrapper = isMain => /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)("width:100%;position:relative;overflow:hidden;cursor:pointer; ", isMain ? {
  "borderRadius": "1rem",
  "height": "15rem"
} : {
  "height": "20rem"
}, " background-repeat:no-repeat;background-position:center;background-size:100% 100%;.poster-content{position:absolute;z-index:10;bottom:1.5rem;left:2rem; h1{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));margin-bottom:1rem;font-size:3rem;line-height:1; font-family:'Shadows Into Light',cursive;}p{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));padding-right:4rem;;}}.poster-overlay{width:100%;height:100%;position:absolute;top:0px;left:0px; background:linear-gradient(0deg, rgba(0, 0, 0, 0.25) 32%, rgba(23, 21, 21, 0) 48%);}@media (max-width: ", config__WEBPACK_IMPORTED_MODULE_2__/* .SM_SIZE */ .oe, "){", isMain ? {
  "borderRadius": "0px",
  "height": "12rem"
} : {
  "height": "12rem"
}, " .poster-content{bottom:2rem;left:1rem; h1{font-size:1.5rem;line-height:2rem;margin-bottom:0.5rem;;}p{font-size:0.75rem;line-height:1rem;;}}}" + ( true ? "" : 0),  true ? "" : 0);

const PosterCard = ({
  isMain,
  image,
  title,
  desc,
  link,
  path
}) => {
  const onClickPoster = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(e => {
    e.stopPropagation();

    if (path) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default().push(path);
      return;
    }

    if (link) {
      window.open(link, "_blank");
      return;
    }
  }, [path, link]);
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    onClick: e => onClickPoster(e),
    css: PosterCardWrapper(isMain),
    style: {
      backgroundImage: `url(${image || config__WEBPACK_IMPORTED_MODULE_2__/* .WORLD_IMAGE */ .Of}
      )`
    },
    children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "poster-content",
      children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: title
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: desc
      })]
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "poster-overlay"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PosterCard);

/***/ }),

/***/ 8985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ NextArrow),
/* harmony export */   "$": () => (/* binding */ PrevArrow)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4617);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(887);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(799);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3215);







const SliderRightArrow = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("a",  true ? {
  target: "expuhhe1"
} : 0)("display:block;z-index:10;top:50%;right:0px;position:absolute;font-size:2.25rem;line-height:2.5rem;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));padding:1rem;opacity:0.5; transform:translateY(-50%);transition:0.3s all;&:hover{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));opacity:1; transform:translate(10%, -50%);}@media (max-width: ", config__WEBPACK_IMPORTED_MODULE_4__/* .SM_SIZE */ .oe, "){right:0px;padding-right:0px;;}" + ( true ? "" : 0));

const SliderLeftArrow = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("a",  true ? {
  target: "expuhhe0"
} : 0)("display:block;z-index:10;top:50%;left:0px;position:absolute;font-size:2.25rem;line-height:2.5rem;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));padding:1rem;opacity:0.5; transform:translateY(-50%);transition:0.3s all;&:hover{transform:translate(-10%, -50%);--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));opacity:1;;}@media (max-width: ", config__WEBPACK_IMPORTED_MODULE_4__/* .SM_SIZE */ .oe, "){left:0px;padding-left:0px;;}" + ( true ? "" : 0));

const NextArrow = props => {
  const {
    onClick,
    slideCount,
    currentSlide
  } = props;
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: slideCount - 1 !== currentSlide && _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SliderRightArrow, {
      onClick: onClick,
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowCircleRight
      })
    })
  });
};
const PrevArrow = props => {
  const {
    onClick,
    slideCount,
    currentSlide
  } = props;
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: currentSlide !== 0 && _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SliderLeftArrow, {
      onClick: onClick,
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowCircleLeft
      })
    })
  });
};

/***/ }),

/***/ 1796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useOnScreen = ref => {
  const {
    0: isIntersecting,
    1: setIntersecting
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  return isIntersecting;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useOnScreen);

/***/ })

};
;