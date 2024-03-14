<template>
	<view class="head-line pt-re index-box box-border vw-100">
		<moduleHead :title="'直播课程'" :iconUrl="'/static/icon/index/index_icon7.png'" :isMoreBtn='true'
			@getMore='getMore'></moduleHead>
		<view class="live-list grid box-border">
			<view class="live-box f-column pt-re" @tap="navLiveHome(i.roomid)" v-for="(i,k) in list" :key='k'>
				<!-- status 0  未开始  1直播中 -1已结束 -->
				<view class="pt-ab f-row ai-c" v-if="i.local_live_status==1">
					<image src="/static/icon/index/image6.png" mode=""></image>
					<text> 直播中</text>
				</view>
				<view class="live-img ">
					<image :src="i.coverImg" alt="" mode=""></image>
				</view>
				<view class="live-tro  grid jc-sb mt-1  ai-c">
					<view class="live-tro-left    one-worp">
						{{i.name}}
					</view>
					<view class="live-tro-right  one-worp">
						{{i.anchor_name}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import moduleHead from '@/components/common/moduleHead.vue'
	export default {
		components: {
			moduleHead
		},
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		methods: {
			//直播间跳转
			navLiveHome(id) {
				wx.navigateTo({
					url: `plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=${id}`
				})
			},
			getMore() {
				uni.navigateTo({
					url: '/pages/index/more_courses'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pt-ab {
		width: 130upx;
		height: 50upx;
		left: 0upx;
		top: 50upx;
		border-radius: 0 25upx 25upx 0;
		z-index: 9;
		background: linear-gradient(270deg, #F8A470 0%, #F3DDA2 100%);
		image{
			width: 26upx;
			height: 26upx;
			margin-left: 10upx;
			margin-right: 10upx;
		}
		font-style: normal;
		font-size: 24upx;
		color: #FFFFFF;
	}

	.live-img {
		border-radius: 16upx;
		overflow: hidden;

		image {
			width: 100%;
			height: 236upx;
		}
	}

	.live-tro {
		grid-template-columns: 250upx 1fr;
		grid-column-gap: 20upx;

		.live-tro-left {}

		.live-tro-right {
			font-size: 24rpx;
		}
	}



	.live-list {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 22upx;

	}
</style>
