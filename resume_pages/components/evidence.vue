<template>
	<view class="">
		<view class="title mb-2">
			{{title}}
		</view>
		<view class="imgsList" v-if="imgs.length>0||disabled">
		   <view class="Img-container"  v-for="(i,k) in imgs" style="display: inline-block;">
				<u-icon name="close-circle" v-if="showClose" @click="closeImg(i)"></u-icon>
				<image :src="i" mode="" @tap="previewImageFn(k)" :key="k"></image>
		   </view>
		</view>
		<upImgs v-else @upImgs='upImgsFn' :imgk='imgk'></upImgs>
	</view>
</template>

<script>
	import upImgs from '@/components/common/upimgs.vue'
	export default{
		props:{
			
			title:{
				type:String,
				default:''
			},
			imgk:{
				type:Number,
				default:0
			},
			/* 图片渲染 */
			imgs:{
				type:Array,
				default:[]
			},
			disabled:{
				type:Boolean,
				default:false
			},
			showClose:{
				type:Boolean,
				default:false
			}
		},
		onReady() {
			console.log(this.imgs)
		},
		components:{
			upImgs
		},
		methods:{
			closeImg(index){
				this.imgs.splice(index, 1); 
				this.$emit('closeImg', this.imgs)
				// this.upImgsFn(this.imgs)
				
			},
			upImgsFn(e){
				this.$emit('upImgs', e)
			},
			previewImageFn(i){
				uni.previewImage({
					urls: this.imgs,
					current:i
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.title {
		font-size: 24upx;
		color: #4F4F4F;
	}
	.imgsList{
		image{
			width: 200upx;
			height: 200upx;
			margin-right: 30upx;
			border-radius: 10upx;
		}
	}
</style>