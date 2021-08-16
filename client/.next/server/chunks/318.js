"use strict";
exports.id = 318;
exports.ids = [318];
exports.modules = {

/***/ 4318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Cards_ArticleSmallCard)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: ./utils/html2textConverter.ts
var html2textConverter = __webpack_require__(9398);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(7381);
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(3215);
;// CONCATENATED MODULE: ./components/Cards/ArticleSmallCard/styles.tsx


const ArticleSmallCardWrapper = isSearchPage => /*#__PURE__*/(0,react_.css)("width:100%;cursor:pointer;margin-bottom:1.5rem; ", isSearchPage && {
  "--tw-shadow": "0px 0px 5px rgba(0, 0, 0, 0.15)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "paddingLeft": "1rem",
  "paddingRight": "1rem",
  "paddingTop": "1rem",
  "paddingBottom": "2rem",
  "marginBottom": "0px"
}, " transition:0.3s all;&:hover{", isSearchPage && {
  "--tw-shadow": "0px 0px 15px rgba(0, 0, 0, 0.3)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
}, ";}.memont-small-top{", (0,config/* GRID_STYLE */.U6)("1rem", "4.3rem 2.5fr"), ";margin-bottom:1rem;.image-wrapper{display:flex;overflow:hidden;border-radius:0.375rem; img{border-radius:9999px; width:4.3rem;height:4.3rem;}}.small-card-info{", (0,config/* FLEX_STYLE */.Yk)("center", "flex-start", "column"), " span{display:block;margin-bottom:0.25rem;font-size:0.75rem;line-height:1rem;;}}}h2{padding-left:0.25rem;font-weight:700;:hover{text-decoration:underline;} ", (0,config/* ELLIPSIS_STYLE */.kA)(1.65, 2, "auto"), ";font-size:0.8rem;}" + ( true ? "" : 0),  true ? "" : 0);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(8349);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
;// CONCATENATED MODULE: ./components/Cards/ArticleSmallCard/index.tsx








const ArticleSmallCard = ({
  isSearchPage,
  moment,
  story,
  article
}) => {
  var _moment$user, _ref, _story$country, _article$country, _moment$country, _ref2, _ref2$user, _ref3;

  const onClickArticleSmallCard = (0,external_react_.useCallback)(() => {
    if (moment) {
      router_default().push(`/country/${moment === null || moment === void 0 ? void 0 : moment.code}/${moment === null || moment === void 0 ? void 0 : moment.id}`);
    } else {
      router_default().push(`/story/${story === null || story === void 0 ? void 0 : story.code}/${story === null || story === void 0 ? void 0 : story.id}`);
    }
  }, []);
  return (0,jsx_runtime_.jsxs)("article", {
    css: ArticleSmallCardWrapper(isSearchPage),
    onClick: onClickArticleSmallCard,
    children: [(0,jsx_runtime_.jsxs)("div", {
      className: "memont-small-top",
      children: [jsx_runtime_.jsx("div", {
        className: "image-wrapper",
        children: jsx_runtime_.jsx("img", {
          style: story || article ? {
            borderRadius: "5px"
          } : {},
          src: (moment === null || moment === void 0 ? void 0 : (_moment$user = moment.user) === null || _moment$user === void 0 ? void 0 : _moment$user.icon) || ((_ref = story || article) === null || _ref === void 0 ? void 0 : _ref.thumbnail),
          alt: "card-image"
        })
      }), (0,jsx_runtime_.jsxs)("div", {
        className: "small-card-info",
        children: [(0,jsx_runtime_.jsxs)("span", {
          children: [story && `${story === null || story === void 0 ? void 0 : (_story$country = story.country) === null || _story$country === void 0 ? void 0 : _story$country.name}/연대기`, article && `${article === null || article === void 0 ? void 0 : (_article$country = article.country) === null || _article$country === void 0 ? void 0 : _article$country.name}/${article === null || article === void 0 ? void 0 : article.type}`, moment && `${moment === null || moment === void 0 ? void 0 : (_moment$country = moment.country) === null || _moment$country === void 0 ? void 0 : _moment$country.name}/${moment === null || moment === void 0 ? void 0 : moment.type}`]
        }), (moment || story) && jsx_runtime_.jsx("span", {
          children: (_ref2 = moment || story) === null || _ref2 === void 0 ? void 0 : (_ref2$user = _ref2.user) === null || _ref2$user === void 0 ? void 0 : _ref2$user.name
        }), jsx_runtime_.jsx("span", {
          children: external_dayjs_default()((_ref3 = moment || story || article) === null || _ref3 === void 0 ? void 0 : _ref3.createdAt).format("YYYY/MM/DD")
        })]
      })]
    }), jsx_runtime_.jsx("h2", {
      children: (0,html2textConverter/* default */.Z)((moment === null || moment === void 0 ? void 0 : moment.content) || (story === null || story === void 0 ? void 0 : story.title) || (article === null || article === void 0 ? void 0 : article.title))
    })]
  });
};

/* harmony default export */ const Cards_ArticleSmallCard = (ArticleSmallCard);

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