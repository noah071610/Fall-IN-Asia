"use strict";
(() => {
var exports = {};
exports.id = 893;
exports.ids = [893];
exports.modules = {

/***/ 3552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useToggle(initialValue) {
  const {
    0: Value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  const handler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setValue(prev => !prev);
  }, []);
  return [Value, handler, setValue];
}

/***/ }),

/***/ 5545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _userId_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(4554);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./configureStore.ts + 1 modules
var configureStore = __webpack_require__(4603);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./actions/user.ts
var actions_user = __webpack_require__(5145);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "@emotion/styled/base"
var base_ = __webpack_require__(4617);
var base_default = /*#__PURE__*/__webpack_require__.n(base_);
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(3215);
;// CONCATENATED MODULE: ./sections/UserPage/UserInfoAside/styles.tsx


const UserInfoAsideWrapper = base_default()("aside",  true ? {
  target: "e4kanor0"
} : 0)(".user-info-aside{width:100%;padding-top:2rem;padding-bottom:2rem;padding-left:2.5rem;padding-right:2.5rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));border-radius:1rem; .icon-wrapper{width:100%;margin-bottom:0.5rem; ", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";.icon{width:66.666667%;position:relative;border-radius:9999px;cursor:pointer; img{width:100%;height:100%;border-radius:9999px;;}.icon-changer{width:100%;height:100%;position:absolute;top:0px;left:0px;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));cursor:pointer;opacity:0;border-radius:9999px;font-size:2.25rem;line-height:2.5rem; ", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";transition:0.3s all;}&:hover{.icon-changer{opacity:1;background:", (0,config/* RGB_BLACK */.Xk)(0.3), ";}}}}.user-profile-wrapper{margin-top:0.75rem; .user-name{font-size:1.5rem;line-height:2rem;font-weight:700;margin-bottom:0.5rem; ", (0,config/* FLEX_STYLE */.Yk)("space-between", "center"), ";}.user-introduce{line-height:1.5rem;;}}h3{font-size:0.875rem;line-height:1.25rem;font-weight:700;margin-bottom:0.5rem;;}.follow-wrapper{margin-bottom:1rem; .follow-icon-wrapper{margin-bottom:0.5rem;margin-top:0.75rem; img{width:1.5rem;height:1.5rem;border-radius:9999px;border-style:solid;border-width:1px;--tw-border-opacity:1;border-color:rgba(243, 244, 246, var(--tw-border-opacity));margin-right:0.5rem;;}}span{line-height:1.25rem;;}}.post-len{margin-bottom:1rem;;}.btn-wrapper{margin-top:2rem; button{width:100%;margin-top:0.5rem;padding-top:0.75rem;padding-bottom:0.75rem;border-radius:0.375rem;:hover{--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}font-weight:700; transition:0.3s all;", (0,config/* BORDER_THIN */.h_)("border"), ";}}.edit-input{padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;border-radius:0.375rem;:hover{--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}:focus{--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);} ", (0,config/* BORDER_THIN */.h_)("border"), ";}.edit-textarea{font-size:0.75rem;line-height:1rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;border-radius:0.375rem;:hover{--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}:focus{--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);} ", (0,config/* BORDER_THIN */.h_)("border"), ";}.edit-title{margin-top:0.75rem;margin-bottom:0.75rem;font-weight:700;;}}@media (max-width: ", config/* MD_SIZE */.SO, "){margin-bottom:2rem; .icon-profile-wrapper{", (0,config/* GRID_STYLE */.U6)("2rem", "1fr 1.5fr"), ";.user-profile-wrapper,.icon-wrapper{margin:0px; .icon{width:100%;;}}}.follow-manage-wrapper{", (0,config/* GRID_STYLE */.U6)("2rem", "1fr 1fr"), ";.edit-title:first-of-type{margin-top:0px;;}.btn-wrapper{margin-top:0px; button:first-of-type{margin:0px;;}}}}@media (max-width: ", config/* SM_SIZE */.oe, "){.user-info-aside{padding-left:1.5rem;padding-right:1.5rem;;}.icon-profile-wrapper{display:block;.icon-wrapper{.icon{width:50%;}}.user-name{margin-top:0.75rem;margin-bottom:1.25rem;text-align:center;width:100%;;}}.follow-manage-wrapper{display:block;;.edit-title:first-of-type{margin-top:0.75rem;;}.btn-wrapper{margin-top:1rem; button:first-of-type{margin-top:0.5rem;;}}}}" + ( true ? "" : 0));
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: ./utils/fetcher.ts
var fetcher = __webpack_require__(4608);
// EXTERNAL MODULE: ./hooks/useToggle.ts
var useToggle = __webpack_require__(3552);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./slices/user.ts
var slices_user = __webpack_require__(1322);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
;// CONCATENATED MODULE: external "react-image-crop"
const external_react_image_crop_namespaceObject = require("react-image-crop");
var external_react_image_crop_default = /*#__PURE__*/__webpack_require__.n(external_react_image_crop_namespaceObject);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(7381);
;// CONCATENATED MODULE: ./components/Modals/IconCropperModal/styles.tsx


const IconCropperModalWrapper = upImg => /*#__PURE__*/(0,react_.css)("position:fixed;top:50%;left:50%;padding:2rem;--tw-shadow:0px 0px 15px rgba(0, 0, 0, 0.3);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));border-radius:1rem; width:700px;z-index:90;", upImg && (0,config/* GRID_STYLE */.U6)("2rem", "repeat(2,1fr)"), ";transform:translate(-50%, -60%);.dragger{width:100%;border-radius:0.75rem;;height:60vh;border:1px solid ", (0,config/* RGB_BLACK */.Xk)(0.08), ";&:hover{border:1px solid ", (0,config/* RGB_BLACK */.Xk)(0.08), "!important;}img{width:5rem;}}.image-preview{position:relative;", (0,config/* FLEX_STYLE */.Yk)("", "flex-start", "column"), ";.crop-image,.no-image{border-radius:0.75rem;;}.name-space-preview{width:100%;height:100%;display:flex;justify-content:center; .icon{width:6rem;height:6rem;border-radius:9999px;;}.cropped-image{width:100%;height:100%;border-radius:9999px;;}}.btn-wrapper{width:100%; ", (0,config/* GRID_STYLE */.U6)(".5rem", "1fr 1fr"), ";button{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));font-weight:700;padding-top:0.75rem;padding-bottom:0.75rem;--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));border-radius:0.75rem;:hover{--tw-bg-opacity:1;background-color:rgba(156, 163, 175, var(--tw-bg-opacity));};}.btn-point{--tw-bg-opacity:1;background-color:rgba(96, 165, 250, var(--tw-bg-opacity));:hover{--tw-bg-opacity:1;background-color:rgba(59, 130, 246, var(--tw-bg-opacity));};}}}@media (max-width: 700px){width:95%;padding:1rem; display:block;.crop-image-wrapper{", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";.crop-image{div,img{max-height:250px;}}}.image-preview{", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";.name-space-preview{margin-top:1rem;margin-bottom:1rem; .icon{width:4rem;height:4rem;;}}}}" + ( true ? "" : 0),  true ? "" : 0);
// EXTERNAL MODULE: ./components/NameSpace.tsx + 1 modules
var NameSpace = __webpack_require__(3265);
;// CONCATENATED MODULE: ./components/Modals/IconCropperModal/index.tsx












const {
  Dragger
} = external_antd_.Upload;

const IconCropperModalper = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: blob,
    1: setBlob
  } = (0,external_react_.useState)(null);
  const {
    0: upImg,
    1: setUpImg
  } = (0,external_react_.useState)(null);
  const imgRef = (0,external_react_.useRef)(null);
  const previewCanvasRef = (0,external_react_.useRef)(null);
  const {
    0: completedCrop,
    1: setCompletedCrop
  } = (0,external_react_.useState)(null);
  const {
    0: crop,
    1: setCrop
  } = (0,external_react_.useState)({
    unit: "%",
    width: 100,
    height: 100,
    aspect: 1 / 1
  });
  const {
    user
  } = (0,external_react_redux_.useSelector)(state => state.user);
  (0,external_react_.useEffect)(() => {
    if (!user) {
      router_default().back();
    }
  }, []);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const onLoad = (0,external_react_.useCallback)(img => {
    imgRef.current = img;
  }, []);
  (0,external_react_.useEffect)(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
    new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          console.error("Canvas is empty");
          return;
        }

        resolve(setBlob(blob));
      }, "image/jpeg");
    });
    [completedCrop];
  });

  const handleChange = info => {
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, imageUrl => setUpImg(imageUrl));
    }
  };

  const onClickChangeIcon = (0,external_react_.useCallback)(() => {
    if (!blob) {
      (0,config/* toastErrorMessage */.p4)("이미지를 찾을수없습니다. 다시 시도해주세요.");
      return;
    }

    let form = new FormData();
    form.append("image", blob);
    dispatch((0,actions_user/* changeUserIconAction */.Df)(form));
  }, [blob]);
  return (0,jsx_runtime_.jsxs)("div", {
    css: IconCropperModalWrapper(upImg),
    children: [upImg ? jsx_runtime_.jsx("div", {
      className: "crop-image-wrapper",
      children: jsx_runtime_.jsx((external_react_image_crop_default()), {
        className: "crop-image",
        src: upImg,
        onImageLoaded: onLoad,
        crop: crop,
        onChange: c => setCrop(c),
        onComplete: c => setCompletedCrop(c)
      })
    }) : jsx_runtime_.jsx(Dragger, {
      showUploadList: false,
      multiple: false,
      className: "dragger",
      onChange: handleChange,
      children: (0,jsx_runtime_.jsxs)("div", {
        className: "dragger-inside-image",
        children: [jsx_runtime_.jsx("img", {
          src: "https://user-images.githubusercontent.com/74864925/124657825-f38a5500-dedd-11eb-8de9-6ed70a512f24.png",
          alt: "drag"
        }), jsx_runtime_.jsx("p", {
          children: "\uC774\uBBF8\uC9C0 \uB4DC\uB798\uADF8 \uB610\uB294 \uC120\uD0DD"
        })]
      })
    }), upImg && (0,jsx_runtime_.jsxs)("div", {
      className: "image-preview",
      children: [(0,jsx_runtime_.jsxs)(NameSpace/* NameSpaceWrapper */.W, {
        className: "name-space-preview",
        children: [jsx_runtime_.jsx("div", {
          className: "icon",
          children: jsx_runtime_.jsx("canvas", {
            className: "cropped-image",
            ref: previewCanvasRef
          })
        }), (0,jsx_runtime_.jsxs)("div", {
          className: "user-info",
          children: [jsx_runtime_.jsx("span", {
            className: "name",
            children: user === null || user === void 0 ? void 0 : user.name
          }), jsx_runtime_.jsx("span", {
            className: "date",
            children: "2021/07/29"
          })]
        })]
      }), (0,jsx_runtime_.jsxs)("div", {
        className: "btn-wrapper",
        children: [jsx_runtime_.jsx("button", {
          onClick: () => setUpImg(null),
          children: "\uB2E4\uC2DC \uC120\uD0DD"
        }), jsx_runtime_.jsx("button", {
          className: "btn-point",
          onClick: onClickChangeIcon,
          children: "\uC774\uBBF8\uC9C0 \uC62C\uB9AC\uAE30"
        })]
      })]
    })]
  });
};

/* harmony default export */ const IconCropperModal = (/*#__PURE__*/(0,external_react_.memo)(IconCropperModalper));
// EXTERNAL MODULE: ./hooks/useInput.ts
var useInput = __webpack_require__(8981);
// EXTERNAL MODULE: ./components/Modals/Overlay.tsx
var Overlay = __webpack_require__(2209);
// EXTERNAL MODULE: ./slices/main.ts + 1 modules
var main = __webpack_require__(3640);
// EXTERNAL MODULE: ./components/ConfirmToastify.tsx
var ConfirmToastify = __webpack_require__(6243);
// EXTERNAL MODULE: external "react-textarea-autosize"
var external_react_textarea_autosize_ = __webpack_require__(3556);
var external_react_textarea_autosize_default = /*#__PURE__*/__webpack_require__.n(external_react_textarea_autosize_);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
;// CONCATENATED MODULE: ./components/Modals/WithdrawalModal/styles.tsx


const WithdrawalModalWrapper = base_default()("div",  true ? {
  target: "e1lh8m3o0"
} : 0)("h3{font-size:0.875rem;line-height:1.25rem;font-weight:700;margin-bottom:1rem;margin-top:1.5rem;;}h3:first-of-type{margin-top:0px;;}position:fixed;top:50%;left:50%;padding-top:2rem;padding-bottom:2rem;padding-left:3rem;padding-right:3rem;--tw-shadow:0px 0px 15px rgba(0, 0, 0, 0.3);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));border-radius:1rem; z-index:90;width:500px;transform:translate(-50%, -50%);.password-input{padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;:hover{--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}:focus{--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);} border-radius:10px;", (0,config/* BORDER_THIN */.h_)("border"), ";}p{margin-top:1rem;}.btn-wrapper{width:100%;margin-top:2rem; ", (0,config/* GRID_STYLE */.U6)(".5rem", "1fr 1fr"), ";button{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));font-weight:700;padding-top:0.75rem;padding-bottom:0.75rem;--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));border-radius:0.75rem;:hover{--tw-bg-opacity:1;background-color:rgba(156, 163, 175, var(--tw-bg-opacity));};}}@media (max-width: 500px){padding-top:3rem;padding-bottom:3rem; width:95%;p{font-size:0.75rem;line-height:1rem;;}}" + ( true ? "" : 0));
;// CONCATENATED MODULE: ./components/Modals/WithdrawalModal/index.tsx








const {
  Option
} = external_antd_.Select;





const WithdrawalModal = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: reason,
    1: setReason
  } = (0,external_react_.useState)("");
  const {
    withdrawalUserDone
  } = (0,external_react_redux_.useSelector)(state => state.user);
  (0,external_react_.useEffect)(() => {
    if (withdrawalUserDone) {
      (0,config/* toastSuccessMessage */.bi)("회원탈퇴가 정상적으로 진행되었습니다. 이용해주셔서 감사합니다.");
      router_default().push("/");
      dispatch(slices_user/* userSlice.actions.withdrawalUserClear */.s.actions.withdrawalUserClear());
    }
  }, [withdrawalUserDone]);
  const [password, onChangePassword] = (0,useInput/* default */.Z)("");
  const handleReasonChange = (0,external_react_.useCallback)(value => {
    setReason(value);
  }, []);
  const onClickWithdrawal = (0,external_react_.useCallback)(() => {
    dispatch((0,actions_user/* withdrawalUserAction */.h_)({
      reason,
      password
    }));
  }, [reason, password]);
  return (0,jsx_runtime_.jsxs)(WithdrawalModalWrapper, {
    children: [jsx_runtime_.jsx("h3", {
      children: "\uD68C\uC6D0\uD0C8\uD1F4 \uC0AC\uC720\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694."
    }), (0,jsx_runtime_.jsxs)(external_antd_.Select, {
      value: reason,
      defaultValue: "\uC0AC\uC720\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694",
      onChange: handleReasonChange,
      style: {
        width: "100%"
      },
      children: [jsx_runtime_.jsx(Option, {
        value: "\uC0AC\uC774\uD2B8 \uC18D\uB3C4 \uBC0F \uC548\uC815\uC131 \uBD88\uB9CC",
        children: "\uC0AC\uC774\uD2B8 \uC18D\uB3C4 \uBC0F \uC548\uC815\uC131 \uBD88\uB9CC"
      }), jsx_runtime_.jsx(Option, {
        value: "\uCEE8\uD150\uCE20 \uB4F1 \uC774\uC6A9\uD560 \uB9CC\uD55C \uC11C\uBE44\uC2A4 \uBD80\uC871",
        children: "\uCEE8\uD150\uCE20 \uB4F1 \uC774\uC6A9\uD560 \uB9CC\uD55C \uC11C\uBE44\uC2A4 \uBD80\uC871"
      }), jsx_runtime_.jsx(Option, {
        value: "\uC0AC\uC774\uD2B8\uB0B4 \uACFC\uB3C4\uD55C \uAD11\uACE0 \uBC0F \uD64D\uBCF4",
        children: "\uC0AC\uC774\uD2B8\uB0B4 \uACFC\uB3C4\uD55C \uAD11\uACE0 \uBC0F \uD64D\uBCF4"
      }), jsx_runtime_.jsx(Option, {
        value: "\uBD80\uC801\uC808\uD55C \uCEE8\uD150\uCE20 \uBC0F \uC545\uC131\uC720\uC800",
        children: "\uBD80\uC801\uC808\uD55C \uCEE8\uD150\uCE20 \uBC0F \uC545\uC131\uC720\uC800"
      }), jsx_runtime_.jsx(Option, {
        value: "\uAD00\uC2EC\uB3C4 \uC800\uD558",
        children: "\uAD00\uC2EC\uB3C4 \uC800\uD558"
      }), jsx_runtime_.jsx(Option, {
        value: "\uAC1C\uC778\uC815\uBCF4 \uB204\uCD9C \uC6B0\uB824",
        children: "\uAC1C\uC778\uC815\uBCF4 \uB204\uCD9C \uC6B0\uB824"
      })]
    }), jsx_runtime_.jsx("h3", {
      children: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
    }), jsx_runtime_.jsx("input", {
      value: password,
      onChange: onChangePassword,
      className: "password-input",
      type: "password"
    }), jsx_runtime_.jsx("p", {
      children: "\uB4F1\uB85D\uB41C \uBAA8\uBA58\uD2B8 \uBC0F \uC5F0\uB300\uAE30\uB294 \uD0C8\uD1F4 \uD6C4\uC5D0\uB3C4 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uAC8C\uC2DC\uBB3C \uB4F1\uC758 \uC0AD\uC81C\uB97C \uC6D0\uD558\uC2DC\uB294 \uACBD\uC6B0\uC5D0\uB294 \uBC18\uB4DC\uC2DC \uD0C8\uD1F4 \uC804 \uC0AD\uC81C\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4."
    }), (0,jsx_runtime_.jsxs)("div", {
      className: "btn-wrapper",
      children: [jsx_runtime_.jsx("button", {
        onClick: () => dispatch(main/* mainSlice.actions.closeModal */.P.actions.closeModal()),
        children: "\uCDE8\uC18C"
      }), jsx_runtime_.jsx("button", {
        onClick: onClickWithdrawal,
        children: "\uD68C\uC6D0\uD0C8\uD1F4"
      })]
    })]
  });
};

/* harmony default export */ const Modals_WithdrawalModal = (WithdrawalModal);
;// CONCATENATED MODULE: ./sections/UserPage/UserInfoAside/index.tsx

























const UserInfoAside = () => {
  var _userInfo$followers$, _userInfo$followers, _userInfo$followings$, _userInfo$followings;

  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    query
  } = (0,router_.useRouter)();
  const {
    data: userInfo,
    revalidate,
    mutate
  } = external_swr_default()(`/user/${query === null || query === void 0 ? void 0 : query.userId}`, fetcher/* default */.Z, config/* noRevalidate */.nb);
  const {
    user,
    addUserIconDone,
    deleteUserIconDone,
    changeUserPasswordDone,
    changeUserInfoDone,
    followUserDone,
    unfollowUserDone
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    0: isOwner,
    1: setIsOwner
  } = (0,external_react_.useState)(false);
  const {
    0: isFollowed,
    1: setIsFollowed
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if ((user === null || user === void 0 ? void 0 : user.id) === (userInfo === null || userInfo === void 0 ? void 0 : userInfo.id)) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [user, userInfo]);
  (0,external_react_.useEffect)(() => {
    if (user && userInfo) {
      if (user !== null && user !== void 0 && user.followings.find(v => v.followingId === (userInfo === null || userInfo === void 0 ? void 0 : userInfo.id))) {
        setIsFollowed(true);
      } else {
        setIsFollowed(false);
      }
    }
  }, [user, userInfo]);
  const {
    onIconCropperModal,
    onWithdrawalModal
  } = (0,external_react_redux_.useSelector)(state => state.main);
  const [onPasswordChange, onClickPasswordChange, setPasswordChange] = (0,useToggle/* default */.Z)(false);
  const {
    0: onUserInfoEdit,
    1: setUserInfoEdit
  } = (0,external_react_.useState)(false);
  const [userName, onChangeUserName, setUserName] = (0,useInput/* default */.Z)("");
  const [prevPassword, onChangePrevPassword] = (0,useInput/* default */.Z)("");
  const [newPassword, onChangeNewPassword] = (0,useInput/* default */.Z)("");
  const [introduce, onChangeIntroduce, setIntroduce] = (0,useInput/* default */.Z)("");
  const onClickUserInfoEditBtn = (0,external_react_.useCallback)(() => {
    setUserInfoEdit(prev => !prev);
    setUserName(userInfo === null || userInfo === void 0 ? void 0 : userInfo.name);
    setIntroduce(userInfo === null || userInfo === void 0 ? void 0 : userInfo.introduce);
  }, [userInfo]);
  (0,external_react_.useEffect)(() => {
    if (addUserIconDone) {
      (0,config/* toastSuccessMessage */.bi)("아이콘을 성공적으로 바꿨습니다!");
      revalidate();
      dispatch(slices_user/* userSlice.actions.addUserIconClear */.s.actions.addUserIconClear());
      dispatch(main/* mainSlice.actions.closeModal */.P.actions.closeModal());
    }
  }, [addUserIconDone]);
  (0,external_react_.useEffect)(() => {
    if (followUserDone) {
      (0,config/* toastSuccessMessage */.bi)("이 유저를 팔로우 합니다.");
      revalidate();
      dispatch((0,actions_user/* getUserInfoAction */.pZ)());
      dispatch(slices_user/* userSlice.actions.followUserClear */.s.actions.followUserClear());
    }
  }, [followUserDone]);
  (0,external_react_.useEffect)(() => {
    if (unfollowUserDone) {
      (0,config/* toastSuccessMessage */.bi)("이 유저를 언팔로우 했습니다.");
      revalidate();
      dispatch((0,actions_user/* getUserInfoAction */.pZ)());
      dispatch(slices_user/* userSlice.actions.unfollowUserClear */.s.actions.unfollowUserClear());
    }
  }, [unfollowUserDone]);
  (0,external_react_.useEffect)(() => {
    if (deleteUserIconDone) {
      (0,config/* toastSuccessMessage */.bi)("아이콘을 삭제했습니다.");
      revalidate();
      dispatch(slices_user/* userSlice.actions.deleteUserIconClear */.s.actions.deleteUserIconClear());
    }
  }, [deleteUserIconDone]);
  (0,external_react_.useEffect)(() => {
    if (changeUserInfoDone) {
      (0,config/* toastSuccessMessage */.bi)("프로필을 성공적으로 수정했습니다.");
      revalidate();
      dispatch(slices_user/* userSlice.actions.addUserIconClear */.s.actions.addUserIconClear());
    }
  }, [changeUserInfoDone]);
  (0,external_react_.useEffect)(() => {
    if (changeUserPasswordDone) {
      (0,config/* toastSuccessMessage */.bi)("비밀번호를 성공적으로 수정했습니다. 다시 로그인 해주세요.");
      router_default().push("/");
      dispatch(slices_user/* userSlice.actions.deleteUserIconClear */.s.actions.deleteUserIconClear());
    }
  }, [changeUserPasswordDone]);
  const onClickConfirm = (0,external_react_.useCallback)(() => {
    if (!isOwner) {
      (0,config/* toastErrorMessage */.p4)("본인프로필만 변경 가능합니다.");
      return;
    }

    dispatch((0,actions_user/* deleteUserIconAction */.GP)());
  }, [isOwner]);
  const onClickChangeUserInfo = (0,external_react_.useCallback)(() => {
    if (!isOwner) {
      (0,config/* toastErrorMessage */.p4)("본인프로필만 변경 가능합니다.");
      return;
    }

    dispatch((0,actions_user/* changeUserInfoAction */.PP)({
      userName,
      introduce
    }));
    setUserInfoEdit(false);
  }, [userName, introduce, isOwner]);
  const onClickChangePassword = (0,external_react_.useCallback)(() => {
    if (!isOwner) {
      (0,config/* toastErrorMessage */.p4)("본인프로필만 변경 가능합니다.");
      return;
    }

    dispatch((0,actions_user/* changeUserPasswordAction */.Af)({
      prevPassword,
      newPassword
    }));
  }, [prevPassword, newPassword, isOwner]);
  const onClickWithdrawal = (0,external_react_.useCallback)(() => {
    if (!isOwner) {
      (0,config/* toastErrorMessage */.p4)("본인프로필만 변경 가능합니다.");
      return;
    }

    dispatch(main/* mainSlice.actions.toggleWithdrawalModal */.P.actions.toggleWithdrawalModal());
  }, [isOwner]);
  const onClickFollowBtn = (0,external_react_.useCallback)(() => {
    if (!user) {
      (0,config/* toastErrorMessage */.p4)("로그인 후 이용 가능합니다.");
      dispatch(main/* mainSlice.actions.toggleLoginModal */.P.actions.toggleLoginModal());
      return;
    }

    if (!(userInfo !== null && userInfo !== void 0 && userInfo.id)) {
      (0,config/* toastErrorMessage */.p4)("유저를 찾을 수 없습니다.");
      return;
    }

    if (isFollowed) {
      dispatch((0,actions_user/* unfollowUserAction */.Is)(userInfo.id));
    } else {
      dispatch((0,actions_user/* followUserAction */.ZU)(userInfo.id));
    }
  }, [userInfo, user, isFollowed]);
  return (0,jsx_runtime_.jsxs)(UserInfoAsideWrapper, {
    children: [(0,jsx_runtime_.jsxs)("aside", {
      className: "user-info-aside",
      children: [(0,jsx_runtime_.jsxs)("div", {
        className: "icon-profile-wrapper",
        children: [jsx_runtime_.jsx("div", {
          className: "icon-wrapper",
          children: (0,jsx_runtime_.jsxs)("div", {
            className: "icon",
            children: [jsx_runtime_.jsx("img", {
              src: userInfo === null || userInfo === void 0 ? void 0 : userInfo.icon,
              alt: "icon-image"
            }), jsx_runtime_.jsx("div", {
              onClick: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.icon) === config/* DEFAULT_ICON_URL */.u5 ? () => dispatch(main/* mainSlice.actions.toggleIconCropperModal */.P.actions.toggleIconCropperModal()) : () => (0,ConfirmToastify/* toastConfirmMessage */.u)(onClickConfirm, "정말 아이콘을 삭제하시겠어요?", "삭제해주세요."),
              className: "icon-changer",
              children: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.icon) === config/* DEFAULT_ICON_URL */.u5 ? jsx_runtime_.jsx(icons_.PlusOutlined, {}) : jsx_runtime_.jsx(icons_.DeleteOutlined, {})
            })]
          })
        }), jsx_runtime_.jsx("div", {
          className: "user-profile-wrapper",
          children: onUserInfoEdit ? (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [jsx_runtime_.jsx("h4", {
              className: "edit-title",
              children: "\uC774\uB984"
            }), jsx_runtime_.jsx("input", {
              className: "edit-input",
              value: userName,
              onChange: onChangeUserName,
              type: "text"
            }), jsx_runtime_.jsx("h4", {
              className: "edit-title",
              children: "\uC790\uAE30\uC18C\uAC1C"
            }), jsx_runtime_.jsx((external_react_textarea_autosize_default()), {
              className: "edit-textarea",
              value: introduce,
              onChange: onChangeIntroduce
            })]
          }) : (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [jsx_runtime_.jsx("h2", {
              className: "user-name",
              children: userInfo === null || userInfo === void 0 ? void 0 : userInfo.name
            }), jsx_runtime_.jsx("p", {
              className: "user-introduce",
              children: userInfo === null || userInfo === void 0 ? void 0 : userInfo.introduce
            })]
          })
        })]
      }), jsx_runtime_.jsx(external_antd_.Divider, {}), (0,jsx_runtime_.jsxs)("div", {
        className: "follow-manage-wrapper",
        children: [!onUserInfoEdit && onPasswordChange ? (0,jsx_runtime_.jsxs)("div", {
          className: "password-edit-wrapper",
          children: [jsx_runtime_.jsx("h4", {
            className: "edit-title",
            children: "\uC774\uC804 \uBE44\uBC00\uBC88\uD638"
          }), jsx_runtime_.jsx("input", {
            className: "edit-input",
            value: prevPassword,
            onChange: onChangePrevPassword,
            type: "password"
          }), jsx_runtime_.jsx("h4", {
            className: "edit-title",
            children: "\uC0C8\uB85C\uC6B4 \uBE44\uBC00\uBC88\uD638"
          }), jsx_runtime_.jsx("input", {
            className: "edit-input",
            value: newPassword,
            onChange: onChangeNewPassword,
            type: "password"
          })]
        }) : (0,jsx_runtime_.jsxs)("div", {
          className: "follow-wrapper",
          children: [jsx_runtime_.jsx("h3", {
            children: "\uD314\uB85C\uC6CC"
          }), userInfo && (0,jsx_runtime_.jsxs)("div", {
            className: "follow-wrapper",
            children: [jsx_runtime_.jsx("div", {
              className: "follow-icon-wrapper",
              children: userInfo === null || userInfo === void 0 ? void 0 : userInfo.followers.slice(0, 6).map((v, i) => jsx_runtime_.jsx("img", {
                src: v.follower.icon,
                alt: "follow-icon"
              }, i))
            }), jsx_runtime_.jsx("span", {
              children: userInfo.followers.length > 0 ? `${userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$followers$ = userInfo.followers[0].follower) === null || _userInfo$followers$ === void 0 ? void 0 : _userInfo$followers$.name}님 외 ${(userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$followers = userInfo.followers) === null || _userInfo$followers === void 0 ? void 0 : _userInfo$followers.length) - 1}명 팔로우.` : "아직 팔로워가 없습니다."
            })]
          }), jsx_runtime_.jsx("h3", {
            children: "\uD314\uB85C\uC789"
          }), userInfo && (0,jsx_runtime_.jsxs)("div", {
            className: "follow-wrapper",
            children: [jsx_runtime_.jsx("div", {
              className: "follow-icon-wrapper",
              children: userInfo === null || userInfo === void 0 ? void 0 : userInfo.followings.slice(0, 6).map((v, i) => jsx_runtime_.jsx("img", {
                src: v.following.icon,
                alt: "follow-icon"
              }, i))
            }), (0,jsx_runtime_.jsxs)("span", {
              children: [" ", userInfo.followings.length > 0 ? `${userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$followings$ = userInfo.followings[0].following) === null || _userInfo$followings$ === void 0 ? void 0 : _userInfo$followings$.name}님 외 ${(userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$followings = userInfo.followings) === null || _userInfo$followings === void 0 ? void 0 : _userInfo$followings.length) - 1}명 팔로잉.` : "아직 팔로잉이 없습니다."]
            })]
          })]
        }), isOwner && onUserInfoEdit && (0,jsx_runtime_.jsxs)("div", {
          className: "btn-wrapper",
          children: [jsx_runtime_.jsx("button", {
            onClick: onClickChangeUserInfo,
            children: "\uD504\uB85C\uD544 \uC218\uC815 \uC644\uB8CC"
          }), jsx_runtime_.jsx("button", {
            onClick: () => setUserInfoEdit(false),
            children: "\uCDE8\uC18C"
          })]
        }), isOwner && onPasswordChange && (0,jsx_runtime_.jsxs)("div", {
          className: "btn-wrapper",
          children: [jsx_runtime_.jsx("button", {
            onClick: onClickChangePassword,
            children: "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD \uC644\uB8CC"
          }), jsx_runtime_.jsx("button", {
            onClick: () => setPasswordChange(false),
            children: "\uCDE8\uC18C"
          })]
        }), isOwner && !onUserInfoEdit && !onPasswordChange && (0,jsx_runtime_.jsxs)("div", {
          className: "btn-wrapper",
          children: [jsx_runtime_.jsx("button", {
            onClick: onClickUserInfoEditBtn,
            children: "\uD504\uB85C\uD544 \uC218\uC815"
          }), jsx_runtime_.jsx("button", {
            onClick: onClickPasswordChange,
            children: "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD"
          }), jsx_runtime_.jsx("button", {
            onClick: onClickWithdrawal,
            children: "\uD68C\uC6D0\uD0C8\uD1F4"
          })]
        }), !isOwner && jsx_runtime_.jsx("div", {
          className: "btn-wrapper",
          children: (0,jsx_runtime_.jsxs)("button", {
            onClick: onClickFollowBtn,
            children: [jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: isFollowed ? free_solid_svg_icons_.faUserMinus : free_solid_svg_icons_.faUserPlus,
              style: {
                marginRight: "0.7rem"
              }
            }), "\uC720\uC800 ", isFollowed && "언", "\uD314\uB85C\uC6B0"]
          })
        })]
      })]
    }), onIconCropperModal && (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [jsx_runtime_.jsx(IconCropperModal, {}), jsx_runtime_.jsx(Overlay/* default */.Z, {})]
    }), onWithdrawalModal && (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [jsx_runtime_.jsx(Modals_WithdrawalModal, {}), jsx_runtime_.jsx(Overlay/* default */.Z, {})]
    })]
  });
};

/* harmony default export */ const UserPage_UserInfoAside = (UserInfoAside);
;// CONCATENATED MODULE: ./layout/UserInfoLayout.tsx






const UserInfoLayoutWrapper = base_default()("main",  true ? {
  target: "e68wyla0"
} : 0)("background:", config/* GRAY_COLOR */.eR, ";padding:6.5rem 0;.layout{width:", config/* XLG_SIZE */.lv, ";", {
  "marginLeft": "auto",
  "marginRight": "auto"
}, ";", (0,config/* GRID_STYLE */.U6)("3rem", "1fr 3fr"), ";.layout-middle{", {
  "paddingLeft": "1rem",
  "paddingRight": "1rem",
  "paddingTop": "2rem",
  "paddingBottom": "2rem",
  "borderRadius": "1rem",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))"
}, " .main-title{", {
  "fontSize": "0.875rem",
  "lineHeight": "1.25rem",
  "fontWeight": "700",
  "marginTop": "1.5rem",
  "marginBottom": "0.75rem",
  "marginLeft": "1rem",
  "marginRight": "1rem"
}, ";span{", {
  "display": "block",
  "fontSize": "0.875rem",
  "lineHeight": "1.25rem",
  "marginTop": "0.5rem"
}, ";}}.main-title:first-of-type{", {
  "marginTop": "0px",
  "marginBottom": "0.75rem"
}, ";}}}.moment-list,.no-countries,.notice-list,.route-map-wrapper,.post-slider,.no-notice-wrapper{", {
  "padding": "1rem"
}, "@media (max-width: 1000px){", {
  "paddingLeft": "0px",
  "paddingRight": "0px"
}, ";}}.post-slider{", (0,config/* GRID_STYLE */.U6)("1rem", "repeat(3,1fr)"), ";@media (max-width: 1000px){", {
  "paddingLeft": "0.5rem",
  "paddingRight": "0.5rem"
}, ";}@media (max-width: 750px){grid-template-columns:repeat(2, 1fr);gap:0.5rem;}@media (max-width: ", config/* SM_SIZE */.oe, "){display:block;}}.route-map-wrapper{width:100%;div{width:100%;}}.notice-list{.anticon{", {
  "fontSize": "1.25rem",
  "lineHeight": "1.75rem"
}, ";}}.notice-more-btn{", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";", {
  "fontSize": "0.875rem",
  "lineHeight": "1.25rem",
  "fontWeight": "700"
}, " span{", {
  "marginRight": "0.5rem"
}, ";}}.more-btn-wrapper{", {
  "paddingLeft": "1rem",
  "paddingRight": "1rem"
}, ";}.no-post-wrapper{", {
  "height": "15rem",
  "borderRadius": "0.75rem",
  "userSelect": "none",
  "padding": "1rem",
  "margin": "1rem"
}, " ", (0,config/* BORDER_THIN */.h_)("border"), ";", (0,config/* FLEX_STYLE */.Yk)("center", "center", "column"), ";img{", {
  "width": "5rem",
  "height": "5rem",
  "opacity": "0.3",
  "marginBottom": "1rem"
}, ";}}@media (max-width: ", config/* MD_SIZE */.SO, "){.layout{", {
  "width": "100%",
  "display": "block",
  "paddingLeft": "1rem",
  "paddingRight": "1rem"
}, " .layout-middle{.main-title{", {
  "marginLeft": "0px",
  "marginRight": "0px"
}, ";}}}.more-btn-wrapper{", {
  "paddingLeft": "0.5rem",
  "paddingRight": "0.5rem"
}, ";}}@media (max-width: ", config/* SM_SIZE */.oe, "){", {
  "paddingTop": "5rem"
}, " .layout{", {
  "paddingLeft": "0.5rem",
  "paddingRight": "0.5rem"
}, ";}}" + ( true ? "" : 0));

const UserInfoLayout = ({
  children
}) => {
  return jsx_runtime_.jsx(UserInfoLayoutWrapper, {
    children: (0,jsx_runtime_.jsxs)("div", {
      className: "layout",
      children: [jsx_runtime_.jsx(UserPage_UserInfoAside, {}), jsx_runtime_.jsx("div", {
        className: "layout-middle",
        children: children
      })]
    })
  });
};

/* harmony default export */ const layout_UserInfoLayout = (UserInfoLayout);
;// CONCATENATED MODULE: ./sections/UserPage/VisitedCountryList.tsx






const VisitedCountryListWrapper = base_default()("ul",  true ? {
  target: "e18teo8c0"
} : 0)("padding:1rem; li{margin-right:1rem; .image-wrapper{width:1.5rem;height:1rem;display:inline-block; img{width:100%;height:100%; ", (0,config/* BORDER_THIN */.h_)("border"), ";}}span{margin-left:0.5rem;;}}@media (max-width: 1000px){padding-left:0px;padding-right:0px;;}" + ( true ? "" : 0));

const VisitedCountryList = ({
  stories
}) => {
  const storiesWithoutSame = (0,external_react_.useMemo)(() => {
    return stories === null || stories === void 0 ? void 0 : stories.filter((v, i, arr) => i === arr.findIndex(t => v.code === t.code));
  }, [stories]);
  return jsx_runtime_.jsx(VisitedCountryListWrapper, {
    children: storiesWithoutSame === null || storiesWithoutSame === void 0 ? void 0 : storiesWithoutSame.map((v, i) => (0,jsx_runtime_.jsxs)("li", {
      children: [jsx_runtime_.jsx("div", {
        className: "image-wrapper",
        children: jsx_runtime_.jsx("img", {
          src: v.country.flag_src,
          alt: "flag_image"
        })
      }), jsx_runtime_.jsx("span", {
        children: v.country.name
      })]
    }, i))
  });
};

/* harmony default export */ const UserPage_VisitedCountryList = (/*#__PURE__*/(0,external_react_.memo)(VisitedCountryList));
// EXTERNAL MODULE: ./components/Cards/ListCard.tsx
var ListCard = __webpack_require__(330);
// EXTERNAL MODULE: external "react-map-gl"
var external_react_map_gl_ = __webpack_require__(5508);
var external_react_map_gl_default = /*#__PURE__*/__webpack_require__.n(external_react_map_gl_);
// EXTERNAL MODULE: ./components/Maps/Pin.tsx
var Pin = __webpack_require__(5839);
;// CONCATENATED MODULE: ./components/Maps/CountryRouteMap.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const CountryRouteMap = ({
  stories
}) => {
  var _stories$, _stories$2;

  const mapRef = (0,external_react_.useRef)(null);
  const {
    0: viewport,
    1: setViewport
  } = (0,external_react_.useState)({
    width: "100%",
    height: 350,
    latitude: (stories === null || stories === void 0 ? void 0 : (_stories$ = stories[0]) === null || _stories$ === void 0 ? void 0 : _stories$.lat) || 37.50529626491968,
    longitude: (stories === null || stories === void 0 ? void 0 : (_stories$2 = stories[0]) === null || _stories$2 === void 0 ? void 0 : _stories$2.lng) || 126.98047832475031,
    zoom: 1
  });
  const route = (0,external_react_.useMemo)(() => {
    return {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: stories === null || stories === void 0 ? void 0 : stories.map(v => [v.lng, v.lat])
      }
    };
  }, [stories]);
  const handleViewportChange = (0,external_react_.useCallback)(newViewport => setViewport(_objectSpread(_objectSpread({}, newViewport), {}, {
    width: "100%"
  })), []);
  return (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), _objectSpread(_objectSpread({
    className: "map-gl",
    ref: mapRef
  }, viewport), {}, {
    mapboxApiAccessToken: "pk.eyJ1IjoiamFuZ2h5dW5zb28iLCJhIjoiY2tyZ2l0NnhoMmtncjJ4bmp4YjZheXZvcCJ9.7aD4HiGVqpKqM7rUj8FfJg",
    onViewportChange: handleViewportChange,
    mapStyle: "mapbox://sprites/mapbox/basic-v8",
    asyncRender: true,
    transitionInterpolator: new external_react_map_gl_.FlyToInterpolator(),
    children: [jsx_runtime_.jsx(external_react_map_gl_.Source, {
      type: "geojson",
      data: route,
      children: jsx_runtime_.jsx(external_react_map_gl_.Layer, {
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "red",
          "line-width": 2
        }
      })
    }), stories === null || stories === void 0 ? void 0 : stories.map((v, i) => jsx_runtime_.jsx(external_react_map_gl_.Marker, {
      longitude: v.lng,
      latitude: v.lat,
      offsetTop: -20,
      offsetLeft: -10,
      draggable: false,
      children: jsx_runtime_.jsx(Pin/* default */.Z, {
        isUserInfoPage: true,
        story: v,
        size: 20
      })
    }, i))]
  }));
};

/* harmony default export */ const Maps_CountryRouteMap = (CountryRouteMap);
// EXTERNAL MODULE: ./components/Cards/ArticleColumnCard/index.tsx + 1 modules
var ArticleColumnCard = __webpack_require__(8751);
;// CONCATENATED MODULE: ./components/MoreButton.tsx






const MoreButtonWrapper = base_default()("button",  true ? {
  target: "eygp2p20"
} : 0)("width:100%;border-radius:0.375rem;:hover{--tw-shadow:0px 0px 5px rgba(0, 0, 0, 0.15);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}padding-top:0.75rem;padding-bottom:0.75rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));font-size:1rem;line-height:1.5rem;font-weight:700; ", (0,config/* BORDER_THIN */.h_)("border"), ";", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";" + ( true ? "" : 0));

const MoreButton = ({
  onClickMoreBtn
}) => {
  return jsx_runtime_.jsx(MoreButtonWrapper, {
    onClick: onClickMoreBtn,
    children: (0,jsx_runtime_.jsxs)("span", {
      children: ["\uB354\uBCF4\uAE30 ", " >"]
    })
  });
};

/* harmony default export */ const components_MoreButton = (/*#__PURE__*/(0,external_react_.memo)(MoreButton));
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/me/[userId]/index.tsx




function _userId_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _userId_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _userId_ownKeys(Object(source), true).forEach(function (key) { _userId_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _userId_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _userId_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const index = ({
  initialUserInfo
}) => {
  var _userInfo$notices2, _userInfo$notices3, _userInfo$stories, _userInfo$stories2, _userInfo$moments, _userInfo$moments2;

  const {
    query
  } = (0,router_.useRouter)();
  const {
    0: noticePage,
    1: setNoticePage
  } = (0,external_react_.useState)(5);
  const {
    0: isOwner,
    1: setIsOwner
  } = (0,external_react_.useState)(false);
  const {
    0: storyPageNumber,
    1: setStoryPageNumber
  } = (0,external_react_.useState)(6);
  const {
    0: momentPageNumber,
    1: setMomentPageNumber
  } = (0,external_react_.useState)(5);
  const {
    user
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    data: userInfo,
    revalidate: revalidateUserInfo
  } = external_swr_default()(`/user/${query === null || query === void 0 ? void 0 : query.userId}`, fetcher/* default */.Z, _userId_objectSpread({
    initialData: initialUserInfo
  }, config/* noRevalidate */.nb));
  (0,external_react_.useEffect)(() => {
    if ((user === null || user === void 0 ? void 0 : user.id) === (userInfo === null || userInfo === void 0 ? void 0 : userInfo.id)) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [user, userInfo]);
  const onClickMoreNotice = (0,external_react_.useCallback)(() => {
    if (userInfo) {
      var _userInfo$notices;

      setNoticePage(userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$notices = userInfo.notices) === null || _userInfo$notices === void 0 ? void 0 : _userInfo$notices.length);
    }
  }, [userInfo]);
  const onClickNoticeList = (0,external_react_.useCallback)(v => {
    if (v.momentId) {
      router_default().push(`/country/${v.code}/${v.momentId}`);
    } else {
      router_default().push(`/story/${v.code}/${v.storyId}`);
    }
  }, []);
  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [jsx_runtime_.jsx((head_default()), {
      children: (0,jsx_runtime_.jsxs)("title", {
        children: [userInfo === null || userInfo === void 0 ? void 0 : userInfo.name, "\uB2D8\uC758 \uD504\uB85C\uD544 - Fall In Asia"]
      })
    }), (0,jsx_runtime_.jsxs)(layout_UserInfoLayout, {
      children: [isOwner && userInfo && (userInfo === null || userInfo === void 0 ? void 0 : userInfo.notices.length) > 0 ? (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [jsx_runtime_.jsx("h2", {
          className: "main-title",
          children: "\uC54C\uB9BC"
        }), jsx_runtime_.jsx("ul", {
          className: "notice-list",
          children: userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$notices2 = userInfo.notices) === null || _userInfo$notices2 === void 0 ? void 0 : _userInfo$notices2.slice(0, noticePage).map((v, i) => jsx_runtime_.jsx(ListCard/* default */.Z, {
            onClickListCard: () => onClickNoticeList(v),
            title: v.header,
            content: v.content,
            noticeId: v.id,
            revalidateUserInfo: revalidateUserInfo
          }, i))
        }), (userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$notices3 = userInfo.notices) === null || _userInfo$notices3 === void 0 ? void 0 : _userInfo$notices3.length) > 5 && jsx_runtime_.jsx("div", {
          className: "notice-more-btn",
          children: (0,jsx_runtime_.jsxs)("button", {
            onClick: onClickMoreNotice,
            children: [jsx_runtime_.jsx("span", {
              children: "\uB354\uBCF4\uAE30"
            }), jsx_runtime_.jsx(icons_.PlusCircleOutlined, {})]
          })
        })]
      }) : (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [jsx_runtime_.jsx("h2", {
          className: "main-title",
          children: "\uC54C\uB9BC\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"
        }), jsx_runtime_.jsx("p", {
          className: "no-notice-wrapper",
          children: "\uC720\uC800\uB2D8\uC774 \uBAA8\uBA58\uD2B8,\uC5F0\uB300\uAE30,\uCF54\uBA58\uD2B8 \uC791\uC131 \uBC0F \uC218\uC815\uB4F1 \uD65C\uB3D9\uC744 \uD558\uBA74 \uC800\uD76C\uAC00 \uC54C\uB824\uC904\uAC8C\uC694!"
        })]
      }), (0,jsx_runtime_.jsxs)("h2", {
        className: "main-title",
        children: [userInfo === null || userInfo === void 0 ? void 0 : userInfo.name, "\uB2D8\uC758 \uC5F0\uB300\uAE30 \uC9C0\uB3C4"]
      }), jsx_runtime_.jsx("div", {
        className: "route-map-wrapper",
        children: jsx_runtime_.jsx(Maps_CountryRouteMap, {
          stories: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.stories) || []
        })
      }), jsx_runtime_.jsx("h2", {
        className: "main-title",
        children: "\uB2E4\uB140\uC628 \uAD6D\uAC00 \uB9AC\uC2A4\uD2B8"
      }), userInfo && (userInfo === null || userInfo === void 0 ? void 0 : userInfo.stories.length) > 0 ? jsx_runtime_.jsx(UserPage_VisitedCountryList, {
        stories: userInfo === null || userInfo === void 0 ? void 0 : userInfo.stories
      }) : jsx_runtime_.jsx("h4", {
        className: "no-countries",
        children: "\uC544\uC9C1 \uB2E4\uB140\uC628 \uAD6D\uAC00\uAC00 \uC5C6\uC5B4\uC694, \uC5F0\uB300\uAE30\uB97C \uC791\uC131\uD558\uBA74 \uC790\uB3D9\uC73C\uB85C \uAC31\uC2E0\uB418\uC694.\uD83D\uDE09"
      }), (0,jsx_runtime_.jsxs)("h2", {
        className: "main-title",
        children: [userInfo === null || userInfo === void 0 ? void 0 : userInfo.name, "\uB2D8\uC758 \uC791\uC131 \uC5F0\uB300\uAE30 ", (userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$stories = userInfo.stories) === null || _userInfo$stories === void 0 ? void 0 : _userInfo$stories.length) || 0, "\uAC1C"]
      }), userInfo && (userInfo === null || userInfo === void 0 ? void 0 : userInfo.stories.length) > 0 ? (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [jsx_runtime_.jsx("div", {
          className: "post-slider",
          children: userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$stories2 = userInfo.stories) === null || _userInfo$stories2 === void 0 ? void 0 : _userInfo$stories2.slice(0, storyPageNumber).map((v, i) => jsx_runtime_.jsx(ArticleColumnCard/* default */.Z, {
            story: v
          }, i))
        }), (userInfo === null || userInfo === void 0 ? void 0 : userInfo.stories.length) > storyPageNumber && jsx_runtime_.jsx("div", {
          className: "more-btn-wrapper",
          children: jsx_runtime_.jsx(components_MoreButton, {
            onClickMoreBtn: () => {
              setStoryPageNumber(prev => prev + 6);
            }
          })
        })]
      }) : (0,jsx_runtime_.jsxs)("div", {
        className: "no-post-wrapper",
        children: [jsx_runtime_.jsx("img", {
          src: config/* NO_POST_URL */.xA,
          alt: "no-post"
        }), jsx_runtime_.jsx("h4", {
          children: "\uC544\uC9C1 \uC791\uC131\uD55C \uC5F0\uB300\uAE30\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
        })]
      }), (0,jsx_runtime_.jsxs)("h2", {
        className: "main-title",
        children: [userInfo === null || userInfo === void 0 ? void 0 : userInfo.name, "\uB2D8\uC758 \uC791\uC131 \uBAA8\uBA58\uD2B8 ", (userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$moments = userInfo.moments) === null || _userInfo$moments === void 0 ? void 0 : _userInfo$moments.length) || 0, "\uAC1C"]
      }), userInfo && (userInfo === null || userInfo === void 0 ? void 0 : userInfo.moments.length) > 0 ? (0,jsx_runtime_.jsxs)("ul", {
        className: "moment-list",
        children: [userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$moments2 = userInfo.moments) === null || _userInfo$moments2 === void 0 ? void 0 : _userInfo$moments2.slice(0, momentPageNumber).map((v, i) => jsx_runtime_.jsx(ListCard/* default */.Z, {
          onClickListCard: () => router_default().push(`/country/${v.code}/${v.id}`),
          title: `${v.country.name}/${v.type}/${v.id}번째모멘트`,
          content: v.content
        }, i)), (userInfo === null || userInfo === void 0 ? void 0 : userInfo.moments.length) > momentPageNumber && jsx_runtime_.jsx(components_MoreButton, {
          onClickMoreBtn: () => {
            setMomentPageNumber(prev => prev + 5);
          }
        })]
      }) : (0,jsx_runtime_.jsxs)("div", {
        className: "no-post-wrapper",
        children: [jsx_runtime_.jsx("img", {
          src: config/* NO_POST_URL */.xA,
          alt: "no-post"
        }), jsx_runtime_.jsx("h4", {
          children: "\uC544\uC9C1 \uC791\uC131\uD55C \uBAA8\uBA58\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
        })]
      })]
    })]
  });
};

const getServerSideProps = configureStore/* wrapper.getServerSideProps */.Y.getServerSideProps(store => async ({
  req,
  res,
  params
}) => {
  const cookie = req ? req.headers.cookie : "";
  (external_axios_default()).defaults.headers.Cookie = "";

  if (req && cookie) {
    (external_axios_default()).defaults.headers.Cookie = cookie;
  }

  await store.dispatch((0,actions_user/* getUserInfoAction */.pZ)());
  const initialUserInfo = await (0,fetcher/* default */.Z)(`/user/${params === null || params === void 0 ? void 0 : params.userId}`);
  return {
    props: {
      initialUserInfo
    }
  };
});
/* harmony default export */ const _userId_ = (index);

/***/ }),

/***/ 2372:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 7381:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 4554:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 4617:
/***/ ((module) => {

module.exports = require("@emotion/styled/base");

/***/ }),

/***/ 887:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 799:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

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

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 3556:
/***/ ((module) => {

module.exports = require("react-textarea-autosize");

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
var __webpack_exports__ = __webpack_require__.X(0, [979,479,751,243,839,212], () => (__webpack_exec__(5545)));
module.exports = __webpack_exports__;

})();