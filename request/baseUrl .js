
let beaeUrl;
// uEnvDev
if (process.env.NODE_ENV === 'development') {
   // beaeUrl = 'https://yzzc.westts.cn/index.php/api'
   // beaeUrl = 'https://yzzc.westts.cn/api'
   beaeUrl = 'https://pc.szzn.group/api'
   // console.log('开发环境----request/beaeUrl.js');
   // https://yzzc.westts.cn/测试服务器
}

if (process.env.NODE_ENV === 'production') {
	// beaeUrl = 'https://yzzc.westts.cn/index.php/api'
    // beaeUrl = 'https://yzzc.westts.cn/api'
	beaeUrl = 'https://pc.szzn.group/api'
	 // console.log('生产环境----request/beaeUrl.js');
}

export default beaeUrl