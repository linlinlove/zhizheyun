<template>
	<view class="entrepreneurship">
		<!-- tab列表 -->
		<u-sticky bgColor="#fff">
				<u-tabs :list="list"  :scrollable='false'  :current='tabCurrent'   @change="tabChange"></u-tabs>
		</u-sticky>
	
		<!-- 项目发布 表单 -->
		<projectPublishing v-if="tabCurrent == 0"></projectPublishing>
		<projectList v-else ref="son"> </projectList>
	</view>
</template>

<script>
	import projectPublishing from '../components/project_publishing.vue';
	import projectList from '../components/project_list.vue';
	export default {
		components: {
			projectPublishing,projectList
		},
		data() {
			return {
				tabCurrent: 0,
				list: [{
					name: '项目发布'
				}, {
					name: '项目列表'
				}]
			}
		},
		methods: {
			tabChange(e) {
				if(e.index==this.tabCurrent){
					this.tabCurrent = e.index
				}else{
					this.tabCurrent = e.index
					if(this.tabCurrent==1) {
						this.$nextTick(()=>{
							this.$refs.son.getList()
						})
					}
				}
			}
		},
		onReachBottom() {
			console.log(this.tabCurrent)
			if(this.tabCurrent == 1){
				this.$refs.son.reachBottom()
			}
		},
	}
	
</script>

<style lang="less">
	.entrepreneurship {
		width: 100vw;

		.list_box {
			width: 90%;
			margin: 40rpx auto;

			.time {
				width: 100%;
				margin: 40rpx 0rpx;

				.time_item {
					width: 43%;
					height: 92rpx;
					border-radius: 20rpx;
					border: 1px solid #BABABA;
					font-size: 28rpx;
					font-weight: 400;
					color: #4F4F4F;
				}
			}

			.list_title {
				width: 100%;
				font-size: 28rpx;
				font-weight: 400;
				color: #4F4F4F;

				.screen_btn {
					box-sizing: border-box;
					padding: 10rpx 35rpx;
					border-radius: 40rpx;
					color: #fff;
					background-color: #157DFA;
				}
			}

			.list {
				width: 100%;
				box-sizing: border-box;
				padding: 30rpx;
				background: #fff;
				box-shadow: 0px 0px 8px rgba(186, 186, 186, 0.3);
				border-radius: 20rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #4F4F4F;

				.list_text {
					width: 100%;
					margin: 20rpx 0rpx;
				}
			}
		}


	}
</style>
