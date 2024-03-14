<template>
	<view class="pages">
		<view class="" v-for="i in list">
			<view class="time">
				{{i.time}}
			</view>
			<view class="p-2 f-row ai-c"
			 @tap="choiceList(item.id)"
			 v-for="item in i.list">
				<image :src="item.enterprise.logo_image" class="avatar"></image>
				<view class="f-column jc-sb">
					<view class="one-worp">
						{{item.enterprise.name}}
					</view>
					<view class="">
						{{item.position_name}}{{item.salary}}
					</view>
				</view>
				<!-- :0=待面试,1=通过,2=未通过 -->
				<view class="status">
					{{item.status==0?'待面试':(item.status==1?'已通过':'未通过')}}
				</view>
			</view>
		</view>
	</view>
</template>

<script >
	export default{
		props:['list'],
		methods:{
			choiceList(id){
				this.$emit('curretnTap',id)
			}
		}
	}

</script>

<style lang="scss" scoped>
	.pages{
		font-size: 28upx!important;
	}
	.time {
		background: #ECECEC;
		padding: 6upx 30upx 4upx;
	}

	.avatar {
		width: 160upx;
		height: 120upx;
	}

	.f-column {
		margin: 0 20upx;
		flex: 1;
		width: 0;
		height: 120upx;
	}

	.f-row {
		border-bottom: 1upx solid #ECECEC;
	}

	.status {
		width: 100upx;
		height: 120upx;
		color: #979797;
		font-size: 28upx
	}
</style>
