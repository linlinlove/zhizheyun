require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["resume_pages/electronic_contract/electronic_contract"],{"03df":function(e,t,o){"use strict";o.r(t);var n=o("9974"),i=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},"97d9":function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){}));var n=function(){var e=this.$createElement;this._self._c},i=[]},9974:function(e,t,o){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{webViewUrl:"",editText:"",isShow:"edit",dataInfo:{},lineColor:"black",slideValue:50,handwriting:"",selectColor:"black",color:"",showimg:"",share_popup:!1,editValue:"",editId:4,editFlag:!1,editFlagInd:"",editArr:[{id:2,type:"img",url:"http://tmp/wx882474815048b124.o6zAJs6zLBrqHZ6rE0r60_jbIB-I.iJl90E6G2DmW54aff795486e1f09393fe05826536b54.png",width:375,height:250,active:!1,top:0,left:0},{id:3,type:"text",text:"这是一段文字",color:"#ffffff",width:50,height:50,active:!1,top:300,left:100,radius:0,rotate:0}],imgRotate:0,shapeBox:"tx"}},onShow:function(){this.webViewUrl="https://电子合同"},onLoad:function(){},methods:{message:function(e){console.log(e);var t=e.detail.data[0].imgData;this.saveImageToPhotosAlbum(t)},saveImageToPhotosAlbum:function(t){var n=(new Date).getTime(),i=e.env.USER_DATA_PATH+"/-"+n+".png";o.getFileSystemManager().writeFile({filePath:i,data:t,encoding:"base64",success:function(e){o.saveImageToPhotosAlbum({filePath:i,success:function(e){o.showToast({title:"图片保存成功",icon:"none"}),console.log("保存成功")},fail:function(e){console.log(e.errMsg),o.showToast({title:"图片保存失败",icon:"none"})}})},fail:function(e){console.log(e),o.showToast({title:"图片保存失败",icon:"none"})}})}}};t.default=n}).call(this,o("bc2e")["default"],o("543d")["default"])},d506:function(e,t,o){"use strict";o.r(t);var n=o("97d9"),i=o("03df");for(var a in i)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(a);var c=o("f0c5"),l=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);t["default"]=l.exports},e7a5:function(e,t,o){"use strict";(function(e,t){var n=o("4ea4");o("e25e");n(o("66fd"));var i=n(o("d506"));e.__webpack_require_UNI_MP_PLUGIN__=o,t(i.default)}).call(this,o("bc2e")["default"],o("543d")["createPage"])}},[["e7a5","common/runtime","common/vendor"]]]);