<template>
	<view class="vh-100 vw-100 current box-border pt-re">
		<image class="img3" src="../../static/loadPage/img3.png" mode=""></image>
		<image class="img4" src="../../static/loadPage/img4.png" mode=""></image>
		<image class="img5" src="../../static/loadPage/img5.png" mode=""></image>
		<image class="img1" src="../../static/loadPage/img1.png" mode=""></image>
	</view>
</template>

<script>
	export default {
		onLoad() {
			setTimeout(() => {
				uni.switchTab({
					url: '/pages/index/index'
				})
			}, 3000)
		}
	}
</script>

<style lang="scss" scoped>
	.current {
		background: #fff;
	}

	.img3 {
		width: 360upx;
		height: 84upx;
		position: absolute;
		top: 20%;
		left: 120upx;
	}

	.img4 {
		width: 288upx;
		height: 84upx;
		position: absolute;
		top: 25%;
		right: 120upx;
	}

	.img5 {
		position: absolute;
		width: 500rpx;
		height: 450rpx;
		left: 120rpx;
		top: 35%;
	}

	.img1 {
		position: absolute;
		width: 250upx;
		height: 100upx;
		bottom: 2%;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
