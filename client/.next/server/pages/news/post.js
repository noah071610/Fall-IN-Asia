"use strict";
(() => {
var exports = {};
exports.id = 821;
exports.ids = [821];
exports.modules = {

/***/ 7896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlePostWrapper": () => (/* binding */ ArticlePostWrapper),
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var configureStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4603);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var actions_user__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5145);




















const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_15__.Select;
const ArticlePostWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div",  true ? {
  target: "e67dsld0"
} : 0)(".title-input{padding:0.63rem 1rem;}.option-input{padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;width:50%;;}.autoComplete-form{width:20%;}.editor-btn-wrapper{margin-top:1rem;", (0,config__WEBPACK_IMPORTED_MODULE_6__/* .FLEX_STYLE */ .Yk)("flex-end", "center"), " button{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1.5rem;padding-right:1.5rem;font-weight:700;margin-left:0.5rem;border-radius:0.75rem;:hover{--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);} ", (0,config__WEBPACK_IMPORTED_MODULE_6__/* .BORDER_THIN */ .h_)("border"), ";transition:0.3s all;}}.mapboxgl-ctrl-geocoder--button{border-radius:9999px;;}.dragger{height:40vh;}" + ( true ? "" : 0));

const post = () => {
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const {
    user
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.user);
  const {
    data: editArticle
  } = swr__WEBPACK_IMPORTED_MODULE_10___default()(query !== null && query !== void 0 && query.articleId ? `/article/${query === null || query === void 0 ? void 0 : query.articleId}` : null, utils_fetcher__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, config__WEBPACK_IMPORTED_MODULE_6__/* .noRevalidate */ .nb);
  const {
    data: countries
  } = swr__WEBPACK_IMPORTED_MODULE_10___default()("/country", utils_fetcher__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, config__WEBPACK_IMPORTED_MODULE_6__/* .noRevalidate */ .nb);
  const {
    0: type,
    1: setType
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("타입 선택");
  const {
    0: selectedCountry,
    1: setCountry
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const [title, onChangeTitle, setTitle] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z)("");
  const [label, onChangeLabel, setLabel] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z)("");
  const {
    0: prevThumbnail,
    1: setPrevThumbnail
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const {
    0: fileList,
    1: setFileList
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [ranking, onChangeRanking, setRanking] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z)("");
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
    0: editPostId,
    1: setEditPostId
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
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
    if (editArticle) {
      var _editArticle$country;

      setRegion(editArticle === null || editArticle === void 0 ? void 0 : editArticle.region);
      setTitle(editArticle === null || editArticle === void 0 ? void 0 : editArticle.title);
      setType(editArticle === null || editArticle === void 0 ? void 0 : editArticle.type);
      setContent(editArticle === null || editArticle === void 0 ? void 0 : editArticle.content);
      setCountry(editArticle === null || editArticle === void 0 ? void 0 : (_editArticle$country = editArticle.country) === null || _editArticle$country === void 0 ? void 0 : _editArticle$country.name);
      setEditPostId(editArticle === null || editArticle === void 0 ? void 0 : editArticle.id);
      setMarker({
        latitude: editArticle === null || editArticle === void 0 ? void 0 : editArticle.lat,
        longitude: editArticle === null || editArticle === void 0 ? void 0 : editArticle.lng
      });
      setLabel((editArticle === null || editArticle === void 0 ? void 0 : editArticle.label) || "");
      setRanking((editArticle === null || editArticle === void 0 ? void 0 : editArticle.ranking) || "");

      if (editArticle !== null && editArticle !== void 0 && editArticle.thumbnail) {
        setFileList([{
          uid: `1`,
          name: `썸네일`,
          status: "done",
          url: editArticle.thumbnail
        }]);
        setPrevThumbnail(editArticle.thumbnail);
      }
    }
  }, [editArticle]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!user) {
      next_router__WEBPACK_IMPORTED_MODULE_7___default().back();
    }

    if (editArticle) {
      var _editArticle$user;

      if ((user === null || user === void 0 ? void 0 : user.id) !== (editArticle === null || editArticle === void 0 ? void 0 : (_editArticle$user = editArticle.user) === null || _editArticle$user === void 0 ? void 0 : _editArticle$user.id)) {
        next_router__WEBPACK_IMPORTED_MODULE_7___default().back();
      }
    }
  }, [user, editArticle]);
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

    if (type === "타입 선택") {
      (0,config__WEBPACK_IMPORTED_MODULE_6__/* .toastErrorMessage */ .p4)("타입을 선택해주세요.");
      return;
    }

    let form = new FormData();

    if (upImg) {
      form.append("image", upImg);
    }

    if (label) {
      form.append("label", String(label));
    }

    if (ranking) {
      form.append("ranking", String(ranking));
    }

    form.append("title", String(title));
    form.append("region", String(region));
    form.append("type", String(type));
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

    if (editArticle) {
      form.append("articleId", String(editArticle === null || editArticle === void 0 ? void 0 : editArticle.id));
    }

    axios__WEBPACK_IMPORTED_MODULE_17___default().post(`/article/${editArticle ? "edit" : ""}`, form).then(res => {
      const {
        articleId
      } = res.data.data;
      next_router__WEBPACK_IMPORTED_MODULE_7___default().push(`/news/${articleId}`);
      setRegion("");
      setUpImg("");
      setTitle("");
      setType("타입 선택");
      setContent("");
      setCountry("");
      setLabel("");
      setRanking("");

      if (editArticle) {
        (0,config__WEBPACK_IMPORTED_MODULE_6__/* .toastSuccessMessage */ .bi)("기사를 수정했습니다.");
      } else {
        (0,config__WEBPACK_IMPORTED_MODULE_6__/* .toastSuccessMessage */ .bi)("기사를 성공적으로 작성했습니다.");
      }
    }).catch(error => {
      (0,config__WEBPACK_IMPORTED_MODULE_6__/* .toastErrorMessage */ .p4)(error);
      throw error;
    });
  }, [title, region, countryOptions, selectedCountry, content, upImg, marker, editArticle, type, label, ranking]);
  const handleTypeChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(value => {
    setType(value);
  }, []);
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArticlePostWrapper, {
    children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_LGLayout__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "main-title",
        children: "\uC81C\uBAA9"
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        value: title,
        onChange: onChangeTitle,
        placeholder: "\uAE30\uC0AC \uC81C\uBAA9 \uC785\uB825",
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
        children: "\uB77C\uBCA8 \uC124\uC815(\uC120\uD0DD\uC0AC\uD56D)"
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        value: label,
        onChange: onChangeLabel,
        placeholder: "\uB77C\uBCA8 \uB0B4\uC6A9 \uC785\uB825",
        className: "basic-input option-input",
        type: "text"
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "main-title",
        children: "\uC21C\uC704 \uC124\uC815(\uC120\uD0DD\uC0AC\uD56D)"
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        value: ranking,
        onChange: onChangeRanking,
        placeholder: "\uC22B\uC790\uB97C \uC785\uB825\uD558\uC138\uC694",
        className: "basic-input option-input",
        type: "number"
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "main-title",
        children: "\uD0C0\uC785 \uC9C0\uC815"
      }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_15__.Select, {
        className: "type-selector",
        value: type,
        onChange: handleTypeChange,
        style: {
          width: "180px"
        },
        children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
          value: "\uAD00\uAD11\uB274\uC2A4",
          children: "\uAD00\uAD11\uB274\uC2A4"
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
          value: "\uD2B8\uB80C\uB4DC",
          children: "\uD2B8\uB80C\uB4DC"
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
          value: "\uC1FC\uD551",
          children: "\uC1FC\uD551"
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
          value: "\uC774\uC0C9\uCCB4\uD5D8",
          children: "\uC774\uC0C9\uCCB4\uD5D8"
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
          value: "\uC774\uBCA4\uD2B8",
          children: "\uC774\uBCA4\uD2B8"
        })]
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "main-title",
        children: "\uC9C0\uC5ED \uC9C0\uC815"
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Maps_CountrySelectMap__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
        lat: editArticle === null || editArticle === void 0 ? void 0 : editArticle.lat,
        lng: editArticle === null || editArticle === void 0 ? void 0 : editArticle.lng,
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
        prevContent: editArticle === null || editArticle === void 0 ? void 0 : editArticle.content,
        setContent: setContent,
        isStory: true
      }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "main-title",
        children: editPostId ? "썸네일 변경 (미선택시 기존 썸네일 사용)" : "썸네일 업로드"
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
          children: editPostId ? "기사 수정" : "기사 업로드"
        })]
      })]
    })
  });
};

const getServerSideProps = configureStore__WEBPACK_IMPORTED_MODULE_16__/* .wrapper.getServerSideProps */ .Y.getServerSideProps(store => async ({
  req,
  query
}) => {
  const cookie = req ? req.headers.cookie : "";
  (axios__WEBPACK_IMPORTED_MODULE_17___default().defaults.headers.Cookie) = "";

  if (req && cookie) {
    (axios__WEBPACK_IMPORTED_MODULE_17___default().defaults.headers.Cookie) = cookie;
  }

  await store.dispatch((0,actions_user__WEBPACK_IMPORTED_MODULE_18__/* .getUserInfoAction */ .pZ)());
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
var __webpack_exports__ = __webpack_require__.X(0, [979,287,243,839,382,923], () => (__webpack_exec__(7896)));
module.exports = __webpack_exports__;

})();