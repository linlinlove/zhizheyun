(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-tag/u-tag"],{"0930":function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return r})),i.d(n,"a",(function(){return e}));var e={uTransition:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uview-ui/components/u-transition/u-transition")]).then(i.bind(null,"16d6"))},uIcon:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(i.bind(null,"c7c3"))}},o=function(){var t=this,n=t.$createElement,i=(t._self._c,t.__get_style([{marginRight:t.closable?"10px":0,marginTop:t.closable?"10px":0},t.style])),e=t.icon?t.$u.test.image(t.icon):null,o=t.icon&&e?t.__get_style([t.imgStyle]):null,r=t.__get_style([t.textColor]);t.$mp.data=Object.assign({},{$root:{s0:i,g0:e,s1:o,s2:r}})},r=[]},"0dd9":function(t,n,i){"use strict";i.r(n);var e=i("332b"),o=i.n(e);for(var r in e)["default"].indexOf(r)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(r);n["default"]=o.a},"332b":function(t,n,i){"use strict";(function(t){var e=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(i("9bc4")),r={name:"u-tag",mixins:[t.$u.mpMixin,t.$u.mixin,o.default],data:function(){return{}},computed:{style:function(){var t={};return this.bgColor&&(t.backgroundColor=this.bgColor),this.color&&(t.color=this.color),this.borderColor&&(t.borderColor=this.borderColor),t},textColor:function(){var t={};return this.color&&(t.color=this.color),t},imgStyle:function(){var t="large"===this.size?"17px":"medium"===this.size?"15px":"13px";return{width:t,height:t}},closeSize:function(){var t="large"===this.size?15:"medium"===this.size?13:12;return t},iconSize:function(){var t="large"===this.size?21:"medium"===this.size?19:16;return t},elIconColor:function(){return this.iconColor?this.iconColor:this.plain?this.type:"#ffffff"}},methods:{closeHandler:function(){this.$emit("close",this.name)},clickHandler:function(){this.$emit("click",this.name)}}};n.default=r}).call(this,i("543d")["default"])},"5a40":function(t,n,i){},"9a3a":function(t,n,i){"use strict";i.r(n);var e=i("0930"),o=i("0dd9");for(var r in o)["default"].indexOf(r)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(r);i("cc40");var u=i("f0c5"),c=Object(u["a"])(o["default"],e["b"],e["c"],!1,null,"41bb1d57",null,!1,e["a"],void 0);n["default"]=c.exports},cc40:function(t,n,i){"use strict";var e=i("5a40"),o=i.n(e);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-tag/u-tag-create-component',
    {
        'uni_modules/uview-ui/components/u-tag/u-tag-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9a3a"))
        })
    },
    [['uni_modules/uview-ui/components/u-tag/u-tag-create-component']]
]);
