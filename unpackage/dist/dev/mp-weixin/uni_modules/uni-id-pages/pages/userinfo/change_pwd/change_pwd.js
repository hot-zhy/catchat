require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd"],{439:function(e,n,t){"use strict";(function(e,n){var o=t(4);t(26),t(27);o(t(25));var r=o(t(440));e.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},440:function(e,n,t){"use strict";t.r(n);var o=t(441),r=t(443);for(var s in r)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(s);t(445);var u,i=t(50),c=Object(i["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],u);c.options.__file="uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd.vue",n["default"]=c.exports},441:function(e,n,t){"use strict";t.r(n);var o=t(442);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},442:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return u})),t.d(n,"recyclableRender",(function(){return s})),t.d(n,"components",(function(){return o}));try{o={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,601))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,610))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,626))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.focusOldPassword=!1},e.e1=function(n){e.focusNewPassword=!1},e.e2=function(n){e.focusNewPassword2=!1})},s=!1,u=[];r._withStripped=!0},443:function(e,n,t){"use strict";t.r(n);var o=t(444),r=t.n(o);for(var s in o)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(s);n["default"]=r.a},444:function(e,n,t){"use strict";(function(e,o){var r=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=r(t(11)),u=r(t(380)),i=r(t(422));function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,s.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=e.importObject("uni-id-co",{customUI:!0}),f={mixins:[u.default],data:function(){return{focusOldPassword:!1,focusNewPassword:!1,focusNewPassword2:!1,formData:{oldPassword:"",newPassword:"",newPassword2:""},rules:a({oldPassword:{rules:[{required:!0,errorMessage:"请输入新密码"},{pattern:/^.{6,20}$/,errorMessage:"密码为6 - 20位"}]}},i.default.getPwdRules("newPassword","newPassword2")),logo:"https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/logo.png"}},onReady:function(){this.$refs.form.setRules(this.rules)},onShow:function(){},methods:{submit:function(){var e=this;this.$refs.form.validate().then((function(n){var t=e.formData,r=t.oldPassword,s=t.newPassword;d.updatePwd({oldPassword:r,newPassword:s}).then((function(e){o.removeStorageSync("uni_id_token"),o.setStorageSync("uni_id_token_expired",0),o.redirectTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})})).catch((function(e){o.showModal({content:e.message,showCancel:!1})}))})).catch((function(n){var t=n[0].key;t=t.replace(t[0],t[0].toUpperCase()),e["focus"+t]=!0}))}}};n.default=f}).call(this,t(27)["default"],t(2)["default"])},445:function(e,n,t){"use strict";t.r(n);var o=t(446),r=t.n(o);for(var s in o)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(s);n["default"]=r.a},446:function(e,n,t){}},[[439,"common/runtime","common/vendor","uni_modules/uni-id-pages/pages/common/vendor"]]]);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd.js.map