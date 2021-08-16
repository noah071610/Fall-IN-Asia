"use strict";
(() => {
var exports = {};
exports.id = 46;
exports.ids = [46];
exports.modules = {

/***/ 66:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _storyId_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
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
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./utils/fetcher.ts
var fetcher = __webpack_require__(4608);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: ./configureStore.ts + 1 modules
var configureStore = __webpack_require__(4603);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./actions/user.ts
var actions_user = __webpack_require__(5145);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: ./components/ConfirmToastify.tsx
var ConfirmToastify = __webpack_require__(6243);
// EXTERNAL MODULE: ./layout/PostLayout.tsx + 2 modules
var PostLayout = __webpack_require__(1296);
// EXTERNAL MODULE: ./sections/StoryPage/StoryArticleList.tsx
var StoryArticleList = __webpack_require__(3119);
// EXTERNAL MODULE: external "react-html-parser"
var external_react_html_parser_ = __webpack_require__(7795);
var external_react_html_parser_default = /*#__PURE__*/__webpack_require__.n(external_react_html_parser_);
// EXTERNAL MODULE: ./components/Post/PostThubnail.tsx
var PostThubnail = __webpack_require__(1072);
// EXTERNAL MODULE: ./components/Maps/CountryMap.tsx
var CountryMap = __webpack_require__(9617);
;// CONCATENATED MODULE: ./components/Post/PostProfile.tsx








const PostProfileWrapper = base_default()("section",  true ? {
  target: "e1hcrv8b0"
} : 0)("margin-top:8rem;margin-bottom:4rem;width:100%; ", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";.owner-info-wrapper{", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";flex-direction:column;width:40%;position:relative;;}.icon{cursor:pointer; img{width:5rem;height:5rem;border-radius:9999px;;}}.info{.name{margin-top:1rem;text-align:center;font-weight:700;;}.introduce{margin-top:0.75rem;font-size:0.75rem;line-height:1.5rem;text-align:center;;}}.links{margin-top:0.75rem; button{padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.375rem;padding-right:0.375rem;border-radius:0.375rem;:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));};}}@media (max-width: ", config/* MD_SIZE */.SO, "){.owner-info-wrapper{width:80%;;}}@media (max-width: ", config/* SM_SIZE */.oe, "){.owner-info-wrapper{width:100%;;}}" + ( true ? "" : 0));

const PostProfile = ({
  story
}) => {
  var _story$user;

  const onClickGotoProfile = (0,external_react_.useCallback)(() => {
    router_default().push(`/me/${story.user.id}`);
  }, []);
  return jsx_runtime_.jsx(PostProfileWrapper, {
    children: (0,jsx_runtime_.jsxs)("div", {
      className: "owner-info-wrapper",
      children: [jsx_runtime_.jsx("span", {
        id: "user_info",
        className: "anchor-offset-controller"
      }), jsx_runtime_.jsx("div", {
        onClick: onClickGotoProfile,
        className: "icon",
        children: jsx_runtime_.jsx("img", {
          src: story !== null && story !== void 0 && (_story$user = story.user) !== null && _story$user !== void 0 && _story$user.icon ? story.user.icon : config/* DEFAULT_ICON_URL */.u5,
          alt: "user_icon"
        })
      }), (0,jsx_runtime_.jsxs)("div", {
        className: "info",
        children: [jsx_runtime_.jsx("h2", {
          className: "name",
          children: story === null || story === void 0 ? void 0 : story.user.name
        }), jsx_runtime_.jsx("p", {
          className: "introduce",
          children: story === null || story === void 0 ? void 0 : story.user.introduce
        })]
      }), jsx_runtime_.jsx("div", {
        className: "links",
        children: jsx_runtime_.jsx("button", {
          onClick: onClickGotoProfile,
          children: "\uD504\uB85C\uD544 \uAD6C\uACBD\uAC00\uAE30"
        })
      })]
    })
  });
};

/* harmony default export */ const Post_PostProfile = (/*#__PURE__*/(0,external_react_.memo)(PostProfile));
;// CONCATENATED MODULE: ./components/Post/PostPagination/styles.tsx


const PostPaginationWrapper = base_default()("section",  true ? {
  target: "eyhyfgx0"
} : 0)({
  "width": "66.666667%",
  "marginLeft": "auto",
  "marginRight": "auto",
  "marginTop": "1rem",
  "marginBottom": "5rem"
}, " .ant-divider{margin:1rem 0;}.pagination{", (0,config/* GRID_STYLE */.U6)("1rem", "1fr 1fr"), ";.side-post{transition:0.3s all;", {
  "cursor": "pointer",
  "--tw-shadow": "0px 0px 5px rgba(0, 0, 0, 0.15)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
}, " &:hover{", {
  "--tw-shadow": "0px 0px 15px rgba(0, 0, 0, 0.3)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
}, " img{transform:scale(1.1);}}.image-wrapper{", {
  "overflow": "hidden"
}, " img{transition:0.3s all;", {
  "width": "100%"
}, " height:180px;}}.post-desc{", {
  "width": "100%",
  "padding": "1.25rem"
}, " div{h3{", {
  "fontSize": "0.75rem",
  "lineHeight": "1rem",
  "marginBottom": "0.5rem"
}, ";}h4{", (0,config/* ELLIPSIS_STYLE */.kA)(1.7, 2, "46px"), " ", {
  "marginBottom": "0.25rem",
  "fontWeight": "700"
}, ";}}}}.prev-post{.post-desc{", (0,config/* FLEX_STYLE */.Yk)("flex-start", "center"), ";h3,h4{", {
  "textAlign": "left"
}, ";}.anticon{", {
  "marginRight": "0.75rem"
}, ";}}}.next-post{.post-desc{", (0,config/* FLEX_STYLE */.Yk)("flex-end", "center"), ";h3,h4{", {
  "textAlign": "right"
}, ";}.anticon{", {
  "marginLeft": "0.75rem"
}, ";}}}}@media (max-width: 750px){", {
  "width": "100%"
}, " .pagination{gap:0.5rem;}}@media (max-width: 480px){.pagination{", {
  "display": "block"
}, " .side-post{", (0,config/* GRID_STYLE */.U6)("", "1fr 1.5fr"), ";.post-desc{", {
  "padding": "0.5rem"
}, ";}.image-wrapper{img{", {
  "height": "8rem"
}, ";}}}.prev-post{", {
  "marginBottom": "0.5rem"
}, " direction:rtl;.post-desc{flex-direction:row-reverse;}}}}" + ( true ? "" : 0));
;// CONCATENATED MODULE: ./components/Post/PostPagination/index.tsx










const PostPagination = ({
  userId
}) => {
  var _sidePosts$prevPost3, _sidePosts$prevPost4, _sidePosts$nextPost3, _sidePosts$nextPost4;

  const {
    query
  } = (0,router_.useRouter)();
  const {
    data: sidePosts
  } = external_swr_default()(`/story/side/${query === null || query === void 0 ? void 0 : query.storyId}/${userId}`, fetcher/* default */.Z, config/* noRevalidate */.nb);
  const onClickStoryBtn = (0,external_react_.useCallback)((id, code) => {
    router_default().push(`/story/${code}/${id}`);
  }, []);
  return jsx_runtime_.jsx(PostPaginationWrapper, {
    children: (0,jsx_runtime_.jsxs)("div", {
      className: "pagination",
      children: [(0,jsx_runtime_.jsxs)("div", {
        style: sidePosts !== null && sidePosts !== void 0 && sidePosts.prevPost ? {} : {
          background: config/* GRAY_COLOR */.eR
        },
        onClick: () => {
          var _sidePosts$prevPost, _sidePosts$prevPost2;

          (sidePosts === null || sidePosts === void 0 ? void 0 : sidePosts.prevPost) && onClickStoryBtn(sidePosts === null || sidePosts === void 0 ? void 0 : (_sidePosts$prevPost = sidePosts.prevPost) === null || _sidePosts$prevPost === void 0 ? void 0 : _sidePosts$prevPost.id, sidePosts === null || sidePosts === void 0 ? void 0 : (_sidePosts$prevPost2 = sidePosts.prevPost) === null || _sidePosts$prevPost2 === void 0 ? void 0 : _sidePosts$prevPost2.code);
        },
        className: "side-post prev-post",
        children: [jsx_runtime_.jsx("div", {
          className: "image-wrapper",
          children: jsx_runtime_.jsx("img", {
            src: (sidePosts === null || sidePosts === void 0 ? void 0 : (_sidePosts$prevPost3 = sidePosts.prevPost) === null || _sidePosts$prevPost3 === void 0 ? void 0 : _sidePosts$prevPost3.thumbnail) || config/* NO_IMAGE_URL */.Q7,
            alt: "pagination_image"
          })
        }), (0,jsx_runtime_.jsxs)("div", {
          className: "post-desc",
          children: [jsx_runtime_.jsx(icons_.LeftOutlined, {}), (0,jsx_runtime_.jsxs)("div", {
            children: [jsx_runtime_.jsx("h3", {
              children: "\uC774\uC804\uC5F0\uB300\uAE30"
            }), jsx_runtime_.jsx("h4", {
              className: "post-title",
              children: (sidePosts === null || sidePosts === void 0 ? void 0 : (_sidePosts$prevPost4 = sidePosts.prevPost) === null || _sidePosts$prevPost4 === void 0 ? void 0 : _sidePosts$prevPost4.title) || "연대기가 없습니다."
            })]
          })]
        })]
      }), (0,jsx_runtime_.jsxs)("div", {
        style: sidePosts !== null && sidePosts !== void 0 && sidePosts.nextPost ? {} : {
          background: config/* GRAY_COLOR */.eR
        },
        onClick: () => {
          var _sidePosts$nextPost, _sidePosts$nextPost2;

          (sidePosts === null || sidePosts === void 0 ? void 0 : sidePosts.nextPost) && onClickStoryBtn(sidePosts === null || sidePosts === void 0 ? void 0 : (_sidePosts$nextPost = sidePosts.nextPost) === null || _sidePosts$nextPost === void 0 ? void 0 : _sidePosts$nextPost.id, sidePosts === null || sidePosts === void 0 ? void 0 : (_sidePosts$nextPost2 = sidePosts.nextPost) === null || _sidePosts$nextPost2 === void 0 ? void 0 : _sidePosts$nextPost2.code);
        },
        className: "side-post next-post",
        children: [jsx_runtime_.jsx("div", {
          className: "image-wrapper",
          children: jsx_runtime_.jsx("img", {
            src: (sidePosts === null || sidePosts === void 0 ? void 0 : (_sidePosts$nextPost3 = sidePosts.nextPost) === null || _sidePosts$nextPost3 === void 0 ? void 0 : _sidePosts$nextPost3.thumbnail) || config/* NO_IMAGE_URL */.Q7,
            alt: "pagination_image"
          })
        }), (0,jsx_runtime_.jsxs)("div", {
          className: "post-desc",
          children: [(0,jsx_runtime_.jsxs)("div", {
            children: [jsx_runtime_.jsx("h3", {
              children: "\uB2E4\uC74C\uC5F0\uB300\uAE30"
            }), jsx_runtime_.jsx("h4", {
              className: "post-title",
              children: (sidePosts === null || sidePosts === void 0 ? void 0 : (_sidePosts$nextPost4 = sidePosts.nextPost) === null || _sidePosts$nextPost4 === void 0 ? void 0 : _sidePosts$nextPost4.title) || "연대기가 없습니다."
            })]
          }), jsx_runtime_.jsx(icons_.RightOutlined, {})]
        })]
      })]
    })
  });
};

/* harmony default export */ const Post_PostPagination = (/*#__PURE__*/(0,external_react_.memo)(PostPagination));
;// CONCATENATED MODULE: ./components/Post/PostComment/styles.tsx


const PostCommentWrapper = base_default()("section",  true ? {
  target: "ejofb4c0"
} : 0)("position:relative;.comment-header{margin-top:3rem; ", (0,config/* FLEX_STYLE */.Yk)("flex-start", "center"), ";font-size:1.25rem;line-height:1.75rem;font-weight:700; li{padding:0.5rem;cursor:pointer;:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));}border-radius:0.75rem; .anticon,.count{margin-right:0.5rem;}}.liked{.anticon{color:", config/* RED_COLOR */.Ss, ";}}}" + ( true ? "" : 0));
// EXTERNAL MODULE: ./components/Comments/CommentForm/index.tsx + 1 modules
var CommentForm = __webpack_require__(9926);
// EXTERNAL MODULE: ./components/Comments/Comment/index.tsx + 5 modules
var Comment = __webpack_require__(3943);
;// CONCATENATED MODULE: ./components/Post/PostComment/index.tsx














const PostComment = ({
  story,
  revalidateStory
}) => {
  var _story$likedUser;

  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: liked,
    1: setLiked
  } = (0,external_react_.useState)(false);
  const {
    user
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    data: comments,
    revalidate: revalidateComments
  } = external_swr_default()(`/comment/${story === null || story === void 0 ? void 0 : story.id}?postType=story`, fetcher/* default */.Z, config/* noRevalidate */.nb);
  (0,external_react_.useEffect)(() => {
    if (user && story) {
      var _user$likeStory;

      if (user !== null && user !== void 0 && (_user$likeStory = user.likeStory) !== null && _user$likeStory !== void 0 && _user$likeStory.find(v => v.storyId === (story === null || story === void 0 ? void 0 : story.id))) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }
  }, [user, story]);
  const onClickLikeOrDisLike = (0,external_react_.useCallback)(value => {
    if (!user) {
      (0,config/* toastErrorMessage */.p4)("로그인이 필요합니다.");
      return;
    }

    external_axios_default().patch(`/story/${value}/${story === null || story === void 0 ? void 0 : story.id}`).then(() => {
      if (value === "like") {
        (0,config/* toastSuccessMessage */.bi)("좋아요!💓");
      } else {
        (0,config/* toastSuccessMessage */.bi)("좋아요 취소💔");
      }

      revalidateStory();
      dispatch((0,actions_user/* getUserInfoAction */.pZ)());
    }).catch(error => {
      (0,config/* toastErrorMessage */.p4)(error);
      throw error;
    });
  }, [user, story]);
  return (0,jsx_runtime_.jsxs)(PostCommentWrapper, {
    children: [jsx_runtime_.jsx("span", {
      id: "comment",
      className: "anchor-offset-controller"
    }), (0,jsx_runtime_.jsxs)("ul", {
      className: "comment-header",
      children: [(0,jsx_runtime_.jsxs)("li", {
        children: [jsx_runtime_.jsx(icons_.CommentOutlined, {}), jsx_runtime_.jsx("span", {
          className: "count",
          children: comments === null || comments === void 0 ? void 0 : comments.length
        }), jsx_runtime_.jsx("span", {
          children: "\uB313\uAE00"
        })]
      }), (0,jsx_runtime_.jsxs)("li", {
        onClick: liked ? () => onClickLikeOrDisLike("dislike") : () => onClickLikeOrDisLike("like"),
        className: liked ? "liked" : "",
        children: [liked ? jsx_runtime_.jsx(icons_.HeartFilled, {}) : jsx_runtime_.jsx(icons_.HeartOutlined, {}), jsx_runtime_.jsx("span", {
          className: "count",
          children: story === null || story === void 0 ? void 0 : (_story$likedUser = story.likedUser) === null || _story$likedUser === void 0 ? void 0 : _story$likedUser.length
        }), jsx_runtime_.jsx("span", {
          children: "\uC88B\uC544\uC694"
        })]
      })]
    }), jsx_runtime_.jsx(CommentForm/* default */.Z, {
      revalidateComments: revalidateComments,
      isStory: true
    }), comments === null || comments === void 0 ? void 0 : comments.map((v, i) => {
      return jsx_runtime_.jsx(Comment/* default */.Z, {
        revalidateComments: revalidateComments,
        comment: v
      }, i);
    })]
  });
};

/* harmony default export */ const Post_PostComment = (PostComment);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/story/[code]/[storyId]/index.tsx





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























const StoryPostWrapper = base_default()("div",  true ? {
  target: "e1617oay0"
} : 0)("padding-top:6rem;.story-manage-wrapper{", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";button{padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));}border-radius:0.75rem; .anticon{margin-bottom:0.5rem;font-size:1.5rem;line-height:2rem; ", (0,config/* FLEX_STYLE */.Yk)("center", "center"), ";}}}.post-content{padding-bottom:4rem;position:relative;;}.main-story-article{user-select:none;}" + ( true ? "" : 0));

const index = ({
  initialStories,
  initialStory
}) => {
  const {
    query
  } = (0,router_.useRouter)();
  const {
    0: uuid,
    1: setUUID
  } = (0,external_react_.useState)("");
  const {
    0: isOwner,
    1: setIsOwner
  } = (0,external_react_.useState)(false);
  const {
    user
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    data: story,
    revalidate: revalidateStory
  } = external_swr_default()(`/story/${query === null || query === void 0 ? void 0 : query.code}/${query === null || query === void 0 ? void 0 : query.storyId}?uuid=${uuid}`, fetcher/* default */.Z, _objectSpread({
    initialData: initialStory
  }, config/* noRevalidate */.nb));
  const {
    data: stories,
    setSize
  } = (0,external_swr_.useSWRInfinite)(index => `/story?page=${index + 1}&filter=${(query === null || query === void 0 ? void 0 : query.filter) || ""}`, fetcher/* default */.Z, _objectSpread({
    initialData: initialStories
  }, config/* noRevalidate */.nb));
  (0,external_react_.useEffect)(() => {
    if (localStorage.getItem("client_identifier")) {
      setUUID(localStorage.getItem("client_identifier"));
    }
  }, []);
  (0,external_react_.useEffect)(() => {
    if (story) {
      let contentHeaders = document.querySelectorAll(".post-content > h1 , .post-content > h2 ,.post-content > h3");
      contentHeaders.forEach((v, i) => {
        const span = document.createElement("span");
        span.setAttribute("id", `header_${i + 1}`);
        span.classList.add("anchor-offset-controller");
        v.classList.add("anchor-offset-parent");
        v.appendChild(span);
      });
    }
  }, [story]);
  (0,external_react_.useEffect)(() => {
    var _story$user;

    if ((user === null || user === void 0 ? void 0 : user.id) === (story === null || story === void 0 ? void 0 : (_story$user = story.user) === null || _story$user === void 0 ? void 0 : _story$user.id)) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [user, story]);
  const onClickEditBtn = (0,external_react_.useCallback)(() => {
    if (user && isOwner) {
      router_default().push(`/story/post?code=${story === null || story === void 0 ? void 0 : story.code}&storyId=${story === null || story === void 0 ? void 0 : story.id}`);
    }
  }, [user, isOwner]);
  const onClickConfirmDelete = (0,external_react_.useCallback)(() => {
    if (user && isOwner) {
      external_axios_default().delete(`/story/${story === null || story === void 0 ? void 0 : story.id}`).then(() => {
        (0,config/* toastSuccessMessage */.bi)("연대기를 성공적으로 삭제했습니다.");
        router_default().push(`/story`);
      }).catch(error => {
        (0,config/* toastErrorMessage */.p4)(error);
        throw error;
      });
    }
  }, [user, isOwner, story]);
  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [jsx_runtime_.jsx((head_default()), {
      children: (0,jsx_runtime_.jsxs)("title", {
        children: [story === null || story === void 0 ? void 0 : story.title, " - Fall IN Asia"]
      })
    }), jsx_runtime_.jsx(StoryPostWrapper, {
      children: (0,jsx_runtime_.jsxs)(PostLayout/* default */.Z, {
        children: [story && (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [jsx_runtime_.jsx(PostThubnail/* default */.Z, {
            story: story
          }), isOwner && (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [jsx_runtime_.jsx("h2", {
              className: "main-title",
              children: "\uC5F0\uB300\uAE30 \uAD00\uB9AC (\uC791\uC131\uC790 \uC804\uC6A9)"
            }), (0,jsx_runtime_.jsxs)("div", {
              className: "story-manage-wrapper",
              children: [(0,jsx_runtime_.jsxs)("button", {
                onClick: onClickEditBtn,
                className: "edit-btn",
                children: [jsx_runtime_.jsx(icons_.EditOutlined, {}), "\uC5F0\uB300\uAE30 \uC218\uC815"]
              }), (0,jsx_runtime_.jsxs)("button", {
                onClick: () => (0,ConfirmToastify/* toastConfirmMessage */.u)(onClickConfirmDelete, "정말 이 연대기를 삭제할까요?", "삭제해주세요."),
                className: "delete-btn",
                children: [jsx_runtime_.jsx(icons_.DeleteOutlined, {}), "\uC5F0\uB300\uAE30 \uC0AD\uC81C"]
              })]
            })]
          }), (0,jsx_runtime_.jsxs)("h2", {
            className: "main-title",
            children: ["\uC5F0\uB300\uAE30 \uC704\uCE58 ", jsx_runtime_.jsx("span", {
              children: story === null || story === void 0 ? void 0 : story.region
            })]
          }), jsx_runtime_.jsx(CountryMap/* default */.Z, {
            lat: story === null || story === void 0 ? void 0 : story.lat,
            lng: story === null || story === void 0 ? void 0 : story.lng
          }), jsx_runtime_.jsx(external_antd_.Divider, {}), (0,jsx_runtime_.jsxs)("article", {
            className: "main-story-article",
            children: [jsx_runtime_.jsx("span", {
              id: "main_post",
              className: "anchor-offset-controller"
            }), external_react_html_parser_default()(story === null || story === void 0 ? void 0 : story.content)]
          }), jsx_runtime_.jsx(Post_PostProfile, {
            story: story
          }), jsx_runtime_.jsx(Post_PostPagination, {
            userId: story === null || story === void 0 ? void 0 : story.user.id
          }), jsx_runtime_.jsx(Post_PostComment, {
            revalidateStory: revalidateStory,
            story: story
          })]
        }), jsx_runtime_.jsx("div", {
          style: {
            height: "3rem"
          }
        }), jsx_runtime_.jsx(StoryArticleList/* default */.Z, {
          grid: 3,
          gap: "1rem",
          setSize: setSize,
          stories: stories
        })]
      })
    })]
  });
};

const getServerSideProps = configureStore/* wrapper.getServerSideProps */.Y.getServerSideProps(store => async ({
  req,
  params
}) => {
  const cookie = req ? req.headers.cookie : "";
  (external_axios_default()).defaults.headers.Cookie = "";

  if (req && cookie) {
    (external_axios_default()).defaults.headers.Cookie = cookie;
  }

  await store.dispatch((0,actions_user/* getUserInfoAction */.pZ)());
  const initialStory = await (0,fetcher/* default */.Z)(`/story/${params === null || params === void 0 ? void 0 : params.code}/${params === null || params === void 0 ? void 0 : params.storyId}`);
  let initialStories = await (0,fetcher/* default */.Z)(`/story?code=${params === null || params === void 0 ? void 0 : params.code}&page=1`);
  initialStories = [initialStories];
  return {
    props: {
      initialStory,
      initialStories
    }
  };
});
/* harmony default export */ const _storyId_ = (index);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [979,479,751,243,839,976,186,119], () => (__webpack_exec__(66)));
module.exports = __webpack_exports__;

})();