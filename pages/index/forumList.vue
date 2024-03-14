<template>
	<!-- 搜索社区列表 -->
	<view class="serach-parent pb-3">
		<u-search actionText="搜索" :clearabled="false"  @custom='custom'></u-search>
		<!-- 站位 -->
		<view style="width: 100vw;height: 50upx;">
		</view>
		<view class="card pt-re mb-2" v-for="(i,k) in list" :key="k">
			<view class="describe" @tap="jumpDetail(i.id)">
				{{i.substance}}
			</view>
			<view class="answer pt-ab" @tap="jumpDetail(i.id)">
				查看
			</view>
		</view>
		<!-- <postCard :list='list' @tapCard='tapCard'></postCard> -->
		<u-empty text="暂无列表哦~~" mode="list" v-if="list.length==0" margin-top='50'></u-empty>
	</view>
</template>

<script>
	import {
		forumList
	} from '@/request/api.js'
	import postCard from '@/components/common/postCrad.vue'
	export default {
		components: {
			postCard
		},
		data() {
			return {
				list: [],
				page: 1,
				name: '',
				last_page: 1
			}
		},
		methods: {
			answeringFn(id) {
				uni.navigateTo({
					url: '/pages/index/question_answering?id=' + id
				})
			},
			jumpDetail(id) {
				uni.navigateTo({
					url: '/pages/index/forum_detail?id=' + id
				})
			},
			getListFn() {
				forumList({
					name: this.name,
					page: this.page
				}).then(res => {
					this.last_page = res.data.last_page
					this.list = this.list.concat(res.data.data)
				})
			},
			custom(e) {
				this.name = e
				this.page = 1
				this.list = []
				this.getListFn()
			},
			tapCard(e) {
				console.log(e);
			}
		},
		onReachBottom() {
			if (this.page < this.last_page) {
				this.getListFn()
			}
		}

	}
</script>

<style scoped lang="scss">
	.serach-parent {
		/* background-color: $common-color; */
		padding: 30upx 20upx 80upx;
	}
	.card {
		border-radius: 16upx;
		box-shadow: 0upx 0upx 12upx rgba(0, 0, 0, 0.1);
		padding: 20upx 30upx 60upx;
		font-size: 28upx;
	
		.describe {
			color: #4D4D4D;
			text-overflow: ellipsis;
			overflow: hidden; //溢出内容隐藏
			text-overflow: ellipsis; //文本溢出部分用省略号表示
			display: -webkit-box; //特别显示模式
			-webkit-line-clamp: 3; //行数
			line-clamp: 3;
			-webkit-box-orient: vertical; //盒子中内容竖直排列
		}
	
		.answer {
			font-size: 28upx;
			color: $common-color;
			right: 20upx;
			bottom: 20upx;
		}
	
	}
</style>
