(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/list/search/search"],{254:function(e,t,n){"use strict";(function(e,t){var i=n(4);n(26),n(27);i(n(25));var o=i(n(255));e.__webpack_require_UNI_MP_PLUGIN__=n,t(o.default)}).call(this,n(1)["default"],n(2)["createPage"])},255:function(e,t,n){"use strict";n.r(t);var i=n(256),o=n(258);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n(260),n(262),n(264);var c,s=n(50),r=Object(s["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,"d9cb46f2",null,!1,i["components"],c);r.options.__file="pages/list/search/search.nvue",t["default"]=r.exports},256:function(e,t,n){"use strict";n.r(t);var i=n(257);n.d(t,"render",(function(){return i["render"]})),n.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(t,"components",(function(){return i["components"]}))},257:function(e,t,n){"use strict";var i;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return c})),n.d(t,"recyclableRender",(function(){return a})),n.d(t,"components",(function(){return i}));try{i={uniSearchBar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar")]).then(n.bind(null,478))},uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,551))},unicloudDb:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/@dcloudio/uni-cli-shared/components/unicloud-db")]).then(n.bind(null,489))},uniList:function(){return n.e("uni_modules/uni-list/components/uni-list/uni-list").then(n.bind(null,500))},uniListItem:function(){return n.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(n.bind(null,507))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.localSearchList.length),i=e.$hasScopedSlotsParams("d9c30b22-6"),o=i?e.$getScopedSlotsParams("d9c30b22-6","default","loading")&&!e.netHotListIsHide:null,a=!i||o||e.netHotListIsHide?null:e.$getScopedSlotsParams("d9c30b22-6","default","error"),c=i&&!o&&!e.netHotListIsHide&&a?e.$getScopedSlotsParams("d9c30b22-6","default","error"):null,s=!i||o||e.netHotListIsHide||a?null:e.$getScopedSlotsParams("d9c30b22-6","default","data");e._isMounted||(e.e0=function(t){e.localSearchListDel=!0},e.e1=function(t){e.localSearchListDel=!1},e.e2=function(t){e.netHotListIsHide=!e.netHotListIsHide},e.e3=function(t,n){var i=arguments[arguments.length-1].currentTarget.dataset,o=i.eventParams||i["event-params"];n=o.word;return e.search(n.content)}),e.$mp.data=Object.assign({},{$root:{g0:n,m0:i,m1:o,m2:a,m3:c,l0:s}})},a=!1,c=[];o._withStripped=!0},258:function(e,t,n){"use strict";n.r(t);var i=n(259),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},259:function(e,t,n){"use strict";(function(e,i){var o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(11)),c="opendb-search-log",s="opendb-news-articles",r="title",l="_id,title",u="__local_search_history",d=function(e){for(var t=e.length-1;t>=0;t--){var n=e.indexOf(e[t]),i=e.lastIndexOf(e[t]);n!=i&&e.splice(i,1)}return e};function h(e,t,n){var i=e,o=null,a=!0;return n&&i(),function(){var e=arguments,n=this;a&&(a=!1,i.apply(n,e)),o&&clearTimeout(o),o=setTimeout((function(){clearTimeout(o),o=null,i.apply(n,e)}),t||200)}}var f={data:function(){return{mallGoodsDbName:s,searchLogDbName:c,statusBarHeight:"0px",localSearchList:e.getStorageSync(u),localSearchListDel:!1,netHotListIsHide:!1,searchText:"",iconColor:"#999999",associativeList:[],keyBoardPopup:!1,hotWorld:"DCloud",focus:!0,speechEngine:"iFly"}},created:function(){var t=this;this.db=i.database(),this.searchLogDb=this.db.collection(this.searchLogDbName),this.mallGoodsDb=this.db.collection(this.mallGoodsDbName),e.onKeyboardHeightChange((function(e){t.keyBoardPopup=0!==e.height})),this.searchText=getApp().globalData.searchText},computed:{associativeShow:function(){return this.searchText&&this.associativeList.length}},onLoad:function(){},methods:{clear:function(e){console.log("res: ",e)},confirm:function(e){this.search(e.value)},cancel:function(t){e.hideKeyboard(),this.searchText="",this.loadList()},search:function(t){(t||this.hotWorld)&&(t?(this.searchText!==t&&(this.searchText=t),this.localSearchListManage(t),this.searchLogDbAdd(t)):this.hotWorld&&(this.searchText=this.hotWorld),e.hideKeyboard(),this.loadList(this.searchText))},localSearchListManage:function(t){var n=e.getStorageSync(u);n.length?(this.localSearchList.unshift(t),d(this.localSearchList),this.localSearchList.length>10&&this.localSearchList.pop()):this.localSearchList=[t],e.setStorageSync(u,this.localSearchList)},LocalSearchListClear:function(){var t=this;e.showModal({content:"确认清空搜索历史吗",confirmText:"删除",confirmColor:"red",cancelColor:"#808080",success:function(n){n.confirm&&(t.localSearchListDel=!1,t.localSearchList=[],e.removeStorageSync(u))}})},LocalSearchlistItemClick:function(t,n){if(this.localSearchListDel)return this.localSearchList.splice(n,1),e.setStorageSync(u,this.localSearchList),void(this.localSearchList.length||(this.localSearchListDel=!1));this.search(t)},searchHotRefresh:function(){this.$refs.udb.refresh()},speech:function(){},searchLogDbAdd:function(e){var t=this;this.getDeviceId().then((function(n){t.searchLogDb.add({device_id:n,content:e,create_date:Date.now()})}))},getDeviceId:function(){return new Promise((function(t,n){var i=e.getStorageSync("uni_id");t(i||e.getSystemInfoSync().system+"_"+Math.random().toString(36).substr(2))}))},associativeClick:function(e){console.log("associativeClick: ",e),this.loadList(e.title)},loadList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";getApp().globalData.searchText=t,e.switchTab({url:"/pages/list/list"})},backPage:function(){e.navigateBack()}},watch:{searchText:h((function(e){var t=this;e?this.mallGoodsDb.where((0,a.default)({},r,new RegExp(e,"gi"))).field(l).get().then((function(e){t.associativeList=e.result.data})):(this.associativeList.length=0,getApp().globalData.searchText="")}),100)}};t.default=f}).call(this,n(2)["default"],n(27)["default"])},260:function(e,t,n){"use strict";n.r(t);var i=n(261),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},261:function(e,t,n){},262:function(e,t,n){"use strict";n.r(t);var i=n(263),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},263:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var i=n(265),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},265:function(e,t,n){}},[[254,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/list/search/search.js.map