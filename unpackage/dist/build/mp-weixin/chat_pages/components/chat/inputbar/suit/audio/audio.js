require('../../../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["chat_pages/components/chat/inputbar/suit/audio/audio"],{"4edb":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o("9754")["default"],r=o("cc4a"),c=o("5455"),a=c.RecordStatus,i=c.RecordDesc,s=o("aafc"),u=o("e4a8"),d=!1,l=null,f=[50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50],h={data:function(){return{changedTouches:null,recordStatus:a.HIDE,RecordStatus:a,RecordDesc:i,radomheight:f,recorderManager:e.getRecorderManager(),recordClicked:!1,isLongPress:!1,recordTime:0}},components:{},props:{username:{type:Object,default:function(){return{}}},chatType:{type:String,default:r.chatType.SINGLE_CHAT}},created:function(){},beforeMount:function(){},moved:function(){},destroyed:function(){clearInterval(l),this.recordTime=0},mounted:function(){},methods:{toggleWithoutAction:function(e){},toggleRecordModal:function(){this.recordStatus=this.recordStatus==a.HIDE?a.SHOW:a.HIDE,this.radomheight=f},handleRecordingMove:function(e){var t=e.touches[0],o=this.changedTouches;o&&(this.recordStatus==a.SWIPE&&o.pageY-t.pageY<20&&(this.recordStatus=a.HOLD),this.recordStatus==a.HOLD&&o.pageY-t.pageY>20&&(this.recordStatus=a.SWIPE))},handleRecording:function(t){if(console.log("开始点击",e.getSystemInfoSync()),"alipay"!==e.getSystemInfoSync().app){var o=this;o.recordClicked=!0,setTimeout((function(){1==o.recordClicked&&function(){e.getSetting?e.getSetting({success:function(t){clearInterval(l),o.recordTime=0;var r=t.authSetting["scope.record"];0==r?e.openSetting({success:function(t){var n=t.authSetting["scope.record"];1==n?e.showToast({title:"授权成功",icon:"success"}):e.showToast({title:"请授权录音",icon:"none"}),o.isLongPress=!1}}):1==r?n():e.authorize({scope:"scope.record",success:function(){e.showToast({title:"授权成功",icon:"success"})}})},fail:function(){e.showToast({title:"鉴权失败，请重试",icon:"none"})}}):n()}()}),350)}else e.showModal({content:"支付宝小程序不支持语音消息，请查看支付宝相关api了解详情"});function n(){clearInterval(l),o.recordTime=0,o.changedTouches=t.touches[0],o.recordStatus=a.HOLD,d=!0,o.myradom();var n=o.recorderManager||e.getRecorderManager();n.onStart((function(){l=setInterval((function(){o.recordTime++}),1e3)})),n.start({format:"mp3"}),setTimeout((function(){o.handleRecordingCancel(),d=!1}),1e5)}},handleRecordingCancel:function(){var t=this;d=!1;var o=this.recorderManager;this.recordStatus==a.SWIPE?this.recordStatus=a.RELEASE:(this.recordStatus=a.HIDE,this.recordClicked=!1),o.onStop((function(o){clearInterval(l);var n=1e3*t.recordTime;if(t.recordStatus==a.RELEASE)return console.log("user canceled"),void(t.recordStatus=a.HIDE);n<=1e3?e.showToast({title:"录音时间太短",icon:"none"}):t.uploadRecord(o.tempFilePath,n),clearInterval(l),t.recordStatus=a.HIDE,t.recordTime=0})),o.stop()},isGroupChat:function(){return this.chatType==r.chatType.CHAT_ROOM},getSendToParam:function(){return this.isGroupChat()?this.username.groupId:this.username.your},uploadRecord:function(t,o){var c=n.config.appkey.split("#"),a=this,i=n.conn.context.accessToken;e.uploadFile({url:"https://a1.easemob.com/"+c[0]+"/"+c[1]+"/chatfiles",filePath:t,fileType:"audio",name:"file",header:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+i},success:function(e){var c=n.conn.getUniqueId(),u=new n.message(r.AUDIO,c),d=JSON.parse(e.data);u.set({apiUrl:n.config.apiURL,accessToken:i,body:{type:r.AUDIO,url:d.uri+"/"+d.entities[0].uuid,filetype:"",filename:t,accessToken:i,length:Math.ceil(o/1e3)},from:a.username.myName,to:a.getSendToParam(),roomType:!1,chatType:a.chatType,success:function(e){s.fire("em.chat.sendSuccess",c)}}),a.isGroupChat()&&u.setGroup("groupchat"),u.body.length=Math.ceil(o/1e3),n.conn.send(u.body);var l={msg:u,type:r.AUDIO};a.saveSendMsg(l)}})},saveSendMsg:function(e){u.saveMsg(e.msg,e.type)},myradom:function(){for(var e=this,t=e.radomheight,o=0;o<e.radomheight.length;o++)t[o]=100*Math.random().toFixed(2)+10;e.radomheight=t,d&&setTimeout((function(){e.myradom()}),500)}}};t.default=h}).call(this,o("543d")["default"])},"568d":function(e,t,o){"use strict";o.r(t);var n=o("bd39"),r=o("5ec5");for(var c in r)["default"].indexOf(c)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(c);o("f8f0");var a=o("f0c5"),i=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);t["default"]=i.exports},5959:function(e,t,o){},"5ec5":function(e,t,o){"use strict";o.r(t);var n=o("4edb"),r=o.n(n);for(var c in n)["default"].indexOf(c)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(c);t["default"]=r.a},bd39:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return r})),o.d(t,"a",(function(){}));var n=function(){var e=this.$createElement;this._self._c},r=[]},f8f0:function(e,t,o){"use strict";var n=o("5959"),r=o.n(n);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'chat_pages/components/chat/inputbar/suit/audio/audio-create-component',
    {
        'chat_pages/components/chat/inputbar/suit/audio/audio-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("568d"))
        })
    },
    [['chat_pages/components/chat/inputbar/suit/audio/audio-create-component']]
]);