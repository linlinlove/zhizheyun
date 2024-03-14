(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["chat_pages/common/vendor"],{

/***/ 1124:
/*!******************************************************************************************************************!*\
  !*** E:/uniapp/zhizheyun/zhizheyun/zhizheyun(1)/chat_pages/components/chat/inputbar/suit/audio/record_status.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  RecordDesc: {
    0: "长按开始录音",
    2: "向上滑动取消",
    3: "松开手取消"
  },
  RecordStatus: {
    SHOW: 0,
    HIDE: 1,
    HOLD: 2,
    SWIPE: 3,
    RELEASE: 4
  }
};

/***/ }),

/***/ 1198:
/*!*******************************************************************************************************************!*\
  !*** E:/uniapp/zhizheyun/zhizheyun/zhizheyun(1)/chat_pages/components/chat/msglist/type/audio/audioCtxFactory.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {// 每一个音频消息都有自己的 ctx。
// 可以有多个 ctx，每次播放都能知道是哪个 ctx 在调用，从而让其他的 ctx pause。
// 消息销毁，记得处理 ctx。
// 主要是同步跨 ctx 的操作，保证只有一个 ctx 播放
var allCtx = {};
var inUseCtx = null;
var allComm = {};
function proxier(ctx) {
  var __play__ = ctx.play;
  var __pause__ = ctx.pause;
  ctx.play = playProxier;
  ctx.pause = pauseProxier;
  function playProxier() {
    // 如果正在播放的不是自己，暂停
    if (inUseCtx && inUseCtx != this) {
      inUseCtx.pause();
    }
    __play__.call(this);
    inUseCtx = this;
  }
  function pauseProxier() {
    // 只有是自己才 pause
    if (inUseCtx == this) {
      __pause__.call(this);
    }
  }
}
module.exports = {
  getCtx: function getCtx(mid) {
    var returnCtx = allCtx[mid];
    if (!returnCtx) {
      returnCtx = uni.createInnerAudioContext();
      allCtx[mid] = returnCtx;
      proxier(returnCtx);
    }
    return returnCtx;
  },
  getAllCtx: function getAllCtx() {
    uni.setStorageSync("allCtx", JSON.stringify(Object.keys(allCtx)));
    return allCtx;
  },
  getCommponet: function getCommponet(mid, comm) {
    var curComm = allComm[mid];
    if (!curComm) {
      allComm[mid] = comm;
    }
    return allComm;
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 1199:
/*!**************************************************************************************************************!*\
  !*** E:/uniapp/zhizheyun/zhizheyun/zhizheyun(1)/chat_pages/components/chat/msglist/type/audio/playStatus.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  PLAYING: "playing",
  PAUSE: "pause",
  STOP: "stop"
};

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/chat_pages/common/vendor.js.map