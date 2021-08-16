"use strict";
exports.id = 186;
exports.ids = [186];
exports.modules = {

/***/ 9617:
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


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const CountryMap = ({
  lat,
  lng
}) => {
  const {
    0: marker,
    1: setMarker
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    latitude: lat || 37.50529626491968,
    longitude: lng || 126.98047832475031
  });
  const {
    0: viewport,
    1: setViewport
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    width: "100%",
    height: 400,
    latitude: lat || 37.50529626491968,
    longitude: lng || 126.98047832475031,
    zoom: 6
  });
  const handleViewportChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newViewport => setViewport(prev => {
    return _objectSpread(_objectSpread({}, prev), {}, {
      zoom: newViewport.zoom
    });
  }), []);
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_map_gl__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({
    className: "map-gl",
    style: {
      marginBottom: "4rem"
    }
  }, viewport), {}, {
    mapboxApiAccessToken: "pk.eyJ1IjoiamFuZ2h5dW5zb28iLCJhIjoiY2tyZ2l0NnhoMmtncjJ4bmp4YjZheXZvcCJ9.7aD4HiGVqpKqM7rUj8FfJg",
    onViewportChange: handleViewportChange,
    mapStyle: "mapbox://sprites/mapbox/basic-v8",
    children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.Marker, {
      longitude: marker.longitude,
      latitude: marker.latitude,
      offsetTop: -20,
      offsetLeft: -10,
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Pin__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        size: 20
      })
    })
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountryMap);

/***/ }),

/***/ 1072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export PostThubnailWrapper */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4617);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NameSpace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3265);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3215);







const PostThubnailWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("section",  true ? {
  target: "ekpa5ev0"
} : 0)((0,config__WEBPACK_IMPORTED_MODULE_5__/* .FLEX_STYLE */ .Yk)("center", "center", "column"), ";margin-bottom:4rem; .thumbnail{margin-top:2rem;width:75%;;}.story-title{", (0,config__WEBPACK_IMPORTED_MODULE_5__/* .FLEX_STYLE */ .Yk)("center", "center", "column"), ";margin-top:2rem;margin-bottom:2rem; h1{margin-bottom:2rem;font-weight:700;line-height:2.5rem;text-align:center;;}}@media (max-width: ", config__WEBPACK_IMPORTED_MODULE_5__/* .SM_SIZE */ .oe, "){.story-title{margin-top:1rem;margin-bottom:1rem; h1{font-size:1.25rem;line-height:1.75rem;margin-bottom:1rem;;}}.thumbnail{width:100%;;}}" + ( true ? "" : 0));

const PostThubnail = ({
  story,
  article
}) => {
  var _ref, _ref2, _ref3, _ref4;

  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PostThubnailWrapper, {
    children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "story-title",
      children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: (_ref = story || article) === null || _ref === void 0 ? void 0 : _ref.title
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NameSpace__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        date: (_ref2 = story || article) === null || _ref2 === void 0 ? void 0 : _ref2.createdAt,
        user: (_ref3 = story || article) === null || _ref3 === void 0 ? void 0 : _ref3.user
      })]
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Divider, {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      className: "thumbnail",
      src: (_ref4 = story || article) === null || _ref4 === void 0 ? void 0 : _ref4.thumbnail.replace(/\/thumb\//, "/original/")
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(PostThubnail));

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

/***/ }),

/***/ 1296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_PostLayout)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(3215);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/Post/PostAsideNav/styles.tsx


const PostAsideNavWrapper = base_default()("aside",  true ? {
  target: "ehvmd2o0"
} : 0)("margin-top:1rem; .aside-story-title{margin-bottom:1rem;font-size:1.125rem;line-height:1.75rem;font-weight:700;cursor:pointer;;}.aside-quick-viewer{padding:0.5rem;border-radius:0.75rem;position:sticky;top:5rem;;}.aside-header-list{display:block;padding-bottom:1rem; h1,h2,h3{border-left:2px solid ", config/* GRAY_COLOR */.eR, ";}h1{padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem; font-size:0.9rem;font-weight:bold;}h2,h3{font-size:0.875rem;line-height:1.25rem;padding-bottom:0.5rem;padding-left:2rem;;}}.is-current{h1,h2,h3{border-left:2px solid ", config/* BLUE_COLOR */.vX, ";}}@media (max-width: ", config/* LG_SIZE */.PQ, "){display:none;;}" + ( true ? "" : 0));
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./utils/fetcher.ts
var fetcher = __webpack_require__(4608);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__(5181);
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);
// EXTERNAL MODULE: external "react-html-parser"
var external_react_html_parser_ = __webpack_require__(7795);
var external_react_html_parser_default = /*#__PURE__*/__webpack_require__.n(external_react_html_parser_);
;// CONCATENATED MODULE: ./components/Post/PostAsideNav/index.tsx












const PostAsideNav = () => {
  const {
    query
  } = (0,router_.useRouter)();
  const {
    0: headers,
    1: setHeaders
  } = (0,external_react_.useState)([]);
  const {
    0: hdClassList,
    1: setHdClassList
  } = (0,external_react_.useState)([]);
  const {
    data: postData
  } = external_swr_default()(query !== null && query !== void 0 && query.storyId ? `/story/${query === null || query === void 0 ? void 0 : query.code}/${query === null || query === void 0 ? void 0 : query.storyId}` : query !== null && query !== void 0 && query.articleId ? `/article/${query === null || query === void 0 ? void 0 : query.articleId}` : null, fetcher/* default */.Z, config/* noRevalidate */.nb);
  (0,external_react_.useEffect)(() => {
    if (postData) {
      var _postData$content, _postData$content$mat;

      const headers = (postData === null || postData === void 0 ? void 0 : (_postData$content = postData.content) === null || _postData$content === void 0 ? void 0 : (_postData$content$mat = _postData$content.match(/<h1([^])*?.*?<\/h1>|<h2([^])*?.*?<\/h2>|<h3([^])*?.*?<\/h3>/g)) === null || _postData$content$mat === void 0 ? void 0 : _postData$content$mat.join(",").split(",")) || [];
      setHdClassList(Array.from({
        length: headers.length
      }, (v, i) => "header_" + (i + 1)));
      setHeaders(headers);
    }
  }, [postData]);
  return jsx_runtime_.jsx(PostAsideNavWrapper, {
    children: (0,jsx_runtime_.jsxs)("div", {
      className: "aside-quick-viewer",
      children: [jsx_runtime_.jsx("h3", {
        onClick: () => {
          scrollTo({
            top: 0
          });
        },
        className: "aside-story-title",
        children: postData === null || postData === void 0 ? void 0 : postData.title
      }), (0,jsx_runtime_.jsxs)((external_react_scrollspy_default()), {
        items: hdClassList === null || hdClassList === void 0 ? void 0 : hdClassList.concat(["main_post", "user_info", "comment", "article_list"]),
        className: "aside-header-list",
        currentClassName: "is-current",
        offset: 100,
        children: [jsx_runtime_.jsx("a", {
          href: "#main_post",
          children: jsx_runtime_.jsx("h1", {
            children: "\uBCF8\uBB38"
          })
        }), headers === null || headers === void 0 ? void 0 : headers.map((v, i) => {
          return jsx_runtime_.jsx("a", {
            href: `#header_${i + 1}`,
            children: external_react_html_parser_default()(v)
          }, i);
        }), (query === null || query === void 0 ? void 0 : query.storyId) && jsx_runtime_.jsx("a", {
          href: "#user_info",
          children: jsx_runtime_.jsx("h1", {
            children: "\uC5F0\uAE30\uB300 \uC815\uBCF4"
          })
        }), (query === null || query === void 0 ? void 0 : query.storyId) && jsx_runtime_.jsx("a", {
          href: "#user_info",
          children: jsx_runtime_.jsx("h2", {
            children: "\uC791\uC131\uC790 \uD504\uB85C\uD544"
          })
        }), (query === null || query === void 0 ? void 0 : query.storyId) && jsx_runtime_.jsx("a", {
          href: "#comment",
          children: jsx_runtime_.jsx("h2", {
            children: "\uB313\uAE00 \uBCF4\uAE30"
          })
        }), jsx_runtime_.jsx("a", {
          href: "#article_list",
          children: query !== null && query !== void 0 && query.storyId ? jsx_runtime_.jsx("h2", {
            children: "\uB2E4\uB978 \uC5F0\uB300\uAE30"
          }) : jsx_runtime_.jsx("h1", {
            children: "\uB2E4\uB978 \uAE30\uC0AC"
          })
        }), jsx_runtime_.jsx("a", {
          onClick: () => router_default().back(),
          children: jsx_runtime_.jsx("h1", {
            children: "\uB4A4\uB85C\uAC00\uAE30"
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const Post_PostAsideNav = (/*#__PURE__*/(0,external_react_.memo)(PostAsideNav));
;// CONCATENATED MODULE: ./layout/PostLayout.tsx






const PostLayoutWrapper = base_default()("main",  true ? {
  target: "eaqvib10"
} : 0)("width:", config/* XLG_SIZE */.lv, ";", {
  "marginLeft": "auto",
  "marginRight": "auto",
  "padding": "2rem"
}, ";", (0,config/* GRID_STYLE */.U6)("2rem", "4fr 1fr"), ";.layout{.main-title{", {
  "textAlign": "center",
  "marginTop": "3rem",
  "marginBottom": "1.5rem",
  "fontSize": "1.125rem",
  "lineHeight": "1.75rem",
  "fontWeight": "700"
}, ";span{", {
  "display": "block",
  "fontSize": "0.875rem",
  "lineHeight": "1.25rem",
  "marginTop": "0.5rem"
}, ";}}.main-title:first-of-type{", {
  "marginTop": "0px",
  "marginBottom": "1.5rem"
}, ";}}@media (max-width: ", config/* LG_SIZE */.PQ, "){", {
  "display": "block",
  "width": "100%",
  "padding": "0.5rem"
}, ";}" + ( true ? "" : 0));

const PostLayout = ({
  postRef,
  children
}) => {
  return (0,jsx_runtime_.jsxs)(PostLayoutWrapper, {
    children: [jsx_runtime_.jsx("div", {
      ref: postRef,
      className: "layout",
      children: children
    }), jsx_runtime_.jsx(Post_PostAsideNav, {})]
  });
};

/* harmony default export */ const layout_PostLayout = (PostLayout);

/***/ })

};
;