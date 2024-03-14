import Vue from 'vue';
import App from './App';
import uView from '@/uni_modules/uview-ui'
import myMixin from './tools/mixin.js';
Vue.use(myMixin);//vue组件复用
Vue.use(uView);//组件
Vue.config.productionTip = false;



Vue.mixin({
	methods: {
		setData: function(obj, callback) {
			let that = this;
			let keys = [];
			let val, data;
			Object.keys(obj).forEach(function(key) {
				keys = key.split('.');
				val = obj[key];
				data = that.$data;
				keys.forEach(function(key2, index) {
					if (index + 1 == keys.length) {
						that.$set(data, key2, val);
					} else {
						if (!data[key2]) {
							that.$set(data, key2, {});
						}
					}
					data = data[key2];
				})
			});
			callback && callback();
		} 
	}
});

App.mpType = 'app';

const app = new Vue({
    ...App
});
app.$mount();


//简历生成图
Vue.prototype.painter = require('@/static/painter/painter.js')