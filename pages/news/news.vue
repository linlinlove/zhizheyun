<template>
	<view class="">
		<head-com></head-com>
		<news-list @jumpDetailFn='jumpDetailFn' ref="child"></news-list>
	</view>

</template>
<script>
	import headCom from '@/components/news/head.vue'
	import newsList from '@/components/news/newsList.vue'
	export default {
		components: {
			headCom,
			newsList
		},
		data() {
			return {

			}
		},
		onLoad() {
			this.$refs.child.loadFn()
		},

		onShow() {
			this.$refs.child.showFn()
		},
		methods: {
			jumpDetailFn() {
				let nameList = {
					myName: 'zhangsan',
					your: 'lisi'
				}
				uni.navigateTo({
					url: '/chat_pages/chatroom/chatroom?username=' + JSON.stringify(nameList)
				})
			}
		}
	}
</script>
