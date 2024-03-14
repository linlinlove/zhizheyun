<template>
	<view class="vw-100 box-border">
	
			<u-search :showAction="true" :clearabled="false" actionText="搜索" placeholder="请输入城市名称" :animation="true" @custom='tapSerachIcon()'></u-search>
		<view class="current">
			<view class="index-box f-column ai-c jc-sb">
				<view :class="['index',initIndex==i?'active':'']" @tap="choiceIndex(i)" v-for="(i,k) in indexList"
					:key='k'>
					{{i}}
				</view>
			</view>
			<view class="all-box" v-for="i in cityslist" :key='i.letter'>
				<view class="bor-btm" :id='i.letter'>
					{{i.letter}}
				</view>
				<view class="bor-btm" @tap="choiceCity(item)" :id='item.city_id' v-for="item in i.data"
					:key="item.city_id">
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import serachInput from '@/components/common/serachInput.vue'
	import {
		cityslistData
	} from '@/tools/citys.js'
	export default {
		components: {
			serachInput
		},
		data() {
			return {
				serachValue: '',
				cityslist: [],
				initIndex: '',
				indexList: [],
				type: null,
				list:[]
			}
		},
		onLoad(e) {
			this.type = e.type
			this.cityslist = cityslistData.list

			this.cityslist.forEach(i => {
				this.indexList.push(i.letter)
			})
			this.list = this.cityslist
			this.initIndex = this.indexList[0]
		},
		methods: {
			/* 搜索 */
			custom(e){
				console.log(e);
			},
			/* 点击索引 */
			choiceIndex(e) {
				this.initIndex = e
				console.log(e)
				uni.createSelectorQuery().select(`#${e}`).boundingClientRect(data => { //目标位置的节点：类class或者id
					uni.createSelectorQuery().select(".all-box").boundingClientRect(res => { //最外层盒子的节点：类class或者id
						uni.pageScrollTo({
							duration: 1000, //过渡时间
							scrollTop: data.top - res.top + 30 //到达距离顶部的top值 根据自己情况可调
						})
					}).exec()
				}).exec();
			},
			/* 点击搜索按钮 */
			tapSerachIcon(e) {
				console.log(e)
				if (e!= '' || e) {
					let newList = []
					for (let i = 0; i < this.list.length; i++) {
						for (let j = 0; j < this.list[i].data.length; j++) {
							let _value = this.list[i].data[j].name
							if (_value.indexOf(e) >= 0) {

								let obj = {
									letter: this.list[i].letter,
									data: [this.list[i].data[j]]
								}
								this.choiceIndex(this.list[i].letter)
								newList.push(obj)
							}
						}
					}
					this.cityslist = newList
				} else {
					this.cityslist = cityslistData.list
				}
			},
			/* 点击城市 */
			choiceCity(e) {
				if (this.type == 'local') {
					uni.$emit('setCity', e)
				} else if (this.type == "jobWanted") {
					uni.$emit('wantCity', e)
				}
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.current {
		padding: 0 30upx;
	}



	.index-box {
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
		right: 20upx;
		height: 80vh;
		padding: 0;
		color: #BABABA;
		z-index: 99;
	}

	.active {
		color: $common-color !important;
	}

	.index {
		font-size: 28upx;
		font-weight: 500;
		line-height: 28upx;
		padding: 0 10upx;
	}

	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 20upx 24rpx;
		overflow: hidden;
		color: #323233;
		font-size: 28upx;
		line-height: 48upx;
		background-color: #fff;
	}
</style>
