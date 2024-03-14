<template>
	<view class="news-head box-border f-row jc-sb ai-c">
		<!-- <view class="head-left">
			<view :class="['left-item',i.id==tabIndex?'active':'']" @tap="choiceTab(i.id)" v-for="i in tabTitle"
				:key="i.id">
				{{i.name}}
			</view>
		</view> -->
		<view class="">
			
		</view>
		<u-search v-if="showSerachIpt" 
		@search='serachFn'
		:clearabled="false"
		actionText="取消" 
		:actionStyle="{
			'color':'#fff'
		}"
		:animation="true" @custom='custom'></u-search>
		<view class="head-right" v-else>
			<image src="/static/icon/news/serach.png" mode="" @tap="showSerachIpt=!showSerachIpt"></image>
			<image src="/static/icon/news/news.png" mode="" @tap="showNewsFn()"></image>
		</view>
	</view>
</template>

<script setup>
	export default {
		data() {
			return {
				showSerachIpt:false,
				tabIndex: 1,
				tabTitle : [{
					id: 1,
					name: '全部'
				}, {
					id: 2,
					name: '沟通中'
				}, {
					id: 3,
					name: '未读'
				}]
			}
		},
		methods: {
			choiceTab(id) {
				this.tabIndex = id
			},
			serachFn(e){
				uni.$emit('clickSerach',e)
			},
			custom(){
				this.showSerachIpt=!this.showSerachIpt
				uni.$emit('clickCancel')
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.news-head {
		background-color: $common-color;
		padding: 20upx 30upx 60upx;
	}

	.left-item {
		font-size: 28upx;
		line-height: 40upx;
		color: #BABABA;
		text-align: center;
		padding-bottom: 10upx;
	}

	.head-left {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 48upx;
	}

	.active {
		color: #fff;
		border-bottom: 2upx solid #fff;
	}

	.head-right {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 40upx;
	}

	.head-right>image {
		width: 28upx;
		height: 28upx;
	}
</style>
