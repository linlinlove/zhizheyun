<template>
	<view class="">
		<u-tabs :list="table" :scrollable='false' :current='tabIndex' @change="selectTab"></u-tabs>
		<view class="plr-2" v-if="tabIndex==0">
			<postCard :list='list' :type='1'></postCard>
		</view>
		<hasInterview :list='list' @curretnTap='curretnTap' v-else></hasInterview>
		<view class="" style="width: 1%;height: 150upx;">
			<!-- 占位符 -->
		</view>
		<u-empty
		        mode="history"
				text='暂时没有记录哦!'
				v-if="list.length==0"
		>
		</u-empty>
		</u-empty>
	</view>
</template>

<script>
	import {
		interviewList
	} from '@/request/api.js'
	import hasInterview from '@/resume_pages/components/hasInterview.vue'
	import postCard from '@/components/common/postCrad.vue'
	export default {
		components: {
			hasInterview,
			postCard
		},
		data() {
			return {
				table: [{
					name: '沟通过',
				}, {
					name: '面试过',
				}],
				tabIndex: 0,
				list: [],
				last_page: 1,
				page: 1
			}
		},
		onLoad() {
			this.hasInterview()
		},
		methods: {
			getNewArr(arr) {
				arr.forEach(item => {
					if (this.list.length == 0) {
						let arr_ = []
						arr_.push(item)
						let obj = {
							time: item.createtime_text,
							list: arr_
						}
						this.list.push(obj)
					} else {
						this.list.forEach(res => {
							if (res.time && res.time == item.createtime_text) {
								res.list.push(item)
							} else {
								let obj = {
									time: item.createtime_text,
									list: [...item]
								}
								this.list.push(obj)
							}
						})
					}
				});
			},
			/*  */
			hasInterview() {
				interviewList({
					page: this.page,
					type_data: this.tabIndex//0沟通过 1面试过
				}).then(res => {
					this.last_page = res.data.last_page
					if(this.tabIndex==1){
						this.getNewArr(res.data.data)
					}else{
						this.list=this.list.concat(res.data.data)
					}
				})
			},
			/* 顶部table点击事件 */
			selectTab(e) {
				this.last_page = 1
				this.page = 1
				this.list = []
				this.tabIndex = e.index
				this.hasInterview()
			},
			/* 面试过 */
			curretnTap(e) {
				uni.navigateTo({
					url: '/pages/news/interview_details?id=' + e
				})
			}
		},
		onReachBottom() {
			if(this.page<this.last_page){
				this.hasInterview()
			}
		}
	}
</script>
