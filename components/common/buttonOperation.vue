<template>
	<view class="box-border btn p-3">
		<view :class="['btn-body',isEmptyBtn?'btn-empty':'']" @tap="btnFn()">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {

		props: {
			isEmptyBtn: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			btnFn() {
				this.$emit('tapBtn')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btn {
		width: 100%;
		padding-bottom: 0;
		z-index: 999;
	}

	.btn-body {
		background: $common-color;
		border-radius: 20upx;
		height: 84upx;
		line-height: 84upx;
		text-align: center;
		z-index: 99;
		font-size: 28upx;
		color: #FFFFFF;
	}

	.btn-empty {
		background-color: #FFFFFF;
		border: 2upx solid $common-color;
		color: $common-color;
	}
</style>
