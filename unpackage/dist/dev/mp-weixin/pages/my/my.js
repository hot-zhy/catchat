(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{205:function(n,t,e){"use strict";(function(n,t){var a=e(4);e(26),e(27);a(e(25));var o=a(e(206));n.__webpack_require_UNI_MP_PLUGIN__=e,t(o.default)}).call(this,e(1)["default"],e(2)["createPage"])},206:function(n,t,e){"use strict";e.r(t);var a=e(207),o=e(209);for(var c in o)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(c);e(212);var i,r=e(50),u=Object(r["default"])(o["default"],a["render"],a["staticRenderFns"],!1,null,null,null,!1,a["components"],i);u.options.__file="pages/my/my.vue",t["default"]=u.exports},207:function(n,t,e){"use strict";e.r(t);var a=e(208);e.d(t,"render",(function(){return a["render"]})),e.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return a["recyclableRender"]})),e.d(t,"components",(function(){return a["components"]}))},208:function(n,t,e){"use strict";var a;e.r(t),e.d(t,"render",(function(){return o})),e.d(t,"staticRenderFns",(function(){return i})),e.d(t,"recyclableRender",(function(){return c})),e.d(t,"components",(function(){return a}));try{a={tqbTabbar:function(){return e.e("components/tqb-tabbar/tqb-tabbar").then(e.bind(null,471))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var n=this,t=n.$createElement;n._self._c},c=!1,i=[];o._withStripped=!0},209:function(n,t,e){"use strict";e.r(t);var a=e(210),o=e.n(a);for(var c in a)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(c);t["default"]=o.a},210:function(n,t,e){"use strict";(function(n,a){var o=e(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,i=o(e(183)),r=(e(211),{data:function(){return{screenHeight:0,arr:[{src:"https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/yonghuxieyi@2x.png",title:"用户协议"},{src:"https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/yinsizhengce@2x.png",title:"隐私政策"},{src:"https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/lianxiwomen@2x.png",title:"联系我们"},{src:"https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/shezhi@2x.png",title:"设置"}],token:"",vals:"",avatar:"",nickname:""}},onLoad:function(){this.screenHeight=n.getSystemInfoSync().windowHeight},onShow:function(){c=this,n.getStorage({key:"token",success:function(n){c.token=n.data,c.cent()},fail:function(){c.token="",c.avatar="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/catt.png",c.nickname="未登录"}})},methods:{mySettings:function(){i.default.play_ding(),""==c.token?n.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"}):n.navigateTo({url:"/pages/my/set"})},cent:function(){a.callFunction({name:"cloudd",data:{token:c.token}}).then((function(n){c.vals=n.result.data[0],c.avatar="https://chatcat-1312908194.cos.ap-shanghai.myqcloud.com/bg3.png",c.nickname=n.result.data[0].nickname})).catch((function(n){console.error(n)}))},sets:function(){i.default.play_ding(),""==c.token?n.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"}):n.navigateTo({url:"/pages/my/set"})},main_bs:function(t){0==t?n.navigateTo({url:"/pages/my/home"}):1==t?n.navigateTo({url:"/pages/my/index"}):2==t?n.navigateTo({url:"/pages/my/service"}):3==t&&(""==c.token?n.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"}):n.navigateTo({url:"/pages/my/set"}))}}});t.default=r}).call(this,e(2)["default"],e(27)["default"])},212:function(n,t,e){"use strict";e.r(t);var a=e(213),o=e.n(a);for(var c in a)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(c);t["default"]=o.a},213:function(n,t,e){}},[[205,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map