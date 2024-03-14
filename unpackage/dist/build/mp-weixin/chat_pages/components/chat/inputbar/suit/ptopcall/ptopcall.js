require('../../../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["chat_pages/components/chat/inputbar/suit/ptopcall/ptopcall"],{3742:function(t,n,e){"use strict";e.r(n);var i=e("4c37"),c=e.n(i);for(var l in i)["default"].indexOf(l)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(l);n["default"]=c.a},"4c37":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{visible:!1}},methods:{show:function(){this.setData({visible:!0})},cancel:function(){console.log("取消"),this.setData({visible:!1})},callAudio:function(){this.$emit("makeAudioCall",null,"single"),this.cancel()},callVideo:function(){console.log("callVideo"),this.$emit("makeVideoCall",null,"single"),this.cancel()}}};n.default=i},5445:function(t,n,e){"use strict";e.r(n);var i=e("6f11"),c=e("3742");for(var l in c)["default"].indexOf(l)<0&&function(t){e.d(n,t,(function(){return c[t]}))}(l);e("ef29");var a=e("f0c5"),u=Object(a["a"])(c["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=u.exports},"6f11":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},c=[]},cdeb:function(t,n,e){},ef29:function(t,n,e){"use strict";var i=e("cdeb"),c=e.n(i);c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'chat_pages/components/chat/inputbar/suit/ptopcall/ptopcall-create-component',
    {
        'chat_pages/components/chat/inputbar/suit/ptopcall/ptopcall-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5445"))
        })
    },
    [['chat_pages/components/chat/inputbar/suit/ptopcall/ptopcall-create-component']]
]);
