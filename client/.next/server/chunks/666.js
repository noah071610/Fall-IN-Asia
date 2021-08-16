"use strict";
exports.id = 666;
exports.ids = [666];
exports.modules = {

/***/ 4666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_CountryAllview)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(3215);
;// CONCATENATED MODULE: ./components/Cards/CountryListCard.tsx







const CountryListCardWrapper = base_default()("div",  true ? {
  target: "e4zel2r0"
} : 0)("padding-top:0.5rem;padding-bottom:0.5rem;padding-right:2rem;padding-left:1rem;cursor:pointer;border-radius:0.375rem;width:auto;:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));}margin-bottom:0.5rem;margin-right:0.5rem; ", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";img{border-radius:0.375rem;width:4rem;height:4rem;;}.country-desc{font-size:0.75rem;line-height:1rem;margin-left:1rem; h4{padding-bottom:0.25rem;;}}@media (max-width: ", config/* MD_SIZE */.SO, "){padding-right:1rem; img{width:3rem;height:3rem;;}}@media (max-width: ", config/* SM_SIZE */.oe, "){margin:0px; .country-desc{margin-left:0.5rem;;}}" + ( true ? "" : 0));

const CountryListCard = ({
  country,
  isMain
}) => {
  var _country$moments, _country$stories;

  const onClickCountryListCard = (0,external_react_.useCallback)(() => {
    if (isMain) {
      router_default().push(`/country/${country === null || country === void 0 ? void 0 : country.code}`);
    } else {
      router_default().push(`/story?country=${country === null || country === void 0 ? void 0 : country.code}`);
    }
  }, []);
  return (0,jsx_runtime_.jsxs)(CountryListCardWrapper, {
    onClick: onClickCountryListCard,
    children: [jsx_runtime_.jsx("img", {
      src: country === null || country === void 0 ? void 0 : country.image_src,
      alt: "country_image"
    }), (0,jsx_runtime_.jsxs)("div", {
      className: "country-desc",
      children: [jsx_runtime_.jsx("h4", {
        children: country === null || country === void 0 ? void 0 : country.name
      }), (0,jsx_runtime_.jsxs)("span", {
        className: "count",
        children: ["\uD3EC\uC2A4\uD305: ", (country === null || country === void 0 ? void 0 : (_country$moments = country.moments) === null || _country$moments === void 0 ? void 0 : _country$moments.length) + (country === null || country === void 0 ? void 0 : (_country$stories = country.stories) === null || _country$stories === void 0 ? void 0 : _country$stories.length)]
      })]
    })]
  });
};

/* harmony default export */ const Cards_CountryListCard = (/*#__PURE__*/(0,external_react_.memo)(CountryListCard));
;// CONCATENATED MODULE: ./components/CountryAllview.tsx







const CountryAllviewWrapper = base_default()("div",  true ? {
  target: "e1fsla000"
} : 0)("width:100%;border-radius:1rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));padding:1rem;padding-bottom:2rem;margin-top:1rem; .country-card-wrapper{display:flex;flex-wrap:wrap;;}h3{font-size:0.875rem;line-height:1.25rem;font-weight:700; margin-bottom:1rem;margin-top:1.5rem;;}h3:first-of-type{margin-top:1rem;;}@media (max-width: ", config/* XLG_SIZE */.lv, "){padding-left:0px;padding-right:0px; h3{padding-left:1rem;;}}" + ( true ? "" : 0));

const CountryAllview = ({
  countries,
  isMain
}) => {
  return (0,jsx_runtime_.jsxs)(CountryAllviewWrapper, {
    style: isMain ? {} : {
      marginTop: 0,
      paddingTop: 0
    },
    children: [jsx_runtime_.jsx("h3", {
      children: "\uB3D9\uBD81\uC544\uC2DC\uC544"
    }), jsx_runtime_.jsx("div", {
      className: "country-card-wrapper",
      children: countries === null || countries === void 0 ? void 0 : countries.filter(v => v.continent === "동북아시아").map((v, i) => {
        return jsx_runtime_.jsx(Cards_CountryListCard, {
          isMain: isMain,
          country: v
        }, i);
      })
    }), jsx_runtime_.jsx("h3", {
      children: "\uB3D9\uB0A8\uC544\uC2DC\uC544"
    }), jsx_runtime_.jsx("div", {
      className: "country-card-wrapper",
      children: countries === null || countries === void 0 ? void 0 : countries.filter(v => v.continent === "동남아시아").map((v, i) => {
        return jsx_runtime_.jsx(Cards_CountryListCard, {
          isMain: isMain,
          country: v
        }, i);
      })
    }), jsx_runtime_.jsx("h3", {
      children: "\uB0A8\uC544\uC2DC\uC544"
    }), jsx_runtime_.jsx("div", {
      className: "country-card-wrapper",
      children: countries === null || countries === void 0 ? void 0 : countries.filter(v => v.continent === "남아시아").map((v, i) => {
        return jsx_runtime_.jsx(Cards_CountryListCard, {
          isMain: isMain,
          country: v
        }, i);
      })
    })]
  });
};

/* harmony default export */ const components_CountryAllview = (CountryAllview);

/***/ })

};
;