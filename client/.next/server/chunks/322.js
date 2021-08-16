"use strict";
exports.id = 322;
exports.ids = [322];
exports.modules = {

/***/ 970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_CountryPreviewSlide)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(3215);
;// CONCATENATED MODULE: ./components/Cards/CountryImageCard.tsx







const CountryImageCardWrapper = base_default()("div",  true ? {
  target: "e8lij30"
} : 0)("position:relative;border-radius:0.75rem;width:100%;height:100%;cursor:pointer; background-position:center;background-repeat:no-repeat;background-size:100% 100%;", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";.overlay{border-radius:1rem;;}h3{z-index:10; font-size:1.125rem;line-height:1.75rem;font-weight:700;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));;}&:hover{.overlay{opacity:0.3;;}}@media (max-width: ", config/* SM_SIZE */.oe, "){border-radius:0.375rem; .overlay{border-radius:0.375rem;;}h3{font-size:0.875rem;line-height:1.25rem;;}}" + ( true ? "" : 0));

const CountryImageCard = ({
  country,
  isMain
}) => {
  const onClickArticleCountryImageCard = (0,external_react_.useCallback)(() => {
    if (isMain) {
      router_default().push(`/country/${country === null || country === void 0 ? void 0 : country.code}`);
    } else {
      router_default().push(`/story?country=${country === null || country === void 0 ? void 0 : country.code}`);
    }
  }, [isMain]);
  return (0,jsx_runtime_.jsxs)(CountryImageCardWrapper, {
    onClick: onClickArticleCountryImageCard,
    style: {
      backgroundImage: `url(${country.image_src})`
    },
    children: [jsx_runtime_.jsx("h3", {
      children: country.name
    }), jsx_runtime_.jsx("div", {
      className: "overlay"
    })]
  });
};

/* harmony default export */ const Cards_CountryImageCard = (CountryImageCard);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(2156);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./utils/fetcher.ts
var fetcher = __webpack_require__(4608);
// EXTERNAL MODULE: external "@emotion/react"
var external_emotion_react_ = __webpack_require__(7381);
// EXTERNAL MODULE: external "swiper/core"
var core_ = __webpack_require__(1596);
var core_default = /*#__PURE__*/__webpack_require__.n(core_);
;// CONCATENATED MODULE: ./components/CountryPreviewSlide.tsx









core_default().use([core_.Autoplay]);

const CountryPreviewSlideWrapper = isMain => /*#__PURE__*/(0,external_emotion_react_.css)("height:", isMain ? "100px" : "100px", ";@media (max-width: ", config/* SM_SIZE */.oe, "){height:4rem;;}" + ( true ? "" : 0),  true ? "" : 0);

const CountryPreviewSlide = ({
  slidesPerView,
  isMain
}) => {
  const {
    data: countries
  } = external_swr_default()(isMain ? "/country/popular" : "/country", fetcher/* default */.Z, config/* noRevalidate */.nb);
  const breakPoints = {
    1024: {
      slidesPerView
    },
    768: {
      slidesPerView: 5.2
    },
    480: {
      slidesPerView: 4.2,
      spaceBetween: 8
    },
    0: {
      slidesPerView: 3.6,
      spaceBetween: 4
    }
  };
  return jsx_runtime_.jsx(react_.Swiper, {
    autoplay: isMain ? {
      delay: 1000000
    } : {
      pauseOnMouseEnter: true,
      stopOnLastSlide: false,
      disableOnInteraction: false,
      delay: 2000
    },
    breakpoints: breakPoints,
    slidesPerView: slidesPerView,
    freeMode: true,
    spaceBetween: 16,
    css: CountryPreviewSlideWrapper(isMain),
    children: countries === null || countries === void 0 ? void 0 : countries.map((v, i) => {
      return jsx_runtime_.jsx(react_.SwiperSlide, {
        children: jsx_runtime_.jsx(Cards_CountryImageCard, {
          isMain: isMain,
          country: v
        })
      }, i);
    })
  });
};

/* harmony default export */ const components_CountryPreviewSlide = (CountryPreviewSlide);

/***/ })

};
;