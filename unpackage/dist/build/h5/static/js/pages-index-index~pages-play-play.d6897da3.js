(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index~pages-play-play"],{"07d5":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-status-bar",style:{height:this.statusBarHeight}},[this._t("default")],2)},i=[]},"092b":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tqb-tabbar[data-v-524e42fc]{position:fixed;top:0;left:0;width:100%;z-index:1000}.tqb-tabbar-body[data-v-524e42fc]{border-radius:%?80?%;height:%?150?%;display:flex;background:linear-gradient(90deg,#fff,#fdffe0);position:fixed;bottom:%?45?%;width:%?704?%;left:%?24?%;z-index:1001;padding-top:%?8?%;box-shadow:0 0 %?30?% %?9?% rgba(13,6,0,.1)}.tqb-tabbar-body .tqb-tabbar-item[data-v-524e42fc]{flex:1;display:flex;justify-content:center;text-align:center}.tqb-tabbar-body .tqb-tabbar-item .tabbar-item-icon[data-v-524e42fc]{display:flex;justify-content:center}.tqb-tabbar-body .tqb-tabbar-item .tab-bar-text[data-v-524e42fc]{color:#999;font-size:%?28?%;margin-top:%?9?%}.tqb-tabbar-body .tqb-tabbar-item .active[data-v-524e42fc]{color:#ce915b}',""]),t.exports=e},"0ab5":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-status-bar[data-v-90ccf07e]{height:20px}',""]),t.exports=e},"12bd":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i=a(n("4dfe")),r=function(t){return"number"===typeof t?t+"px":t},o={name:"UniNavBar",components:{statusBar:i.default},emits:["clickLeft","clickRight","clickTitle"],props:{dark:{type:Boolean,default:!1},title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:""},backgroundColor:{type:String,default:""},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0},height:{type:[Number,String],default:44},leftWidth:{type:[Number,String],default:60},rightWidth:{type:[Number,String],default:60},stat:{type:[Boolean,String],default:""}},computed:{themeBgColor:function(){return this.dark?this.backgroundColor?this.backgroundColor:this.dark?"#333":"#FFF":this.backgroundColor||"#FFF"},themeColor:function(){return this.dark?this.color?this.color:this.dark?"#fff":"#333":this.color||"#333"},navbarHeight:function(){return r(this.height)},leftIconWidth:function(){return r(this.leftWidth)},rightIconWidth:function(){return r(this.rightWidth)}},mounted:function(){uni.report&&this.stat&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")},onClickTitle:function(){this.$emit("clickTitle")}}};e.default=o},1640:function(t,e,n){"use strict";var a=n("2fa5"),i=n.n(a);i.a},"2fa5":function(t,e,n){var a=n("092b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("05b9e449",a,!0,{sourceMap:!1,shadowMode:!1})},"43ec":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-nav-bar-text[data-v-db825918]{font-size:14px}.uni-nav-bar-right-text[data-v-db825918]{font-size:12px}.uni-navbar__content[data-v-db825918]{position:relative;background-color:initial}.uni-navbar-btn-text[data-v-db825918]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;line-height:12px}.uni-navbar__header[data-v-db825918]{display:flex;padding:0 10px;flex-direction:row;height:44px;font-size:12px}.uni-navbar__header-btns[data-v-db825918]{overflow:hidden;display:flex;flex-wrap:nowrap;flex-direction:row;width:%?120?%;justify-content:center;align-items:center;cursor:pointer}.uni-navbar__header-btns-left[data-v-db825918]{display:flex;width:%?120?%;justify-content:flex-start;align-items:center}.uni-navbar__header-btns-right[data-v-db825918]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-navbar__header-container[data-v-db825918]{display:flex;flex:1;padding:0 10px;overflow:hidden}.uni-navbar__header-container-inner[data-v-db825918]{display:flex;flex:1;flex-direction:row;align-items:center;justify-content:center;font-size:12px;overflow:hidden}.uni-navbar__placeholder-view[data-v-db825918]{height:44px}.uni-navbar--fixed[data-v-db825918]{position:fixed;z-index:998;left:var(--window-left);right:var(--window-right)}.uni-navbar--shadow[data-v-db825918]{box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-db825918]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#eee}.uni-ellipsis-1[data-v-db825918]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},"4dfe":function(t,e,n){"use strict";n.r(e);var a=n("07d5"),i=n("568b");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("a1b8");var o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"90ccf07e",null,!1,a["a"],void 0);e["default"]=s.exports},"568b":function(t,e,n){"use strict";n.r(e);var a=n("930c"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"5ace":function(t,e,n){"use strict";n.r(e);var a=n("ddc9"),i=n("93f0");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("b979");var o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"db825918",null,!1,a["a"],void 0);e["default"]=s.exports},"930c":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniStatusBar",data:function(){return{statusBarHeight:20}},mounted:function(){this.statusBarHeight=uni.getSystemInfoSync().statusBarHeight+"px"}};e.default=a},"93f0":function(t,e,n){"use strict";n.r(e);var a=n("12bd"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},a023:function(t,e,n){var a=n("43ec");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("3b53b2a6",a,!0,{sourceMap:!1,shadowMode:!1})},a1b8:function(t,e,n){"use strict";var a=n("da6e"),i=n.n(a);i.a},af09:function(t,e,n){"use strict";n.r(e);var a=n("f3ec"),i=n("bf4c");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("1640");var o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"524e42fc",null,!1,a["a"],void 0);e["default"]=s.exports},b979:function(t,e,n){"use strict";var a=n("a023"),i=n.n(a);i.a},bf4c:function(t,e,n){"use strict";n.r(e);var a=n("d2d2"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},d2d2:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:["activeIndex"],data:function(){return{tabBarList:[{pagePath:"/pages/play/play",selectedIconPath:"/static/cat_one.png",iconPath:"/static/cat_one_selected.png",text:"玩耍"},{pagePath:"/pages/index/index",selectedIconPath:"/static/cat_two.png",iconPath:"/static/cat_two_selected.png",text:"聊天"},{pagePath:"/pages/my/my",selectedIconPath:"/static/cat_three.png",iconPath:"/static/cat_three_selected.png",text:"我的"}]}},watch:{visible:function(t){}},methods:{switchClick:function(t,e){e!=this.activeIndex&&uni.switchTab({url:t.pagePath})}}};e.default=a},da6e:function(t,e,n){var a=n("0ab5");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("21937deb",a,!0,{sourceMap:!1,shadowMode:!1})},ddc9:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uniIcons:n("4a3f").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-navbar",class:{"uni-dark":t.dark,"uni-nvue-fixed":t.fixed}},[n("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border},style:{"background-color":t.themeBgColor}},[t.statusBar?n("status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__header",style:{color:t.themeColor,backgroundColor:t.themeBgColor,height:t.navbarHeight}},[n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left",style:{width:t.leftIconWidth},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t._t("left",[t.leftIcon.length>0?n("v-uni-view",{staticClass:"uni-navbar__content_view"},[n("uni-icons",{attrs:{color:t.themeColor,type:t.leftIcon,size:"20"}})],1):t._e(),t.leftText.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length>0}},[n("v-uni-text",{style:{color:t.themeColor,fontSize:"12px"}},[t._v(t._s(t.leftText))])],1):t._e()])],2),n("v-uni-view",{staticClass:"uni-navbar__header-container ",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickTitle.apply(void 0,arguments)}}},[t._t("default",[t.title.length>0?n("v-uni-view",{staticClass:"uni-navbar__header-container-inner"},[n("v-uni-text",{staticClass:"uni-nav-bar-text uni-ellipsis-1",style:{color:t.themeColor}},[t._v(t._s(t.title))])],1):t._e()])],2),n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-right",style:{width:t.rightIconWidth},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t._t("right",[t.rightIcon.length?n("v-uni-view",[n("uni-icons",{attrs:{color:t.themeColor,type:t.rightIcon,size:"22"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text"},[n("v-uni-text",{staticClass:"uni-nav-bar-right-text",style:{color:t.themeColor}},[t._v(t._s(t.rightText))])],1):t._e()])],2)],1)],1),t.fixed?n("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?n("status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__placeholder-view",style:{height:t.navbarHeight}})],1):t._e()],1)},r=[]},f3ec:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tqb-tabbar"},[n("v-uni-view",{staticClass:"tqb-tabbar-body"},t._l(t.tabBarList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"tqb-tabbar-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.switchClick(e,a)}}},[n("v-uni-view",{staticClass:"tabbar-item-body"},[n("v-uni-view",{staticClass:"tabbar-item-icon"},[n("v-uni-image",{staticStyle:{width:"100rpx",height:"100rpx"},attrs:{src:t.activeIndex==a?e.selectedIconPath:e.iconPath}})],1),n("v-uni-view",{class:[t.activeIndex==a?"active":"","tab-bar-text"]},[t._v(t._s(e.text))])],1)],1)})),1)],1)},i=[]}}]);