<template>
	<view class="questionAnswering">
		<!-- 问题 -->
		<view class="problem flex-r-c-c">
			<view class="text two-line-ellipsis">
				{{data}}
			</view>
		</view>
		<!-- 回答 -->
		<view class="p-3 box-border">
			<uni-easyinput type="textarea" autoHeight v-model="substance" maxlength="300"></uni-easyinput>
		</view>
		<!-- 按钮 -->
		<buttonOperation @tapBtn='tapBtn'>
			回复
		</buttonOperation>
		<u-notify ref="uNotify"></u-notify>
	</view>
</template>

<script>
	import {
		answerForum,
		forumDetail
	} from '@/request/api.js'
	import buttonOperation from '@/components/common/buttonOperation.vue'
	export default {
		components: {
			buttonOperation
		},
		data() {
			return {
				id: null,
				data: null,
				substance: ''
			}
		},
		onLoad(e) {
			this.id = e.id
			this.getforumData()
		},
		onReady() {


			// 也可以通过主题形式调用，如：
			// this.$refs.uNotify.primary('Primary主题')

			// 关闭 notify
			// this.$refs.uNotify.close()
		},
		methods: {
			getforumData() {
				forumDetail({
					id: this.id
				}).then(res => {
					this.data = res.data.substance
				})
			},
			tapBtn() {
				answerForum({
					id: this.id,
					substance: this.substance
				}).then(res => {
					if (res.code == 1 && res.msg == '成功') {
						this.$refs.uNotify.success('回复成功')
						uni.$emit('answer',e=>{ //
						})
						setTimeout(() =>{
							// uni.switchTab({
							//     url: '/pages/index/index'
							// });
							uni.navigateTo({
								url: '/pages/index/forum_detail?id=' + this.id
							})
						    // uni.$emit('nextStep', '-1')
						}, 1000);
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.questionAnswering {
		width: 100vw;

		.btn {
			width: 90%;
			height: 84rpx;
			line-height: 84rpx;
			text-align: center;
			font-size: 28rpx;
			font-weight: 400;
			border-radius: 20rpx;
			background: #157DFA;
			color: #fff;
			margin: 40rpx auto;
		}


		.problem {
			width: 100%;
			height: 128rpx;
			background-color: #F5F5F5;
			box-sizing: border-box;
			font-size: 28rpx;
			font-weight: 400;
			color: #000;

			.text {
				width: 90%;
			}
		}
	}
</style>
