<template>
	<view class="pt-re"  @click="serachIcon">
		<input @tap="tapDisableInput()" :class="[bgcolor=='#fff'?'':'grey-bgcolor']" :disabled="isDisabled"
			:placeholder="placeholder" :value="serachValue" @change='changeSerachValue' placeholder-style="font-size:26rpx">
		<image class="serach" src="/static/icon/index/serach.png" mode=""></image>
	</view>
</template>

<script setup>
	export default {
		props: {
			isDisabled: {
				type: Boolean,
				default: false
			},
			placeholder: {
				type: String,
				default: ''
			},
			serachValue: {
				type: String,
				default: ''
			},
			bgcolor: {
				type: String,
				default: "#fff"
			}
		},
		methods: {
			/* 输入框值改变 */
			changeSerachValue(e) {
				this.$emit('serachValueFn', e.target.value)
			},
			/* 点击输入框 */
			tapDisableInput() {
				this.$emit('tapSerach')
			},
			/* 点击搜索按钮 */
			serachIcon() {
				this.$emit('tapSerachIcon')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.grey-bgcolor {
		background-color: #F5F5F5 !important;
		color: rgba(186, 186, 186, 1) !important;
	}

	.serach {
		position: absolute;
		right: 30upx;
		width: 28upx;
		height: 28upx;
		top: 50%;
		transform: translateY(-50%);
	}

	input {
		height: 45upx;
		padding: 14upx 80upx 14upx 40upx;
		background-color: #fff;
		border-radius: 34upx;
	}

	input::-webkit-input-placeholder {
		/* WebKit browsers */

		color: $title-color;
		font-size: 24upx
	}
</style>
