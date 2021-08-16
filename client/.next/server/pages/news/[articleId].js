"use strict";
(() => {
var exports = {};
exports.id = 838;
exports.ids = [838];
exports.modules = {

/***/ 1393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsArticleWrapper": () => (/* binding */ NewsArticleWrapper),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4617);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7795);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3215);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7749);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils_fetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4608);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var configureStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4603);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var actions_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5145);
/* harmony import */ var _layout_PostLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1296);
/* harmony import */ var _sections_NewsPage_NewsArticleList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(171);
/* harmony import */ var _components_Post_PostThubnail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1072);
/* harmony import */ var _components_Maps_CountryMap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9617);
/* harmony import */ var _components_ConfirmToastify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6243);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2372);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_18__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const NewsArticleWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div",  true ? {
  target: "e104987h0"
} : 0)("padding-top:6rem;.post-content{user-select:none;padding-bottom:4rem;position:relative;;}.article-manage-wrapper{", (0,config__WEBPACK_IMPORTED_MODULE_4__/* .FLEX_STYLE */ .Yk)("center", "center"), ";}" + ( true ? "" : 0));

const index = ({
  initialArticle,
  initialArticles
}) => {
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    0: isOwner,
    1: setIsOwner
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    user
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__.useSelector)(state => state.user);
  const {
    data: article
  } = swr__WEBPACK_IMPORTED_MODULE_6___default()(`/article/${query === null || query === void 0 ? void 0 : query.articleId}`, utils_fetcher__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, _objectSpread({
    initialData: initialArticle
  }, config__WEBPACK_IMPORTED_MODULE_4__/* .noRevalidate */ .nb));
  const {
    data: articles,
    setSize
  } = (0,swr__WEBPACK_IMPORTED_MODULE_6__.useSWRInfinite)(index => `/article?page=${index + 1}`, utils_fetcher__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, _objectSpread({
    initialData: initialArticles
  }, config__WEBPACK_IMPORTED_MODULE_4__/* .noRevalidate */ .nb));
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var _article$user;

    if ((user === null || user === void 0 ? void 0 : user.id) === (article === null || article === void 0 ? void 0 : (_article$user = article.user) === null || _article$user === void 0 ? void 0 : _article$user.id)) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [user, article]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (article) {
      let contentHeaders = document.querySelectorAll(".post-content > h1 , .post-content > h2 ,.post-content > h3");
      contentHeaders.forEach((v, i) => {
        const span = document.createElement("span");
        span.setAttribute("id", `header_${i + 1}`);
        span.classList.add("anchor-offset-controller");
        v.classList.add("anchor-offset-parent");
        v.appendChild(span);
      });
    }
  }, [article]);
  const onClickConfirmDelete = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (user && isOwner) {
      axios__WEBPACK_IMPORTED_MODULE_10___default().delete(`/article/${article === null || article === void 0 ? void 0 : article.id}`).then(() => {
        (0,config__WEBPACK_IMPORTED_MODULE_4__/* .toastSuccessMessage */ .bi)("연대기를 성공적으로 삭제했습니다.");
        next_router__WEBPACK_IMPORTED_MODULE_5___default().push(`/news`);
      }).catch(error => {
        (0,config__WEBPACK_IMPORTED_MODULE_4__/* .toastErrorMessage */ .p4)(error);
        throw error;
      });
    }
  }, [user, isOwner, article]);
  const onClickEditBtn = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (user && isOwner) {
      next_router__WEBPACK_IMPORTED_MODULE_5___default().push(`/news/post?articleId=${query === null || query === void 0 ? void 0 : query.articleId}`);
    }
  }, [user, isOwner, query]);
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NewsArticleWrapper, {
    children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_PostLayout__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
      children: [article && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post_PostThubnail__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
          article: article
        }), isOwner && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            className: "main-title",
            children: "\uAD00\uB9AC (\uC6B4\uC601\uC790 \uC804\uC6A9)"
          }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "article-manage-wrapper",
            children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
              onClick: onClickEditBtn,
              className: "edit-btn",
              children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__.EditOutlined, {}), "\uAE30\uC0AC \uC218\uC815"]
            }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
              onClick: () => (0,_components_ConfirmToastify__WEBPACK_IMPORTED_MODULE_16__/* .toastConfirmMessage */ .u)(onClickConfirmDelete, "정말 이 기사를 삭제할까요?", "삭제해주세요."),
              className: "delete-btn",
              children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__.DeleteOutlined, {}), "\uAE30\uC0AC \uC0AD\uC81C"]
            })]
          })]
        }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
          className: "main-title",
          children: ["\uC704\uCE58 ", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: article === null || article === void 0 ? void 0 : article.region
          })]
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Maps_CountryMap__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
          lat: article === null || article === void 0 ? void 0 : article.lat,
          lng: article === null || article === void 0 ? void 0 : article.lng
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_8__.Divider, {}), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
          className: "post-content",
          children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            id: "main_post",
            className: "anchor-offset-controller"
          }), react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(article === null || article === void 0 ? void 0 : article.content)]
        })]
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
          marginBottom: "2rem"
        }
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_NewsPage_NewsArticleList__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
        setSize: setSize,
        articles: articles
      })]
    })
  });
};

const getServerSideProps = configureStore__WEBPACK_IMPORTED_MODULE_9__/* .wrapper.getServerSideProps */ .Y.getServerSideProps(store => async ({
  req,
  res,
  params
}) => {
  const cookie = req ? req.headers.cookie : "";
  (axios__WEBPACK_IMPORTED_MODULE_10___default().defaults.headers.Cookie) = "";

  if (req && cookie) {
    (axios__WEBPACK_IMPORTED_MODULE_10___default().defaults.headers.Cookie) = cookie;
  }

  await store.dispatch((0,actions_user__WEBPACK_IMPORTED_MODULE_11__/* .getUserInfoAction */ .pZ)());
  let initialArticles = await (0,utils_fetcher__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(`/article?page=1`);
  initialArticles = [initialArticles];
  const initialArticle = await (0,utils_fetcher__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(`/article/${params === null || params === void 0 ? void 0 : params.articleId}`);
  return {
    props: {
      initialArticles,
      initialArticle
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

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

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7795:
/***/ ((module) => {

module.exports = require("react-html-parser");

/***/ }),

/***/ 5508:
/***/ ((module) => {

module.exports = require("react-map-gl");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 5181:
/***/ ((module) => {

module.exports = require("react-scrollspy");

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
var __webpack_exports__ = __webpack_require__.X(0, [979,479,243,839,394,186,171], () => (__webpack_exec__(1393)));
module.exports = __webpack_exports__;

})();