require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/userinfo/bind-mobile/bind-mobile"],{424:function(n,e,t){"use strict";(function(n,e){var o=t(4);t(26),t(27);o(t(25));var i=o(t(425));n.__webpack_require_UNI_MP_PLUGIN__=t,e(i.default)}).call(this,t(1)["default"],t(2)["createPage"])},425:function(n,e,t){"use strict";t.r(e);var o=t(426),i=t(428);for(var u in i)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(u);t(430);var r,a=t(50),c=Object(a["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],r);c.options.__file="uni_modules/uni-id-pages/pages/userinfo/bind-mobile/bind-mobile.vue",e["default"]=c.exports},426:function(n,e,t){"use strict";t.r(e);var o=t(427);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},427:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return i})),t.d(e,"staticRenderFns",(function(){return r})),t.d(e,"recyclableRender",(function(){return u})),t.d(e,"components",(function(){return o}));try{o={uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,665))},uniIdPagesSmsForm:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-sms-form/uni-id-pages-sms-form").then(t.bind(null,726))},uniPopupCaptcha:function(){return t.e("uni_modules/uni-captcha/components/uni-popup-captcha/uni-popup-captcha").then(t.bind(null,733))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var n=this,e=n.$createElement;n._self._c;n._isMounted||(n.e0=function(e){n.focusMobile=!1})},u=!1,r=[];i._withStripped=!0},428:function(n,e,t){"use strict";t.r(e);var o=t(429),i=t.n(o);for(var u in o)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=i.a},429:function(n,e,t){"use strict";(function(n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=t(211),u={data:function(){return{formData:{mobile:"",code:"",captcha:""},focusMobile:!0,logo:"https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/logo.png"}},computed:{tipText:function(){return"验证码已通过短信发送至 ".concat(this.formData.mobile,"。密码为6 - 20位")}},onLoad:function(n){},onReady:function(){},methods:{submit:function(){var e=this;if(!/^1\d{10}$/.test(this.formData.mobile))return this.focusMobile=!0,n.showToast({title:"手机号码格式不正确",icon:"none",duration:3e3});if(!/^\d{6}$/.test(this.formData.code))return this.$refs.smsForm.focusSmsCodeInput=!0,n.showToast({title:"验证码格式不正确",icon:"none",duration:3e3});var t=o.importObject("uni-id-co");t.bindMobileBySms(this.formData).then((function(t){n.showToast({title:t.errMsg,icon:"none",duration:3e3});e.getOpenerEventChannel();i.mutations.setUserInfo(e.formData),n.navigateBack()})).catch((function(n){console.log(n),"uni-id-captcha-required"==n.errCode&&e.$refs.popup.open()})).finally((function(n){e.formData.captcha=""}))}}};e.default=u}).call(this,t(2)["default"],t(27)["default"])},430:function(n,e,t){"use strict";t.r(e);var o=t(431),i=t.n(o);for(var u in o)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=i.a},431:function(n,e,t){}},[[424,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/uni-id-pages/pages/userinfo/bind-mobile/bind-mobile.js.map