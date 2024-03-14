let min = 2000
let max = 100000
let columnsArr = []
let columnDataArr = []

function fn(min = 2000, max = 10000) {
	columnsArr.push(min)
	fn1(min)
	if (min < 50000) {
		min = min + 1000
	} 
	else if (min >= 50000 && min < 100000) {
		min = min + 5000
	}
	else {
		return;
	}
	fn(min)
}
fn()

function fn1(current) {
	let num = 5
	let arr = []
	if (current == 100000) {
		arr.push('100000以上')
	} else {
		for (var i = 0; i < num; i++) {
			current = current + 1000
			arr.push(current)
		}
	}
	columnDataArr.push(arr)
}
export default {
	columnsArr,
	columnDataArr
}
