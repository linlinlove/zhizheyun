<template>
	<!-- 公司详情页 -->
	<view class="companyDetails">
		<!-- 公司名称 -->
		<view class="company_box flex-r-b-c f-row jc-sb ai-c">
			<view class="company_name">
				<view class="top">
					<!-- {{data.address}} -->
				</view>
				<view class="">
					<!-- 	{{data.contacts}}~~{{data.contacts_mobile}} -->
					{{data.name}}
				</view>
			</view>
			<image :src="data.logo_image" mode=""></image>
		</view>
		
		<view class="company_list flex-r-b-c" style="padding-bottom: 30rpx; border-bottom: 0px solid #ECECEC;">
			<view class="list_title flex-r-s-c">
				<view class="icon"></view>
				<view class="text">公司规模</view>
			</view>
			<view class="money">{{data.scale}}</view>
		</view>
		
		<view class="company_list">
			<view class="list_title flex-r-s-c">
				<view class="icon"></view>
				<view class="text">公司简介</view>
			</view>
			<view class="list_content">
				{{data.introduce||''}}
			</view>
		</view>
		<view class="company_list" v-if="data.information">
			<view class="list_title flex-r-s-c">
				<view class="icon"></view>
				<view class="text">企业资讯</view>
			</view>
			<view class="list_content">
				<!-- {{data.information}} -->
				<u-parse :content="data.information"></u-parse>
			</view>
		</view>

<!-- 		<view class="company_list">
			<view class="list_title flex-r-s-c">
				<view class="icon"></view>
				<view class="text">公司环境</view>
			</view>
			<view class="image_box flex-r-s-c">
				<image :src="i" @tap="showImg(i,k)" v-for="(i,k) in data.images" :key="k"></image>
			</view>
			
		</view> -->
		
		<view class="company_list" v-if="data.images">
			<view class="list_title flex-r-s-c">
				<view class="icon"></view>
				<view class="text">公司环境</view>
			</view>
			<view class="swiper-comp" >
				<swiper class="swiper" :indicator-dots="true" indicator-active-color="white" :autoplay="false" :interval="4000" :duration="800" :circular="true" >					
					<swiper-item v-for="(item, index) in data.images" :key="index">
						<view class="swiper-item" :class="{active: swiperIndex === index}">
							<image :src="item" mode="scaleToFill" @tap="showImg(item,index)" :show-menu-by-longpress="true"></image>
						</view>
					</swiper-item>
				</swiper>
				<!-- <view class="swiper-dot">
					<view v-for="(item, index) in list" :class="{active: swiperIndex === index}"></view>
				</view> -->
			</view>
		</view>
		
		<view class="company_list" v-if="data.vedio">
			<view class="list_title flex-r-s-c">
				<view class="icon"></view>
				<view class="text">企业宣传视频</view>
			</view>
	
			<view class="swiper-comp" >
				<swiper class="swiper" :indicator-dots="false" :autoplay="false" :interval="4000" :duration="800" :circular="true" >					
					<swiper-item v-for="(item, index) in data.vedio" :key="index">
						<view class="swiper-item" :class="{active: swiperIndex === index}">
							<video :src="item" ></video>
						</view>
					</swiper-item>
				</swiper>
				<!-- <view class="swiper-dot">
					<view v-for="(item, index) in list" :class="{active: swiperIndex === index}"></view>
				</view> -->
			</view>
		</view>
		
<!-- 		<view class="company_list">
			<view class="list_title flex-r-s-c">
				<view class="icon"></view>
				<view class="text">企业宣传视频</view>
			</view>
			<view class="video_box flex-r-a-c1" v-if="data.vedio">
		
				<video :src="i" v-for="(i,k) in data.vedio" :poster='data.logo_image'></video>
			</view>
		</view> -->
		
		

		<view class="company_list" v-if="list.length!=0">
			<view class="list_title flex-r-s-c pb-3">
				<view class="icon"></view>
				<view class="text">招聘情况</view>
			</view>
			<view>
				<postCard :list='list' @tapCard='tapCard'></postCard>
			</view>
		</view>

		<!-- 占位 -->
		<view style="width: 100%; height: 100rpx;"></view>

	</view>
</template>

<script>
	import {
		companyDetail,
		companyList
	} from '@/request/api.js'
	import postCard from '@/components/common/postCrad.vue'
	export default {
		components: {
			postCard
		},
		data() {
			return {
				id: null,
				data: null,
				last_page: 1,
				page: 1,
				list: [],
				current:0,
			}
		},
		onLoad(e) {
			this.id = e.id
			this.getdata()
			/* 	this.getList() */
		},
		methods: {
			showImg(i,e) {
				uni.previewImage({
					urls: this.data.images,
					count: e,
					current:i
				})
			},
			getdata() {
				companyDetail({
					id: this.id
				}).then(res => {
					this.data = res.data
					this.list = this.list.concat(res.data.position)
				})
			},
			getList() {
				console.log(11111)
				companyList({
					enterprise_id: this.id,
					page: this.page
				}).then(res => {
					this.last_page = res.data.last_page
					// console.log(this.list)
					this.list = this.list.concat(res.data.data)
				})
			},
			tapCard(id) {
				let obj={
					id,
					type:1
				}
				uni.navigateTo({
					url: '/pages/position/job_detail?e=' + JSON.stringify(obj)
				})
			}
		}
	}
</script>

<style lang="less">
	.companyDetails {
		width: 100vw;

		.company_list {
			width: 90%;
			margin: 40rpx auto;

			.list_title {
				font-size: 32rpx;
				font-weight: 400;
				color: #4D4D4D;

				.icon {
					width: 6rpx;
					height: 34rpx;
					margin-right: 20rpx;
					background: linear-gradient(180deg, #157DFA 0%, #7EB9FF 100%);
				}
			}

			.list_content {
				box-sizing: border-box;
				padding: 20rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #979797;
			}

			.image_box {
				flex-wrap: wrap;
				margin: 20rpx 0rpx;

				image {
					width: 214rpx;
					height: 214rpx;
					border-radius: 20rpx;
					margin: 5rpx;
					background-color: #157DFA;
				}
			}

			.money {
				color: #157DFA;
				font-size: 32rpx;
				font-weight: 500;
			}

			.recruit_list {
				margin: 30rpx 0rpx;
				border-bottom: 1px solid #ECECEC;

				.list_title {
					font-size: 28rpx;
					font-weight: 400;
					color: #4D4D4D;

					.money {
						font-weight: 500;
						color: #157DFA;
					}
				}

				.requirement_box {
					margin: 20rpx 0rpx;
					flex-wrap: wrap;

					.requirement_item {
						box-sizing: border-box;
						padding: 10rpx 20rpx;
						background: #F5F5F5;
						border-radius: 6rpx;
						margin: 8rpx;
					}
				}

				.company {
					font-size: 24rpx;
					font-weight: 400;
					color: #4D4D4D;

					.number {
						margin-left: 50rpx;
					}
				}

				.personnelMatters {
					margin: 40rpx 0rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #4D4D4D;

					image {
						width: 48rpx;
						height: 48rpx;
						border-radius: 50%;
						margin-right: 40rpx;
					}
				}
			}

			.flex-r-a-c1 {
				display: flex !important;
				flex-direction: row !important;
				justify-content: space-between !important;
				align-items: flex-start !important;
			}

			.video_box {
				width: 100%;
				margin: 20rpx 0rpx;
				flex-wrap: wrap;

				video {
					width: 100%;
					height: 400rpx;
					margin-top: 15rpx;
				}
			}

		}

		.company_box {
			width: 90%;
			padding: 40rpx 0rpx;
			margin: 0rpx auto;
			border-bottom: 1px solid #ECECEC;

			.company_name {
				font-size: 32rpx;
				font-weight: 600;
				height: 120rpx;
				line-height: 120rpx;
				color: #666;
			}

			image {
				width: 120rpx;
				height: 120rpx;
				border-radius: 30rpx;
			}
		}
	}
	
	.swiper-comp{
		padding: 40rpx 0rpx;
		margin: 0 20rpx;
		height: 400rpx;
		position: relative;
		// border-radius: 20rpx !important;
	}
	.swiper {
		// width: 100%;
		margin: 0 auto;
		height: 400rpx;
		background-color: white;
		// border: 1rpx solid rgba(0, 0, 0, 0.1);
		border-radius: 20rpx;
		
		swiper-item {
			height: 400rpx;
			// border-radius: 10rpx;
			.swiper-item {
				height: 100%;
				image {
					display: block;
					width: 100%;
					height: 100%;
				}
				video{
					display: block;
					width: 100%;
					height: 100%;
				
				}
			}
			
		}
	}
	
</style>
