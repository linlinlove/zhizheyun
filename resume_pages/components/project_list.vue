<template>
	<view class="box-border plr-3 pages">
		<view class="list_title flex-r-b-c">
			<view class="list_title_l">周期查看</view>
			<view class="screen_btn" @tap="screen">筛选</view>
		</view>
		<view class="time flex-r-a-c">
			<!-- 开始时间 -->
			<view class="startTime time_item flex-r-a-c" @tap="startTimeShow = true">
				<view class="year">{{startTimeYear}}年</view>
				<view style="width: 1px; height: 58rpx; background-color: #E2E2E2;"></view>
				<view class="month flex-r-c-c">
					<view class="">{{startTimeMonth}}月</view>
				</view>
			</view>
			<!-- 分割线 -->
			<view style="font-size: 40rpx; color: #BABABA">-</view>
			<!-- 结束时间 -->
			<view class="endTiem time_item flex-r-a-c" @tap="endTiemShow = true">
				<view class="year">{{endTiemYear}}年</view>
				<view style="width: 1px; height: 58rpx; background-color: #E2E2E2;"></view>
				<view class="month flex-r-c-c">
					<view class="">{{endTiemMonth}}月</view>

				</view>
			</view>
		</view>

		<view class="card_list" v-for="i in list" :key="i.id">
			<view class="top f-row cart-top" @click="goDetail(i.id)">
				<view class="top_left">
					<view class="top_left_name">
						{{i.name.length>20?i.name.slice(0,20)+'...':i.name}}
					</view>
					<view class="top_left_status">
						{{i.status==0?'待审核':i.status==1?'审核成功':'审核驳回'}}
					</view>
					<view class="top_right" >
						{{i.createtime_text}}
					</view>
				</view>
				<view class="centent">
					<view class="p_name">
						项目概述
					</view>
					<view class="mani_centent">
						{{i.summary||''}}
					</view>
				</view>
			</view>
		</view>
		<view class="noMore" v-if="last_page==page">
			数据加载完成...
		</view>
		<view class="" style="width: 1%;height: 150upx;">
			<!-- 占位符 -->
		</view>
		<u-empty
		        mode="list"
				text='项目列表为空'
				v-if="list.length==0"
		>
		</u-empty>
		<u-datetime-picker :formatter="formatter" ref="datetimePicker" @confirm='startConfirm' :show="startTimeShow"
			v-model="startTimeValue" mode="year-month" @cancel='startTimeShow=false'>
		</u-datetime-picker>
		<u-datetime-picker :formatter="formatter" @cancel='endTiemShow=false' ref="datetimePicker" @confirm='endConfirm'
			:show="endTiemShow" v-model="endTiemValue" mode="year-month">
		</u-datetime-picker>
	</view>
</template>

<script>
	import {
		innovatingList
	} from '@/request/api.js'
	import {
		timestampToTime
	} from '@/tools/common.js'
	export default {
		data() {
			return {
				startTimeYear: '',
				startTimeMonth: '',
				endTiemYear: '',
				endTiemMonth: '',
				startTimeShow: false,
				endTiemShow: false,
				startTimeValue: Number(new Date()),
				endTiemValue: Number(new Date()),
				start_time: null,
				end_time: null,
				page: 1,
				last_page:1,
				list:[],
				isType: false
			}
		},
		onReady() {
			// 微信小程序需要用此写法
			this.$refs.datetimePicker.setFormatter(this.formatter)
			console.log(1111)
		},
		methods: {
			goDetail(id){
				// console.log('点击筛选')
					uni.navigateTo({
						url:'/resume_pages/components/project_publishing_detail?id='+id
					})
			},
			/* 筛选 */
			reachBottom() {
				if (this.page < this.last_page) {
					this.page = this.page + 1
					this.isType = true
					this.getList()
				}
			},
			screen(){
				console.log(this.startTimeYear)
				// console.log(this.endTiemYear)
				if(!this.startTimeYear||!this.endTiemYear){
					uni.showToast({
						icon:'none',
						title:'请选择开始时间或者结束时间！',
						duration:1500
					})
					return;
				}
				this.page=1,
				this.last_page=1,
				this.list=[]
				this.getList() 
			},
			/* 获取数据 */
			getList() {
				if (this.startTimeYear) {
					this.start_time = this.startTimeYear + '-' + this.startTimeMonth
				} else {
					this.start_time = ''
				}
				if (this.endTiemYear) {
					this.end_time = this.endTiemYear + '-' + this.endTiemMonth
				} else {
					this.end_time = ''
				}
				if(!this.isType){
					this.list = []
					this.page = 1
				}
				innovatingList({
					page: this.page,
					start_time: this.start_time,
					end_time: this.end_time,
				}).then(res => {
					this.last_page = res.data.last_page?res.data.last_page:1
					this.list=this.list.concat(res.data.data) 
				})
			},
			startConfirm(e) {
				let data = timestampToTime(e.value).split('-')
				this.startTimeYear = data[0]
				this.startTimeMonth = data[1]
				this.startTimeShow = false
			},
			endConfirm(e) {
				let data = timestampToTime(e.value).split('-')
				let  startTimeYear = Number(this.startTimeYear)
				let  startTimeMonth = Number(this.startTimeMonth)
				let enTimeYear = Number(data[0])
				let endTimeMonth = Number(data[1])
				if(enTimeYear <startTimeYear){
					uni.showToast({
						icon:'none',
						title:'结束年份必须大于或等于开始年份！',
						duration:1500
					})
					return
				}else if(endTimeMonth<=startTimeMonth && enTimeYear <=startTimeYear){
					uni.showToast({
						icon:'none',
						title:'结束时间必须大于开始时间！',
						duration:1500
					})
					return
				}
				this.endTiemYear = data[0]
				this.endTiemMonth = data[1]
				this.endTiemShow = false
			},
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`
				}
				if (type === 'month') {
					return `${value}月`
				}
				if (type === 'day') {
					return `${value}日`
				}
				return value
			}
		}
	}
</script>

<style lang="scss" scoped>
	.time {
		width: 100%;
		margin: 40rpx 0rpx;

		.time_item {
			width: 43%;
			height: 92rpx;
			border-radius: 20rpx;
			border: 1px solid #BABABA;
			font-size: 28rpx;
			font-weight: 400;
			color: #4F4F4F;
		}
	}
	.cart-top{
		flex: 1;
		flex-direction: column;
		.top_right{
			width: 80px;
		}
		.top_left{
			flex: 1;
			display: flex;
			.top_left_status{
				width: 70px;
				color:#ccc;
			}
			.top_left_name{
				flex: 1;
			}
		}
		
}
	.pages {
		font-size: 28upx;
		color: #4F4F4F;
	}

	.p_name {
		margin: 20upx 0;
	}

	.card_list {
		margin-top: 30upx;
		box-shadow: 0px 0px 8px rgba(186, 186, 186, 0.3);
		border-radius: 20upx;
		padding: 20upx 30upx;
		box-sizing: border-box;

	}

	.mani_centent {}
	.noMore{
		text-align: center;
		color: #797575;
		margin-top: 20rpx;
	}
</style>
