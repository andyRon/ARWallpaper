import { request } from "@/utils/request.js";

// 首页海报列表
export const apiGetBanner = () => {
	return request({
		url:"/homeBanner"		
	})	
}

// 随机9张壁纸
export const apiGetDayRandom = () => {
	return request({url:"/randomWall"})
}

// 壁纸资讯公告列表
export const apiGetNotice = (data={}) => {
	return request({
		url:"/wallNewsList",
		data
	})
}

// 壁纸大分类
export const apiGetClassify = (data={}) => {
	return request({
		url:"/classify",
		data
	})
}

// 分类中壁纸列表（分类详情）
export const apiGetClassList = (data={}) => {
	return request({
		url:"/wallList",
		data
	})
}

// 为壁纸评分
export const apiGetSetupScore = (data={}) => {
	return request({
		url:"/setupScore",
		data
	})
}

// 壁纸下载
export const apiWriteDownload = (data={}) => {
	return request({
		url:"/downloadWall",
		data
	})
}

// 单个壁纸详情
export const apiDetailWall = (data={}) => {
	return request({
		url:"/detailWall",
		data
	})
}

// 用户个人信息
export const apiUserInfo = (data={}) => {
	return request({
		url:"/userInfo",
		data
	})
}

// 我的评分/下载列表
export const apiGetHistoryList = (data={}) => {
	return request({
		url:"/userWallList",
		data
	})
}

// 壁纸资讯公告详情
export const apiNoticeDetail = (data={}) => {
	return request({
		url:"/wallNewsDetail",
		data
	})
}

// 搜索壁纸
export const apiSearchData = (data={}) => {
	return request({
		url:"/searchWall",
		data
	})
}
