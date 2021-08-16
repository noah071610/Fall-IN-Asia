"use strict";
exports.id = 751;
exports.ids = [751];
exports.modules = {

/***/ 8751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Cards_ArticleColumnCard)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: ./components/NameSpace.tsx + 1 modules
var NameSpace = __webpack_require__(3265);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(3215);
;// CONCATENATED MODULE: ./components/Cards/ArticleColumnCard/styles.tsx


const ArticleColumnCardWrapper = base_default()("article",  true ? {
  target: "ed89bwd0"
} : 0)("--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));cursor:pointer;padding-bottom:2rem;--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); transition:0.3s all;&:hover{--tw-shadow:0px 0px 15px rgba(0, 0, 0, 0.3);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); .image-wrapper{img{transform:scale(1.15);}}}.image-wrapper{margin-bottom:1rem;overflow:hidden;position:relative; img{width:100%; height:180px;transition:0.3s all;}.like-comment{position:absolute;bottom:0.5rem;right:0.5rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;opacity:0.5;border-radius:0.75rem; li{padding:0.25rem;cursor:pointer; .count{margin:0 0.15rem;}.anticon{font-size:1.2rem;}}}}.box-card-info{padding:0 1rem;}p{margin:1rem;margin-bottom:0px;overflow:hidden;;font-size:0.875rem;line-height:1.25rem;font-weight:700; ", (0,config/* ELLIPSIS_STYLE */.kA)(1.7, 2, "46px"), ";}@media (max-width: ", config/* SM_SIZE */.oe, "){padding-bottom:1.5rem;margin-bottom:0.75rem; p{", (0,config/* ELLIPSIS_STYLE */.kA)(1.7, 2, "auto"), ";}}" + ( true ? "" : 0));
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/Cards/ArticleColumnCard/index.tsx








const ArticleColumnCard = ({
  story,
  isMain
}) => {
  var _story$comments, _story$likedUser;

  const onClickArticleCard = (0,external_react_.useCallback)(() => {
    router_default().push(`/story/${story === null || story === void 0 ? void 0 : story.code}/${story === null || story === void 0 ? void 0 : story.id}`);
  }, []);
  return (0,jsx_runtime_.jsxs)(ArticleColumnCardWrapper, {
    className: "article-card-column-wrapper",
    onClick: onClickArticleCard,
    style: isMain ? {
      boxShadow: "none",
      borderRadius: "15px"
    } : {},
    children: [(0,jsx_runtime_.jsxs)("div", {
      style: isMain ? {
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px"
      } : {},
      className: "image-wrapper",
      children: [jsx_runtime_.jsx("img", {
        style: isMain ? {
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px"
        } : {},
        src: story === null || story === void 0 ? void 0 : story.thumbnail,
        alt: "story-image"
      }), (0,jsx_runtime_.jsxs)("ul", {
        className: "like-comment",
        children: [(0,jsx_runtime_.jsxs)("li", {
          children: [jsx_runtime_.jsx(icons_.CommentOutlined, {}), jsx_runtime_.jsx("span", {
            className: "count",
            children: story === null || story === void 0 ? void 0 : (_story$comments = story.comments) === null || _story$comments === void 0 ? void 0 : _story$comments.length
          })]
        }), (0,jsx_runtime_.jsxs)("li", {
          children: [jsx_runtime_.jsx(icons_.HeartOutlined, {}), jsx_runtime_.jsx("span", {
            className: "count",
            children: story === null || story === void 0 ? void 0 : (_story$likedUser = story.likedUser) === null || _story$likedUser === void 0 ? void 0 : _story$likedUser.length
          })]
        })]
      })]
    }), jsx_runtime_.jsx("div", {
      className: "box-card-info",
      children: jsx_runtime_.jsx(NameSpace/* default */.Z, {
        date: story === null || story === void 0 ? void 0 : story.createdAt,
        user: story === null || story === void 0 ? void 0 : story.user
      })
    }), jsx_runtime_.jsx("p", {
      children: story === null || story === void 0 ? void 0 : story.title
    })]
  });
};

/* harmony default export */ const Cards_ArticleColumnCard = (ArticleColumnCard);

/***/ })

};
;