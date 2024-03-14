<template>
	<view class="grid box-border vw-100">
		<view class="" v-for="(i,k) in list" :key="k" @tap.stop="Jump(i)">
			<image :src="i.imgUrl" mode=""></image>
			<text>{{i.text}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						imgUrl: "/static/icon/index/sxqz.png",
						text: '实训求职',
						url: '/pages/position/position',
						type: 1
					},
					{
						imgUrl: "/static/icon/index/jydz.png",
						text: '就业定制',
						url: '/pages/customized/customized',
						type: 1
					},
					{
						imgUrl: "/static/icon/index/cxcy.png",
						text: '创新创业',
						url: '/resume_pages/entrepreneurship/entrepreneurship',
					},
					{
						imgUrl: "/static/icon/index/cykc.png",
						text: '产业课程',
						url: '/pages/index/industry_courses',
					},
					{
						imgUrl: "/static/icon/index/wdsl.png",
						text: '我的实录',
						url: '/resume_pages/cecord/cecord'
					},
					{
						imgUrl: "/static/icon/index/jxgy.png",
						text: '践行公益',
						url: '/resume_pages/practicewelfare/practicewelfare'
					}
				]
			}
		},
		methods: {
			Jump(el) {
				if (el.type) {
					uni.switchTab({
						url: el.url
					})
				} else {
					uni.navigateTo({
						url: el.url
					})
				}

			}
		}
	}
</script>

<style lang="scss" scoped>
	.grid {
		width: 100vw;
		grid-template-columns: 1fr 1fr 1fr;
		grid-row-gap: 40upx;
		padding: 30rpx 0 30rpx 0;
		grid-template-rows: 96upx 96upx;
		border-radius: 0 0 30rpx 30rpx !important;
		image {
			width: 44upx;
			height: 44upx;
		}

		text {
			color: #000;
			font-size: 28upx;
			// font-weight: bold;
		}

		view {
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
