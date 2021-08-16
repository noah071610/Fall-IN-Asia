"use strict";
(() => {
var exports = {};
exports.id = 134;
exports.ids = [134];
exports.modules = {

/***/ 2278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ news),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./actions/user.ts
var user = __webpack_require__(5145);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./configureStore.ts + 1 modules
var configureStore = __webpack_require__(4603);
// EXTERNAL MODULE: ./components/Cards/PosterCard.tsx
var PosterCard = __webpack_require__(6419);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./utils/fetcher.ts
var fetcher = __webpack_require__(4608);
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(3215);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/Cards/ArticleImageCard/styles.tsx


const ArticleImageCardWrapper = base_default()("div",  true ? {
  target: "e198bb1h0"
} : 0)("position:relative;overflow:hidden;cursor:pointer;border-radius:0.375rem;margin-bottom:2rem; &:hover{.card-image{transform:scale(1.15);}}.card-image{border-radius:0.375rem;width:100%;height:11rem; background-position:center;background-repeat:no-repeat;background-size:100% 100%;transition:0.3s all;}.card-desc{background:", (0,config/* RGB_BLACK */.Xk)(0.45), ";position:absolute;bottom:0px;left:0px;width:100%;padding:0.5rem;line-height:1.25rem; h3{margin-bottom:0.5rem; font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));;}h4{font-size:0.875rem;line-height:1.25rem;font-weight:700;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));;}}" + ( true ? "" : 0));
;// CONCATENATED MODULE: ./components/Cards/ArticleImageCard/index.tsx







const ArticleImageCard = ({
  article
}) => {
  const onClickArticleImageCard = (0,external_react_.useCallback)(() => {
    router_default().push(`/news/${article === null || article === void 0 ? void 0 : article.id}`);
  }, []);
  return (0,jsx_runtime_.jsxs)(ArticleImageCardWrapper, {
    onClick: onClickArticleImageCard,
    children: [jsx_runtime_.jsx("div", {
      className: "card-image",
      style: {
        backgroundImage: `url(${article !== null && article !== void 0 && article.thumbnail ? article.thumbnail : config/* NO_IMAGE_URL */.Q7})`
      }
    }), (0,jsx_runtime_.jsxs)("div", {
      className: "card-desc",
      children: [jsx_runtime_.jsx("h3", {
        children: article === null || article === void 0 ? void 0 : article.type
      }), jsx_runtime_.jsx("h4", {
        children: article === null || article === void 0 ? void 0 : article.title
      })]
    })]
  });
};

/* harmony default export */ const Cards_ArticleImageCard = (ArticleImageCard);
// EXTERNAL MODULE: ./components/TopNavigation.tsx
var TopNavigation = __webpack_require__(4630);
// EXTERNAL MODULE: ./components/Cards/ArticleSmallCard/index.tsx + 1 modules
var ArticleSmallCard = __webpack_require__(4318);
// EXTERNAL MODULE: ./sections/NewsPage/NewsArticleList.tsx
var NewsArticleList = __webpack_require__(171);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/SliderArrow.tsx
var SliderArrow = __webpack_require__(8985);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./pages/news/index.tsx





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const NewsPageWrapper = base_default()("div",  true ? {
  target: "e1y9j7k60"
} : 0)("padding-top:4rem;.news-layout{width:", config/* LG_SIZE */.PQ, ";margin-left:auto;margin-right:auto;padding-top:2rem;padding-bottom:2rem; .main-title{font-size:1rem;line-height:1.5rem;font-weight:700;margin-top:2rem;margin-bottom:1rem;;}.main-title:first-of-type{margin-top:0px;margin-bottom:1rem;;}.layout-divide{", (0,config/* GRID_STYLE */.U6)("2rem", "3fr 1fr"), ";}}.news-aside{.aside-title{font-size:1rem;line-height:1.5rem;font-weight:700;margin-bottom:1rem;;}}.no-article-wrapper{border-radius:0.75rem;user-select:none;padding:2rem;margin-top:2rem; height:500px;", (0,config/* FLEX_STYLE */.Yk)("center", "center", "column"), ";img{width:10rem;height:10rem;opacity:0.3;margin-bottom:1rem;;}h2{font-size:1rem;line-height:1.5rem;font-weight:700;margin-bottom:1rem;;}}.slick-active{z-index:999;}@media (max-width: ", config/* MD_SIZE */.SO, "){.news-layout{width:100%;padding-left:0.5rem;padding-right:0.5rem;;.layout-divide{display:block;width:100%;;}}.news-aside{display:none;;}}@media (max-width: ", config/* SM_SIZE */.oe, "){.no-article-wrapper{padding:0px;margin-top:1.5rem; height:300px;img{margin-bottom:0.75rem;;}}}" + ( true ? "" : 0));

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: jsx_runtime_.jsx(SliderArrow/* NextArrow */.g, {}),
  prevArrow: jsx_runtime_.jsx(SliderArrow/* PrevArrow */.$, {})
};

const index = ({
  initialArticles,
  initialAsideArticle
}) => {
  const {
    0: type,
    1: setType
  } = (0,external_react_.useState)("관광뉴스");
  const {
    data: articles,
    revalidate: revalidateArticles,
    setSize
  } = (0,external_swr_.useSWRInfinite)(index => `/article?page=${index + 1}&type=${type ? encodeURIComponent(type) : ""}`, fetcher/* default */.Z, _objectSpread({
    initialData: initialArticles
  }, config/* noRevalidate */.nb));
  const {
    data: asideArticle
  } = external_swr_default()(`/article/popular`, fetcher/* default */.Z, _objectSpread({
    initialData: initialAsideArticle
  }, config/* noRevalidate */.nb));
  const onClickList = (0,external_react_.useCallback)(value => {
    setType(value);
  }, []);
  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [jsx_runtime_.jsx((head_default()), {
      children: jsx_runtime_.jsx("title", {
        children: "Fall IN Asia - news"
      })
    }), (0,jsx_runtime_.jsxs)(NewsPageWrapper, {
      children: [(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
        children: [jsx_runtime_.jsx(PosterCard/* default */.Z, {
          image: "https://user-images.githubusercontent.com/74864925/129447142-48c58d87-d5e8-46ba-9052-8d1b8e1c383e.png",
          path: "/",
          title: "Share your infomation",
          desc: "\uBAA8\uBA58\uD2B8 : \uC5EC\uD589\uC774\uB77C\uB294 \uB9DD\uB9DD\uB300\uD574\uC5D0\uC11C \uAE38\uC744 \uC783\uC5C8\uB098\uC694? \uBB3C\uC5B4\uBD10\uC694! \uB3C8\uB4DC\uB294\uAC70 \uC544\uB2C8\uC796\uC544\uC694~"
        }), jsx_runtime_.jsx(PosterCard/* default */.Z, {
          image: "https://user-images.githubusercontent.com/74864925/129446624-f357679e-af98-41f7-a9ac-4f3dc434a551.png",
          path: "/story",
          title: "Leave and Share your memory",
          desc: "\uC5F0\uB300\uAE30 : \uB2F9\uC2E0\uC758 \uC5EC\uC815\uC5D0\uB294 \uC5B4\uB5A4 \uC77C\uC774 \uC788\uC5C8\uB098\uC694?"
        }), jsx_runtime_.jsx(PosterCard/* default */.Z, {
          image: "https://user-images.githubusercontent.com/74864925/129452165-e9675084-15d1-4891-a9cb-bae6bf9eaf33.png",
          link: "https://www.0404.go.kr/dev/newest_list.mofa",
          title: "I trust We can get over covid-19",
          desc: "\uD574\uC678\uC548\uC804\uC5EC\uD589 : \uC678\uAD50\uBD80\uC5D0\uC11C \uCF54\uB85C\uB09819 \uC785\uAD6D\uC81C\uD55C \uC5EC\uBD80\uB97C \uD655\uC778\uD558\uC138\uC694."
        })]
      })), jsx_runtime_.jsx(TopNavigation/* default */.Z, {
        onClickList: onClickList,
        filter: type,
        list: config/* newsPageNavList */.HH
      }), (0,jsx_runtime_.jsxs)("main", {
        className: "news-layout",
        children: [jsx_runtime_.jsx("h2", {
          className: "main-title",
          children: type
        }), (0,jsx_runtime_.jsxs)("div", {
          className: "layout-divide",
          children: [articles && (articles === null || articles === void 0 ? void 0 : articles.flat().length) > 0 ? jsx_runtime_.jsx(NewsArticleList/* default */.Z, {
            setSize: setSize,
            articles: articles
          }) : (0,jsx_runtime_.jsxs)("div", {
            className: "no-article-wrapper",
            children: [jsx_runtime_.jsx("img", {
              src: config/* NO_POST_URL */.xA,
              alt: "no-post-img"
            }), (0,jsx_runtime_.jsxs)("h2", {
              children: ["\uC544\uC9C1 ", type, " \uC18C\uC2DD\uC774 \uC5C6\uC5B4\uC694.\uD83D\uDE25"]
            })]
          }), asideArticle && jsx_runtime_.jsx("aside", {
            className: "news-aside",
            children: (asideArticle === null || asideArticle === void 0 ? void 0 : asideArticle.length) > 0 && (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [jsx_runtime_.jsx("h2", {
                className: "aside-title",
                children: "\uC778\uAE30 \uC18C\uC2DD"
              }), jsx_runtime_.jsx(Cards_ArticleImageCard, {
                article: asideArticle[0]
              }), asideArticle === null || asideArticle === void 0 ? void 0 : asideArticle.slice(1).map((v, i) => {
                return jsx_runtime_.jsx(ArticleSmallCard/* default */.Z, {
                  article: v
                }, i);
              })]
            })
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const news = (index);
const getServerSideProps = configureStore/* wrapper.getServerSideProps */.Y.getServerSideProps(store => async ({
  req
}) => {
  const cookie = req ? req.headers.cookie : "";
  (external_axios_default()).defaults.headers.Cookie = "";

  if (req && cookie) {
    (external_axios_default()).defaults.headers.Cookie = cookie;
  }

  await store.dispatch((0,user/* getUserInfoAction */.pZ)());
  let initialArticles = await (0,fetcher/* default */.Z)(`/article?page=1`);
  initialArticles = [initialArticles];
  const initialAsideArticle = await (0,fetcher/* default */.Z)(`/article/popular`);
  return {
    props: {
      initialArticles,
      initialAsideArticle
    }
  };
});

/***/ }),

/***/ 4608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const fetcher = url => axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
  withCredentials: true
}).then(response => response.data.data);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);

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

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8349:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 2744:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

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

/***/ 9080:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 2034:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 2156:
/***/ ((module) => {

module.exports = require("swiper/react");

/***/ }),

/***/ 7749:
/***/ ((module) => {

module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [979,318,412,394,630,171], () => (__webpack_exec__(2278)));
module.exports = __webpack_exports__;

})();