let WebIM = require("../../../utils/WebIM.js")["default"];

const { log } = require("util");
let msgType = require("./msgtype.js");

module.exports = function (sendableMsg, type, myName) {
  var time = WebIM.time();
  var renderableMsg = {
    info: {
      from: sendableMsg.body.from,
      to: sendableMsg.body.to
    },
    username: sendableMsg.body.from == myName ? sendableMsg.body.to : sendableMsg.body.from,
    yourname: sendableMsg.body.from,
    msg: {
      type: type,
      url: sendableMsg.body.url ? sendableMsg.body.url : '',
      data: getMsgData(sendableMsg, type),
	  ext: sendableMsg.body.ext
    },
    style: sendableMsg.body.from == myName ? "self" : "",
    time: time,
    mid: sendableMsg.type + sendableMsg.id,
    chatType: sendableMsg.body.chatType
  };

  if (type == msgType.IMAGE) {
    renderableMsg.msg.size = {
      width: sendableMsg.body.body.size.width,
      height: sendableMsg.body.body.size.height
    };
  } else if (type == msgType.AUDIO) {
    renderableMsg.msg.length = sendableMsg.body.length;
  } else if (type == msgType.FILE) {

	if(sendableMsg.body.ext){
		if(sendableMsg.body.ext.type==0){
			renderableMsg.msg.data = [{
			  data: "职位详情",
			  type: "txt"
			}];
			renderableMsg.msg.type = 'mianshi';
		}else{
			renderableMsg.msg.data = [{
			  data: "面试邀请通知",
			  type: "txt"
			}];
			renderableMsg.msg.type = 'mianshi';
		}
		
	}else{
		renderableMsg.msg.data = [{
		  data: "[当前不支持此格式消息展示]",
		  type: "txt"
		}];
		renderableMsg.msg.type = 'txt';
	}
   
  }

  return renderableMsg;

  function getMsgData(sendableMsg, type) {
    if (type == msgType.TEXT) {
      return WebIM.parseEmoji(sendableMsg.value.replace(/\n/mg, ""));
    } else if (type == msgType.EMOJI) {
      return sendableMsg.value;
    } else if (type == msgType.IMAGE || type == msgType.VIDEO || type == msgType.AUDIO) {
      return sendableMsg.body.body.url;
    } else if (type == msgType.FILE) {
      return sendableMsg.body.body.msg;
    }

    return "";
  }
};