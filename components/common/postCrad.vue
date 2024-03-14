<template>
	<!-- 职位列表 -->
	<view class="">
		<view class="postCard f-row jc-sb" @tap="cardDetail(i.id)" v-for="(i,k) in list" :key='k'>
			<view class="post-item">
				<view class="post-name">
					{{i.name||i.position_name}}
				</view>
				<view class="post-requirement">
					<view class="requirement-item  mr-2" v-for="(i2,k2) in i.ask_json" :key="k2" v-if="i.ask_json">
						{{i2.value}}
					</view>
				</view>
				<view class="post-company f-row ai-c">
					<view class="company-name mr-2">
						{{i.enterprise_name||i.enterprise.name}}
					</view>
					<view class="company-num">
						{{i.scale||i.enterprise.scale||''}}
					</view>
				</view>
				<view class="post-concat f-row ai-c">
					<image class="content-avatar" :src="i.admin.avatar||i.publi_image||i.enterprise.logo_image" mode="">
					</image>
					<view class="content-contacts">
						{{i.publi_name||i.admin.nickname||''}}
					</view>
				</view>
			</view>
			<view style="display: flex;flex-direction: column;justify-content: space-between;">
				<view class="post-price" v-if="type==0">
					{{i.min_money}}-{{i.max_money}}元
				</view>
				<view class="post-price" v-else-if="type==1">
					{{i.salary}}元
				</view>
				<view v-if="showBaoming" @tap.stop="baoming" class="post-price">报名/投递简历</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			showBaoming: {
				type: Boolean,
				default: false
			},
			list: {
				type: Array,
				default: []
			},
			type: {
				type: Number,
				default: 0 //0职位 就业定制  1面试记录-沟通过
			}
		},
		created() {
		},
		methods: {
			cardDetail(id) {
				this.$emit('tapCard', id)
			},
			baoming(){
				uni.showToast({
					title:"功能待实现",
					icon:"none",
					duration:2000
				})
			}
		},
		onLoad() {

		},
	}
</script>
<style lang="scss" scoped>
	page {
		height: auto !important
	}

	.post-price {
		font-size: 28upx;
		color: $common-color;
		font-weight: 500;
	}

	.content-avatar {
		width: 48upx;
		height: 48upx;
		border-radius: 50%;
		margin-right: 16upx;
	}

	.content-contacts {
		font-size: 24upx;

	}

	.post-requirement {
		overflow: hidden;
	}

	.requirement-item {
		display: inline-block;
		background-color: #F5F5F5;
		float: left;
		color: #979797;
		font-size: 20upx;
		padding: 4upx 8upx;
		border-radius: 5upx;
		height: 32upx;
		line-height: 32upx;
		margin-top: 10rpx;
	}

	.post-item>view:nth-child(n) {
		margin-bottom: 12upx;

	}

	.post-item {
		flex: 1;
	}

	.postCard {
		border-top: 1upx solid #ECECEC;
		padding: 20upx 0;
		color: #4D4D4D;

	}

	.post-price {
		width: 110px;
	}

	.postCard:last-child {
		border-bottom: 1upx solid #ECECEC;
	}

	.post-name {
		color: #4D4D4D;
		font-size: 28upx;
	}

	.post-company {
		font-size: 24upx;
		.company-name {
			color: #949494;
		}
		.company-num{
			color: #949494;
		}
	}
</style>
