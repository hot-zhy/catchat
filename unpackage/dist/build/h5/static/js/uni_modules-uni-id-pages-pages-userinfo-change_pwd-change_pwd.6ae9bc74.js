(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-userinfo-change_pwd-change_pwd"],{"0c41":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("5530"));n("caad"),n("2532"),n("d3b7"),n("159b");var a=n("a220"),o=i(n("8bf3")),s={data:function(){return{config:o.default,uniIdRedirectUrl:"",isMounted:!1}},onUnload:function(){document.onkeydown=!1},mounted:function(){this.isMounted=!0},onLoad:function(e){var t=this;if(e.is_weixin_redirect){if(uni.showLoading({mask:!0}),window.location.href.includes("#")){var n=window.location.href.split("?")[1].split("&");n.forEach((function(t){var n=t.split("=");"code"==n[0]&&(e.code=n[1])}))}this.$nextTick((function(n){t.$refs.uniFabLogin.login({code:e.code},"weixin")}))}e.uniIdRedirectUrl&&(this.uniIdRedirectUrl=decodeURIComponent(e.uniIdRedirectUrl)),1===getCurrentPages().length&&(uni.hideHomeButton(),console.log("已隐藏：返回首页按钮"))},computed:{needAgreements:function(){if(this.isMounted)return!!this.$refs.agreements&&this.$refs.agreements.needAgreements},agree:{get:function(){if(this.isMounted)return!this.$refs.agreements||this.$refs.agreements.isAgree},set:function(e){this.$refs.agreements?this.$refs.agreements.isAgree=e:console.log("不存在 隐私政策协议组件")}}},methods:{loginSuccess:function(e){a.mutations.loginSuccess((0,r.default)((0,r.default)({},e),{},{uniIdRedirectUrl:this.uniIdRedirectUrl}))}}},u=s;t.default=u},1218:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-forms-item[data-v-7b4c51d5]{position:relative;display:flex;margin-bottom:22px;flex-direction:row}.uni-forms-item__label[data-v-7b4c51d5]{display:flex;flex-direction:row;align-items:center;text-align:left;font-size:14px;color:#606266;height:36px;padding:0 12px 0 0;vertical-align:middle;flex-shrink:0;box-sizing:border-box}.uni-forms-item__label.no-label[data-v-7b4c51d5]{padding:0}.uni-forms-item__content[data-v-7b4c51d5]{position:relative;font-size:14px;flex:1;box-sizing:border-box;flex-direction:row}.uni-forms-item .uni-forms-item__nuve-content[data-v-7b4c51d5]{display:flex;flex-direction:column;flex:1}.uni-forms-item__error[data-v-7b4c51d5]{color:#f56c6c;font-size:12px;line-height:1;padding-top:4px;position:absolute;top:100%;left:0;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-transform:translateY(-100%);transform:translateY(-100%);opacity:0}.uni-forms-item__error .error-text[data-v-7b4c51d5]{color:#f56c6c;font-size:12px}.uni-forms-item__error.msg--active[data-v-7b4c51d5]{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.uni-forms-item.is-direction-left[data-v-7b4c51d5]{flex-direction:row}.uni-forms-item.is-direction-top[data-v-7b4c51d5]{flex-direction:column}.uni-forms-item.is-direction-top .uni-forms-item__label[data-v-7b4c51d5]{padding:0 0 8px;line-height:1.5715;text-align:left;white-space:normal}.uni-forms-item .is-required[data-v-7b4c51d5]{color:#dd524d;font-weight:700}.uni-forms-item--border[data-v-7b4c51d5]{margin-bottom:0;padding:10px 0;border-top:1px #eee solid}.uni-forms-item--border .uni-forms-item__content[data-v-7b4c51d5]{flex-direction:column;justify-content:flex-start;align-items:flex-start}.uni-forms-item--border .uni-forms-item__content .uni-forms-item__error[data-v-7b4c51d5]{position:relative;top:5px;left:0;padding-top:0}.is-first-border[data-v-7b4c51d5]{border:none}',""]),e.exports=t},"13a3":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac1f"),n("00b4"),n("4d63"),n("c607"),n("2c3e"),n("25f0");var r=i(n("8bf3")),a=r.default.passwordStrength,o={super:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,strong:/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,medium:/^(?![0-9]+$)(?![a-zA-Z]+$)(?![~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]+$)[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,weak:/^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{6,16}$/},s={normal:{noPwd:"请输入密码",noRePwd:"再次输入密码",rePwdErr:"两次输入密码不一致"},passwordStrengthError:{super:"密码必须包含大小写字母、数字和特殊符号，密码长度必须在8-16位之间",strong:"密码必须包含字母、数字和特殊符号，密码长度必须在8-16位之间",medium:"密码必须为字母、数字和特殊符号任意两种的组合，密码长度必须在8-16位之间",weak:"密码必须包含字母，密码长度必须在6-16位之间"}};function u(e){return!(a&&o[a]&&!new RegExp(o[a]).test(e))||s.passwordStrengthError[a]}var d={ERROR:s,validPwd:u,getPwdRules:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"password",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"password2",n={};return n[e]={rules:[{required:!0,errorMessage:s.normal.noPwd},{validateFunction:function(e,t,n,i){var r=u(t);return!0!==r&&i(r),!0}}]},t&&(n[t]={rules:[{required:!0,errorMessage:s.normal.noRePwd},{validateFunction:function(t,n,i,r){return n!=i[e]&&r(s.normal.rePwdErr),!0}}]}),n}};t.default=d},"1ec3":function(e,t,n){"use strict";var i;n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3");var r={name:"UniMatchMedia",props:{width:{type:[Number,String],default:""},minWidth:{type:[Number,String],default:""},maxWidth:{type:[Number,String],default:""},height:{type:[Number,String],default:""},minHeight:{type:[Number,String],default:""},maxHeight:{type:[Number,String],default:""},orientation:{type:String,default:""}},data:function(){return{matches:!0}},mounted:function(){var e=this;i=uni.createMediaQueryObserver(this),i.observe({width:this.width,maxWidth:this.maxWidth,minWidth:this.minWidth,height:this.height,minHeight:this.minHeight,maxHeight:this.maxHeight,orientation:this.orientation},(function(t){e.matches=t}))},destroyed:function(){i.disconnect()}};t.default=r},"1f3e":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uniMatchMedia:n("a5e8").default,uniForms:n("5dcc").default,uniFormsItem:n("f609").default,uniEasyinput:n("0a12").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-content"},[n("uni-match-media",{attrs:{"min-width":690}},[n("v-uni-view",{staticClass:"login-logo"},[n("v-uni-image",{attrs:{src:e.logo}})],1),n("v-uni-text",{staticClass:"title title-box"},[e._v("修改密码")])],1),n("uni-forms",{ref:"form",attrs:{value:e.formData,"err-show-type":"toast"}},[n("uni-forms-item",{attrs:{name:"oldPassword"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{focus:e.focusOldPassword,type:"password",inputBorder:!1,placeholder:"请输入旧密码"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.focusOldPassword=!1}},model:{value:e.formData.oldPassword,callback:function(t){e.$set(e.formData,"oldPassword",t)},expression:"formData.oldPassword"}})],1),n("uni-forms-item",{attrs:{name:"newPassword"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{focus:e.focusNewPassword,type:"password",inputBorder:!1,placeholder:"请输入新密码"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.focusNewPassword=!1}},model:{value:e.formData.newPassword,callback:function(t){e.$set(e.formData,"newPassword",t)},expression:"formData.newPassword"}})],1),n("uni-forms-item",{attrs:{name:"newPassword2"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{focus:e.focusNewPassword2,type:"password",inputBorder:!1,placeholder:"请再次输入新密码"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.focusNewPassword2=!1}},model:{value:e.formData.newPassword2,callback:function(t){e.$set(e.formData,"newPassword2",t)},expression:"formData.newPassword2"}})],1),n("v-uni-button",{staticClass:"uni-btn send-btn-box",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)},a=[]},2249:function(e,t,n){"use strict";n.r(t);var i=n("498e"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},"2ac0":function(e,t,n){"use strict";var i=n("96dd"),r=n.n(i);r.a},"2f3d":function(e,t,n){var i=n("77ec");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("4287ea0a",i,!0,{sourceMap:!1,shadowMode:!1})},3687:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"uni-view[data-v-75d3cb14]{display:block}",""]),e.exports=t},4723:function(e,t,n){"use strict";n.r(t);var i=n("1ec3"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},"498e":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("53ca")),a=i(n("c7eb")),o=i(n("ade3")),s=i(n("1da1"));n("a9e3"),n("14d9"),n("d3b7"),n("159b"),n("a434");var u={name:"uniFormsItem",options:{virtualHost:!0},provide:function(){return{uniFormItem:this}},inject:{form:{from:"uniForm",default:null}},props:{rules:{type:Array,default:function(){return null}},name:{type:[String,Array],default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:""},errorMessage:{type:[String,Boolean],default:""},leftIcon:String,iconColor:{type:String,default:"#606266"}},data:function(){return{errMsg:"",userRules:null,localLabelAlign:"left",localLabelWidth:"65px",localLabelPos:"left",border:!1,isFirstBorder:!1}},computed:{msg:function(){return this.errorMessage||this.errMsg}},watch:{"form.formRules":function(e){this.init()},"form.labelWidth":function(e){this.localLabelWidth=this._labelWidthUnit(e)},"form.labelPosition":function(e){this.localLabelPos=this._labelPosition()},"form.labelAlign":function(e){}},created:function(){var e=this;this.init(!0),this.name&&this.form&&this.$watch((function(){var t=e.form._getDataValue(e.name,e.form.localData);return t}),(function(t,n){var i=e.form._isEqual(t,n);if(!i){var r=e.itemSetValue(t);e.onFieldChange(r,!1)}}),{immediate:!1})},destroyed:function(){this.__isUnmounted||this.unInit()},methods:{setRules:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.userRules=e,this.init(!1)},setValue:function(){},onFieldChange:function(e){var t=arguments,n=this;return(0,s.default)((0,a.default)().mark((function i(){var r,s,u,d,l,c,f,m,p,h,v,g;return(0,a.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(r=!(t.length>1&&void 0!==t[1])||t[1],s=n.form,u=s.formData,s.localData,d=s.errShowType,l=s.validateCheck,c=s.validateTrigger,f=s._isRequiredField,m=s._realName,p=m(n.name),e||(e=n.form.formData[p]),h=n.itemRules.rules&&n.itemRules.rules.length,n.validator&&h&&0!==h){i.next=7;break}return i.abrupt("return");case 7:if(v=f(n.itemRules.rules||[]),g=null,"bind"!==c&&!r){i.next=18;break}return i.next=12,n.validator.validateUpdate((0,o.default)({},p,e),u);case 12:g=i.sent,v||void 0!==e&&""!==e||(g=null),g&&g.errorMessage?("undertext"===d&&(n.errMsg=g?g.errorMessage:""),"toast"===d&&uni.showToast({title:g.errorMessage||"校验错误",icon:"none"}),"modal"===d&&uni.showModal({title:"提示",content:g.errorMessage||"校验错误"})):n.errMsg="",l(g||null),i.next=19;break;case 18:n.errMsg="";case 19:return i.abrupt("return",g||null);case 20:case"end":return i.stop()}}),i)})))()},init:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.form||{},n=t.validator,i=t.formRules,a=t.childrens,o=(t.formData,t.localData),s=t._realName,u=t.labelWidth,d=t._getDataValue;t._setDataValue;if(this.localLabelAlign=this._justifyContent(),this.localLabelWidth=this._labelWidthUnit(u),this.localLabelPos=this._labelPosition(),this.form&&e&&a.push(this),n&&i){this.form.isFirstBorder||(this.form.isFirstBorder=!0,this.isFirstBorder=!0),this.group&&(this.group.isFirstBorder||(this.group.isFirstBorder=!0,this.isFirstBorder=!0)),this.border=this.form.border;var l=s(this.name),c=this.userRules||this.rules;"object"===(0,r.default)(i)&&c&&(i[l]={rules:c},n.updateSchema(i));var f=i[l]||{};this.itemRules=f,this.validator=n,this.itemSetValue(d(this.name,o))}},unInit:function(){var e=this;if(this.form){var t=this.form,n=t.childrens,i=t.formData,r=t._realName;n.forEach((function(t,n){t===e&&(e.form.childrens.splice(n,1),delete i[r(t.name)])}))}},itemSetValue:function(e){var t=this.form._realName(this.name),n=this.itemRules.rules||[],i=this.form._getValue(t,e,n);return this.form._setDataValue(t,this.form.formData,i),i},clearValidate:function(){this.errMsg=""},_isRequired:function(){return this.required},_justifyContent:function(){if(this.form){var e=this.form.labelAlign,t=this.labelAlign?this.labelAlign:e;if("left"===t)return"flex-start";if("center"===t)return"center";if("right"===t)return"flex-end"}return"flex-start"},_labelWidthUnit:function(e){return this.num2px(this.labelWidth?this.labelWidth:e||(this.label?65:"auto"))},_labelPosition:function(){return this.form&&this.form.labelPosition||"left"},isTrigger:function(e,t,n){return"submit"!==e&&e?"bind":void 0===e?"bind"!==t?t?"submit":""===n?"bind":"submit":"bind":"submit"},num2px:function(e){return"number"===typeof e?"".concat(e,"px"):e}}};t.default=u},"556c":function(e,t,n){"use strict";(function(e){n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac1f"),n("5319");var r=i(n("5530")),a=i(n("0c41")),o=i(n("13a3")),s=e.importObject("uni-id-co",{customUI:!0}),u={mixins:[a.default],data:function(){return{focusOldPassword:!1,focusNewPassword:!1,focusNewPassword2:!1,formData:{oldPassword:"",newPassword:"",newPassword2:""},rules:(0,r.default)({oldPassword:{rules:[{required:!0,errorMessage:"请输入新密码"},{pattern:/^.{6,20}$/,errorMessage:"密码为6 - 20位"}]}},o.default.getPwdRules("newPassword","newPassword2")),logo:"/static/logo.png"}},onReady:function(){this.$refs.form.setRules(this.rules)},onShow:function(){var e=this;document.onkeydown=function(t){var n=t||window.event;n&&13==n.keyCode&&e.submit()}},methods:{submit:function(){var e=this;this.$refs.form.validate().then((function(t){var n=e.formData,i=n.oldPassword,r=n.newPassword;s.updatePwd({oldPassword:i,newPassword:r}).then((function(e){uni.removeStorageSync("uni_id_token"),uni.setStorageSync("uni_id_token_expired",0),uni.redirectTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})})).catch((function(e){uni.showModal({content:e.message,showCancel:!1})}))})).catch((function(t){var n=t[0].key;n=n.replace(n[0],n[0].toUpperCase()),e["focus"+n]=!0}))}}};t.default=u}).call(this,n("a9ff")["default"])},"77ec":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.input-box[data-v-c3b9f55a]  .uni-input-input[type="password"]::-ms-reveal{display:none}.uni-content[data-v-c3b9f55a]{padding:0 %?60?%}.login-logo[data-v-c3b9f55a]{width:%?140?%;height:%?140?%;background:#d8d8d8;box-shadow:0 0 %?20?% 0 rgba(0,0,0,.1);border-radius:%?24?%;overflow:hidden;margin:%?120?% auto 0 auto}@media screen and (min-width:690px){.uni-content[data-v-c3b9f55a]{margin:0 auto;position:relative;top:100px;padding:30px 40px 80px 40px;max-width:450px;max-height:450px;border-radius:10px;box-shadow:0 0 20px #efefef;background-color:#fff}.login-logo[data-v-c3b9f55a]{display:flex;justify-content:center}.login-logo uni-image[data-v-c3b9f55a]{width:60px;height:60px}.register-back[data-v-c3b9f55a]{display:none}uni-button[data-v-c3b9f55a]{padding-bottom:1px}}.uni-content uni-view[data-v-c3b9f55a]{box-sizing:border-box}.title[data-v-c3b9f55a]{display:flex;padding:18px 0;font-weight:800;flex-direction:column;margin-top:%?42?%;font-size:%?36?%}.tip[data-v-c3b9f55a]{display:flex;color:#bdbdc0;font-size:%?28?%;margin:6px 0}.uni-content[data-v-c3b9f55a]  .uni-easyinput__content,\n.input-box[data-v-c3b9f55a]{height:44px;background-color:#f8f8f8!important;border-radius:0;font-size:14px;display:flex;flex:1}.link[data-v-c3b9f55a]{color:#04498c;cursor:pointer}.uni-content[data-v-c3b9f55a]  .uni-forms-item__inner{padding-bottom:8px}.uni-btn[data-v-c3b9f55a]{text-align:center;height:40px;line-height:40px;margin:15px 0 10px 0;color:#fff!important;border-radius:5px;font-size:16px}.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd[data-v-c3b9f55a]{height:auto!important}@media screen and (max-width:690px){.uni-content[data-v-c3b9f55a]{margin-top:15px}}@media screen and (min-width:690px){.uni-content[data-v-c3b9f55a]{padding:30px 40px 40px}}',""]),e.exports=t},"8f97":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){}));var i=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:this.matches,expression:"matches"}]},[this._t("default")],2)},r=[]},"913b":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-forms-item",class:["is-direction-"+e.localLabelPos,e.border?"uni-forms-item--border":"",e.border&&e.isFirstBorder?"is-first-border":""]},[e._t("label",[n("v-uni-view",{staticClass:"uni-forms-item__label",class:{"no-label":!e.label&&!e.required},style:{width:e.localLabelWidth,justifyContent:e.localLabelAlign}},[e.required?n("v-uni-text",{staticClass:"is-required"},[e._v("*")]):e._e(),n("v-uni-text",[e._v(e._s(e.label))])],1)]),n("v-uni-view",{staticClass:"uni-forms-item__content"},[e._t("default"),n("v-uni-view",{staticClass:"uni-forms-item__error",class:{"msg--active":e.msg}},[n("v-uni-text",[e._v(e._s(e.msg))])],1)],2)],2)},r=[]},"96dd":function(e,t,n){var i=n("1218");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("5a9cc2f2",i,!0,{sourceMap:!1,shadowMode:!1})},a220:function(e,t,n){"use strict";(function(e){n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.store=t.mutations=void 0;var r=i(n("c7eb")),a=i(n("1da1"));n("b64b"),n("d3b7"),n("159b"),n("99af");var o=i(n("6783")),s=i(n("8bf3")),u=i(n("e143")),d=e.importObject("uni-id-co"),l=e.database(),c=l.collection("uni-id-users"),f=uni.getStorageSync("uni-id-pages-userInfo")||{},m={userInfo:f,hasLogin:0!=Object.keys(f).length},p={updateUserInfo:function(){var e=arguments,t=this;return(0,a.default)((0,r.default)().mark((function n(){var i,a;return(0,r.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e.length>0&&void 0!==e[0]&&e[0],console.log(20,i),!i){n.next=6;break}c.where("_id==$env.uid").update(i).then((function(e){e.result.updated?(uni.showToast({title:"更新成功",icon:"none",duration:3e3}),t.setUserInfo(i)):uni.showToast({title:"没有改变",icon:"none",duration:3e3})})),n.next=17;break;case 6:return n.prev=6,n.next=9,c.where("'_id' == $cloudEnv_uid").field("mobile,nickname,username,email,avatar_file").get();case 9:a=n.sent,t.setUserInfo(a.result.data[0]),n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](6),t.setUserInfo({},{cover:!0}),console.error(n.t0.message,n.t0.errCode);case 17:case"end":return n.stop()}}),n,null,[[6,13]])})))()},setUserInfo:function(e){var t=arguments;return(0,a.default)((0,r.default)().mark((function n(){var i,a,o;return(0,r.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.length>1&&void 0!==t[1]?t[1]:{cover:!1},a=i.cover,console.log("set-userInfo",e),o=a?e:Object.assign(h.userInfo,e),h.userInfo=Object.assign({},o),h.hasLogin=0!=Object.keys(h.userInfo).length,console.log("store.userInfo",h.userInfo),uni.setStorage({key:"uni-id-pages-userInfo",data:h.userInfo}),n.abrupt("return",e);case 8:case"end":return n.stop()}}),n)})))()},logout:function(){var t=this;return(0,a.default)((0,r.default)().mark((function n(){var i,a;return(0,r.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(e.getCurrentUserInfo().tokenExpired>Date.now())){n.next=9;break}return n.prev=1,n.next=4,d.logout();case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](1),console.error(n.t0);case 9:uni.removeStorageSync("uni_id_token"),uni.setStorageSync("uni_id_token_expired",0),uni.redirectTo({url:"/".concat(null!==(i=null===(a=o.default.uniIdRouter)||void 0===a?void 0:a.loginPage)&&void 0!==i?i:"uni_modules/uni-id-pages/pages/login/login-withoutpwd")}),uni.$emit("uni-id-pages-logout"),t.setUserInfo({},{cover:!0});case 14:case"end":return n.stop()}}),n,null,[[1,6]])})))()},loginBack:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.uniIdRedirectUrl,n=void 0===t?"":t,i=0,r=getCurrentPages();if(r.forEach((function(e,t){"login"==r[r.length-t-1].route.split("/")[3]&&i++})),n)return uni.reLaunch({url:n});if("weixin"==e.loginType)return window.history.go(-3);if(i){var a=o.default.pages[0];return uni.reLaunch({url:"/".concat(a.path)})}uni.navigateBack({delta:i})},loginSuccess:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.showToast,n=void 0===t||t,i=e.toastText,r=void 0===i?"登录成功":i,a=e.autoBack,o=void 0===a||a,u=e.uniIdRedirectUrl,d=void 0===u?"":u,l=e.passwordConfirmed;if(n&&uni.showToast({title:r,icon:"none",duration:3e3}),this.updateUserInfo(),uni.$emit("uni-id-pages-login-success"),s.default.setPasswordAfterLogin&&!l)return uni.redirectTo({url:d?"/uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd?uniIdRedirectUrl=".concat(d,"&loginType=").concat(e.loginType):"/uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd?loginType=".concat(e.loginType),fail:function(e){console.log(e)}});o&&this.loginBack(d)}};t.mutations=p;var h=u.default.observable(m);t.store=h}).call(this,n("a9ff")["default"])},a5e8:function(e,t,n){"use strict";n.r(t);var i=n("8f97"),r=n("4723");for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("f09a");var o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"75d3cb14",null,!1,i["a"],void 0);t["default"]=s.exports},ae87:function(e,t,n){var i=n("3687");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("fbb060f2",i,!0,{sourceMap:!1,shadowMode:!1})},e120:function(e,t,n){"use strict";n.r(t);var i=n("556c"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},f09a:function(e,t,n){"use strict";var i=n("ae87"),r=n.n(i);r.a},f52e:function(e,t,n){"use strict";n.r(t);var i=n("1f3e"),r=n("e120");for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("f6ae");var o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"c3b9f55a",null,!1,i["a"],void 0);t["default"]=s.exports},f609:function(e,t,n){"use strict";n.r(t);var i=n("913b"),r=n("2249");for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("2ac0");var o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"7b4c51d5",null,!1,i["a"],void 0);t["default"]=s.exports},f6ae:function(e,t,n){"use strict";var i=n("2f3d"),r=n.n(i);r.a}}]);