<template>
	<view scroll-y="true" :class="view + ' wrap ' + (isIPX?'scroll_view_X': '')" @tap="onTap" upper-threshold="-50"
		:scroll-into-view="toView">
		<view class="message" v-for="item in chatMsg" :key="item.mid" :id="item.mid">
			<!-- <view class="time">
				<text class="time-text">{{ item.time }}</text>
      </view>-->
			<!-- 消息主体 -->
			<view class="main" v-if="item.isType != 1" :class="item.style">			
				<!-- 消息时间 -->
				<view class="user">
					<!-- yourname：就是消息的 from -->
					<text class="user-text">{{ ' ' + item.time}}</text>
				</view>
				
				<!-- 发送人头像 -->
				<image v-if="item.style == 'self'" class="avatar" :src="myAvatar" />
				<image v-if="item.style == ''" class="avatar" :src="eAvatar" />
				
				<!-- 消息内容 -->
				<view class="msg">
					<!-- 发送三角 -->
					<image class="err" :class="(item.style == 'self' && item.isFail) ?  'show' : 'hide'"
						src="/chat_pages/static/images/msgerr.png" />

					<image v-if="item.style == 'self'" src="/chat_pages/static/images/poprightarrow2x.png"
						class="msg_poprightarrow" />
					<image v-if="item.style == ''" src="/chat_pages/static/images/popleftarrow2x.png"
						class="msg_popleftarrow" />
					
					<view v-if="item.msg.type == 'img' || item.msg.type == 'video'">
						<image v-if="item.msg.type == 'img'" class="avatar" :src="item.msg.data"
							style="width:90px; height:120px; margin:2px auto;" mode="aspectFit" @tap="previewImage"
							:data-url="item.msg.data" />
						<!-- <video v-if="item.msg.type == 'video'" :src="item.msg.data" controls style="width:300rpx;"/> -->
					</view>
					
					<audio-msg v-if="item.msg.type == 'audio'" :msg="item"></audio-msg>
					
					<view v-else-if="item.msg.type == 'txt' || item.msg.type == 'emoji'">
						<view class="template" v-for="(d_item, d_index) in item.msg.data" :key="d_index">
							<text :data-msg="item" @tap="clickMsg" v-if="d_item.type == 'txt'" class="msg-text"
								style="float:left;" selectable="true">{{ d_item.data }}</text>

							<image v-if="d_item.type == 'emoji'" class="avatar"
								:src="'/chat_pages/static/images/faces/' + d_item.data"
								style="width:25px; height:25px; margin:0 0 2px 0; float:left;" />
						</view>
					</view>
					
					<!-- 发送面试 -->
					<view v-if="item.msg.type=='mianshi' && item.style != 'self'"
						@tap="jumpInterview_details(item.msg.ext.invite_id)">
						<view class="tilte_a" style="font-size: 32upx;">
							对方向您发送了一条面试邀请！
						</view>
						<view class="">
							<view class="item_a" style="line-height: 48upx;">
								时间:{{item.msg.ext.time_}}
							</view>
							<!-- 	<view class="item_a" style="line-height: 48upx;">
									地点： {{item.msg.ext.address}}{{item.msg.ext.address}}{{item.msg.ext.address}}{{item.msg.ext.address}}
								</view>
								<view class="item_a" style="line-height: 48upx;">
									联系人： {{item.msg.ext.concater}}
								</view>
								<view class="item_a" style="line-height: 48upx;">
									联系人电话： {{item.msg.ext.phone}}
								</view> -->
						</view>
					</view>
				</view>
			</view>
			
			<!-- 岗位卡片 -->
			<view v-else class="positionDetails" @tap="toPositionDetails(item.isContent.position.position_id)">
				<view class="item-a item">
					<view class="item-a1">
						{{item.isContent.position.name}}
					</view>
					<view class="item-a2">
						{{item.isContent.position.salary}}元
					</view>
				</view>
				<view class="item-b item">
					
					<view style=" margin: 0px 10rpx; " class="item-b-1"
						v-for="(v,i) in item.isContent.position.ask_json" :key="i">
						{{v.value}}
					</view>
					
				</view>
				<view class="item-c item">
					<view class="item-c-1">
						{{item.isContent.position.enterprise_name}}
					</view>
					<view class="item-c-2">
						{{item.isContent.position.scale}}
					</view>
				</view>
				<view class="item-d item" style="align-items: center;">
					<view class="item-d-1">
						<image class="avatar" :src="item.isContent.admin.avatar" />
					</view>
					<view class="item-d-2" style="margin-left: 30rpx;">
						{{item.isContent.admin.nickname}}
					</view>
				</view>
			</view>


		</view>

	</view>
	<!-- <view style="height: 1px;"></view> -->
</template>


<script>
	let msgStorage = require("../msgstorage");
	let disp = require("@/utils/broadcast");
	let LIST_STATUS = {
		SHORT: "scroll_view_change",
		NORMAL: "scroll_view"
	};
	let page = 0;
	let Index = 0;
	let curMsgMid = '';
	let isFail = false;
	import audioMsg from "./type/audio/audio";

	export default {
		data() {
			return {
				view: LIST_STATUS.NORMAL,
				toView: "",
				chatMsg: [],
				__visibility__: false,
				isIPX: false,
				myAvatar:"",
				eAvatar:'/chat_pages/static/images/theme2x.png',//人事头像
			};
		},

		components: {
			audioMsg
		},
		props: {
			username: {
				type: Object,
				default: () => ({})
			}
		},

		// lifetimes
		created() {},

		beforeMount() {
			this.__visibility__ = true;
			page = 0;
			Index = 0;
		},

		moved() {},

		destroyed() {
			this.__visibility__ = false;
			msgStorage.off("newChatMsg", this.dispMsg)
		},
		mounted(event) {
			let userInfo=uni.getStorageSync('userInfo');
			console.log(userInfo.avatar)
			this.myAvatar = userInfo.avatar || '/chat_pages/static/images/theme22x.png'
			let me = this;
			if (getApp().globalData.isIPX) {
				this.setData({
					isIPX: true
				});
			}

			this.username = uni.username;
			let username = this.username;
			let myUsername = uni.getStorageSync("myUsername");
			
			let sessionKey = username.groupId ? username.groupId + myUsername : username.your + myUsername;
			let chatMsg = uni.getStorageSync(sessionKey) || [];
			this.renderMsg(null, null, chatMsg, sessionKey);
			uni.setStorageSync(sessionKey, null);
			disp.on('em.error.sendMsgErr', function(err) {
				// curMsgMid = err.data.mid;
				isFail = true;
				// return;
				console.log('发送失败了');
				return;
				let msgList = me.chatMsg;
				msgList.map(item => {
					if (item.mid.substring(item.mid.length - 10) == curMsgMid.substring(curMsgMid.length -
							10)) {
						item.msg.data[0].isFail = true;
						item.isFail = true;
						me.setData({
							chatMsg: msgList
						});
					}
				});

				// if (me.curChatMsg[0].mid == curMsgMid) {
				//   me.curChatMsg[0].msg.data[0].isShow = false;
				//   me.curChatMsg[0].isShow = false;
				// }

				uni.setStorageSync("rendered_" + sessionKey, msgList);
			});
			msgStorage.on("newChatMsg", this.dispMsg);
			
		},

		methods: {
			toPositionDetails(id){
				let obj={
					id,
					type:1
				}
				uni.navigateTo({
					url: '/pages/position/job_detail?e=' + JSON.stringify(obj)
				})
			},
			jumpInterview_details(id) {
				uni.navigateTo({
					url: '/pages/news/interview_details?id=' + id
				})
			},
			normalScroll() {
				this.setData({
					view: LIST_STATUS.NORMAL
				});
			},
			dispMsg(renderableMsg, type, curChatMsg, sesskey) {
				let me = this;
				let username = this.username;
				let myUsername = uni.getStorageSync("myUsername");
				let sessionKey = username.groupId ? username.groupId + myUsername : username.your + myUsername;
				me.curChatMsg = curChatMsg;

				if (!me.__visibility__) return; // 判断是否属于当前会话

				if (username.groupId) {
					// 群消息的 to 是 id，from 是 name
					if (renderableMsg.info.from == username.groupId || renderableMsg.info.to == username.groupId) {
						if (sesskey == sessionKey) {
							me.renderMsg(renderableMsg, type, curChatMsg, sessionKey, 'newMsg');
						}
					}
				} else if (renderableMsg.info.from == username.your || renderableMsg.info.to == username.your) {
					if (sesskey == sessionKey) {
						me.renderMsg(renderableMsg, type, curChatMsg, sessionKey, 'newMsg');
					}
				}
			},
			shortScroll() {
				this.setData({
					view: LIST_STATUS.SHORT
				});
			},

			onTap() {
				this.$emit("msglistTap", null, {
					bubbles: true
				});
			},

			previewImage(event) {
				var url = event.target.dataset.url;
				uni.previewImage({
					urls: [url] // 需要预览的图片 http 链接列表

				});
			},

			getHistoryMsg() {
				let me = this;
				let username = this.username;
				let myUsername = uni.getStorageSync("myUsername");
				let sessionKey = username.groupId ? username.groupId + myUsername : username.your + myUsername;
				let historyChatMsgs = uni.getStorageSync("rendered_" + sessionKey) || [];

				if (Index < historyChatMsgs.length) {
					let timesMsgList = historyChatMsgs.slice(-Index - 10, -Index);
					this.setData({
						chatMsg: timesMsgList.concat(me.chatMsg),
						toView: timesMsgList[timesMsgList.length - 1].mid
					});
					Index += timesMsgList.length;

					if (timesMsgList.length == 10) {
						page++;
					}

					uni.stopPullDownRefresh();
				}
			},

			renderMsg(renderableMsg, type, curChatMsg, sessionKey, isnew) {
				let me = this;
				var historyChatMsgs = uni.getStorageSync("rendered_" + sessionKey) || [];
				historyChatMsgs = historyChatMsgs.concat(curChatMsg);

				if (!historyChatMsgs.length) return;

				historyChatMsgs.forEach((e) => {
					if (e.style == "self" && e.msg.ext?.type == 0) {
						console.log(e)
						e.isType = 1
						e.isContent = {
							admin: JSON.parse(e.msg.ext.admin),
							position: JSON.parse(e.msg.ext.position)
						}
						if(e.isContent.position.ask_json!=''){
							e.isContent.position.ask_json = JSON.parse(e.isContent.position.ask_json)
						}
					}
				})
				console.log(historyChatMsgs)

				if (isnew == 'newMsg') {
					this.setData({
						chatMsg: this.chatMsg.concat(curChatMsg),
						// 跳到最后一条
						toView: historyChatMsgs[historyChatMsgs.length - 1].mid
					});
				} else {

					this.setData({
						chatMsg: historyChatMsgs.slice(-10),
						// 跳到最后一条
						toView: historyChatMsgs[historyChatMsgs.length - 1].mid
					});
				}

				uni.setStorageSync("rendered_" + sessionKey, historyChatMsgs);
				let chatMsg = uni.getStorageSync(sessionKey) || [];
				chatMsg.map(function(item, index) {
					curChatMsg.map(function(item2, index2) {
						if (item2.mid == item.mid) {
							chatMsg.splice(index, 1);
						}
					});
				});
				uni.setStorageSync(sessionKey, chatMsg);
				Index = historyChatMsgs.slice(-10).length;
				// setTimeout 兼容支付宝小程序
				setTimeout(() => {
					uni.pageScrollTo({
						scrollTop: 5000,
						duration: 300,
						fail: (e) => {
							//console.log('滚失败了', e)
						}
					});
				}, 100)

				if (isFail) {
					this.renderFail(sessionKey);
				}
			},

			renderFail(sessionKey) {
				let me = this;
				let msgList = me.chatMsg;
				msgList.map(item => {
					if (item.mid.substring(item.mid.length - 10) == curMsgMid.substring(curMsgMid.length - 10)) {
						item.msg.data[0].isFail = true;
						item.isFail = true;
						me.setData({
							chatMsg: msgList
						});
					}
				});

				if (me.curChatMsg[0].mid == curMsgMid) {
					me.curChatMsg[0].msg.data[0].isShow = false;
					me.curChatMsg[0].isShow = false;
				}

				uni.setStorageSync("rendered_" + sessionKey, msgList);
				isFail = false;
			},

			clickMsg(event) {
				if (typeof(event.target.dataset.msg) == 'object' &&
					event.target.dataset.msg.msg.ext &&
					event.target.dataset.msg.msg.ext.msg_extension) {
					this.$emit("clickMsg", event.target.dataset.msg.msg.ext)
				}
			}

		}
	};
</script>
<style scoped lang="scss">
	.positionDetails {
		display: flex;
		flex-direction: column;
		background: #cae0e269;
		border-radius: 30rpx;
		padding: 20rpx;
		margin-top: 10rpx;
		font-size: 26rpx;

		.item {
			margin: 10rpx;
			display: flex;

			.item-a {
				display: flex;

			}

			.item-c {
				display: flex;

				.item-c-1 {}

				.item-c-2 {}
			}

			.item-d {
				display: flex;

				.item-d-1 {
					.avatar {
						// height: 72rpx !important;
						// width: 72rpx !important;
						// border-radius: 50% !important;
					}
				}

				.item-d-2 {}
			}
		}
	}

	.item-a1 {
		font-weight: 600;
		width: 50%;
	}

	.item-a2 {
		display: flex;
		flex-direction: row-reverse;
		width: 100%;
		color: blue;

	}

	.item-b {
		display: flex;
		font-size: 24rpx;
		color: #252222;
		width: 80%;
		font-size: 24rpx;
		color: #252222;
		width: 80%;

		.item-b-1 {}

		.item-b-2 {}

		.item-b-3 {}

		.item-b-4 {}
	}

	.item-c-2 {
		margin-left: 30rpx;
	}

	/* .btn_{
		display: grid;
		grid-template-columns: 100upx 100upx;
		justify-content: space-between;
	} */
	/* .tilte_a{
		font-size: 28upx;
	}
	.item_a{
		line-height: 32upx;
	} */
	@import "./msglist.css";
</style>
