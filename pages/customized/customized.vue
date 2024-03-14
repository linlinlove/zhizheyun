<template>
	<view class="">
		<imageShow :imgSrc="imgSrc" mode="widthFix"></imageShow>
		<u-tabs :list="table" :scrollable='false' @click="selectTab"  bg-color="#F5F5F5"></u-tabs>
		<view class="p-3">
			<postCard :show-baoming="true" :list='list' @tapCard='tapCard'></postCard>
		</view>
	</view>
</template>

<script>
	import {employment ,getconfig} from '@/request/api.js'
	import imageShow from '@/components/common/imageShow.vue'
	import postCard from '@/components/common/postCrad.vue'
	export default {
		components: {
			imageShow,
			postCard
		},
		data() {
			return {
				tabIndex: 0,
				table: [{
					name: '职前教育'
				}, {
					name: '岗位推荐'
				}],
				list: [],
				imgSrc:'',
				page:1,
				last_page:1
			}
		},
		onLoad() {
			this.getData()
			this.getBanner()
		},
		onPullDownRefresh() {
				console.log('下拉刷新')
				this.page = 1
				this.getData()
				setTimeout(function () {
					uni.stopPullDownRefresh();
				}, 1000);
		},
		methods: {
			getData(){
				employment({
					page:this.page,
					type_data:this.tabIndex==0?0:2,//类型:0=职前教育,2=岗位推荐
				}).then(res=>{
					this.last_page=res.data.last_page
					this.list=this.list.concat(res.data.data)
				})
			},
			getBanner(){
				getconfig({
					
				}).then(res=>{
					console.log(res)
					if(res.msg == '成功'){
						this.imgSrc = res.data.employment_image
					}
				})
			},
			tapCard(id) {
				uni.navigateTo({
					url: '/pages/customized/job_details?id='+id
				})
			},
			selectTab(e) {
				this.page=1
				this.list=[]
				this.tabIndex = e.index
				this.getData()
			}
		},
		onReachBottom() {
			if(this.page<this.last_page){
				this.page=this.page+1
				this.getData()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.active::after {
		content: '';
		position: absolute;
		width: 70upx;
		height: 2upx;
		background-color: $common-color;
		left: 50%;
		transform: translateX(-50%);
		bottom: -10upx;
	}
</style>
