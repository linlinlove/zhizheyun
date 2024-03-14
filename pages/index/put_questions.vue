<template>
	<view class="vw-100 box-border plr-3">
	
		<uni-easyinput type="textarea" autoHeight v-model="textValue" maxlength="200"></uni-easyinput>
		<buttonOperation  @tapBtn='tapBtn'>
			发布
		</buttonOperation>
		<u-notify ref="uNotify"></u-notify>
	</view>
</template>

<script >
	import { addForum} from '@/request/api.js'
	import buttonOperation from '@/components/common/buttonOperation.vue'
	export default{
		components:{
			buttonOperation
		},
		data(){
			return{
				textValue:''
			}
		},
		methods:{
			tapBtn(){
				addForum({
					substance:this.textValue
				}).then(res=>{
					if (res.code == 1 && res.msg == '成功') {
						this.$refs.uNotify.success('发布成功')
						uni.$emit('answer',e=>{ //
						})
						setTimeout(function() {
							uni.switchTab({
							    url: '/pages/index/index'
							});
							// uni.$emit('nextStep', '-1')
						}, 1000);
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

	textarea{
		width: 100%;
	}
</style>