<template>
	<!-- 实录生成简历 -->
	<view class="pages plr-3 box-border mt-1">
		<u-swipe-action v-for="i in list" :key="i.id">
			<u-swipe-action-item :options="options1" @click='clickDel(i.id)'>
				<view class="swipe-action   f-row jc-sb ">
					<radio color='#157DFA' v-if="isChoice" :checked="radioValue==i.id?true:false"
						@tap.stop="tapRadio(i.id)" />
						
					<view class="_left">
						<view class="one-worp ">
							{{i.name}}
						</view>
						<view class="">
							{{i.createtime}}
						</view>
					</view>
					
					<!-- 点击查看 -->
					<view class="_right" @click.stop='viewPdf(i.file)'>
						<u-icon size="20" name="eye" color='#f1f1f1' ></u-icon>
					</view>
					
				</view>
			</u-swipe-action-item>
		</u-swipe-action>
		<!-- 占位符 -->
		<view style="width: 100%;height: 200upx;">
		</view>
		<view class="btn-box" v-if="!isChoice">
			<buttonOperation @tapBtn='upResume'>
				聊天记录中导入
			</buttonOperation>
		</view>
		<view class="btn-box" v-else>
			<buttonOperation @tapBtn='putResumeFn'>
				立即投递
			</buttonOperation>
		</view>
		<u-notify ref="uNotify" message="Hi uView"></u-notify>
		<u-empty text="生成简历是空的哦~~" mode="list" v-if="list.length==0" margin-top='50'></u-empty>
	</view>
</template>

<script>
	import {
		annexListw,
		annexDel,
		putResume
	} from '@/request/api.js'
	import buttonOperation from '@/components/common/buttonOperation.vue'
	import {
		log
	} from 'util'
	export default {
		components: {
			buttonOperation
		},
		data() {
			return {
				postId: null,
				page: 1,
				last_page: 1,
				list: [],
				options1: [{
					text: '删除'
				}],
				radioValue: null,
				isChoice: false //投递简历的页面true   添加简历 false
			}
		},
		onLoad(e) {
			let obj = e.type ? JSON.parse(e.type) : null
			if (obj && obj.type == '投递简历') {
				this.isChoice = true
				//岗位id
				this.postId = obj.id
			} else {
				this.isChoice = false
			}
			this.getList()
		},
		methods: {
			putResumeFn() {
				putResume({
					//岗位id
					position_id: this.postId,
					//简历id
					annex_id: this.radioValue
				}).then(res => {
					if (res.code == 1) {
						uni.showToast({
							icon: 'none',
							duration: 1500,
							title: '投递成功！'
						})
					} else {
						uni.showToast({
							icon: 'none',
							duration: 1500,
							title: '投递失败，请重试！'
						})
					}
				})
			},
			/* 删除 */
			clickDel(e) {
				annexDel({
					id: e
				}).then(res => {
					if (res.code == 1 && res.msg == '成功') {
						uni.showToast({
							icon: 'none',
							duration: 1500,
							title: '删除成功！'
						})
						this.page = 1
						this.last_page = 1
						this.list = []
						this.getList()
					} else {
						uni.showToast({
							icon: 'none',
							duration: 1500,
							title: '删除失败，请重试！'
						})
					}
				})
			},
			tapRadio(i) {
				this.radioValue = i
			},
			/* 简历列表 */
			getList() {
				annexListw({
					page: this.page
				}).then(res => {
					this.last_page = res.data.last_page
					this.list = this.list.concat(res.data.data)
				})
			},
			/* 上传简历 */
			// 根据模板生成简历 
			upResume() {
				const token = uni.getStorageSync('token')
				uni.chooseMessageFile({
					count: 1,
					type: 'file',
					extension: ['pdf', 'PDF'],
					success: res => {
						// console.log(res.tempFiles[0].name)
						let name = res.tempFiles[0].name
						wx.uploadFile({
							url: `${getApp().globalData.baseUrl}/user/uploadannex`,
							filePath: res.tempFiles[0].path,
							name: 'file',
							formData: {
								'file': res.tempFiles[0].name,
								'filename': name, //文件名称 后台要不要？
							},
							header: {
								token
							},
							files: [{
								filename: res.tempFiles[0].name, //文件名称 后台要不要？
							}],
							success: file => {
								let _res = JSON.parse(file.data)
								console.log(_res.code, 111);
								if (_res.code == 1 && _res.msg == '上传成功') {
									uni.showToast({
										icon: 'none',
										duration: 1500,
										title: _res.msg
									})
									this.page = 1
									this.list = []
									this.getList()
								} else {
									uni.showToast({
										icon: 'none',
										duration: 1500,
										title: _res.msg
									})
								}
							},
							fail: (errFile) => {
								uni.showToast({
									icon: 'none',
									duration: 1500,
									title: '简历上传失败'
								})
								console.log(errFile);
							}
						})
					},
					fail: (err) => {
						console.log(err);
						/* this.$refs.uNotify.warning (msg) */
					}
				})
			},
			viewPdf(url) {
				uni.downloadFile({
					url: url+'?time='+Date.now(),
					success: res => {
						const filePath = res.tempFilePath
						uni.openDocument({
							filePath: filePath,
							success: res => {
								console.log('打开文档成功')
							}
						})
					}
				})
				// wx.downloadFile({
				// 	// 示例 url，并非真实存在
				// 	url,
				// 	success: function(res) {
				// 		const filePath = res.tempFilePath
				// 		wx.openDocument({
				// 			filePath: filePath,
				// 			success: function(res) {
				// 				console.log('打开文档成功')
				// 			}
				// 		})
				// 	}
				// })
			}

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
	.pages {
		z-index: 1 !important;
	}

	radio {
		transform: scale(0.7);
	}

	._left {
		width: 80%;
		font-size: 28upx;
		line-height: 40upx;
		color: #4D4D4D;
		min-width: 0;
		margin-left: 30upx;

	}

	.one-worp {
		margin-bottom: 15upx;
	}

	._right {
		font-size: 24upx;
		line-height: 34upx;
		color: #979797;
		width: 48upx;
	}

	.f-row {
		padding: 20upx 0;
		border-bottom: 1upx solid #ECECEC;
	}

	.u-swipe-action:nth-child(1) .f-row {
		border-top: 1upx solid #ECECEC;
	}

	.btn-box {
		position: fixed;
		bottom: 50upx;
		left: 50%;
		transform: translateX(-50%);
		width: 90vw;
	}


	.u-page {
		padding: 0;
	}

	.u-demo-block__title {
		padding: 10px 0 2px 15px;
	}

	.swipe-action {
		&__content {
			padding: 25rpx 0;

			&__text {
				font-size: 15px;
				color: $u-main-color;
				padding-left: 30rpx;
			}
		}
	}
</style>
