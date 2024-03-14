<template>
	<view class='indexRequirement'>
		<view class="list" :style="{background:(showBorder == false?'transparent':'#489bef')}" v-for="item in list">
			<view class="content">
				<view class="center">
					<view class="top">
						<view class="left" :style="{color:(showBorder == false?'#505050':'#fff')}">
							项目名称：{{item.name}}</view>
					</view>
					<view class="bottom">
						<view class="left" :style="{color:(showBorder == false?'#505050':'#fff')}">
							创建时间：{{item.createtime_text.substring(0,10)}}</view>
					</view>
				</view>
				<view class="right" @click="goDetails(item.id)">
					项目详情
				</view>
			</view>
			<view class="border_data" v-if="showBorder">
				<view class="_border">
				</view>
			</view>
		</view>
		<view class="noMore" v-if="last_page==form.page&&list.length!=0"
			style="text-align: center;color: #797575;margin-top: 20rpx;padding-bottom: 60rpx;">
			数据加载完成...
		</view>
		<u-empty text="暂无列表哦~~" mode="list" v-if="list.length==0" margin-top='50'></u-empty>
	</view>
</template>

<script>
	import {
		demand_list
	} from '@/request/api.js'
	export default {
		data() {
			return {
				list: [],
				form: {
					page: 1
				},
				last_page: 1,
			};
		},
		onShow() {
			this.list = []
			this.form.page = 1
			this.getList()
		},
		onReachBottom() {
			// console.log(111)
			if (this.form.page < this.last_page) {
				this.form.page = this.form.page + 1
				this.getList()
			}
		},
		methods: {
			async getList() {
				let res = await demand_list(this.form)
				this.list = this.list.concat(res.data.data)
				this.last_page = res.data.last_page
				// console.log(res)
			},
			goDetails(id) {
				uni.navigateTo({
					url: '/resume_pages/requirementDetails/requirementDetails?id=' + id
				})
			}
		}
	}
</script>

<style lang="scss">
	.indexRequirement {
		padding: 0 20rpx;
		font-size: 28rpx;

		.border_data {
			padding: 0 20rpx;

			._border {
				width: 100%;
				height: 1px;
				background-color: #D9D9D9;
			}
		}

		.list {
			color: #505050;
			background: #081738;
			margin-top: 20rpx;
			border-radius: 10px;
			color: #fff;

			.content {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 20rpx;
				color: #505050;
				padding-right: 5rpx;

				.avatar {
					width: 90rpx;
					height: 90rpx;
					border-radius: 20rpx;
					padding-top: 10rpx;

					.image {
						width: 100%;
						height: 100%;
						border-radius: 8rpx;
					}
				}

				.center {
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: left;
					justify-content: center;
					margin-left: 20rpx;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;

					.top {
						font-size: 26rpx;
						font-size: 26rpx;
						margin: 10px 0;
						display: flex;

						.right {
							font-size: 28rpx;
							color: #BABABA;
							color: #FFFFFF;
							// max-width: 62px;
						}

						.left {
							flex: 1;
							color: #FFFFFF;
							white-space: nowrap;
							text-overflow: ellipsis;
							overflow: hidden;
						}
					}

					.bottom {
						font-size: 28rpx;
						padding-left: 0;

						.right {
							font-size: 22rpx;
							color: #FFFFFF;
							max-width: 62px;
						}

						.left {
							flex: 1;
							color: #FFFFFF;
							white-space: nowrap;
							text-overflow: ellipsis;
							overflow: hidden;
						}
					}
				}

				.right {
					color: #fff;
					font-size: 28rpx;
					    margin-right: 15rpx;
				}
			}

			.bottom {
				display: flex;
				align-items: center;
				font-size: 22rpx;
				padding-left: 20rpx;
				margin-top: 10rpx;

				.time {
					flex: 1;
					padding: 20rpx 0;

					.timeValue {
						color: #BABABA;
					}

					.update {
						color: #157DFA;
						font-size: 28rpx;
					}
				}
			}
		}
	}
</style>
