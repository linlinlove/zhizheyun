<template>
	<view class="current box-border pt-re p-3">
		<view class="head-list mb-2">
			<view class="head-list-left f-row ai-c u-tags">
				<!-- <view @tap="tapTab(i.id)" :class="['title-item','pt-re',tabIndex==i.id?'active':'']"
					v-for="i in headData" :key="i.id">
					{{i.position}}
				</view> -->
				<view class="all">
					 <u-tag text="全部"  size="mini"  :plain="allData" @click="clickAll"></u-tag>
				</view>
					<u-tag :text="i.position"  :plain='tabIndex==i.id&&!selectAll?false:true'  v-for="i in headData" :key="i.id" size="mini"
					  @click="tapTab(i.id)"
					 :closable="!i.notdel"  @close="del(i.id)"></u-tag>
			</view>
			<view class="head-list-right f-row ai-c" @tap="addFn()">
				+
			</view>
		</view>
		<postCard :list='list' @tapCard='tapCard'></postCard>
		<view class="noMore" v-if="last_page==page&&list.length!=0">
			数据加载完成...
		</view>
		<view></view>
		<u-empty text="数据是空的哦~~" mode="list" v-if="list.length==0" margin-top='50'></u-empty>
	</view>
</template>

<script>
	import {
		expectName,
		expectlist,
		delexpect,
		serachPositionList
	} from '@/request/api.js'
	import postCard from '@/components/common/postCrad.vue'
	export default {
		components: {
			postCard
		},
		data() {
			return {
				tabIndex: null,
				headData: [],
				list: [],
				last_page: null,
				page: 1,
				city:'成都市',
				allData:false,//默认是悬空的样式
				selectAll:true //默认选择了所有
			}
		},
		created() {
			uni.$on('addPost',val=>{
				this.getTab()
			})
			this.getAllData()
		},
		methods: {
			clickAll(){
				this.page = 1
				this.list = []
				this.selectAll = true //是选择所有
				this.allData = false;//所有的不为悬空状态
				this.getAllData()
			},
		    changeCity(e){
				// console.log(e)
				let city =  String(e).indexOf('市')==-1?e+'市':e
				// console.log(city)
				this.page= 1
				this.city = city
				this.list = []
				this.getAllData()
			},
			getAllData(){
				serachPositionList({page: this.page,city:this.city}).then(res=>{
					console.log(res)
					if(res.msg == '成功'){
						this.last_page = res.data.last_page
						this.list = this.list.concat(res.data.data)
					}
				})
			},
				/* 刪除標簽 */
			del(id){
				delexpect({
					id
				}).then(res=>{
					if(res.code==1){
						
						uni.$u.toast('删除成功！')
						setTimeout(()=>{
							this.getTab()
						},1500)
					}else{
						uni.$u.toast('删除失败，请重试！')
					}
				})
			},
			/* 跳转 */
			tapCard(id) {
				let obj={
					id,
					type:1
				}
				uni.navigateTo({
					url: '/pages/position/job_detail?e=' + JSON.stringify(obj)
				})
			},
			/* 点击tab */
			tapTab(id) {
				this.page = 1
				this.list = []
				this.tabIndex = id
				this.selectAll = false //不是选择所有
				this.allData = true;//所有的为悬空状态
				this.getList()
			},
			/* 点击新增 */
			addFn() {
				uni.navigateTo({
					url: '/pages/position/add_post'
				})
			},
			/* 获取tab */
			getTab() {
				expectName().then(res => {
					this.headData = res.data
					this.headData.unshift({
						// 这个ID需要改成数据库存在的ID
						id:999,
						notdel:true,
						position:"推荐岗位"
					})
					this.tabIndex = this.headData[0].id
					//this.getList()
				})
			},
			/* 获取列表 */
			getList(arg) {
				if(arg == 'fresh'){
					this.page = 1
					this.list = []
					if(this.selectAll){
						this.getAllData()
						return false;
					}
				}
				expectlist({
					id: this.tabIndex,
					page: this.page
				}).then(res => {
					this.last_page = res.data.last_page
					this.list = this.list.concat(res.data.data)
					// console.log(this.list)
				})
			},
			reachBottom(){
				console.log('reachBottom')
				if (this.page < this.last_page) {
					this.page = this.page + 1
					if(this.selectAll){//选择所有的时候
						this.getAllData()
						return ;
					}
					this.getList()
				}
			},
		},
		onReachBottom() {
			if (this.page < this.last_page) {
				this.page = this.page + 1
				this.getList()
			}
		},
		// onPullDownRefresh() {
		// 	this.page = 1
		// 	if(this.selectAll){//选择所有的时候
		// 		this.getAllData()
		// 		setTimeout(function () {
		// 		uni.stopPullDownRefresh();
		// 			}, 1000);
		// 		return false;
		// 	}else{
		// 		this.getList()
		// 		setTimeout(function () {
		// 		uni.stopPullDownRefresh();
		// 			}, 1000);
		// 	}
			
		// }
	}
</script>

<style lang="scss" scoped>
	.title-item {
		color: $title-color;
		text-align: center;
		min-width: 70upx;
		margin-right: 50upx;
	}

 .u-tags {
    align-items: flex-end !important;
	.all{
		margin-right: 20px;
	}
 }
	.active {
		color: $common-color !important;
	}
	.noMore{
		text-align: center;
		color: #797575;
		margin-top: 20rpx;
	}
	.active::after {
		content: '';
		position: absolute;
		bottom: -10upx;
		left: 50%;
		transform: translateX(-50%);
		width: 70upx;
		height: 2upx;
		background-color: $common-color;
	}


	.head-list-left {
		font-size: 28upx;
		display: flex;
		flex-wrap: wrap;
	}

	.head-list-right {
		color: $title-color;
		font-size: 48upx
	}

	.head-list {
		display: grid;
		grid-template-columns: 1fr 50upx;
	}

	.current {
		top: -40upx;
		border-radius: 40upx 40upx 0 0;
		z-index: 99;
		background-color: #fff;
		}
	
</style>
