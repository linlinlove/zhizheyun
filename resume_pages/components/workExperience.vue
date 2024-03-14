<template>
	<view class="cecordAssembly box-border">
		<view class="ful f-row ai-c jc-sb">
			<view class="left-ful">

			</view>
			<view class="right-ful comom-color add1" @tap="addList()" >
				+
			</view>
		</view>
		<view class="current" v-for="(i,key) in list" :key="key">
			<u-divider :text="`工作经历${key+1}`"></u-divider>
			<view class="ful f-row ai-c jc-sb r-current">
				<view class="left-ful">
					年份
				</view>
				<view class="right-ful" @click="choiceyear(key,i.disabled)">
					<!-- <view slot="tooltip" @tap="showpicker(key)">
						<view class="title">
							{{i.year||'选择起始日期'}}
						</view>
					</view> -->
					<!-- <u-picker :show="show" v-if="!i.disabled" :columns="yarnDate" @confirm="confirm"
						@cancel='show=false'></u-picker> -->
					<view class="title">
						{{i.year||'选择年份'}}
					</view>
				</view>
			</view>
			<view class="ful f-row ai-c jc-sb r-current">
				<view class="left-ful">
					工作行业
				</view>
				<view class="right-ful">
					<input placeholder="请输入工作行业" v-model="i.industry" :disabled='i.disabled'  v-if="i.disabled"></input>
					<view class="industryList" v-else>
						<vvSelect :placeholder="i.industry||'选择所属行业'" class="select" :list="industryList" label="name" valueKey="name"
							:name="i.industry" :ref="key" @change="pickerChange" :disabled='i.disabled' :keys="key"></vvSelect>
					</view>
				</view>
			</view>
			<view class="ful f-row ai-c jc-sb r-current">
				<view class="left-ful">
					企业名称
				</view>
				<view class="right-ful">
					<input type="text" v-model="i.enterprise_name" placeholder="企业名称" :disabled='i.disabled'>
				</view>
			</view>
			<view class="ful f-row ai-c jc-sb r-current">
				<view class="left-ful">
					工作岗位
				</view>
				<view class="right-ful">
					<input type="text" v-model="i.station" placeholder="工作岗位" :disabled='i.disabled'>
				</view>
			</view>
			<view class="c-current">
				<view class="top-ful">
					工作收获
				</view>
				<view class="btm-ful pt-re">
					<uni-easyinput v-model="i.harvest" maxlength="300" type="textarea" :disabled='i.disabled'
						placeholder="请输入工作收获">
					</uni-easyinput>
				</view>
			</view>
			<view class="c-current">
				<view class="top-ful">
					自我评价
				</view>
				<view class="btm-ful pt-re">
					<uni-easyinput v-model="i.self_evaluation" maxlength="300" type="textarea" :disabled='i.disabled'
						placeholder="请输入自我评价">
					</uni-easyinput>
				</view>
			</view>
			<view class="c-current mb-2" v-if="i.feedback_json != null">
				<view class="top-ful">
					企业反馈
				</view>
				<view class="pt-re mb-2">
					<u-cell :title="k1" v-for="(i1,k1) in i.feedback_json">
						<u-rate slot="right-icon" :value="i1" activeColor='#ffc11b' readonly></u-rate>
					</u-cell>
				</view>
				<!-- <view class="btm-ful pt-re f-row ai-c jc-sb" v-for="sky in i.feedback_json" :key="i.id">
					<view class="btm-ful-left">
						{{sky.title}}
					</view>
					<view class="btm-ful-right">
						<u-rate :count="count" active-color='#ffc11b' v-model="sky.start"></u-rate>
					</view>
				</view> -->
			</view>
			<view class="">
				<view class="title">
					佐证材料（如证书、获奖证明等
				</view>
				<imgUpload @upImgs="upImgs" ref="imgUpload1" :imageArr="i.imgArr"  :limit="i.disabled?i.imgArr.length:6" :keyIndex="key" :disable='i.disabled' :showdel='!i.disabled' ></imgUpload>
			</view>
			<!-- <evidence v-if="i.type != 1" :title="'佐证材料（如证书、获奖证明等)'" :imgk='key' @upImgs='upImgs' :disabled='i.disabled'
				:showClose="false" @closeImg="closeImg">
			</evidence>
			<evidence v-else :title="'佐证材料（如证书、获奖证明等)'" :imgk='key' @upImgs='upImgs' :disabled='i.disabled'
				:imgs="i.images" :showClose="false" @closeImg="closeImg"></evidence> -->
		</view>
		<!-- <buttonOperation @tapBtn='nextStep'>
			完成
		</buttonOperation> -->
		
		<u-datetime-picker @cancel='cancel' :title='title' ref='datetimePicker' :formatter="formatter" :show="picker"
			mode="date" @confirm='confirm'></u-datetime-picker>
		<u-picker :show="show" :columns="yarnDate" @confirm="confirm" @cancel='show=false'></u-picker>
		<buttonOperation @tapBtn='appeal' :isEmptyBtn='true' v-if="isShowBtnSu">
			申诉
		</buttonOperation>
		<view class="grid">
			<view class="left_btn" @tap="worfRequestFn" v-if="isShowBtnSu2">
				保存并提交
			</view>
			<view class="right_btn" @tap="endstep">
				预览
			</view>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		timestampToTime
	} from '@/tools/common.js'
	import {
		wordOrNow,
		showWordOrNow,
		getconfig,
		eduPractical
	} from '@/request/api.js'
		import vvSelect from '@/components/vv-select/vv-select.vue'
	import buttonOperation from '@/components/common/buttonOperation.vue'
	import evidence from '@/resume_pages/components/evidence.vue'
	import imgUpload from '@/components/common/imgUpload.vue'
	export default {
		props: ['yarnDate'],
		components: {
			buttonOperation,
			evidence,
			vvSelect,
			imgUpload,
		},
		data() {
			return {
				isShowBtnSu: false,
				isShowBtnSu2: true,
				code: '',
				title: '开始时间',
				industryList: [],
				key_: null,
				picker: false,
				show: false,
				list: [{
					year: '', //年份
					industry: '', //行业
					enterprise_name: '', //企业名称
					station: '', //岗位
					harvest: '', //收获
					self_evaluation: '', //自我评价
					images: [], //佐证材料
					type_data: 1, //类型:0=实训,1=工作
				}]
			}
		},
		onReady() {
			this.$refs.datetimePicker.setFormatter(this.formatter)
		},
		created() {
			this.getindustryList()
		},
		methods: {
			upImgs(e,index) {
				console.log(e,index)
				this.list[index].images = e.images
				// console.log(this.list, 11111);
			},
			appeal() {
				eduPractical({type:1}).then(res => {
					console.log(res)
					if (res.code == 1 && res.msg == '成功') {
						this.$refs.uToast.success('已申诉,等候审核')
					}
				})
			},
			pickerChange(e, name,key) {
				// console.log(e,name,key)
				this.list[key].industry=name
			},
			async getindustryList() {
				let res = await getconfig()
				res.data.industry.forEach(item => {
					this.industryList.push({
						'name': item
					})
				})
				// console.log(this.industryList)
			},
			/* 显示选择年份弹框 */
			choiceyear() {
				if (arguments[1]) return
				this.show = true,
					this.key_ = arguments[0]
			},
			closeImg(e){//删除佐证材料
				
			},
			// upImgs(e) {
			// 	// console.log(e)
			// 	this.list[e.imgk].images = e.images
			// },
			cancel() {
				this.title = '开始时间',
					this.list[this.key_].year = ''
				this.key_ = null,
					this.picker = false
			},
			showpicker(k) {
				this.key_ = k
				this.picker = true
			},
			/* 单个时间 */
			confirm(e) {
				this.list[this.key_].year = e.value[0]
				this.show = false
			},
			/* 时间段 */
			/* 	confirm(e) {
					if (this.title == '开始时间') {
						this.list[this.key_].year = timestampToTime(e.value)
						this.title = '结束时间'
					} else {
						this.list[this.key_].year = this.list[this.key_].year + '/' + timestampToTime(e.value)
						this.title = '开始时间'
						this.picker = false
						console.log(this.list[this.key_].year);
					}
				}, */
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`
				}
				if (type === 'month') {
					return `${value}月`
				}
				if (type === 'day') {
					return `${value}日`
				}
				return value
			},
			nexstep() {
				// uni.$emit('nextStep', '-1')
				uni.navigateTo({
					url:'/resume_pages/entrepreneurData/entrepreneurData?type=preview'
				})
			},
			endstep(){
				uni.navigateTo({
					url:'/resume_pages/cecord_look/cecord_look',
					
				});
				console.log('预览');
			},
			emptData() {

			},
			addList() {
				this.isShowBtnSu2 = true
				this.isShowBtnSu = false
				let obj = {
					year: '', //年份
					industry: '', //行业
					enterprise_name: '', //企业名称
					station: '', //岗位
					harvest: '', //收获
					self_evaluation: '', //自我评价
					images: [], //佐证材料
					type_data: 1,
					imgArr:[]
				}
				this.list.push(obj)
			},
			verification() {
				let data = this.list
				let lastIndex = data.length - 1
				let lastData = data[lastIndex]
				console.log(lastData)
				let isFail = true;
				if (lastData.year == '' || lastData.industry == '' || lastData.enterprise_name == '' || lastData.station ==
					'' || lastData.harvest == '' ||
					lastData.self_evaluation == '') {
					isFail = false
					this.$refs.uToast.show({
						type: 'error',
						icon: false,
						title: '失败主题',
						message: "请完善信息",
					})
				}
				return isFail;
			},
			worfRequestFn() {
				let isTrue = this.verification();
				// console.log(isTrue)
				this.list.map(item=>{
					// console.log(item.images)
					// if(item.images!=null&item.length!=0&item.images!=''){
					// 	item.images = item.images.join(",")
					// }
					delete item.imgArr
					item['images'] = item.images.toString()
				})
				// console.log(this.list)
				// debugger
				// console.log(this.list)
				if (isTrue) {
					wordOrNow({
						data: this.list
					}).then(res => {
						if (res.code == 1) {
							uni.$u.toast('提交成功！')
							this.page = 1
							// uni.$emit('showMyPop')
							this.showData()
						} else {
							uni.$u.toast('提交失败，请重试！')
						}
					})
				}
			},
			showData() {
				this.list = [{
					year: '', //年份
					industry: '', //行业
					enterprise_name: '', //企业名称
					station: '', //岗位
					harvest: '', //收获
					self_evaluation: '', //自我评价
					images: [], //佐证材料
					type_data: 1, //类型:0=实训,1=工作
					imgArr:[]
				}]
				showWordOrNow({
					page: this.page,
					type_data: 1
				}).then(res => {
					// res.data.data.forEach(i => i.disabled = true)
					if(res.data.data.length == 0){
						return false
					}
					this.code = res.data.edu_data
					console.log(this.code,999)
					if (res.data.edu_data == 1 || res.data.edu_data == 2) {
						this.isShowBtnSu = true
					} else {
						this.isShowBtnSu = false
					}
					if (res.data.edu_data == 4 || res.data.edu_data == 3) {
						this.isShowBtnSu2 = true
						this.isShowBtnSu = false
					} else {
						this.isShowBtnSu2 = false
					}
					res.data.data.forEach(i => {
						this.code == 3 || this.code == 4 ? i.disabled = false : i.disabled = true
						let arr = []
						if(i.images.length != 0 ){
							i.images.forEach(el=>{
								 arr.push({
									 url: el
								 })
							})
							i['imgArr'] = arr
						}
					})
					this.list = res.data.data
					// this.list.unshift(...res.data.data)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.right_btn {
		background: #FFFFFF;
		border: 1upx solid #157DFA;
		border-radius: 20upx;
		color: #157DFA;
		flex: 1;
	}

	.add1 {
		font-size: 60rpx;
		height: 100%;
		width: 80px;
		text-align: right;
	}

	.left_btn {
		background: #157DFA;
		border-radius: 20upx;
		color: #FFFFFF;
		width: 350upx;
		margin-right: 32upx;
	}

	.grid {
		margin-top: 50upx;
		font-size: 28upx;
		line-height: 84upx;
		text-align: center;
		padding: 0 32rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		height: 84upx;
		z-index: 99;

	}

	.cecordAssembly {
		padding: 30upx;
	}

	.r-current {
		border-bottom: 1upx solid #ECECEC;
		padding: 20upx 0;
	}

	.comom-color {
		color: $common-color;
	}

	.right-ful {
		text-align: right;
	}

	.top-ful {
		padding: 20upx 0;
	}

	.r-current {
		border-bottom: 1upx solid #ECECEC;
		padding: 20upx 0;
	}

	.btm-ful-left {
		color: #979797;
		line-height: 40upx;
	}

	.title {
		color: #979797;
		padding: 20rpx 0;
	}
</style>
