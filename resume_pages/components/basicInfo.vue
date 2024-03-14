<template>
	<view class="cecordAssembly p-3 box-border">
		<u--form :model="form" ref="uForm">
			<u-form-item label="姓名" prop="name" borderBottom :required='true'>
				<u-input v-model="form.name" border="none"
				 clearable inputAlign='right' placeholder="请输入姓名"
					placeholderClass='cecordAssembly_u' />
			</u-form-item>
			<u-form-item label="年龄" prop="age" borderBottom :required='true'>
				<u--input v-model="form.age"   border="none" type="number" clearable inputAlign='right'
					placeholder="请输入年龄" placeholderClass='cecordAssembly_u' />
			</u-form-item>
			<u-form-item  :labelPosition="'top'" label="性别" @click="choicegender" prop="gender" borderBottom class="gender" :required='true'>
				<div style="display:flex;justify-content:flex-end;">
					<div style="flex:3"></div>
					<u-radio-group v-model="form.gender"  placement="row" >
						<u-radio activeColor="green" label="男" name="男"></u-radio>
						<u-radio activeColor="green" label="女" name="女"></u-radio>
					</u-radio-group>
					
				</div>
				<!-- <u-input v-model="form.gender" border="none" clearable inputAlign='right' placeholder="请选择性别"
					placeholderClass='cecordAssembly_u' /> -->
							
					
					<!-- <view class="cu-item animation-slide-bottom" :style="[{animation: 'show ' + 0.4+ 's 1'}]">
										<view class="action">
											<text class="text-grey">{{info.sex | formatSex}}</text>
										</view>
									</view> -->
					<!-- <u-select v-model="form.gender" :list="sexlist" @confirm="sexconfirm" default-value="男">
					</u-select> -->
			</u-form-item>
			<u-form-item v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'" label="学号" prop="sno" borderBottom>
			  <u-input placeholderClass='cecordAssembly_u' v-model="form.sno" border="none" clearable
			    inputAlign='right' placeholder="请输入学号" />
			</u-form-item>

			<u-form-item v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'" label="学校" prop="school_name" borderBottom :required='true'>
				<u-input v-model="form.school_name"   placeholderClass='cecordAssembly_u' border="none" clearable
					inputAlign='right' placeholder="请输入学校名称" />
			</u-form-item>
			<u-form-item v-if="selectedOccupation === '创业者'" label="毕业院校" prop="school_name" borderBottom :required='true'>
				<u-input v-model="form.school_name"   placeholderClass='cecordAssembly_u' border="none" clearable
					inputAlign='right' placeholder="请输入学校名称" />
			</u-form-item>
			<u-form-item v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'"  label="院系" prop="department" borderBottom :required='true'>
				<u-input v-model="form.department" border="none"   clearable inputAlign='right' placeholder="请输入院系"
					placeholderClass='cecordAssembly_u' />
			</u-form-item>
			<u-form-item v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'|| selectedOccupation === '创业者'" label="专业" prop="major" borderBottom :required='true'>
				<u-input v-model="form.major" placeholderClass='cecordAssembly_u' border="none" clearable  
					inputAlign='right' placeholder="专业" />
			</u-form-item>
			<u-form-item v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'"  label="年级" prop="grade" borderBottom  :required='true'>
				<u-input v-model="form.grade" placeholderClass='cecordAssembly_u' border="none" clearable  
					inputAlign='right' placeholder="请输入年级" />
			</u-form-item>
			<u-form-item v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'" label="入学时间" prop="entrance_time" borderBottom :required='true'>
				<u-input disabledColor='#fff' v-model="form.entrance_time" border="none" 
					disabled="true" eholderClass='cecordAssembly_u' @tap='choiceStartTime' clearable inputAlign='right'  
					placeholder="请选择入学时间" />
				<u-datetime-picker ref='datetimePicker' :formatter="formatter" :show="entrance_time_show" mode="date"
					@confirm='confirm_enter' @cancel='entrance_time_show=false'></u-datetime-picker>
			</u-form-item>
			<u-form-item v-if="selectedOccupation === '失业人员' " label="失业时间" prop="entrance_time" borderBottom :required='true'>
				<u-input disabledColor='#fff' v-model="form.entrance_time" border="none" 
					disabled="true" eholderClass='cecordAssembly_u' @tap='choiceStartTime' clearable inputAlign='right'  
					placeholder="请选择失业时间" />
				<u-datetime-picker ref='datetimePicker' :formatter="formatter" :show="entrance_time_show" mode="date"
					@confirm='confirm_enter' @cancel='entrance_time_show=false'></u-datetime-picker>
			</u-form-item>
			<u-form-item  v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'"  label="毕业时间" prop="grade_time" borderBottom :required='true'>
				<u-input disabledColor='#fff'  disabled="true" @tap='choiceEndTime' placeholder="请选择毕业时间"  
					placeholderClass='cecordAssembly_u' v-model="form.grade_time" border="none" clearable
					inputAlign='right' />
				<u-datetime-picker ref='datetimePicker' :formatter="formatter" :show="grade_time_show" mode="date"
					@confirm='confirm_grade' @cancel='grade_time_show=false'></u-datetime-picker>
			</u-form-item>
			<u-form-item label="联系方式" prop="mobile" borderBottom :required='true'>
				<u-input placeholderClass='cecordAssembly_u' type="number" v-model="form.mobile" border="none" clearable  
					inputAlign='right' placeholder="请输入联系方式" />
			</u-form-item>
			<u-form-item  v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'|| selectedOccupation === '残疾人'" label="身份证号码" prop="IDCard" borderBottom>
				<u-input placeholderClass='cecordAssembly_u' type="idcard" v-model="form.IDCard" border="none" clearable  
					inputAlign='right' placeholder="请输入身份证号码" />
			</u-form-item>
			<u-form-item  v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'" label="身高(cm)" prop="height" borderBottom>
				<u-input placeholderClass='cecordAssembly_u' type="number" v-model="form.height" border="none" clearable  
					inputAlign='right' placeholder="请输入身高(cm)" />
			</u-form-item>
			<u-form-item  v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'"label="体重(斤)" prop="weight" borderBottom>
				<u-input placeholderClass='cecordAssembly_u' type="number" v-model="form.weight" border="none" clearable  
					inputAlign='right' placeholder="请输入体重(斤)" />
			</u-form-item>
			<u-form-item  v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'" label="籍贯" prop="native" borderBottom :required='true'>
				<u-input placeholderClass='cecordAssembly_u' v-model="form.native" border="none" clearable  
					inputAlign='right' placeholder="请输入籍贯" />
			</u-form-item>
			<u-form-item  v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'" label="民族" prop="nation" borderBottom>
				<u-input placeholderClass='cecordAssembly_u' v-model="form.nation" border="none" clearable  
					inputAlign='right' placeholder="请输入民族" />
			</u-form-item>
			<u-form-item  v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'" label="政治面貌" prop="political" borderBottom>
				<u-input placeholderClass='cecordAssembly_u' v-model="form.political" border="none" clearable  
					inputAlign='right' placeholder="请输入政治面貌" />
			</u-form-item>
			<u-form-item  v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'" label="特长" prop="specialty" borderBottom>
				<u-input placeholderClass='cecordAssembly_u' v-model="form.specialty" border="none" clearable 
					inputAlign='right' placeholder="请输入特长" />
			</u-form-item>
			<u-form-item label="求职期望" prop="" borderBottom>
				<!-- <navigator placeholderClass='cecordAssembly_u' open-type="navigate" url="/pages/position/add_post">设置</navigator> -->
				<u-input placeholderClass='cecordAssembly_u' border="none" clearable inputAlign='right' placeholder="设置" @tap="addFn"/>
			</u-form-item>
			<u-form-item  v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'|| selectedOccupation === '失业人员'" label="现所在地" prop="now_place" borderBottom>
				<u-input placeholderClass='cecordAssembly_u' v-model="form.now_place" border="none" clearable 
					inputAlign='right' placeholder="请输入现所在地" />
			</u-form-item>
			<u-form-item v-if="selectedOccupation === '40.50灵活就业人群'"  label="户籍所在地" prop="now_place" borderBottom>
				<u-input placeholderClass='cecordAssembly_u' v-model="form.now_place" border="none" clearable 
					inputAlign='right' placeholder="请输入现所在地" />
			</u-form-item>
			<u-form-item :labelPosition="'top'" label="是否参加养老保险" v-if="selectedOccupation === '40.50灵活就业人群'"  @click="choicebaoxian" prop="baoxian" borderBottom class="gender" :required='true'>
			  <div style="display:flex;justify-content:flex-end;">
			    <div style="flex:3"></div>
			    <u-radio-group v-model="form.baoxian" placement="row">
			      <u-radio activeColor="green" label="是" name="是"></u-radio>
			      <u-radio activeColor="green" label="否" name="否"></u-radio>
			    </u-radio-group>
			  </div>
			</u-form-item>
			
			<u-form-item v-if="form.baoxian === '是'" label="养老保险时间" prop="entrance_time" borderBottom :required='true'>
			  <u-input disabled-color='#fff' v-model="form.entrance_time" border="none" 
			    disabled placeholderClass='cecordAssembly_u' @tap='choiceStartTime' clearable inputAlign='right'  
			    placeholder="请选择养老保险时间" />
			  <u-datetime-picker ref='datetimePicker' :formatter="formatter" :show="entrance_time_show" mode="date"
			    @confirm='confirm_enter' @cancel='entrance_time_show=false'></u-datetime-picker>
			</u-form-item>
			
			<u-form-item :labelPosition="'top'" label="是否参加医疗保险"  v-if="selectedOccupation === '40.50灵活就业人群'" @click="choiceylbaoxian" prop="ylbaoxian" borderBottom class="gender" :required='true'>
			  <div style="display:flex;justify-content:flex-end;">
			    <div style="flex:3"></div>
			    <u-radio-group v-model="form.ylbaoxian" placement="row">
			      <u-radio activeColor="green" label="是" name="是"></u-radio>
			      <u-radio activeColor="green" label="否" name="否"></u-radio>
			    </u-radio-group>
			  </div>
			</u-form-item>
			
			<u-form-item v-if="form.ylbaoxian === '是'" label="医疗保险时间" prop="entrance_time" borderBottom :required='true'>
			  <u-input disabledColor='#fff'  disabled="true" @tap='choiceEndTime' placeholder="请选择时间"
			  	placeholderClass='cecordAssembly_u' v-model="form.grade_time" border="none" clearable
			  	inputAlign='right' />
			  <u-datetime-picker ref='datetimePicker' :formatter="formatter" :show="grade_time_show" mode="date"
			  	@confirm='confirm_grade' @cancel='grade_time_show=false'></u-datetime-picker>
			</u-form-item>
			
			<u-form-item :labelPosition="'top'" v-if="selectedOccupation === '40.50灵活就业人群'" label="是否持有《就业失业登记证》" @click="choiceylbaoxian" prop="dengji" borderBottom class="gender" :required='true'>
			  <div style="display:flex;justify-content:flex-end;">
			    <div style="flex:3"></div>
			    <u-radio-group v-model="form.dengji" placement="row">
			      <u-radio activeColor="green" label="是" name="是"></u-radio>
			      <u-radio activeColor="green" label="否" name="否"></u-radio>
			    </u-radio-group>
			  </div>
			</u-form-item>
			<u-form-item  v-if="selectedOccupation === '残疾人'" label="残疾证号" prop="sno" borderBottom>
				<u-input placeholderClass='cecordAssembly_u'   v-model="form.sno" border="none" clearable
					inputAlign='right' placeholder="请输入残疾证号" />
			</u-form-item>
			<u-form-item  v-if="selectedOccupation === '残疾人'" label="残疾类别" prop="name" borderBottom :required='true'>
				<u-input v-model="form.name" border="none"
				 clearable inputAlign='right' placeholder="请输入残疾类别"
					placeholderClass='cecordAssembly_u' />
			</u-form-item>
			<u-form-item v-if="selectedOccupation === '残疾人'" label="残疾等级" prop="name" borderBottom :required='true'>
				<u-input v-model="form.name" border="none"
				 clearable inputAlign='right' placeholder="请输入残疾等级"
					placeholderClass='cecordAssembly_u' />
			</u-form-item>

			
			<u-form-item  label="求职岗位" prop="now_place" borderBottom>
				<u-input placeholderClass='cecordAssembly_u' v-model="form.now_place" border="none" clearable 
					inputAlign='right' placeholder="您的求职岗位" />
			</u-form-item>
			<u-form-item v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'"  label="期望薪酬" prop="now_place" borderBottom>
				<u-input placeholderClass='cecordAssembly_u' v-model="form.now_place" border="none" clearable 
					inputAlign='right' placeholder="您的期望薪酬" />
			</u-form-item>
			<u-form-item v-if="selectedOccupation === '退伍军人'"  label="服役时长" prop="now_place" borderBottom>
				<u-input placeholderClass='cecordAssembly_u' v-model="form.now_place" border="none" clearable 
					inputAlign='right' placeholder="您的服役时长" />
			</u-form-item>
			<u-form-item v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'" label="工作地点" prop="now_place" borderBottom>
				<u-input placeholderClass='cecordAssembly_u' v-model="form.now_place" border="none" clearable 
					inputAlign='right' placeholder="期望的工作地点" />
			</u-form-item>
			<u-form-item v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'" label="职位性质" prop="now_place" borderBottom>
				<u-input placeholderClass='cecordAssembly_u' v-model="form.now_place" border="none" clearable 
					inputAlign='right' placeholder="期望的职位性质" />
			</u-form-item>
			<u-form-item v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'" label="期望行业" prop="now_place" borderBottom>
				<u-input placeholderClass='cecordAssembly_u' v-model="form.now_place" border="none" clearable 
					inputAlign='right' placeholder="期望行业" />
			</u-form-item>
			<u-form-item v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'" label="企业性质" prop="now_place" borderBottom>
				<u-input placeholderClass='cecordAssembly_u' v-model="form.now_place" border="none" clearable 
					inputAlign='right' placeholder="期望的企业性质" />
			</u-form-item>
			<u-form-item v-if="selectedOccupation === '实习生' || selectedOccupation === '应届生'|| selectedOccupation === '职场人群'" label="岗位性质" prop="now_place" borderBottom>
				<u-input placeholderClass='cecordAssembly_u' v-model="form.now_place" border="none" clearable 
					inputAlign='right' placeholder="期望的岗位性质" />
			</u-form-item>
			<u-form-item v-if="selectedOccupation === '创业者' || selectedOccupation === '失业人员'|| selectedOccupation === '退伍军人'|| selectedOccupation === '残疾人'" label="备注" prop="now_place" borderBottom>
				<u-input placeholderClass='cecordAssembly_u' v-model="form.now_place" border="none" clearable 
					inputAlign='right' placeholder="备注" />
			</u-form-item>
			

		</u--form>
		<u-action-sheet :show="showSex" :actions="actions"  @close="showSex = false" @select="sexSelect">
		</u-action-sheet>
		<!-- <buttonOperation @tapBtn="submit">
			下一步
		</buttonOperation> -->
		<view class="grid">
			<view class="left_btn" @tap="submit" >
				保存并提交
			</view>
			<view class="right_btn" @tap="nexstep">
				查看下一步
			</view>
		</view>
	</view>
</template>

<script>
	import {
		timestampToTime
	} from '@/tools/common.js'
	import {
		basicInfo,
		setbasic,getUserFn
	} from '@/request/api.js';
	import buttonOperation from '@/components/common/buttonOperation.vue';
	export default {
		components: {
			buttonOperation,
		},
		data() {
			return {
				selectedOccupation: uni.getStorageSync("selectedOccupation"),
				disabled:false,
				showSex: false,
				entrance_time_show: false,
				grade_time_show: false,
				sexlist:[
					{'label':'男','value':0},
					{'label':'女','value':1}
				],
				form: {
					sno: '',
					age: null,
					name: '',
					gender: '男',
					department: '',
					major: '',
					grade_time: '',
					entrance_time: '',
					IDCard: '',
					height: '',
					weight: '',
					nation: '',
					native: '',
					political: '',
					specialty: '',
					school_name: '',
					mobile:'',
					grade:'',
					
				},
				 entrance_time_show: false,
				actions: [{
						name: '男',
					},
					{
						name: '女',
					}
				],
				rules: {
					name: [{
						required: true,
						message: '请输入姓名',
						trigger: ['blur', 'change']
					}],
					age: [{
						required: true,
						message: '请输入年龄',
						type: 'number',
						trigger: ['blur', 'change']
					}],
					gender: [{
						required: false,
						message: '请选择性别',
						trigger: ['blur', 'change']
					}],
					sno: [{
						required: true,
						message: '请输入学号',
						trigger: ['blur', 'change']
					}],
					grade: [{
						required: true,
						message: '请输入年级',
						trigger: ['blur', 'change']
					}],
					baoxian: [{
						required: false,
						message: '请选择',
						trigger: ['blur', 'change']
					}],
					ylbaoxian: [{
						required: false,
						message: '请选择',
						trigger: ['blur', 'change']
					}],
					mobile: [{
						required: true,
						message: '请输入联系方式',
						trigger: ['blur', 'change']
					}],
					school_name: [{
						required: true,
						message: '请输入学校名称',
						trigger: ['blur', 'change']
					}],
					department: [{
						required: true,
						message: '请输入所在院系',
						trigger: ['blur', 'change']
					}],
					grade_time: [{
						required: true,
						message: '请选择毕业时间',
						trigger: ['blur', 'change']
					}],
					entrance_time: [{
						required: true,
						message: '请选择入学时间',
						trigger: ['blur', 'change']
					}],
					IDCard: [{
							message: '请输入身份证号码',
							trigger: ['blur', 'change']
						},
						{
							pattern: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
							message: '身份证号码不正确',
						}
					],
					major: [{
						required: true,
						message: '请输入年级/专业',
						trigger: ['blur', 'change']
					}]
				}
			}
		},
		onReady() {
			// 如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则
			this.$refs.uForm.setRules(this.rules)
			this.$refs.datetimePicker.setFormatter(this.formatter)
		},
		// 格式化
				// filters: {
				// 	// 格式化性别
				// 	formatSex: function(str) {
				// 		const sexEnum = {
				// 			"1": "男",
				// 			"2": "女",
				// 		}
				// 		return sexEnum[str];
				// 	}
				// },
		
		methods: {
			/* 点击新增职业期望 */
			addFn() {
				uni.navigateTo({
					url: '/pages/position/add_post'
				})
			},
			/* 性别弹框显示隐藏 */
			choicegender(){
				if(!this.disabled)this.showSex=true
			},
			/* 入学时间显示隐藏 */
			choiceStartTime(){
				// if(!this.disabled)this.entrance_time_show=true
				this.entrance_time_show=true
			},
			/* 毕业时间显示隐藏 */
			choiceEndTime(){
				// console.log(!this.disabled)
				// if(!this.disabled)this.grade_time_show=true
				this.grade_time_show=true
			},
			/* 选择性别 */
			sexSelect(e) {
				this.form.gender = e.name
				/* this.model1.userInfo.sex = e.name
				this.$refs.form1.validateField('userInfo.sex') */
			},
			confirm_enter(e) {
				this.form.entrance_time = timestampToTime(e.value)
				this.entrance_time_show = false
			},
			confirm_grade(e) {
				this.form.grade_time = timestampToTime(e.value)
				this.grade_time_show = false
			},
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
			/* 提交 */
			submit() {
				
				this.$refs.uForm.validate().then(res => {
					this.basicRequestFn()
				}).catch(errors => {
					uni.$u.toast('请完善必填信息')
				})
			},
			/* 下一步 */
			nexstep() {
				uni.$emit('nextStep')
			},
			/* 提交请求 */
			basicRequestFn() {
				basicInfo({
					sno: this.form.sno,
					age: this.form.age,
					name: this.form.name,
					gender: this.form.gender,
					department: this.form.department,
					major: this.form.major,
					grade_time: this.form.grade_time,
					entrance_time: this.form.entrance_time,
					IDCard: this.form.IDCard,
					height: this.form.height,
					weight: this.form.weight,
					nation: this.form.nation,
					native: this.form.native,
					political: this.form.political,
					specialty: this.form.specialty,
					school_name: this.form.school_name,
					grade:this.form.grade
				}).then(res => {
					if (res.code == 1) {
						uni.$u.toast('提交成功！')
					} else {
						uni.$u.toast('提交失败，请重试！')
					}
				})
			},
			/* 获取学生基本信息 */
			getDetail() {
				getUserFn().then(res => {
					this.disabled=true
					/* this.data = res.data */
					this.form.sno=res.data.sno,
					this.form.age=res.data.age,
					this.form.name=res.data.name,
					this.form.gender=res.data.gender,
					this.form.department=res.data.department,
					this.form.major=res.data.major,
					this.form.grade_time=res.data.grade_time,
					this.form.entrance_time=res.data.entrance_time,
					this.form.IDCard=res.data.IDCard,
					this.form.height=res.data.height,
					this.form.weight=res.data.weight,
					this.form.nation=res.data.nation,
					this.form.political=res.data.political,
					this.form.specialty=res.data.specialty,
					this.form.school_name=res.data.school_name
					this.form.native = res.data.native
					this.form.mobile = res.data.mobile,
					this.form.grade = res.data.grade
				})
			}
		}
	}
</script>
<style>
	/deep/ .u-radio-group{
		 flex:0; 
	}
</style>
<style lang="scss" scoped>
	.right_btn {
		background: #FFFFFF;
		border: 1upx solid #157DFA;
		border-radius: 20upx;
		color: #157DFA;
		flex: 1;
	}
 .gender{
	 
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
</style>
