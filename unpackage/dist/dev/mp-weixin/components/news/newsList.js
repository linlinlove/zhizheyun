(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/news/newsList"],{

/***/ 690:
/*!*******************************************************************************!*\
  !*** E:/uniapp/zhizheyun/zhizheyun/zhizheyun(1)/components/news/newsList.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newsList_vue_vue_type_template_id_5cebb222_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsList.vue?vue&type=template&id=5cebb222&scoped=true& */ 691);
/* harmony import */ var _newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsList.vue?vue&type=script&lang=js& */ 693);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _newsList_vue_vue_type_style_index_0_id_5cebb222_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsList.vue?vue&type=style&index=0&id=5cebb222&lang=scss&scoped=true& */ 695);
/* harmony import */ var _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 47);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _newsList_vue_vue_type_template_id_5cebb222_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _newsList_vue_vue_type_template_id_5cebb222_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5cebb222",
  null,
  false,
  _newsList_vue_vue_type_template_id_5cebb222_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/news/newsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 691:
/*!**************************************************************************************************************************!*\
  !*** E:/uniapp/zhizheyun/zhizheyun/zhizheyun(1)/components/news/newsList.vue?vue&type=template&id=5cebb222&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_template_id_5cebb222_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./newsList.vue?vue&type=template&id=5cebb222&scoped=true& */ 692);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_template_id_5cebb222_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_template_id_5cebb222_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_template_id_5cebb222_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_template_id_5cebb222_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 692:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniapp/zhizheyun/zhizheyun/zhizheyun(1)/components/news/newsList.vue?vue&type=template&id=5cebb222&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.arr.length
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 693:
/*!********************************************************************************************************!*\
  !*** E:/uniapp/zhizheyun/zhizheyun/zhizheyun(1)/components/news/newsList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./newsList.vue?vue&type=script&lang=js& */ 694);
/* harmony import */ var _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 694:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniapp/zhizheyun/zhizheyun/zhizheyun(1)/components/news/newsList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var disp = __webpack_require__(/*! @/utils/broadcast */ 44);
var WebIM = __webpack_require__(/*! @/utils/WebIM */ 31)["default"];
var isfirstTime = true;
var swipeDelete = function swipeDelete() {
  __webpack_require__.e(/*! require.ensure | components/swipedelete/swipedelete */ "components/swipedelete/swipedelete").then((function () {
    return resolve(__webpack_require__(/*! @/components/swipedelete/swipedelete */ 957));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var longPressModal = function longPressModal() {
  __webpack_require__.e(/*! require.ensure | components/longPressModal/index */ "components/longPressModal/index").then((function () {
    return resolve(__webpack_require__(/*! @/components/longPressModal/index */ 964));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  data: function data() {
    return {
      search_btn: true,
      search_chats: false,
      show_mask: false,
      yourname: "",
      unReadSpotNum: 0,
      unReadNoticeNum: 0,
      messageNum: 0,
      unReadTotalNotNum: 0,
      arr: [],
      show_clear: false,
      member: "",
      isIPX: false,
      gotop: false,
      input_code: "",
      groupName: {},
      winSize: {},
      popButton: ["删除该聊天"],
      showPop: false,
      popStyle: "",
      currentVal: ''
    };
  },
  created: function created() {
    var _this = this;
    this.setData({
      search_btn: false,
      search_chats: true,
      gotop: true
    });
    uni.$on('clickSerach', function (n) {
      _this.onSearch(n);
    });
    uni.$on('clickCancel', function (n) {
      _this.cancel();
    });
  },
  components: {
    swipeDelete: swipeDelete,
    longPressModal: longPressModal
  },
  props: {},
  computed: {},
  methods: {
    loadFn: function loadFn() {
      console.log(1111);
      this.getWindowSize();
      var me = this;

      //监听未读消息数
      disp.on("em.unreadspot", function (message) {
        me.getChatList();
        me.setData({
          // arr: me.getChatList(),
          unReadSpotNum: getApp().globalData.unReadMessageNum > 99 ? "99+" : getApp().globalData.unReadMessageNum
        });
        uni.setTabBarBadge({
          index: 3,
          text: me.unReadSpotNum.toString()
        });
        if (me.unReadSpotNum == 0 || !me.unReadSpotNum) {
          uni.hideTabBarRedDot({
            index: 3
          });
        }
      });
      disp.on("em.contacts.remove", function () {
        me.getChatList();
        me.getRoster();
      });
      this.getRoster();
    },
    showFn: function showFn() {
      console.log(222);
      uni.hideHomeButton();
      this.getChatList();
      this.setData({
        //arr: this.getChatList(),
        unReadSpotNum: getApp().globalData.unReadMessageNum > 99 ? "99+" : getApp().globalData.unReadMessageNum,
        messageNum: getApp().globalData.saveFriendList.length,
        unReadNoticeNum: getApp().globalData.saveGroupInvitedList.length,
        unReadTotalNotNum: getApp().globalData.saveFriendList.length + getApp().globalData.saveGroupInvitedList.length
      });
      if (getApp().globalData.isIPX) {
        this.setData({
          isIPX: true
        });
      }
    },
    listGroups: function listGroups() {
      var me = this;
      return WebIM.conn.getGroup({
        limit: 50,
        success: function success(res) {
          var groupName = {};
          var listGroup = res.data || [];
          listGroup.forEach(function (item) {
            groupName[item.groupid] = item.groupname;
          });
          me.setData({
            groupName: groupName
          });
          uni.setStorage({
            key: "listGroup",
            data: res.data
          });
          me.getChatList();
        },
        error: function error(err) {
          console.log(err);
        }
      });
    },
    getRoster: function getRoster() {
      var me = this;
      var rosters = {
        success: function success(roster) {
          var member = [];
          for (var i = 0; i < roster.length; i++) {
            if (roster[i].subscription == "both") {
              member.push(roster[i]);
            }
          }
          uni.setStorage({
            key: "member",
            data: member
          });
          me.setData({
            member: member
          });
          me.listGroups();
          //if(!systemReady){
          disp.fire("em.main.ready");
          //systemReady = true;
          //}
          me.setData({
            arr: me.getChatList(),
            unReadSpotNum: getApp().globalData.unReadMessageNum > 99 ? "99+" : getApp().globalData.unReadMessageNum
          });
        },
        error: function error(err) {
          console.log(err);
        }
      };
      WebIM.conn.getRoster(rosters);
    },
    // 包含陌生人版本
    getChatList: function getChatList() {
      var myName = uni.getStorageSync("myUsername");
      var array = [];
      var me = this;
      uni.getStorageInfo({
        success: function success(res) {
          var storageKeys = res.keys;
          var newChatMsgKeys = [];
          var historyChatMsgKeys = [];
          var len = myName.length;
          storageKeys.forEach(function (item) {
            if (item.slice(-len) == myName && item.indexOf("rendered_") == -1) {
              newChatMsgKeys.push(item);
            } else if (item.slice(-len) == myName && item.indexOf("rendered_") > -1) {
              historyChatMsgKeys.push(item);
            } else if (item === "INFORM") {
              newChatMsgKeys.push(item);
            }
          });
          cul.call(me, newChatMsgKeys, historyChatMsgKeys);
        }
      });
      function cul(newChatMsgKeys, historyChatMsgKeys) {
        console.log(newChatMsgKeys, historyChatMsgKeys);
        var array = [];
        var lastChatMsg;
        for (var i = historyChatMsgKeys.length; i > 0, i--;) {
          var index = newChatMsgKeys.indexOf(historyChatMsgKeys[i].slice(9));
          if (index > -1) {
            var newChatMsgs = uni.getStorageSync(newChatMsgKeys[index]) || [];
            if (newChatMsgKeys.includes()) {}
            if (newChatMsgs.length) {
              lastChatMsg = newChatMsgs[newChatMsgs.length - 1];
              lastChatMsg.unReadCount = newChatMsgs.length;
              if (lastChatMsg.unReadCount > 99) {
                lastChatMsg.unReadCount = "99+";
              }
              var dateArr = lastChatMsg.time.split(" ")[0].split("-");
              var timeArr = lastChatMsg.time.split(" ")[1].split(":");
              var month = dateArr[2] < 10 ? "0" + dateArr[2] : dateArr[2];
              lastChatMsg.dateTimeNum = "".concat(dateArr[1]).concat(month).concat(timeArr[0]).concat(timeArr[1]).concat(timeArr[2]);
              lastChatMsg.time = "".concat(dateArr[1], "\u6708").concat(dateArr[2], "\u65E5 ").concat(timeArr[0], ":").concat(timeArr[1]);
              newChatMsgKeys.splice(index, 1);
            } else {
              var historyChatMsgs = uni.getStorageSync(historyChatMsgKeys[i]);
              if (historyChatMsgs.length) {
                lastChatMsg = historyChatMsgs[historyChatMsgs.length - 1];
                var _dateArr = lastChatMsg.time.split(" ")[0].split("-");
                var _timeArr = lastChatMsg.time.split(" ")[1].split(":");
                var _month = _dateArr[2] < 10 ? "0" + _dateArr[2] : _dateArr[2];
                lastChatMsg.dateTimeNum = "".concat(_dateArr[1]).concat(_month).concat(_timeArr[0]).concat(_timeArr[1]).concat(_timeArr[2]);
                lastChatMsg.time = "".concat(_dateArr[1], "\u6708").concat(_dateArr[2], "\u65E5 ").concat(_timeArr[0], ":").concat(_timeArr[1]);
              }
            }
          } else {
            var _historyChatMsgs = uni.getStorageSync(historyChatMsgKeys[i]);
            if (_historyChatMsgs.length) {
              lastChatMsg = _historyChatMsgs[_historyChatMsgs.length - 1];
              var _dateArr2 = lastChatMsg.time.split(" ")[0].split("-");
              var _timeArr2 = lastChatMsg.time.split(" ")[1].split(":");
              var _month2 = _dateArr2[2] < 10 ? "0" + _dateArr2[2] : _dateArr2[2];
              lastChatMsg.dateTimeNum = "".concat(_dateArr2[1]).concat(_month2).concat(_timeArr2[0]).concat(_timeArr2[1]).concat(_timeArr2[2]);
              lastChatMsg.time = "".concat(_dateArr2[1], "\u6708").concat(_dateArr2[2], "\u65E5 ").concat(_timeArr2[0], ":").concat(_timeArr2[1]);
            }
          }
          if (lastChatMsg && (lastChatMsg.chatType == "groupchat" || lastChatMsg.chatType == "chatRoom")) {
            lastChatMsg.groupName = me.groupName[lastChatMsg.info.to];
          }
          lastChatMsg && lastChatMsg.username != myName && array.push(lastChatMsg);
        }
        for (var _i = newChatMsgKeys.length; _i > 0, _i--;) {
          var _newChatMsgs = uni.getStorageSync(newChatMsgKeys[_i]) || [];
          if (_newChatMsgs.length) {
            lastChatMsg = _newChatMsgs[_newChatMsgs.length - 1];
            lastChatMsg.unReadCount = _newChatMsgs.length;
            if (lastChatMsg.unReadCount > 99) {
              lastChatMsg.unReadCount = "99+";
            }
            var _dateArr3 = lastChatMsg.time.split(" ")[0].split("-");
            var _timeArr3 = lastChatMsg.time.split(" ")[1].split(":");
            var _month3 = _dateArr3[2] < 10 ? "0" + _dateArr3[2] : _dateArr3[2];
            lastChatMsg.dateTimeNum = "".concat(_dateArr3[1]).concat(_month3).concat(_timeArr3[0]).concat(_timeArr3[1]).concat(_timeArr3[2]);
            lastChatMsg.time = "".concat(_dateArr3[1], "\u6708").concat(_dateArr3[2], "\u65E5 ").concat(_timeArr3[0], ":").concat(_timeArr3[1]);
            if (lastChatMsg.chatType == "groupchat" || lastChatMsg.chatType == "chatRoom") {
              lastChatMsg.groupName = me.groupName[lastChatMsg.info.to];
            }
            lastChatMsg.username != myName && array.push(lastChatMsg);
          }
        }
        array.sort(function (a, b) {
          return b.dateTimeNum - a.dateTimeNum;
        });
        this.setData({
          arr: array
        });
      }
    },
    openSearch: function openSearch() {
      this.setData({
        search_btn: false,
        search_chats: true,
        gotop: true
      });
    },
    onSearch: function onSearch(val) {
      var searchValue = val;
      console.log(val);
      // let searchValue = val.detail.value;
      var myName = uni.getStorageSync("myUsername");
      var me = this;
      var serchList = [];
      var arr = [];
      uni.getStorageInfo({
        success: function success(res) {
          var storageKeys = res.keys;
          var chatKeys = [];
          var len = myName.length;
          storageKeys.forEach(function (item) {
            if (item.slice(-len) == myName) {
              chatKeys.push(item);
            }
          });
          chatKeys.forEach(function (item, index) {
            if (item.indexOf(searchValue) != -1) {
              serchList.push(item);
            }
          });
          var lastChatMsg = "";
          serchList.forEach(function (item, index) {
            var chatMsgs = uni.getStorageSync(item) || [];
            if (chatMsgs.length) {
              lastChatMsg = chatMsgs[chatMsgs.length - 1];
              var dateArr = lastChatMsg.time.split(" ")[0].split("-");
              var timeArr = lastChatMsg.time.split(" ")[1].split(":");
              var month = dateArr[2] < 10 ? "0" + dateArr[2] : dateArr[2];
              lastChatMsg.dateTimeNum = "".concat(dateArr[1]).concat(month).concat(timeArr[0]).concat(timeArr[1]).concat(timeArr[2]);
              lastChatMsg.time = "".concat(dateArr[1], "\u6708").concat(dateArr[2], "\u65E5 ").concat(timeArr[0], ":").concat(timeArr[1]);
              arr.push(lastChatMsg);
            }
          });
          me.setData({
            arr: arr
          });
        }
      });
    },
    cancel: function cancel() {
      this.getChatList();
      this.setData({
        search_btn: true,
        search_chats: false,
        //arr: this.getChatList(),
        unReadSpotNum: getApp().globalData.unReadMessageNum > 99 ? "99+" : getApp().globalData.unReadMessageNum,
        gotop: false
      });
    },
    clearInput: function clearInput() {
      this.setData({
        input_code: "",
        show_clear: false
      });
    },
    onInput: function onInput(e) {
      var inputValue = e.detail.value;
      if (inputValue) {
        this.setData({
          show_clear: true
        });
      } else {
        this.setData({
          show_clear: false
        });
      }
    },
    tab_contacts: function tab_contacts() {
      uni.redirectTo({
        url: "../main/main?myName=" + uni.getStorageSync("myUsername")
      });
    },
    close_mask: function close_mask() {
      this.setData({
        search_btn: true,
        search_chats: false,
        show_mask: false
      });
    },
    tab_setting: function tab_setting() {
      uni.redirectTo({
        url: "../setting/setting"
      });
    },
    tab_notification: function tab_notification() {
      uni.redirectTo({
        url: "../notification/notification"
      });
    },
    into_chatRoom: function into_chatRoom(event) {
      var detail = event.currentTarget.dataset.item;
      this.into_singleChatRoom(detail);
    },
    // 单聊
    into_singleChatRoom: function into_singleChatRoom(detail) {
      var my = uni.getStorageSync("myUsername");
      var nameList = {
        myName: my,
        your: detail.username
      };
      uni.navigateTo({
        url: "/chat_pages/chatroom/chatroom?username=" + JSON.stringify(nameList)
      });
    },
    into_inform: function into_inform() {
      uni.redirectTo({
        url: "../notification/notification"
      });
    },
    removeAndRefresh: function removeAndRefresh(event) {
      var removeId = event.currentTarget.dataset.item.info.from;
      var ary = getApp().globalData.saveFriendList;
      var idx;
      if (ary.length > 0) {
        ary.forEach(function (v, k) {
          if (v.from == removeId) {
            idx = k;
          }
        });
        getApp().globalData.saveFriendList.splice(idx, 1);
      }
      uni.removeStorageSync('INFORM');
    },
    del_chat: function del_chat(event) {
      console.log('>>>>>>>>删除会话列表', event);
      var detail = event.currentTarget.dataset.item;
      var nameList = {};
      var me = this;
      // 删除当前选中群组聊天列表
      if (detail.chatType == "groupchat" || detail.chatType == "chatRoom") {
        nameList = {
          your: detail.info.to
        };
        //删除当前选中通知列表
      } else if (detail.chatType === "INFORM") {
        nameList = {
          your: "INFORM"
        };
      }
      //删除当前选中好友聊天列表
      else {
        nameList = {
          your: detail.username
        };
      }
      var myName = uni.getStorageSync("myUsername");
      var currentPage = getCurrentPages();
      uni.showModal({
        title: "确认删除？",
        confirmText: "删除",
        success: function success(res) {
          if (res.confirm) {
            uni.removeStorageSync(nameList.your + myName);
            uni.removeStorageSync("rendered_" + nameList.your + myName);
            nameList.your === 'INFORM' && me.removeAndRefresh(event);
            // if (Object.keys(currentPage[0]).length>0) {
            //   currentPage[0].onShow();
            // }
            disp.fire("em.chat.session.remove");
            me.getChatList();
          }
        },
        fail: function fail(err) {
          console.log('删除列表', err);
        }
      });
    },
    removeLocalStorage: function removeLocalStorage(yourname) {
      console.log('>>>>>>>>执行删除本地会话');
      var myName = uni.getStorageSync("myUsername");
      uni.removeStorageSync(yourname + myName);
      uni.removeStorageSync("rendered_" + yourname + myName);
    },
    longpress: function longpress(e) {
      var _this2 = this;
      //将当前选中的值存在data中方便后续操作
      this.currentVal = e;
      var _ref = [e.touches[0], "", e.currentTarget.dataset.index],
        touches = _ref[0],
        style = _ref[1],
        index = _ref[2];

      /* 因 非H5端不兼容 style 属性绑定 Object ，所以拼接字符 */
      if (touches.clientY > this.winSize.height / 2) {
        style = "bottom:".concat(this.winSize.height - touches.clientY, "px;");
      } else {
        style = "top:".concat(touches.clientY, "px;");
      }
      if (touches.clientX > this.winSize.witdh / 2) {
        style += "right:".concat(this.winSize.witdh - touches.clientX, "px");
      } else {
        style += "left:".concat(touches.clientX, "px");
      }
      this.popStyle = style;
      // this.pickerUserIndex = Number(index);
      this.showShade = true;
      this.$nextTick(function () {
        setTimeout(function () {
          _this2.showPop = true;
        }, 10);
      });
    },
    /* 获取窗口尺寸 */getWindowSize: function getWindowSize() {
      var _this3 = this;
      uni.getSystemInfo({
        success: function success(res) {
          _this3.winSize = {
            witdh: res.windowWidth,
            height: res.windowHeight
          };
        }
      });
    },
    hidePop: function hidePop() {
      this.showPop = false;
    },
    pickerMenuChange: function pickerMenuChange() {
      console.log("当前选中>>", this.currentVal);
      this.del_chat(this.currentVal);
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 695:
/*!*****************************************************************************************************************************************!*\
  !*** E:/uniapp/zhizheyun/zhizheyun/zhizheyun(1)/components/news/newsList.vue?vue&type=style&index=0&id=5cebb222&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_style_index_0_id_5cebb222_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./newsList.vue?vue&type=style&index=0&id=5cebb222&lang=scss&scoped=true& */ 696);
/* harmony import */ var _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_style_index_0_id_5cebb222_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_style_index_0_id_5cebb222_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_style_index_0_id_5cebb222_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_style_index_0_id_5cebb222_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_style_index_0_id_5cebb222_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 696:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniapp/zhizheyun/zhizheyun/zhizheyun(1)/components/news/newsList.vue?vue&type=style&index=0&id=5cebb222&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/news/newsList.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/news/newsList-create-component',
    {
        'components/news/newsList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(690))
        })
    },
    [['components/news/newsList-create-component']]
]);
