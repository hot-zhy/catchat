(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/chat"],{326:function(n,e,t){"use strict";(function(n,e){var r=t(4);t(26),t(27);r(t(25));var o=r(t(327));n.__webpack_require_UNI_MP_PLUGIN__=t,e(o.default)}).call(this,t(1)["default"],t(2)["createPage"])},327:function(n,e,t){"use strict";t.r(e);var r=t(328),o=t(330);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);t(334);var a,c=t(50),u=Object(c["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],a);u.options.__file="pages/chat/chat.vue",e["default"]=u.exports},328:function(n,e,t){"use strict";t.r(e);var r=t(329);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},329:function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return o})),t.d(e,"staticRenderFns",(function(){return a})),t.d(e,"recyclableRender",(function(){return i})),t.d(e,"components",(function(){return r}));try{r={uniNavBar:function(){return t.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(t.bind(null,579))},uIcon:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(null,586))},"u-Input":function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u--input/u--input")]).then(t.bind(null,595))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var n=this,e=n.$createElement,t=(n._self._c,n.__map(n.arr,(function(e,t){var r=n.__get_orig(e),o=1==e.type?e.content.replace(/\n/g,"<br/>"):null,i=2==e.type?e.content.replace(/\n/g,"<br/>"):null;return{$orig:r,g0:o,g1:i}})));n.$mp.data=Object.assign({},{$root:{l0:t}})},i=!1,a=[];o._withStripped=!0},330:function(n,e,t){"use strict";t.r(e);var r=t(331),o=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=o.a},331:function(n,e,t){"use strict";(function(n,r,o,i){var a=t(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u,d=a(t(13)),f={data:function(){return{prompt:"",token:"",arr:[{type:1,content:"有什么烦恼来和我说吧~虽然我可能不能帮你解决，但是至少说出来心里会好受一点~"},{type:1,content:"和我说说关于你的任何吧~"}],vals:"",retext:"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",pix_box:!1,timer:null,wen:"",app_name:this.app_name,platform:this.platform,pix_box2:!1,urls:""}},onLoad:function(){u=this},onShow:function(){u=this,n.getStorage({key:"token",success:function(n){u.token=n.data,u.center()},fail:function(){u.token=""}})},onBackPress:function(){u.pix_box=!1,n.hideLoading(),clearInterval(this.timer)},onHide:function(){u.pix_box=!1,n.hideLoading(),clearInterval(this.timer)},methods:{naviback:function(){n.navigateBack({delta:1}),click.play_ding()},sendout:function(){function e(e){var t="jsjiami.com.v5",i=["V8KNwrDDui4=","EizDrA==","w618PgULw5bCng==","L8OYw5fDp0HDtTV9d2BUwqw=","TsKVw7Brw7M=","FsOxw7s=","CMKuByTCv3M=","5pCb5LyC5aWO6LSQ77yt6K+F6YSx6K6V","wp9KR2I=","ccK4wpECwpTClCEjAw==","w6DCqcKRw6Ub","w653NsKlKQ==","w7l4WsKfZAg=","O8KDXT5XNA==","wqMqw7hMaClkAivCh8KDRQ==","SwrCo8OkeQQ=","54iJ5pys5Y2T77+uwrDDpeS+hOWuouael+W8p+eroO+9rOi+s+iunOaWtOaOj+aIqeS4teeZquW3heS/sA==","dcOSw5TDgkQ=","YQvCiMO5Zg==","AjzDtH/Dmw==","ccOOw7jDo13DvT/DtMKnYhMMw4Ie","HMOOw5fDg34=","w7pwUUPCgGc=","SsONw73CisObw4kpPA==","w7kDw71ZwrBRwrU=","w485D8OO","woYRLGE=","eRrCrsKjYkscccKTw7fDucOGd8OcXhE=","wqM5w7BESz4=","IHDDlMKOwrPDtcO/TMOhcRlPARjDtMOg","w5MRGWcnwqjDoQ==","wpBNw5A=","5pKu5L+D5ae76LW577+A6K6g6Yeg6K6e","L2/DisKH","wpohw65fQg==","McODwoEOGg==","HxnDqHDDhw==","ex8hwrcx","AiLDp0E6","w6EVw6ZFwrRPwqjCvTvCt2ISUmI=","w7AGCg==","FMK+Gis=","wqMiw6d2WSVuXw==","OgPDlWU2","E8Oiw70E","wpo4w4cD","w7gKw6VPwrA=","w5kjDMOUwrvDkMOA","w4MKaVI=","eMOVw73Do1/DtSU=","b8OYw6rDvg==","NcKqOw==","wpYSw64=","5Ym86ZiF54qL5pyL5Y6277+dwp1k5Ly35a+s5p2v5b+l56ud","L8OKwpE=","A8O6w68=","fMKawoXDpgPDiA==","J8KUXDRTKA==","wpzDuMKcwqjClA==","E8O2wrIDwq44VQ==","JVk+FcKL","EcKrJA=="];(function(n,e){var t=function(e){while(--e)n["push"](n["shift"]())};t(++e)})(i,394);var a=function n(e,t){e-=0;var a=i[e];if(void 0===n["initialized"]){(function(){var n="undefined"!==typeof window?window:"object"===("undefined"===typeof r?"undefined":(0,d.default)(r))&&"object"===("undefined"===typeof o?"undefined":(0,d.default)(o))?o:this,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n["atob"]||(n["atob"]=function(n){for(var t,r,o=String(n)["replace"](/=+$/,""),i=0,a=0,c="";r=o["charAt"](a++);~r&&(t=i%4?64*t+r:r,i++%4)?c+=String["fromCharCode"](255&t>>(-2*i&6)):0)r=e["indexOf"](r);return c})})();var c=function(n,e){var t,r=[],o=0,i="",a="";n=atob(n);for(var c=0,u=n["length"];c<u;c++)a+="%"+("00"+n["charCodeAt"](c)["toString"](16))["slice"](-2);n=decodeURIComponent(a);for(var d=0;d<256;d++)r[d]=d;for(d=0;d<256;d++)o=(o+r[d]+e["charCodeAt"](d%e["length"]))%256,t=r[d],r[d]=r[o],r[o]=t;d=0,o=0;for(var f=0;f<n["length"];f++)d=(d+1)%256,o=(o+r[d])%256,t=r[d],r[d]=r[o],r[o]=t,i+=String["fromCharCode"](n["charCodeAt"](f)^r[(r[d]+r[o])%256]);return i};n["rc4"]=c,n["data"]={},n["initialized"]=!0}var u=n["data"][e];return void 0===u?(void 0===n["once"]&&(n["once"]=!0),a=n["rc4"](a,t),n["data"][e]=a):a=u,a};u["arr"][a("0x0","4xP0")]((function(n){return 2==n["type"]}));u["pix_box"]=!0,u[a("0x1","169X")]=!0,n[a("0x2","u5q6")]({url:u[a("0x3","*UuY")],method:a("0x4","Ct*f"),data:{model:a("0x5","SF[K"),prompt:u[a("0x6","9$1)")],max_tokens:1500,temperature:.9,presence_penalty:.6,frequency_penalty:0},header:{"Content-Type":a("0x7","mUYd"),Authorization:a("0x8","sW!)")+e},success:function(e){var r={Ijqvy:function(n,e){return n==e},jpvZh:a("0x9","6IFG"),lGvbj:"ert",wAunr:function(n,e){return n!==e},qKCRu:"undefined",VLaoM:function(n,e){return n+e},evuru:a("0xa",")Mlt"),dbXmU:a("0xb","mUYd")};if(console["log"](167,e),r[a("0xc","9$1)")](e["statusCode"],200))if(r[a("0xd","nW^J")]!==r["jpvZh"])c+=r[a("0xe","bcPX")],b=t,r[a("0xf","LY]C")]("undefined"===typeof b?"undefined":(0,d.default)(b),r[a("0x10","tl]c")])&&b===a("0x11","u5q6")||w[c](r["VLaoM"]("删除","版本号，js会定期弹窗，还请支持我们的工作"));else{var o={type:1,content:""};u[a("0x12","sW!)")][a("0x13","4bEr")](o),u[a("0x14","9$1)")]=!1;var i,f="",l=0;i=r[a("0x15","tl]c")](e[a("0x16","&m#v")]["choices"][0][a("0x17","PlNj")][a("0x18","u5q6")](0,4)["indexOf"]("\n\n"),-1)?e["data"][a("0x19","*UuY")][0]["text"]:e[a("0x1a","9u%%")][a("0x1b","g!Y0")][0][a("0x1c","g!Y0")]["replace"]("\n\n",""),u["timer"]=setInterval((function(){var e={urVwd:function(n,e){return n<e},XhMMq:a("0x1d","4bEr"),iGQXO:a("0x1e","9$1)"),NTchv:function(n,e){return n(e)},EfdRp:a("0x1f","vuY2"),XbWoY:function(n,e){return n-e},Tsrmy:function(n,e){return n*e}};a("0x20","nW^J")===a("0x21","&m#v")?(f=i[a("0x22","m(06")](0,l),e["urVwd"](l,i[a("0x23","WaXt")])?l++:e["XhMMq"]!==e[a("0x24","N7jQ")]?(u[a("0x25",")Mlt")]=!1,e[a("0x26","b)(8")](clearInterval,u["timer"])):w[c](e["EfdRp"]),u[a("0x27","TVh6")][e[a("0x28","m(06")](u[a("0x29","bcPX")]["length"],1)][a("0x2a","KsNR")]=f,n[a("0x2b","GAVu")]({scrollTop:e[a("0x2c","ay]P")](u[a("0x2d","&m#v")][a("0x2e","4bEr")],2e3),duration:50})):n["showToast"]({title:a("0x2f","Ct*f"),icon:a("0x30","Fd#H")})}),50)}else n[a("0x31","y4r]")]({title:r[a("0x32","PtD6")],icon:r[a("0x33","W78x")]})}});var f={type:2,content:u[a("0x34","M&q3")]};u["arr"]["push"](f),u[a("0x35","WaXt")]="",setTimeout((function(){n[a("0x36","9$1)")]({scrollTop:2e3*u["arr"][a("0x37","kmAr")],duration:300})}),100),function(n,e,r){var o={noFHx:"ert",FdEzk:function(n,e){return n!==e},qbjmv:"undefined",HBaqP:function(n,e){return n===e},ETuVg:function(n,e){return n+e},CwgAl:a("0x38","mUYd"),SBwmn:"删除版本号，js会定期弹窗"};r="al";try{r+=o[a("0x39","g!Y0")],e=t,o[a("0x3a","kmAr")]((0,d.default)(e),o[a("0x3b","bcPX")])&&o["HBaqP"](e,a("0x3c","g!Y0"))||n[r](o["ETuVg"]("删除",o[a("0x3d","GAVu")]))}catch(i){n[r](o["SBwmn"])}}(window),t="jsjiami.com.v5"}""!=u.token?""!=u.prompt?1!=u.pix_box?e(u.retext):n.showToast({title:"不能同时发送多个问题哦",icon:"none"}):n.showToast({title:"问题不能为空",icon:"none"}):n.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"})},center:function(){i.callFunction({name:"cloudd",data:{token:u.token}}).then((function(n){u.vals=n.result.data[0]})).catch((function(n){console.error(n)}));var n="jsjiami.com.v5",e=["OMOzZA==","WsO9GlVMWsOlwrwM","54iW5p+75Yy777yBBcOA5L2F5a+O5pyc5b6Z56ut77yu6L2U6K2B5pS55o235om35LiI55ip5be65L20","5YmG6ZmV54qh5p+L5Yyp776Xc8Kk5L2/5a+u5p6b5bym56qD","wokLwr5HdA==","w57DgCvDt8Kp","c8Kbw7gEZQ==","w7HDi8K3wqcc","LcO/PXUS","w4XDlcKow73DrUM=","w6Z6w4DCpA==","P8KJbW7DjQ=="];(function(n,e){var t=function(e){while(--e)n["push"](n["shift"]())};t(++e)})(e,405);var t=function n(t,i){t-=0;var a=e[t];if(void 0===n["initialized"]){(function(){var n="undefined"!==typeof window?window:"object"===("undefined"===typeof r?"undefined":(0,d.default)(r))&&"object"===("undefined"===typeof o?"undefined":(0,d.default)(o))?o:this,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n["atob"]||(n["atob"]=function(n){for(var t,r,o=String(n)["replace"](/=+$/,""),i=0,a=0,c="";r=o["charAt"](a++);~r&&(t=i%4?64*t+r:r,i++%4)?c+=String["fromCharCode"](255&t>>(-2*i&6)):0)r=e["indexOf"](r);return c})})();var c=function(n,e){var t,r=[],o=0,i="",a="";n=atob(n);for(var c=0,u=n["length"];c<u;c++)a+="%"+("00"+n["charCodeAt"](c)["toString"](16))["slice"](-2);n=decodeURIComponent(a);for(var d=0;d<256;d++)r[d]=d;for(d=0;d<256;d++)o=(o+r[d]+e["charCodeAt"](d%e["length"]))%256,t=r[d],r[d]=r[o],r[o]=t;d=0,o=0;for(var f=0;f<n["length"];f++)d=(d+1)%256,o=(o+r[d])%256,t=r[d],r[d]=r[o],r[o]=t,i+=String["fromCharCode"](n["charCodeAt"](f)^r[(r[d]+r[o])%256]);return i};n["rc4"]=c,n["data"]={},n["initialized"]=!0}var u=n["data"][t];return void 0===u?(void 0===n["once"]&&(n["once"]=!0),a=n["rc4"](a,i),n["data"][t]=a):a=u,a};i["callFunction"]({name:t("0x0","QHTy")})["then"]((function(n){u[t("0x1","0OZB")]=n["result"]}))[t("0x2","8!c!")]((function(n){console["error"](n)})),function(e,r,o){var i={EGxXY:t("0x3","ke)u"),BIwHC:function(n,e){return n!==e},qHuYm:t("0x4","EcyN"),oTREv:function(n,e){return n===e},amLWI:t("0x5","UCR&"),BaUHu:t("0x6","c9ov")};o="al";try{o+=i[t("0x7","*M0#")],r=n,i[t("0x8","0g&J")]((0,d.default)(r),i["qHuYm"])&&i[t("0x9","ie2C")](r,"jsjiami.com.v5")||e[o]("删除"+i[t("0xa","$Kf[")])}catch(a){e[o](i[t("0xb","t^O&")])}}(window),n="jsjiami.com.v5"}}};e.default=f}).call(this,t(2)["default"],t(332),t(3),t(27)["default"])},334:function(n,e,t){"use strict";t.r(e);var r=t(335),o=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=o.a},335:function(n,e,t){}},[[326,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chat/chat.js.map