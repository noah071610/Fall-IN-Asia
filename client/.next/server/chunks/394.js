"use strict";
exports.id = 394;
exports.ids = [394];
exports.modules = {

/***/ 6394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Cards_NewsCard)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(3215);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
;// CONCATENATED MODULE: ./components/Cards/NewsCard/styles.tsx


const NewsCardWrapper = base_default()("article",  true ? {
  target: "e1adcsch0"
} : 0)("cursor:pointer;margin-bottom:1rem;display:flex;--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity)); gap:0 1rem;&:hover{--tw-shadow:0px 0px 15px rgba(0, 0, 0, 0.3);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); .image-wrapper{img{transform:scale(1.15);}}}.image-wrapper{overflow:hidden;width:33.333333%;position:relative;height:12rem;margin-left:1.5rem; img{height:12rem;width:100%; transition:0.3s all;}.guide-label{transform:skewX(-35deg);position:absolute;top:0.5rem;left:-1rem;--tw-bg-opacity:1;background-color:rgba(37, 99, 235, var(--tw-bg-opacity));padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1.25rem;padding-right:1.25rem;opacity:0.5;font-weight:700;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity)); span{display:block;margin-left:0.5rem; transform:skewX(35deg);}}}.news-content{", (0,config/* ELLIPSIS_STYLE */.kA)(1.7, 3, "auto"), ";}.news-main{width:66.666667%;padding-left:1rem;padding-right:1rem;padding-top:2rem;padding-bottom:2.5rem;margin-right:1.5rem;;}h2{", (0,config/* ELLIPSIS_STYLE */.kA)(1, 1, "auto"), ";font-size:1.25rem;line-height:1.75rem;font-weight:700;margin-bottom:1rem;;}@media (max-width: ", config/* SM_SIZE */.oe, "){display:block; .image-wrapper{margin-left:0px;margin-bottom:1rem;width:100%;height:14rem; img{height:14rem;;}.guide-label{transform:skewX(-35deg);top:0.5rem;left:-1.25rem;font-size:1.25rem;line-height:1.75rem; span{display:block;margin-left:0.5rem; transform:skewX(35deg);}}}.news-content{", (0,config/* ELLIPSIS_STYLE */.kA)(1.7, 3, "auto"), ";}.news-main{width:100%;padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;padding-top:0px;;}h2{", (0,config/* ELLIPSIS_STYLE */.kA)(1, 1, "auto"), ";font-size:1.25rem;line-height:1.75rem;font-weight:700;margin-bottom:1rem;;}}" + ( true ? "" : 0));
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./utils/html2textConverter.ts
var html2textConverter = __webpack_require__(9398);
;// CONCATENATED MODULE: ./components/Cards/NewsCard/index.tsx








const NewsCard = ({
  article
}) => {
  const onClickNewsCard = (0,external_react_.useCallback)(() => {
    router_default().push(`/news/${article === null || article === void 0 ? void 0 : article.id}`);
  }, [article]);
  return (0,jsx_runtime_.jsxs)(NewsCardWrapper, {
    className: "news-card-wrapper",
    onClick: onClickNewsCard,
    children: [(0,jsx_runtime_.jsxs)("div", {
      className: "image-wrapper",
      children: [jsx_runtime_.jsx("img", {
        src: article !== null && article !== void 0 && article.thumbnail ? article.thumbnail : config/* NO_IMAGE_URL */.Q7,
        alt: "news-thumbnail"
      }), (article === null || article === void 0 ? void 0 : article.label) && jsx_runtime_.jsx("div", {
        className: "guide-label",
        children: jsx_runtime_.jsx("span", {
          children: article === null || article === void 0 ? void 0 : article.label
        })
      })]
    }), (0,jsx_runtime_.jsxs)("div", {
      className: "news-main",
      children: [jsx_runtime_.jsx("h2", {
        children: article === null || article === void 0 ? void 0 : article.title
      }), jsx_runtime_.jsx("p", {
        className: "news-content",
        children: (0,html2textConverter/* default */.Z)(article === null || article === void 0 ? void 0 : article.content)
      })]
    })]
  });
};

/* harmony default export */ const Cards_NewsCard = (NewsCard);

/***/ })

};
;