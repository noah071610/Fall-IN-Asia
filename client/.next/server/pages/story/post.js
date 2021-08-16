"use strict";
(() => {
var exports = {};
exports.id = 213;
exports.ids = [213];
exports.modules = {

/***/ 9200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryPostWrapper": () => (/* binding */ StoryPostWrapper),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4617);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_LGLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2584);
/* harmony import */ var _components_Editor_Editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2599);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3215);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Maps_CountrySelectMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6996);
/* harmony import */ var _components_AutoCompleteForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9709);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7749);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var utils_fetcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4608);
/* harmony import */ var _components_Editor_ImageDragger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8681);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8981);
/* harmony import */ var _components_ConfirmToastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6243);
/* harmony import */ var actions_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5145);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var configureStore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4603);



















const StoryPostWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div",  true ? {
  target: "e6sme1z0"
} : 0)(".title-input{padding:0.63rem 1rem;}.autoComplete-form{width:20%;}.editor-btn-wrapper{margin-top:1rem;", (0,config__WEBPACK_IMPORTED_MODULE_6__/* .FLEX_STYLE */ .Yk)("flex-end", "center"), " button{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1.5rem;padding-right:1.5rem;font-weight:700;margin-left:0.5rem;border-radius:0.75rem;:hover{--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);} ", (0,config__WEBPACK_IMPORTED_MODULE_6__/* .BORDER_THIN */ .h_)("border"), ";transition:0.3s all;}}.mapboxgl-ctrl-geocoder--button{border-radius:9999px;;}.dragger{height:40vh;}" + ( true ? "" : 0));

const post = () => {
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const {
    user
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.user);
  const {
    data: countries
  } = swr__WEBPACK_IMPORTED_MODULE_10___default()("/country", utils_fetcher__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, config__WEBPACK_IMPORTED_MODULE_6__/* .noRevalidate */ .nb);
  const {
    data: editStory
  } = swr__WEBPACK_IMPORTED_MODULE_10___default()(query !== null && query !== void 0 && query.storyId ? `/story/${query === null || query === void 0 ? void 0 : query.code}/${query === null || query === void 0 ? void 0 : query.storyId}` : null, utils_fetcher__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, config__WEBPACK_IMPORTED_MODULE_6__/* .noRevalidate */ .nb);
  const {
    0: selectedCountry,
    1: setCountry
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const [title, onChangeTitle, setTitle] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z)("");
  const {
    0: prevThumbnail,
    1: setPrevThumbnail
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const {
    0: fileList,
    1: setFileList
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: region,
    1: setRegion
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("이름모를 어딘가");
  const {
    0: upImg,
    1: setUpImg
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: content,
    1: setContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: marker,
    1: setMarker
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    latitude: 37.50529626491968,
    longitude: 126.98047832475031
  });
  const countryOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => countries === null || countries === void 0 ? void 0 : countries.map((v, i) => {
    return {
      value: v.name,
      code: v.code
    };
  }), [countries]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (editStory) {
      var _editStory$country;

      setRegion(editStory === null || editStory === void 0 ? void 0 : editStory.region);
      setTitle(editStory === null || editStory === void 0 ? void 0 : editStory.title);
      setContent(editStory === null || editStory === void 0 ? void 0 : editStory.content);
      setCountry(editStory === null || editStory === void 0 ? void 0 : (_editStory$country = editStory.country) === null || _editStory$country === void 0 ? void 0 : _editStory$country.name);
      setMarker({
        latitude: editStory === null || editStory === void 0 ? void 0 : editStory.lat,
        longitude: editStory === null || editStory === void 0 ? void 0 : editStory.lng
      });

      if (editStory !== null && editStory !== void 0 && editStory.thumbnail) {
        setFileList([{
          uid: `1`,
          name: `썸네일`,
          status: "done",
          url: editStory.thumbnail
        }]);
        setPrevThumbnail(editStory.thumbnail);
      }
    }
  }, [editStory]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!user) {
      next_router__WEBPACK_IMPORTED_MODULE_7___default().back();
    }

    if (editStory) {
      var _editStory$user;

      if ((user === null || user === void 0 ? void 0 : user.id) !== (editStory === null || editStory === void 0 ? void 0 : (_editStory$user = editStory.user) === null || _editStory$user === void 0 ? void 0 : _editStory$user.id)) {
        next_router__WEBPACK_IMPORTED_MODULE_7___default().back();
      }
    }
  }, [user, editStory]);
  const onClickSubmit = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (!title) {
      (0,config__WEBPACK_IMPORTED_MODULE_6__/* .toastErrorMessage */ .p4)("제목을 작성해주세요.");
      return;
    }

    if (!region) {
      (0,config__WEBPACK_IMPORTED_MODULE_6__/* .toastErrorMessage */ .p4)("지도에서 지역을 선택해주세요.");
      return;
    }

    if (!content) {
      (0,config__WEBPACK_IMPORTED_MODULE_6__/* .toastErrorMessage */ .p4)("내용을 작성해주세요.");
      return;
    }

    let form = new FormData();

    if (upImg) {
      form.append("image", upImg);
    }

    form.append("title", String(title));
    form.append("region", String(region));
    form.append("content", String(content));
    form.append("lat", String(marker.latitude));
    form.append("lng", String(marker.longitude));
    let pickCountry = countryOptions === null || countryOptions === void 0 ? void 0 : countryOptions.find(v => v.value === selectedCountry);

    if (pickCountry) {
      form.append("code", String(pickCountry.code));
    } else {
      (0,config__WEBPACK_IMPORTED_MODULE_6__/* .toastErrorMessage */ .p4)("유효하지 않은 국가입니다. 다시 확인해주세요.");
      return;
    }

    if (editStory) {
      form.append("storyId", String(editStory === null || editStory === void 0 ? void 0 : editStory.id));
    }

    axios__WEBPACK_IMPORTED_MODULE_16___default().post(`/story/${editStory ? "edit" : ""}`, form).then(res => {
      const {
        storyId
      } = res.data.data;
      next_router__WEBPACK_IMPORTED_MODULE_7___default().push(`/story/${pickCountry === null || pickCountry === void 0 ? void 0 : pickCountry.code}/${storyId}`);
      scrollTo({
        top: 0
      });
      setRegion("");
      setUpImg("");
      setTitle("");
      setContent("");
      setCountry("");

      if (editStory) {
        (0,config__WEBPACK_IMPORTED_MODULE_6__/* .toastSuccessMessage */ .bi)("연대기를 수정했습니다.");
      } else {
        (0,config__WEBPACK_IMPORTED_MODULE_6__/* .toastSuccessMessage */ .bi)("연대기를 성공적으로 작성했습니다.");
      }
    }).catch(error => {
      (0,config__WEBPACK_IMPORTED_MODULE_6__/* .toastErrorMessage */ .p4)(error);
      throw error;
    });
  }, [title, region, countryOptions, selectedCountry, content, upImg, marker, editStory]);
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StoryPostWrapper, {
    children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_LGLayout__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "main-title",
        children: "\uC81C\uBAA9"
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        value: title,
        onChange: onChangeTitle,
        placeholder: "\uC5F0\uB300\uAE30 \uC81C\uBAA9 \uC785\uB825",
        className: "basic-input title-input",
        type: "text"
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "main-title",
        children: "\uAD6D\uAC00 \uC9C0\uC815"
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AutoCompleteForm__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
        countryOptions: countryOptions,
        selectedCountry: selectedCountry,
        setCountry: setCountry
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "main-title",
        children: "\uC9C0\uC5ED \uC9C0\uC815"
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Maps_CountrySelectMap__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
        lat: editStory === null || editStory === void 0 ? void 0 : editStory.lat,
        lng: editStory === null || editStory === void 0 ? void 0 : editStory.lng,
        marker: marker,
        setMarker: setMarker,
        setRegion: setRegion
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "main-title",
        children: "\uC120\uD0DD \uC9C0\uC5ED"
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        children: region
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "main-title",
        children: "\uB0B4\uC6A9\uC791\uC131"
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Editor_Editor__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        prevContent: editStory === null || editStory === void 0 ? void 0 : editStory.content,
        setContent: setContent,
        isStory: true
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "main-title",
        children: editStory ? "썸네일 변경" : "썸네일 업로드"
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Editor_ImageDragger__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
        fileList: fileList,
        setFileList: setFileList,
        setPrevImageList: setPrevThumbnail,
        setUpImg: setUpImg,
        single: true
      }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "editor-btn-wrapper",
        children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          onClick: () => next_router__WEBPACK_IMPORTED_MODULE_7___default().back(),
          children: "\uB4A4\uB85C\uAC00\uAE30"
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          onClick: () => {
            if (marker.latitude === 37.50529626491968 && marker.longitude === 126.98047832475031) {
              (0,_components_ConfirmToastify__WEBPACK_IMPORTED_MODULE_14__/* .toastConfirmMessage */ .u)(onClickSubmit, "지역 좌표를 입력하지 않으셨어요, 이상태로 진행할까요? (현재 좌표 : 대한민국 서울 , 이름모를 어딘가)", "진행해주세요");
            } else {
              onClickSubmit();
            }
          },
          children: editStory ? "연대기 수정" : "연대기 업로드"
        })]
      })]
    })
  });
};

const getServerSideProps = configureStore__WEBPACK_IMPORTED_MODULE_17__/* .wrapper.getServerSideProps */ .Y.getServerSideProps(store => async ({
  req,
  query
}) => {
  const cookie = req ? req.headers.cookie : "";
  (axios__WEBPACK_IMPORTED_MODULE_16___default().defaults.headers.Cookie) = "";

  if (req && cookie) {
    (axios__WEBPACK_IMPORTED_MODULE_16___default().defaults.headers.Cookie) = cookie;
  }

  await store.dispatch((0,actions_user__WEBPACK_IMPORTED_MODULE_15__/* .getUserInfoAction */ .pZ)());
  return {
    props: {}
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (post);

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

/***/ 5508:
/***/ ((module) => {

module.exports = require("react-map-gl");

/***/ }),

/***/ 8798:
/***/ ((module) => {

module.exports = require("react-map-gl-geocoder");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [979,287,243,839,382,923], () => (__webpack_exec__(9200)));
module.exports = __webpack_exports__;

})();