"use strict";
exports.id = 979;
exports.ids = [979];
exports.modules = {

/***/ 5145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pZ": () => (/* binding */ getUserInfoAction),
/* harmony export */   "Re": () => (/* binding */ logInAction),
/* harmony export */   "Cd": () => (/* binding */ logoutAction),
/* harmony export */   "Qu": () => (/* binding */ signupAction),
/* harmony export */   "Df": () => (/* binding */ changeUserIconAction),
/* harmony export */   "GP": () => (/* binding */ deleteUserIconAction),
/* harmony export */   "PP": () => (/* binding */ changeUserInfoAction),
/* harmony export */   "Af": () => (/* binding */ changeUserPasswordAction),
/* harmony export */   "h_": () => (/* binding */ withdrawalUserAction),
/* harmony export */   "ZU": () => (/* binding */ followUserAction),
/* harmony export */   "Is": () => (/* binding */ unfollowUserAction),
/* harmony export */   "Bn": () => (/* binding */ readNoticeAction)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3215);



const getUserInfoAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/user/getInfo", async () => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("/user");
    return response.data;
  } catch (error) {
    (0,config__WEBPACK_IMPORTED_MODULE_2__/* .toastErrorMessage */ .p4)(error);
    throw error;
  }
});
const logInAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/login", async data => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("/user/login", data);
    return response.data;
  } catch (error) {
    (0,config__WEBPACK_IMPORTED_MODULE_2__/* .toastErrorMessage */ .p4)(error);
    throw error;
  }
});
const logoutAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/logout", async () => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("/user/logout");
    return response.data;
  } catch (error) {
    (0,config__WEBPACK_IMPORTED_MODULE_2__/* .toastErrorMessage */ .p4)(error);
    throw error;
  }
});
const signupAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/signup", async data => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("/user", data);
    return response.data;
  } catch (error) {
    (0,config__WEBPACK_IMPORTED_MODULE_2__/* .toastErrorMessage */ .p4)(error);
    throw error;
  }
});
const changeUserIconAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/icon", async data => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("/user/icon", data);
    return response.data;
  } catch (error) {
    (0,config__WEBPACK_IMPORTED_MODULE_2__/* .toastErrorMessage */ .p4)(error);
    throw error;
  }
});
const deleteUserIconAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/icon/delete", async () => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().delete("/user/icon");
    return response.data;
  } catch (error) {
    (0,config__WEBPACK_IMPORTED_MODULE_2__/* .toastErrorMessage */ .p4)(error);
    throw error;
  }
});
const changeUserInfoAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/info", async form => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("/user/info", form);
    return response.data;
  } catch (error) {
    (0,config__WEBPACK_IMPORTED_MODULE_2__/* .toastErrorMessage */ .p4)(error);
    throw error;
  }
});
const changeUserPasswordAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/password", async form => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("/user/password", form);
    return response.data;
  } catch (error) {
    (0,config__WEBPACK_IMPORTED_MODULE_2__/* .toastErrorMessage */ .p4)(error);
    throw error;
  }
});
const withdrawalUserAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/withdrawal", async form => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("/user/withdrawal", form);
    return response.data;
  } catch (error) {
    (0,config__WEBPACK_IMPORTED_MODULE_2__/* .toastErrorMessage */ .p4)(error);
    throw error;
  }
});
const followUserAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/follow", async followingId => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`/user/follow/${followingId}`);
    return response.data;
  } catch (error) {
    (0,config__WEBPACK_IMPORTED_MODULE_2__/* .toastErrorMessage */ .p4)(error);
    throw error;
  }
});
const unfollowUserAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/unfollow", async followingId => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`/user/unfollow/${followingId}`);
    return response.data;
  } catch (error) {
    (0,config__WEBPACK_IMPORTED_MODULE_2__/* .toastErrorMessage */ .p4)(error);
    throw error;
  }
});
const readNoticeAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("/notice/read", async () => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().patch(`/user/notice`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

/***/ }),

/***/ 3215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ WHITE_COLOR),
/* harmony export */   "vX": () => (/* binding */ BLUE_COLOR),
/* harmony export */   "Ss": () => (/* binding */ RED_COLOR),
/* harmony export */   "eR": () => (/* binding */ GRAY_COLOR),
/* harmony export */   "oe": () => (/* binding */ SM_SIZE),
/* harmony export */   "SO": () => (/* binding */ MD_SIZE),
/* harmony export */   "PQ": () => (/* binding */ LG_SIZE),
/* harmony export */   "lv": () => (/* binding */ XLG_SIZE),
/* harmony export */   "p6": () => (/* binding */ FALL_IN_ASIA_LOGO),
/* harmony export */   "Of": () => (/* binding */ WORLD_IMAGE),
/* harmony export */   "u5": () => (/* binding */ DEFAULT_ICON_URL),
/* harmony export */   "Q7": () => (/* binding */ NO_IMAGE_URL),
/* harmony export */   "xA": () => (/* binding */ NO_POST_URL),
/* harmony export */   "Xk": () => (/* binding */ RGB_BLACK),
/* harmony export */   "h_": () => (/* binding */ BORDER_THIN),
/* harmony export */   "Yk": () => (/* binding */ FLEX_STYLE),
/* harmony export */   "kA": () => (/* binding */ ELLIPSIS_STYLE),
/* harmony export */   "U6": () => (/* binding */ GRID_STYLE),
/* harmony export */   "yt": () => (/* binding */ searchOptions),
/* harmony export */   "HH": () => (/* binding */ newsPageNavList),
/* harmony export */   "p4": () => (/* binding */ toastErrorMessage),
/* harmony export */   "bi": () => (/* binding */ toastSuccessMessage),
/* harmony export */   "J2": () => (/* binding */ imageHandler),
/* harmony export */   "Fu": () => (/* binding */ quillModules),
/* harmony export */   "Kd": () => (/* binding */ quillSetting),
/* harmony export */   "pC": () => (/* binding */ qullFormats),
/* harmony export */   "nb": () => (/* binding */ noRevalidate)
/* harmony export */ });
/* unused harmony exports BLACK_COLOR, FALL_IN_ASIA_ICON, searchPageNavList, handleImgError, quillMomentModules */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);

 // CSS

const BLACK_COLOR = "black";
const WHITE_COLOR = "white";
const BLUE_COLOR = "#1187cf";
const RED_COLOR = "#C02E4C";
const GRAY_COLOR = "rgba(243, 244, 246)";
const SM_SIZE = "576px";
const MD_SIZE = "768px";
const LG_SIZE = "1024px";
const XLG_SIZE = "1280px";
const FALL_IN_ASIA_LOGO = "https://user-images.githubusercontent.com/74864925/129451908-bc29b915-98b1-4da4-bdcb-80f96b3210bf.png";
const WORLD_IMAGE = "https://user-images.githubusercontent.com/74864925/126495159-2e4438ad-6efb-458a-b314-8f92823babc7.jpg";
const DEFAULT_ICON_URL = "https://user-images.githubusercontent.com/74864925/124331496-460bfe80-dbca-11eb-95dc-a5379a5750a6.png";
const FALL_IN_ASIA_ICON = "https://user-images.githubusercontent.com/74864925/128808184-d8c58485-0e4f-4d7c-acb4-4f4803ad2fe4.png";
const NO_IMAGE_URL = "https://usagi-post.com/wp-content/uploads/2020/05/no-image-found-360x250-1.png";
const NO_POST_URL = "https://icons.iconarchive.com/icons/iconsmind/outline/256/Inbox-Empty-icon.png";
const RGB_BLACK = opacity => `
  rgba(0,0,0,${opacity})
`;
const BORDER_THIN = (border, px) => `
  ${border}:${px ? px : "1"}px solid rgba(0,0,0,0.15)
`;
const FLEX_STYLE = (justify, align, flexStyle) => `
  display:flex;
  justify-content:${justify};
  align-items:${align};
  flex-direction:${flexStyle};
`;
const ELLIPSIS_STYLE = (lineHeight, clamp, height) => `
line-height: ${lineHeight};
-webkit-line-clamp: ${clamp};
height: ${height};
display: -webkit-box;
-webkit-box-orient: vertical;
overflow: hidden;
word-wrap: break-word;
text-overflow: ellipsis;

`;
const GRID_STYLE = (gap, colums, row) => `
  display:grid;
  grid-template-columns:${colums};
  grid-template-rows:${row};
  gap:${gap};
`; // list
// We will update this list from popular searched word of entity Database-Indexing  (2021/08/01 JANG HYUN SOO)
// 이 auto complete 리스트들은 앞으로 DB content 인덱싱을 통해 자동화과정을 거칠것입니다. 지금은 예시로 봐주세요 (장현수)

const searchOptions = ["태국", "여행", "관광지", "여행지 추천", "관광명소", "코로나", "일본", "도쿄 올림픽", "도쿄", "푸켓", "워킹스트리트", "호치민", "방콕", "맛집", "먹방", "해변", "볼거리", "더운 나라", "동남아시아", "동북아시아", "아시아", "게스트하우스", "호텔", "사원", "동남아시아 코로나 현황", "입국 금지", "커피", "베트남 커피", "길거리 음식", "먹거리", "현지인", "사기", "사기 안당하는법", "사기 수법", "바가지", "레스토랑", "유흥가", "배낭여행", "배낭여행 추천지", "명소", "랜드마크", "현지 맛집", "현지 추천", "추천 명소", "안녕하세요 영어", "바다", "힐링 명소", "유원지"].sort().map(v => {
  return {
    value: v
  };
});
const newsPageNavList = [{
  name: "관광뉴스",
  value: "관광뉴스"
}, {
  name: "트렌드",
  value: "트렌드"
}, {
  name: "쇼핑",
  value: "쇼핑"
}, {
  name: "이색체험",
  value: "이색체험"
}, {
  name: "이벤트",
  value: "이벤트"
}];
const searchPageNavList = [{
  name: "모멘트",
  value: "news"
}, {
  name: "트렌드",
  value: "trand"
}, {
  name: "쇼핑",
  value: "shopping"
}, {
  name: "이색체험",
  value: "experience"
}, {
  name: "이벤트",
  value: "event"
}]; // Toast Message

const toastErrorMessage = error => {
  let message = error;

  if (typeof error !== "string") {
    var _error$response, _error$response$data, _error$response$data$;

    message = (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : (_error$response$data$ = _error$response$data.data) === null || _error$response$data$ === void 0 ? void 0 : _error$response$data$.message;
  }

  react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(message, {
    position: "top-center",
    autoClose: 2300,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "toast"
  });
};
const toastSuccessMessage = message => {
  react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(message, {
    position: "top-center",
    autoClose: 2300,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "toast"
  });
}; // error handler

const handleImgError = e => {
  e.target.src = NO_IMAGE_URL;
}; // React quill

const imageHandler = (quillInstance, isStory) => {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.onchange = async e => {
    const file = input.files ? input.files[0] : null;
    const form = new FormData();

    if (file) {
      form.append("image", file);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: "post",
      url: isStory ? "/story/image" : "/moment/image",
      data: form,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(res => {
      var _quillInstance$curren, _quillInstance$curren2, _quillInstance$curren3;

      const range = quillInstance === null || quillInstance === void 0 ? void 0 : (_quillInstance$curren = quillInstance.current) === null || _quillInstance$curren === void 0 ? void 0 : _quillInstance$curren.getSelection(true);
      quillInstance === null || quillInstance === void 0 ? void 0 : (_quillInstance$curren2 = quillInstance.current) === null || _quillInstance$curren2 === void 0 ? void 0 : _quillInstance$curren2.insertEmbed(range.index, "image", `${res.data.data}`);
      quillInstance === null || quillInstance === void 0 ? void 0 : (_quillInstance$curren3 = quillInstance.current) === null || _quillInstance$curren3 === void 0 ? void 0 : _quillInstance$curren3.setSelection(range.index + 1);
    });
  };
};
const quillModules = isNoImageModule => {
  return {
    toolbar: {
      container: [[{
        header: [1, 2, 3, false]
      }], ["bold", "italic", "underline", "strike", "blockquote"], [{
        list: "ordered"
      }, {
        list: "bullet"
      }, {
        indent: "-1"
      }, {
        indent: "+1"
      }], ["link", isNoImageModule ? "" : "image"], [{
        align: []
      }, {
        color: []
      }, {
        background: []
      }]]
    }
  };
};
const quillMomentModules = () => {
  return {
    toolbar: {
      container: [[{
        header: [1, 2, 3, false]
      }], ["bold", "italic", "underline", "strike", "blockquote"], [{
        list: "ordered"
      }, {
        list: "bullet"
      }, {
        indent: "-1"
      }, {
        indent: "+1"
      }], ["link", "image"], [{
        align: []
      }, {
        color: []
      }, {
        background: []
      }]]
    }
  };
};
const quillSetting = isNoImageModule => {
  return {
    theme: "snow",
    placeholder: "내용을 작성해주세요.",
    modules: quillModules(isNoImageModule)
  };
};
const qullFormats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "align", "color", "background"]; // swr

const noRevalidate = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false
};

/***/ }),

/***/ 4603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ wrapper)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(2744);
// EXTERNAL MODULE: ./slices/main.ts + 1 modules
var main = __webpack_require__(3640);
// EXTERNAL MODULE: ./slices/user.ts
var user = __webpack_require__(1322);
;// CONCATENATED MODULE: ./slices/index.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const reducer = (state = {}, action) => {
  if (action.type === external_next_redux_wrapper_.HYDRATE) {
    return _objectSpread(_objectSpread({}, state), action.payload);
  }

  return (0,toolkit_.combineReducers)({
    main: main/* mainSlice.reducer */.P.reducer,
    user: user/* userSlice.reducer */.s.reducer
  })(state, action);
};
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./configureStore.ts




(external_axios_default()).defaults.baseURL =  false ? 0 : "http://localhost:3060/api";
(external_axios_default()).defaults.withCredentials = true;

const makeStore = () => (0,toolkit_.configureStore)({
  reducer: reducer,
  devTools: false
});

const wrapper = (0,external_next_redux_wrapper_.createWrapper)(makeStore, {
  debug: false
});

/***/ }),

/***/ 3640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* binding */ mainSlice)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./actions/main.ts


const searchWordAction = (0,toolkit_.createAsyncThunk)("/search", async searchWord => {
  try {
    const response = await external_axios_default().get(`/search/${encodeURIComponent(searchWord)}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});
;// CONCATENATED MODULE: ./slices/main.ts


const mainState = {
  searchWord: "",
  onProfilePopUp: false,
  onNoticePopUp: false,
  onSearchPopUp: false,
  onLoginModal: false,
  onWithdrawalModal: false,
  onIconCropperModal: false,
  searchWordLoading: false,
  searchWordDone: false,
  searchWordError: false,
  onSlideMenu: false
};
const mainSlice = (0,toolkit_.createSlice)({
  name: "main",
  initialState: mainState,
  reducers: {
    toggleLoginModal(state) {
      state.onLoginModal = !state.onLoginModal;
      state.onProfilePopUp = false;
      state.onNoticePopUp = false;
      state.onSearchPopUp = false;
      state.onSlideMenu = false;
    },

    toggleIconCropperModal(state) {
      state.onIconCropperModal = !state.onIconCropperModal;
      state.onProfilePopUp = false;
      state.onNoticePopUp = false;
      state.onSearchPopUp = false;
      state.onSlideMenu = false;
    },

    toggleWithdrawalModal(state) {
      state.onWithdrawalModal = !state.onWithdrawalModal;
      state.onProfilePopUp = false;
      state.onNoticePopUp = false;
      state.onSearchPopUp = false;
      state.onSlideMenu = false;
    },

    toggleProfilePopUp(state) {
      state.onProfilePopUp = !state.onProfilePopUp;
      state.onSearchPopUp = false;
      state.onNoticePopUp = false;
    },

    toggleNoticePopUp(state) {
      state.onNoticePopUp = !state.onNoticePopUp;
      state.onLoginModal = false;
      state.onSearchPopUp = false;
    },

    toggleSlideMenu(state) {
      state.onSlideMenu = !state.onSlideMenu;
      state.onLoginModal = false;
      state.onSearchPopUp = false;
    },

    toggleSearchPopUp(state) {
      state.onSearchPopUp = !state.onSearchPopUp;
      state.onLoginModal = false;
      state.onNoticePopUp = false;
      state.onProfilePopUp = false;
    },

    closeProfilePopUp(state) {
      state.onProfilePopUp = false;
    },

    openSearchPopUp(state) {
      state.onSearchPopUp = true;
    },

    closeNoticePopUp(state) {
      state.onNoticePopUp = false;
    },

    closeSearchPopUp(state) {
      state.onSearchPopUp = false;
    },

    closeSlideMenu(state) {
      state.onSlideMenu = false;
    },

    closeModal(state) {
      state.onLoginModal = false;
      state.onIconCropperModal = false;
      state.onWithdrawalModal = false;
      state.onNoticePopUp = false;
      state.onProfilePopUp = false;
      state.onSearchPopUp = false;
      state.onSlideMenu = false;
    },

    clearSearchWord(state) {
      state.searchWordLoading = false;
      state.searchWordDone = false;
      state.searchWordError = false;
    }

  },
  extraReducers: builder => builder.addCase(searchWordAction.pending, state => {
    state.searchWordLoading = true;
  }).addCase(searchWordAction.fulfilled, (state, action) => {
    state.searchWordLoading = false;
    state.searchWordDone = true;
    state.searchWord = action.payload.data.searchWord;
  }).addCase(searchWordAction.rejected, state => {
    state.searchWordLoading = false;
    state.searchWordError = true;
  })
});

/***/ }),

/***/ 1322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ userSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var actions_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5145);


const initialState = {
  user: null,
  getUserInfoLoading: false,
  getUserInfoDone: false,
  getUserInfoError: false,
  logInLoading: false,
  logInDone: false,
  logInError: false,
  logoutLoading: false,
  logoutDone: false,
  logoutError: false,
  signupLoading: false,
  signupDone: false,
  signupError: false,
  addUserIconLoading: false,
  addUserIconDone: false,
  addUserIconError: false,
  changeUserInfoLoading: false,
  changeUserInfoDone: false,
  changeUserInfoError: false,
  changeUserPasswordLoading: false,
  changeUserPasswordDone: false,
  changeUserPasswordError: false,
  deleteUserIconLoading: false,
  deleteUserIconDone: false,
  deleteUserIconError: false,
  withdrawalUserLoading: false,
  withdrawalUserDone: false,
  withdrawalUserError: false,
  followUserLoading: false,
  followUserDone: false,
  followUserError: false,
  unfollowUserLoading: false,
  unfollowUserDone: false,
  unfollowUserError: false,
  readNoticeLoading: false,
  readNoticeDone: false,
  readNoticeError: false
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "user",
  initialState,
  reducers: {
    logInClear(state) {
      state.logInLoading = false;
      state.logInDone = false;
      state.logInError = false;
    },

    signupClear(state) {
      state.signupLoading = false;
      state.signupDone = false;
      state.signupError = false;
    },

    logoutClear(state) {
      state.logoutLoading = false;
      state.logoutDone = false;
      state.logoutError = false;
    },

    addUserIconClear(state) {
      state.addUserIconLoading = false;
      state.addUserIconDone = false;
      state.addUserIconError = false;
    },

    deleteUserIconClear(state) {
      state.deleteUserIconLoading = false;
      state.deleteUserIconDone = false;
      state.deleteUserIconError = false;
    },

    changeUserInfoClear(state) {
      state.changeUserInfoLoading = false;
      state.changeUserInfoDone = false;
      state.changeUserInfoError = false;
    },

    changeUserPasswordClear(state) {
      state.changeUserPasswordLoading = false;
      state.changeUserPasswordDone = false;
      state.changeUserPasswordError = false;
    },

    followUserClear(state) {
      state.followUserLoading = false;
      state.followUserDone = false;
      state.followUserError = false;
    },

    unfollowUserClear(state) {
      state.unfollowUserLoading = false;
      state.unfollowUserDone = false;
      state.unfollowUserError = false;
    },

    withdrawalUserClear(state) {
      state.withdrawalUserLoading = false;
      state.withdrawalUserDone = false;
      state.withdrawalUserError = false;
    },

    readNoticeClear(state) {
      state.readNoticeLoading = false;
      state.readNoticeDone = false;
      state.readNoticeError = false;
    }

  },
  extraReducers: builder => builder.addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .getUserInfoAction.pending */ .pZ.pending, state => {
    state.getUserInfoLoading = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .getUserInfoAction.fulfilled */ .pZ.fulfilled, (state, action) => {
    state.getUserInfoLoading = false;
    state.getUserInfoDone = true;
    state.user = action.payload.data;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .getUserInfoAction.rejected */ .pZ.rejected, state => {
    state.getUserInfoLoading = false;
    state.getUserInfoError = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .logInAction.pending */ .Re.pending, state => {
    state.logInLoading = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .logInAction.fulfilled */ .Re.fulfilled, (state, action) => {
    state.logInLoading = false;
    state.logInDone = true;
    state.user = action.payload.data;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .logInAction.rejected */ .Re.rejected, state => {
    state.logInLoading = false;
    state.logInError = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .signupAction.pending */ .Qu.pending, state => {
    state.signupLoading = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .signupAction.fulfilled */ .Qu.fulfilled, (state, action) => {
    state.signupLoading = false;
    state.signupDone = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .signupAction.rejected */ .Qu.rejected, state => {
    state.signupLoading = false;
    state.signupError = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .logoutAction.pending */ .Cd.pending, state => {
    state.logoutLoading = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .logoutAction.fulfilled */ .Cd.fulfilled, state => {
    state.logoutLoading = false;
    state.logoutDone = true;
    state.user = null;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .logoutAction.rejected */ .Cd.rejected, state => {
    state.logoutLoading = false;
    state.logoutError = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .changeUserIconAction.pending */ .Df.pending, state => {
    state.addUserIconLoading = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .changeUserIconAction.fulfilled */ .Df.fulfilled, state => {
    state.addUserIconLoading = false;
    state.addUserIconDone = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .changeUserIconAction.rejected */ .Df.rejected, state => {
    state.addUserIconLoading = false;
    state.addUserIconError = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .deleteUserIconAction.pending */ .GP.pending, state => {
    state.deleteUserIconLoading = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .deleteUserIconAction.fulfilled */ .GP.fulfilled, state => {
    state.deleteUserIconLoading = false;
    state.deleteUserIconDone = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .deleteUserIconAction.rejected */ .GP.rejected, state => {
    state.deleteUserIconLoading = false;
    state.deleteUserIconError = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .changeUserInfoAction.pending */ .PP.pending, state => {
    state.changeUserInfoLoading = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .changeUserInfoAction.fulfilled */ .PP.fulfilled, state => {
    state.changeUserInfoLoading = false;
    state.changeUserInfoDone = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .changeUserInfoAction.rejected */ .PP.rejected, state => {
    state.changeUserInfoLoading = false;
    state.changeUserInfoError = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .changeUserPasswordAction.pending */ .Af.pending, state => {
    state.changeUserPasswordLoading = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .changeUserPasswordAction.fulfilled */ .Af.fulfilled, state => {
    state.changeUserPasswordLoading = false;
    state.changeUserPasswordDone = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .changeUserPasswordAction.rejected */ .Af.rejected, state => {
    state.changeUserPasswordLoading = false;
    state.changeUserPasswordError = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .followUserAction.pending */ .ZU.pending, state => {
    state.followUserLoading = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .followUserAction.fulfilled */ .ZU.fulfilled, state => {
    state.followUserLoading = false;
    state.followUserDone = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .followUserAction.rejected */ .ZU.rejected, state => {
    state.followUserLoading = false;
    state.followUserError = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .unfollowUserAction.pending */ .Is.pending, state => {
    state.unfollowUserLoading = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .unfollowUserAction.fulfilled */ .Is.fulfilled, state => {
    state.unfollowUserLoading = false;
    state.unfollowUserDone = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .unfollowUserAction.rejected */ .Is.rejected, state => {
    state.unfollowUserLoading = false;
    state.unfollowUserError = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .withdrawalUserAction.pending */ .h_.pending, state => {
    state.withdrawalUserLoading = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .withdrawalUserAction.fulfilled */ .h_.fulfilled, state => {
    state.withdrawalUserLoading = false;
    state.withdrawalUserDone = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .withdrawalUserAction.rejected */ .h_.rejected, state => {
    state.withdrawalUserLoading = false;
    state.withdrawalUserError = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .readNoticeAction.pending */ .Bn.pending, state => {
    state.readNoticeLoading = true;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .readNoticeAction.fulfilled */ .Bn.fulfilled, (state, action) => {
    state.readNoticeLoading = false;
    state.readNoticeDone = true;
    state.user = action.payload.data;
  }).addCase(actions_user__WEBPACK_IMPORTED_MODULE_1__/* .readNoticeAction.rejected */ .Bn.rejected, state => {
    state.readNoticeLoading = false;
    state.readNoticeError = true;
  })
});

/***/ })

};
;