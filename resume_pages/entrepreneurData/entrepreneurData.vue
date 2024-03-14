<template>
	<view class="ship">
		{{showMsg}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showMsg: ''
			};
		},
		onLoad(res) {
			if (res.type == 'entrepreneurData') {
				this.showMsg = '大数据维护中......'
				uni.setNavigationBarTitle({
					title: '创新创业智能匹配'
				})
			}else{
				this.showMsg = '在线预览完善中，敬请期待，请到“我的-求职发布中进行预览” ！'
				uni.setNavigationBarTitle({
					title: '在线预览'
				})
			}
		}
	}
</script>

<style lang="scss">
	.ship {
		padding: 20rpx;
	}
</style>
