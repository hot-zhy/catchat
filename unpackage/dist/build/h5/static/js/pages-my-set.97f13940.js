(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-set"],{"0671":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".head[data-v-27661812]{width:100vw;height:%?88?%;background:#fff;display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;z-index:999;font-size:%?36?%;font-weight:500;color:#333}.back[data-v-27661812]{width:%?88?%;height:%?88?%;position:absolute;bottom:0;left:0;display:flex;align-items:center;justify-content:center}.back_pic[data-v-27661812]{width:%?16?%;height:%?30?%}.main_btn[data-v-27661812]{font-size:%?32?%;font-weight:500;color:#fff;width:%?690?%;height:%?98?%;background:#7e3efe;border-radius:%?16?%;display:flex;align-items:center;justify-content:center;margin:%?40?% auto 0 auto}",""]),e.exports=t},"27a7":function(e,t,n){var i=n("0671");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("a93732a2",i,!0,{sourceMap:!1,shadowMode:!1})},a220:function(e,t,n){"use strict";(function(e){n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.store=t.mutations=void 0;var a=i(n("c7eb")),o=i(n("1da1"));n("b64b"),n("d3b7"),n("159b"),n("99af");var s=i(n("6783")),u=i(n("8bf3")),r=i(n("e143")),c=e.importObject("uni-id-co"),l=e.database(),f=l.collection("uni-id-users"),d=uni.getStorageSync("uni-id-pages-userInfo")||{},v={userInfo:d,hasLogin:0!=Object.keys(d).length},g={updateUserInfo:function(){var e=arguments,t=this;return(0,o.default)((0,a.default)().mark((function n(){var i,o;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e.length>0&&void 0!==e[0]&&e[0],console.log(20,i),!i){n.next=6;break}f.where("_id==$env.uid").update(i).then((function(e){e.result.updated?(uni.showToast({title:"更新成功",icon:"none",duration:3e3}),t.setUserInfo(i)):uni.showToast({title:"没有改变",icon:"none",duration:3e3})})),n.next=17;break;case 6:return n.prev=6,n.next=9,f.where("'_id' == $cloudEnv_uid").field("mobile,nickname,username,email,avatar_file").get();case 9:o=n.sent,t.setUserInfo(o.result.data[0]),n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](6),t.setUserInfo({},{cover:!0}),console.error(n.t0.message,n.t0.errCode);case 17:case"end":return n.stop()}}),n,null,[[6,13]])})))()},setUserInfo:function(e){var t=arguments;return(0,o.default)((0,a.default)().mark((function n(){var i,o,s;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.length>1&&void 0!==t[1]?t[1]:{cover:!1},o=i.cover,console.log("set-userInfo",e),s=o?e:Object.assign(p.userInfo,e),p.userInfo=Object.assign({},s),p.hasLogin=0!=Object.keys(p.userInfo).length,console.log("store.userInfo",p.userInfo),uni.setStorage({key:"uni-id-pages-userInfo",data:p.userInfo}),n.abrupt("return",e);case 8:case"end":return n.stop()}}),n)})))()},logout:function(){var t=this;return(0,o.default)((0,a.default)().mark((function n(){var i,o;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(e.getCurrentUserInfo().tokenExpired>Date.now())){n.next=9;break}return n.prev=1,n.next=4,c.logout();case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](1),console.error(n.t0);case 9:uni.removeStorageSync("uni_id_token"),uni.setStorageSync("uni_id_token_expired",0),uni.redirectTo({url:"/".concat(null!==(i=null===(o=s.default.uniIdRouter)||void 0===o?void 0:o.loginPage)&&void 0!==i?i:"uni_modules/uni-id-pages/pages/login/login-withoutpwd")}),uni.$emit("uni-id-pages-logout"),t.setUserInfo({},{cover:!0});case 14:case"end":return n.stop()}}),n,null,[[1,6]])})))()},loginBack:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.uniIdRedirectUrl,n=void 0===t?"":t,i=0,a=getCurrentPages();if(a.forEach((function(e,t){"login"==a[a.length-t-1].route.split("/")[3]&&i++})),n)return uni.reLaunch({url:n});if("weixin"==e.loginType)return window.history.go(-3);if(i){var o=s.default.pages[0];return uni.reLaunch({url:"/".concat(o.path)})}uni.navigateBack({delta:i})},loginSuccess:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.showToast,n=void 0===t||t,i=e.toastText,a=void 0===i?"登录成功":i,o=e.autoBack,s=void 0===o||o,r=e.uniIdRedirectUrl,c=void 0===r?"":r,l=e.passwordConfirmed;if(n&&uni.showToast({title:a,icon:"none",duration:3e3}),this.updateUserInfo(),uni.$emit("uni-id-pages-login-success"),u.default.setPasswordAfterLogin&&!l)return uni.redirectTo({url:c?"/uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd?uniIdRedirectUrl=".concat(c,"&loginType=").concat(e.loginType):"/uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd?loginType=".concat(e.loginType),fail:function(e){console.log(e)}});s&&this.loginBack(c)}};t.mutations=g;var p=r.default.observable(v);t.store=p}).call(this,n("a9ff")["default"])},abe9:function(e,t,n){"use strict";var i=n("27a7"),a=n.n(i);a.a},b414:function(e,t,n){"use strict";(function(e){n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=i(n("c7eb")),s=i(n("1da1")),u=n("a220"),r={data:function(){return{statusBarHeight:"",fase:!1,token:"",fase2:!1}},onLoad:function(){a=this,uni.getSystemInfo({success:function(e){a.statusBarHeight=e.statusBarHeight}}),uni.getStorage({key:"token",success:function(e){a.token=e.data},fail:function(){a.token=""}})},methods:{back:function(){uni.navigateBack({})},on:function(){a.fase=!1},on2:function(){a.fase2=!1},yes:function(){return(0,s.default)((0,o.default)().mark((function e(){return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.fase=!1,e.next=3,u.mutations.logout();case 3:uni.removeStorage({key:"token"});case 4:case"end":return e.stop()}}),e)})))()},yes2:function(){a.fase2=!1,e.callFunction({name:"cloude"}).then((function(e){uni.showToast({title:"注销成功",duration:3e3}),uni.removeStorage({key:"token"}),uni.redirectTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"})})).catch((function(e){console.error(e)}))},btn:function(){a.fase=!0},btn2:function(){a.fase2=!0}}};t.default=r}).call(this,n("a9ff")["default"])},bd08:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{style:{height:"1rpx"}}),n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{staticClass:"main_btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.btn.apply(void 0,arguments)}}},[e._v("退出登录")]),n("v-uni-view",{staticClass:"main_btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.btn2.apply(void 0,arguments)}}},[e._v("注销账号")])],1),e.fase?n("v-uni-view",{staticClass:"showt"},[n("v-uni-view",{staticClass:"showt_box"},[n("v-uni-view",{staticClass:"showt_title pdg"},[e._v("确定要退出登录吗？")]),n("v-uni-view",{staticClass:"showt_btn"},[n("v-uni-view",{staticClass:"showt_btnl",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.on.apply(void 0,arguments)}}},[e._v("取消")]),n("v-uni-view",{staticClass:"showt_btnr",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.yes.apply(void 0,arguments)}}},[e._v("確定")])],1)],1)],1):e._e(),e.fase2?n("v-uni-view",{staticClass:"showt"},[n("v-uni-view",{staticClass:"showt_box"},[n("v-uni-view",{staticClass:"showt_title pdg"},[e._v("注销账号后您的账号及账号的所有内容都将消失，不能再找回，请谨慎操作。您确定还要注销账号吗？")]),n("v-uni-view",{staticClass:"showt_btn"},[n("v-uni-view",{staticClass:"showt_btnl",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.on2.apply(void 0,arguments)}}},[e._v("取消")]),n("v-uni-view",{staticClass:"showt_btnr",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.yes2.apply(void 0,arguments)}}},[e._v("確定")])],1)],1)],1):e._e()],1)},a=[]},c018:function(e,t,n){"use strict";n.r(t);var i=n("bd08"),a=n("ef7a");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("abe9");var s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"27661812",null,!1,i["a"],void 0);t["default"]=u.exports},ef7a:function(e,t,n){"use strict";n.r(t);var i=n("b414"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a}}]);