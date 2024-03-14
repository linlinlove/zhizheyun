<template>
	<view class="">
		<u-upload :fileList="fileList1" :previewFullImage="true" @afterRead="afterRead" @delete="deletePic" name="1"
			 :maxCount="5" :multiple="false">
		</u-upload>
	</view>

</template>

<script>
	export default {
		props: {
			imgk: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				fileList1: []
			}
		},
		watch: {
			fileList1(n, o) {
				let images = n.map(i => i.url)
				let obj={
					imgk:this.imgk,images
				}
				this.$emit('upImgs', obj)
			}
		},
		methods: {
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
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

</style>
