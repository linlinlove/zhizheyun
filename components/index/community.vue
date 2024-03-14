<template>
	<view class="head-line pt-re  index-box box-border vw-100">
		<moduleHead :title="title"  :iconUrl="'/static/icon/index/index_icon10.png'" :isMoreBtn="false" :rightTitle='rightTitle' @rightBtnFn='rightBtnFn'></moduleHead>
		
		<view class="card pt-re mb-2" v-for="(i,k) in list" :key="k">
			<view class="describe" @tap="jumpDetail(i.id)">
				{{i.substance}}
			</view>
			<view class="answer pt-ab" @tap="jumpDetail(i.id)">
				查看
			</view>
		</view>
		
		<view class="noMore" v-if="last_page==page">
			<text>到底了...</text>
		</view>
	</view>
</template>

<script>
	import {
		forumList
	} from '@/request/api.js'
	import moduleHead from '@/components/common/moduleHead.vue'
	export default {
		components: {
			moduleHead
		},
		data() {
			return {
				title: "职者社区",
				rightTitle: "提问",
				page: 1,
				list: [],
				last_page: 1
			}
		},
		methods: {
			getforumList(arg) {
				if(arg=="fresh"){
					this.page=1;
					this.list = []
				}
				//获取数据
				forumList({
					page: this.page,
					name:''
				}).then(res => {
					this.last_page = res.data.last_page
					this.list = this.list.concat(res.data.data)
				})
			},
			rightBtnFn() {
				uni.navigateTo({
					url: '/pages/index/put_questions'
				})
			},
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
			reachBottom(){
				if (this.page < this.last_page) {
					this.page = this.page + 1
					this.pagingFn(this.page, this.last_page, this.getforumList())
				}
			},
		},
		// onReachBottom() {
		// 	this.pagingFn(this.page, this.last_page, this.getforumList())
		// }
	}
</script>

<style lang="scss" scoped>
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
	.noMore{
		text-align: center;
		color: #797575;
		margin-top: 20rpx;
	}
</style>
