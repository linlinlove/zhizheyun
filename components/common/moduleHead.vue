<template>
	<view class="moduleHead f-row  index-box1 jc-sb ai-c mt-3 mb-2">
		<view class="left-title  f-row  ai-c">
			<image :src="iconUrl" mode=""></image>
			<text>{{title}}</text>
		</view>
		<view class="right-more  f-row  ai-c" v-if="isMoreBtn" @tap="jumpMore()">
			<text>更多</text>
			<i class='jiantou ml-1'></i>
		</view>
		<view class="right-title  f-row  ai-c" @tap="rightBtn()" v-else>
			{{rightTitle}}
		</view>
	</view>
</template>

<script setup>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			rightTitle: {
				type: String,
				default: ''
			},
			iconUrl: {
				type: String,
				default: ''
			},
			isMoreBtn: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			jumpMore() {
				this.$emit('getMore')
			},
			rightBtn() {
				this.$emit('rightBtnFn')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.right-title {
		font-size: 28upx;
		color: $common-color;
	}
	.index-box1{
		padding: 0 20rpx 0 0;
	}
	.left-title {
		image {
			// width: 28upx;
			// height: 32upx;
			width: 48upx;
			height: 48upx;
			// margin-right: 16upx;
			margin-right: 6upx;

		}

		text {
			font-size: 28upx;
			font-weight: bold;
			color: #000;
		}
	}

	.right-more {
		text {
			font-size: 24upx;
			color: #BABABA;
		}


	}
</style>
