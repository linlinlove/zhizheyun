<template>
	<view class="content">
		<topCard ref="topCard" :list="data.banner" :city="city"></topCard>
		<protocol ref="protocol" :showPro="showPro"></protocol>
		<indexIconTitle></indexIconTitle>
		<live :list="data.live"></live>
		<hotProject ref="hotProject" :list="data.hot"></hotProject>
		<hotJob ref="hotJob"></hotJob>
		<community ref="community"></community>
		<u-back-top :scroll-top="scrollTop" top="600" icon="arrow-up"  :customStyle="customStyle"></u-back-top>
	</view>
</template>

<script>
	import {
		indexBanner
	} from '@/request/api.js'
	import indexIconTitle from '@/components/index/indexIconTitle.vue'
	import live from '@/components/index/live.vue'
	import hotProject from '@/components/index/hotProject.vue'
	import hotJob from '@/components/index/hotJob.vue'
	import community from '@/components/index/community.vue'
	import topCard from '@/components/index/topCard.vue'
	import protocol from '@/components/index/protocol.vue'
	export default {
		components: {
			indexIconTitle,
			live,
			hotProject,
			hotJob,
			community,
			topCard,
			protocol
		},
		data() {
			return {
				data: null,
				city: '成都',
				showPro: false,
				scrollTop:0,
				customStyle: {
					width: '50rpx',
					// fontSize: '20rpx',
					color: '#2979ff'
				},
			}
		},
		onPageScroll(e) {
				this.scrollTop = e.scrollTop;
				// if(this.scrollTop > 10)
				setTimeout(r=>{
					this.scrollTop = 0;
				},3000);
		},
		onLoad() {
			this.getLiveAndBanner()
			this.hotProjectFn()
			uni.$on('setCity', e => {
				// console.log(e,'选择城市的信息');
				this.city = e.name
			})
			uni.$on('answer', e => { //
				this.fresh()
			})
			uni.$on('argree', e => { //
				let data = {
					key: true
				}
				// uni.setStorageSync('protocol', data)
				this.showPro = false

			})
		},
		onReady(){
			let pro = uni.getStorageSync('protocol')
				if (pro) {
					this.showPro = false;
				} else {
					this.showPro = true
				}
			console.log(pro, '用户协议')
		},
		onShow() {
			
		},
		methods: {
			/* 首页直播及banner */
			getLiveAndBanner() {
				indexBanner().then(res => {
					this.data = res.data
					console.log(this.data)
				})
			},
			/* 热门职位 */
			async hotProjectFn() {
				await this.$refs.hotJob.indexHotPoptypeFn()
				await this.$refs.hotJob.indexHotpositionFn()
				await this.$refs.community.getforumList()
			},
			fresh() {
				this.$refs.hotJob.indexHotPoptypeFn()
				this.$refs.hotJob.indexHotpositionFn()
				this.$refs.community.getforumList('fresh')
				this.getLiveAndBanner()
				setTimeout(function() {
					uni.stopPullDownRefresh();
				}, 1000);
			}
		},
		onReachBottom() {
			this.$refs.community.reachBottom()
		},
		onPullDownRefresh() {
			this.fresh()
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
