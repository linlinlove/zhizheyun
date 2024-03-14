<template>
	<view class="top-logoImg box-border">
		<image :src="imgSrc" mode="aspectFill"></image>
	</view>
</template>

<script>
	export default {
		props: ['imgSrc']
	}
</script>

<style lang="scss" scoped>
	.top-logoImg {
		width: 100vw;
		height: 340upx;

		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
