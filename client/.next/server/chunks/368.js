"use strict";
exports.id = 368;
exports.ids = [368];
exports.modules = {

/***/ 3368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainPage_MomentPostingForm)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: ./components/Editor/ImageDragger.tsx
var ImageDragger = __webpack_require__(8681);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(3215);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
;// CONCATENATED MODULE: ./sections/MainPage/MomentPostingForm/styles.tsx


const MomentPostingFormWrapper = base_default()("section",  true ? {
  target: "e1yja3xg0"
} : 0)("border-radius:1rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));padding:0.5rem; .selector-wrapper{", (0,config/* FLEX_STYLE */.Yk)("flex-start", "center"), ";margin-bottom:1rem;}.autoComplete-form{margin-right:1rem;width:200px;}.country-selector{margin-right:1rem;}.posting-form-preview{border-radius:1rem;cursor:pointer;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem; ", (0,config/* FLEX_STYLE */.Yk)("space-between", "center"), " transition:0.3s all;.anticon{font-size:1.25rem;line-height:1.75rem;padding:0.5rem; transition:0.3s all;}&:hover{background:", config/* GRAY_COLOR */.eR, ";.anticon{transform:scale(1.15);}}}.title-wrapper{margin:1rem;border-radius:1rem; ", (0,config/* BORDER_THIN */.h_)("border"), ";input{padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem;border-radius:1rem;;}}.posting-editor{padding:1rem;.editor-btn-wrapper{margin-top:1rem;", (0,config/* FLEX_STYLE */.Yk)("flex-end", "center"), " button{padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1.25rem;padding-right:1.25rem;font-weight:700;border-radius:0.75rem;:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));};}}}@media (max-width: ", config/* SM_SIZE */.oe, "){.posting-editor{padding:0.5rem;;}}" + ( true ? "" : 0));
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./utils/fetcher.ts
var fetcher = __webpack_require__(4608);
// EXTERNAL MODULE: ./components/AutoCompleteForm.tsx
var AutoCompleteForm = __webpack_require__(9709);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./slices/main.ts + 1 modules
var main = __webpack_require__(3640);
;// CONCATENATED MODULE: ./sections/MainPage/MomentPostingForm/index.tsx

















const {
  Option
} = external_antd_.Select;
const EditorWithoutImage = dynamic_default()(() => __webpack_require__.e(/* import() */ 297).then(__webpack_require__.bind(__webpack_require__, 5821)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5821)],
    modules: ["..\\sections\\MainPage\\MomentPostingForm\\index.tsx -> " + "@components/Editor/EditorWithoutImage"]
  }
});

const MomentPostingForm = ({
  editMoment
}) => {
  const {
    query
  } = (0,router_.useRouter)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    data: countries
  } = external_swr_default()("/country", fetcher/* default */.Z, config/* noRevalidate */.nb);
  const {
    0: upImg,
    1: setUpImg
  } = (0,external_react_.useState)([]);
  const {
    0: content,
    1: setContent
  } = (0,external_react_.useState)("");
  const {
    0: type,
    1: setType
  } = (0,external_react_.useState)("키워드 선택");
  const {
    0: selectedCountry,
    1: setCountry
  } = (0,external_react_.useState)("");
  const {
    0: prevImageList,
    1: setPrevImageList
  } = (0,external_react_.useState)([]);
  const {
    0: fileList,
    1: setFileList
  } = (0,external_react_.useState)([]);
  const {
    0: onPostingForm,
    1: setOnPostingForm
  } = (0,external_react_.useState)(false);
  const {
    user
  } = (0,external_react_redux_.useSelector)(state => state.user);
  (0,external_react_.useEffect)(() => {
    if (editMoment) {
      var _editMoment$country;

      setContent(editMoment === null || editMoment === void 0 ? void 0 : editMoment.content);
      setType(editMoment === null || editMoment === void 0 ? void 0 : editMoment.type);
      setCountry(editMoment === null || editMoment === void 0 ? void 0 : (_editMoment$country = editMoment.country) === null || _editMoment$country === void 0 ? void 0 : _editMoment$country.name);

      if ((editMoment === null || editMoment === void 0 ? void 0 : editMoment.images.length) > 0) {
        const editMomentImageList = editMoment.images.map((v, i) => {
          return {
            uid: `${i + 1}`,
            name: `이미지 ${i + 1}번`,
            status: "done",
            url: v.image_src
          };
        });
        setFileList(editMomentImageList);
        setPrevImageList(editMoment === null || editMoment === void 0 ? void 0 : editMoment.images.map(v => v.image_src));
      }
    }
  }, [editMoment]);
  const countryOptions = (0,external_react_.useMemo)(() => countries === null || countries === void 0 ? void 0 : countries.map((v, i) => {
    return {
      value: v.name,
      code: v.code
    };
  }), [countries]);
  (0,external_react_.useEffect)(() => {
    if (query !== null && query !== void 0 && query.code && countryOptions) {
      let pickCountry = countryOptions === null || countryOptions === void 0 ? void 0 : countryOptions.find(v => v.code === (query === null || query === void 0 ? void 0 : query.code));
      setCountry(pickCountry === null || pickCountry === void 0 ? void 0 : pickCountry.value);
    }
  }, [query, countryOptions]);
  const onClickSubmit = (0,external_react_.useCallback)(() => {
    if (type === "키워드 선택") {
      (0,config/* toastErrorMessage */.p4)("키워드를 선택해주세요.");
      return;
    }

    if (!content) {
      (0,config/* toastErrorMessage */.p4)("내용을 작성해주세요.");
      return;
    }

    let form = new FormData();
    upImg === null || upImg === void 0 ? void 0 : upImg.forEach(v => {
      form.append("image", v);
    });
    prevImageList === null || prevImageList === void 0 ? void 0 : prevImageList.forEach(v => {
      form.append("prevImage", v);
    });
    form.append("content", String(content));
    form.append("type", String(type));
    let pickCountry = countryOptions === null || countryOptions === void 0 ? void 0 : countryOptions.find(v => v.value === selectedCountry);

    if (pickCountry) {
      form.append("code", String(pickCountry.code));
    } else {
      (0,config/* toastErrorMessage */.p4)("유효하지 않은 국가입니다. 다시 확인해주세요.");
      return;
    }

    if (editMoment) {
      form.append("momentId", String(editMoment === null || editMoment === void 0 ? void 0 : editMoment.id));
    }

    external_axios_default().post(`/moment/${editMoment ? "edit" : ""}`, form).then(res => {
      const {
        momentId
      } = res.data.data;
      router_default().push(`/country/${pickCountry === null || pickCountry === void 0 ? void 0 : pickCountry.code}/${momentId}`);
      scrollTo({
        top: 0
      });
      setContent("");
      setUpImg([]);
      setType("키워드 선택");
      setOnPostingForm(false);

      if (editMoment) {
        (0,config/* toastSuccessMessage */.bi)("모멘트를 수정했습니다.");
      } else {
        (0,config/* toastSuccessMessage */.bi)("모멘트를 성공적으로 작성했습니다.");
      }
    }).catch(error => {
      (0,config/* toastErrorMessage */.p4)(error);
      throw error;
    });
  }, [upImg, content, type, selectedCountry, editMoment, prevImageList]);
  const onClickOpenPostingForm = (0,external_react_.useCallback)(() => {
    if (!user) {
      (0,config/* toastErrorMessage */.p4)("로그인이 필요합니다.");
      dispatch(main/* mainSlice.actions.toggleLoginModal */.P.actions.toggleLoginModal());
      return;
    }

    setOnPostingForm(true);
  }, [user]);
  const onClickPostingCancle = (0,external_react_.useCallback)(() => {
    if (editMoment) {
      router_default().back();
    } else {
      setOnPostingForm(false);
    }
  }, [editMoment]);
  const handleTypeChange = (0,external_react_.useCallback)(value => {
    setType(value);
  }, []);
  return (0,jsx_runtime_.jsxs)(MomentPostingFormWrapper, {
    children: [!onPostingForm && !editMoment && (0,jsx_runtime_.jsxs)("div", {
      onClick: onClickOpenPostingForm,
      className: "posting-form-preview",
      children: [jsx_runtime_.jsx("span", {
        className: "placeholder",
        children: "\uB2F9\uC2E0\uC758 \uC5EC\uD589\uC740 \uC5B4\uB560\uB098\uC694?"
      }), jsx_runtime_.jsx("a", {
        children: jsx_runtime_.jsx(icons_.EditOutlined, {})
      })]
    }), (onPostingForm || editMoment) && jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: (0,jsx_runtime_.jsxs)("div", {
        className: "posting-editor",
        children: [(0,jsx_runtime_.jsxs)("div", {
          className: "selector-wrapper",
          children: [jsx_runtime_.jsx(AutoCompleteForm/* default */.Z, {
            countryOptions: countryOptions,
            selectedCountry: selectedCountry,
            setCountry: setCountry,
            disabled: editMoment ? true : false
          }), (0,jsx_runtime_.jsxs)(external_antd_.Select, {
            className: "type-selector",
            value: type,
            onChange: handleTypeChange,
            style: {
              width: "180px"
            },
            children: [jsx_runtime_.jsx(Option, {
              value: "\uD55C\uC778 \uCEE4\uBBA4\uB2C8\uD2F0",
              children: "\uD55C\uC778 \uCEE4\uBBA4\uB2C8\uD2F0"
            }), jsx_runtime_.jsx(Option, {
              value: "\uC5EC\uD589\uC815\uBCF4 \uACF5\uC720",
              children: "\uC5EC\uD589\uC815\uBCF4 \uACF5\uC720"
            }), jsx_runtime_.jsx(Option, {
              value: "\uC0AC\uAE30 \uACBD\uBCF4",
              children: "\uC0AC\uAE30 \uACBD\uBCF4"
            }), jsx_runtime_.jsx(Option, {
              value: "\uB3D9\uD589\uC790 \uBAA8\uC9D1",
              children: "\uB3D9\uD589\uC790 \uBAA8\uC9D1"
            })]
          })]
        }), jsx_runtime_.jsx(EditorWithoutImage, {
          content: content,
          setContent: setContent
        }), " ", jsx_runtime_.jsx(ImageDragger/* default */.Z, {
          fileList: fileList,
          setUpImg: setUpImg,
          setFileList: setFileList,
          setPrevImageList: setPrevImageList
        }), (0,jsx_runtime_.jsxs)("div", {
          className: "editor-btn-wrapper",
          children: [jsx_runtime_.jsx("button", {
            onClick: onClickSubmit,
            children: "\uBAA8\uBA58\uD2B8 \uC62C\uB9AC\uAE30"
          }), jsx_runtime_.jsx("button", {
            onClick: onClickPostingCancle,
            children: "\uCDE8\uC18C"
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const MainPage_MomentPostingForm = (/*#__PURE__*/(0,external_react_.memo)(MomentPostingForm));

/***/ })

};
;