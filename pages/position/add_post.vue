<template>
	<!-- 职位页加求职类型 -->
	<view class="">
		<view class="plr-2">
			<view class="bor-btm f-row ai-c jc-sb">
				<view class="">
					求职类型
				</view>
				<view class="" @tap="positionShow=true">
					{{evaluationType}}
				</view>
			</view>
			<view class="bor-btm f-row ai-c jc-sb">
				<view class="">
					城市
				</view>
				<view class="" @tap="clickCity">
					{{city.name||'选择城市'}}
				</view>
			</view>
			<view class="bor-btm f-row ai-c jc-sb">
				<view class="">
					期望职位
				</view>
				<view class="" @tap="choicePositon">
					{{position}}
				</view>
			</view>
			<view class="bor-btm f-row ai-c jc-sb">
				<view class="">
					薪资要求
				</view>
				<view @click="salaryShow = true">
					{{currentSalary}}
				</view>
			</view>
			<view class="bor-btm f-row ai-c jc-sb">
				<view class="">
					行业选择
				</view>
				<view>
					{{industry}}
				</view>
			</view>
			<view class="bor-btm f-row ai-c jc-sb">
				<view class="">
					企业信息
				</view>
				<view>
					{{company_inform}}
				</view>
			</view>
			<view class="bor-btm f-row ai-c jc-sb">
				<view class="">
					学历要求
				</view>
				<view>
					{{educational}}
				</view>
			</view>
			<view class="bor-btm f-row ai-c jc-sb">
				<view class="">
					经验要求
				</view>
				<view>
					{{experience}}
				</view>
			</view>
		</view>
		<u-action-sheet :actions="positonList" @select="selectPosition" :closeOnClickOverlay="true"
			:closeOnClickAction="true" :show="positionShow"></u-action-sheet>
		<u-picker :show="salaryShow" :immediateChange='true' :closeOnClickOverlay="true" :columns="columns"
			@confirm="confirm" @change="changeHandler" ref="uPicker" @cancel="cancel">
		</u-picker>
		<view class="btn-box" v-if="!isChoice">
			<buttonOperation @tapBtn='rightAdd'>
				立即添加
			</buttonOperation>
		</view>
		<!-- <u-select @confirm="confirm" mode="mutil-column-auto" v-model="salaryShow" :list="salaryList"></u-select>
		<u-action-sheet :list="positonList" v-model="positionShow" @click="clickPosition"></u-action-sheet> -->
	</view>

</template>

<script>
	import {
		addexpect
	} from '@/request/api.js'
	import salaryList from '@/tools/salaryList.js'
	import buttonOperation from '@/components/common/buttonOperation.vue'
	import {
		log
	} from 'util'
	export default {
		components: {
			buttonOperation
		},
		data() {
			return {
				columns: [],
				columnData: [],
				positonList: [{
					name: '全职'
				}, {
					name: '实训'
				}],
				evaluationType: '请选择',
				positionShow: false,
				city: null,
				salaryShow: false,
				currentSalary: '请选择',
				position: '请选择',
				industry:"请选择",
				company_inform:"请选择",
				educational:"请选择",
				experience:"请选择",
				min_money: null,
				max_money: null,
				industry_details:null
			}
		},
		onShow() {
			this.getData()
			// console.log(this.columns)
		},
		methods: {
			getData(){
				/* 工资数据 */
				console.log(11)
				this.columns = []
				this.columns.push(salaryList.columnsArr);
				this.columnData = salaryList.columnDataArr;
				this.columns.push(this.columnData[0])
				 // console.log(this.columns)
				/* 期望城市 */
				uni.$on('wantCity', e => {
					this.city = e
				})
				/* 期望职位 */
				uni.$on('expectedPosition', e => {
					this.position = e
				})
				uni.$on('expectedPost', e => {
					this.industry_details = e
				})
			},
			cancel(){
				// console.log(111)
				this.getData()
				this.salaryShow = false;
			},
			/* 立即添加 */
			rightAdd() {
				if (this.position == '请选择') {
					uni.$u.toast('请选择期望职位')
					return;
				}
				addexpect({
					type: this.evaluationType,
					city: this.city?.name,
					position: this.position,
					industry_details: this.industry_details,
					min_money: this.min_money,
					max_money: this.max_money,
				}).then(res => {
					if (res.code == 1) {
						uni.$u.toast('添加成功')
						uni.$emit('addPost')
						setTimeout(()=>{
							// uni.switchTab({
							// 	url: '/pages/position/position'
							// })
							uni.navigateBack({
								delta:1,//返回层数，2则上上页
							})
						},1500)
					}
				})
			},
			/* 选择薪资 */
			confirm(e) {
				this.min_money = e.value[0]
				this.max_money = e.value[1]
				this.currentSalary = `${e.value[0]}-${e.value[1]}`
				this.getData()
				this.salaryShow = false
			},
			/* 选择薪资 */
			changeHandler(e) {
				const {
					columnIndex,
					value,
					values, // values为当前变化列的数组内容
					index,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
					picker = this.$refs.uPicker
				} = e
				// 当第一列值发生变化时，变化第二列(后一列)对应的选项
				if (columnIndex === 0) {
					// picker为选择器this实例，变化第二列对应的选项
					// console.log( this.columnData[index])
					picker.setColumnValues(1, this.columnData[index])
				}
			},
			/* 点击求职类型 */
			selectPosition(i) {
				this.evaluationType = i.name
				this.positionShow = false
			},
			/* 点击选择城市 */
			clickCity() {
				uni.navigateTo({
					url: '/pages/index/change_city?type=' + "jobWanted"
				})
			},
			/* 选择岗位 */
			choicePositon() {
				uni.navigateTo({
					url: '/resume_pages/job_classification/job_classification'
				})
			},

		}
	}
</script>

<style scoped>
	.btn-box {
		position: fixed;
		bottom: 50upx;
		left: 50%;
		transform: translateX(-50%);
		width: 90vw;
	}
</style>
