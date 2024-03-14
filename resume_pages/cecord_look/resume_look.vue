<template>
	<view>
		<view class="jianli" @tap="resumeTo()">
			保存到相册
		</view>
		<view class="jianli2" @tap="resumeToList()">
			加入简历列表
		</view>
		<painter @imgOK="onImgOk" @imgErr="onImgErr" customStyle='position: absolute; left: -9999rpx;'
			:palette="template" />
		<view style="height: 1900rpx; width: 100%;">
			<image :src='imgPath' style="height: 100%;width: 100%;"></image>
		</view>
	</view>
</template>

<script>
	import {
		expectName,
	} from '@/request/api.js'
	import {
		online
	} from '@/request/api.js';
	import painter from '@/static/painter/painter.js';

	export default {
		components: {
			painter
		},
		data() {
			return {
				resumeName: '简历1',
				data: {},
				template: null,
				imgPath: '',
				expectNama: '', //期待职位
				resumeAvatar: '',
			};
		},
		onLoad() {
			try {
				this.resumeAvatar = uni.getStorageSync('resume_avatar');
			} catch (e) {
				console.log(e);
				// this.resumeAvatar = this.data.avatar;
			}
			console.log('头像: ' + this.resumeAvatar);

			expectName().then(res => {
				if (res.data && res.data.length > 0) {
					this.expectName = res.data[0].position || ""
				}else{
					this.expectName = ""
				}



				online().then(res => {
					this.data = res.data
					for(let key in this.data){
						if(this.data[key]==null){
							this.data[key] = []
						}
					}


					this.template = {
						"width": "1890px",
						"height": "4500px",
						"background": "#fff",
						"views": [{
								"type": "text",
								"text": "工作收获",
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "200px",
									"height": "44.94523719056558px",
									"top": "1960.2051344597714px",
									"left": "73.29905444523003px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "18px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "25.974000000000004px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "image",
								"url": this.resumeAvatar,
								"css": {
									"width": "354.5652036627724px",
									"height": "383.43479633722774px",
									"top": "145.99999999999997px",
									"left": "1460px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"mode": "scaleToFill"
								}
							},
							{
								"type": "text",
								"text": this.expectName,
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "200px",
									"height": "57.19999999999999px",
									"top": "281px",
									"left": "273px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "40px",
									"fontWeight": "bold",
									"maxLines": "2",
									"lineHeight": "57.72000000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "rect",
								"css": {
									"background": "#86c1f6",
									"width": "1319px",
									"height": "5.99683257918552px",
									"top": "339.3px",
									"left": "70px",
									"rotate": "0",
									"borderRadius": "",
									"shadow": "",
									"color": "#86c1f6"
								}
							},
							{
								"type": "text",
								"text": "应聘岗位：",
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "1750px",
									"height": "57.19999999999999px",
									"top": "281px",
									"left": "70.00000000000001px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "40px",
									"fontWeight": "bold",
									"maxLines": "2",
									"lineHeight": "57.72000000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": this.data.name,
								"css": {
									"color": "#000000",
									"background": "rgba(0,0,0,0)",
									"width": "200px",
									"height": "85.79999999999998px",
									"top": "196px",
									"left": "70px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "60px",
									"fontWeight": "bold",
									"maxLines": "2",
									"lineHeight": "86.58000000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": "年龄：",
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "94.99997983709227px",
									"height": "42.89999999999999px",
									"top": "404.77px",
									"left": "70px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "30px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "43.290000000000006px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": "期望薪资：",
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "196px",
									"height": "42.89999999999999px",
									"top": "488.24px",
									"left": "67px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "30px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "43.290000000000006px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": "面谈",
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "145.98000000000002px",
									"height": "42.89999999999999px",
									"top": "491.86000000000007px",
									"left": "226.01999999999998px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "30px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "43.290000000000006px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": this.data.age,
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "184.36881749087297px",
									"height": "42.89999999999999px",
									"top": "407.77px",
									"left": "171.63px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "30px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "43.290000000000006px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": "籍贯：",
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "125.49px",
									"height": "42.89999999999999px",
									"top": "483.47px",
									"left": "460.51px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "30px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "43.290000000000006px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": "性别：",
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "130.02999999999997px",
									"height": "42.89999999999999px",
									"top": "400px",
									"left": "463.97px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "30px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "43.290000000000006px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": this.data.gender,
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "78.54999999999995px",
									"height": "42.89999999999999px",
									"top": "402px",
									"left": "563.45px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "30px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "43.290000000000006px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": this.data.native,
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "252.1700000000001px",
									"height": "42.89999999999999px",
									"top": "485.47px",
									"left": "563.83px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "30px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "43.290000000000006px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": this.data.mobile,
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "476.9849739441315px",
									"height": "42.89999999999999px",
									"top": "568.02px",
									"left": "222.48000000000002px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "30px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "43.290000000000006px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "rect",
								"css": {
									"background": "#e0e0e0",
									"width": "1750px",
									"height": "6.984496843910734px",
									"top": "1005.94px",
									"left": "70px",
									"rotate": "0",
									"borderRadius": "",
									"shadow": "",
									"color": "#e0e0e0"
								}
							},
							{
								"type": "rect",
								"css": {
									"background": "#218df1",
									"width": "260px",
									"height": "87.30621054888418px",
									"top": "925.13px",
									"left": "70px",
									"rotate": "0",
									"borderRadius": "",
									"shadow": "",
									"color": "#218df1"
								}
							},
							{
								"type": "text",
								"text": "学习经历",
								"css": {
									"color": "#fff",
									"background": "rgba(0,0,0,0)",
									"width": "229.90551822405698px",
									"height": "71.49999999999999px",
									"top": "941.08px",
									"left": "98.64px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "50px",
									"fontWeight": "bold",
									"maxLines": "2",
									"lineHeight": "72.15000000000002px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "rect",
								"css": {
									"background": "#e0e0e0",
									"width": "1750px",
									"height": "6.984496843910734px",
									"top": "756.09px",
									"left": "70px",
									"rotate": "0",
									"borderRadius": "",
									"shadow": "",
									"color": "#e0e0e0"
								}
							},
							{
								"type": "rect",
								"css": {
									"background": "#218df1",
									"width": "260px",
									"height": "87.30621054888418px",
									"top": "674.11px",
									"left": "70px",
									"rotate": "0",
									"borderRadius": "",
									"shadow": "",
									"color": "#218df1"
								}
							},
							{
								"type": "text",
								"text": "联系电话：",
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "182px",
									"height": "42.89999999999999px",
									"top": "568.02px",
									"left": "70px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "30px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "43.290000000000006px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "rect",
								"css": {
									"background": "#e0e0e0",
									"width": "1750px",
									"height": "6.984496843910734px",
									"top": "1336.96px",
									"left": "70px",
									"rotate": "0",
									"borderRadius": "",
									"shadow": "",
									"color": "#e0e0e0"
								}
							},
							{
								"type": "rect",
								"css": {
									"background": "#e0e0e0",
									"width": "1750px",
									"height": "6.984496843910734px",
									"top": "1671.75px",
									"left": "67px",
									"rotate": "0",
									"borderRadius": "",
									"shadow": "",
									"color": "#e0e0e0"
								}
							},
							{
								"type": "rect",
								"css": {
									"background": "#218df1",
									"width": "260px",
									"height": "87.30621054888418px",
									"top": "1589.69px",
									"left": "67.29999999999995px",
									"rotate": "0",
									"borderRadius": "",
									"shadow": "",
									"color": "#218df1"
								}
							},
							{
								"type": "text",
								"text": "工作经历",
								"css": {
									"color": "#fff",
									"background": "rgba(0,0,0,0)",
									"width": "229.90551822405698px",
									"height": "71.49999999999999px",
									"top": "1609.64px",
									"left": "96.50000000000001px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "50px",
									"fontWeight": "bold",
									"maxLines": "2",
									"lineHeight": "72.15000000000002px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "rect",
								"css": {
									"background": "#e0e0e0",
									"width": "1750px",
									"height": "6.984496843910734px",
									"top": "2015.0999999999997px",
									"left": "70px",
									"rotate": "0",
									"borderRadius": "",
									"shadow": "",
									"color": "#e0e0e0"
								}
							},
							{
								"type": "rect",
								"css": {
									"background": "#218df1",
									"width": "260px",
									"height": "87.30621054888418px",
									"top": "1933.2899999999997px",
									"left": "70.29999999999995px",
									"rotate": "0",
									"borderRadius": "",
									"shadow": "",
									"color": "#218df1"
								}
							},
							{
								"type": "text",
								"text": "才艺技能",
								"css": {
									"color": "#fff",
									"background": "rgba(0,0,0,0)",
									"width": "229.90551822405698px",
									"height": "71.49999999999999px",
									"top": "1950.2399999999998px",
									"left": "100.78999999999998px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "50px",
									"fontWeight": "bold",
									"maxLines": "2",
									"lineHeight": "72.15000000000002px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": '    ' + this.data.entrance_time.substring(0, 4) + ' - ' +
									this.data.grade_time.substring(0, 4),
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "345px",
									"height": "51.480000000000004px",
									"top": "784.69px",
									"left": "1490px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "36px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "51.94800000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": "教育经历",
								"css": {
									"color": "#fff",
									"background": "rgba(0,0,0,0)",
									"width": "367.2100000000001px",
									"height": "71.49999999999999px",
									"top": "690.39px",
									"left": "95.78999999999999px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "50px",
									"fontWeight": "bold",
									"maxLines": "2",
									"lineHeight": "72.15000000000002px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "rect",
								"css": {
									"background": "#218df1",
									"width": "260px",
									"height": "87.30621054888418px",
									"top": "1254.4px",
									"left": "70px",
									"rotate": "0",
									"borderRadius": "",
									"shadow": "",
									"color": "#218df1"
								}
							},
							{
								"type": "text",
								"text": "实训经历",
								"css": {
									"color": "#fff",
									"background": "rgba(0,0,0,0)",
									"width": "306.21000000000004px",
									"height": "71.49999999999999px",
									"top": "1271.61px",
									"left": "98.79000000000002px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "50px",
									"fontWeight": "bold",
									"maxLines": "2",
									"lineHeight": "72.15000000000002px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": this.data.school_name,
								"css": {
									"color": "#000000",
									"background": "rgba(0,0,0,0)",
									"width": "1750px",
									"height": "51.480000000000004px",
									"top": "780.44px",
									"left": "70.00000000000001px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "36px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "51.94800000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": this.data.major,
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "1750px",
									"height": "51.480000000000004px",
									"top": "833.31px",
									"left": "70.00000000000001px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "36px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "51.94800000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": this.data.study_json.length>0?this.data.study_json[0].content:"this.data.study_json[0].content丢失",
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "1750px",
									"height": "51.480000000000004px",
									"top": "1046.33px",
									"left": "70.00000000000001px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "36px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "51.94800000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": this.data.study_json.length>0?this.data.study_json[1].content:"this.data.study_json[1].content丢失",
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "1750px",
									"height": "51.480000000000004px",
									"top": "1101.2px",
									"left": "70.00000000000001px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "36px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "51.94800000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							
							{
								"type": "text",
								"text": this.data.study_json.length>=3?this.data.study_json[2].content:"this.data.study_json[2].content丢失",
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "1750px",
									"height": "51.480000000000004px",
									"top": "1153.58px",
									"left": "70.00000000000001px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "36px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "51.94800000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": "岗位：" + this.data.practical.length>0?this.data.practical[0].station:'',
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "1750px",
									"height": "51.480000000000004px",
									"top": "1425.28px",
									"left": "70.00000000000001px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "36px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "51.94800000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": "实训收获：" + this.data.practical.length>0?this.data.practical[0].harvest:'',
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "1750px",
									"height": "51.480000000000004px",
									"top": "1488.38px",
									"left": "70.00000000000001px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "36px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "51.94800000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": "岗位：" + this.data.practical2.length>0?this.data.practical2[0].station:'',
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "1750px",
									"height": "51.480000000000004px",
									"top": "1760.09px",
									"left": "67.00000000000001px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "36px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "51.94800000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": this.data.vocation_json.length>0?this.data.vocation_json[0].content:'',
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "1750px",
									"height": "51.480000000000004px",
									"top": "2068.99px",
									"left": "70.00000000000001px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "36px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "51.94800000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": this.data.talent_json.length>0?this.data.talent_json[0].content:'',
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "1750px",
									"height": "51.480000000000004px",
									"top": "2133.5999999999995px",
									"left": "70.00000000000001px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "36px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "51.94800000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": "工作收获：" + this.data.practical2.length>0?this.data.practical2[0].harvest:'',
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "1750px",
									"height": "51.480000000000004px",
									"top": "1818px",
									"left": "68px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "36px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "51.94800000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": "企业名称：" + this.data.practical.length>0?this.data.practical[0].enterprise_name:'',
								"css": {
									"color": "#000000",
									"background": "rgba(0,0,0,0)",
									"width": "1750px",
									"height": "51.480000000000004px",
									"top": "1370px",
									"left": "70.00000000000001px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "36px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "51.94800000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": this.data.practical.length>0?this.data.practical[0].year:'',
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "92.99761768315466px",
									"height": "51.480000000000004px",
									"top": "1370px",
									"left": "1732px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "36px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "51.94800000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": "企业名称：" + this.data.practical2.length>0?this.data.practical2[0].enterprise_name:'',
								"css": {
									"color": "#000000",
									"background": "rgba(0,0,0,0)",
									"width": "1750px",
									"height": "51.480000000000004px",
									"top": "1699px",
									"left": "67.00000000000001px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "36px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "51.94800000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							},
							{
								"type": "text",
								"text": this.data.practical2.length>0?this.data.practical2[0].year:'',
								"css": {
									"color": "#a7a7a7",
									"background": "rgba(0,0,0,0)",
									"width": "88.11248698235431px",
									"height": "51.480000000000004px",
									"top": "1699px",
									"left": "1727px",
									"rotate": "0",
									"borderRadius": "",
									"borderWidth": "",
									"borderColor": "#000000",
									"shadow": "",
									"padding": "0px",
									"fontSize": "36px",
									"fontWeight": "normal",
									"maxLines": "2",
									"lineHeight": "51.94800000000001px",
									"textStyle": "fill",
									"textDecoration": "none",
									"fontFamily": "",
									"textAlign": "left"
								}
							}
						]
					}







				});

			});


		},
		methods: {
			onImgOk(e) {
				console.log('成功' + e.detail.path);
				this.imgPath = e.detail.path;
			},
			onImgErr(e) {
				console.log('失败' + e);
			},
			resumeTo() {
				let that = this;
				const img = that.imgPath;
				uni.saveImageToPhotosAlbum({
					filePath: img,
					success: function() {
						uni.showToast({
							title: "保存成功",
							icon: 'none'
						})
					},
					fail: function() {
						uni.showToast({
							title: "保存失败",
							icon: 'none'
						})
					}
				});
			},
			resumeToList() {
				const token = uni.getStorageSync('token');
				let that = this;
				let name = that.resumeName + ':' + that.data.name + '-' + Math.floor(Math.random() * 100 + 1);
				wx.uploadFile({
					url: `${getApp().globalData.baseUrl}/user/uploadannex`,
					filePath: that.imgPath,
					name: 'file',
					formData: {
						'file': name,
						'filename': name, //文件名称 后台要不要？
					},
					header: {
						token
					},
					files: [{
						filename: name, //文件名称 后台要不要？
					}],
					success: file => {
						let _res = JSON.parse(file.data)
						console.log(_res.code, 111);
						if (_res.code == 1 && _res.msg == '上传成功') {
							uni.showToast({
								icon: 'none',
								duration: 1500,
								title: _res.msg
							})
							this.page = 1
							this.list = []
							this.getList()
						} else {
							uni.showToast({
								icon: 'none',
								duration: 1500,
								title: _res.msg
							})
						}
					},
					fail: (errFile) => {
						uni.showToast({
							icon: 'none',
							duration: 1500,
							title: '简历上传失败'
						})
						console.log(errFile);
					}
				})
			}

		}
	}
</script>

<style lang="scss">
	.jianli {
		position: fixed;
		right: 0;
		top: 20vh;
		z-index: 9999;
		background-color: $common-color;
		font-size: 28upx;
		padding: 10upx 20upx;
		color: #fff;
		border-radius: 10upx 0 0 10upx;
	}

	.jianli2 {
		position: fixed;
		right: 0;
		top: 30vh;
		z-index: 9999;
		background-color: $common-color;
		font-size: 28upx;
		padding: 10upx 20upx;
		color: #fff;
		border-radius: 10upx 0 0 10upx;
	}
</style>