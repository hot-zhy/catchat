(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ucenter/read-news-log/read-news-log"],{303:function(e,n,t){"use strict";(function(e,n){var o=t(4);t(26),t(27);o(t(25));var a=o(t(304));e.__webpack_require_UNI_MP_PLUGIN__=t,n(a.default)}).call(this,t(1)["default"],t(2)["createPage"])},304:function(e,n,t){"use strict";t.r(n);var o=t(305),a=t(307);for(var r in a)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(r);t(309);var i,u=t(50),s=Object(u["default"])(a["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],i);s.options.__file="pages/ucenter/read-news-log/read-news-log.vue",n["default"]=s.exports},305:function(e,n,t){"use strict";t.r(n);var o=t(306);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},306:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return a})),t.d(n,"staticRenderFns",(function(){return i})),t.d(n,"recyclableRender",(function(){return r})),t.d(n,"components",(function(){return o}));try{o={unicloudDb:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/@dcloudio/uni-cli-shared/components/unicloud-db")]).then(t.bind(null,489))},uniList:function(){return t.e("uni_modules/uni-list/components/uni-list/uni-list").then(t.bind(null,500))},uniListItem:function(){return t.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(t.bind(null,507))},uniDateformat:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat")]).then(t.bind(null,514))},uniLoadState:function(){return Promise.all([t.e("common/vendor"),t.e("components/uni-load-state/uni-load-state")]).then(t.bind(null,520))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,n=e.$createElement,t=(e._self._c,e.$hasScopedSlotsParams("a772113e-1")),o=t?e.$getScopedSlotsParams("a772113e-1","default","data"):null,a=t?{data:e.$getScopedSlotsParams("a772113e-1","default","data"),pagination:e.$getScopedSlotsParams("a772113e-1","default","pagination"),hasMore:e.$getScopedSlotsParams("a772113e-1","default","hasMore"),loading:e.$getScopedSlotsParams("a772113e-1","default","loading"),error:e.$getScopedSlotsParams("a772113e-1","default","error")}:null;e._isMounted||(e.e0=function(n){e.isLoading},e.e1=function(n){e.isLoading},e.e2=function(n,t){var o=arguments[arguments.length-1].currentTarget.dataset,a=o.eventParams||o["event-params"];t=a.item;return e.handleItemClick(t)}),e.$mp.data=Object.assign({},{$root:{m0:t,l0:o,a0:a}})},r=!1,i=[];a._withStripped=!0},307:function(e,n,t){"use strict";t.r(n);var o=t(308),a=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=a.a},308:function(e,n,t){"use strict";(function(e){var o=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t(13)),r={data:function(){return{isLoading:!0,loadMore:{contentdown:"",contentrefresh:"",contentnomore:""},readNewsLog:[],udbWhere:""}},onLoad:function(){this.readNewsLog=e.getStorageSync("readNewsLog")||[];var n=this.readNewsLog.map((function(e){var n=e.article_id;return n}));console.log((0,a.default)(n),n),this.udbWhere='"_id" in '.concat(JSON.stringify(n)),e.setNavigationBarTitle({title:this.$t("newsLog.navigationBarTitle")})},onPullDownRefresh:function(){this.refreshData()},onReachBottom:function(){this.$refs.udb.loadMore()},methods:{refreshData:function(){this.$refs.udb.loadData({clear:!0},(function(n){e.stopPullDownRefresh()}))},handleItemClick:function(n){e.navigateTo({url:"/pages/list/detail?id="+n._id+"&title="+n.title})}}};n.default=r}).call(this,t(2)["default"])},309:function(e,n,t){"use strict";t.r(n);var o=t(310),a=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=a.a},310:function(e,n,t){}},[[303,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/ucenter/read-news-log/read-news-log.js.map