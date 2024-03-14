<template>
	<!-- 预览实录 -->
	<view class="">
		<view class="jianli" @tap="jumpMyResume2">
			<!-- <button open-type="chooseAvatar" @tap="tishi" @chooseavatar="onChooseAvatar" plain=true size=mini style="background-color:rgba(1,1 , 1,0 ); color: aliceblue; border: none;font-size: 22rpx;">生成简历1</button> -->
			生成简历模板1
		</view>
		<view class="jianli2" @tap="jumpMyResume2">
			生成简历模板2
		</view>
		<view class="jianli3" @tap="jumpMyResumeList">
			我的简历列表
		</view>
		<jobPosting-com :data='data'></jobPosting-com>
		
	</view>
</template>


<script>
	import {
		online
	} from '@/request/api.js'
	import jobPostingCom from '@/resume_pages/components/job_posting.vue'
	export default {
		components: {
			jobPostingCom
		},
		data() {
			return {
				data: null
			}
		},
		onLoad() {
			online().then(res => {
				this.data = res.data
				console.log(this.data);
			});
			
		},
		methods: {
			tishi(){
				uni.showToast({
					title:"请选择简历头像人照",
					icon:'none'
				})
			},
			onChooseAvatar(e){
				uni.setStorageSync('resume_avatar',e.detail.avatarUrl);//设置本地头像
				this.jumpMyResume1();
			},
			jumpMyResume1() {
				uni.navigateTo({
					url: '/resume_pages/cecord_look/resume_look'
				})
			},
			jumpMyResume2() {
				this.tishi();
				uni.chooseMedia({
				  count: 1,
				  mediaType: ['image'],
				  sourceType: ['album', 'camera'],
				  maxDuration: 30,
				  camera: 'back',
				  success(res) {
					console.log(res.tempFiles[0].tempFilePath); 
					// wx.editImage({
					//     src: res.tempFiles[0].tempFilePath, // 图片路径
					// 	success(resp) {
					// 	  uni.setStorageSync('resume_avatar',resp.tempFilePath);//设置本地头像
					// 	  uni.navigateTo({
					// 	  	url: '/resume_pages/cecord_look/resume_look'
					// 	  })	
					// 	}
					//  });
					 uni.setStorageSync('resume_avatar',res.tempFiles[0].tempFilePath);//设置本地头像
					 uni.navigateTo({
					 	url: '/resume_pages/cecord_look/resume_look',
					})
				  }
				});
				
			},
			jumpMyResumeList() {			
				uni.navigateTo({
					url: '/resume_pages/resume_list/resume_list'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.jianli{
		position: fixed;
		right: 0;
		top: 20vh;
		z-index: 9999;
		background-color:  $common-color;
		font-size: 28upx;
		padding: 10upx 20upx;
		color: #fff;
		border-radius: 10upx 0 0 10upx;
	}
	.jianli2{
		position: fixed;
		right: 0;
		top: 30vh;
		z-index: 9999;
		background-color:  $common-color;
		font-size: 28upx;
		padding: 10upx 20upx;
		color: #fff;
		border-radius: 10upx 0 0 10upx;
	}
	.jianli3{
		position: fixed;
		right: 0;
		top: 40vh;
		z-index: 9999;
		background-color:  $common-color;
		font-size: 28upx;
		padding: 10upx 20upx;
		color: #fff;
		border-radius: 10upx 0 0 10upx;
	}
</style>
