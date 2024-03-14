<template>
	<view class="current">
		<view @tap="changeAvatar" class="ful f-row ai-c jc-sb">
			<view class="ful-left">
				头像
			</view>
			<view class="ful-right">
				<image :src="data.avatar" mode=""></image>
			</view>
		</view>
		<view class="ful f-row ai-c jc-sb" @click="changNickname">
			<view class="ful-left">
				昵称(可修改)
			</view>
			<view class="ful-right" >
				{{data.nickname}}
			</view>
		</view>
		<view class="ful f-row ai-c jc-sb">
			<view class="ful-left">
				用户账号/电话号码
			</view>
			<view class="ful-right">
				{{data.mobile}}
			</view>
		</view>
	</view>
</template>

<script>
	
	import {
		changeNickName
	} from '@/request/api.js'
	export default{
		data(){
			return{
				data:null,
				readyUpdateAvatar:''
			}
		},
		onLoad() {
			console.log(123456718)
			this.data=uni.getStorageSync('userInfo');
			console.log(this.data.avatar)
		},
		methods:{
			changNickname(){
				uni.showModal({
					title:"修改昵称:",
					placeholderText:this.data.nickname,
					editable:true,
					success: (res) => {
						if(res.confirm == true){
							changeNickName({
								nickname:res.content
							}).then(r => {
								this.data.nickname = res.content;
								uni.setStorageSync('userInfo',this.data);
							});
						}else{
							
						}
					}
				})
			},
			changeAvatar(){
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'],
					success: (chooseImageRes) => {
						uni.showLoading({
							mask:true,
							title:""
						})
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								'userid': 'test'
							},
							success: (uploadFileRes) => {
								this.data.avatar = uploadFileRes.data
								uni.hideLoading()
							},
							fail: () => {
								uni.showToast({
									icon:'error',
									title:"修改失败",
									duration:1500
								})
							}
						});
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.current {
		padding: 30upx;
		padding-top: 0;
	}

	.ful {
		font-size: 28upx;
		color: #4F4F4F;
		padding: 40upx 0;
		border-bottom: 1upx solid #ECECEC;
	}

	.ful-right {
		image {
			width: 100upx;
			height: 100upx;
			border-radius: 50%;
		}
	}
</style>
