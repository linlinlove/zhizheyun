<template>
  <view
    v-if="recordStatus != RecordStatus.HIDE"
    class="modal modal-record"
    @tap="toggleRecordModal"
  >
    <view class="modal-body" @tap.stop="toggleWithoutAction">
      <view class="sound-waves">
        <view
          v-for="(item, index) in radomheight"
          :key="index"
          :style="'height:' + item + 'rpx;margin-top:-' + item / 2 + 'rpx'"
        ></view>
        <view style="clear: both; width: 0; height: 0"></view>
      </view>
      <text class="desc">{{ RecordDesc[recordStatus] }}</text>
      <view
        class="dot"
        @touchstart="handleRecording"
        @touchmove="handleRecordingMove"
        @touchend="handleRecordingCancel"
      >
        <image class="icon-mic" src="/chat_pages/static/images/send.png"></image>
      </view>
    </view>
  </view>
</template>

<script>
let WebIM = require("@/utils/WebIM")["default"];
let msgType = require("../../../msgtype");
let RECORD_CONST = require("./record_status");
let RecordStatus = RECORD_CONST.RecordStatus;
let RecordDesc = RECORD_CONST.RecordDesc;
let disp = require("@/utils/broadcast");
let msgStorage = require("../../../msgstorage");
let RunAnimation = false;
let recordTimeInterval = null;
const InitHeight = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50];

export default {
  data() {
    return {
      changedTouches: null,
      recordStatus: RecordStatus.HIDE,
      RecordStatus,
      RecordDesc,
      // 模板中有引用
      radomheight: InitHeight,
      recorderManager: uni.getRecorderManager(),
      recordClicked: false,
      isLongPress: false,
      recordTime: 0
    };
  },

  components: {},
  props: {
    username: {
      type: Object,
      default: () => ({})
    },
    chatType: {
      type: String,
      default: msgType.chatType.SINGLE_CHAT
    }
  },

  // lifetimes
  created() {},

  beforeMount() {},

  moved() {},

  destroyed() {
    clearInterval(recordTimeInterval)
    this.recordTime = 0
  },

  mounted() {},

  methods: {
    toggleWithoutAction(e) {// 阻止 tap 冒泡
    },

    toggleRecordModal() {
      this.recordStatus = this.recordStatus == RecordStatus.HIDE ? RecordStatus.SHOW : RecordStatus.HIDE
      this.radomheight = InitHeight
    },

    handleRecordingMove(e) {
      var touches = e.touches[0];
      var changedTouches = this.changedTouches;

      if (!changedTouches) {
        return;
      }

      if (this.recordStatus == RecordStatus.SWIPE) {
        if (changedTouches.pageY - touches.pageY < 20) {
          this.recordStatus = RecordStatus.HOLD
        }
      }

      if (this.recordStatus == RecordStatus.HOLD) {
        if (changedTouches.pageY - touches.pageY > 20) {
          this.recordStatus = RecordStatus.SWIPE
        }
      }
    },

    handleRecording(e) {
		console.log('开始点击',uni.getSystemInfoSync())
		if(uni.getSystemInfoSync().app === "alipay"){
			// https://forum.alipay.com/mini-app/post/7301031?ant_source=opendoc_recommend
			uni.showModal({
				content: '支付宝小程序不支持语音消息，请查看支付宝相关api了解详情'
			})
			return
		}
      let me = this;
	  
      me.recordClicked = true
      setTimeout(() => {
        if (me.recordClicked == true) {
          executeRecord();
        }
      }, 350);

      function executeRecord() {
        if (uni.getSetting) {
        uni.getSetting({
          success: res => {
            clearInterval(recordTimeInterval);
            me.recordTime = 0
            let recordAuth = res.authSetting['scope.record'];

            if (recordAuth == false) {
              //已申请过授权，但是用户拒绝
              uni.openSetting({
                success: function (res) {
                  let recordAuth = res.authSetting['scope.record'];

                  if (recordAuth == true) {
                    uni.showToast({
                      title: "授权成功",
                      icon: "success"
                    });
                  } else {
                    uni.showToast({
                      title: "请授权录音",
                      icon: "none"
                    });
                  }

                  me.isLongPress = false
                }
              });
            } else if (recordAuth == true) {
              // 用户已经同意授权
              startRecord();
            } else {
              // 第一次进来，未发起授权
              uni.authorize({
                scope: 'scope.record',
                success: () => {
                  //授权成功
                  uni.showToast({
                    title: "授权成功",
                    icon: "success"
                  });
                }
              });
            }
          },
          fail: function () {
            uni.showToast({
              title: "鉴权失败，请重试",
              icon: "none"
            });
          }
        })
        return
         }else{
          startRecord()
          return
        }
      }

      function startRecord() {
        clearInterval(recordTimeInterval);
        me.recordTime = 0
        me.changedTouches = e.touches[0];
        me.recordStatus = RecordStatus.HOLD
        RunAnimation = true;
        me.myradom();
        let recorderManager = me.recorderManager || uni.getRecorderManager();
        recorderManager.onStart(() => {
          // console.log("开始录音...");
          recordTimeInterval = setInterval(()=>{
            me.recordTime ++
          },1000)
          
        });
        recorderManager.start({
          format: "mp3"
        }); // 超时

        setTimeout(function () {
          me.handleRecordingCancel();
          RunAnimation = false;
        }, 100000);
      }
    },

    handleRecordingCancel() {
      RunAnimation = false;
      let recorderManager = this.recorderManager; // 向上滑动状态停止：取消录音发放

      if (this.recordStatus == RecordStatus.SWIPE) {
        this.recordStatus = RecordStatus.RELEASE
      } else {
        this.recordStatus = RecordStatus.HIDE
        this.recordClicked = false
      }

      recorderManager.onStop(res => {
        // console.log("结束录音...", res);
        clearInterval(recordTimeInterval);
        let duration = this.recordTime * 1000;
        if (this.recordStatus == RecordStatus.RELEASE) {
          console.log("user canceled");
          this.recordStatus = RecordStatus.HIDE
          return;
        }

        if (duration <= 1000) {
          uni.showToast({
            title: "录音时间太短",
            icon: "none"
          });
        } else {
          // 上传
          this.uploadRecord(res.tempFilePath, duration);
        }
        	clearInterval(recordTimeInterval);
					this.recordStatus = RecordStatus.HIDE
					this.recordTime = 0;
      }); // 停止录音

      recorderManager.stop();
    },

    isGroupChat() {
      return this.chatType == msgType.chatType.CHAT_ROOM;
    },

    getSendToParam() {
      return this.isGroupChat() ? this.username.groupId : this.username.your;
    },

    uploadRecord(tempFilePath, dur) {
      var str = WebIM.config.appkey.split("#");
      var me = this;
      var token = WebIM.conn.context.accessToken;
      uni.uploadFile({
        url: "https://a1.easemob.com/" + str[0] + "/" + str[1] + "/chatfiles",
        filePath: tempFilePath,
		fileType: 'audio',
        name: "file",
        header: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token
        },

        success(res) {
          var id = WebIM.conn.getUniqueId();
          var msg = new WebIM.message(msgType.AUDIO, id);
          var dataObj = JSON.parse(res.data); // 接收消息对象

          msg.set({
            apiUrl: WebIM.config.apiURL,
            accessToken: token,
            body: {
              type: msgType.AUDIO,
              url: dataObj.uri + "/" + dataObj.entities[0].uuid,
              filetype: "",
              filename: tempFilePath,
              accessToken: token,
              length: Math.ceil(dur / 1000)
            },
            from: me.username.myName,
            to: me.getSendToParam(),
            roomType: false,
            chatType: me.chatType,
            success: function (argument) {
              disp.fire('em.chat.sendSuccess', id);
            }
          });

          if (me.isGroupChat()) {
            msg.setGroup("groupchat");
          }

          msg.body.length = Math.ceil(dur / 1000); //console.log('发送的语音消息', msg.body)

          WebIM.conn.send(msg.body);
                let obj = {
                  msg: msg,
                  type: msgType.AUDIO
                }
                me.saveSendMsg(obj);
        }

      });
    },
    saveSendMsg(evt) {
      msgStorage.saveMsg(evt.msg, evt.type);
    },

    myradom() {
      const that = this;
      var _radomheight = that.radomheight;

      for (var i = 0; i < that.radomheight.length; i++) {
        //+1是为了避免为0
        _radomheight[i] = 100 * Math.random().toFixed(2) + 10;
      }

      that.radomheight = _radomheight

      if (RunAnimation) {
        setTimeout(function () {
          that.myradom();
        }, 500);
      } else {
        return;
      }
    }

  }
};
</script>
<style>
@import "./audio.css";
</style>