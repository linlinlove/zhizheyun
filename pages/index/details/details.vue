<template>
	<view class="mydetails">
		<view class="title">
			{{title}}
		</view>
		<view class="content">
			<u-parse :content="content"></u-parse>
		</view>
	</view>
</template>

<script>
	import {
		curriculumDetails
	} from '@/request/api.js'
	export default {
		 components: {
		            
		 },
		data() {
			return {
				id: '',
				content: '',
				title: '',
				showPreview: true,
				fileUrl: 'http://yzzc.westts.cn//uploads/user/109/annex/cb79e362856449aff661d6c2aaca61c4.pdf'
			};
		},
		onLoad(res) {
			// console.log(res)
			this.id = res.id
			this.getDetails()
		},
		methods: {
			getDetails() {
				curriculumDetails({
					id: this.id
				}).then(res => {
					console.log(res)
					if (res.code == 1) {
						this.content = res.data.content
						this.title = res.data.name
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mydetails {
		padding: 20rpx;
		.title {
			text-align: center;
			margin: 20rpx;
		}
	}
</style>
