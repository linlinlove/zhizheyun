<template>
	<view class="serach-parent pb-3">
		<u-search :showAction="true" actionText="搜索" :clearabled="false"  @custom='custom' @search="custom"></u-search>
		<!-- 站位 -->
		<view style="width: 100vw;height: 50upx;">
		</view>
		<postCard :list='list' @tapCard='tapCard'></postCard>
		<view class="noMore" v-if="cardList.length==0">
			<text>数据加载完成</text>
		</view>
		<u-empty text="暂无列表哦~~" mode="list" v-if="list.length==0" margin-top='50'></u-empty>
	</view>
</template>

<script>
	import {
		serachPositionList
	} from '@/request/api.js'
	import postCard from '@/components/common/postCrad.vue'
	export default {
		components: {
			postCard
		},
		data(){
			return{
				list:[],
				page:1,
				name:'',
				last_page:1
			}
		},
		methods:{
			getListFn(){
				serachPositionList({
					name:this.name,
					page:this.page
				}).then(res=>{
					this.last_page=res.data.last_page
					this.list=this.list.concat(res.data.data)
				})
			},
			custom(e){
				this.name=e
				this.page=1
				this.list=[]
				this.getListFn()
			},
			tapCard(e){
				let obj={
					id: e,
					type:1
				}
				uni.navigateTo({
					url:'/pages/position/job_detail?e=' + JSON.stringify(obj)
				})
				console.log(e);
			}
		},
		onReachBottom() {
			if(this.page<this.last_page){
				this.page=this.page+1
				this.getListFn()
			}
		}

	}
</script>

<style scoped>
	.serach-parent {
		background-color: $common-color;
		padding: 30upx 20upx 80upx;
	}
	.noMore{
		text-align: center;
		color: #797575;
		margin-top: 20rpx;
	}
</style>
