"use strict";
exports.id = 479;
exports.ids = [479];
exports.modules = {

/***/ 3265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ NameSpaceWrapper),
  "Z": () => (/* binding */ components_NameSpace)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(3215);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(8349);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: external "dayjs/plugin/relativeTime"
var relativeTime_ = __webpack_require__(2289);
var relativeTime_default = /*#__PURE__*/__webpack_require__.n(relativeTime_);
// EXTERNAL MODULE: external "dayjs/locale/ko"
var ko_ = __webpack_require__(5470);
;// CONCATENATED MODULE: ./utils/dateCalculator.ts



external_dayjs_default().locale("ko");
external_dayjs_default().extend((relativeTime_default()));
function dateCalculator(createdAt) {
  const createdDay = external_dayjs_default()(createdAt).format("YYYY-MM-DD");
  const today = external_dayjs_default()(new Date()).format("YYYY-MM-DD");
  const dayDiff = external_dayjs_default()(today).diff(createdDay, "day");

  if (dayDiff > 0) {
    return createdDay;
  } else {
    return external_dayjs_default()(createdAt).fromNow();
  }
}
;// CONCATENATED MODULE: ./components/NameSpace.tsx







const NameSpaceWrapper = base_default()("div",  true ? {
  target: "eoxveqm0"
} : 0)((0,config/* FLEX_STYLE */.Yk)("flex-start", "center"), ";cursor:pointer; &:hover{p{text-decoration:underline;;}}.icon{position:relative;cursor:pointer;margin-right:0.75rem;;img{width:2.5rem;height:2.5rem;border-radius:9999px;;}.goto-profile-popup{position:absolute;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;left:-1.25rem;top:-2rem;--tw-bg-opacity:1;background-color:rgba(107, 114, 128, var(--tw-bg-opacity));border-radius:0.25rem;--tw-shadow:0px 0px 15px rgba(0, 0, 0, 0.3);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);display:none;text-align:center;font-size:0.75rem;line-height:1rem;font-weight:700;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity)); white-space:nowrap;}&:hover{img{opacity:0.3;;}.profile-popup{display:block;;}}}p{margin-top:0.5rem; font-size:0.83rem;}span{display:inline-block;}.name-title{font-size:0.875rem;line-height:1.25rem; ", (0,config/* FLEX_STYLE */.Yk)("flex-start", "center"), ";.comment-date{margin-left:0.6rem;color:", (0,config/* RGB_BLACK */.Xk)(0.3), ";font-size:0.75rem;}}.date{padding-top:0.2rem;font-size:0.7rem;color:", (0,config/* RGB_BLACK */.Xk)(0.3), ";}" + ( true ? "" : 0));

const NameSpace = ({
  user,
  date,
  comment
}) => {
  const onClickGotoProfile = (0,external_react_.useCallback)(e => {
    e.stopPropagation();
    router_default().push(`/me/${user.id}`);
  }, [user]);
  return (0,jsx_runtime_.jsxs)(NameSpaceWrapper, {
    className: "name-space-wrapper",
    children: [(0,jsx_runtime_.jsxs)("div", {
      onClick: onClickGotoProfile,
      className: "icon",
      children: [jsx_runtime_.jsx("img", {
        src: user !== null && user !== void 0 && user.icon ? user === null || user === void 0 ? void 0 : user.icon : config/* DEFAULT_ICON_URL */.u5,
        alt: "user-icon"
      }), jsx_runtime_.jsx("span", {
        className: "goto-profile-popup",
        children: "\uD504\uB85C\uD544 \uBCF4\uAE30"
      })]
    }), (0,jsx_runtime_.jsxs)("div", {
      className: "user-info",
      children: [(0,jsx_runtime_.jsxs)("div", {
        className: "name-title",
        children: [jsx_runtime_.jsx("span", {
          className: "name",
          children: user === null || user === void 0 ? void 0 : user.name
        }), comment && jsx_runtime_.jsx("span", {
          className: "comment-date",
          children: dateCalculator(date)
        })]
      }), comment ? jsx_runtime_.jsx("p", {
        children: comment
      }) : jsx_runtime_.jsx("span", {
        className: "date",
        children: dateCalculator(date)
      })]
    })]
  });
};

/* harmony default export */ const components_NameSpace = (/*#__PURE__*/(0,external_react_.memo)(NameSpace));

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

/***/ })

};
;