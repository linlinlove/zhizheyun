<template>
	<view class="currentPage">
		<topCard :userInfo='userInfo'></topCard>
		
		<functionList></functionList>
		
		
		<buttonOperation @tapBtn='tapBtn' v-if="userInfo">
			退出登录
		</buttonOperation>
		
		<!-- 占位符 -->
		<view style="height: 100upx;width: 100%;"  v-if="userInfo">

		</view>
		<u-modal :show="show" :closeOnClickOverlay="true" :showCancelButton='true' :title="'提示'" @confirm='confirm'
			@cancel='cancel' :content="'是否退出登录？'"></u-modal>
	</view>
</template>

<script>
	import functionList from '@/components/my/functionList.vue'
	import topCard from '@/components/my/topCard.vue'
	import buttonOperation from '@/components/common/buttonOperation.vue'
	export default {
		components: {
			functionList,
			topCard,
			buttonOperation
		},
		data() {
			return {
				isLogin: false,
				userInfo: null,
				show: false
			}
		},
		onLoad() {
			if( uni.getStorageSync('token')){
				let userInfo = uni.getStorageSync('userInfo')
				this.userInfo = userInfo
			}
			
			uni.$on('hasLogin', val => {
				if (val) this.isLogin = true
				let userInfo = uni.getStorageSync('userInfo')
				this.userInfo = userInfo
			})
		},
		onShow() {
			if( uni.getStorageSync('token')){
				let userInfo = uni.getStorageSync('userInfo')
				this.userInfo = userInfo
			}
			
			uni.$on('hasLogin', val => {
				if (val) this.isLogin = true
				let userInfo = uni.getStorageSync('userInfo')
				this.userInfo = userInfo
			})
		},
		methods: {
			tapBtn() {
				this.show = true
			},
			confirm() {
				// uni.clearStorageSync())
				// uni.removeStorageSync('myUsername') 退出不清除聊天记录
				uni.removeStorageSync('userInfo')
				uni.removeStorageSync('token')
				this.show = false
				this.userInfo = null
			},
			cancel() {
				this.show = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.currentPage {
		min-height: 100vh;
		background-color: #f5f5f5;
	}
</style>
