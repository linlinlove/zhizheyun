<template>
	<view class="protocol" v-if="showPro">
		<!-- <u-modal :show="show" :title="title" :content='content' @confirm="confirm" cancelText="不同意" confirmText="同意"
			@cancel="cancel" showCancelButton="true">
			<view class="slot-content">
							<rich-text :nodes="content"></rich-text>
			</view>
		</u-modal> -->
		<!-- <view class="pro-container">
			<view class="title">
				用户协议协议和隐私政策
			</view>
			<view class="content">
				<text>感谢选择智慧招聘小程序我们非常重视您的个人信息安全和隐私保护。依据最新法律要求，使用我们的产品前，请仔细同意</text><text>《用户协议》</text>
				<text>以便我们提供更优质的服务！</text>
				<text>我们承诺将全力保护你的个人隐私及合法权益，再次感谢您的信任！</text>
			</view>

		</view> -->
		<view class="modal-mask" bindtap="hideModal" catchtouchmove="preventTouchMove"></view>
		<!-- 成功 -->
		<!-- <view class="modal-dialog">
			<view class="modal-img">
				协议
			</view>
			<view class="modal-title">感谢选择智慧招聘小程序我们非常重视您的个人信息安全和隐私保护。依据最新法律要求，使用我们的产品前，请仔细同意</view>
			<view class="modal-footer">
				<view class="btn-confirms" >确定</view>
			</view>
		</view> -->
		<u-popup :show="showPro" mode="bottom" @close="close" @open="open" height="600px">
			<view class="p-3">
				<view class="title">
					用户协议
				</view>
				<scroll-view scroll-y="false" style="height: 350rpx;">
					<view>
						<view class="zhzpText">
							感谢选择智慧招聘小程序我们非常重视您的个人信息安全和隐私保护。依据最新法律要求，使用我们的产品前，请仔细同意<view class="goPro" @click="goPro">
								《用户协议》</view>
							以便我们提供更优质的 服务！我们承诺将全力保护你的个人隐私及合法权益，再次感谢您的信任！
						</view>
					</view>
				</scroll-view>
				<view>
					<u--text>感谢选择智慧招聘小程序我们非常重视您的个人信息安全和隐私保护。依据最新法律要求，使用我们的产品前，请仔细同意</u--text>
				</view>
				<view class="f-row jc-sb">
					<view style="width: 40%;">
						<u-button text="拒绝" type='info' @click='refuse'></u-button>
					</view>
					<view style="width: 40%;">
						<u-button text="同意" type='primary' @click="agree"></u-button>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		components: {

		},
		props: {
			showPro: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				show: true,
				title: '用户协议',
				content: `<navigator url="/pages/my/my">去詳情頁</navigator>`
			}
		},
		onReady() {
			// let pro = uni.getStorageSync('protocol')
			// console.log(pro)
			this.$nextTick(() => {
				// var btn = document.getElementById("btn");
				// btn.onclick = function() {
				// 	alert("HelloWorld");
				// }
			})
		},
		methods: {
			goPro() {
				console.log(111)
				uni.navigateTo({
					url: '/components/index/protocolDetails'
				})
			},
			refuse() {
				wx.exitMiniProgram({
					success: function() {
						// postCancelLogin({
						// 	unique_id: this.unique_id
						// }).then((res => {
						// 	uni.removeStorageSync('protocol'); //清除缓存	
						// }))
					}
				})
				// console.log(pro)
				//          if(pro.key){
				//  this.show= false
				// }else{
				//  this.show= true
				// }
			},
			agree() {
				// console.log(1111)
				let data = {
					key: true
				}
				uni.setStorageSync('protocol', data)
				let pro = uni.getStorageSync('protocol')
				uni.$emit('argree',true)
				this.showPro = false;
				uni.switchTab({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.protocol {
		// background: red;
		// position: absolute;
		// left: 50%;
		// top: 50%;
		// transform: translate(-50%, -50%);
		// .pro-container{
		// 	position: absolute;
		// }
	}

	.goPro {
		display: inline-block;
		color: #2196F3;
	}

	.show-btn {
		margin-top: 100rpx;
		color: #22cc22;
	}

	.modal-mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #000;
		opacity: 0.5;
		overflow: hidden;
		z-index: 9000;
		color: #fff;
	}

	.modal-dialog {
		width: 540rpx;
		overflow: hidden;
		position: fixed;
		top: 50%;
		left: 0;
		z-index: 9999;
		background: #f9f9f9;
		margin: -180rpx 105rpx;
		border-radius: 8px;
	}

	.modal-title {
		padding-top: 30rpx;
		padding-bottom: 30rpx;
		font-size: 14px;
		color: #030303;
		text-align: center;
	}

	.modal-img {
		width: 40px;
		height: 40px;
		margin: 0 auto;
		margin-top: 20rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}


	.modal-footer {
		display: flex;
		flex-direction: row;
		height: 86rpx;
		border-top: 1px solid #dedede;
		font-size: 34rpx;
		line-height: 86rpx;
	}

	.btn-cancel {
		width: 50%;
		color: #8f8f8f;
		background-color: #f2f2f2;
		text-align: center;
		border-right: 1px solid #dedede;
	}

	.btn-confirm {
		width: 50%;
		color: #8f8f8f;
		background-color: #f2f2f2;
		text-align: center;
	}

	.btn-confirms {
		width: 100%;
		background-color: #f2f2f2;
		color: #8f8f8f;
		text-align: center;
	}

	.p-3 .title {
		font-size: 36rpx;
		color: #8f8f94;
		text-align: center;
		margin-bottom: 15px;
	}

	.zhzpText {
		line-height: 1.7;
	}
</style>
