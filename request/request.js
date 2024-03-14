
import beaeUrl from './baseUrl '

function request({method, url, data}) {
	const token = uni.getStorageSync('token')
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中',mask:true
		});
		wx.request({
			url: beaeUrl + url,
			data,
			header: {
				token
			},
			method,
			success(res) {
				uni.hideLoading();
				switch (res.statusCode) {
					case 200:
						if (res.data.code == 1) {
							resolve(res.data)
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								duration: 1500
							})
						}
						break;
					case 401:
						uni.showToast({
							title: res.data.msg,
							duration: 1500,
							icon: 'none',
							success: () => {
								// uni.clearStorage()
								uni.removeStorageSync('token')
								setTimeout(()=>{
									uni.reLaunch({
										url: '/pages/my/my'
									})
								},1500)
							},
							/* 
							 userInfoStore
							 */
						})
						break;
					case 404:
						uni.showToast({
							title: '服务器错误',
							duration: 1500,
							icon: 'none'
						})
						break;
					case 500:
						uni.showToast({
							title: '服务器错误',
							duration: 1500,
							icon: 'error'
						})
						break;
				}
			},
			fail(err) {
				console.log(err)
				uni.hideLoading();
				uni.showToast({
					title: err,
					duration: 1500,
					icon: 'none'
				})
				resolve(false)
			}
		})
	})
}

export default request;
