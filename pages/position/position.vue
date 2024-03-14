<template>
	<!-- 搜索职位 -->
	<view class="position">
		<view class="serach-parent pb-3">
			<view class="Search">
				<serachInput :isDisabled='true' :placeholder="'职位名称关键词'" @tapSerachIcon='tapSerachIcon'></serachInput>
			</view>
			
			 <view class="jc-sb" @tap="choiceCity()">
				<view class="">
				 	<image class="localImg" src="/static/icon/index/location.png" mode=""></image>
				</view>
			 	<view class="">
			 		<text class="city" style="color: white;font-size:26rpx">{{city.substring(0,2)}}</text>
			 	</view>
			 </view>
			 
		</view>
		
<!-- 		<view class="parent">
			<view class="input-row box-border ai-c">
				<serachInput class="top-input"  @tapSerachIcon='tapSerachIcon' :isDisabled='true' :placeholder="'输入高薪职位搜索'" ></serachInput>
				
				<view class="f-row ai-c jc-sb" @tap="choiceCity()">
					<image class="localImg" src="/static/icon/index/location.png" mode=""></image>
					<text>{{city.substring(0,2)}}</text>
				</view>
			</view>
		</view>
		 -->
		
		
		
		
		<positionList ref="child"></positionList>
	</view>

</template>

<script >
	import serachInput from '@/components/common/serachInput.vue'
	import positionList from '@/components/position/positionList.vue'
	export default {
		components:{
			serachInput,positionList
		},
		data() {
			return {
				city:'成都市'
			}
		},
		onLoad() {
			this.$refs.child.getTab()
			uni.$on('setCity',e=>{
				console.log(e,'选择城市的信息');
				this.city = e.name
				this.$refs.child.changeCity(this.city)
			})
		},
		methods:{
			/* 搜索*/
			tapSerachIcon(){
				uni.navigateTo({
					url:'/resume_pages/serach_page/serach_page'
				})
			},
			/* 选择城市 */
			choiceCity() {
				uni.navigateTo({
					url: '/pages/index/change_city?type='+"local"
				})
			}
		},
		onPullDownRefresh() {
			this.$refs.child.getList('fresh')
		    setTimeout(function () {
			uni.stopPullDownRefresh();
				}, 1000);
		},
		onReachBottom() {
			this.$refs.child.reachBottom()
		}
	}
</script>

<style lang="scss" scoped>
	.position{
		width: 100%;
		overflow: hidden;
	}
	.serach-parent {
		background-color: $common-color;
		padding: 30upx 10upx 80upx;
		display:flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		.localImg {
			width: 48upx;
			height: 48upx;
		}
		.Search{
			flex:1;
		}
		.jc-sb{
			justify-content: space-evenly;
			width: 140rpx;
			display:flex;
			justify-content: center;
			.city{
				color: #fff;
				font-size: 24upx;
				white-space:nowrap;
			}
		}
		

	}

</style>
