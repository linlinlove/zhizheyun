(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/question_answering"],{"030f":function(n,t,e){"use strict";var u=e("916b"),i=e.n(u);i.a},"232e":function(n,t,e){"use strict";e.r(t);var u=e("fc2c"),i=e.n(u);for(var o in u)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(o);t["default"]=i.a},"6aa2":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return u}));var u={uniEasyinput:function(){return e.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(e.bind(null,"f805"))},uNotify:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-notify/u-notify")]).then(e.bind(null,"22b5"))}},i=function(){var n=this.$createElement;this._self._c},o=[]},"916b":function(n,t,e){},"9c9d":function(n,t,e){"use strict";e.r(t);var u=e("6aa2"),i=e("232e");for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("030f");var a=e("f0c5"),c=Object(a["a"])(i["default"],u["b"],u["c"],!1,null,"5fda01bd",null,!1,u["a"],void 0);t["default"]=c.exports},b2af:function(n,t,e){"use strict";(function(n,t){var u=e("4ea4");e("e25e");u(e("66fd"));var i=u(e("9c9d"));n.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},fc2c:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=e("692a"),i={components:{buttonOperation:function(){e.e("components/common/buttonOperation").then(function(){return resolve(e("fbd6"))}.bind(null,e)).catch(e.oe)}},data:function(){return{id:null,data:null,substance:""}},onLoad:function(n){this.id=n.id,this.getforumData()},onReady:function(){},methods:{getforumData:function(){var n=this;(0,u.forumDetail)({id:this.id}).then((function(t){n.data=t.data.substance}))},tapBtn:function(){var t=this;(0,u.answerForum)({id:this.id,substance:this.substance}).then((function(e){1==e.code&&"成功"==e.msg&&(t.$refs.uNotify.success("回复成功"),n.$emit("answer",(function(n){})),setTimeout((function(){n.navigateTo({url:"/pages/index/forum_detail?id="+t.id})}),1e3))}))}}};t.default=i}).call(this,e("543d")["default"])}},[["b2af","common/runtime","common/vendor"]]]);