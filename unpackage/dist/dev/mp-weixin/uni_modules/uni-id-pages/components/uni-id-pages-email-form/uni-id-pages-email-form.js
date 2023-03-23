(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/uni-id-pages-email-form/uni-id-pages-email-form"],{740:function(e,t,n){"use strict";n.r(t);var i=n(741),o=n(743);for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n(745);var u,a=n(50),c=Object(a["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,"4835b4e9",null,!1,i["components"],u);c.options.__file="uni_modules/uni-id-pages/components/uni-id-pages-email-form/uni-id-pages-email-form.vue",t["default"]=c.exports},741:function(e,t,n){"use strict";n.r(t);var i=n(742);n.d(t,"render",(function(){return i["render"]})),n.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(t,"components",(function(){return i["components"]}))},742:function(e,t,n){"use strict";var i;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return u})),n.d(t,"recyclableRender",(function(){return r})),n.d(t,"components",(function(){return i}));try{i={uniCaptcha:function(){return n.e("uni_modules/uni-captcha/components/uni-captcha/uni-captcha").then(n.bind(null,712))},uniEasyinput:function(){return n.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(n.bind(null,665))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.focusEmailCodeInput=!1})},r=!1,u=[];o._withStripped=!0},743:function(e,t,n){"use strict";n.r(t);var i=n(744),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},744:function(e,t,n){"use strict";(function(e,n){function i(e,t){var n;return t=t||500,function(){var i=this,o=arguments;n&&clearTimeout(n);var r=!n;n=setTimeout((function(){n=null}),t),r&&e.apply(i,o)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"uni-email-code-form",model:{prop:"modelValue",event:"update:modelValue"},props:{event:["update:modelValue"],count:{type:[String,Number],default:60},email:{type:[String],default:""},type:{type:String,default:function(){return"register"}},focusCaptchaInput:{type:Boolean,default:function(){return!1}}},data:function(){return{captcha:"",reverseNumber:0,reverseTimer:null,modelValue:"",focusEmailCodeInput:!1}},watch:{captcha:function(e,t){4==e.length&&4!=t.length&&this.start()},modelValue:function(e){this.$emit("input",e),this.$emit("update:modelValue",e)}},computed:{innerText:function(){return 0==this.reverseNumber?"获取邮箱验证码":"重新发送("+this.reverseNumber+"s)"}},created:function(){this.initClick()},methods:{getImageCaptcha:function(e){this.$refs.captcha.getImageCaptcha(e)},initClick:function(){var e=this;this.start=i((function(){0==e.reverseNumber&&e.sendMsg()}))},sendMsg:function(){var t=this;if(4!=this.captcha.length)return this.$refs.captcha.focusCaptchaInput=!0,e.showToast({title:"请先输入图形验证码",icon:"none",duration:3e3});if(!this.email)return e.showToast({title:"请输入邮箱",icon:"none",duration:3e3});var i=/@/;if(!i.test(this.email))return e.showToast({title:"邮箱格式错误",icon:"none",duration:3e3});var o=n.importObject("uni-id-co",{customUI:!0});console.log("sendEmailCode",{email:this.email,scene:this.type,captcha:this.captcha}),o.sendEmailCode({email:this.email,scene:this.type,captcha:this.captcha}).then((function(n){e.showToast({title:"邮箱验证码发送成功",icon:"none",duration:3e3}),t.reverseNumber=Number(t.count),t.getCode()})).catch((function(n){"uni-id-invalid-mail-template"==n.code?(t.modelValue="123456",e.showToast({title:"已启动测试模式,详情【控制台信息】",icon:"none",duration:3e3}),console.warn(n.message)):(t.getImageCaptcha(),t.captcha="",e.showToast({title:n.message,icon:"none",duration:3e3}))}))},getCode:function(){var e=this;if(0==this.reverseNumber)return clearTimeout(this.reverseTimer),void(this.reverseTimer=null);this.reverseNumber--,this.reverseTimer=setTimeout((function(){e.getCode()}),1e3)}}};t.default=o}).call(this,n(2)["default"],n(27)["default"])},745:function(e,t,n){"use strict";n.r(t);var i=n(746),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},746:function(e,t,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-id-pages/components/uni-id-pages-email-form/uni-id-pages-email-form.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/uni-id-pages-email-form/uni-id-pages-email-form-create-component',
    {
        'uni_modules/uni-id-pages/components/uni-id-pages-email-form/uni-id-pages-email-form-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(740))
        })
    },
    [['uni_modules/uni-id-pages/components/uni-id-pages-email-form/uni-id-pages-email-form-create-component']]
]);
