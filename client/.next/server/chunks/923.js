"use strict";
exports.id = 923;
exports.ids = [923];
exports.modules = {

/***/ 2599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4617);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3215);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





const EditorWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div",  true ? {
  target: "ezk77yv0"
} : 0)( true ? {
  name: "v8devy",
  styles: ".ql-editor{padding:1rem;img{width:50%;}}"
} : 0);

const Editor = ({
  setContent,
  prevContent,
  isStory
}) => {
  const Quill =  false ? 0 : () => false;
  const quillElement = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const quillInstance = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (quillElement !== null && quillElement !== void 0 && quillElement.current) {
      quillInstance.current = new Quill(quillElement === null || quillElement === void 0 ? void 0 : quillElement.current, (0,config__WEBPACK_IMPORTED_MODULE_2__/* .quillSetting */ .Kd)(false));
    }

    const quill = quillInstance === null || quillInstance === void 0 ? void 0 : quillInstance.current;

    if (prevContent) {
      quill.root.innerHTML = prevContent;
    }

    quill === null || quill === void 0 ? void 0 : quill.on("text-change", () => {
      onChangeEditor(quill === null || quill === void 0 ? void 0 : quill.root.innerHTML);
    });
    const toolbar = quill === null || quill === void 0 ? void 0 : quill.getModule("toolbar");
    toolbar.addHandler("image", () => (0,config__WEBPACK_IMPORTED_MODULE_2__/* .imageHandler */ .J2)(quillInstance, isStory));
  }, []);

  const onChangeEditor = content => {
    setContent(content);
  };

  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EditorWrapper, {
    children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      style: {
        height: "70vh"
      },
      ref: quillElement
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(Editor));

/***/ }),

/***/ 6996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5508);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Pin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5839);
/* harmony import */ var react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8798);
/* harmony import */ var react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 //@ts-ignore



const CountrySelectMap = ({
  setRegion,
  marker,
  setMarker,
  lat,
  lng
}) => {
  const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: viewport,
    1: setViewport
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    width: "100%",
    height: 500,
    latitude: lat || 37.50529626491968,
    longitude: lng || 126.98047832475031,
    zoom: 8
  });
  const handleViewportChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newViewport => setViewport(newViewport), []);
  const handleGeocoderViewportChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newViewport => {
    const geocoderDefaultOverrides = {
      transitionDuration: 1000
    };
    setMarker(newViewport);
    return handleViewportChange(_objectSpread(_objectSpread({
      width: "100%",
      height: 500
    }, newViewport), geocoderDefaultOverrides));
  }, [handleViewportChange]);
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_map_gl__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({
    className: "map-gl",
    ref: mapRef
  }, viewport), {}, {
    mapboxApiAccessToken: "pk.eyJ1IjoiamFuZ2h5dW5zb28iLCJhIjoiY2tyZ2l0NnhoMmtncjJ4bmp4YjZheXZvcCJ9.7aD4HiGVqpKqM7rUj8FfJg",
    onViewportChange: handleViewportChange,
    mapStyle: "mapbox://sprites/mapbox/basic-v8",
    asyncRender: true,
    transitionInterpolator: new react_map_gl__WEBPACK_IMPORTED_MODULE_2__.FlyToInterpolator(),
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_map_gl_geocoder__WEBPACK_IMPORTED_MODULE_4___default()), {
      marker: false,
      mapRef: mapRef,
      onViewportChange: handleGeocoderViewportChange,
      mapboxApiAccessToken: "pk.eyJ1IjoiamFuZ2h5dW5zb28iLCJhIjoiY2tyZ2l0NnhoMmtncjJ4bmp4YjZheXZvcCJ9.7aD4HiGVqpKqM7rUj8FfJg",
      position: "top-left",
      onResult: e => {
        const geocoderDefaultOverrides = {
          transitionDuration: 1000
        };
        setRegion(e.result.place_name);
        handleViewportChange(_objectSpread({
          width: "100%",
          height: 500,
          zoom: 9.3,
          latitude: e.result.center[1],
          longitude: e.result.center[0]
        }, geocoderDefaultOverrides));
      }
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.Marker, {
      longitude: marker.longitude,
      latitude: marker.latitude,
      offsetTop: -20,
      offsetLeft: -10,
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Pin__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        size: 20
      })
    })]
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(CountrySelectMap));

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

/***/ })

};
;