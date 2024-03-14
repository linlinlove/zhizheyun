<template>
	<view class="forumDetail">
		<!-- 发布者 -->
		<view class="Publisher list">
			<!-- 头像名称 -->
			<view class="userInfo">
				<view class="flex-r-s-c">
					<image :src="data.user.avatar" mode=""></image>
					<view class="name">{{data.user.nickname}}</view>
				</view>
				<!-- 时间 -->
				<view class="time">{{data.createtime.substring(0,10)}}</view>
			</view>
			<!-- 问题 -->
			<text class="problem box-border" user-select=true>
				{{data.substance}}
			</text>
		</view>
		<!-- 回答标题 -->
		<view class="title">全部回答</view>
		<!-- 回答者 -->
		<view class="respondent list border" v-for="(i,k) in list" :key="k">
			<!-- 头像名称 -->
			<view class="userInfo ">				
				<view class="flex-r-s-c">
					<image :src="i.user.avatar" mode=""></image>
					<view class="name">{{i.user.nickname}}</view>
				</view>
				<view class="time">{{i.createtime.substring(0,10)}}</view>
			</view>

			<!-- 问题 -->
			<text class="problem" user-select=true>
				{{i.substance}}
			</text>
		</view>
		<!-- 占位 -->
		<view style="width: 100%; height: 150rpx;"></view>
		<u-empty v-if="list.length==0"
		 text='快来第一个评论吧!'
		 mode="list" >
		</u-empty>

		<!-- 按钮 -->
		<view class="btn_box flex-r-a-c">
			<view class="btn_l btn_item" @tap="askFn">去提问</view>
			<view class="btn_r btn_item flex-r-c-c" @tap="ansFn">
				<u-icon name="edit-pen-fill" size="28" color="#157DFA"></u-icon>
				<view class="" style="margin-left: 10rpx;">写回答</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		forumDetail,
		answerList
	} from '@/request/api.js'
	export default {
		data() {
			return {
				id: null,
				data: null,
				page: 1,
				list: [],
				last_page: 1
			}
		},
		onLoad(e) {
			this.id = e.id
			this.getDetail()
			// this.getanswerList()
		},
		onShow() {
			this.list = []
			this.getanswerList()
		},
		methods: {
			/* 回答列表 */
			getanswerList() {
				this.list = []
				answerList({
					id: this.id,
					page: this.page
				}).then(res => {
					this.last_page = res.data.last_page
					this.list = this.list.concat(res.data.data)
				})
			},
			/* 详情 */
			getDetail() {
				forumDetail({
					id: this.id
				}).then(res => {
					this.data = res.data
				})
			},
			/* 提问 */
			askFn() {
				uni.navigateTo({
					url: '/pages/index/put_questions'
				})
			},
			/* 回答 */
			ansFn() {
				uni.navigateTo({
					url: "/pages/index/question_answering?id=" + this.id
				})
			}
		},
		onReachBottom() {
			if (this.page < this.last_page) {
				this.page = this.page + 1
				this.getanswerList()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.forumDetail {
		width: 100vw;
		box-sizing: border-box;
		font-size: 28upx !important;

		.btn_box {
			width: 100%;
			height: 144rpx;
			position: fixed;
			left: 0;
			bottom: constant(safe-area-inset-bottom);
			bottom: env(safe-area-inset-bottom);

			.btn_item {
				width: 40%;
				height: 84rpx;
				border-radius: 20rpx;
				font-size: 28rpx;
				font-weight: 400;
			}

			.btn_l {
				background-color: #157DFA;
				color: #fff;
				line-height: 84rpx;
				text-align: center;
			}

			.btn_r {
				border: 1px solid #157DFA;
				color: #157DFA;
			}
		}

		.title {
			width: 100%;
			height: 64rpx;
			line-height: 64rpx;
			background: #F5F5F5;
			font-size: 28rpx;
			font-weight: 400;
			color: #000;
			padding: 0rpx 60rpx;
		}

		.border::after {
			content: '';
			width: 100%;
			height: 1px;
			background-color: #ECECEC;
			position: absolute;
			left: 0;
			bottom: 0;
		}

		.list {
			box-sizing: border-box;
			padding: 0rpx 32rpx 20rpx;
			position: relative;

			.userInfo {
				margin: 20rpx 0rpx;
                display: flex;
			    justify-content: space-between;
				image {
					width: 72rpx;
					height: 72rpx;
					border-radius: 50%;
					margin-right: 40rpx;
				}

				.name {
					color: #4D4D4D;
					font-size: 28rpx;
					font-weight: 400;
				}
				.time {
					color: #4D4D4D;
					font-size: 28rpx;
					font-weight: 400;
				    line-height: 72rpx;
				}
			}
		}
	}

	.problem {
		word-wrap: break-word
	}
</style>
