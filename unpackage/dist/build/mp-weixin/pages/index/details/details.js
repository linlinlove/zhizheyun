(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/details/details"],{"066d":function(e,t,n){},"096a":function(e,t,n){"use strict";n.r(t);var a=n("b1d1"),i=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=i.a},"2e3d":function(e,t,n){"use strict";(function(e,t){var a=n("4ea4");n("e25e");a(n("66fd"));var i=a(n("da29"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},7868:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}));var a={uParse:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-parse/u-parse")]).then(n.bind(null,"0bbe"))}},i=function(){var e=this.$createElement;this._self._c},u=[]},"816c":function(e,t,n){"use strict";var a=n("066d"),i=n.n(a);i.a},b1d1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("692a"),i={components:{},data:function(){return{id:"",content:"",title:"",showPreview:!0,fileUrl:"http://yzzc.westts.cn//uploads/user/109/annex/cb79e362856449aff661d6c2aaca61c4.pdf"}},onLoad:function(e){this.id=e.id,this.getDetails()},methods:{getDetails:function(){var e=this;(0,a.curriculumDetails)({id:this.id}).then((function(t){console.log(t),1==t.code&&(e.content=t.data.content,e.title=t.data.name)}))}}};t.default=i},da29:function(e,t,n){"use strict";n.r(t);var a=n("7868"),i=n("096a");for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);n("816c");var c=n("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"095a4d65",null,!1,a["a"],void 0);t["default"]=o.exports}},[["2e3d","common/runtime","common/vendor"]]]);