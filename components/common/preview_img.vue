<template>
	<view class="preview_img">
		<image :src="i" mode="" v-for="(i,k) in imgs" @tap="preImgs(k)"></image>
	</view>
</template>

<script>
	export default{
		props:{
			imgs:{
				type:Array,
				default:[]
			}
		},
		methods:{
			preImgs(k){
				uni.previewImage({
					urls:this.imgs,
					current:k
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.preview_img{
		box-sizing: border-box;
		width: 100%;
		padding: 20upx 0;
		image{
			width: 150upx;
			height: 150upx;
			margin-right: 32upx;
			border-radius: 5upx;
		}
	}
</style>