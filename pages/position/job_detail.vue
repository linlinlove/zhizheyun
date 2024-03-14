<template>
	<!-- 职位详情 -->
	<view class="jobDetails">
		<!-- 职位 -->
		<view class="occupation_box">
			<view class="flex-r-b-c">
				<view class="occupation_l">{{data.name}}</view>
				<view class="occupation_r">{{data.money||data.min_money+'-'+data.max_money}}元</view>
			</view>
			<view class="post-requirement">
				<view class="requirement-item  mr-2" v-for="(i2,k2) in data.ask_json" :key="k2">
					{{i2.value}}
				</view>
			</view>
		</view>
		<!-- 人事 -->
		<view class="company_box flex-r-s-c" @tap="jumpCompany">
			<view class="company_img">
				<!-- <image :src="data.release_avatar||data.enterprise.logo_image" mode="scaleToFill"></image> -->
				<image :src="data.release_avatar||data.admin.avatar||data.enterprise.logo_image" mode="scaleToFill"></image>
			</view>
			<view class="company_r">
				<view class="name">{{data.release_name||data.admin.nickname}}</view>
				<view class="company_name">{{data.enterprise_name||data.enterprise.name}}</view>
			</view>
		</view>
		<!-- 职位详情 -->
		<view class="details_box">
			<view class="title_box flex-r-s-c">
				<view class="icon"></view>
				<view class="">职位详情</view>
			</view>
			<view class="content">
				<rich-text :nodes='data.job_details||data.industry_details'></rich-text>
			</view>

		</view>
		<!-- 联系电话 -->
		<view class="tel_box">
			<view class="title_box flex-r-s-c">
				<view class="icon"></view>
				<view class="tel_color">联系电话</view>
			</view>
			<view class="tel flex-r-s-c" @tap.stop="dialTel(data.release_mobile||data.enterprise.contacts_mobile)">
				<u-icon name="phone-fill" size="28" color="#157DFA"></u-icon>
				<view style="margin-left: 10rpx;" class="">{{data.release_mobile||data.enterprise.contacts_mobile}}</view>
			</view>
		</view>
		<!-- 公司地址 -->
		<view class="tel_box"  v-if="data.job_details">
			<view class="title_box flex-r-s-c">
				<view class="icon"></view>
				<view class="tel_color">公司地址</view>
			</view>
			<view @tap="showOnMap(data.enterprise)" class="tel flex-r-s-c" style="color:#949494;">
				<u-icon name="empty-address" size="26"></u-icon>
				<view style="margin-left: 10rpx;" class="">{{data.enterprise.address}}</view>
			</view>
		</view>
		
		<view class="grid" v-if="type==1">
			<view class="left_btn" @tap="subResume">
				投递简历
			</view>
			<view class="right_btn" @tap="chat">
				{{data.im?'继续沟通':'立即沟通'}}
			</view>
		</view>
	</view>
</template>

<script>
	import {
		hotPositionDetail,
		jobdetails,
		addconnect,
		putResume
	} from '@/request/api.js'
	export default {
		data() {
			return {
				id: null,
				data: null,
				type: null
			}
		},
		onLoad(e) {
			if (e.id) {
				this.id = e.id
			} else {
				this.id = JSON.parse(e.e).id
				this.type = JSON.parse(e.e).type
			}
			
		},
		onShow() {
			this.hotPositionDetailFn()
		},
		methods: {
			showOnMap(data){
				uni.showToast({
					title:"需要传入公司经纬度",
					icon:"none",
					duration:2000
				})
				uni.openLocation({
					latitude: 39.9,
					longitude: 116.4,
					success: function () {
						console.log('success');
					}
				});
			},
			/* 投递简历 */
			subResume() {
				let obj = {
					id: this.data.id,
					type: '投递简历'
				}
				uni.navigateTo({
					url: '/resume_pages/resume_list/resume_list?type=' + JSON.stringify(obj)
				})
				// putResume({
				// 	//岗位id
				// 	position_id: this.id,
				// 	//简历id
				// 	annex_id: 0
				// }).then(res => {
				// 	if (res.code == 1) {
				// 		uni.showToast({
				// 			icon: 'none',
				// 			duration: 1500,
				// 			title: '投递成功！'
				// 		})
				// 	} else {
				// 		uni.showToast({
				// 			icon: 'none',
				// 			duration: 1500,
				// 			title: '投递失败，请重试！'
				// 		})
				// 	}
				// })
			},
			/* 继续沟通 */
			 // chat() {
				 
   //            addconnect({
			// 		id:this.data.id,
			// 	})
				
				
			// 	.catch(()=>{
			// 		console.log(id,13213)
			// 	}	
			// 	).then(()=>{
			// 		console.log(2222)
			// 	})
			// },
			chat() {
				//第一次添加沟通
				addconnect({
					id:this.data.id,
				}).then(res=>{
					// console.log(res)
					var nameList={
						myName:uni.getStorageSync('myUsername'),
						your:this.data.admin.username
					}
					console.log(nameList)
					if(res.code==1){
						//im推送第一条消息成功
						//跳转聊天页面，传聊天两者姓名
						uni.navigateTo({
							url: '/chat_pages/chatroom/chatroom?username='+ JSON.stringify(nameList)
						})
					}else{
						uni.showToast({
							title:res.msg,
							duration:1500
						})
					}
				})
				
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
			/* 数据请求 */
			hotPositionDetailFn() {
				if (this.type == 1) {
					jobdetails({
						id: this.id
					}).then(res => {
						this.data = res.data
					})
				} else {
					hotPositionDetail({
						id: this.id
					}).then(res => {
						this.data = res.data
					})
				}
			},
			/* 公司详情 */
			jumpCompany() {
				if(this.type==1){
					uni.navigateTo({
						url: './company_detail?id=' + this.data.enterprise.id
					})
				}
			},
			/* 
			 */
		},
		destroyed() {
			this.type=null
		}
	}
</script>

<style lang="less">
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
	page{
		height: 95vh;
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
			.tel_color{
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

			.occupation_r {
				color: #157DFA;
				font-size: 28rpx;
			}
		}

		.company_box {
			width: 90%;
			box-sizing: border-box;
			margin: 0rpx auto;
			padding: 40rpx 0rpx;
			border-bottom: 1px solid #ECECEC;
            .company_img{
				width: 100rpx;
				height: 100rpx;
			}
			image {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
			}
            
			.company_r {
				margin-left: 30rpx;
				font-size: 32rpx;
				font-weight: 500;
				color: #000;
				

				.name {
					font-size: 28rpx;
					// font-weight: 400;
					font-weight: bold;
					color: #4D4D4D;
					margin-top: 10rpx;
				}
				.company_name{
					font-size: 25rpx;
					// font-weight: 400;
					// font-weight: ;
					color: #949494;
					margin-top: 10rpx;
				}
			}
		}
	}
</style>
