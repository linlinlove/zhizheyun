<template>
	<view class="box-border">
		<u-sticky bgColor="#fff">
			<u-tabs :list="table" :current='tabIndex' :scrollable='false' @change="selectTab"></u-tabs>
		</u-sticky>
		<basicInfo v-show="tabIndex==0" ref="bas"></basicInfo>
		<educationExperience v-show="tabIndex==1" ref="edu" :hideSensitiveInfo="true"></educationExperience>
		<actualExperience v-show="tabIndex==2" :yarnDate='yarnDate' ref="act" :hideSensitiveInfo="true"></actualExperience>
		<workExperience v-show="tabIndex==3" :yarnDate='yarnDate' ref="wor"></workExperience>
		<centerShow :showPop="showCenter" @refuse="refuse" @submit="subTel" :tip='tip' :showqx="true">
		</centerShow>
	</view>
</template>

<script>
	import basicInfo from '@/resume_pages/components/basicInfo.vue'
	import educationExperience from '@/resume_pages/components/educationExperience.vue'
	import actualExperience from '@/resume_pages/components/actualExperience.vue'
	import workExperience from '@/resume_pages/components/workExperience.vue'
	import centerShow from '@/components/common/centerShow.vue'
	import {
		getpop,practicalPop
	} from '@/request/api.js'
	export default {
		components: {
			basicInfo,
			educationExperience,
			actualExperience,
			workExperience,
			centerShow
		},
		data() {
			return {
				tip: '您已超过90天未更新信息',
				showCenter: false,
				table: [{
					name: '基本信息',
				}, {
					name: '工作经历',
				}],
				tabIndex: 0,
				yarnDate: []
			}
		},
		watch: {
			tabIndex(n, o) {
				if (n == 1) {
					this.$refs.edu.showseeedu()
				} else if (n == 2) {
					this.$refs.act.showData()
				} else if (n == 3) {
					this.$refs.wor.showData()
				} else if (n == 0) {
					this.$refs.bas.getDetail()
				}
			}
		},
		onLoad() {
			this.setdate()

			/* 下一步 */
			uni.$on('nextStep', val => {
				if (val == '-1') {
					this.tabIndex = this.tabIndex - 1
				} else {
					this.tabIndex = this.tabIndex + 1
				}
			})
			uni.$on('showMyPop', val => {
				this.showMyPop()
			})
			/* 首次进来 获取基本信息 */
			this.$refs.bas.getDetail()


		},
		methods: {
			showMyPop(){
				this.tip = '请在我的求职发布中查看保存的信息！';
				this.showCenter = true
			},
			async getpop() {
				let res = await getpop()
				// console.log(res.data)
				if (res.data) {
					this.tip = res.msg;
					this.showCenter = true
				}
			},
			async getPracticalPop() {
				let type={
					type:this.tabIndex == 2?0:1
				}
				let res = await practicalPop(type)
				// console.log(res.data)
				if (res.data) {
					this.tip = res.msg;
					this.showCenter = true
				}
			},
			refuse() {
				this.showCenter = false
			},
			async subTel() {
				this.showCenter = false
			},
			selectTab(e) {
				this.tabIndex = e.index
				if(this.tabIndex == 1){
					this.getpop()
				}else if(this.tabIndex == 2||this.tabIndex == 3){
					this.getPracticalPop()
				}
			},

			/* 设置年份 */
			setdate() {
				let data_ = new Date().toISOString().slice(0, 10).split('-')[0]
				let data = Number(data_)
				let i_ = 10
				let arr = []
				arr.push(data)
				for (var i = 1; i < i_; i++) {
					arr.unshift(data - i)
				}
				for (var i = 1; i < i_; i++) {
					arr.push(data + i)
				}
				/* 	arr.forEach(r=>{
						r=r.toString()
					}) */
				this.yarnDate.push(Array.from(arr))
				console.log(this.yarnDate);
			}
		}
	}
</script>

<style lang="scss" scoped>
/* 根容器样式 */
.box-border {
  padding: 20px;
}

/* u-tabs 样式 */
.u-tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}

.u-tabs .u-tab-item {
  flex: 1;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}

.u-tabs .u-tab-item.active {
  color: #333;
}

/* basicInfo 样式 */
.basicInfo {
  margin-top: 20px;
}

.basicInfo .input-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.basicInfo .input-item label {
  width: 100px;
  text-align: right;
  margin-right: 20px;
}

.basicInfo .input-item input {
  flex: 1;
  height: 30px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* educationExperience 样式 */
.educationExperience {
  margin-top: 20px;
}

.educationExperience .edu-item {
  margin-bottom: 10px;
}

.educationExperience .edu-item h3 {
  margin-bottom: 5px;
  font-size: 16px;
}

.educationExperience .edu-item p {
  margin-bottom: 5px;
  font-size: 14px;
  color: #666;
}

/* actualExperience 样式 */
.actualExperience {
  margin-top: 20px;
}

.actualExperience .act-item {
  margin-bottom: 10px;
}

.actualExperience .act-item h3 {
  margin-bottom: 5px;
  font-size: 16px;
}

.actualExperience .act-item p {
  margin-bottom: 5px;
  font-size: 14px;
  color: #666;
}

/* workExperience 样式 */
.workExperience {
  margin-top: 20px;
}

.workExperience .work-item {
  margin-bottom: 10px;
}

.workExperience .work-item h3 {
  margin-bottom: 5px;
  font-size: 16px;
}

.workExperience .work-item p {
  margin-bottom: 5px;
  font-size: 14px;
  color: #666;
}

/* centerShow 样式 */
.centerShow {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
}

.centerShow .tip {
  margin-bottom: 20px;
  font-size: 16px;
}

.centerShow .btn {
  display: inline-block;
  padding: 5px 10px;
  background-color: #ccc;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

.centerShow .btn:hover {
  background-color: #999;
}
</style>

