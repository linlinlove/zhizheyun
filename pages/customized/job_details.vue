<template>
	<view class="">
	
		<view class="current">
			<imageShow :imgSrc="data_.publi_image"></imageShow>
		</view>
		<view class="job-card box-border p-3">
			<view class="job-detail pt-re">
				<view class="job-price">
					{{data_.min_money}}-{{data_.max_money}}元
				</view>
				<view class="black-font">
					岗位:{{data_.name}}
				</view>
				<view>
					单位:{{data_.enterprise_name}}
				</view>
				<view>
					企业性质：{{data_.nature}}
				</view>
				<view>
					学历性质：{{data_.education}}
				</view>
				<view>
					年龄：{{data_.age}}
				</view>
				<view>
					岗位经验：{{data_.experience}}
				</view>
				<view class="job-requirements">
					<view class="requirements-title">岗位要求:</view>
				<!-- 	<view class="requirements-item" v-for="(i,k) in data_.ask_json" :key="k">
						{{i}}
					</view> -->
					<view class="gwyq">
							{{data_.job_details}}
					</view>
					
				</view>
				<view @tap="callPhone" class="tel">
					联系电话:{{data_.publi_mobile}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {employmentDetail } from '@/request/api.js'
	import imageShow from '@/components/common/imageShow.vue'
	export default {
		components: {
			imageShow
		},
		data(){
			return{
				id:null,
				data_:null
			}
		},
		onLoad(e) {
			this.id=e.id
			this.getData()
		},
		methods:{
			getData(){
				employmentDetail({
					id:this.id
				}).then(res=>{
					this.data_=res.data
				})
			},
			callPhone(){
				uni.makePhoneCall({
					phoneNumber: this.data_.publi_mobile,
					success: function() {
						console.log('拨打电话成功');
					},
					fail() {
						console.log('打电话失败了');
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.job-detail{
		.black-font{
			font-wight:600;
			color: #000;
		}
	} 
	.job-price {
		position: absolute;
		right: 20upx;
		top: 30upx;
		font-size: 28upx;
		color: $common-color !important;
	}
	.gwyq{
		font-size: 28rpx;
		font-weight: 400;
		color: #979797;
	}
	.requirements-title {
		padding-bottom: 20upx;
	}

	.requirements-item {
		color: #979797;
		font-size: 24upx;
		letter-spacing: 4upx;
		line-height: 34upx;
	}

	.job-detail {
		background-color: #fff;
		padding: 30upx 20upx;
		display: grid;
		grid-row-gap: 20upx;
		border-radius: 20upx;
	}

	.job-detail>view {
		color: #4D4D4D;
		font-size: 28upx
	}

	.job-card {
		background-color: #f5f5f5;
		width: 100%;
		height: calc(100vh - 340upx);
	}
	.job-detail> .tel{
		color: #157DFA;
		font-size: 28rpx;
	}
</style>
