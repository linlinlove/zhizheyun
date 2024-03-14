<template>
	<view class="head-line pt-re  box-border vw-100">
		<moduleHead :title="'热门企业/热门项目'" :iconUrl="'/static/icon/index/index_icon8.png'" :isMoreBtn="false" class="index-box-hot">

		</moduleHead>
		<view class="hot-box">
			<view class="swiImg box-border">
				<u-swiper :list="list" keyName="image"  @click="goDetails"
					circular 
					   showTitle
				></u-swiper>
			</view>
		</view>
	</view>
</template>

<script >
	import moduleHead from '@/components/common/moduleHead.vue'
	export default{
		props:{
			list:{
				type:Array,
				default:[]
			}
		},
		components:{
			moduleHead
		},
		methods:{
			goDetails(e){
				// console.log(this.list[e])
				if(this.list[e].jump_data == 1){
					console.log(this.list[e].enterprise_id)
					uni.navigateTo({
						url: '/pages/position/company_detail?id=' + this.list[e].enterprise_id
					})
				}
				
			}
		},
		onShow(){
			console.log(this.list)
		}
	}
</script>

<style lang="scss" scoped>

	.hot-box {
			padding: 20upx 30upx 30upx;
			border-radius: 16rpx;
		.swiImg {
			height: 290upx;
			width: 100%;
		}
	}

	.live {
		
	}
	::v-deep.index-box-hot {
		    padding: 0 20rpx;
		    display: inline-block;
	}
	// .index-box1{padding: 0 40rpx;}
	// .index-box-hot{
	// 	.moduleHead{
	// 		padding: 0 30rpx;
	// 		.index-box1{
				
	// 		}
	// 	}
	// }
</style>
