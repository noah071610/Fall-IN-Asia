"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 5655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4617);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3215);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2372);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(799);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(887);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var configureStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4603);
/* harmony import */ var actions_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5145);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
















const AboutPageWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div",  true ? {
  target: "e1j4ca5n0"
} : 0)("background:white;.layout{width:", config__WEBPACK_IMPORTED_MODULE_3__/* .LG_SIZE */ .PQ, ";h2{font-weight:bold;}padding-top:6rem;padding-bottom:4rem;margin-left:auto;margin-right:auto; .aboutme{padding-bottom:4rem;display:flex; gap:0 2rem;img{width:12rem;height:12rem;border-radius:9999px;;}h3{font-size:1.5rem;line-height:2rem;font-weight:700;margin-bottom:1.5rem;;}p{line-height:1.5rem;margin-bottom:1rem;;}ul{ li{margin-right:0.75rem; .anticon{font-size:1.5rem;line-height:2rem;--tw-text-opacity:1;color:rgba(209, 213, 219, var(--tw-text-opacity));;}&:hover{.anticon{--tw-text-opacity:1;color:rgba(107, 114, 128, var(--tw-text-opacity));;}}}}.aboutme-btn-wrapper{margin-top:1rem; ", (0,config__WEBPACK_IMPORTED_MODULE_3__/* .FLEX_STYLE */ .Yk)("center", "center"), ";button{margin-left:0.5rem;border-radius:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1.5rem;padding-right:1.5rem;;", (0,config__WEBPACK_IMPORTED_MODULE_3__/* .BORDER_THIN */ .h_)("border"), ";}}}.policy{line-height:2rem;;}}@media (max-width: ", config__WEBPACK_IMPORTED_MODULE_3__/* .LG_SIZE */ .PQ, "){.layout{width:100%;padding-left:1rem;padding-right:1rem;;}}@media (max-width: ", config__WEBPACK_IMPORTED_MODULE_3__/* .SM_SIZE */ .oe, "){.layout{.aboutme{display:block; .image-wrapper{", (0,config__WEBPACK_IMPORTED_MODULE_3__/* .FLEX_STYLE */ .Yk)("center", "center", "column"), ";margin-bottom:2rem;;}ul{", (0,config__WEBPACK_IMPORTED_MODULE_3__/* .FLEX_STYLE */ .Yk)("center", "center"), ";li{.anticon{", (0,config__WEBPACK_IMPORTED_MODULE_3__/* .FLEX_STYLE */ .Yk)("center", "center"), ";font-size:2.25rem;line-height:2.5rem;;}}}}.policy{line-height:1rem;font-size:0.75rem; h2{font-size:1rem;line-height:1.5rem;;}p{line-height:1.5rem;;}}}}" + ( true ? "" : 0));

const about = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    dispatch((0,actions_user__WEBPACK_IMPORTED_MODULE_10__/* .getUserInfoAction */ .pZ)());
  }, []);
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_11___default()), {
      children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "Fall IN Asia - About us"
      })
    }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AboutPageWrapper, {
      children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "layout",
        children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Divider, {
          style: {
            marginBottom: "2rem"
          },
          orientation: "left",
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            children: "About us"
          })
        }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
          className: "aboutme",
          children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "image-wrapper",
            children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "https://user-images.githubusercontent.com/74864925/127884325-018d43e0-881c-4d70-baa8-145fc9098514.jpg",
              alt: "profile-image"
            }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "aboutme-btn-wrapper",
              children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: () => next_router__WEBPACK_IMPORTED_MODULE_8___default().push("/news/post"),
                children: "\uAE30\uC0AC \uC62C\uB9AC\uAE30"
              })
            })]
          }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
              children: "\uC548\uB155\uD558\uC138\uC694. \uAC1C\uBC1C\uC790 \uC7A5\uD604\uC218 \uC785\uB2C8\uB2E4."
            }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              children: "\uAD00\uAD11\uD1B5\uC5ED\uC0AC \uAD6D\uAC00\uC790\uACA9\uC99D \uC601\uC5B4\uC640 \uC77C\uBCF8\uC5B4 2\uAC1C, \uAD6D\uC678\uC5EC\uD589\uC778\uC194\uC790 \uC790\uACA9\uC99D\uC744 \uBCF4\uC720\uC911\uC774\uBA70 \uD1B5\uC5ED\uAC00\uC774\uB4DC \uBC0F \uD638\uD154 \uC9C0\uBC30\uC778\uC73C\uB85C \uC77C\uD588\uC5C8\uACE0 \uC9C0\uAE08\uC740 \uC5EC\uD589\uC744 \uB108\uBB34 \uC0AC\uB791\uD558\uB294 \uAC1C\uBC1C\uC790\uB85C \uC0B4\uC544\uAC00\uACE0\uC788\uC5B4\uC694!"
            }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
              children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  href: "mailto:noah071610@naver.com",
                  children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                    className: "anticon",
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faEnvelope
                  })
                })
              }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  href: "https://www.instagram.com/salmonchobab/",
                  target: "_blac\r ",
                  rel: "noreferrer",
                  children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.InstagramFilled, {})
                })
              }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  href: "https://github.com/noah071610",
                  rel: "noreferrer",
                  children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.GithubFilled, {})
                })
              })]
            })]
          })]
        }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Divider, {
          style: {
            marginBottom: "2rem"
          },
          orientation: "left",
          children: _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            id: "policy",
            children: "Policy"
          })
        }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
          className: "policy",
          children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            children: "\uC81C1\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBAA9\uC801) \uC7A5\uD604\uC218('www.fallinasia.com'\uC774\uD558 'Fall IN Asia') \uC740(\uB294) \uB2E4\uC74C\uC758 \uBAA9\uC801\uC744 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uCC98\uB9AC\uD558\uACE0 \uC788\uB294 \uAC1C\uC778\uC815\uBCF4\uB294 \uB2E4\uC74C\uC758 \uBAA9\uC801 \uC774\uC678\uC758 \uC6A9\uB3C4\uB85C\uB294 \uC774\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA70 \uC774\uC6A9 \uBAA9\uC801\uC774 \uBCC0\uACBD\uB418\uB294 \uACA8\uC6B0\uC5D0\uB294 \u300C\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\u300D \uC81C18\uC870\uC5D0 \uB530\uB77C \uBCC4\uB3C4\uC758 \uB3D9\uC758\uB97C \uBC1B\uB294 \uB4F1 \uD544\uC694\uD55C \uC870\uCE58\uB97C \uC774\uD589\uD560 \uC608\uC815\uC785\uB2C8\uB2E4."
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), "1. \uD648\uD398\uC774\uC9C0 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uAD00\uB9AC \uB313\uAE00 \uBC0F \uC88B\uC544\uC694 \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.", " ", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            children: "\uC81C2\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBC0F \uBCF4\uC720 \uAE30\uAC04)"
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), " ", (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            children: ["\u2460", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
              children: "\uC7A5\uD604\uC218"
            }), "\uC740(\uB294) \uBC95\uB839\uC5D0 \uB530\uB978 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\xB7\uC774\uC6A9\uAE30\uAC04 \uB610\uB294 \uC815\uBCF4\uC8FC\uCCB4\uB85C\uBD80\uD130 \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1 \uC2DC\uC5D0 \uB3D9\uC758\uBC1B\uC740 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\xB7\uC774\uC6A9\uAE30\uAC04 \uB0B4\uC5D0\uC11C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\xB7\uBCF4\uC720\uD569\uB2C8\uB2E4. ", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), "\u2461 \uAC01\uAC01\uC758 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC \uBC0F \uBCF4\uC720 \uAE30\uAC04\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4. ", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), "1.\uD648\uD398\uC774\uC9C0 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uAD00\uB9AC ", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), "\uD648\uD398\uC774\uC9C0 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uAD00\uC640 \uAD00\uB828\uD55C \uAC1C\uC778\uC815\uBCF4\uB294 \uC218\uC9D1.\uC774\uC6A9\uC5D0 \uAD00\uD55C \uC815\uBCF4\uB294", " ", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
              style: {
                color: "red"
              },
              children: "\uC5B8\uC81C\uB4E0\uC9C0 \uC9C0\uCCB4\uC5C6\uC774 \uD30C\uAE30 \uAC00\uB2A5\uD569\uB2C8\uB2E4."
            }), " "]
          }), "\uBCF4\uC720\uADFC\uAC70 : \uB313\uAE00 \uBC0F \uC88B\uC544\uC694 \uC0AD\uC81C \uBC29\uC9C0 ", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            children: "\uC81C3\uC870(\uC815\uBCF4\uC8FC\uCCB4\uC640 \uBC95\uC815\uB300\uB9AC\uC778\uC758 \uAD8C\uB9AC\xB7\uC758\uBB34 \uBC0F \uADF8 \uD589\uC0AC\uBC29\uBC95)"
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            children: [" ", "\u2460 \uC815\uBCF4\uC8FC\uCCB4\uB294 \uC7A5\uD604\uC218 \uC5D0 \uB300\uD574 \uC5B8\uC81C\uB4E0\uC9C0 \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C\xB7\uC815\uC815\xB7\uC0AD\uC81C\xB7\uCC98\uB9AC\uC815\uC9C0 \uC694\uAD6C \uB4F1\uC758 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]
          }), " ", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "\u2461 \uC81C1\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC \uD589\uC0AC\uB294\uC7A5\uD604\uC218 \uC5D0 \uB300\uD574 \u300C\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95\u300D \uC2DC\uD589\uB839 \uC81C41\uC870\uC81C1\uD56D\uC5D0 \uB530\uB77C \uC11C\uBA74, \uC804\uC790\uC6B0\uD3B8, \uBAA8\uC0AC\uC804\uC1A1(FAX) \uB4F1\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC73C\uBA70 \uC7A5\uD604\uC218 \uC740(\uB294) \uC774\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uC870\uCE58\uD558\uACA0\uC2B5\uB2C8\uB2E4."
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            children: "\uC81C4\uC870(\uCC98\uB9AC\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9 \uC791\uC131)"
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), " \u2460 ", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
            children: "\uC7A5\uD604\uC218"
          }), "\uC740(\uB294) \uB2E4\uC74C\uC758 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9\uC744 \uCC98\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. ", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
            children: "\uBCF8\uC778 \uD655\uC778\uC6A9 \uC774\uBA54\uC77C\uACFC \uC774\uB984 \uC218\uC9D1"
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), " ", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            children: "\uC81C5\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uD30C\uAE30)"
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), " \u2460 \uC7A5\uD604\uC218 \uC740(\uB294) \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\uAE30\uAC04\uC758 \uACBD\uACFC, \uCC98\uB9AC\uBAA9\uC801 \uB2EC\uC131 \uB4F1 \uAC1C\uC778\uC815\uBCF4\uAC00 \uBD88\uD544\uC694\uD558\uAC8C \uB418\uC5C8\uC744 \uB54C\uC5D0\uB294 \uC9C0\uCCB4\uC5C6\uC774 \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uD30C\uAE30\uD569\uB2C8\uB2E4.", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            children: "\uC81C6\uC870(\uAC1C\uC778\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4 \uC870\uCE58)"
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "\uC7A5\uD604\uC218\uC740(\uB294) \uAC1C\uC778\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4\uB97C \uC704\uD574 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC870\uCE58\uB97C \uCDE8\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4."
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "1. \uAC1C\uC778\uC815\uBCF4\uC758 \uC554\uD638\uD654\uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB294 \uBE44\uBC00\uBC88\uD638\uB294 \uC554\uD638\uD654 \uB418\uC5B4 \uC800\uC7A5 \uBC0F \uAD00\uB9AC\uB418\uACE0 \uC788\uC5B4, \uBCF8\uC778\uB9CC\uC774 \uC54C \uC218 \uC788\uC73C\uBA70 \uC911\uC694\uD55C \uB370\uC774\uD130\uB294 \uD30C\uC77C \uBC0F \uC804\uC1A1 \uB370\uC774\uD130\uB97C \uC554\uD638\uD654 \uD558\uAC70\uB098 \uD30C\uC77C \uC7A0\uAE08 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uB294 \uB4F1\uC758 \uBCC4\uB3C4 \uBCF4\uC548\uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4"
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), " ", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "2. \uAC1C\uC778\uC815\uBCF4\uC5D0 \uB300\uD55C \uC811\uADFC \uC81C\uD55C\uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD558\uB294 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC2DC\uC2A4\uD15C\uC5D0 \uB300\uD55C \uC811\uADFC\uAD8C\uD55C\uC758 \uBD80\uC5EC,\uBCC0\uACBD,\uB9D0\uC18C\uB97C \uD1B5\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uC5D0 \uB300\uD55C \uC811\uADFC\uD1B5\uC81C\uB97C \uC704\uD558\uC5EC \uD544\uC694\uD55C \uC870\uCE58\uB97C \uD558\uACE0 \uC788\uC73C\uBA70 \uCE68\uC785\uCC28\uB2E8\uC2DC\uC2A4\uD15C\uC744 \uC774\uC6A9\uD558\uC5EC \uC678\uBD80\uB85C\uBD80\uD130\uC758 \uBB34\uB2E8 \uC811\uADFC\uC744 \uD1B5\uC81C\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4"
          }), " ", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "3. \uBB38\uC11C\uBCF4\uC548\uC744 \uC704\uD55C \uC7A0\uAE08\uC7A5\uCE58 \uC0AC\uC6A9\uAC1C\uC778\uC815\uBCF4\uAC00 \uD3EC\uD568\uB41C \uC11C\uB958, \uBCF4\uC870\uC800\uC7A5\uB9E4\uCCB4 \uB4F1\uC744 \uC7A0\uAE08\uC7A5\uCE58\uAC00 \uC788\uB294 \uC548\uC804\uD55C \uC7A5\uC18C\uC5D0 \uBCF4\uAD00\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4."
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), " ", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            children: "\uC81C7\uC870 (\uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790)"
          }), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "\u2460 \uC7A5\uD604\uC218 \uC740(\uB294) \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uC5C5\uBB34\uB97C \uCD1D\uAD04\uD574\uC11C \uCC45\uC784\uC9C0\uACE0, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC640 \uAD00\uB828\uD55C \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBD88\uB9CC\uCC98\uB9AC \uBC0F \uD53C\uD574\uAD6C\uC81C \uB4F1\uC744 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uB97C \uC9C0\uC815\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4."
          }), " ", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), "\u2022 \u25B6 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), " \u2022 \uC131\uBA85 :\uC7A5\uD604\uC218 ", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), "\u2022 \uC5F0\uB77D\uCC98 :010-5672-3486,", _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), "\u2022 noah071610@naver.com,"]
        })]
      })
    })]
  });
};

const getStaticProps = configureStore__WEBPACK_IMPORTED_MODULE_9__/* .wrapper.getStaticProps */ .Y.getStaticProps(() => async ({}) => {
  return {
    props: {}
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);

/***/ }),

/***/ 2372:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

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

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 2034:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [979], () => (__webpack_exec__(5655)));
module.exports = __webpack_exports__;

})();