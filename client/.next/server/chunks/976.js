"use strict";
exports.id = 976;
exports.ids = [976];
exports.modules = {

/***/ 9926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Comments_CommentForm)
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
;// CONCATENATED MODULE: ./components/Comments/CommentForm/styles.tsx


const CommentFormWrapper = base_default()("div",  true ? {
  target: "et4i3nc0"
} : 0)("padding-top:1rem;padding-bottom:1rem; .comment-form-main{border-radius:1rem;--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));padding:0.5rem; transition:0.25s all;}.comment-input{display:flex;.icon{margin-right:0.7rem;img{width:2.5rem;height:2.5rem;border-radius:9999px;;}}textarea{cursor:pointer;&:focus{cursor:inherit;}}}.comment-submit-wrapper{overflow:hidden;div{", (0,config/* FLEX_STYLE */.Yk)("flex-end", "center"), ";button{border-radius:0.375rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));};}}}" + ( true ? "" : 0));
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "react-textarea-autosize"
var external_react_textarea_autosize_ = __webpack_require__(3556);
var external_react_textarea_autosize_default = /*#__PURE__*/__webpack_require__.n(external_react_textarea_autosize_);
// EXTERNAL MODULE: ./hooks/useInput.ts
var useInput = __webpack_require__(8981);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./slices/main.ts + 1 modules
var main = __webpack_require__(3640);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./components/Comments/CommentForm/index.tsx













const CommentForm = ({
  isStory,
  revalidateComments
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    query
  } = (0,router_.useRouter)();
  const {
    user
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const [content, onChangeContent, setContent] = (0,useInput/* default */.Z)("");
  const {
    0: onCommentForm,
    1: setOnCommentForm
  } = (0,external_react_.useState)(false);
  const onSubmitComment = (0,external_react_.useCallback)(() => {
    if (content === "" || !(content !== null && content !== void 0 && content.trim())) {
      (0,config/* toastErrorMessage */.p4)("댓글을 입력해주세요.");
      return;
    }

    if (!user) {
      (0,config/* toastErrorMessage */.p4)("로그인이 필요합니다.");
      return;
    }

    let form = {
      content
    };

    if (isStory) {
      form["storyId"] = parseInt(query === null || query === void 0 ? void 0 : query.storyId);
    } else {
      form["momentId"] = parseInt(query === null || query === void 0 ? void 0 : query.momentId);
    }

    external_axios_default().post("/comment", form, {
      withCredentials: true
    }).then(() => {
      revalidateComments();
      (0,config/* toastSuccessMessage */.bi)("댓글을 성공적으로 작성했습니다.");
      setContent("");
    }).catch(error => {
      (0,config/* toastSuccessMessage */.bi)(error);
      throw error;
    });
  }, [content, query, user, isStory]);
  const onClickCommentCancle = (0,external_react_.useCallback)(() => {
    setOnCommentForm(false);
    setContent("");
  }, []);
  const onClickCommentForm = (0,external_react_.useCallback)(() => {
    if (!user) {
      (0,config/* toastErrorMessage */.p4)("로그인이 필요합니다.");
      dispatch(main/* mainSlice.actions.toggleLoginModal */.P.actions.toggleLoginModal());
      return;
    }

    setOnCommentForm(true);
  }, [user]);
  return jsx_runtime_.jsx(CommentFormWrapper, {
    children: (0,jsx_runtime_.jsxs)("div", {
      style: onCommentForm ? {
        background: config/* WHITE_COLOR */.Y,
        boxShadow: "0px 0px 5px rgba(0,0,0,0.15)"
      } : {},
      className: "comment-form-main",
      children: [(0,jsx_runtime_.jsxs)("div", {
        style: onCommentForm ? {
          marginBottom: ".5rem"
        } : {},
        onClick: onClickCommentForm,
        className: "comment-input",
        children: [jsx_runtime_.jsx("div", {
          className: "icon",
          children: jsx_runtime_.jsx("img", {
            src: user ? user.icon : config/* DEFAULT_ICON_URL */.u5,
            alt: "user-icon"
          })
        }), jsx_runtime_.jsx((external_react_textarea_autosize_default()), {
          placeholder: user ? "댓글 작성하기." : "로그인이 필요합니다.",
          disabled: user ? false : true,
          value: content,
          onChange: onChangeContent
        })]
      }), jsx_runtime_.jsx("div", {
        className: "comment-submit-wrapper",
        children: (0,jsx_runtime_.jsxs)("div", {
          className: onCommentForm ? "drop-down" : "roll-up",
          children: [jsx_runtime_.jsx("button", {
            onClick: onSubmitComment,
            children: "\uCF54\uBA58\uD2B8"
          }), jsx_runtime_.jsx("button", {
            onClick: onClickCommentCancle,
            children: "\uCDE8\uC18C"
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const Comments_CommentForm = (/*#__PURE__*/(0,external_react_.memo)(CommentForm));

/***/ }),

/***/ 3943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Comments_Comment)
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
;// CONCATENATED MODULE: ./components/Comments/Comment/styles.tsx


const CommentWrapper = base_default()("div",  true ? {
  target: "ewutdbw0"
} : 0)("padding-top:1rem;padding-bottom:1rem; .comment-main{cursor:pointer;padding-right:2rem;padding-left:0.5rem;position:relative; transition:0.3s all;.btn-wrapper{position:absolute;right:0px; top:0.25rem;a{border-radius:9999px;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem;:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));} .count{padding-left:0.25rem;}}.liked{.anticon{color:", config/* RED_COLOR */.Ss, ";}}}}.more-subComment{cursor:pointer; padding:1rem 0.5rem 0 3.7rem;", (0,config/* FLEX_STYLE */.Yk)("flex-start", "center"), ";.count{font-size:0.875rem;line-height:1.25rem;margin-right:0.25rem;font-weight:700; color:", config/* BLUE_COLOR */.vX, ";}.more-subComment-btn{font-size:0.875rem;line-height:1.25rem;padding:0px; .anticon{font-size:0.9rem;margin-left:0.5rem;}}}" + ( true ? "" : 0));
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./hooks/useToggle.ts
var useToggle = __webpack_require__(3552);
// EXTERNAL MODULE: ./components/NameSpace.tsx + 1 modules
var NameSpace = __webpack_require__(3265);
// EXTERNAL MODULE: ./components/ConfirmToastify.tsx
var ConfirmToastify = __webpack_require__(6243);
;// CONCATENATED MODULE: ./components/Comments/SubComment/styles.tsx


const SubCommentWrapper = base_default()("div",  true ? {
  target: "e1esapgv0"
} : 0)("padding:1rem 2rem 1rem 3.7rem;position:relative;.delete-btn{position:absolute;top:0.5rem;right:0;border-radius:50%;padding:0.5rem;&:hover{background:", config/* GRAY_COLOR */.eR, ";}}.icon{img{width:2rem;height:2rem;}}" + ( true ? "" : 0));
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./components/Comments/SubComment/index.tsx












const SubComment = ({
  subComment,
  revalidateComments
}) => {
  const {
    user
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    0: isOwner,
    1: setIsOwner
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if ((user === null || user === void 0 ? void 0 : user.id) === (subComment === null || subComment === void 0 ? void 0 : subComment.user.id)) {
      setIsOwner(true);
    }
  }, [user, subComment]);
  const onClickConfirmDelete = (0,external_react_.useCallback)(() => {
    if (user && isOwner) {
      external_axios_default().delete(`/comment/subComment/${subComment === null || subComment === void 0 ? void 0 : subComment.id}`).then(() => {
        revalidateComments();
        (0,config/* toastSuccessMessage */.bi)("답글을 성공적으로 삭제했습니다.");
      }).catch(error => {
        (0,config/* toastErrorMessage */.p4)(error);
        throw error;
      });
    }
  }, [user, isOwner, subComment]);
  return (0,jsx_runtime_.jsxs)(SubCommentWrapper, {
    children: [jsx_runtime_.jsx(NameSpace/* default */.Z, {
      user: subComment === null || subComment === void 0 ? void 0 : subComment.user,
      date: subComment === null || subComment === void 0 ? void 0 : subComment.createdAt,
      comment: subComment === null || subComment === void 0 ? void 0 : subComment.content
    }), isOwner && jsx_runtime_.jsx("a", {
      className: "delete-btn",
      onClick: () => {
        (0,ConfirmToastify/* toastConfirmMessage */.u)(onClickConfirmDelete, "이 답글을 삭제할까요?", "삭제해주세요.");
      },
      children: jsx_runtime_.jsx(icons_.DeleteOutlined, {})
    })]
  });
};

/* harmony default export */ const Comments_SubComment = (/*#__PURE__*/(0,external_react_.memo)(SubComment));
;// CONCATENATED MODULE: ./components/Comments/SubCommentForm/styles.tsx


const SubCommentFormWrapper = base_default()("div",  true ? {
  target: "e986psp0"
} : 0)("padding:1rem 0 0 3.7rem;transition:0.3s all;", (0,config/* FLEX_STYLE */.Yk)("flex-start", "center"), ";.icon{img{width:2rem;border-radius:9999px;margin-right:0.5rem;;}}button{width:6rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));border-radius:0.375rem;margin-left:0.5rem;:hover{--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));};}" + ( true ? "" : 0));
// EXTERNAL MODULE: ./hooks/useInput.ts
var useInput = __webpack_require__(8981);
;// CONCATENATED MODULE: ./components/Comments/SubCommentForm/index.tsx










const SubCommentForm = ({
  commentId,
  revalidateComments
}) => {
  const [content, onChangeContent, setContent] = (0,useInput/* default */.Z)("");
  const {
    user
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const onSubmitSubComment = (0,external_react_.useCallback)(() => {
    if (content === "" || !(content !== null && content !== void 0 && content.trim())) {
      (0,config/* toastErrorMessage */.p4)("내용을 적어주세요");
      return;
    }

    if (!user) {
      (0,config/* toastErrorMessage */.p4)("로그인이 필요합니다.");
      return;
    }

    let form = {
      content,
      commentId
    };
    external_axios_default().post("/comment/subComment", form).then(() => {
      revalidateComments();
      (0,config/* toastSuccessMessage */.bi)("답글을 성공적으로 작성했습니다.");
      setContent("");
    }).catch(error => {
      (0,config/* toastSuccessMessage */.bi)(error);
      throw error;
    });
  }, [commentId, content]);
  return (0,jsx_runtime_.jsxs)(SubCommentFormWrapper, {
    children: [jsx_runtime_.jsx("div", {
      className: "icon",
      children: user ? jsx_runtime_.jsx("img", {
        src: user.icon,
        alt: "user_icon"
      }) : jsx_runtime_.jsx("img", {
        src: config/* DEFAULT_ICON_URL */.u5,
        alt: "user_icon"
      })
    }), jsx_runtime_.jsx("input", {
      placeholder: user ? "답글 작성하기." : "로그인이 필요합니다.",
      value: content,
      onChange: onChangeContent
    }), jsx_runtime_.jsx("button", {
      disabled: user ? false : true,
      onClick: onSubmitSubComment,
      children: "\uB2F5\uC7A5"
    })]
  });
};

/* harmony default export */ const Comments_SubCommentForm = (/*#__PURE__*/(0,external_react_.memo)(SubCommentForm));
// EXTERNAL MODULE: ./actions/user.ts
var actions_user = __webpack_require__(5145);
;// CONCATENATED MODULE: ./components/Comments/Comment/index.tsx















const Comment = ({
  comment,
  revalidateComments
}) => {
  var _comment$likedUser, _comment$likedUser2, _comment$subComments2, _comment$subComments3, _comment$subComments4;

  const dispatch = (0,external_react_redux_.useDispatch)();
  const [onSubCommentForm, onChangeSubCommentForm, setSubCommentForm] = (0,useToggle/* default */.Z)(false);
  const [onSubCommentList, onChangeSubCommentList, setSubCommentList] = (0,useToggle/* default */.Z)(true);
  const {
    user
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    0: liked,
    1: setLiked
  } = (0,external_react_.useState)(false);
  const {
    0: isOwner,
    1: setIsOwner
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if ((user === null || user === void 0 ? void 0 : user.id) === (comment === null || comment === void 0 ? void 0 : comment.user.id)) {
      setIsOwner(true);
    }

    if (user) {
      var _user$likeComment;

      if ((_user$likeComment = user.likeComment) !== null && _user$likeComment !== void 0 && _user$likeComment.find(v => v.commentId === (comment === null || comment === void 0 ? void 0 : comment.id))) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }
  }, [user, comment]);
  (0,external_react_.useEffect)(() => {
    var _comment$subComments;

    if ((comment === null || comment === void 0 ? void 0 : (_comment$subComments = comment.subComments) === null || _comment$subComments === void 0 ? void 0 : _comment$subComments.length) > 2) {
      setSubCommentList(false);
    }
  }, []);
  const onClickConfirmDelete = (0,external_react_.useCallback)(async () => {
    if (user && isOwner) {
      await external_axios_default().delete(`/comment/${comment === null || comment === void 0 ? void 0 : comment.id}`).then(() => {
        revalidateComments();
        (0,config/* toastSuccessMessage */.bi)("댓글을 성공적으로 삭제했습니다.");
      }).catch(error => {
        (0,config/* toastErrorMessage */.p4)(error);
        throw error;
      });
    }
  }, [user, isOwner, comment]);
  const onClickLikeOrDisLike = (0,external_react_.useCallback)(value => {
    if (!user) {
      (0,config/* toastErrorMessage */.p4)("로그인이 필요합니다.");
      return;
    }

    external_axios_default().patch(`/comment/${value}/${comment === null || comment === void 0 ? void 0 : comment.id}`).then(() => {
      if (value === "like") {
        (0,config/* toastSuccessMessage */.bi)("댓글 좋아요!💓");
      } else {
        (0,config/* toastSuccessMessage */.bi)("댓글 좋아요 취소💔");
      }

      revalidateComments();
      dispatch((0,actions_user/* getUserInfoAction */.pZ)());
    }).catch(error => {
      (0,config/* toastErrorMessage */.p4)(error);
      throw error;
    });
  }, [user, comment]);
  return (0,jsx_runtime_.jsxs)(CommentWrapper, {
    children: [(0,jsx_runtime_.jsxs)("div", {
      onClick: onChangeSubCommentForm,
      className: "comment-main",
      children: [jsx_runtime_.jsx(NameSpace/* default */.Z, {
        user: comment === null || comment === void 0 ? void 0 : comment.user,
        date: comment === null || comment === void 0 ? void 0 : comment.createdAt,
        comment: comment === null || comment === void 0 ? void 0 : comment.content
      }), (0,jsx_runtime_.jsxs)("div", {
        onClick: e => e.stopPropagation(),
        className: "btn-wrapper",
        children: [liked ? (0,jsx_runtime_.jsxs)("a", {
          className: "liked",
          onClick: () => onClickLikeOrDisLike("dislike"),
          children: [jsx_runtime_.jsx(icons_.HeartFilled, {}), jsx_runtime_.jsx("span", {
            className: "count",
            children: (comment === null || comment === void 0 ? void 0 : (_comment$likedUser = comment.likedUser) === null || _comment$likedUser === void 0 ? void 0 : _comment$likedUser.length) || 0
          })]
        }) : (0,jsx_runtime_.jsxs)("a", {
          onClick: () => onClickLikeOrDisLike("like"),
          children: [jsx_runtime_.jsx(icons_.HeartOutlined, {}), jsx_runtime_.jsx("span", {
            className: "count",
            children: (comment === null || comment === void 0 ? void 0 : (_comment$likedUser2 = comment.likedUser) === null || _comment$likedUser2 === void 0 ? void 0 : _comment$likedUser2.length) || 0
          })]
        }), isOwner && jsx_runtime_.jsx("a", {
          onClick: () => {
            (0,ConfirmToastify/* toastConfirmMessage */.u)(onClickConfirmDelete, "이 댓글을 삭제할까요?", "삭제해주세요.");
          },
          children: jsx_runtime_.jsx(icons_.DeleteOutlined, {})
        })]
      })]
    }), onSubCommentForm && jsx_runtime_.jsx(Comments_SubCommentForm, {
      revalidateComments: revalidateComments,
      commentId: comment === null || comment === void 0 ? void 0 : comment.id
    }), (comment === null || comment === void 0 ? void 0 : (_comment$subComments2 = comment.subComments) === null || _comment$subComments2 === void 0 ? void 0 : _comment$subComments2.length) > 2 && jsx_runtime_.jsx("div", {
      onClick: onChangeSubCommentList,
      className: "more-subComment",
      children: (0,jsx_runtime_.jsxs)("button", {
        className: "more-subComment-btn",
        children: [jsx_runtime_.jsx("span", {
          className: "count",
          children: comment === null || comment === void 0 ? void 0 : (_comment$subComments3 = comment.subComments) === null || _comment$subComments3 === void 0 ? void 0 : _comment$subComments3.length
        }), "\uAC1C\uC758 \uB2F5\uAE00", jsx_runtime_.jsx(icons_.DownCircleOutlined, {
          rotate: onSubCommentList ? 180 : 0
        })]
      })
    }), onSubCommentList && (comment === null || comment === void 0 ? void 0 : (_comment$subComments4 = comment.subComments) === null || _comment$subComments4 === void 0 ? void 0 : _comment$subComments4.map((v, i) => {
      return jsx_runtime_.jsx(Comments_SubComment, {
        revalidateComments: revalidateComments,
        subComment: v
      }, i);
    }))]
  });
};

/* harmony default export */ const Comments_Comment = (/*#__PURE__*/(0,external_react_.memo)(Comment));

/***/ }),

/***/ 8981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useInput(initialValue) {
  const {
    0: Value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  const handler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setValue(e.target.value);
  }, []);
  return [Value, handler, setValue];
}

/***/ }),

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

/***/ })

};
;