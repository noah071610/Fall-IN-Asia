"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[976],{69926:function(n,e,t){t.d(e,{Z:function(){return h}});var i=t(35944),o=t(53672),r=t(67294),d=t(42106),a=t(53215),c=(0,d.Z)("div",{target:"et4i3nc0"})("padding-top:1rem;padding-bottom:1rem; .comment-form-main{border-radius:1rem;--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));padding:0.5rem; transition:0.25s all;}.comment-input{display:flex;.icon{margin-right:0.7rem;img{width:2.5rem;height:2.5rem;border-radius:9999px;;}}textarea{cursor:pointer;&:focus{cursor:inherit;}}}.comment-submit-wrapper{overflow:hidden;div{",(0,a.Yk)("flex-end","center"),";button{border-radius:0.375rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));};}}}"),l=t(49226),u=t(8514),m=t(98981),s=t(11163),v=t(93640),p=t(9669),g=t.n(p),b=function(n){var e=n.isStory,t=n.revalidateComments,d=(0,l.I0)(),p=(0,s.useRouter)().query,b=(0,l.v9)((function(n){return n.user})).user,h=(0,m.Z)(""),f=(0,o.Z)(h,3),Z=f[0],k=f[1],C=f[2],w=(0,r.useState)(!1),x=w[0],y=w[1],N=(0,r.useCallback)((function(){if(""!==Z&&null!==Z&&void 0!==Z&&Z.trim())if(b){var n={content:Z};e?n.storyId=parseInt(null===p||void 0===p?void 0:p.storyId):n.momentId=parseInt(null===p||void 0===p?void 0:p.momentId),g().post("/comment",n,{withCredentials:!0}).then((function(){t(),(0,a.bi)("\ub313\uae00\uc744 \uc131\uacf5\uc801\uc73c\ub85c \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4."),C("")})).catch((function(n){throw(0,a.bi)(n),n}))}else(0,a.p4)("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.");else(0,a.p4)("\ub313\uae00\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.")}),[Z,p,b,e]),B=(0,r.useCallback)((function(){y(!1),C("")}),[]),I=(0,r.useCallback)((function(){if(!b)return(0,a.p4)("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),void d(v.P.actions.toggleLoginModal());y(!0)}),[b]);return(0,i.tZ)(c,{children:(0,i.BX)("div",{style:x?{background:a.Y,boxShadow:"0px 0px 5px rgba(0,0,0,0.15)"}:{},className:"comment-form-main",children:[(0,i.BX)("div",{style:x?{marginBottom:".5rem"}:{},onClick:I,className:"comment-input",children:[(0,i.tZ)("div",{className:"icon",children:(0,i.tZ)("img",{src:b?b.icon:a.u5,alt:"user-icon"})}),(0,i.tZ)(u.Z,{placeholder:b?"\ub313\uae00 \uc791\uc131\ud558\uae30.":"\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",disabled:!b,value:Z,onChange:k})]}),(0,i.tZ)("div",{className:"comment-submit-wrapper",children:(0,i.BX)("div",{className:x?"drop-down":"roll-up",children:[(0,i.tZ)("button",{onClick:N,children:"\ucf54\uba58\ud2b8"}),(0,i.tZ)("button",{onClick:B,children:"\ucde8\uc18c"})]})})]})})},h=(0,r.memo)(b)},13943:function(n,e,t){t.d(e,{Z:function(){return E}});var i=t(35944),o=t(87757),r=t.n(o),d=t(15861),a=t(53672),c=t(67294),l=t(42106),u=t(53215),m=(0,l.Z)("div",{target:"ewutdbw0"})("padding-top:1rem;padding-bottom:1rem; .comment-main{cursor:pointer;padding-right:2rem;padding-left:0.5rem;position:relative; transition:0.3s all;.btn-wrapper{position:absolute;right:0px; top:0.25rem;a{border-radius:9999px;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem;:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));} .count{padding-left:0.25rem;}}.liked{.anticon{color:",u.Ss,";}}}}.more-subComment{cursor:pointer; padding:1rem 0.5rem 0 3.7rem;",(0,u.Yk)("flex-start","center"),";.count{font-size:0.875rem;line-height:1.25rem;margin-right:0.25rem;font-weight:700; color:",u.vX,";}.more-subComment-btn{font-size:0.875rem;line-height:1.25rem;padding:0px; .anticon{font-size:0.9rem;margin-left:0.5rem;}}}"),s=t(27569),v=t(57206),p=t(73171),g=t(32869),b=t(49226),h=t(63552),f=t(13265),Z=t(36243),k=(0,l.Z)("div",{target:"e1esapgv0"})("padding:1rem 2rem 1rem 3.7rem;position:relative;.delete-btn{position:absolute;top:0.5rem;right:0;border-radius:50%;padding:0.5rem;&:hover{background:",u.eR,";}}.icon{img{width:2rem;height:2rem;}}"),C=t(9669),w=t.n(C),x=function(n){var e=n.subComment,t=n.revalidateComments,o=(0,b.v9)((function(n){return n.user})).user,r=(0,c.useState)(!1),d=r[0],a=r[1];(0,c.useEffect)((function(){(null===o||void 0===o?void 0:o.id)===(null===e||void 0===e?void 0:e.user.id)&&a(!0)}),[o,e]);var l=(0,c.useCallback)((function(){o&&d&&w().delete("/comment/subComment/".concat(null===e||void 0===e?void 0:e.id)).then((function(){t(),(0,u.bi)("\ub2f5\uae00\uc744 \uc131\uacf5\uc801\uc73c\ub85c \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4.")})).catch((function(n){throw(0,u.p4)(n),n}))}),[o,d,e]);return(0,i.BX)(k,{children:[(0,i.tZ)(f.Z,{user:null===e||void 0===e?void 0:e.user,date:null===e||void 0===e?void 0:e.createdAt,comment:null===e||void 0===e?void 0:e.content}),d&&(0,i.tZ)("a",{className:"delete-btn",onClick:function(){(0,Z.u)(l,"\uc774 \ub2f5\uae00\uc744 \uc0ad\uc81c\ud560\uae4c\uc694?","\uc0ad\uc81c\ud574\uc8fc\uc138\uc694.")},children:(0,i.tZ)(p.Z,{})})]})},y=(0,c.memo)(x),N=(0,l.Z)("div",{target:"e986psp0"})("padding:1rem 0 0 3.7rem;transition:0.3s all;",(0,u.Yk)("flex-start","center"),";.icon{img{width:2rem;border-radius:9999px;margin-right:0.5rem;;}}button{width:6rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));border-radius:0.375rem;margin-left:0.5rem;:hover{--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));};}"),B=t(98981),I=function(n){var e=n.commentId,t=n.revalidateComments,o=(0,B.Z)(""),r=(0,a.Z)(o,3),d=r[0],l=r[1],m=r[2],s=(0,b.v9)((function(n){return n.user})).user,v=(0,c.useCallback)((function(){if(""!==d&&null!==d&&void 0!==d&&d.trim())if(s){var n={content:d,commentId:e};w().post("/comment/subComment",n).then((function(){t(),(0,u.bi)("\ub2f5\uae00\uc744 \uc131\uacf5\uc801\uc73c\ub85c \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4."),m("")})).catch((function(n){throw(0,u.bi)(n),n}))}else(0,u.p4)("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.");else(0,u.p4)("\ub0b4\uc6a9\uc744 \uc801\uc5b4\uc8fc\uc138\uc694")}),[e,d]);return(0,i.BX)(N,{children:[(0,i.tZ)("div",{className:"icon",children:s?(0,i.tZ)("img",{src:s.icon,alt:"user_icon"}):(0,i.tZ)("img",{src:u.u5,alt:"user_icon"})}),(0,i.tZ)("input",{placeholder:s?"\ub2f5\uae00 \uc791\uc131\ud558\uae30.":"\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",value:d,onChange:l}),(0,i.tZ)("button",{disabled:!s,onClick:v,children:"\ub2f5\uc7a5"})]})},X=(0,c.memo)(I),S=t(45145),_=function(n){var e,t,o,l,k,C=n.comment,x=n.revalidateComments,N=(0,b.I0)(),B=(0,h.Z)(!1),I=(0,a.Z)(B,3),_=I[0],E=I[1],Y=(I[2],(0,h.Z)(!0)),z=(0,a.Z)(Y,3),A=z[0],P=z[1],R=z[2],U=(0,b.v9)((function(n){return n.user})).user,q=(0,c.useState)(!1),L=q[0],M=q[1],j=(0,c.useState)(!1),D=j[0],F=j[1];(0,c.useEffect)((function(){var n;((null===U||void 0===U?void 0:U.id)===(null===C||void 0===C?void 0:C.user.id)&&F(!0),U)&&(null!==(n=U.likeComment)&&void 0!==n&&n.find((function(n){return n.commentId===(null===C||void 0===C?void 0:C.id)}))?M(!0):M(!1))}),[U,C]),(0,c.useEffect)((function(){var n;(null===C||void 0===C||null===(n=C.subComments)||void 0===n?void 0:n.length)>2&&R(!1)}),[]);var G=(0,c.useCallback)((0,d.Z)(r().mark((function n(){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!U||!D){n.next=3;break}return n.next=3,w().delete("/comment/".concat(null===C||void 0===C?void 0:C.id)).then((function(){x(),(0,u.bi)("\ub313\uae00\uc744 \uc131\uacf5\uc801\uc73c\ub85c \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4.")})).catch((function(n){throw(0,u.p4)(n),n}));case 3:case"end":return n.stop()}}),n)}))),[U,D,C]),H=(0,c.useCallback)((function(n){U?w().patch("/comment/".concat(n,"/").concat(null===C||void 0===C?void 0:C.id)).then((function(){"like"===n?(0,u.bi)("\ub313\uae00 \uc88b\uc544\uc694!\ud83d\udc93"):(0,u.bi)("\ub313\uae00 \uc88b\uc544\uc694 \ucde8\uc18c\ud83d\udc94"),x(),N((0,S.pZ)())})).catch((function(n){throw(0,u.p4)(n),n})):(0,u.p4)("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.")}),[U,C]);return(0,i.BX)(m,{children:[(0,i.BX)("div",{onClick:E,className:"comment-main",children:[(0,i.tZ)(f.Z,{user:null===C||void 0===C?void 0:C.user,date:null===C||void 0===C?void 0:C.createdAt,comment:null===C||void 0===C?void 0:C.content}),(0,i.BX)("div",{onClick:function(n){return n.stopPropagation()},className:"btn-wrapper",children:[L?(0,i.BX)("a",{className:"liked",onClick:function(){return H("dislike")},children:[(0,i.tZ)(s.Z,{}),(0,i.tZ)("span",{className:"count",children:(null===C||void 0===C||null===(e=C.likedUser)||void 0===e?void 0:e.length)||0})]}):(0,i.BX)("a",{onClick:function(){return H("like")},children:[(0,i.tZ)(v.Z,{}),(0,i.tZ)("span",{className:"count",children:(null===C||void 0===C||null===(t=C.likedUser)||void 0===t?void 0:t.length)||0})]}),D&&(0,i.tZ)("a",{onClick:function(){(0,Z.u)(G,"\uc774 \ub313\uae00\uc744 \uc0ad\uc81c\ud560\uae4c\uc694?","\uc0ad\uc81c\ud574\uc8fc\uc138\uc694.")},children:(0,i.tZ)(p.Z,{})})]})]}),_&&(0,i.tZ)(X,{revalidateComments:x,commentId:null===C||void 0===C?void 0:C.id}),(null===C||void 0===C||null===(o=C.subComments)||void 0===o?void 0:o.length)>2&&(0,i.tZ)("div",{onClick:P,className:"more-subComment",children:(0,i.BX)("button",{className:"more-subComment-btn",children:[(0,i.tZ)("span",{className:"count",children:null===C||void 0===C||null===(l=C.subComments)||void 0===l?void 0:l.length}),"\uac1c\uc758 \ub2f5\uae00",(0,i.tZ)(g.Z,{rotate:A?180:0})]})}),A&&(null===C||void 0===C||null===(k=C.subComments)||void 0===k?void 0:k.map((function(n,e){return(0,i.tZ)(y,{revalidateComments:x,subComment:n},e)})))]})},E=(0,c.memo)(_)},63552:function(n,e,t){t.d(e,{Z:function(){return o}});var i=t(67294);function o(n){var e=(0,i.useState)(n),t=e[0],o=e[1];return[t,(0,i.useCallback)((function(){o((function(n){return!n}))}),[]),o]}}}]);