<template>
	<!-- 图片上传？ -->
	<view class="">
		<u-upload :fileList="fileList1" :previewFullImage="true" @afterRead="afterRead" @delete="deletePic" name="1"
			multiple :maxCount="limit" :disabled = "disable" :deletable = "showdel">
		</u-upload>
	</view>

</template>

<script>
	export default {
		props: {
			imgk: {
				type: Number,
				default: 0
			},
			keyIndex:{ //组件的索引，用于定位到对应的父组件
				type: Number,
				default: 0
			},
			limit:{
				default:1,
				type:Number
			},
			imageArr:{
				type:Array,
				default:[]
			},
			showdel:{//删除按钮
				type:Boolean,
				default:true
			},
			disable:{ //显示功能
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				fileList1: [],
				upDown:false,//判断图片是修改
			}
		},
		created() {
			this.fileList1 = this.imageArr
			console.log(this.imageArr)
		},
		watch: {
			// fileList1(n, o) {
			// 	let images = n.map(i => i.url)
			// 	let obj={
			// 		imgk:this.imgk,images
			// 	}
			// 	this.$emit('upImgs', obj)
			// },
			imageArr(n,o){
				if(n.length!=0){
					this.fileList1 = n
				}
			},
			upDown(val,val2){
				// console.log(val,val2)
				// console.log(this.fileList1)
				let images = this.fileList1.map(i => i.url)
				let obj={
					imgk:this.imgk,images
				}
				// console.log(obj)
				this.$emit('upImgs', obj,this.keyIndex)
			}
			
		},
		methods: {
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
				this.upDown = !this.upDown
			},
			empt(){
				// console.log(111)
				this.fileList1 = []
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
				this.upDown = !this.upDown
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					const token = uni.getStorageSync('token')
					let a = uni.uploadFile({
						url: `${getApp().globalData.baseUrl}/common/user_upload`, // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						header: {
							token
						},
						success: (res) => {
							setTimeout(() => {
								// resolve(JSON.parse(res.data).data.url)
								resolve(JSON.parse(res.data).data.fullurl)
							}, 1000)
						}
					});
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
 ::v-deep .u-upload__wrap{
 	justify-content: space-between !important;
 }
</style>
