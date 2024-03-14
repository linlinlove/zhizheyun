<template>
	<view class="">
		<u-popup :show="showPop" mode="center" @close="close" height="350px" customStyle="width:90%">
			<view class="p-3">
				<view class="title" style="text-align: center;color: black;" >
					{{title||'提示'}}
				</view>
				<view scroll-y="true" style="height: 250rpx;overflow: scroll;">
					<view class="" style="margin-top: 15px;color: #979797; display: flex;justify-content: center;">
						<u-icon name="question-circle" color="#FFA000" v-if="!showqx"></u-icon>
						<view style="margin-left: 20rpx;">{{tip||'你确定删除这个任务吗？'}}</view>
					</view>
				</view>
				<view class="f-row jc-sb">
					<view style="width: 40%;">
						<u-button text="取消" type='info' @click='refuse' v-if="!showqx"></u-button>
					</view>
					<view style="width: 40%;">
						<u-button class="custom-style" text="确认" customStyle="background-color: #157DFA;color:#fff"
							@click="submit" size="small"></u-button>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		props: ['showPop','title','tip','showqx'],
		data() {
			return {
				show: false,
			}
		},
		methods: {
			// 注意返回值为一个数组，单列时取数组的第一个元素即可(只有一个元素)
			submit(e) {
				this.$emit('submit')
			},
			refuse() {
				this.$emit('refuse',true)
			}
		}
	}
</script>

<style>
</style>
