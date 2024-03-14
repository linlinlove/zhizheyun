<template>
	<view style="font-size: 28upx;">
		<view class="p-3 box-border f-row ai-c" @tap="jumpCompany">
			<view class="avatar">
				<image :src="data.admin.avatar||data.enterprise.logo_image" mode=""></image>
			</view>
			<view class="ml-3 text-com">
				<view class="name">
					{{data.admin.nickname}}
				</view>
				
				<view class="company_name">{{data.enterprise_name||data.enterprise.name}}</view>
						
				<view class="one-worp mt-1">
					{{data.op||''}}
				</view>
			</view>
		</view>
		<view class="p-3 info">
			<view class="">
				时间：{{data.interview_time_text}}
			</view>
			<view class="">
				职位：{{data.position_name}} <text class="ml-4 color">{{data.salary}}</text>
			</view>
			<view class="">
				联系人：{{data.enterprise.contacts}} <text class="ml-4 " @tap="callPhone">{{data.enterprise.contacts_mobile}}</text>
			</view>
			<view class="">
				地址：{{data.enterprise.address}}
			</view>
			<view class="map-box">
				<separateMap 
				:latitude='Number(data.enterprise.lat)' :longitude='Number(data.enterprise.lon)'></separateMap>
			</view>
           <view class="" >
           	面试状态：{{data.status==1?'已通过面试':(data.status==0?'等待面试':'未通过面试')}}
           </view>
		   <view class="" v-if="data.status != 0 && data.remark">
		   	备注：{{data.remark}}
		   </view>
		   
		</view>
	</view>
</template>

<script>
	import {interviewDetail} from '@/request/api.js'
	import separateMap from '@/components/map/index.vue'
	export default {
		components: {
			separateMap
		},
		data(){
			return{
				id:null,
				data:null
			}
		},
		onLoad(e) {
			this.id=e.id
			this.getData()
		},
		methods: {
			getData(){
				interviewDetail({
					id:this.id
				}).then(res=>{
					console.log(res.data)
					this.data=res.data
				})
			},
			/* 打电话 */
			callPhone() {
				uni.makePhoneCall({
					phoneNumber: this.data.enterprise.contacts_mobile,
					success: function() {
						console.log('拨打电话成功');
					},
					fail() {
						console.log('打电话失败了');
					}
				})
			},
			/* 公司详情 */
			jumpCompany() {
					uni.navigateTo({
						url: '/pages/position/company_detail?id=' + this.data.enterprise.id
					})
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	.map-box {
		width: 100%;
		height: 400upx;
		box-sizing: border-box;
		border-radius: 10upx;
		overflow: hidden;
	}

	.color {
		color: $common-color;
	}

	.info {
		display: grid;
		grid-row-gap: 30upx;
	}

	.avatar {
		width: 100upx;
		height: 100upx;

		image {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			display: block !important;
		}
	}

	.text-com {
		flex: 1;
		width: 0;
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

	.f-row {
		border-bottom: 1upx solid #E2E2E2;
		border-top: 1upx solid #E2E2E2;
	}
</style>
