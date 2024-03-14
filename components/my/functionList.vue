<template>
	<view class="list-box">
		<view class="list-item box-border  f-row jc-sb ai-c" @tap="jumpPages(i)" v-for="(i, index) in list" :key="index">
			<view class="f-row ai-c">
				<image :src="i.iconUrl" mode="" class="icon"></image>
				<text>
					{{i.title}}
				</text>
			</view>
			<view class="jiantou"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					id: 1,
					title: '个人档案',
					iconUrl: '/static/icon/my/icon1.png',
					urls:{
							'应届生': '/resume_pages/cecord/cecord',
							'实习生': '/resume_pages/cecord/cecord',
							'职场人群': '/resume_pages/cecord/cecord2',
							'40.50灵活就业人群': '/resume_pages/cecord/cecord3',
							'残疾人': '/resume_pages/cecord/cecord4',
							'退伍军人': '/resume_pages/cecord/cecord5',
							'失业人员': '/resume_pages/cecord/cecord6',
							'创业者': '/resume_pages/cecord/cecord7',
							// 添加其他职业类型对应的url
						}
				}, {
					id: 2,
					title: '求职发布',
					iconUrl: '/static/icon/my/icon2.png',
					url: "/resume_pages/job_posting/job_posting"
				}, {
					id: 3,
					title: '求职记录',
					iconUrl: '/static/icon/my/icon3.png',
					url: '/resume_pages/job_record/job_record'
				}, {
					id: 4,
					title: '创新创业发布',
					iconUrl: '/static/icon/my/icon9.png',
					url: '/resume_pages/entrepreneurship/entrepreneurship'
				}, {
					id: 9,
					title: '创新创业智能匹配',
					iconUrl: '/static/icon/my/icon12.png',
					url: '/resume_pages/entrepreneurData/entrepreneurData?type=entrepreneurData'
				},
				//{
				// 	id: 5,
				// 	title: '电子合同',
				// 	iconUrl: '/static/icon/my/icon10.png',
				// 	url: '/resume_pages/electronic_contract/electronic_contract'
				// }, 
				{
					id: 6,
					title: '职业测评',
					iconUrl: '/static/icon/my/icon11.png'
				}, {
					id: 7,
					title: '项目需求',
					iconUrl: '/static/icon/my/icon4.png',
					url: '/resume_pages/projectRequirement/projectRequirement'
				},{
					id: 8,
					title: '关于我们',
					iconUrl: '/static/icon/my/icon7.png',
					url: '/pages/my/aboutUs'
				}
				// ,{
				// 	id: 9,
				// 	title: '简历列表',
				// 	iconUrl: '/static/icon/my/icon7.png',
				// 	url: '/resume_pages/resume_list/resume_list'
				// }
				]
			}
		},
		
		methods: {
			jumpPages(item) {
							const selectedOccupation = uni.getStorageSync("selectedOccupation");
			
							if (selectedOccupation && item.urls[selectedOccupation]) {
								uni.navigateTo({
									url: item.urls[selectedOccupation]
								});
							} else {
								// 处理没有选择职业信息或者其他情况的跳转逻辑
							}
						}
					
		}
	}
</script>

<style lang="scss" scoped>
	.list-box {
		z-index: 999;
		margin: 40upx 30upx 80upx;
		border-radius: 20upx;
		background-color: #fff;
		padding: 0 20upx;
	}

	.list-item {
		height: 100upx;
		line-height: 100upx;
		border-bottom: 1upx solid #ECECEC;
	}

	.list-item:last-child {
		border: none;
	}

	text {
		color: #4D4D4D;
		font-size: 28upx
	}

	.icon {
		width: 40upx;
		height: 40upx;
		margin-right: 20upx;
	}
</style>
