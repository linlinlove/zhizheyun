export default {
	install(Vue) {
		Vue.mixin({
			methods: {
				pagingFn(e) {
					console.log(11111,e);
					if (this.page < this.last_page) {
						this.page = this.page + 1;
						console.log(this.page);
						console.log(22222);
					}
				}
			}
		})
	}
}
