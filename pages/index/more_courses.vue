<template>
	<!-- 直播课程 -->
	<view class="box-border">
		<!-- <u-sticky bgColor="#fff">
			<u-tabs :list="title" :scrollable='false' @click="click"></u-tabs>
		</u-sticky> -->
		<view class="live-list page box-border ">
			<view class="pt-re" v-for="(i,k) in liveList" :key="k" @tap="navLiveHome(i.roomid)">
				<image :src="i.coverImg" class="live-img"></image>
				<view class="pt-ab f-row ai-c" v-if="i.local_live_status==1">
					<image src="/static/icon/index/image6.png" mode=""></image>
					<text> 直播中</text>
				</view>
				<view class="title-n">
					<!-- 房间名字 -->
					{{i.name}}
				</view>
				<view class="title-au one-worp">
					<!-- 主播名 -->
					{{i.anchor_name}}
				</view>
			</view>
		</view>
		<u-empty text="暂无列表哦~~" mode="list" v-if="list.length==0" margin-top='50'></u-empty>
	</view>
</template>

<script>
	import {liveList} from '@/request/api.js'
	export default {
		data() {
			return {
				tabIndex: 0,
				title: [{
					name: '职场加油站'
				}, {
					name: '行业启蒙课'
				}, {
					name: '求职干货'
				}],
				liveList: [],
				last_page:1,
				page:1
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList(){
				liveList({
					page:this.page
				}).then(res=>{
					this.last_page=res.data.last_page
					this.liveList=this.liveList.concat(res.data.data)
				})
			},
			/* 选择tab */
			click(e) {
				this.tabIndex = e
			},
			//直播间跳转
			//roomid
			navLiveHome(id) {
				wx.navigateTo({
					url: `plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=${id}`
				})
			},
		},
		onReachBottom() {
			if(this.page<this.last_page){
				this.getList()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.title-au{
		line-height: 34upx;
		color: #FFFFFF;
		position: absolute;
		left: 20upx;
		top: 80%;
		width: calc(100% - 40upx);
		font-size: 28upx;
	}
	.title-n{
		position: absolute;
		left: 20upx;
		bottom: 30%;
		width: calc(100% - 40upx);
		line-height: 40upx;
		color: #FFFFFF;
	}
	.pt-ab {
		width: 130upx;
		height: 50upx;
		left: 0upx;
		top: 50upx;
		border-radius: 0 25upx 25upx 0;
		z-index: 9;
		background: linear-gradient(270deg, #F8A470 0%, #F3DDA2 100%);
		image{
			width: 26upx;
			height: 26upx;
			margin-left: 10upx;
			margin-right: 10upx;
		}
		font-style: normal;
		font-size: 24upx;
		color: #FFFFFF;
	}
	.live-list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 20upx;
		width: 100%;
		border-radius: 16upx;
		overflow: hidden;

	}

	.live-img {
		width: 100%;
		height: 400upx;
		border-radius: 16upx;
		aspect: ratio 4upx / 3upx;
	}

	.title-item {
		color: $title-color;
	}

	.active {
		color: $common-color !important;
		position: relative;
	}

	.active::after {
		content: '';
		position: absolute;
		background: $common-color;
		width: 70upx;
		height: 2upx;
		bottom: -10upx;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 40upx;
	}

	.current {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		text-align: center;
	}
</style>
