<template>
	<view class="cecordAssembly box-border">
		<view class="box-border">
			<view class=" f-row jc-sb mb-2">
				<view class="pt-re">
					学习经历
					<view class="pt-ab" style="left: -5px;top: -5px;color: red;">
						*
					</view>
				</view>
				<view class="addBtn add1" @tap="addBtn('学习经历')">
					+
				</view>
			</view>
			<view class="pt-re mb-2" v-for="(i,k) in study_json" :key="i.id">

				<uni-easyinput v-model="i.content" :disabled="i.disabled" maxlength="300" type="textarea"
					:placeholder="'必修，选修，课外辅修'">
				</uni-easyinput>
			</view>
		</view>
		<view class="box-border">
			<view class=" f-row jc-sb mb-2">
				<view class="">
					社团经历
				</view>
				<view class="addBtn" @tap="addBtn('社团经历')">
					+
				</view>
			</view>
			<view class="pt-re mb-2" v-for="(i,k) in vocation_json" :key="i.id">

				<uni-easyinput :disabled="i.disabled" v-model="i.content" maxlength="300" type="textarea"
					:placeholder="'活动情况，获奖情况'">
				</uni-easyinput>
			</view>
		</view>
		<view class="box-border">
			<view class=" f-row jc-sb mb-2">
				<view class="">
					才艺技能
				</view>
				<view class="addBtn" @tap="addBtn('才艺技能')">
					+
				</view>
			</view>
			<view class="pt-re mb-2" v-for="(i,k) in talent_json" :key="i.id">

				<uni-easyinput :disabled="i.disabled" v-model="i.content" maxlength="300" type="textarea"
					:placeholder="'才艺技能'">
				</uni-easyinput>
			</view>
		</view>

		<evidence :title="'佐证材料（如证书、获奖证明等)'" @upImgs='upImgs' :imgs='stuff_images' :showClose="false"
			@closeImg="closeImg" :showAdd="true" :List="fullList"></evidence>
		<buttonOperation @tapBtn='appeal' :isEmptyBtn='true' v-if="isShowBtnSu">
			申诉
		</buttonOperation>
		<u-notify ref="uNotify"></u-notify>
		<!-- 	<buttonOperation @tapBtn='nextStep'>
			下一步
		</buttonOperation> -->
		<view class="grid">
			<view class="left_btn" @tap="eduRequestFn" v-if="isShowBtnSu2">
				保存并提交
			</view>
			<view class="right_btn" @tap="nexstep">
				查看下一步
			</view>
			<view v-if="idShenshu()"></view>
		</view>

	</view>

</template>

<script>
	import {
		eduInfo,
		seeedu,
		getUserFn,
		appealedu
	} from '@/request/api.js'
	// import centerShow from '@/components/common/centerShow.vue'
	import evidence from '@/resume_pages/components/evidenceEdu.vue'
	import buttonOperation from '@/components/common/buttonOperation.vue'

	export default {
		components: {
			buttonOperation,
			evidence,
			// centerShow
		},
		data() {
			return {
				disabled: false,
				study_json: [{
					id: 1,
					content: '',
					placeholder: '必修，选修，课外辅修'
				}],
				vocation_json: [{
					id: 1,
					content: '',
					placeholder: '必修，选修，课外辅修'
				}],
				talent_json: [{
					id: 1,
					content: '',
					placeholder: '必修，选修，课外辅修'
				}],
				fullList: [],
				stuff_images: null,
				isShowBtnSu: false,
				isShowBtnSu2: false,
				code: ''
			}
		},
		onShow() {

		},
		onLoad() {},
		methods: {
			closeImg(e) { //删除佐证材料

			},
			upImgs(e) {
				this.stuff_images = String(e.images)
				let fullList = []
				e.images.forEach(item => {
					fullList.push({
						url: item
					})
				})
				this.fullList = fullList
				console.log(this.fullList, 11111);
			},
			addBtn(e) {
				if (this.code == 1 || this.code == 2) {
					return false; //只有为3,4的时候才可以添加
				}
				let interface_ = {
					'学习经历': this.study_json,
					'社团经历': this.vocation_json,
					'才艺技能': this.talent_json,
				}
				let obj = {
					id: interface_[e].length + 1,
					content: '',
					placeholder: e
				}
				interface_[e].push(obj)
			},
			/* 是否可以申诉 */
			idShenshu() {
				// console.log(333);
				getUserFn().then(res => {
					// console.log(res.data.edu_data,333);
					// this.isShowBtnSu = true
					this.code = res.data.edu_data
					// console.log(res,999)
					if (res.data.edu_data == 1 || res.data.edu_data == 2) {
						this.isShowBtnSu = true
					} else {
						this.isShowBtnSu = false
					}
					if (res.data.edu_data == 4 || res.data.edu_data == 3) {
						// console.log(res.data.edu_data,444);
						this.disabled = true
						this.isShowBtnSu2 = true
						this.isShowBtnSu = false
					} else {
						this.isShowBtnSu2 = false
						this.disabled = false
					}
				})
			},
			/* 第一次提交按钮显示 */
			// isShowBtnSu2() {
			// 	getUserFn().then(res => {
			// 		if (res.data.edu_data == 1) {
			// 			this.isShowBtnSu2 = true
			// 		} else {
			// 			this.isShowBtnSu2 = false
			// 		}
			// 	})
			// 	console.log(this.isShowBtnSu2,111);
			// },
			/* 校验 */
			checkTab2() {
				for (var i = 0; i < this.study_json.length; i++) {
					if (!this.study_json[i].content) {

						uni.$u.toast('请填写学习经历')
						return false
					} else {

						return true
					}
				}
			},
			//可以申诉按钮
			appeal() {
				appealedu().then(res => {
					console.log(res)
					if (res.code == 1 && res.msg == '成功') {
						this.$refs.uNotify.success('已申诉,等候审核')
					}
				})
			},
			/* 提交申诉*/
			sumAppeal() {
				/* 可以申诉 */
				eduInfo({
					study_json: this.study_json, //学习经历
					vocation_json: this.vocation_json, //职业技能
					talent_json: this.talent_json, //才艺技能
					stuff_images: this.stuff_images, //辅佐材料
					type: 1 //	0第一次添加 1修改
				}).then(res => {
					if (res.code == 1) {
						uni.$u.toast('成功')
					}
				})

			},
			/* 下一步 */
			nexstep() {
				uni.$emit('nextStep')
			},
			eduRequestFn() {
				if (!this.checkTab2()) return
				if (this.code == 3) { //code为3时为申诉
					this.sumAppeal()
					return;
				}
				eduInfo({
					study_json: this.study_json, //学习经历
					vocation_json: this.vocation_json, //职业技能
					talent_json: this.talent_json, //才艺技能
					stuff_images: this.stuff_images, //辅佐材料
					type: 0 //	0第一次添加 1修改
				}).then(res => {
					if (res.code == 1) {
						uni.$u.toast('提交成功！')
					} else {
						uni.$u.toast('提交失败，请重试！')
					}
				})
			},
			/* 查看教育经历 */
			showseeedu() {
				seeedu().then(res => {
					if (res.data.study_json) {
						console.log(this.code, 'code')
						res.data.study_json.forEach(i => this.code == 3 || this.code == 4 ? i.disabled = false : i
							.disabled = true, )
						res.data.vocation_json.forEach(i => this.code == 3 || this.code == 4 ? i.disabled = false :
							i.disabled = true, )
						res.data.talent_json.forEach(i => this.code == 3 || this.code == 4 ? i.disabled = false : i
							.disabled = true, )
						this.study_json = res.data.study_json
						this.vocation_json = res.data.vocation_json
						this.talent_json = res.data.talent_json
						console.log(this.talent_json, 'talent')
						this.stuff_images = res.data.stuff_images
						let fullList = []
						if (this.stuff_images.length != 0) {
							this.stuff_images.forEach((item) => {
								fullList.push({
									url: item
								})
							})
						}
						this.fullList = fullList
						// console.log(fullList)
					}
					// else{
					// 		this.isShowBtnSu2 = true
					// }
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

	.left_btn {
		background: #157DFA;
		border-radius: 20upx;
		color: #FFFFFF;
		width: 350upx;
		margin-right: 32upx;
	}

	.add1 {
		font-size: 60rpx;
		height: 100%;
		width: 80px;
		text-align: right;
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

	.addBtn {
		font-size: 60rpx;
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
