<template>
	<!-- 预览实录页 -->
	<view class="cecordAssembly box-border">
		<u-back-top :scroll-top="scrollTop" top="600"></u-back-top>
		<!-- 个人信息 -->
		<u--text type="primary" text="基本信息" lineHeight='48'></u--text>
		<u-cell-group>
			<u-cell title="姓名" :value="data.name"></u-cell>
			<u-cell title="年龄" :value="data.age"></u-cell>
			<u-cell title="性别" :value="data.gender"></u-cell>
			<u-cell title="学号" :value="data.sno"></u-cell>
			<u-cell title="学校" :value="data.school_name"></u-cell>
			<u-cell title="院系" :value="data.department"></u-cell>
			<u-cell title="专业" :value="data.major"></u-cell>
			<u-cell title="年级" :value="data.grade"></u-cell>
			<u-cell title="入学时间" :value="data.entrance_time"></u-cell>
			<u-cell title="毕业时间" :value="data.grade_time"></u-cell>
			<u-cell title="身份证号码" :value="data.IDCard"></u-cell>
			<u-cell title="身高" :value="data.height"></u-cell>
			<u-cell title="体重" :value="data.weight"></u-cell>
			<u-cell title="籍贯" :value="data.native"></u-cell>
			<u-cell title="民族" :value="data.nation"></u-cell>
			<u-cell title="政治面貌" :value="data.political"></u-cell>
			<u-cell title="特长" :value="data.specialty"></u-cell>
			<u-cell title="求职岗位" value="具体字段需要赋值"></u-cell>
			<u-cell title="期望薪酬" value="具体字段需要赋值"></u-cell>
			<u-cell title="工作地点" value="具体字段需要赋值"></u-cell>
			<u-cell title="职位性质" value="具体字段需要赋值"></u-cell>
			<u-cell title="期望行业" value="具体字段需要赋值"></u-cell>
			<u-cell title="企业性质" value="具体字段需要赋值"></u-cell>
			<u-cell title="岗位性质" value="具体字段需要赋值"></u-cell>
		</u-cell-group>
		<!-- 教育经历 -->

		<u--text type="primary" text="教育经历" lineHeight='48' v-if="data !== null && data.study_json.length>0"></u--text>
		
		<view class="box-border" v-if="data !== null && data.study_json.length>0">
			<view class=" f-row jc-sb mb-2">
				<view class="pt-re">
					学习经历
				</view>
			</view>
			<view class="pt-re mb-2" v-for="(i,k) in data.study_json" :key="i.id">
				<uni-easyinput v-model="i.content" disabled maxlength="300" type="textarea">
				</uni-easyinput>
			</view>
		</view>
		<view class="box-border" v-if="data.vocation_json.length>0">
			<view class=" f-row jc-sb mb-2">
				<view class="">
					社团经历
				</view>
			</view>
			<view class="pt-re mb-2" v-for="(i,k) in data.vocation_json" :key="i.id">
				<uni-easyinput disabled v-model="i.content" maxlength="300" type="textarea">
				</uni-easyinput>
			</view>
		</view>
		<view class="box-border" v-if="data.talent_json.length>0">
			<view class=" f-row jc-sb mb-2">
				<view class="">
					才艺技能
				</view>
			</view>
			<view class="pt-re mb-2" v-for="(i,k) in data.talent_json" :key="i.id">
				<uni-easyinput disabled v-model="i.content" maxlength="300" type="textarea">
				</uni-easyinput>
			</view>
		</view>
		<text v-show="data.stuff_images != null">佐证材料</text>
		<previewImg :imgs='data.stuff_images'></previewImg>
		<!-- 实训经历 -->
		<view v-if="data.practical.length>0">
			<u--text type="primary" text="实训经历" lineHeight='48'></u--text>
			<view class="" v-for="(i,k) in data.practical">
				<u-cell title="年份" :value="i.year"></u-cell>
				<u-cell title="实训行业" :value="i.industry"></u-cell>
				<u-cell title="企业名称" :value="i.enterprise_name"></u-cell>
				<u-cell title="实训岗位" :value="i.station"></u-cell>
				<view class="box-border pt-3">
					<view class=" f-row jc-sb mb-2">
						<view class="">
							实训收获
						</view>
					</view>
					<view class="pt-re mb-2">
						<uni-easyinput disabled v-model="i.harvest" maxlength="300" type="textarea">
						</uni-easyinput>
					</view>
				</view>
				<view class="box-border">
					<view class=" f-row jc-sb mb-2">
						<view class="">
							自我评价
						</view>
					</view>
					<view class="pt-re mb-2">
						<uni-easyinput disabled v-model="i.self_evaluation" maxlength="300" type="textarea">
						</uni-easyinput>
					</view>
				</view>
				<view class="box-border" v-if="i.feedback_json">
					<view class=" f-row jc-sb mb-2">
						<view class="">
							企业反馈
						</view>
					</view>
					<view class="pt-re mb-2">
						<u-cell :title="k1" v-for="(i1,k1) in i.feedback_json">
							<u-rate slot="right-icon" :value="i1" activeColor='#157DFA' readonly></u-rate>
						</u-cell>
					</view>
				</view>
				<text v-if="i.images">佐证材料</text>
				<previewImg :imgs='i.images'></previewImg>
			</view>
		</view>

		<!-- 工作经历 -->
		<view v-if="data.practical2.length>0">
			<u--text type="primary" text="工作经历" lineHeight='48'></u--text>
			<view class="" v-for="(i,k) in data.practical2">
				<u-cell title="年份" :value="i.year"></u-cell>
				<u-cell title="实训行业" :value="i.industry"></u-cell>
				<u-cell title="企业名称" :value="i.enterprise_name"></u-cell>
				<u-cell title="实训岗位" :value="i.station"></u-cell>
				<view class="box-border pt-3">
					<view class=" f-row jc-sb mb-2">
						<view class="">
							工作收获
						</view>
					</view>
					<view class="pt-re mb-2">
						<uni-easyinput disabled v-model="i.harvest" maxlength="300" type="textarea">
						</uni-easyinput>
					</view>
				</view>
				<view class="box-border">
					<view class=" f-row jc-sb mb-2">
						<view class="">
							自我评价
						</view>
					</view>
					<view class="pt-re mb-2">
						<uni-easyinput disabled v-model="i.self_evaluation" maxlength="300" type="textarea">
						</uni-easyinput>
					</view>
				</view>
				<view class="box-border" v-if="i.feedback_json">
					<view class=" f-row jc-sb mb-2">
						<view class="">
							企业反馈
						</view>
					</view>
					<view class="pt-re mb-2">
						<u-cell :title="k1" v-for="(i1,k1) in i.feedback_json">
							<u-rate slot="right-icon" :value="i1" activeColor='#157DFA' readonly></u-rate>
						</u-cell>
					</view>
				</view>
				<text v-if="i.images">佐证材料</text>
				<previewImg :imgs='i.images'></previewImg>
			</view>
		</view>

	</view>
</template>

<script>
	import previewImg from '@/components/common/preview_img.vue'
	export default {
		components: {
			previewImg
		},
		props: ['data'],
		data() {
			return {
				scrollTop: 0
			}
		},
		methods: {
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		height: 200vh;
	}

	/deep/ .u-cell__title-text {
		font-size: 28upx !important;
		color: red !important;
	}

	.right_btn {
		background: #FFFFFF;
		border: 1upx solid #157DFA;
		border-radius: 20upx;
		color: #157DFA;
		flex: 1;
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

	.textLength {
		position: absolute;
		right: 6px;
		bottom: 5upx;
		font-size: 24upx;
		color: #BABABA;
		letter-spacing: 2upx;
	}

	.addBtn {
		color: $common-color;
	}
</style>
