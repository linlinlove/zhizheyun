<template>
	<view class="box-border plr-3">
		<u--form labelPosition="top" :rules="rules" :borderBottom='false' ref="uForm" :model="form">
			<u-form-item label="项目名称" prop="name" :required='false'>
				<uni-easyinput clearable v-model="form.name" :placeholder="null" :disabled="true"/>
			</u-form-item>
			<u-form-item label="项目概述" prop="summary" :required='false'>
				<uni-easyinput clearable type="textarea" maxlength="1000" v-model="form.summary" :disabled="true" :placeholder="null" />
			</u-form-item>
			<u-form-item label="项目规划" prop="planning" :required='false'>
				<uni-easyinput clearable v-model="form.planning" :placeholder="null" :disabled="true"/>
			</u-form-item>
			<u-form-item label="项目预算" prop="budget" :required='false'>
				<uni-easyinput clearable v-model="form.budget" :placeholder="null" :disabled="true"/>
			</u-form-item>
			<u-form-item label="所属行业" prop="industry" :required='false'>
				<uni-easyinput clearable v-model="form.industry" :placeholder="null" :disabled="true"/>
			</u-form-item>
			<u-form-item label="服务对象" prop="client" :required='false'>
				<uni-easyinput clearable v-model="form.client" :placeholder="null" :disabled="true"/>
			</u-form-item>
			<u-form-item label="竞争优势" prop="competitive" :required='false'>
				<uni-easyinput clearable type="textarea" maxlength="2000" v-model="form.competitive"
					:placeholder="null" :disabled="true"/>
			</u-form-item>
			<u-form-item label="发展地区" prop="develop" :required='false'>
				<uni-easyinput clearable v-model="form.develop" :placeholder="null" :disabled="true"/>
			</u-form-item>
			<u-form-item label="合作方式" prop="cooperation" :required='false'>
				<uni-easyinput clearable v-model="form.cooperation" :placeholder="null" :disabled="true"/>
			</u-form-item>
			<u-form-item label="佐证材料">
				<evidence :title="'佐证材料（如证书、获奖证明等)'"  :imgs='form.images'></evidence>
			</u-form-item>
			<u-form-item label="联系方式" prop="mobile" :required='false'>
				<uni-easyinput clearable v-model="form.mobile" :placeholder="null" :disabled="true"/>
			</u-form-item>
		</u--form>
		<!-- <buttonOperation @tapBtn="submit">
			提交
		</buttonOperation> -->
		<view class="" style="height: 100upx;width:0%00%">
			<!-- 占位符 -->
		</view>
	</view>
</template>

<script>
	import {
		addInnovating,
		innovating_details
	} from '@/request/api.js'
	import buttonOperation from '@/components/common/buttonOperation.vue'
	import evidence from '@/resume_pages/components/evidence.vue'
	export default {
		components: {
			buttonOperation,
			evidence
		},
		data() {
			return {
				form: {
					name: '',
					summary: '',
					planning: '',
					industry: '',
					client: '',
					competitive: '',
					develop: '',
					cooperation: '',
					images: [],
					budget: '',
					mobile: ''
				},
				rules: {
					name: [{
						required: true,
						message: '请输入姓名',
						trigger: ['blur', 'change']
					}],
					summary: [{
						required: true,
						message: '请输入项目概述',
						trigger: ['blur', 'change']
					}],
					// planning: [{
					// 	required: true,
					// 	message: '请输入项目规划',
					// 	trigger: ['blur', 'change']
					// }],
					industry: [{
						required: true,
						message: '请输入所属行业',
						trigger: ['blur', 'change']
					}],
					client: [{
						required: true,
						message: '请输入所属行业',
						trigger: ['blur', 'change']
					}],
					// competitive: [{
					// 	required: true,
					// 	message: '请输入竞争优势',
					// 	trigger: ['blur', 'change']
					// }],
					develop: [{
						required: true,
						message: '请输入发展地区',
						trigger: ['blur', 'change']
					}],
					// cooperation: [{
					// 	required: true,
					// 	message: '请输入合作方式',
					// 	trigger: ['blur', 'change']
					// }],
					// budget: [{
					// 	required: true,
					// 	message: '请输入项目预算',
					// 	trigger: ['blur', 'change']
					// }],
					mobile: [{
							required: true,
							message: '请输入联系电话',
							trigger: ['blur', 'change']
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								// 上面有说，返回true表示校验通过，返回false表示不通过
								// uni.$u.test.mobile()就是返回true或者false的
								return uni.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change
							trigger: ['change', 'blur'],
						}
					],
				}
			}
		},
		onReady() {
			// 如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则
			this.$refs.uForm.setRules(this.rules)
		},
		onLoad(e){
			console.log(e)
			this.getData(e)
		},
		methods: {
			upImgs(e) {
				this.form.images = String(e.images)
			},
			empty(){
				this.form.name = ''
				this.form.summary = ''
				this.form.planning=''
				this.form.industry=''
				this.form.client=''
				this.form.competitive=''
				this.form.develop=''
				this.form.cooperation=''
				this.form.images=''
				this.form.budget=''
				this.form.mobile=''
			},
			getData(e){
				innovating_details(e).then((res)=>{
					if(res.msg=="成功"){
						this.form = res.data
					}
				})
			},
			submit() {
				this.$refs.uForm.validate().then(res => {
					addInnovating({
						name: this.form.name,
						summary: this.form.summary,
						planning: this.form.planning,
						industry: this.form.industry,
						client: this.form.client,
						competitive: this.form.competitive,
						develop: this.form.develop,
						cooperation: this.form.cooperation,
						images: this.form.images,
						budget: this.form.budget,
						mobile: this.form.mobile
					}).then(res => {
						if(res.code==1&&res.msg=='成功'){
							uni.$u.toast('发布成功')
							this.empty()
						}
						
					})
				}).catch(errors => {
					uni.$u.toast('校验失败', errors)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
