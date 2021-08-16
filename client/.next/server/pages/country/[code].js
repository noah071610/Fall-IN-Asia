"use strict";
(() => {
var exports = {};
exports.id = 245;
exports.ids = [245];
exports.modules = {

/***/ 1523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _code_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./configureStore.ts + 1 modules
var configureStore = __webpack_require__(4603);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./actions/user.ts
var user = __webpack_require__(5145);
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(3215);
// EXTERNAL MODULE: ./sections/MainPage/MomentList/index.tsx + 3 modules
var MomentList = __webpack_require__(300);
// EXTERNAL MODULE: ./sections/MainPage/MomentPostingForm/index.tsx + 1 modules
var MomentPostingForm = __webpack_require__(3368);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./utils/fetcher.ts
var fetcher = __webpack_require__(4608);
// EXTERNAL MODULE: ./layout/MainLayout.tsx + 5 modules
var MainLayout = __webpack_require__(2697);
// EXTERNAL MODULE: ./sections/MainPage/MainPopularArticleSlide.tsx
var MainPopularArticleSlide = __webpack_require__(2632);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: ./components/Cards/NewsCard/index.tsx + 1 modules
var NewsCard = __webpack_require__(6394);
// EXTERNAL MODULE: ./components/SliderArrow.tsx
var SliderArrow = __webpack_require__(8985);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./sections/MainPage/MainNewsCardSlide.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const MainNewsCardSlideWrapper = /*#__PURE__*/base_default()((external_react_slick_default()),  true ? {
  target: "e1kq3p290"
} : 0)(".news-card-wrapper{box-shadow:none;border-radius:15px;&:hover{box-shadow:none;}}@media (max-width: ", config/* SM_SIZE */.oe, "){.news-card-wrapper{.image-wrapper{height:12rem; border-top-left-radius:15px;border-top-right-radius:15px;img{height:12rem; border-top-left-radius:15px;border-top-right-radius:15px;}}.new-main{padding-left:1rem;padding-right:1rem;;}}}" + ( true ? "" : 0));

const slideSettings = {
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  speed: 300,
  nextArrow: jsx_runtime_.jsx(SliderArrow/* NextArrow */.g, {}),
  prevArrow: jsx_runtime_.jsx(SliderArrow/* PrevArrow */.$, {})
};

const MainNewsCardSlide = ({
  news
}) => {
  return jsx_runtime_.jsx(MainNewsCardSlideWrapper, _objectSpread(_objectSpread({}, slideSettings), {}, {
    children: news === null || news === void 0 ? void 0 : news.map((v, i) => {
      return jsx_runtime_.jsx(NewsCard/* default */.Z, {
        article: v
      }, i);
    })
  }));
};

/* harmony default export */ const MainPage_MainNewsCardSlide = (/*#__PURE__*/(0,external_react_.memo)(MainNewsCardSlide));
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/country/[code]/index.tsx




function _code_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _code_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _code_ownKeys(Object(source), true).forEach(function (key) { _code_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _code_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _code_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const index = ({
  initialMoments,
  initialCountry,
  initialNews
}) => {
  const {
    query
  } = (0,router_.useRouter)();
  const {
    0: filter,
    1: setFilter
  } = (0,external_react_.useState)("");
  const {
    data: moments,
    revalidate: revalidateMoments,
    setSize
  } = (0,external_swr_.useSWRInfinite)(index => `/moment?code=${(query === null || query === void 0 ? void 0 : query.code) || ""}&page=${index + 1}&filter=${filter}&type=${(query === null || query === void 0 ? void 0 : query.type) || ""}`, fetcher/* default */.Z, _code_objectSpread({
    initialData: initialMoments
  }, config/* noRevalidate */.nb));
  const {
    data: country
  } = external_swr_default()(query !== null && query !== void 0 && query.code ? `/country/${query === null || query === void 0 ? void 0 : query.code}` : null, fetcher/* default */.Z, _code_objectSpread({
    initialData: initialCountry
  }, config/* noRevalidate */.nb));
  const {
    data: news
  } = external_swr_default()(`/article/popular?code=${query === null || query === void 0 ? void 0 : query.code}`, fetcher/* default */.Z, _code_objectSpread({
    initialData: initialNews
  }, config/* noRevalidate */.nb));
  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [jsx_runtime_.jsx((head_default()), {
      children: (0,jsx_runtime_.jsxs)("title", {
        children: ["Fall IN Asia - ", country === null || country === void 0 ? void 0 : country.name]
      })
    }), (0,jsx_runtime_.jsxs)(MainLayout/* default */.Z, {
      children: [news && news.length > 0 && (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [jsx_runtime_.jsx("h2", {
          className: "main-title",
          children: (country === null || country === void 0 ? void 0 : country.name) + " 관련 소식 📢"
        }), jsx_runtime_.jsx(MainPage_MainNewsCardSlide, {
          news: news
        })]
      }), jsx_runtime_.jsx("h2", {
        className: "main-title",
        children: (country === null || country === void 0 ? void 0 : country.name) + " 인기 연대기"
      }), jsx_runtime_.jsx(MainPopularArticleSlide/* default */.Z, {
        country: country
      }), jsx_runtime_.jsx("h2", {
        className: "main-title",
        children: "\uD3EC\uC2A4\uD305"
      }), jsx_runtime_.jsx(MomentPostingForm/* default */.Z, {}), jsx_runtime_.jsx(MomentList/* default */.Z, {
        revalidateMoments: revalidateMoments,
        filter: filter,
        setFilter: setFilter,
        setSize: setSize,
        moments: moments
      })]
    })]
  });
};

const getServerSideProps = configureStore/* wrapper.getServerSideProps */.Y.getServerSideProps(store => async ({
  req,
  params
}) => {
  const cookie = req ? req.headers.cookie : "";
  (external_axios_default()).defaults.headers.Cookie = "";

  if (req && cookie) {
    (external_axios_default()).defaults.headers.Cookie = cookie;
  }

  await store.dispatch((0,user/* getUserInfoAction */.pZ)());
  let initialMoments = await (0,fetcher/* default */.Z)(`/moment?code=${params === null || params === void 0 ? void 0 : params.code}&page=1`);
  initialMoments = [initialMoments];
  const initialCountry = await (0,fetcher/* default */.Z)(`/country/${params === null || params === void 0 ? void 0 : params.code}`);
  const initialNews = await (0,fetcher/* default */.Z)(`/article/popular?code=${params === null || params === void 0 ? void 0 : params.code}`);
  return {
    props: {
      initialMoments,
      initialCountry,
      initialNews
    }
  };
});
/* harmony default export */ const _code_ = (index);

/***/ }),

/***/ 2372:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 7381:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 4554:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 4617:
/***/ ((module) => {

module.exports = require("@emotion/styled/base");

/***/ }),

/***/ 887:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 799:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

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

/***/ 8349:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 5470:
/***/ ((module) => {

module.exports = require("dayjs/locale/ko");

/***/ }),

/***/ 2289:
/***/ ((module) => {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ 2744:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9639:
/***/ ((module) => {

module.exports = require("next/dynamic");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ 9080:
/***/ ((module) => {

module.exports = require("react-slick");

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
var __webpack_exports__ = __webpack_require__.X(0, [664,979,479,751,287,318,412,368,190,394], () => (__webpack_exec__(1523)));
module.exports = __webpack_exports__;

})();