<template>
	<view class="details">
		<view class="jobDetails">
			<!-- 职位 -->
			<view class="occupation_box">
				<view class="flex-r-b-c">
					<view class="occupation_l">项目名称</view>
					<view class="occupation_r">{{data.name}}</view>
				</view>
			</view>
			<view class="occupation_box">
				<view class="flex-r-b-c">
					<view class="occupation_l">项目开始时间</view>
					<view class="occupation_r">{{data.start_time_text.substring(0,10)}}</view>
				</view>
			</view>
			<view class="occupation_box">
				<view class="flex-r-b-c">
					<view class="occupation_l">项目结束时间</view>
					<view class="occupation_r">{{data.end_time_text.substring(0,10)}}</view>
				</view>
			</view>
			<view class="occupation_box">
				<view class="flex-r-b-c">
					<view class="occupation_l">所属行业</view>
					<view class="occupation_r">{{data.industry}}</view>
				</view>
			</view>
			
			<!-- 公司名称-->
			<view class="occupation_box">
				<view class="flex-r-b-c">
					<view class="occupation_l">企业名称</view>
					<view class="occupation_r">{{data.enterprise.name}}</view>
				</view>
			</view>
			<!-- 职位详情 -->
			<view class="details_box">
				<view class="title_box flex-r-s-c">
					<view class="icon"></view>
					<view class="">项目简介</view>
				</view>
				<view class="content">
					<rich-text :nodes='data.content' style=" word-wrap: break-word; word-break: normal;"></rich-text>
				</view>

			</view>
			<!-- 联系电话 -->
			<view class="tel_box">
				<view class="title_box flex-r-s-c">
					<view class="icon"></view>
					<view class="tel_color">联系电话</view>
				</view>
				<view class="tel flex-r-s-c" @tap.stop="dialTel(data.contact_mobile)">
					<u-icon name="phone-fill" size="28" color="#157DFA"></u-icon>
					<view style="margin-left: 10rpx;" class="">{{data.contact_mobile}}
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import {
		demand_details
	} from '@/request/api.js'
	export default {
		data() {
			return {
				id: '',
				data: null
			};
		},
		onLoad(res) {
			// console.log(res.id)
			this.id = res.id
			this.getDetails()
		},
		methods: {
			async getDetails() {
				let id = {
					id: this.id
				}
				let res = await demand_details(id)
				this.data = res.data
				// console.log(this.data)
			},
			dialTel(tel) {
				uni.makePhoneCall({
					phoneNumber: tel,
					success(res) {
						cconsole.log('拨打电话成功', res);
					},
					fail(err) {
						console.log('拨打电话失败', err);
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	.post-requirement {
		overflow: hidden;
		margin-top: 5rpx;
	}

	.requirement-item {
		display: inline-block;
		background-color: #F5F5F5;
		float: left;
		color: #979797;
		font-size: 20upx;
		padding: 4upx 8upx;
		border-radius: 5upx;
		height: 32upx;
		line-height: 32upx;
		margin-top: 10rpx;
	}

	.right_btn {
		background: #FFFFFF;
		border: 1upx solid #157DFA;
		border-radius: 20upx;
		color: #157DFA;
	}

	.left_btn {
		background: #157DFA;
		border-radius: 20upx;
		color: #FFFFFF;
	}

	.grid {
		font-size: 28rpx;
		line-height: 30px;
		text-align: center;
		padding: 0 24rpx;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 300rpx 300rpx;
		justify-content: space-between;
		height: 60rpx;
		z-index: 99;
		bottom: 50rpx;
		width: 92vw;
		left: 9px;
		position: absolute;
		bottom: 50rpx;
	}

	.title_box {
		font-size: 32rpx;
		font-weight: 400;
		color: #4D4D4D;

		.icon {
			width: 6rpx;
			height: 34rpx;
			background: linear-gradient(180deg, #157DFA 0%, #7EB9FF 100%);
			margin-right: 20rpx;
		}
	}

	.jobDetails {
		width: 100vw;
		margin-bottom: 36px;
		height: 90%;
		overflow: scroll;

		.tel_box {
			width: 90%;
			margin: 40rpx auto;

			.tel {
				box-sizing: border-box;
				padding: 30rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #157DFA;
			}

			.tel_color {
				color: #000;
				font-weight: 600;
			}
		}

		.details_box {
			width: 90%;
			margin: 40rpx auto;

			.content {
				box-sizing: border-box;
				padding: 20rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #979797;
			}
		}

		.occupation_box {
			width: 90%;
			box-sizing: border-box;
			margin: 0rpx auto;
			padding: 40rpx 0rpx;
			border-bottom: 1px solid #ECECEC;
			font-size: 32rpx;
			font-weight: 500;
			color: #000000;
			.occupation_l{
				color: #4D4D4D;
			}
			.occupation_r {
				font-size: 28rpx;
				color: #979797;
			}
		}

		.company_box {
			width: 90%;
			box-sizing: border-box;
			margin: 0rpx auto;
			padding: 40rpx 0rpx;
			border-bottom: 1px solid #ECECEC;

			.company_img {
				width: 100rpx;
				height: 100rpx;
			}

			image {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
			}

			.company_r {
				display: flex;
				font-size: 32rpx;
				font-weight: 500;
				color: #000;
				.name {
					font-size: 28rpx;
					font-weight: 400;
					color: #4D4D4D;
					margin-top: 20rpx;
				}
			}
		}
	}
</style>
