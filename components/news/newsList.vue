<template>
	<view class="current-card box-border">
		<!-- <view class="chat_list_wraper" > -->
		<scroll-view scroll-y="true" :class="
      'chat_list_wraper ' + (gotop ? (isIPX ? 'goTopX' : 'goTop') : 'goback')
    " :style="'padding-bottom: ' + (isIPX ? '270rpx' : '226rpx')">

			<view v-for="(item, index) in arr" :key="index" class="chat_list box-border pt-re" :data-item="item"
				@tap.stop="del_chat" @longpress="longpress">
				<swipe-delete>
					<!-- 通知模块 -->
					<view class="tap_mask" @tap.stop="into_inform" :data-item="item" v-if="item.chatType == 'INFORM'">
						<view class="list_box">
							<view class="list_left">
								<view class="list_pic">
									<view v-if="unReadTotalNotNum > 0" class="em-unread-spot2">{{unReadTotalNotNum}}</view>
									<image :class="unReadTotalNotNum > 0 ? 'haveSpot' : ''"
										src="/static/images/inform.png"></image>
								</view>
								<view class="list_text">
									<text class="list_user"> 系统通知 </text>
									<text class="list_word"
										v-if="item.chatType == 'INFORM'">申请通知来自：{{ item.info.from }}</text>
								</view>
							</view>
							<view class="list_right">
								<text :data-username="item.username">{{ item.time }}</text>
							</view>
						</view>
					</view>

					<view class="tap_mask" @tap.stop="into_chatRoom" :data-item="item" v-else>
						<!-- 消息列表 -->
						<view class="list_box">
							<view class="list_left" :data-username="item.username">
								<view class="list_pic">
									<view class="em-msgNum" v-if="item.unReadCount > 0 || item.unReadCount == '99+'">{{ item.unReadCount
                  }}</view>

									<image :src="
                    item.chatType == 'groupchat' ||
                      item.chatType == 'chatRoom'
                      ? '/chat_pages/images/groupTheme.png'
                      : '/static/images/theme2x.png'
                  "></image>
								</view>
								<view class="list_text">
									<text class="list_user">{{
                      item.chatType == "groupchat" ||
                        item.chatType == "chatRoom" ||
                        item.groupName
                        ? item.groupName
                        : item.username
                  }}</text>
									<text class="list_word" v-if="item.msg.data[0].data">{{
                      item.msg.data[0].data
                  }}</text>
									<text class="list_word" v-if="item.msg.type == 'img'">[图片]</text>
									<text class="list_word" v-if="item.msg.type == 'audio'">[语音]</text>
									<!-- <text class="list_word" v-if="item.msg.type == 'video'"
                    >[视频]</text
                  > -->
								</view>
							</view>
							<view class="list_right">
								<text :data-username="item.username">{{ item.time }}</text>
								<text style="color: black;">此处显示沟通岗位</text>
							</view>
						</view>
					</view>
				</swipe-delete>
			</view>

			<long-press-modal :winSize="winSize" :popButton="popButton" @change="pickerMenuChange" :showPop="showPop"
				@hidePop="hidePop" :popStyle="popStyle" />
			<view v-if="arr.length == 0" class="chat_noChat">
				暂无消息
			</view>
			<!-- </view> -->
		</scroll-view>
		<!-- bug: margin-bottom 不生效 需要加一个空标签-->
		<view style="height: 1px"></view>

		<view class="mask" @tap="close_mask" v-if="show_mask"></view>


	</view>
</template>

<script>
	let disp = require("@/utils/broadcast");
	var WebIM = require("@/utils/WebIM")["default"];
	let isfirstTime = true;
	import swipeDelete from "@/components/swipedelete/swipedelete";
	import longPressModal from "@/components/longPressModal/index";

	export default {
		data() {
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
		created() {
			this.setData({
				search_btn: false,
				search_chats: true,
				gotop: true,
			});
			uni.$on('clickSerach', n => {
				this.onSearch(n)
			})
			uni.$on('clickCancel', n => {
				this.cancel()
			})
		},
		components: {
			swipeDelete,
			longPressModal,
		},
		props: {},
		computed: {

		},
		methods: {
			loadFn() {
				console.log(1111)
				this.getWindowSize();

				let me = this;


				//监听未读消息数
				disp.on("em.unreadspot", function(message) {
					me.getChatList();
					me.setData({
						// arr: me.getChatList(),
						unReadSpotNum: getApp().globalData.unReadMessageNum > 99 ?
							"99+" : getApp().globalData.unReadMessageNum,
					});
					uni.setTabBarBadge({
						index: 3,
						text: me.unReadSpotNum.toString()
					})
					if (me.unReadSpotNum == 0 || !me.unReadSpotNum) {
						uni.hideTabBarRedDot({
							index: 3,
						})
					}
				});



				disp.on("em.contacts.remove", function() {
					me.getChatList();
					me.getRoster();
				});

				this.getRoster();
			},
			showFn() {
				console.log(222)
				uni.hideHomeButton();
				this.getChatList();
				this.setData({
					//arr: this.getChatList(),
					unReadSpotNum: getApp().globalData.unReadMessageNum > 99 ?
						"99+" : getApp().globalData.unReadMessageNum,
					messageNum: getApp().globalData.saveFriendList.length,
					unReadNoticeNum: getApp().globalData.saveGroupInvitedList.length,
					unReadTotalNotNum: getApp().globalData.saveFriendList.length +
						getApp().globalData.saveGroupInvitedList.length,
				});

				if (getApp().globalData.isIPX) {
					this.setData({
						isIPX: true,
					});
				}
			},
			listGroups() {
				var me = this;
				return WebIM.conn.getGroup({
					limit: 50,
					success: function(res) {
						let groupName = {};
						let listGroup = res.data || [];
						listGroup.forEach((item) => {
							groupName[item.groupid] = item.groupname;
						});

						me.setData({
							groupName: groupName,
						});
						uni.setStorage({
							key: "listGroup",
							data: res.data,
						});
						me.getChatList();
					},
					error: function(err) {
						console.log(err);
					},
				});
			},

			getRoster() {
				let me = this;
				let rosters = {
					success(roster) {
						var member = [];
						for (let i = 0; i < roster.length; i++) {
							if (roster[i].subscription == "both") {
								member.push(roster[i]);
							}
						}
						uni.setStorage({
							key: "member",
							data: member,
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
							unReadSpotNum: getApp().globalData.unReadMessageNum > 99 ?
								"99+" : getApp().globalData.unReadMessageNum,
						});
					},
					error(err) {
						console.log(err);
					},
				};
				WebIM.conn.getRoster(rosters);
			},

			// 包含陌生人版本
			getChatList() {
				var myName = uni.getStorageSync("myUsername");
				var array = [];
				const me = this;
				uni.getStorageInfo({
					success: function(res) {
						let storageKeys = res.keys;
						let newChatMsgKeys = [];
						let historyChatMsgKeys = [];
						let len = myName.length;
						storageKeys.forEach((item) => {
							if (item.slice(-len) == myName && item.indexOf("rendered_") == -1) {
								newChatMsgKeys.push(item);
							} else if (
								item.slice(-len) == myName &&
								item.indexOf("rendered_") > -1
							) {
								historyChatMsgKeys.push(item);
							} else if (item === "INFORM") {
								newChatMsgKeys.push(item);
							}
						});

						cul.call(me, newChatMsgKeys, historyChatMsgKeys);
					},
				});

				function cul(newChatMsgKeys, historyChatMsgKeys) {
					console.log(newChatMsgKeys, historyChatMsgKeys)
					let array = [];
					let lastChatMsg;

					for (let i = historyChatMsgKeys.length; i > 0, i--;) {
						let index = newChatMsgKeys.indexOf(historyChatMsgKeys[i].slice(9));
						if (index > -1) {
							let newChatMsgs = uni.getStorageSync(newChatMsgKeys[index]) || [];
							if (newChatMsgKeys.includes()) {}
							if (newChatMsgs.length) {
								lastChatMsg = newChatMsgs[newChatMsgs.length - 1];
								lastChatMsg.unReadCount = newChatMsgs.length;
								if (lastChatMsg.unReadCount > 99) {
									lastChatMsg.unReadCount = "99+";
								}
								let dateArr = lastChatMsg.time.split(" ")[0].split("-");
								let timeArr = lastChatMsg.time.split(" ")[1].split(":");
								let month = dateArr[2] < 10 ? "0" + dateArr[2] : dateArr[2];
								lastChatMsg.dateTimeNum = `${dateArr[1]}${month}${timeArr[0]}${timeArr[1]}${timeArr[2]}`;
								lastChatMsg.time = `${dateArr[1]}月${dateArr[2]}日 ${timeArr[0]}:${timeArr[1]}`;
								newChatMsgKeys.splice(index, 1);
							} else {
								let historyChatMsgs = uni.getStorageSync(historyChatMsgKeys[i]);
								if (historyChatMsgs.length) {
									lastChatMsg = historyChatMsgs[historyChatMsgs.length - 1];
									let dateArr = lastChatMsg.time.split(" ")[0].split("-");
									let timeArr = lastChatMsg.time.split(" ")[1].split(":");
									let month = dateArr[2] < 10 ? "0" + dateArr[2] : dateArr[2];
									lastChatMsg.dateTimeNum =
										`${dateArr[1]}${month}${timeArr[0]}${timeArr[1]}${timeArr[2]}`;
									lastChatMsg.time = `${dateArr[1]}月${dateArr[2]}日 ${timeArr[0]}:${timeArr[1]}`;
								}
							}
						} else {
							let historyChatMsgs = uni.getStorageSync(historyChatMsgKeys[i]);
							if (historyChatMsgs.length) {
								lastChatMsg = historyChatMsgs[historyChatMsgs.length - 1];
								let dateArr = lastChatMsg.time.split(" ")[0].split("-");
								let timeArr = lastChatMsg.time.split(" ")[1].split(":");
								let month = dateArr[2] < 10 ? "0" + dateArr[2] : dateArr[2];
								lastChatMsg.dateTimeNum = `${dateArr[1]}${month}${timeArr[0]}${timeArr[1]}${timeArr[2]}`;
								lastChatMsg.time = `${dateArr[1]}月${dateArr[2]}日 ${timeArr[0]}:${timeArr[1]}`;
							}
						}
						if (
							lastChatMsg &&
							(lastChatMsg.chatType == "groupchat" ||
								lastChatMsg.chatType == "chatRoom")
						) {
							lastChatMsg.groupName = me.groupName[lastChatMsg.info.to];
						}
						lastChatMsg && lastChatMsg.username != myName &&
							array.push(lastChatMsg);
					}

					for (let i = newChatMsgKeys.length; i > 0, i--;) {
						let newChatMsgs = uni.getStorageSync(newChatMsgKeys[i]) || [];
						if (newChatMsgs.length) {
							lastChatMsg = newChatMsgs[newChatMsgs.length - 1];
							lastChatMsg.unReadCount = newChatMsgs.length;
							if (lastChatMsg.unReadCount > 99) {
								lastChatMsg.unReadCount = "99+";
							}
							let dateArr = lastChatMsg.time.split(" ")[0].split("-");
							let timeArr = lastChatMsg.time.split(" ")[1].split(":");
							let month = dateArr[2] < 10 ? "0" + dateArr[2] : dateArr[2];
							lastChatMsg.dateTimeNum = `${dateArr[1]}${month}${timeArr[0]}${timeArr[1]}${timeArr[2]}`;
							lastChatMsg.time = `${dateArr[1]}月${dateArr[2]}日 ${timeArr[0]}:${timeArr[1]}`;
							if (
								lastChatMsg.chatType == "groupchat" ||
								lastChatMsg.chatType == "chatRoom"
							) {
								lastChatMsg.groupName = me.groupName[lastChatMsg.info.to];
							}
							lastChatMsg.username != myName && array.push(lastChatMsg);
						}
					}

					array.sort((a, b) => {
						return b.dateTimeNum - a.dateTimeNum;
					});
					this.setData({
						arr: array,
					});
				}
			},

			openSearch: function() {
				this.setData({
					search_btn: false,
					search_chats: true,
					gotop: true,
				});
			},

			onSearch: function(val) {
				let searchValue = val;
				console.log(val)
				// let searchValue = val.detail.value;
				var myName = uni.getStorageSync("myUsername");
				const me = this;
				let serchList = [];
				let arr = [];
				uni.getStorageInfo({
					success: function(res) {
						let storageKeys = res.keys;
						let chatKeys = [];
						let len = myName.length;
						storageKeys.forEach((item) => {
							if (item.slice(-len) == myName) {
								chatKeys.push(item);
							}
						});
						chatKeys.forEach((item, index) => {
							if (item.indexOf(searchValue) != -1) {
								serchList.push(item);
							}
						});
						let lastChatMsg = "";
						serchList.forEach((item, index) => {
							let chatMsgs = uni.getStorageSync(item) || [];
							if (chatMsgs.length) {
								lastChatMsg = chatMsgs[chatMsgs.length - 1];

								let dateArr = lastChatMsg.time.split(" ")[0].split("-");
								let timeArr = lastChatMsg.time.split(" ")[1].split(":");
								let month = dateArr[2] < 10 ? "0" + dateArr[2] : dateArr[2];
								lastChatMsg.dateTimeNum =
									`${dateArr[1]}${month}${timeArr[0]}${timeArr[1]}${timeArr[2]}`;
								lastChatMsg.time =
									`${dateArr[1]}月${dateArr[2]}日 ${timeArr[0]}:${timeArr[1]}`;
								arr.push(lastChatMsg);
							}
						});
						me.setData({
							arr
						});
					},
				});
			},

			cancel: function() {
				this.getChatList();
				this.setData({
					search_btn: true,
					search_chats: false,
					//arr: this.getChatList(),
					unReadSpotNum: getApp().globalData.unReadMessageNum > 99 ?
						"99+" : getApp().globalData.unReadMessageNum,
					gotop: false,
				});

			},
			clearInput: function() {
				this.setData({
					input_code: "",
					show_clear: false,
				});
			},
			onInput: function(e) {
				let inputValue = e.detail.value;
				if (inputValue) {
					this.setData({
						show_clear: true,
					});
				} else {
					this.setData({
						show_clear: false,
					});
				}
			},
			tab_contacts: function() {
				uni.redirectTo({
					url: "../main/main?myName=" + uni.getStorageSync("myUsername"),
				});
			},
			close_mask: function() {
				this.setData({
					search_btn: true,
					search_chats: false,
					show_mask: false,
				});
			},
			tab_setting: function() {
				uni.redirectTo({
					url: "../setting/setting",
				});
			},
			tab_notification: function() {
				uni.redirectTo({
					url: "../notification/notification",
				});
			},
			into_chatRoom: function(event) {
				let detail = event.currentTarget.dataset.item;
				this.into_singleChatRoom(detail);
			},
			// 单聊
			into_singleChatRoom: function(detail) {
				var my = uni.getStorageSync("myUsername");

				var nameList = {
					myName: my,
					your: detail.username,
				};
				uni.navigateTo({
					url: "/chat_pages/chatroom/chatroom?username=" + JSON.stringify(nameList),
				});
			},
			into_inform: function() {
				uni.redirectTo({
					url: "../notification/notification",
				});
			},

			removeAndRefresh: function(event) {
				let removeId = event.currentTarget.dataset.item.info.from
				let ary = getApp().globalData.saveFriendList
				let idx
				if (ary.length > 0) {
					ary.forEach((v, k) => {
						if (v.from == removeId) {
							idx = k
						}
					})
					getApp().globalData.saveFriendList.splice(idx, 1);
				}
				uni.removeStorageSync('INFORM')
			},

			del_chat: function(event) {
				console.log('>>>>>>>>删除会话列表', event)
				let detail = event.currentTarget.dataset.item;
				let nameList = {};
				let me = this;
				// 删除当前选中群组聊天列表
				if (detail.chatType == "groupchat" || detail.chatType == "chatRoom") {
					nameList = {
						your: detail.info.to,
					};
					//删除当前选中通知列表
				} else if (detail.chatType === "INFORM") {
					nameList = {
						your: "INFORM",
					};
				}
				//删除当前选中好友聊天列表
				else {
					nameList = {
						your: detail.username,
					};
				}
				var myName = uni.getStorageSync("myUsername");
				var currentPage = getCurrentPages();

				uni.showModal({
					title: "确认删除？",
					confirmText: "删除",
					success: function(res) {
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
					fail: function(err) {
						console.log('删除列表', err);
					},
				});
			},
			removeLocalStorage: function(yourname) {
				console.log('>>>>>>>>执行删除本地会话')
				var myName = uni.getStorageSync("myUsername");
				uni.removeStorageSync(yourname + myName);
				uni.removeStorageSync("rendered_" + yourname + myName);
			},
			longpress: function(e) {
				//将当前选中的值存在data中方便后续操作
				this.currentVal = e
				let [touches, style, index] = [e.touches[0], "", e.currentTarget.dataset.index, ];

				/* 因 非H5端不兼容 style 属性绑定 Object ，所以拼接字符 */
				if (touches.clientY > this.winSize.height / 2) {
					style = `bottom:${this.winSize.height - touches.clientY}px;`;
				} else {
					style = `top:${touches.clientY}px;`;
				}
				if (touches.clientX > this.winSize.witdh / 2) {
					style += `right:${this.winSize.witdh - touches.clientX}px`;
				} else {
					style += `left:${touches.clientX}px`;
				}

				this.popStyle = style;
				// this.pickerUserIndex = Number(index);
				this.showShade = true;
				this.$nextTick(() => {
					setTimeout(() => {
						this.showPop = true;
					}, 10);
				});
			},
			/* 获取窗口尺寸 */
			getWindowSize() {
				uni.getSystemInfo({
					success: (res) => {
						this.winSize = {
							witdh: res.windowWidth,
							height: res.windowHeight,
						};
					},
				});
			},
			hidePop() {
				this.showPop = false;
			},
			pickerMenuChange() {
				console.log("当前选中>>", this.currentVal);
				this.del_chat(this.currentVal)
			},
		},
	};
</script>
<style lang="scss" scoped>
	page {
		width: 100%;
		overflow: hidden;
	}

	.chat_title {
		position: fixed;
		background-color: #fff;
		width: 100%;
		z-index: 9;
		top: 0;
		height: 128rpx;
	}

	.chat_title text {
		line-height: 96rpx;
		font-size: 64rpx;
		font-weight: 400;
		margin-left: 32rpx;
	}

	.search,
	.search_input {
		width: 100%;
		height: 88rpx;
		background-color: #f2f2f2;
		display: flex;
		align-items: center;
		top: 0;
		left: 0;
	}


	.search {
		justify-content: space-around;
	}

	.search_input {
		justify-content: space-around;
	}

	.search view,
	.search_input view {
		height: 64rpx;
		line-height: 64rpx;
		background-color: #fff;
		border-radius: 17px;
		text-align: center;
		display: flex;
		align-items: center;
		margin: 0 32rpx;
	}

	.search view {
		width: 100%;
		justify-content: center;
		align-items: center;
		background-color: #fff;
	}

	.search image {
		display: block;
		width: 5%;
		height: 50%;
	}

	.search_input view {
		padding-left: 24rpx;
		text-align: left;
		flex: 1;
		margin: 0 28rpx 0 32rpx;
	}

	.search icon,
	.search_input icon {
		display: inline-block;
		margin: 8rpx 12rpx 0;
		font-size: 24rpx;
	}

	.search text {
		font-size: 30rpx;
		color: #9B9B9B;
	}

	.search_input text {
		display: inline-block;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 30rpx;
		color: #0873DE;
		margin-right: 32rpx;
	}

	.search_input input {
		font-size: 28rpx;
		width: 90%;
	}

	.mask {
		background-color: black;
		opacity: 0.4;
		position: fixed;
		top: 80rpx;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.chat_list_wraper {
		padding-bottom: 270rpx;
		box-sizing: border-box;
		height: 100%;
		position: fixed;
		overflow: hidden;
	}

	.chat_list {
		width: 100%;
		height: 128rpx;
		overflow: hidden;
	}

	.tap_mask {
		width: 100%;
		overflow: hidden;
	}

	.list_box {
		margin: 0 32rpx;
		height: 126rpx;
		border-bottom: 0.5px #E5E5E5 solid;
		display: flex;
	}

	.list_left {
		width: 63%;
		height: 100%;
		float: left;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
	}

	.list_text {
		width: 60%;
		height: 100%;
		float: left;
		font-size: 28rpx;
	}

	.list_pic {
		margin-right: 20rpx;
	}

	.list_pic image {
		display: block;
		width: 88rpx;
		height: 88rpx;
	}

	.list_user,
	.list_user2 {
		font-size: 34rpx;
		color: #000;
		position: relative;
		top: 22rpx;
		overflow: hidden;
		width: 350rpx;
		display: inline-block;
		text-overflow: ellipsis;
	}

	.list_user2 {
		top: 40rpx !important;
	}

	.em-msgNum {
		color: #FFFFFF;
		background: #FF5656;
		border-radius: 100%;
		position: absolute;
		right: 30upx;
		bottom: 20upx;
		display: inline-block;
		width: 48upx;
		height: 48upx;
		line-height: 48upx;
		font-size: 24upx;
		text-align: center;
		box-sizing: border-box;
	}

	.list_word {
		height: 40rpx;
		display: block;
		margin-top: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		position: absolute;
		width: 70%;
		font-size: 24rpx;
		color: #9B9B9B;
		top: 66rpx;
	}

	.list_right {
		width: 240rpx;
		height: 100%;
		float: right;
		font-size: 24rpx;
		text-align: right;
	}

	.list_right text:first-child {
		display: block;
		line-height: 60rpx;
		margin: 12rpx auto auto auto;
	}

	.list_right text:last-child {
		height: 40rpx;
		font-size: 26rpx;
		color: #CFCFCF;
		display: block;
		margin-top: 4rpx;
	}

	.chat_noChat {
		text-align: center;
		font-size: 30rpx;
		color: #9B9B9B;
		margin-top: 400rpx;
	}

	.ctbg {
		width: 138px;
		height: 106px;
		display: block;
		margin: 20rpx auto;
	}

	.current-card {
		background-color: #fff;
		width: 100%;
		min-height: calc(100vh - 132upx);
		position: relative;
		top: -40upx;
		border-radius: 40upx 40upx 0 0;
		padding: 30upx 0 0;
	}
</style>