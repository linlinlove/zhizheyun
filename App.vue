<script>
	// require("sdk/libs/strophe");
	import baseUrl from '@/request/baseUrl .js'
	let WebIM = (wx.WebIM = require("./utils/WebIM")["default"]);
	let msgStorage = require("./chat_pages/components/chat/msgstorage");
	let msgType = require("./chat_pages/components/chat/msgtype");
	let disp = require("./utils/broadcast");
	let logout = false;

	function ack(receiveMsg) {
		// 处理未读消息回执
		var bodyId = receiveMsg.id; // 需要发送已读回执的消息id

		var ackMsg = new WebIM.message("read", WebIM.conn.getUniqueId());
		ackMsg.set({
			id: bodyId,
			to: receiveMsg.from,
		});
		WebIM.conn.send(ackMsg.body);
	}

	function onMessageError(err) {
		if (err.type === "error") {
			uni.showToast({
				title: err.errorText,
			});
			return false;
		}

		return true;
	}

	function getCurrentRoute() {
		let pages = getCurrentPages();
		if (pages.length > 0) {
			let currentPage = pages[pages.length - 1];
			return currentPage.route;
		}
		return "/";
	}

	// // 不包含陌生人版本(不接收陌生人消息)
	// function calcUnReadSpot(message) {
	//   let myName = uni.getStorageSync("myUsername");
	//   let members = uni.getStorageSync("member") || []; //好友

	//   var listGroups = uni.getStorageSync("listGroup") || []; //群组
	//   let allMembers = members.concat(listGroups);
	//   let count = allMembers.reduce(function(result, curMember, idx) {
	//     let chatMsgs;
	//     if (curMember.groupid) {
	//       chatMsgs =
	//         uni.getStorageSync(curMember.groupid + myName.toLowerCase()) || [];
	//     } else {
	//       chatMsgs =
	//         uni.getStorageSync(
	//           curMember.name && curMember.name.toLowerCase() + myName.toLowerCase()
	//         ) || [];
	//     }
	//     return result + chatMsgs.length;
	//   }, 0);
	//   getApp().globalData.unReadMessageNum = count;
	//   disp.fire("em.unreadspot", message);
	// }

	// 包含陌生人版本
	function calcUnReadSpot(message) {
		let myName = uni.getStorageSync("myUsername");
		uni.getStorageInfo({
			success: function(res) {
				let storageKeys = res.keys;
				let newChatMsgKeys = [];
				let historyChatMsgKeys = [];
				storageKeys.forEach((item) => {
					if (item.indexOf(myName) > -1 && item.indexOf("rendered_") == -1) {
						newChatMsgKeys.push(item);
					}
				});
				let count = newChatMsgKeys.reduce(function(result, curMember, idx) {
					let chatMsgs;
					chatMsgs = uni.getStorageSync(curMember) || [];
					return result + chatMsgs.length;
				}, 0);

				getApp().globalData.unReadMessageNum = count;
				disp.fire("em.unreadspot", message);
			},
		});
	}

	function saveGroups() {
		var me = this;
		return WebIM.conn.getGroup({
			limit: 50,
			success: function(res) {
				uni.setStorage({
					key: "listGroup",
					data: res.data,
				});
			},
			error: function(err) {
				console.log(err);
			},
		});
	}

	export default {
		globalData: {
			baseUrl,
			unReadMessageNum: 0,
			userInfo: null,
			saveFriendList: [],
			saveGroupInvitedList: [],
			isIPX: false, //是否为iphone X
			conn: {
				closed: false,
				curOpenOpt: {},

				open(opt) {
					uni.showLoading({
						title: "正在初始化客户端..",
						mask: true,
					});
					this.curOpenOpt = opt;
					WebIM.conn.open(opt);
					this.closed = false;
				},

				reopen() {
					if (this.closed) {
						//this.open(this.curOpenOpt);
						WebIM.conn.open(this.curOpenOpt);
						this.closed = false;
					}
				},
			},
			onLoginSuccess: function(myName) {
				uni.hideLoading();
				uni.redirectTo({
					url: "../chat/chat?myName=" + myName,
				});
			},

			getUserInfo(cb) {
				var me = this;

				if (this.userInfo) {
					typeof cb == "function" && cb(this.userInfo);
				} else {
					// 调用登录接口
					uni.login({
						success() {
							uni.getUserInfo({
								success(res) {
									me.userInfo = res.userInfo;
									typeof cb == "function" && cb(me.userInfo);
								},
							});
						},
					});
				}
			},

			checkIsIPhoneX: function() {
				const me = this;
				uni.getSystemInfo({
					success: function(res) {
						// 根据 model 进行判断
						if (res.model && res.model.search("iPhone X") != -1) {
							me.isIPX = true;
						}
					},
				});
			},
		},

		// getPage(pageName){
		// 	var pages = getCurrentPages();
		// 	return pages.find(function(page){
		// 		return page.__route__ == pageName;
		// 	});
		// },
		onLaunch() {
			// 调用 API 从本地缓存中获取数据
			// uni.setInnerAudioOption({
			//   obeyMuteSwitch: false
			// });
			var me = this;
			var logs = uni.getStorageSync("logs") || [];
			logs.unshift(Date.now());
			uni.setStorageSync("logs", logs); //

			disp.on("em.main.ready", function() {
				calcUnReadSpot();
			});
			disp.on("em.chatroom.leave", function() {
				calcUnReadSpot();
			});
			disp.on("em.chat.session.remove", function() {
				calcUnReadSpot();
			});
			disp.on("em.chat.audio.fileLoaded", function() {
				calcUnReadSpot();
			});
			disp.on("em.main.deleteFriend", function() {
				calcUnReadSpot();
			});
			disp.on("em.chat.audio.fileLoaded", function() {
				calcUnReadSpot();
			}); //

			WebIM.conn.listen({
				onCustomMessage(msg) {
					console.log(msg, '自定义消息');
					msgStorage.saveReceiveMsg(msg, msg.type);
				},
				onOpened(message) {
					if (
						getCurrentRoute() == "pages/login/login" ||
						getCurrentRoute() == "pages/login_token/login_token"
					) {
						me.globalData.onLoginSuccess(
							uni.getStorageSync("myUsername").toLowerCase()
						);
					}
					// console.log(message, '链接状态1')
					console.log(WebIM.conn.isOpened(),'isOpened')
				},
				isOpened() {
					console.log(message, '链接状态2')
				},
				onReconnect() {
					uni.showToast({
						title: "重连中...",
						duration: 2000,
					});
				},

				onSocketConnected() {
					uni.showToast({
						title: "socket连接成功",
						duration: 2000,
					});
				},

				onClosed() {
					uni.showToast({
						title: "网络已断开",
						icon: "none",
						duration: 2000,
					});
					/* uni.redirectTo({
					  url: "../login/login",
					}); */
					console.log('断开链接')
					me.globalData.conn.closed = true;
					WebIM.conn.close();
				},

				onInviteMessage(message) {
					me.globalData.saveGroupInvitedList.push(message);
					disp.fire("em.invite.joingroup", message); // uni.showModal({
					// 	title: message.from + " 已邀你入群 " + message.roomid,
					// 	success(){
					// 		disp.fire("em.invite.joingroup", message);
					// 	},
					// 	error(){
					// 		disp.fire("em.invite.joingroup", message);
					// 	}
					// });
				},

				onReadMessage(message) {
					//console.log('已读', message)
				},

				//onPresence为旧版 ，建议参考最新增删好友api文档 ：http://docs-im.easemob.com/im/web/basics/buddy
				onPresence(message) {

					switch (message.type) {
						case "unsubscribe":
							break;
							// 好友邀请列表
						case "subscribe":
							for (let i = 0; i < me.globalData.saveFriendList.length; i++) {
								if (me.globalData.saveFriendList[i].from === message.from) {
									me.globalData.saveFriendList[i] = message;
									disp.fire("em.subscribe");
									return;
								}
							}
							msgStorage.saveReceiveMsg(message, 'INFORM'); //存添加好友消息，方便展示通知
							me.globalData.saveFriendList.push(message);
							disp.fire("em.subscribe");

							break;

						case "subscribed":
							uni.showToast({
								title: "添加成功",
								duration: 1000,
							});
							disp.fire("em.subscribed");
							break;

						case "unsubscribed":
							disp.fire("em.unsubscribed");
							break;
						case "direct_joined":
							saveGroups();
							uni.showToast({
								title: "已进群",
								duration: 1000,
							});
							break;
						case "memberJoinPublicGroupSuccess":
							saveGroups();
							uni.showToast({
								title: "已进群",
								duration: 1000,
							});
							break;
						case "invite":
							// 防止重复添加
							for (let i = 0; i < me.globalData.saveGroupInvitedList.length; i++) {
								if (me.globalData.saveGroupInvitedList[i].from === message.from) {
									me.globalData.saveGroupInvitedList[i] = message;
									disp.fire("em.invite.joingroup")
									return;
								}
							}
							me.globalData.saveGroupInvitedList.push(message);
							disp.fire("em.invite.joingroup");
							msgStorage.saveReceiveMsg(message, 'INFORM'); //存添加好友消息，方便展示通知
							break;
						case "unavailable":
							disp.fire("em.contacts.remove");
							disp.fire("em.group.leaveGroup", message);
							break;

						case "deleteGroupChat":
							disp.fire("em.invite.deleteGroup", message);
							break;

						case "leaveGroup":
							disp.fire("em.group.leaveGroup", message);
							break;

						case "removedFromGroup":
							disp.fire("em.group.leaveGroup", message);
							break;

						default:
							break;
					}
				},

				onRoster(message) {
					// let pages = getCurrentPages();
					// if(pages[0]){
					// 	pages[0].onShow();
					// }
				},

				onVideoMessage(message) {
					console.log("onVideoMessage: ", message);

					if (message) {
						msgStorage.saveReceiveMsg(message, msgType.VIDEO);
					}

					calcUnReadSpot(message);
					ack(message);
				},

				onAudioMessage(message) {
					console.log("onAudioMessage", message);

					if (message) {
						if (onMessageError(message)) {
							msgStorage.saveReceiveMsg(message, msgType.AUDIO);
						}

						calcUnReadSpot(message);
						ack(message);
					}
				},

				onCmdMessage(message) {
					console.log("onCmdMessage", message);

					if (message) {
						if (onMessageError(message)) {
							msgStorage.saveReceiveMsg(message, msgType.CMD);
						}

						calcUnReadSpot(message);
						ack(message);
					}
				},

				// onLocationMessage(message){
				// 	console.log("Location message: ", message);
				// 	if(message){
				// 		msgStorage.saveReceiveMsg(message, msgType.LOCATION);
				// 	}
				// },
				onTextMessage(message) {
					console.log("onTextMessage", message);

					if (message) {
						if (onMessageError(message)) {
							msgStorage.saveReceiveMsg(message, msgType.TEXT);
						}

						calcUnReadSpot(message);
						ack(message);
					}
				},

				onEmojiMessage(message) {
					console.log("onEmojiMessage", message);

					if (message) {
						if (onMessageError(message)) {
							msgStorage.saveReceiveMsg(message, msgType.EMOJI);
						}

						calcUnReadSpot(message);
						ack(message);
					}
				},

				onPictureMessage(message) {
					console.log("onPictureMessage", message);

					if (message) {
						if (onMessageError(message)) {
							msgStorage.saveReceiveMsg(message, msgType.IMAGE);
						}

						calcUnReadSpot(message);
						ack(message);
					}
				},

				onFileMessage(message) {
					console.log("onFileMessage", message);

					if (message) {
						if (onMessageError(message)) {
							msgStorage.saveReceiveMsg(message, msgType.FILE);
						}

						calcUnReadSpot(message);
						ack(message);
					}
				},

				// 各种异常
				onError(error) {
					console.log(error,5555)
					//环信token失效、登录失效39未登录的时候就重新登录
					if (error.type == 28||error.type == 1||error.type == 39) {
						WebIM.conn.open({
							user: uni.getStorageSync('myUsername'),
							pwd: '123456',
							appkey: WebIM.config.appKey
						})
					}
					// WebIM.conn.open({
					// 	user: uni.getStorageSync('myUsername'),
					// 	pwd: '123456',
					// 	appkey: WebIM.config.appKey
					// })
					console.log(WebIM.config.appkey, 'WebIM.config.appKey');

					/*  uni.setStorage({
					  	key: "myUsername",
					  	data: '13558881543'
					  }); */

					/* uni.$emit('hasLogin', true) */
					console.log(error, 4545); // 16: server-side close the websocket connection
					// if (error.type == WebIM.statusCode.WEBIM_CONNCTION_DISCONNECTED) {
					//   // if(error.type == WebIM.statusCode.WEBIM_CONNCTION_DISCONNECTED && !logout){
					//   // if(WebIM.conn.autoReconnectNumTotal < WebIM.conn.autoReconnectNumMax){
					//   // 	return;
					//   // }
					//   uni.showToast({
					//     title: "websocket 断开",
					//     duration: 1000
					//   });
					//   uni.redirectTo({
					//     url: "../login/login"
					//   });
					//   logout = true;
					//   return;
					// } // 8: offline by multi login

					// if (error.type == WebIM.statusCode.WEBIM_CONNCTION_SERVER_ERROR) {
					//   uni.showToast({
					//     title: "offline by multi login",
					//     duration: 1000
					//   });
					//   uni.redirectTo({
					//     url: "../login/login"
					//   });
					// }

					if (error.type == WebIM.statusCode.WEBIM_CONNCTION_OPEN_ERROR) {
						uni.hideLoading();
						disp.fire("em.error.passwordErr"); // uni.showModal({
						// 	title: "用户名或密码错误",
						// 	confirmText: "OK",
						// 	showCancel: false
						// });
					}

					if (error.type == WebIM.statusCode.WEBIM_CONNCTION_AUTH_ERROR) {
						uni.hideLoading();
						disp.fire("em.error.tokenErr");
					}

					if (error.type == "socket_error") {
						///sendMsgError
						console.log("socket_errorsocket_error", error);
						uni.showToast({
							title: "网络已断开",
							icon: "none",
							duration: 2000,
						});
						disp.fire("em.error.sendMsgErr", error);
					}
				},
			});
			// console.log(WebIM.conn.isOpened(),'isOpened')
			if(!WebIM.conn.isOpened() && uni.getStorageSync("myUsername")) {
				//尝试使用重新登陆
						WebIM.conn.open({
							user: uni.getStorageSync('myUsername'),
							pwd: '123456',
							appkey: WebIM.config.appKey
						})
			}
			this.globalData.checkIsIPhoneX();
		},

		methods: {},
	};
</script>
<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";
	@import '/common/common.css';
	@import '/common/components.css';
	@import '/common/publiccss.css';
</style>
