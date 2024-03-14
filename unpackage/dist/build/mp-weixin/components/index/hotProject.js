(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/index/hotProject"],{"0ffe":function(n,e,t){"use strict";t.r(e);var o=t("ab17"),i=t.n(o);for(var u in o)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=i.a},"8baf":function(n,e,t){"use strict";t.r(e);var o=t("a506"),i=t("0ffe");for(var u in i)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(u);t("dedb");var r=t("f0c5"),a=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"59cbb856",null,!1,o["a"],void 0);e["default"]=a.exports},a506:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return o}));var o={uSwiper:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-swiper/u-swiper")]).then(t.bind(null,"68d2"))}},i=function(){var n=this.$createElement;this._self._c},u=[]},ab17:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{list:{type:Array,default:[]}},components:{moduleHead:function(){t.e("components/common/moduleHead").then(function(){return resolve(t("d23f"))}.bind(null,t)).catch(t.oe)}},methods:{goDetails:function(e){1==this.list[e].jump_data&&(console.log(this.list[e].enterprise_id),n.navigateTo({url:"/pages/position/company_detail?id="+this.list[e].enterprise_id}))}},onShow:function(){console.log(this.list)}};e.default=o}).call(this,t("543d")["default"])},b7b3:function(n,e,t){},dedb:function(n,e,t){"use strict";var o=t("b7b3"),i=t.n(o);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/index/hotProject-create-component',
    {
        'components/index/hotProject-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8baf"))
        })
    },
    [['components/index/hotProject-create-component']]
]);
