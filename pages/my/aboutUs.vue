<template>
	<view class="abouts">
		<u-parse :content="aboutUs"></u-parse>
	</view>
</template>

<script>
	import {
		getconfig
	} from '@/request/api.js'
	export default {
		components: {

		},
		data() {
			return {
			aboutUs:''
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			async getData() {
				let res = await getconfig();
				this.aboutUs = res.data.about_us;
				// console.log(res)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.abouts{
		padding: 20rpx;
	}
</style>
