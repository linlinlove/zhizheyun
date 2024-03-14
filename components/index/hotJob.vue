<template>
	<view class="head-line pt-re index-box box-border vw-100">
		<moduleHead :title="'热门职位/热门实训'"  :iconUrl="'/static/icon/index/index_icon9.png'" :isMoreBtn="false"></moduleHead>
		
		<view class="box-scroll">
			<scroll-view :scroll-into-view="toView" class="scroll" scroll-x="true" :scroll-with-animation="true">
				<view @tap="tapTitle(i.id)" :class="['scroll-item','mr-3',currentTab==i.id?'active':'']" :id="'tab'+i.id"
					v-for="i in titleList" :key="i.id">
					{{i.name.length>15?i.name.slice(0,15)+'...':i.name}}
				</view>
			</scroll-view>
		</view>
		
		<view class="card box-border f-column jc-sb  mb-2" v-for="(i,k) in cardList" :key="k" @tap="wordDetail(i.id)">
			<view class="f-row jc-sb">
				<view class="position">
					{{i.name}}
				</view>
				<view class="price">
					{{i.money}}
				</view>
			</view>
			<view class="company">
				{{i.enterprise_name}}
			</view>
		</view>
		<view class="noMore" v-if="cardList.length==0">
			<text>该分类没有热门职位</text>
		</view>
	</view>
</template>

<script>
	import moduleHead from '@/components/common/moduleHead.vue'
	import {
		indexHotPoptype,
		indexHotposition
	} from '@/request/api.js'
	export default {
		components: {
			moduleHead
		},
		data() {
			return {
				cardList: [],
				titleList: [],
				currentTab: null,
				toView: null
			}
		},
		watch: {
			currentTab() {
				this.indexHotpositionFn()
			}
		},
		methods: {
			/* 分类 */
			indexHotPoptypeFn() {
				indexHotPoptype().then(res => {
					this.titleList = res.data
					this.currentTab = this.titleList[0].id
					this.toView = 'tab' + this.titleList[0].id
				})
			},
			/* 列表 */
			indexHotpositionFn() {
				indexHotposition({
					popular_type_id: this.currentTab
				}).then(res => {
					this.cardList = res.data.slice(0,4)
				})
			},
			tapTitle(id) {
				this.currentTab = id
				this.toView = 'tab' + id
			},
			/* 详情 */
			wordDetail(id) {
				uni.navigateTo({
					url: '/pages/position/job_detail?id=' + id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hot-job {}
	.noMore{
		text-align: center;
		color: #797575;
		margin-top: 20rpx;
	}
	/* #ifdef MP-WEIXIN || APP-PLUS */
	uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}

	/* #endif */
	.card {
		height: 150upx;
		border-radius: 16upx;
		box-shadow: 0upx 0upx 12upx rgba(0, 0, 0, 0.1);
		padding: 20upx 30upx;
		font-size: 28upx;

	}

	.position {}

	.price {
		color: $common-color;
	}

	.company {
		color: $title-color;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.box-scroll{
		width: 100%;
	}

	.scroll {
		padding: 0 2rpx;
		white-space: nowrap;
		margin-bottom: 20upx;
	}

	.active {
		color: $common-color !important;
	}

	.scroll-item {
		color: $title-color;
		font-size: 24upx;
		display: inline-block;
	}
</style>
