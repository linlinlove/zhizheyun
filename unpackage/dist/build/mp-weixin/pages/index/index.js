(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"3fdb":function(n,t,e){"use strict";var o=e("8058"),c=e.n(o);c.a},"4f2e":function(n,t,e){"use strict";e.r(t);var o=e("9720"),c=e("c233");for(var i in c)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return c[n]}))}(i);e("3fdb");var r=e("f0c5"),u=Object(r["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=u.exports},"75d2":function(n,t,e){"use strict";(function(n,t){var o=e("4ea4");e("e25e");o(e("66fd"));var c=o(e("4f2e"));n.__webpack_require_UNI_MP_PLUGIN__=e,t(c.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},8058:function(n,t,e){},9720:function(n,t,e){"use strict";e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return o}));var o={uBackTop:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-back-top/u-back-top")]).then(e.bind(null,"e6d0"))}},c=function(){var n=this.$createElement;this._self._c},i=[]},c233:function(n,t,e){"use strict";e.r(t);var o=e("c761"),c=e.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t["default"]=c.a},c761:function(n,t,e){"use strict";(function(n){var o=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(e("2eee")),i=o(e("c973")),r=e("692a"),u={components:{indexIconTitle:function(){e.e("components/index/indexIconTitle").then(function(){return resolve(e("be09"))}.bind(null,e)).catch(e.oe)},live:function(){e.e("components/index/live").then(function(){return resolve(e("87c7"))}.bind(null,e)).catch(e.oe)},hotProject:function(){e.e("components/index/hotProject").then(function(){return resolve(e("8baf"))}.bind(null,e)).catch(e.oe)},hotJob:function(){e.e("components/index/hotJob").then(function(){return resolve(e("1bfa"))}.bind(null,e)).catch(e.oe)},community:function(){e.e("components/index/community").then(function(){return resolve(e("459d"))}.bind(null,e)).catch(e.oe)},topCard:function(){e.e("components/index/topCard").then(function(){return resolve(e("a275"))}.bind(null,e)).catch(e.oe)},protocol:function(){e.e("components/index/protocol").then(function(){return resolve(e("974f"))}.bind(null,e)).catch(e.oe)}},data:function(){return{data:null,city:"成都",showPro:!1,scrollTop:0,customStyle:{width:"50rpx",color:"#2979ff"}}},onPageScroll:function(n){var t=this;this.scrollTop=n.scrollTop,setTimeout((function(n){t.scrollTop=0}),3e3)},onLoad:function(){var t=this;this.getLiveAndBanner(),this.hotProjectFn(),n.$on("setCity",(function(n){t.city=n.name})),n.$on("answer",(function(n){t.fresh()})),n.$on("argree",(function(n){t.showPro=!1}))},onReady:function(){var t=n.getStorageSync("protocol");this.showPro=!t,console.log(t,"用户协议")},onShow:function(){},methods:{getLiveAndBanner:function(){var n=this;(0,r.indexBanner)().then((function(t){n.data=t.data,console.log(n.data)}))},hotProjectFn:function(){var n=this;return(0,i.default)(c.default.mark((function t(){return c.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$refs.hotJob.indexHotPoptypeFn();case 2:return t.next=4,n.$refs.hotJob.indexHotpositionFn();case 4:return t.next=6,n.$refs.community.getforumList();case 6:case"end":return t.stop()}}),t)})))()},fresh:function(){this.$refs.hotJob.indexHotPoptypeFn(),this.$refs.hotJob.indexHotpositionFn(),this.$refs.community.getforumList("fresh"),this.getLiveAndBanner(),setTimeout((function(){n.stopPullDownRefresh()}),1e3)}},onReachBottom:function(){this.$refs.community.reachBottom()},onPullDownRefresh:function(){this.fresh()}};t.default=u}).call(this,e("543d")["default"])}},[["75d2","common/runtime","common/vendor"]]]);