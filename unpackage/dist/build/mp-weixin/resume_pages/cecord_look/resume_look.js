require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["resume_pages/cecord_look/resume_look"],{1832:function(t,e,o){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o("692a"),r={components:{painter:function(){o.e("common/vendor").then(function(){return resolve(o("be91"))}.bind(null,o)).catch(o.oe)}},data:function(){return{resumeName:"简历1",data:{},template:null,imgPath:"",expectNama:"",resumeAvatar:""}},onLoad:function(){var e=this;try{this.resumeAvatar=t.getStorageSync("resume_avatar")}catch(o){console.log(o)}console.log("头像: "+this.resumeAvatar),(0,i.expectName)().then((function(t){t.data&&t.data.length>0?e.expectName=t.data[0].position||"":e.expectName="",(0,i.online)().then((function(t){for(var o in e.data=t.data,e.data)null==e.data[o]&&(e.data[o]=[]);e.template={width:"1890px",height:"4500px",background:"#fff",views:[{type:"text",text:"工作收获",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"200px",height:"44.94523719056558px",top:"1960.2051344597714px",left:"73.29905444523003px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"18px",fontWeight:"normal",maxLines:"2",lineHeight:"25.974000000000004px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"image",url:e.resumeAvatar,css:{width:"354.5652036627724px",height:"383.43479633722774px",top:"145.99999999999997px",left:"1460px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",mode:"scaleToFill"}},{type:"text",text:e.expectName,css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"200px",height:"57.19999999999999px",top:"281px",left:"273px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"40px",fontWeight:"bold",maxLines:"2",lineHeight:"57.72000000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"rect",css:{background:"#86c1f6",width:"1319px",height:"5.99683257918552px",top:"339.3px",left:"70px",rotate:"0",borderRadius:"",shadow:"",color:"#86c1f6"}},{type:"text",text:"应聘岗位：",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"1750px",height:"57.19999999999999px",top:"281px",left:"70.00000000000001px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"40px",fontWeight:"bold",maxLines:"2",lineHeight:"57.72000000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:e.data.name,css:{color:"#000000",background:"rgba(0,0,0,0)",width:"200px",height:"85.79999999999998px",top:"196px",left:"70px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"60px",fontWeight:"bold",maxLines:"2",lineHeight:"86.58000000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:"年龄：",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"94.99997983709227px",height:"42.89999999999999px",top:"404.77px",left:"70px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"30px",fontWeight:"normal",maxLines:"2",lineHeight:"43.290000000000006px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:"期望薪资：",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"196px",height:"42.89999999999999px",top:"488.24px",left:"67px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"30px",fontWeight:"normal",maxLines:"2",lineHeight:"43.290000000000006px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:"面谈",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"145.98000000000002px",height:"42.89999999999999px",top:"491.86000000000007px",left:"226.01999999999998px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"30px",fontWeight:"normal",maxLines:"2",lineHeight:"43.290000000000006px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:e.data.age,css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"184.36881749087297px",height:"42.89999999999999px",top:"407.77px",left:"171.63px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"30px",fontWeight:"normal",maxLines:"2",lineHeight:"43.290000000000006px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:"籍贯：",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"125.49px",height:"42.89999999999999px",top:"483.47px",left:"460.51px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"30px",fontWeight:"normal",maxLines:"2",lineHeight:"43.290000000000006px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:"性别：",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"130.02999999999997px",height:"42.89999999999999px",top:"400px",left:"463.97px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"30px",fontWeight:"normal",maxLines:"2",lineHeight:"43.290000000000006px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:e.data.gender,css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"78.54999999999995px",height:"42.89999999999999px",top:"402px",left:"563.45px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"30px",fontWeight:"normal",maxLines:"2",lineHeight:"43.290000000000006px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:e.data.native,css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"252.1700000000001px",height:"42.89999999999999px",top:"485.47px",left:"563.83px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"30px",fontWeight:"normal",maxLines:"2",lineHeight:"43.290000000000006px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:e.data.mobile,css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"476.9849739441315px",height:"42.89999999999999px",top:"568.02px",left:"222.48000000000002px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"30px",fontWeight:"normal",maxLines:"2",lineHeight:"43.290000000000006px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"rect",css:{background:"#e0e0e0",width:"1750px",height:"6.984496843910734px",top:"1005.94px",left:"70px",rotate:"0",borderRadius:"",shadow:"",color:"#e0e0e0"}},{type:"rect",css:{background:"#218df1",width:"260px",height:"87.30621054888418px",top:"925.13px",left:"70px",rotate:"0",borderRadius:"",shadow:"",color:"#218df1"}},{type:"text",text:"学习经历",css:{color:"#fff",background:"rgba(0,0,0,0)",width:"229.90551822405698px",height:"71.49999999999999px",top:"941.08px",left:"98.64px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"50px",fontWeight:"bold",maxLines:"2",lineHeight:"72.15000000000002px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"rect",css:{background:"#e0e0e0",width:"1750px",height:"6.984496843910734px",top:"756.09px",left:"70px",rotate:"0",borderRadius:"",shadow:"",color:"#e0e0e0"}},{type:"rect",css:{background:"#218df1",width:"260px",height:"87.30621054888418px",top:"674.11px",left:"70px",rotate:"0",borderRadius:"",shadow:"",color:"#218df1"}},{type:"text",text:"联系电话：",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"182px",height:"42.89999999999999px",top:"568.02px",left:"70px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"30px",fontWeight:"normal",maxLines:"2",lineHeight:"43.290000000000006px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"rect",css:{background:"#e0e0e0",width:"1750px",height:"6.984496843910734px",top:"1336.96px",left:"70px",rotate:"0",borderRadius:"",shadow:"",color:"#e0e0e0"}},{type:"rect",css:{background:"#e0e0e0",width:"1750px",height:"6.984496843910734px",top:"1671.75px",left:"67px",rotate:"0",borderRadius:"",shadow:"",color:"#e0e0e0"}},{type:"rect",css:{background:"#218df1",width:"260px",height:"87.30621054888418px",top:"1589.69px",left:"67.29999999999995px",rotate:"0",borderRadius:"",shadow:"",color:"#218df1"}},{type:"text",text:"工作经历",css:{color:"#fff",background:"rgba(0,0,0,0)",width:"229.90551822405698px",height:"71.49999999999999px",top:"1609.64px",left:"96.50000000000001px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"50px",fontWeight:"bold",maxLines:"2",lineHeight:"72.15000000000002px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"rect",css:{background:"#e0e0e0",width:"1750px",height:"6.984496843910734px",top:"2015.0999999999997px",left:"70px",rotate:"0",borderRadius:"",shadow:"",color:"#e0e0e0"}},{type:"rect",css:{background:"#218df1",width:"260px",height:"87.30621054888418px",top:"1933.2899999999997px",left:"70.29999999999995px",rotate:"0",borderRadius:"",shadow:"",color:"#218df1"}},{type:"text",text:"才艺技能",css:{color:"#fff",background:"rgba(0,0,0,0)",width:"229.90551822405698px",height:"71.49999999999999px",top:"1950.2399999999998px",left:"100.78999999999998px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"50px",fontWeight:"bold",maxLines:"2",lineHeight:"72.15000000000002px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:"    "+e.data.entrance_time.substring(0,4)+" - "+e.data.grade_time.substring(0,4),css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"345px",height:"51.480000000000004px",top:"784.69px",left:"1490px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"36px",fontWeight:"normal",maxLines:"2",lineHeight:"51.94800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:"教育经历",css:{color:"#fff",background:"rgba(0,0,0,0)",width:"367.2100000000001px",height:"71.49999999999999px",top:"690.39px",left:"95.78999999999999px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"50px",fontWeight:"bold",maxLines:"2",lineHeight:"72.15000000000002px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"rect",css:{background:"#218df1",width:"260px",height:"87.30621054888418px",top:"1254.4px",left:"70px",rotate:"0",borderRadius:"",shadow:"",color:"#218df1"}},{type:"text",text:"实训经历",css:{color:"#fff",background:"rgba(0,0,0,0)",width:"306.21000000000004px",height:"71.49999999999999px",top:"1271.61px",left:"98.79000000000002px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"50px",fontWeight:"bold",maxLines:"2",lineHeight:"72.15000000000002px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:e.data.school_name,css:{color:"#000000",background:"rgba(0,0,0,0)",width:"1750px",height:"51.480000000000004px",top:"780.44px",left:"70.00000000000001px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"36px",fontWeight:"normal",maxLines:"2",lineHeight:"51.94800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:e.data.major,css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"1750px",height:"51.480000000000004px",top:"833.31px",left:"70.00000000000001px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"36px",fontWeight:"normal",maxLines:"2",lineHeight:"51.94800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:e.data.study_json.length>0?e.data.study_json[0].content:"this.data.study_json[0].content丢失",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"1750px",height:"51.480000000000004px",top:"1046.33px",left:"70.00000000000001px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"36px",fontWeight:"normal",maxLines:"2",lineHeight:"51.94800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:e.data.study_json.length>0?e.data.study_json[1].content:"this.data.study_json[1].content丢失",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"1750px",height:"51.480000000000004px",top:"1101.2px",left:"70.00000000000001px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"36px",fontWeight:"normal",maxLines:"2",lineHeight:"51.94800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:e.data.study_json.length>=3?e.data.study_json[2].content:"this.data.study_json[2].content丢失",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"1750px",height:"51.480000000000004px",top:"1153.58px",left:"70.00000000000001px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"36px",fontWeight:"normal",maxLines:"2",lineHeight:"51.94800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:"岗位："+e.data.practical.length>0?e.data.practical[0].station:"",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"1750px",height:"51.480000000000004px",top:"1425.28px",left:"70.00000000000001px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"36px",fontWeight:"normal",maxLines:"2",lineHeight:"51.94800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:"实训收获："+e.data.practical.length>0?e.data.practical[0].harvest:"",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"1750px",height:"51.480000000000004px",top:"1488.38px",left:"70.00000000000001px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"36px",fontWeight:"normal",maxLines:"2",lineHeight:"51.94800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:"岗位："+e.data.practical2.length>0?e.data.practical2[0].station:"",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"1750px",height:"51.480000000000004px",top:"1760.09px",left:"67.00000000000001px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"36px",fontWeight:"normal",maxLines:"2",lineHeight:"51.94800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:e.data.vocation_json.length>0?e.data.vocation_json[0].content:"",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"1750px",height:"51.480000000000004px",top:"2068.99px",left:"70.00000000000001px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"36px",fontWeight:"normal",maxLines:"2",lineHeight:"51.94800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:e.data.talent_json.length>0?e.data.talent_json[0].content:"",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"1750px",height:"51.480000000000004px",top:"2133.5999999999995px",left:"70.00000000000001px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"36px",fontWeight:"normal",maxLines:"2",lineHeight:"51.94800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:"工作收获："+e.data.practical2.length>0?e.data.practical2[0].harvest:"",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"1750px",height:"51.480000000000004px",top:"1818px",left:"68px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"36px",fontWeight:"normal",maxLines:"2",lineHeight:"51.94800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:"企业名称："+e.data.practical.length>0?e.data.practical[0].enterprise_name:"",css:{color:"#000000",background:"rgba(0,0,0,0)",width:"1750px",height:"51.480000000000004px",top:"1370px",left:"70.00000000000001px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"36px",fontWeight:"normal",maxLines:"2",lineHeight:"51.94800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:e.data.practical.length>0?e.data.practical[0].year:"",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"92.99761768315466px",height:"51.480000000000004px",top:"1370px",left:"1732px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"36px",fontWeight:"normal",maxLines:"2",lineHeight:"51.94800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:"企业名称："+e.data.practical2.length>0?e.data.practical2[0].enterprise_name:"",css:{color:"#000000",background:"rgba(0,0,0,0)",width:"1750px",height:"51.480000000000004px",top:"1699px",left:"67.00000000000001px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"36px",fontWeight:"normal",maxLines:"2",lineHeight:"51.94800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}},{type:"text",text:e.data.practical2.length>0?e.data.practical2[0].year:"",css:{color:"#a7a7a7",background:"rgba(0,0,0,0)",width:"88.11248698235431px",height:"51.480000000000004px",top:"1699px",left:"1727px",rotate:"0",borderRadius:"",borderWidth:"",borderColor:"#000000",shadow:"",padding:"0px",fontSize:"36px",fontWeight:"normal",maxLines:"2",lineHeight:"51.94800000000001px",textStyle:"fill",textDecoration:"none",fontFamily:"",textAlign:"left"}}]}}))}))},methods:{onImgOk:function(t){console.log("成功"+t.detail.path),this.imgPath=t.detail.path},onImgErr:function(t){console.log("失败"+t)},resumeTo:function(){var e=this.imgPath;t.saveImageToPhotosAlbum({filePath:e,success:function(){t.showToast({title:"保存成功",icon:"none"})},fail:function(){t.showToast({title:"保存失败",icon:"none"})}})},resumeToList:function(){var e=this,o=t.getStorageSync("token"),i=this.resumeName+":"+this.data.name+"-"+Math.floor(100*Math.random()+1);a.uploadFile({url:"".concat(getApp().globalData.baseUrl,"/user/uploadannex"),filePath:this.imgPath,name:"file",formData:{file:i,filename:i},header:{token:o},files:[{filename:i}],success:function(o){var a=JSON.parse(o.data);console.log(a.code,111),1==a.code&&"上传成功"==a.msg?(t.showToast({icon:"none",duration:1500,title:a.msg}),e.page=1,e.list=[],e.getList()):t.showToast({icon:"none",duration:1500,title:a.msg})},fail:function(e){t.showToast({icon:"none",duration:1500,title:"简历上传失败"}),console.log(e)}})}}};e.default=r}).call(this,o("543d")["default"],o("bc2e")["default"])},"31c3":function(t,e,o){"use strict";(function(t,e){var a=o("4ea4");o("e25e");a(o("66fd"));var i=a(o("4c02"));t.__webpack_require_UNI_MP_PLUGIN__=o,e(i.default)}).call(this,o("bc2e")["default"],o("543d")["createPage"])},"3b32":function(t,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]},"4c02":function(t,e,o){"use strict";o.r(e);var a=o("3b32"),i=o("c5fb");for(var r in i)["default"].indexOf(r)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(r);o("eddd");var n=o("f0c5"),d=Object(n["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=d.exports},"933f":function(t,e,o){},c5fb:function(t,e,o){"use strict";o.r(e);var a=o("1832"),i=o.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){o.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},eddd:function(t,e,o){"use strict";var a=o("933f"),i=o.n(a);i.a}},[["31c3","common/runtime","common/vendor"]]]);