(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-read-news-log-read-news-log"],{"254d":function(t,e,n){"use strict";var a=n("fd9c"),i=n.n(a);i.a},"799d":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("53ca"));n("d81d"),n("e9c4");var o={data:function(){return{isLoading:!0,loadMore:{contentdown:"",contentrefresh:"",contentnomore:""},readNewsLog:[],udbWhere:""}},onLoad:function(){this.readNewsLog=uni.getStorageSync("readNewsLog")||[];var t=this.readNewsLog.map((function(t){var e=t.article_id;return e}));console.log((0,i.default)(t),t),this.udbWhere='"_id" in '.concat(JSON.stringify(t)),uni.setNavigationBarTitle({title:this.$t("newsLog.navigationBarTitle")})},onPullDownRefresh:function(){this.refreshData()},onReachBottom:function(){this.$refs.udb.loadMore()},methods:{refreshData:function(){this.$refs.udb.loadData({clear:!0},(function(t){uni.stopPullDownRefresh()}))},handleItemClick:function(t){uni.navigateTo({url:"/pages/list/detail?id="+t._id+"&title="+t.title})}}};e.default=o},"7f3b":function(t,e,n){"use strict";n.r(e);var a=n("eef9"),i=n("9da1");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("254d");var r=n("f0c5"),d=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"013f2c96",null,!1,a["a"],void 0);e["default"]=d.exports},"9da1":function(t,e,n){"use strict";n.r(e);var a=n("799d"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},bbac:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".item[data-v-013f2c96]{display:flex;flex-direction:column}.article-date[data-v-013f2c96]{color:#c8c7cc}",""]),t.exports=e},eef9:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={unicloudDb:n("960d").default,uniList:n("0e4e").default,uniListItem:n("4510").default,uniDateformat:n("3da0").default,uniLoadState:n("2d4a").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("unicloud-db",{ref:"udb",attrs:{where:t.udbWhere,collection:"opendb-news-articles",field:"title,_id","page-size":10},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.isLoading},error:function(e){arguments[0]=e=t.$handleEvent(e),t.isLoading}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data,i=e.pagination,o=e.loading,r=e.hasMore,d=e.error;return[n("uni-list",t._l(a,(function(e,a){return n("uni-list-item",{key:a,attrs:{clickable:!0},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleItemClick(e)}},scopedSlots:t._u([{key:"body",fn:function(){return[n("v-uni-view",{staticClass:"item"},[n("v-uni-text",[t._v(t._s(e.title))]),n("uni-dateformat",{staticClass:"article-date",attrs:{date:t.readNewsLog[a].last_time,format:"yyyy-MM-dd hh:mm",threshold:[0,0]}})],1)]},proxy:!0}],null,!0)})})),1),n("uni-load-state",{attrs:{state:{data:a,pagination:i,hasMore:r,loading:o,error:d}},on:{networkResume:function(e){arguments[0]=e=t.$handleEvent(e),t.refreshData.apply(void 0,arguments)}}})]}}])})],1)},o=[]},fd9c:function(t,e,n){var a=n("bbac");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("61b6fa10",a,!0,{sourceMap:!1,shadowMode:!1})}}]);