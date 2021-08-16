exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 2697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_MainLayout)
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
;// CONCATENATED MODULE: ./sections/MainPage/MainAsideLeftNav/styles.tsx


const MainAsideLeftNavWrapper = base_default()("nav",  true ? {
  target: "ehgubkf0"
} : 0)("@media (max-width: 900px){display:none;;}--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));border-radius:1rem;height:100%;padding:1rem;position:sticky; top:5rem;width:18%;.country{.country-img{cursor:pointer;display:inline-block;width:100%;border-radius:1rem; img{width:100%;height:7rem;--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:1rem;;}}.country-desc{margin:1rem 0;a{font-weight:700;;font-size:1.4rem;}div{font-weight:700;;margin-top:0.5rem;span{display:block;margin-bottom:0.3rem;}}}}ul{display:block;font-size:1rem;line-height:1.5rem;padding-top:1rem; li{padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0.5rem;padding-right:0.5rem;display:block;cursor:pointer;border-radius:1rem;margin-bottom:0.25rem; ", (0,config/* FLEX_STYLE */.Yk)("flex-start", "center"), ";.icon{width:1.25rem;height:1.25rem;margin-right:1rem;;}span{font-size:0.875rem;line-height:1.25rem;;}&:hover{background:", config/* GRAY_COLOR */.eR, ";}}}.menu-active{background:", config/* GRAY_COLOR */.eR, ";}" + ( true ? "" : 0));
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./utils/fetcher.ts
var fetcher = __webpack_require__(4608);
;// CONCATENATED MODULE: ./sections/MainPage/MainAsideLeftNav/index.tsx












const MainAsideLeftNav = () => {
  var _country$moments, _country$stories;

  const {
    query
  } = (0,router_.useRouter)();
  const {
    data: country
  } = external_swr_default()(query !== null && query !== void 0 && query.code ? `/country/${query === null || query === void 0 ? void 0 : query.code}` : null, fetcher/* default */.Z, config/* noRevalidate */.nb);
  const onClickCountry = (0,external_react_.useCallback)(() => {
    if (query !== null && query !== void 0 && query.code) {
      router_default().push(`/country/${query === null || query === void 0 ? void 0 : query.code}`);
    } else {
      router_default().push(`/`);
    }
  }, [query]);
  return (0,jsx_runtime_.jsxs)(MainAsideLeftNavWrapper, {
    children: [(0,jsx_runtime_.jsxs)("div", {
      className: "country",
      children: [jsx_runtime_.jsx("div", {
        onClick: onClickCountry,
        className: "country-img",
        children: jsx_runtime_.jsx("img", {
          src: (country === null || country === void 0 ? void 0 : country.image_src) || config/* WORLD_IMAGE */.Of
        })
      }), (0,jsx_runtime_.jsxs)("div", {
        className: "country-desc",
        children: [jsx_runtime_.jsx("a", {
          onClick: onClickCountry,
          children: (country === null || country === void 0 ? void 0 : country.name) || "아시아 전체"
        }), country && jsx_runtime_.jsx("div", {
          children: (0,jsx_runtime_.jsxs)("span", {
            children: ["\uD3EC\uC2A4\uD305\uC218 : ", (country === null || country === void 0 ? void 0 : (_country$moments = country.moments) === null || _country$moments === void 0 ? void 0 : _country$moments.length) + (country === null || country === void 0 ? void 0 : (_country$stories = country.stories) === null || _country$stories === void 0 ? void 0 : _country$stories.length)]
          })
        })]
      })]
    }), (0,jsx_runtime_.jsxs)("ul", {
      children: [jsx_runtime_.jsx(next_link.default, {
        href: country ? `/country/${country.code}?type=community` : "/?type=community",
        children: jsx_runtime_.jsx("a", {
          children: (0,jsx_runtime_.jsxs)("li", {
            className: (query === null || query === void 0 ? void 0 : query.type) === "community" ? "menu-active" : "",
            children: [jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              className: "icon",
              icon: free_solid_svg_icons_.faHandshake
            }), jsx_runtime_.jsx("span", {
              children: "\uD55C\uC778 \uCEE4\uBBA4\uB2C8\uD2F0"
            })]
          })
        })
      }), jsx_runtime_.jsx(next_link.default, {
        href: country ? `/country/${country.code}?type=trip` : "/?type=trip",
        children: jsx_runtime_.jsx("a", {
          children: (0,jsx_runtime_.jsxs)("li", {
            className: (query === null || query === void 0 ? void 0 : query.type) === "trip" ? "menu-active" : "",
            children: [jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              className: "icon",
              icon: free_solid_svg_icons_.faPlaneDeparture
            }), jsx_runtime_.jsx("span", {
              children: "\uC5EC\uD589\uC815\uBCF4 \uACF5\uC720"
            })]
          })
        })
      }), jsx_runtime_.jsx(next_link.default, {
        href: country ? `/country/${country.code}?type=scam+alert` : "/?type=scam+alert",
        children: jsx_runtime_.jsx("a", {
          children: (0,jsx_runtime_.jsxs)("li", {
            className: (query === null || query === void 0 ? void 0 : query.type) === "scam alert" ? "menu-active" : "",
            children: [jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              className: "icon",
              icon: free_solid_svg_icons_.faExclamationCircle
            }), jsx_runtime_.jsx("span", {
              children: "\uC0AC\uAE30 \uACBD\uBCF4"
            })]
          })
        })
      }), jsx_runtime_.jsx(next_link.default, {
        href: country ? `/country/${country.code}?type=accompany` : "/?type=accompany",
        children: jsx_runtime_.jsx("a", {
          children: (0,jsx_runtime_.jsxs)("li", {
            className: (query === null || query === void 0 ? void 0 : query.type) === "accompany" ? "menu-active" : "",
            children: [jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              className: "icon",
              icon: free_solid_svg_icons_.faUsers
            }), jsx_runtime_.jsx("span", {
              children: "\uB3D9\uD589\uC790 \uBAA8\uC9D1"
            })]
          })
        })
      }), country ? jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: jsx_runtime_.jsx("a", {
          children: (0,jsx_runtime_.jsxs)("li", {
            children: [jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              className: "icon",
              icon: free_solid_svg_icons_.faGlobe
            }), jsx_runtime_.jsx("span", {
              children: "\uC544\uC2DC\uC544 \uC804\uCCB4"
            })]
          })
        })
      }) : jsx_runtime_.jsx(next_link.default, {
        href: "/country/select",
        children: jsx_runtime_.jsx("a", {
          children: (0,jsx_runtime_.jsxs)("li", {
            children: [jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              className: "icon",
              icon: free_solid_svg_icons_.faGlobe
            }), jsx_runtime_.jsx("span", {
              children: "\uAD6D\uAC00\uC120\uD0DD"
            })]
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const MainPage_MainAsideLeftNav = (MainAsideLeftNav);
// EXTERNAL MODULE: ./components/Cards/ArticleSmallCard/index.tsx + 1 modules
var ArticleSmallCard = __webpack_require__(4318);
;// CONCATENATED MODULE: ./sections/MainPage/MainAsideRightList/styles.tsx


const MainAsideRightListWrapper = base_default()("aside",  true ? {
  target: "e65u1tu0"
} : 0)("@media (max-width: 900px){display:none;;}--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));border-radius:1rem;height:100%;padding-top:1.5rem;padding-bottom:1.5rem;padding-left:1rem;padding-right:1rem;position:sticky; top:5rem;width:22%;.aside-title{font-size:0.875rem;line-height:1.25rem;font-weight:700;;margin-top:3rem;margin-bottom:1rem;;}.aside-title:first-of-type{margin-top:0px;margin-bottom:1rem;;}li{width:100%;cursor:pointer; .image-wrapper{display:flex;overflow:hidden;border-radius:0.375rem;margin-bottom:1rem; img{transition:0.3s all;width:4rem;height:4rem;border-radius:0.375rem;margin-right:1rem;;}}h4{margin-bottom:0.5rem;}p{", (0,config/* ELLIPSIS_STYLE */.kA)(1.3, 2, "40px"), ";font-weight:700;;font-size:0.94rem;}}" + ( true ? "" : 0));
;// CONCATENATED MODULE: ./sections/MainPage/MainAsideRightList/index.tsx








const MainAsideRightList = () => {
  const {
    data: latestMoments
  } = external_swr_default()("/moment/latest", fetcher/* default */.Z);
  const {
    data: latestStories
  } = external_swr_default()("/story/latest", fetcher/* default */.Z);
  return (0,jsx_runtime_.jsxs)(MainAsideRightListWrapper, {
    children: [jsx_runtime_.jsx("h2", {
      className: "aside-title",
      children: "\uCD5C\uADFC \uC5F0\uB300\uAE30"
    }), latestStories === null || latestStories === void 0 ? void 0 : latestStories.map((v, i) => jsx_runtime_.jsx(ArticleSmallCard/* default */.Z, {
      story: v
    }, i)), jsx_runtime_.jsx("h2", {
      className: "aside-title",
      children: "\uCD5C\uADFC \uBAA8\uBA58\uD2B8"
    }), latestMoments === null || latestMoments === void 0 ? void 0 : latestMoments.map((v, i) => jsx_runtime_.jsx(ArticleSmallCard/* default */.Z, {
      moment: v
    }, i))]
  });
};

/* harmony default export */ const MainPage_MainAsideRightList = (MainAsideRightList);
// EXTERNAL MODULE: ./components/Cards/PosterCard.tsx
var PosterCard = __webpack_require__(6419);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./components/SliderArrow.tsx
var SliderArrow = __webpack_require__(8985);
;// CONCATENATED MODULE: ./sections/MainPage/MainPoster.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const MainPosterWrapper = base_default()("section",  true ? {
  target: "e1leyvpp0"
} : 0)("width:", config/* XLG_SIZE */.lv, ";margin-left:auto;margin-right:auto;border-radius:1rem; padding-top:6.5rem;.slick-arrow{display:none!important;}@media (max-width: 900px){width:100%;padding-left:1rem;padding-right:1rem;;}@media (max-width: ", config/* SM_SIZE */.oe, "){padding-top:4rem;padding-left:0px;padding-right:0px;margin:0px;;}.slick-active{z-index:999;}" + ( true ? "" : 0));

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

const MainPoster = () => {
  return jsx_runtime_.jsx(MainPosterWrapper, {
    children: (0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
      children: [jsx_runtime_.jsx(PosterCard/* default */.Z, {
        image: "https://user-images.githubusercontent.com/74864925/129447142-48c58d87-d5e8-46ba-9052-8d1b8e1c383e.png",
        isMain: true,
        path: "/",
        title: "Share your infomation",
        desc: "\uBAA8\uBA58\uD2B8 : \uC5EC\uD589\uC774\uB77C\uB294 \uB9DD\uB9DD\uB300\uD574\uC5D0\uC11C \uAE38\uC744 \uC783\uC5C8\uB098\uC694? \uBB3C\uC5B4\uBD10\uC694! \uB3C8\uB4DC\uB294\uAC70 \uC544\uB2C8\uC796\uC544\uC694~"
      }), jsx_runtime_.jsx(PosterCard/* default */.Z, {
        image: "https://user-images.githubusercontent.com/74864925/129452165-e9675084-15d1-4891-a9cb-bae6bf9eaf33.png",
        isMain: true,
        link: "https://www.0404.go.kr/dev/newest_list.mofa",
        title: "I trust We can get over covid-19",
        desc: "\uD574\uC678\uC548\uC804\uC5EC\uD589 : \uC678\uAD50\uBD80\uC5D0\uC11C \uCF54\uB85C\uB09819 \uC785\uAD6D\uC81C\uD55C \uC5EC\uBD80\uB97C \uD655\uC778\uD558\uC138\uC694."
      }), jsx_runtime_.jsx(PosterCard/* default */.Z, {
        image: "https://user-images.githubusercontent.com/74864925/129446624-f357679e-af98-41f7-a9ac-4f3dc434a551.png",
        isMain: true,
        path: "/story",
        title: "Leave and Share your memory",
        desc: "\uC5F0\uB300\uAE30 : \uB2F9\uC2E0\uC758 \uC5EC\uC815\uC5D0\uB294 \uC5B4\uB5A4 \uC77C\uC774 \uC788\uC5C8\uB098\uC694?"
      })]
    }))
  });
};

/* harmony default export */ const MainPage_MainPoster = (MainPoster);
;// CONCATENATED MODULE: ./layout/MainLayout.tsx









const MainLayoutWrapper = base_default()("main",  true ? {
  target: "e6r3qxo0"
} : 0)("--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity)); .layout{width:", config/* XLG_SIZE */.lv, ";margin-left:auto;margin-right:auto;padding-top:2rem;padding-bottom:8rem;display:flex; .layout-middle{width:60%;padding-left:2rem;padding-right:2rem; .main-title{font-size:1rem;line-height:1.5rem;font-weight:700;margin-top:2rem;margin-bottom:1rem;;}.main-title:first-of-type{margin-top:0px;margin-bottom:1rem;;}}}@media (max-width: 900px){.layout{width:100%;padding-left:1rem;padding-right:1rem; .layout-middle{width:100%;padding-left:0px;padding-right:0px; .main-title{font-size:0.875rem;line-height:1.25rem;margin-top:1.75rem;margin-bottom:0.75rem;;}}}}@media (max-width: ", config/* SM_SIZE */.oe, "){.layout{padding-left:0.5rem;padding-right:0.5rem;;}}" + ( true ? "" : 0));

const MainLayout = ({
  children
}) => {
  return (0,jsx_runtime_.jsxs)(MainLayoutWrapper, {
    children: [jsx_runtime_.jsx(MainPage_MainPoster, {}), (0,jsx_runtime_.jsxs)("div", {
      className: "layout",
      children: [jsx_runtime_.jsx(MainPage_MainAsideLeftNav, {}), jsx_runtime_.jsx("div", {
        className: "layout-middle",
        children: children
      }), jsx_runtime_.jsx(MainPage_MainAsideRightList, {})]
    })]
  });
};

/* harmony default export */ const layout_MainLayout = (MainLayout);

/***/ }),

/***/ 2632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4617);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2372);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7749);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4608);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3215);
/* harmony import */ var _components_Cards_ArticleColumnCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8751);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9080);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_SliderArrow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8985);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const popularSlideSettings = {
  dots: false,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  speed: 300,
  nextArrow: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SliderArrow__WEBPACK_IMPORTED_MODULE_10__/* .NextArrow */ .g, {}),
  prevArrow: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SliderArrow__WEBPACK_IMPORTED_MODULE_10__/* .PrevArrow */ .$, {}),
  responsive: [{
    breakpoint: 576,
    settings: {
      slidesToShow: 1
    }
  }]
};

const MainPopularArticleSlideWrapper = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()((react_slick__WEBPACK_IMPORTED_MODULE_9___default()),  true ? {
  target: "epiepfm1"
} : 0)(".slick-slide{padding:0.5rem;}.more-card{cursor:pointer;position:relative;border-radius:1rem; height:330px;.more-icon{position:absolute;top:50%;left:50%;--tw-text-opacity:1;color:rgba(209, 213, 219, var(--tw-text-opacity)); transform:translate(-50%,-50%);", (0,config__WEBPACK_IMPORTED_MODULE_7__/* .FLEX_STYLE */ .Yk)("center", "center", "column"), ";.anticon{font-size:3rem;margin-bottom:1rem;}}}@media (max-width: ", config__WEBPACK_IMPORTED_MODULE_7__/* .SM_SIZE */ .oe, "){.slick-slide{padding:0px;;}}" + ( true ? "" : 0));

const NoStoryWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div",  true ? {
  target: "epiepfm0"
} : 0)( true ? "" : 0);

const MainPopularArticleSlide = ({
  country
}) => {
  const {
    data: popularArticles
  } = swr__WEBPACK_IMPORTED_MODULE_5___default()(`/story/popular?code=${(country === null || country === void 0 ? void 0 : country.code) || ""}`, utils_fetcher__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, config__WEBPACK_IMPORTED_MODULE_7__/* .noRevalidate */ .nb);
  const onClickMoreCard = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(`/story`);
  }, [country]);
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: popularArticles && popularArticles.length > 0 ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MainPopularArticleSlideWrapper, _objectSpread(_objectSpread({}, popularSlideSettings), {}, {
      children: [popularArticles === null || popularArticles === void 0 ? void 0 : popularArticles.map((v, i) => {
        return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cards_ArticleColumnCard__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
          isMain: true,
          story: v
        }, i);
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onClick: onClickMoreCard,
        className: "more-card",
        children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "more-icon",
          children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.PlusCircleOutlined, {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: "\uB354\uBCF4\uAE30"
          })]
        })
      })]
    })) : (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(NoStoryWrapper, {
      children: ["\uC544\uC9C1 ", country === null || country === void 0 ? void 0 : country.name, "\uAD00\uB828 \uC5F0\uB300\uAE30\uAC00 \uC5C6\uC5B4\uC694.\uD83D\uDE30"]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(MainPopularArticleSlide));

/***/ }),

/***/ 300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainPage_MomentList)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(3215);
;// CONCATENATED MODULE: ./sections/MainPage/MomentList/styles.tsx


const MomentListWrapper = base_default()("section",  true ? {
  target: "e1qeygzc0"
} : 0)(".content-wrapper{margin-top:1rem;padding-bottom:1rem;border-radius:1rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity)); .content-filter{padding:1rem;", (0,config/* FLEX_STYLE */.Yk)("flex-end", "center"), " button{padding-left:0px;padding-right:0px;padding-bottom:0.25rem;margin-left:0.5rem;margin-right:0.5rem; &:hover{font-weight:bold;color:", config/* BLUE_COLOR */.vX, ";}}}.no-post{", (0,config/* FLEX_STYLE */.Yk)("center", "center", "column"), " padding-top:2rem;padding-bottom:2rem; img{width:20%;opacity:0.3;;}}}.article-card-wrapper:last-of-type{background:red;}" + ( true ? "" : 0));
// EXTERNAL MODULE: ./hooks/useOnScreen.ts
var useOnScreen = __webpack_require__(1796);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: ./components/NameSpace.tsx + 1 modules
var NameSpace = __webpack_require__(3265);
;// CONCATENATED MODULE: ./components/Cards/MomentCard/styles.tsx


const MomentCardWrapper = base_default()("article",  true ? {
  target: "e1owidme0"
} : 0)("padding-top:2rem;padding-bottom:2rem;margin-left:1.5rem;margin-right:1.5rem; ", (0,config/* BORDER_THIN */.h_)("border-bottom"), ";.article-header{a{transition:none;&:hover{font-weight:700; color:", config/* BLUE_COLOR */.vX, ";}}}.article-top{", (0,config/* FLEX_STYLE */.Yk)("space-between", "flex-start"), ";padding-bottom:1rem;padding-left:0.25rem;;}.article{.content{cursor:pointer;font-weight:700;padding-left:0.25rem;padding-bottom:1rem;line-height:1.75rem;:hover{text-decoration:underline;};}.moment-image-wrapper{cursor:pointer;margin-bottom:1rem;display:flex; .moment-image{border-radius:1rem;width:9rem;height:9rem;margin-right:0.5rem;;}.moment-more-image{width:9rem;height:9rem;--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));border-radius:1rem; ", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";span{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));font-weight:700;font-size:1.875rem;line-height:2.25rem;;}}}}.article-footer{li{cursor:pointer;padding:0.25rem; .count{margin-left:0.25rem;margin-right:0.25rem;;}.anticon{font-size:1rem;}&:hover{background:", config/* GRAY_COLOR */.eR, ";border-radius:5px;}}}.liked{.anticon{color:", config/* RED_COLOR */.Ss, ";}}@media (max-width: ", config/* SM_SIZE */.oe, "){padding-top:1rem;padding-bottom:1.5rem;margin-left:1rem;margin-right:1rem; .article{.moment-image-wrapper{.moment-image{border-radius:0.75rem;width:6rem;height:6rem;margin-right:0.5rem;;}.moment-more-image{width:6rem;height:6rem;border-radius:0.75rem; span{font-size:1.5rem;line-height:2rem;;}}}}}" + ( true ? "" : 0));
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./utils/html2textConverter.ts
var html2textConverter = __webpack_require__(9398);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./actions/user.ts
var actions_user = __webpack_require__(5145);
;// CONCATENATED MODULE: ./components/Cards/MomentCard/index.tsx













const MomentCard = ({
  revalidateMoments,
  moment,
  isLast
}) => {
  var _moment$country, _moment$images, _moment$images2, _moment$images3, _moment$comments, _moment$likedUser;

  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    user
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    0: userLike,
    1: setUserLike
  } = (0,external_react_.useState)(0);
  const {
    0: liked,
    1: setLiked
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (user && moment) {
      var _user$likeMoment;

      if ((_user$likeMoment = user.likeMoment) !== null && _user$likeMoment !== void 0 && _user$likeMoment.find(v => v.momentId === (moment === null || moment === void 0 ? void 0 : moment.id))) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }
  }, [user, moment]);
  const onClickLikeOrDisLike = (0,external_react_.useCallback)(value => {
    if (!user) {
      (0,config/* toastErrorMessage */.p4)("로그인이 필요합니다.");
      return;
    }

    external_axios_default().patch(`/moment/${value}/${moment === null || moment === void 0 ? void 0 : moment.id}`).then(() => {
      if (value === "like") {
        (0,config/* toastSuccessMessage */.bi)("좋아요!💓");
        setUserLike(prev => prev + 1);
      } else {
        (0,config/* toastSuccessMessage */.bi)("좋아요 취소💔");
        setUserLike(prev => prev - 1);
      }

      dispatch((0,actions_user/* getUserInfoAction */.pZ)());
    }).catch(error => {
      (0,config/* toastErrorMessage */.p4)(error);
      throw error;
    });
  }, [user, moment]);
  const onClickCountryTag = (0,external_react_.useCallback)(() => {
    router_default().push(`/country/${moment.code}`);
  }, []);
  const onClickTypeTag = (0,external_react_.useCallback)(() => {
    router_default().push(`/country/${moment.code}/?type=${moment.type}`);
  }, []);
  const onClickGotoPost = (0,external_react_.useCallback)(() => {
    router_default().push(`/country/${moment.code}/${moment.id}`);
  }, []);
  return (0,jsx_runtime_.jsxs)(MomentCardWrapper, {
    style: isLast ? {
      borderBottom: "none"
    } : {},
    children: [(0,jsx_runtime_.jsxs)("div", {
      className: "article-top",
      children: [jsx_runtime_.jsx(NameSpace/* default */.Z, {
        user: moment === null || moment === void 0 ? void 0 : moment.user,
        date: moment === null || moment === void 0 ? void 0 : moment.createdAt
      }), (0,jsx_runtime_.jsxs)("div", {
        className: "article-header",
        children: [jsx_runtime_.jsx("a", {
          onClick: onClickCountryTag,
          children: moment === null || moment === void 0 ? void 0 : (_moment$country = moment.country) === null || _moment$country === void 0 ? void 0 : _moment$country.name
        }), "/", jsx_runtime_.jsx("a", {
          onClick: onClickTypeTag,
          children: moment === null || moment === void 0 ? void 0 : moment.type
        })]
      })]
    }), (0,jsx_runtime_.jsxs)("div", {
      className: "article",
      children: [(moment === null || moment === void 0 ? void 0 : (_moment$images = moment.images) === null || _moment$images === void 0 ? void 0 : _moment$images.length) > 0 && (0,jsx_runtime_.jsxs)("div", {
        onClick: () => router_default().push(`/country/${moment === null || moment === void 0 ? void 0 : moment.code}/${moment === null || moment === void 0 ? void 0 : moment.id}`),
        className: "moment-image-wrapper",
        children: [moment === null || moment === void 0 ? void 0 : (_moment$images2 = moment.images) === null || _moment$images2 === void 0 ? void 0 : _moment$images2.slice(0, 2).map((v, i) => {
          return jsx_runtime_.jsx("img", {
            className: "moment-image",
            src: v.image_src
          }, i);
        }), (moment === null || moment === void 0 ? void 0 : (_moment$images3 = moment.images) === null || _moment$images3 === void 0 ? void 0 : _moment$images3.length) > 2 && jsx_runtime_.jsx("div", {
          className: "moment-more-image",
          children: jsx_runtime_.jsx(icons_.PlusCircleOutlined, {})
        })]
      }), jsx_runtime_.jsx("div", {
        onClick: () => router_default().push(`/country/${moment === null || moment === void 0 ? void 0 : moment.code}/${moment === null || moment === void 0 ? void 0 : moment.id}`),
        className: "content",
        children: (0,html2textConverter/* default */.Z)(moment === null || moment === void 0 ? void 0 : moment.content)
      }), (0,jsx_runtime_.jsxs)("ul", {
        className: "article-footer",
        children: [(0,jsx_runtime_.jsxs)("li", {
          onClick: onClickGotoPost,
          children: [jsx_runtime_.jsx(icons_.CommentOutlined, {}), jsx_runtime_.jsx("span", {
            className: "count",
            children: moment === null || moment === void 0 ? void 0 : (_moment$comments = moment.comments) === null || _moment$comments === void 0 ? void 0 : _moment$comments.length
          }), jsx_runtime_.jsx("span", {
            children: "\uB313\uAE00"
          })]
        }), (0,jsx_runtime_.jsxs)("li", {
          onClick: liked ? () => onClickLikeOrDisLike("dislike") : () => onClickLikeOrDisLike("like"),
          className: liked ? "liked" : "",
          children: [liked ? jsx_runtime_.jsx(icons_.HeartFilled, {}) : jsx_runtime_.jsx(icons_.HeartOutlined, {}), jsx_runtime_.jsx("span", {
            className: "count",
            children: (moment === null || moment === void 0 ? void 0 : (_moment$likedUser = moment.likedUser) === null || _moment$likedUser === void 0 ? void 0 : _moment$likedUser.length) + userLike
          }), jsx_runtime_.jsx("span", {
            children: "\uC88B\uC544\uC694"
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const Cards_MomentCard = (/*#__PURE__*/(0,external_react_.memo)(MomentCard));
;// CONCATENATED MODULE: ./sections/MainPage/MomentList/index.tsx









const MomentList = ({
  revalidateMoments,
  filter,
  moments,
  setSize,
  setFilter
}) => {
  var _moments$;

  const {
    0: isReachingEnd,
    1: setIsReachingEnd
  } = (0,external_react_.useState)(true);
  const ref = (0,external_react_.useRef)(null);
  const isVisible = (0,useOnScreen/* default */.Z)(ref);
  const isEmpty = (moments === null || moments === void 0 ? void 0 : (_moments$ = moments[0]) === null || _moments$ === void 0 ? void 0 : _moments$.length) === 0;
  (0,external_react_.useEffect)(() => {
    if (moments) {
      var _moments;

      setIsReachingEnd(((_moments = moments[moments.length - 1]) === null || _moments === void 0 ? void 0 : _moments.length) < 10);
    }
  }, [moments]);
  (0,external_react_.useEffect)(() => {
    if (isVisible && !isReachingEnd && !isEmpty) {
      setSize(prev => prev + 1).then(() => {});
    }
  }, [isVisible]);
  const momentsData = moments ? moments === null || moments === void 0 ? void 0 : moments.flat() : [];
  return jsx_runtime_.jsx(MomentListWrapper, {
    children: (0,jsx_runtime_.jsxs)("div", {
      className: "content-wrapper",
      children: [(0,jsx_runtime_.jsxs)("div", {
        className: "content-filter",
        children: [jsx_runtime_.jsx("button", {
          style: filter === "" ? {
            fontWeight: "bold",
            color: config/* BLUE_COLOR */.vX
          } : {},
          onClick: () => setFilter(""),
          children: "\uCD5C\uC2E0\uC21C"
        }), jsx_runtime_.jsx("button", {
          style: filter === "popular" ? {
            fontWeight: "bold",
            color: config/* BLUE_COLOR */.vX
          } : {},
          onClick: () => setFilter("popular"),
          children: "\uC778\uAE30\uC21C"
        }), jsx_runtime_.jsx("button", {
          style: filter === "view" ? {
            fontWeight: "bold",
            color: config/* BLUE_COLOR */.vX
          } : {},
          onClick: () => setFilter("view"),
          children: "\uC870\uD68C\uC21C"
        }), jsx_runtime_.jsx("button", {
          style: filter === "comment" ? {
            fontWeight: "bold",
            color: config/* BLUE_COLOR */.vX
          } : {},
          onClick: () => setFilter("comment"),
          children: "\uB313\uAE00\uB9CE\uC740\uC21C"
        })]
      }), momentsData.length > 0 ? momentsData === null || momentsData === void 0 ? void 0 : momentsData.map((v, i) => {
        if (momentsData.length - 1 === i) {
          return jsx_runtime_.jsx(Cards_MomentCard, {
            revalidateMoments: revalidateMoments,
            isLast: true,
            moment: v
          }, i);
        }

        return jsx_runtime_.jsx(Cards_MomentCard, {
          revalidateMoments: revalidateMoments,
          moment: v
        }, i);
      }) : (0,jsx_runtime_.jsxs)("div", {
        className: "no-post",
        children: [jsx_runtime_.jsx("img", {
          src: config/* NO_POST_URL */.xA
        }), jsx_runtime_.jsx("h4", {
          children: "\uC544\uC9C1 \uBAA8\uBA58\uD2B8\uAC00 \uC5C6\uC5B4\uC694\uD83D\uDE25"
        })]
      }), jsx_runtime_.jsx("div", {
        ref: ref
      })]
    })
  });
};

/* harmony default export */ const MainPage_MomentList = (/*#__PURE__*/(0,external_react_.memo)(MomentList));

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;