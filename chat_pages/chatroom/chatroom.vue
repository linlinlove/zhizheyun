<template>
	<chat id="chat" :username="username" ref="chat" chatType="singleChat" @onClickInviteMsg="onClickMsg"></chat>
</template>

<script>
	let disp = require("@/utils/broadcast");
	import chat from "@/chat_pages/components/chat/chat.vue";

	export default {

		data() {
			return {
				username: {
					your: ""
				}
			};
		},

		components: {
			chat
		},
		props: {},
		// options = 系统传入的 url 参数
		onLoad(options) {
			let username = JSON.parse(options.username);
			this.setData({
				username: username
			});
			uni.username = username;
			uni.setNavigationBarTitle({
				title: username.your
			});
		},

		onUnload() {
			disp.fire("em.chatroom.leave");
		},

		onPullDownRefresh: function() {
			uni.showNavigationBarLoading();
			this.$refs.chat.getMore();
			// 停止下拉动作
			uni.hideNavigationBarLoading();
			uni.stopPullDownRefresh();
		},
		methods: {
			onClickMsg(msg) {
				msg.action = 'join'
				uni.navigateTo({
					url: "../emedia/index?srcData=" + JSON.stringify(msg)
				});
			}
		}
	};
</script>
<style>
	@import "./chatroom.css";
</style>
