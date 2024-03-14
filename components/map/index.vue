<template>
	<map class="map" :markers='markers' :longitude='longitude' :latitude='latitude' @tap="mapDetail"></map>
</template>
<script>
	export default {
		props: {
			latitude: {
				default: 30.66311,
				type: Number
			},
			longitude: {
				default: 104.07411,
				type: Number
			}
		},
		data() {
			return {
				// key: '7M2BZ-DCXLQ-2MU5R-GJY4W-2S43F-6IFD4', 	
				key: 'M5DBZ-CMQEX-ZAT47-ZDVE7-A2HRH-NUFQL',
				markers: null,
				name: null,
				address: null
			}
		},
		onLoad() {
			console.log(888);
		},
		watch: {
			latitude(n, o) {
				this.getLoacl()
			}
		},
		methods: {
			/* marker设置 */
			setMarker() {
				this.markers = [{
					id: 1,
					latitude: this.latitude,
					longitude: this.longitude,
					iconPath: '/static/logo.png',
					width: 20,
					height: 20,
					callout: {
						content: this.address,
						color: "#000",
						fontSize: 12,
						display: 'ALWAYS',
						borderColor: '#fff',
						borderWidth: 10,
						borderRadius: 5
					}
				}]
			},
			/* 地图详情 */
			mapDetail() {
				this.getLoacl()
				uni.openLocation({
					latitude: this.latitude,
					longitude: this.longitude,
					address: this.address,
					name: this.name,
					scale: 18
				})
			},
			/* 获取详细位置 */
			getLoacl() {
				uni.request({
					url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${this.latitude},${this.longitude}&key=${this.key}`,
					success: res => {
						console.log(res, 1555);
						this.address = res.data.result.address
						this.name = res.data.result.ad_info.name
						this.setMarker()
					}
				})
			}
		}
	}


	/* 	await getLoacl()
		await setMarker() */
</script>
<style lang="scss" scoped>
	.map {
		width: 100%;
		height: 100%;
	}
</style>
