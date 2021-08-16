"use strict";
(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 5975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ search),
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
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./slices/main.ts + 1 modules
var main = __webpack_require__(3640);
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(3215);
;// CONCATENATED MODULE: ./sections/SearchPage/SearchPagePoster.tsx








const SearchPagePosterWrapper = base_default()("section",  true ? {
  target: "e17r63yq0"
} : 0)("width:100%;height:15rem; background-repeat:no-repeat;background-position:center;background-size:100% 250%;.poster-inner{height:100%;margin-left:auto;margin-right:auto; width:", config/* XLG_SIZE */.lv, ";", (0,config/* FLEX_STYLE */.Yk)("center", "flex-start", "column"), ";h1{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));font-weight:700;margin-bottom:1rem;;}button{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;border-radius:0.375rem;;}}@media (max-width: ", config/* XLG_SIZE */.lv, "){padding-left:0.5rem;padding-right:0.5rem;;}@media (max-width: ", config/* SM_SIZE */.oe, "){padding-left:0px;padding-right:0px;height:13rem; ", (0,config/* FLEX_STYLE */.Yk)("center", "center", "column"), ";.poster-inner{", (0,config/* FLEX_STYLE */.Yk)("center", "center", "column"), ";width:100%; h1{font-size:1.125rem;line-height:1.75rem;;}button{font-size:0.75rem;line-height:1rem;;}}}" + ( true ? "" : 0));

const SearchPagePoster = ({
  searchWord
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const onClickSearchAnotherBtn = (0,external_react_.useCallback)(e => {
    e.stopPropagation();
    dispatch(main/* mainSlice.actions.openSearchPopUp */.P.actions.openSearchPopUp());
  }, []);
  return jsx_runtime_.jsx(SearchPagePosterWrapper, {
    style: {
      backgroundImage: `url("https://blog.kakaocdn.net/dn/dAuwyU/btqDGgSNmQb/KpJMSf5lC57ArjKLOyUxkK/img.jpg"
)`
    },
    children: (0,jsx_runtime_.jsxs)("div", {
      className: "poster-inner",
      children: [jsx_runtime_.jsx("h1", {
        children: `"${searchWord}" 키워드 검색 결과`
      }), jsx_runtime_.jsx("button", {
        onClick: onClickSearchAnotherBtn,
        children: "\uB2E4\uC2DC \uAC80\uC0C9\uD558\uAE30"
      })]
    })
  });
};

/* harmony default export */ const SearchPage_SearchPagePoster = (SearchPagePoster);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: ./components/Cards/ArticleColumnCard/index.tsx + 1 modules
var ArticleColumnCard = __webpack_require__(8751);
// EXTERNAL MODULE: ./components/Cards/ArticleSmallCard/index.tsx + 1 modules
var ArticleSmallCard = __webpack_require__(4318);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./sections/SearchPage/SearchPostList.tsx










const SearchPostListWrapper = base_default()("section",  true ? {
  target: "erfja1q0"
} : 0)(".searched-post-wrapper{", (0,config/* GRID_STYLE */.U6)("1rem", "repeat(4,1fr)"), "@media (max-width: 1000px){grid-template-columns:repeat(3, 1fr);}@media (max-width: 700px){grid-template-columns:repeat(2, 1fr);gap:0.5rem;}@media (max-width: 460px){display:block;;}}" + ( true ? "" : 0));

const SearchPostList = ({
  stories,
  moments
}) => {
  const {
    0: onMoreStories,
    1: setOnMoreStories
  } = (0,external_react_.useState)(false);
  const onClickMoreStories = (0,external_react_.useCallback)(() => {
    setOnMoreStories(prev => !prev);
  }, []);
  return (0,jsx_runtime_.jsxs)(SearchPostListWrapper, {
    children: [(0,jsx_runtime_.jsxs)("div", {
      className: "searched-post-wrapper",
      children: [(stories === null || stories === void 0 ? void 0 : stories.length) > 0 && (stories === null || stories === void 0 ? void 0 : stories.slice(0, 9).map((v, i) => jsx_runtime_.jsx(ArticleColumnCard/* default */.Z, {
        story: v
      }, i))), (moments === null || moments === void 0 ? void 0 : moments.length) > 0 && (moments === null || moments === void 0 ? void 0 : moments.slice(0, 9).map((v, i) => jsx_runtime_.jsx(ArticleSmallCard/* default */.Z, {
        isSearchPage: true,
        moment: v
      }, i)))]
    }), (stories === null || stories === void 0 ? void 0 : stories.length) > 8 || (moments === null || moments === void 0 ? void 0 : moments.length) > 8 && jsx_runtime_.jsx(external_antd_.Divider, {
      orientation: "center",
      children: jsx_runtime_.jsx("a", {
        onClick: onClickMoreStories,
        className: "more-icon",
        children: onMoreStories ? jsx_runtime_.jsx(icons_.MinusCircleOutlined, {}) : jsx_runtime_.jsx(icons_.PlusCircleOutlined, {})
      })
    })]
  });
};

/* harmony default export */ const SearchPage_SearchPostList = (SearchPostList);
// EXTERNAL MODULE: ./actions/user.ts
var user = __webpack_require__(5145);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./configureStore.ts + 1 modules
var configureStore = __webpack_require__(4603);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./utils/fetcher.ts
var fetcher = __webpack_require__(4608);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/search.tsx





function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }













const SearchPageWrapper = base_default()("div",  true ? {
  target: "e84vw800"
} : 0)( true ? {
  name: "1uy8sk9",
  styles: "--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));padding-bottom:15rem;padding-top:4rem; .layout{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));;}"
} : 0);

const index = ({
  searchPosts
}) => {
  var _searchPostsData$stor, _searchPostsData$mome;

  const {
    query
  } = (0,router_.useRouter)();
  const {
    data: searchPostsData
  } = external_swr_default()(`/search/${encodeURIComponent(query === null || query === void 0 ? void 0 : query.keyword)}`, fetcher/* default */.Z, {
    initialData: searchPosts,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [jsx_runtime_.jsx((head_default()), {
      children: (0,jsx_runtime_.jsxs)("title", {
        children: ["Search - ", searchPostsData === null || searchPostsData === void 0 ? void 0 : searchPostsData.searchWord]
      })
    }), (0,jsx_runtime_.jsxs)(SearchPageWrapper, {
      children: [jsx_runtime_.jsx(SearchPage_SearchPagePoster, {
        searchWord: (searchPostsData === null || searchPostsData === void 0 ? void 0 : searchPostsData.searchWord) || ""
      }), (0,jsx_runtime_.jsxs)(XLGLayout/* default */.Z, {
        children: [jsx_runtime_.jsx("h3", {
          className: "main-title",
          children: "\uC5F0\uB300\uAE30"
        }), searchPostsData && (searchPostsData === null || searchPostsData === void 0 ? void 0 : (_searchPostsData$stor = searchPostsData.stories) === null || _searchPostsData$stor === void 0 ? void 0 : _searchPostsData$stor.length) > 0 ? jsx_runtime_.jsx(SearchPage_SearchPostList, {
          stories: searchPostsData === null || searchPostsData === void 0 ? void 0 : searchPostsData.stories
        }) : jsx_runtime_.jsx("div", {
          children: "\uC5F0\uB300\uAE30\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
        }), jsx_runtime_.jsx("h3", {
          className: "main-title",
          children: "\uBAA8\uBA58\uD2B8"
        }), searchPostsData && (searchPostsData === null || searchPostsData === void 0 ? void 0 : (_searchPostsData$mome = searchPostsData.moments) === null || _searchPostsData$mome === void 0 ? void 0 : _searchPostsData$mome.length) > 0 ? jsx_runtime_.jsx(SearchPage_SearchPostList, {
          moments: searchPostsData === null || searchPostsData === void 0 ? void 0 : searchPostsData.moments
        }) : jsx_runtime_.jsx("div", {
          children: "\uBAA8\uBA58\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
        }), jsx_runtime_.jsx("h3", {
          className: "main-title",
          children: "\uC5EC\uD589\uC18C\uC2DD"
        })]
      })]
    })]
  });
};

const getServerSideProps = configureStore/* wrapper.getServerSideProps */.Y.getServerSideProps(store => async ({
  req,
  res,
  query
}) => {
  const cookie = req ? req.headers.cookie : "";
  (external_axios_default()).defaults.headers.Cookie = "";

  if (req && cookie) {
    (external_axios_default()).defaults.headers.Cookie = cookie;
  }

  await store.dispatch((0,user/* getUserInfoAction */.pZ)());
  const searchPosts = await (0,fetcher/* default */.Z)(`/search/${encodeURIComponent(query === null || query === void 0 ? void 0 : query.keyword)}`);
  return {
    props: {
      searchPosts
    }
  };
});
/* harmony default export */ const search = (index);

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
var __webpack_exports__ = __webpack_require__.X(0, [979,479,751,318,597], () => (__webpack_exec__(5975)));
module.exports = __webpack_exports__;

})();