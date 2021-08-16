"use strict";
(() => {
var exports = {};
exports.id = 802;
exports.ids = [802];
exports.modules = {

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

/***/ 4106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ story),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./layout/XLGLayout.tsx
var XLGLayout = __webpack_require__(8597);
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(3215);
// EXTERNAL MODULE: ./configureStore.ts + 1 modules
var configureStore = __webpack_require__(4603);
// EXTERNAL MODULE: ./actions/user.ts
var user = __webpack_require__(5145);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./utils/fetcher.ts
var fetcher = __webpack_require__(4608);
// EXTERNAL MODULE: ./components/CountryPreviewSlide.tsx + 1 modules
var CountryPreviewSlide = __webpack_require__(970);
;// CONCATENATED MODULE: ./sections/StoryPage/StoryPoster.tsx






const StoryPosterWrapper = base_default()("section",  true ? {
  target: "epr77ya0"
} : 0)("position:relative;width:100%;height:20rem; background-repeat:no-repeat;", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";.title{font-size:1.875rem;line-height:2.25rem;font-weight:700;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));cursor:pointer;z-index:10;;}@media (max-width: ", config/* SM_SIZE */.oe, "){height:13rem; .title{font-size:1.125rem;line-height:1.75rem;padding-left:1rem;padding-right:1rem;text-align:center;;}}" + ( true ? "" : 0));

const StoryPoster = ({
  name,
  image
}) => {
  return (0,jsx_runtime_.jsxs)(StoryPosterWrapper, {
    style: image ? {
      background: `url(${image}
          )`,
      backgroundPosition: "10% 40%",
      backgroundSize: "100% 230%"
    } : {
      background: `url(https://user-images.githubusercontent.com/74864925/126781509-8008fa80-5bb8-4a90-bb9e-132357def1aa.jpg
        )`,
      backgroundPosition: "top left",
      backgroundSize: "100% 100%"
    },
    children: [jsx_runtime_.jsx("div", {
      className: "overlay"
    }), jsx_runtime_.jsx("h1", {
      className: "title",
      children: name ? name + " 연대기" : "당신의 여행에는 어떤 스토리가 있었나요?"
    })]
  });
};

/* harmony default export */ const StoryPage_StoryPoster = (StoryPoster);
// EXTERNAL MODULE: ./components/CountryAllview.tsx + 1 modules
var CountryAllview = __webpack_require__(4666);
// EXTERNAL MODULE: ./components/TopNavigation.tsx
var TopNavigation = __webpack_require__(4630);
// EXTERNAL MODULE: ./sections/StoryPage/StoryArticleList.tsx
var StoryArticleList = __webpack_require__(3119);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: ./components/NameSpace.tsx + 1 modules
var NameSpace = __webpack_require__(3265);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(7381);
;// CONCATENATED MODULE: ./components/Cards/ArticleCard/styles.tsx


const ArticleCardWrapper = () => /*#__PURE__*/(0,react_.css)("cursor:pointer;margin-bottom:1rem; ", (0,config/* GRID_STYLE */.U6)("2rem", "1.5fr 2.5fr"), " &:hover{.image-wrapper{img{transform:scale(1.15);}}}.image-wrapper{border-radius:0.375rem;overflow:hidden;position:relative;;img{border-radius:0.375rem;height:15rem;width:100%;;transition:0.3s all;}.like-comment{position:absolute;bottom:1rem;right:1rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;opacity:0.5;border-radius:0.75rem; li{padding:0.25rem;cursor:pointer; .count{margin:0 0.3rem;}.anticon{font-size:1.2rem;}}}}.story-info{", (0,config/* FLEX_STYLE */.Yk)("flex-start", "flex-end"), ";}.story-content{margin-top:1rem;", (0,config/* ELLIPSIS_STYLE */.kA)(1.8, 5, "auto"), ";}h2{font-size:1.5rem;line-height:2rem;font-weight:700;margin-bottom:1rem;overflow:hidden; ", (0,config/* ELLIPSIS_STYLE */.kA)(1.5, 1, "auto"), ";}@media (max-width: 1000px){", (0,config/* GRID_STYLE */.U6)("2rem", "repeat(2,1fr)"), " h2{", (0,config/* ELLIPSIS_STYLE */.kA)(1.5, 2, "auto"), ";}.story-content{", (0,config/* ELLIPSIS_STYLE */.kA)(1.8, 4, "auto"), ";}}" + ( true ? "" : 0),  true ? "" : 0);
// EXTERNAL MODULE: ./utils/html2textConverter.ts
var html2textConverter = __webpack_require__(9398);
;// CONCATENATED MODULE: ./components/Cards/ArticleCard/index.tsx










const ArticleCard = ({
  story
}) => {
  const onClickArticleCard = (0,external_react_.useCallback)(() => {
    router_default().push(`/story/${story === null || story === void 0 ? void 0 : story.code}/${story === null || story === void 0 ? void 0 : story.id}`);
  }, [story]);
  return (0,jsx_runtime_.jsxs)("article", {
    className: "article-card-wrapper",
    css: ArticleCardWrapper(),
    onClick: onClickArticleCard,
    children: [(0,jsx_runtime_.jsxs)("div", {
      className: "image-wrapper",
      children: [jsx_runtime_.jsx("img", {
        src: story !== null && story !== void 0 && story.thumbnail ? story.thumbnail : config/* NO_IMAGE_URL */.Q7,
        alt: "article-thumbnail"
      }), (0,jsx_runtime_.jsxs)("ul", {
        className: "like-comment",
        children: [(0,jsx_runtime_.jsxs)("li", {
          children: [jsx_runtime_.jsx(icons_.CommentOutlined, {}), jsx_runtime_.jsx("span", {
            className: "count",
            children: story === null || story === void 0 ? void 0 : story.comments.length
          })]
        }), (0,jsx_runtime_.jsxs)("li", {
          children: [jsx_runtime_.jsx(icons_.HeartOutlined, {}), jsx_runtime_.jsx("span", {
            className: "count",
            children: story === null || story === void 0 ? void 0 : story.likedUser.length
          })]
        })]
      })]
    }), (0,jsx_runtime_.jsxs)("div", {
      className: "story-main",
      children: [jsx_runtime_.jsx("h2", {
        children: story === null || story === void 0 ? void 0 : story.title
      }), jsx_runtime_.jsx("div", {
        className: "story-info",
        children: jsx_runtime_.jsx(NameSpace/* default */.Z, {
          date: story === null || story === void 0 ? void 0 : story.createdAt,
          user: story === null || story === void 0 ? void 0 : story.user
        })
      }), jsx_runtime_.jsx("div", {
        className: "story-content",
        children: (0,html2textConverter/* default */.Z)(story === null || story === void 0 ? void 0 : story.content)
      })]
    })]
  });
};

/* harmony default export */ const Cards_ArticleCard = (ArticleCard);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./components/Cards/ArticleColumnCard/index.tsx + 1 modules
var ArticleColumnCard = __webpack_require__(8751);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/story/index.tsx





function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const StoryMainWrapper = base_default()("div",  true ? {
  target: "e122doia0"
} : 0)("padding-top:4rem;.country-list-wrapper{margin-left:auto;margin-right:auto;padding-top:1rem;padding-bottom:1rem; width:", config/* XLG_SIZE */.lv, ";}.story-top-section{padding-top:4rem;;}.more-story-btn{padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.75rem;padding-right:0.75rem;margin-left:1rem;border-radius:0.5rem;font-size:0.75rem;line-height:1rem;font-weight:700;:hover{--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);} ", (0,config/* BORDER_THIN */.h_)("border"), ";}.popular-story-wrapper{.article-card-wrapper{display:grid;;}.article-card-column-wrapper{display:none;;}}.no-story-wrapper{border-radius:0.75rem;user-select:none;padding:2rem;margin-top:2rem; height:500px;", (0,config/* FLEX_STYLE */.Yk)("center", "center", "column"), ";img{width:10rem;height:10rem;opacity:0.3;margin-bottom:1rem;;}h2{font-size:1rem;line-height:1.5rem;font-weight:700;margin-bottom:1rem;text-align:center;;}}@media (max-width: ", config/* LG_SIZE */.PQ, "){.country-list-wrapper{padding-left:0.5rem;padding-right:0.5rem;width:100%;;}}@media (max-width: 460px){.popular-story-wrapper{.article-card-wrapper{display:none;;}.article-card-column-wrapper{display:block;;}}}" + ( true ? "" : 0));

const index = ({
  initiaStories,
  initialPopularStories
}) => {
  const {
    query
  } = (0,router_.useRouter)();
  const {
    user
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    0: filter,
    1: setFilter
  } = (0,external_react_.useState)("");
  const {
    0: onAllCountries,
    1: setAllCountries
  } = (0,external_react_.useState)(false);
  const {
    0: onMorePopularStory,
    1: setOnMorePopularStory
  } = (0,external_react_.useState)(false);
  const {
    data: popularStories
  } = external_swr_default()("/story/popular", fetcher/* default */.Z, _objectSpread({
    initialData: initialPopularStories
  }, config/* noRevalidate */.nb));
  const {
    data: stories,
    setSize
  } = (0,external_swr_.useSWRInfinite)(index => `/story?page=${index + 1}&code=${(query === null || query === void 0 ? void 0 : query.country) || ""}&filter=${filter === "country" ? "" : filter}`, fetcher/* default */.Z, _objectSpread({
    initialData: initiaStories
  }, config/* noRevalidate */.nb));
  const storyPageNav = (0,external_react_.useMemo)(() => {
    const nav_list = [{
      name: "인기순",
      value: "popular"
    }, {
      name: "최신순",
      value: ""
    }, {
      name: "댓글많은순",
      value: "comment"
    }, {
      name: "조회순",
      value: "view"
    }];

    if (query !== null && query !== void 0 && query.country) {
      nav_list.push({
        name: "국가전체보기",
        value: "all_country"
      });
    } else {
      nav_list.push({
        name: "국가선택",
        value: "country"
      });
    }

    if (user) {
      nav_list.push({
        name: "연대기올리기",
        value: "post"
      });
    }

    return nav_list;
  }, [query, user]);
  const {
    data: countries
  } = external_swr_default()(`/country`, fetcher/* default */.Z, config/* noRevalidate */.nb);
  const {
    data: country
  } = external_swr_default()(query !== null && query !== void 0 && query.country ? `/country/${query === null || query === void 0 ? void 0 : query.country}` : null, fetcher/* default */.Z, config/* noRevalidate */.nb);
  (0,external_react_.useEffect)(() => {
    setAllCountries(false);
    setFilter("");
  }, [query]);
  const onClickList = (0,external_react_.useCallback)(value => {
    if (value === "all_country") {
      router_default().push("/story");
      return;
    }

    if (value === "post") {
      router_default().push("/story/post");
      return;
    }

    setFilter(value);

    if (value === "country") {
      setAllCountries(prev => !prev);
      scrollTo({
        top: 461
      });
      return;
    }

    setAllCountries(false);
  }, []);
  const onClickMorePopularStoryBtn = (0,external_react_.useCallback)(() => {
    setOnMorePopularStory(true);
  }, []);
  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [jsx_runtime_.jsx((head_default()), {
      children: jsx_runtime_.jsx("title", {
        children: "Fall IN Asia - story"
      })
    }), (0,jsx_runtime_.jsxs)(StoryMainWrapper, {
      children: [jsx_runtime_.jsx(StoryPage_StoryPoster, {
        name: country === null || country === void 0 ? void 0 : country.name,
        image: country === null || country === void 0 ? void 0 : country.image_src
      }), !(query !== null && query !== void 0 && query.country) && jsx_runtime_.jsx("div", {
        className: "country-list-wrapper",
        children: jsx_runtime_.jsx(CountryPreviewSlide/* default */.Z, {
          slidesPerView: 6.2,
          isMain: false
        })
      }), jsx_runtime_.jsx(TopNavigation/* default */.Z, {
        filter: filter,
        onClickList: onClickList,
        list: storyPageNav
      }), (0,jsx_runtime_.jsxs)(XLGLayout/* default */.Z, {
        children: [onAllCountries && (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [jsx_runtime_.jsx("h2", {
            className: "main-title",
            children: "\uAD6D\uAC00\uC120\uD0DD"
          }), jsx_runtime_.jsx(CountryAllview/* default */.Z, {
            isMain: false,
            countries: countries
          })]
        }), (0,jsx_runtime_.jsxs)("h2", {
          style: {
            display: "flex",
            alignItems: "center"
          },
          className: "main-title",
          children: ["\uC778\uAE30\uC5F0\uB300\uAE30", popularStories && !onMorePopularStory && (popularStories === null || popularStories === void 0 ? void 0 : popularStories.length) > 1 && jsx_runtime_.jsx("button", {
            className: "more-story-btn",
            onClick: onClickMorePopularStoryBtn,
            children: "\uB354\uBCF4\uAE30"
          })]
        }), popularStories && jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: (0,jsx_runtime_.jsxs)("div", {
            className: "popular-story-wrapper",
            children: [jsx_runtime_.jsx(Cards_ArticleCard, {
              story: popularStories[0]
            }), jsx_runtime_.jsx(ArticleColumnCard/* default */.Z, {
              story: popularStories[0]
            }), onMorePopularStory && (popularStories === null || popularStories === void 0 ? void 0 : popularStories.slice(1).map((v, i) => {
              return jsx_runtime_.jsx(Cards_ArticleCard, {
                story: v
              }, i);
            })), onMorePopularStory && (popularStories === null || popularStories === void 0 ? void 0 : popularStories.slice(1).map((v, i) => {
              return jsx_runtime_.jsx(ArticleColumnCard/* default */.Z, {
                story: v
              }, i);
            }))]
          })
        }), jsx_runtime_.jsx("h2", {
          className: "main-title",
          children: "\uC5F0\uB300\uAE30"
        }), stories && (stories === null || stories === void 0 ? void 0 : stories.flat().length) > 0 ? jsx_runtime_.jsx(StoryArticleList/* default */.Z, {
          grid: 4,
          gap: "1.5rem",
          setSize: setSize,
          stories: stories
        }) : (0,jsx_runtime_.jsxs)("div", {
          className: "no-story-wrapper",
          children: [jsx_runtime_.jsx("img", {
            src: config/* NO_POST_URL */.xA,
            alt: "no-post-img"
          }), jsx_runtime_.jsx("h2", {
            children: "\uC5F0\uB300\uAE30\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uCCAB \uC5F0\uB300\uAE30\uC5D0 \uC8FC\uC778\uACF5\uC774 \uB418\uC5B4\uC8FC\uC138\uC694!"
          }), jsx_runtime_.jsx("button", {
            className: "story-post-btn",
            onClick: () => router_default().push("/story/post"),
            children: "\uC5F0\uB300\uAE30 \uC62C\uB9AC\uAE30"
          })]
        })]
      })]
    })]
  });
};

const getServerSideProps = configureStore/* wrapper.getServerSideProps */.Y.getServerSideProps(store => async (_ref) => {
  let {
    req,
    res
  } = _ref,
      etc = _objectWithoutProperties(_ref, ["req", "res"]);

  const cookie = req ? req.headers.cookie : "";
  (external_axios_default()).defaults.headers.Cookie = "";

  if (req && cookie) {
    (external_axios_default()).defaults.headers.Cookie = cookie;
  }

  await store.dispatch((0,user/* getUserInfoAction */.pZ)());
  let initialStories = await (0,fetcher/* default */.Z)(`/story?page=1`);
  initialStories = [initialStories];
  let initialPopularStories = await (0,fetcher/* default */.Z)(`/story/popular`);
  return {
    props: {
      initialStories,
      initialPopularStories
    }
  };
});
/* harmony default export */ const story = (index);

/***/ }),

/***/ 9398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ html2textConverter)
/* harmony export */ });
function html2textConverter(content) {
  return (content === null || content === void 0 ? void 0 : content.replace(/(<([^>]+)>)/gi, "").replaceAll(/&nbsp;|&amp;/gi, "")) || "";
}

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

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 2034:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 1596:
/***/ ((module) => {

module.exports = require("swiper/core");

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
var __webpack_exports__ = __webpack_require__.X(0, [979,479,751,322,666,630,119,597], () => (__webpack_exec__(4106)));
module.exports = __webpack_exports__;

})();