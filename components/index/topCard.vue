<template>
	<view class="pt-re current vw-100">
		<image class="bgc-Img1" src="/static/icon/index/ball1.png" mode=""></image>
		<image class="bgc-Img2" src="/static/icon/index/ball2.png" mode=""></image>
		<view class="input-row box-border ai-c">
			<serachInput class="top-input" @tapSerach='tapSerach' :isDisabled='true' :placeholder="'社区关键字'" shape="square"></serachInput>
			
			<view class="f-row ai-c jc-sb" @tap="choiceCity()">
				<image class="localImg" src="/static/icon/index/location.png" mode=""></image>
				<text>{{city.substring(0,2)}}</text>
			</view>
		</view>
		<view class="bg-box box-border">
			<view class="arcbottom"></view>
		</view>
		
		
		<view class="swiImg box-border">
	<!-- 		<u-swiper :list="list" keyName="image" 
			height="156"
			width="200"  
			indicator
            circular  
			@click="wordDetail"></u-swiper> -->	
			<u-swiper
				class="u-swiper"
				:list="list"
				height="165"
				keyName="image" 
				@change="e => current = e.current"
				:autoplay="true"
				circular  
				@click="wordDetail"
				radius=0
				interval=5000
			>
				<view
					slot="indicator"
					class="indicator"
				>
					<view
						class="indicator__dot"
						v-for="(item, index) in list"
						:key="index"
						:class="[index === current && 'indicator__dot--active']"
					>
					</view>
				</view>
			</u-swiper>
		</view>
		
	</view>

</template>

<script>
	
	import serachInput from '@/components/common/serachInput.vue'
	export default {
		props:{
			list:{
				type:Array,
				default:[]
			},
			city:''
		},
		components: {
			serachInput
		},
		data() {
			return {
				listBanner: ['http://yzzc.westts.cn/uploads/20220824/4b531dc40b97f23ae35c7eb7ac69378e.png'],
				current:0,
			}
		},
		methods: {
			/* 详情 */
			wordDetail(e) {
				// console.log(e,this.list)
				if(this.list[e].jump_data == 1){
					console.log(this.list[e].enterprise_id)
					uni.navigateTo({
						url: '/pages/position/company_detail?id=' + this.list[e].enterprise_id
					})
				}
			},
			tapSerach() {
				uni.navigateTo({
					url:'/pages/index/forumList'
				})
			},
			/* 选择城市 */
			choiceCity() {
				uni.navigateTo({
					url: '/pages/index/change_city?type='+"local"
				})
			}
		}
	
	}
</script>

<style lang="scss" scoped>
	.pt-re{
		padding-bottom: 230rpx !important;
	}
	.localImg {
		width: 48upx;
		// height: 48upx;
		height: 48upx;
	}

	.input-row {
		position: absolute;
		display: grid;
		grid-template-columns: 1fr 100upx;
		grid-column-gap: 0upx;
		z-index: 999;
		width: 100%;
		padding: 0 15rpx 0 10rpx;
		top: 150upx;
		
		.top-input{
			// width: 605upx;
			width: 605rpx;
		}

		text {
			color: #fff;
			font-size: 26rpx;
			white-space:nowrap;
		}
	}

	.bgc-Img2 {
		width: 180rpx;
		height: 180rpx;
		position: absolute;
		right: 0rpx;
		top: 50%;
		transform: translateY(-50%);
		z-index: 99;
	}

	.bgc-Img1 {
		position: absolute;
		left: 50%;
		top: 0rpx;
		width: 500rpx;
		height: 500rpx;
		z-index: 99;
		transform: translateX(-50%);
	}

	.bg-box {}


	.swiImg {
		position: absolute;
		top:230rpx;
		bottom: 0rpx;
		z-index: 99;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		border-radius: 0rpx;

		// image {
		// 	width: 100%;
		// 	height: 370rpx;
		// 	border-radius: 20rpx;
		// }
	}

	.current {
		padding-bottom: 200rpx;
		overflow: hidden;
	}

	.arcbottom {
		width: 200vw;
		position: relative;
		height: 350rpx;
		background-color: $common-color;
		border-bottom-left-radius:400rpx;
		border-bottom-right-radius: 400rpx;
		left: 50%;
		transform: translateX(-50%);
	}
	
	 .indicator {
	        @include flex(row);
	        justify-content: center;
	
	        &__dot {
	             height: 6px;
	             width: 6px;
	             border-radius: 100px;
	             background-color: rgba(255, 255, 255, 0.35);
	             margin: 0 5px;
	             transition: background-color 0.3s;
	    
	            &--active {
	                 background-color: #ffffff;
	             }
	        }
	    }
	
</style>
