require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["resume_pages/cecord_look/cecord_look"],{"7d0a":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var o=function(){var e=this.$createElement;this._self._c},a=[]},"7fcf":function(e,t,n){},8761:function(e,t,n){"use strict";var o=n("7fcf"),a=n.n(o);a.a},"980a":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("692a"),a={components:{jobPostingCom:function(){n.e("resume_pages/components/job_posting").then(function(){return resolve(n("ed31"))}.bind(null,n)).catch(n.oe)}},data:function(){return{data:null}},onLoad:function(){var e=this;(0,o.online)().then((function(t){e.data=t.data,console.log(e.data)}))},methods:{tishi:function(){e.showToast({title:"请选择简历头像人照",icon:"none"})},onChooseAvatar:function(t){e.setStorageSync("resume_avatar",t.detail.avatarUrl),this.jumpMyResume1()},jumpMyResume1:function(){e.navigateTo({url:"/resume_pages/cecord_look/resume_look"})},jumpMyResume2:function(){this.tishi(),e.chooseMedia({count:1,mediaType:["image"],sourceType:["album","camera"],maxDuration:30,camera:"back",success:function(t){console.log(t.tempFiles[0].tempFilePath),e.setStorageSync("resume_avatar",t.tempFiles[0].tempFilePath),e.navigateTo({url:"/resume_pages/cecord_look/resume_look"})}})},jumpMyResumeList:function(){e.navigateTo({url:"/resume_pages/resume_list/resume_list"})}}};t.default=a}).call(this,n("543d")["default"])},ad9e:function(e,t,n){"use strict";(function(e,t){var o=n("4ea4");n("e25e");o(n("66fd"));var a=o(n("ed72"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},e9df:function(e,t,n){"use strict";n.r(t);var o=n("980a"),a=n.n(o);for(var u in o)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=a.a},ed72:function(e,t,n){"use strict";n.r(t);var o=n("7d0a"),a=n("e9df");for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("8761");var c=n("f0c5"),i=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"bd17ffc4",null,!1,o["a"],void 0);t["default"]=i.exports}},[["ad9e","common/runtime","common/vendor"]]]);