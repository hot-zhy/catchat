(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/cloud-image/cloud-image"],{599:function(n,e,t){"use strict";t.r(e);var r=t(600),i=t(602);for(var u in i)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(u);var c,o=t(50),d=Object(o["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],c);d.options.__file="uni_modules/uni-id-pages/components/cloud-image/cloud-image.vue",e["default"]=d.exports},600:function(n,e,t){"use strict";t.r(e);var r=t(601);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},601:function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return i})),t.d(e,"staticRenderFns",(function(){return c})),t.d(e,"recyclableRender",(function(){return u})),t.d(e,"components",(function(){return r}));var i=function(){var n=this,e=n.$createElement;n._self._c},u=!1,c=[];i._withStripped=!0},602:function(n,e,t){"use strict";t.r(e);var r=t(603),i=t.n(r);for(var u in r)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(u);e["default"]=i.a},603:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={name:"cloud-image",emits:["click"],props:{mode:{type:String,default:function(){return"widthFix"}},src:{default:function(){return""}},width:{type:String,default:function(){return"100rpx"}},height:{type:String,default:function(){return"100rpx"}}},watch:{src:{handler:function(e){var t=this;e&&"cloud://"==e.substring(0,8)?n.getTempFileURL({fileList:[e]}).then((function(n){t.cSrc=n.fileList[0].tempFileURL})):this.cSrc=e},immediate:!0}},methods:{onClick:function(){this.$emit("click")}},data:function(){return{cSrc:!1}}};e.default=t}).call(this,t(27)["default"])}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-id-pages/components/cloud-image/cloud-image.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/cloud-image/cloud-image-create-component',
    {
        'uni_modules/uni-id-pages/components/cloud-image/cloud-image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(599))
        })
    },
    [['uni_modules/uni-id-pages/components/cloud-image/cloud-image-create-component']]
]);
