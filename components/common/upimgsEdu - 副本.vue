<template>
	<view class="">
		<u-upload :fileList="fileList1"  :previewFullImage="true" @afterRead="afterRead" @delete="deletePic" name="1"
			multiple :maxCount="5" :multiple="false">
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
			List: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				fileList1: [
					// {
     //               url: 'http://yzzc.westts.cn//uploads/user/17/attachment/3288a84b5b2e6c1b87478072137c95a3.jpg',
					// 					}
				]
			}
		},
		watch: {
			fileList1(n, o) {
				let images = n.map(i => i.url)
				console.log(images)
				let obj={
					imgk:this.imgk,images
				}
				this.$emit('upImgs', obj)
			},
			List: {
			      handler(nv, ov) {
			        // 特别注意，不能用箭头函数，箭头函数，this指向全局
			        console.log('filter changed', nv)
					this.fileList1 = nv
			      },
			      deep:true,
			      immediate:true
			    }
				  // this.fileList1 = newVal;
			      // this.username = newVal;
			
		},
		computed: {
			newImg(){
				return this.fileList;
			}
		  // fileList(){
			 //  console.log(this.fileList)
		  //     return this.fileList
		  // }
		},
		
		methods: {
			// 删除图片
			deletePic(event) {
				console.log('删除',this.fileList)
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				console.log('成功后图片',event)
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				// console.log(fileListLen)
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
								// console.log(res)
								let data =res.data;
								let full = JSON.parse(data).data
								resolve(full.fullurl)
								// console.log(full)
								// let fullurl = JSON.parse(data)
								// console.log(fullurl)
								// resolve(JSON.parse(res.data).data.fullurl)
							}, 1500)
						}
					});
				})
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>
