require('../../../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["chat_pages/components/chat/inputbar/suit/emoji/emoji"],{"40d3":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("9754")["default"],i=e("cc4a"),a={OPENED:"showEmoji",CLOSED:"emoji_list"},u={data:function(){return{show:a.CLOSED,emoji:o.Emoji,emojiObj:o.EmojiObj,interval:5e3,duration:1e3,autoplay:!1,indicatorDots:!0}},components:{},props:{},methods:{openEmoji:function(){this.setData({show:a.OPENED})},cancelEmoji:function(){this.setData({show:a.CLOSED})},sendEmoji:function(t){var n=t.target.dataset.emoji;this.$emit("newEmojiStr",{msg:n,type:i.EMOJI},{bubbles:!0,composed:!0})}}};n.default=u},"7bf3":function(t,n,e){},"88e1":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var o=function(){var t=this.$createElement;this._self._c},i=[]},a2b7:function(t,n,e){"use strict";e.r(n);var o=e("40d3"),i=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},b011:function(t,n,e){"use strict";var o=e("7bf3"),i=e.n(o);i.a},d1c4:function(t,n,e){"use strict";e.r(n);var o=e("88e1"),i=e("a2b7");for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("b011");var u=e("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'chat_pages/components/chat/inputbar/suit/emoji/emoji-create-component',
    {
        'chat_pages/components/chat/inputbar/suit/emoji/emoji-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d1c4"))
        })
    },
    [['chat_pages/components/chat/inputbar/suit/emoji/emoji-create-component']]
]);
