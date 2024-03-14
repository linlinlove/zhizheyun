import request from './request.js'

export const jobdetails=(params)=>{
	return request({
		url: "/wanted/jobdetails",
		method: "post",
		data: params,
	})
}
/* 添加沟通记录 */
export const addconnect=(params)=>{
	return request({
		url: "/wanted/addconnect",
		method: "post",
		data: params,
	})
}
/* 产业课程 */
export const curriculumList=(params)=>{
	return request({
		url: "/index/curriculum_list",
		method: "post",
		data: params,
	})
}
/* 产业课程详情 */
export const curriculumDetails=(params)=>{
	return request({
		url: "/index/curriculum_details",
		method: "post",
		data: params,
	})
}


/* 直播列表 */
export const liveList = (params) => {
	return request({
		url: "/index/live",
		method: "post",
		data: params,
	})
}
/* 热门职位分类 */
export const indexHotPoptype = (params) => {
	return request({
		url: "/index/poptype",
		method: "post",
		data: params,
	})
}
/* 首页banner 和 热门企业*/
export const indexBanner = (params) => {
	return  request({
		url: "/index/getbanner",
		method: "post"
	})
}
/* 热门职位岗位列表 */
export const indexHotposition=(params)=>{
	return request({
		url: "/index/position",
		method: "post",
		data:params
	})
}
/* 公司详情 */
export const companyDetail=(params)=>{
	return request({
		url: "/index/enterprise",
		method: "post",
		data:params
	})
}
/* 公司里面的职位 */
export const companyList=(params)=>{
	return request({
		url: "/wanted/enterprise_list",
		method: "post",
		data:params
	})
}

/* 热门职位岗位详情 */
export const hotPositionDetail=(params)=>{
	return request({
		url: "/index/getposition",
		method: "post",
		data:params
	})
}
/* 已有token获取微信资料 */
export const getWxUserinfo=(params)=>{
	return request({
		url:'/user/getwx',
		method:"POST",
		data:params
	})
}
/* 传nickname修改 */
export const changeNickName=(params)=>{
	return request({
		url:'/user/changeNickName',
		method:"POST",
		data:params
	})
}
/* 获取手机号并登录 传参code返回登录token*/
export const getWxPhone=(params)=>{
	return request({
		url:'/user/getWxPhone',
		method:"POST",
		data:params
	})
}
/* 登录后 更新已注册im登录状态*/
export const upRegister=(params)=>{
	return request({
		url:'/user/update_im',
		method:"POST",
		data:params
	})
}
/* 论坛列表 */
export const forumList=(params)=>{
	return request({
		url:'/forum/index',
		method:"POST",
		data:params
	})
}
/* 回答论坛 */
export const answerForum=(params)=>{
	return request({
		url:'/forum/addanswer',
		method:"POST",
		data:params
	})
}
/* 回答列表 */
export const answerList=(params)=>{
	return request({
		url:'/forum/answer',
		method:"POST",
		data:params
	})
}
/* 论坛详情 */
export const forumDetail=(params)=>{
	return request({
		url:'/forum/seeforum',
		method:"POST",
		data:params
	})
}
/* 发布问题 */
export const addForum=(params)=>{
	return request({
		url:'/forum/addforum',
		method:"POST",
		data:params
	})
}

/* 添加求职期望 */
export const addexpect=(params)=>{
	return request({
		url:'/wanted/addexpect',
		method:"POST",
		data:params
	})
}
/* 删除求职期望 */
export const delexpect=(params)=>{
	return request({
		url:'/wanted/delexpect',
		method:"POST",
		data:params
	})
}
/* 就业定制 */
export const employment=(params)=>{
	return request({
		url:'/wanted/employment',
		method:"POST",
		data:params
	})
}
/* 就业定制详情 */
export const employmentDetail=(params)=>{
	return request({
		url:'/wanted/getemployment',
		method:"POST",
		data:params
	})
}
/* 职位推荐tab */
export const expectName=(params)=>{
	return request({
		url:'/wanted/expect_name',
		method:"POST",
		data:params
	})
}
/* 职位，搜索岗位 */
export const serachPositionList=(params)=>{
	return request({
		url:'/wanted/position_list',
		method:"POST",
		data:params
	})
}
/*  */
/* 职位推荐list */
export const expectlist=(params)=>{
	return request({
		url:'/wanted/expectlist',
		method:"POST",
		data:params
	})
}


/* 教育经历 */
export const eduInfo=(params)=>{
	return request({
		url:'/user/setedu',
		method:"POST",
		data:params
	})
}
/* 查看教育经历 */
export const seeedu=(params)=>{
	return request({
		url:'/user/seeedu',
		method:"POST",
		data:params
	})
}

/* 添加实训/工作经历 */
export const wordOrNow=(params)=>{
	return request({
		url:'/wanted/addpractical',
		method:"POST",
		data:params
	})
}
/* 查看实训/工作经历 */
export const showWordOrNow=(params)=>{
	return request({
		url:'/wanted/seepractical',
		method:"POST",
		data:params
	})
}
/* 面试列表 */
export const interviewList=(params)=>{
	return request({
		url:'/wanted/interview',
		method:"POST",
		data:params
	})
}
/* 面试详情 */
export const interviewDetail=(params)=>{
	return request({
		url:'/wanted/seeinterview',
		method:"POST",
		data:params
	})
}

/* 在线简历 */
export const online=(params)=>{
	return request({
		url:'/user/online',
		method:"POST",
		data:params
	})
}
/* 投递简历 */
export const putResume=(params)=>{
	return request({
		url:'/user/deliver',
		method:"POST",
		data:params
	})
}
/* 简历列表 */
export const annexListw=(params)=>{
	return request({
		url:'/user/annex_list',
		method:"POST",
		data:params
	})
}
/* 删除简历 */
export const annexDel=(params)=>{
	return request({
		url:'/user/annex_del',
		method:"POST",
		data:params
	})
}

/* 添加创新创业 */
export const addInnovating=(params)=>{
	return request({
		url:'/user/add_innovating',
		method:"POST",
		data:params
	})
}
/* 创新创业列表 */
export const innovatingList=(params)=>{
	return request({
		url:'/user/innovating_list',
		method:"POST",
		data:params
	})
}
/* 获取学生基本信息 */
export const getUserFn=()=>{
	return request({
		url:'/user/getUser',
		method:"POST",
	})
}
/* 设置学生基本信息  扫码进来的或者单独自己登陆小程序的*/
export const basicInfo=(params)=>{
	return request({
		url:'/user/setessential',
		method:"POST",
		data:params
	})
}
/* 完善学生基本信息  后台导入的学生信息*/
export const setbasic=(params)=>{
	return request({
		url:'/user/improve',
		method:"POST",
		data:params
	})
}
/* 申诉提交*/
export const appealedu=(params)=>{
	return request({
		url:'/user/appealedu',
		method:"POST",
		data:params
	})
}
//获取就业定制banner图
export const getconfig=(params)=>{
	return request({
		url:'/index/getconfig',
		method:"POST",
		data:params
	})
}

//
export const eduPractical=(params)=>{
	return request({
		url:'/user/edu_practical',
		method:"POST",
		data:params
	})
}
//创新创业详情
export const innovating_details=(params)=>{
	return request({
		url:'/user/innovating_details',
		method:"POST",
		data:params
	})
}

export const demand_list=(params)=>{
	return request({
		url:'/index/demand_list',
		method:"POST",
		data:params
	})
}
export const demand_details=(params)=>{
	return request({
		url:'/index/demand_details',
		method:"POST",
		data:params
	})
}
export const getpop=(params)=>{
	return request({
		url:'/user/getpop',
		method:"POST",
		data:params
	})
}
export const practicalPop=(params)=>{
	return request({
		url:'/user/practical_pop',
		method:"POST",
		data:params
	})
}
