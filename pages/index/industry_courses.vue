<template>
	<!-- 产业课程 -->
	<view class="box-border" style="padding-bottom: 15px;">
		<u-sticky bgColor="#fff">
			<u-tabs :list="title" :scrollable='false' @click="click" activeStyle="color:#3c9cff;"></u-tabs>
		</u-sticky>
		<view class="live-list page box-border ">
			<view class="pt-re" v-for="(i,k) in liveList" :key="k" @tap="navLiveHome(i.id,i.course_data,i.pdf)">
				<image :src="i.image" class="live-img" v-if="tabIndex==3"></image>
				<view v-else>
					<video class="live-img"  :poster="i.image"
						:src="i.video" object-fit="cover"
						controls ></video>
				</view>
				<view class="title-n">
					{{i.name}}
				</view>
				<view class="title-au one-worp">
					{{i.profile}}
				</view>
			</view>
		</view>
		<view class="noMore" v-if="last_page==page&&liveList.length!=0">
			数据加载完成...
		</view>
		<!-- <u-loading-page :loading="onLoading"></u-loading-page> -->
		<u-empty text="暂无列表哦~~" mode="list" v-if="liveList.length==0" margin-top='50'></u-empty>
	</view>
</template>

<script>
	import {
		curriculumList,curriculumDetails
	} from '@/request/api.js'
	import debounce from '../../utils/debounce'
	const debounceGetSearch = debounce(curriculumDetails, 1000)
	export default {
		components: {
		           
		},
		data() {
			return {
				tabIndex: 0,
				firstClick:true,
				courseData:0,
				showPreview:true,
				fileUrl:'',
				title: [{
					name: '职场加油站'
				}, {
					name: '行业启蒙课'
				}, {
					name: '求职干货'
				}, {
					name: '文本课程'
				}],
				liveList: [],
				last_page: 1,
				page: 1,
				onLoading:false,
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getDetails(url) {
				// this.onLoading = true
				uni.showLoading({
					title: '加载中',mask:true
				});
				uni.downloadFile({
					url: url+'?time='+Date.now(),
					success: res => {
						const filePath = res.tempFilePath
						uni.openDocument({
							filePath: filePath,
							success: res => {
								console.log('打开文档成功')
								this.firstClick = true //成功之后可以继续点击
								uni.hideLoading();
							}
						})
					},
					fail(err) {
						uni.hideLoading();
						this.firstClick = true //成功之后可以继续点击
					}
				})
				// debounceGetSearch({
				// 	id: id
				// }).then(res => {
				// 	// console.log(res)
				// 	if (res.code == 1) {
				// 		this.fileUrl = res.data.pdf
				// 		uni.downloadFile({
				// 			url: res.data.pdf+'?time='+Date.now(),
				// 			success: res => {
				// 				const filePath = res.tempFilePath
				// 				uni.openDocument({
				// 					filePath: filePath,
				// 					success: res => {
				// 						console.log('打开文档成功')
				// 						this.firstClick = true //成功之后可以继续点击
				// 						uni.hideLoading();
				// 					}
				// 				})
				// 			},
				// 			fail(err) {
				// 				uni.hideLoading();
				// 				this.firstClick = true //成功之后可以继续点击
				// 			}
				// 		})
				// 	}
				// })
			},
			getList() {
				curriculumList({
					page: this.page,
					type_data:this.tabIndex
				}).then(res => {
					console.log(res)
					this.last_page = res.data.last_page
					this.liveList = this.liveList.concat(res.data.data)
				})
			},
			/* 选择tab */
			click(e) {
				this.page = 1
				this.liveList = []
				this.tabIndex = e.index
				console.log(this.tabIndex)
				this.getList()
			},
			//直播间跳转
			navLiveHome(id,courseData,pdf) {
				// this.fileUrl = ''
				if(courseData == 1&&this.tabIndex == 3){
					// this.courseData = 1
					if(this.firstClick){
						this.firstClick = false
						this.getDetails(pdf)
					}
					return false;
				}
				this.courseData = 0
				if(this.tabIndex == 3){
					wx.navigateTo({
						url: `/pages/index/details/details?id=${id}&courseData=${courseData}`
					})
				}
				
			},
		},
		onReachBottom() {
			if (this.page < this.last_page) {
				this.page = this.page + 1
				this.getList()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.title-au {
		line-height: 34upx;
		color: #FFFFFF;
		font-size: 24rpx;
		position: absolute;
		left: 20upx;
		bottom: 22%;
		width: calc(100% - 40upx);
	}
	.noMore{
		text-align: center;
		color: #797575;
		margin-top: 20rpx;
	}
	.title-n {
		position: absolute;
		left: 20upx;
		bottom: 30%;
		font-size: 28rpx;
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

		image {
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
		border-radius: 28rpx;
		aspect: ratio 4upx / 3upx;
		overflow: hidden;
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
