//index.js
//获取应用实例
const app = getApp()

const baseNavbarUrl = "../navbarDemo"

Page({
  data: {
		marginTop: 0
  },
	onLoad(){
		this.setData({
			marginTop: wx.getSystemInfoSync().statusBarHeight + 44
		})
	},
	onGoDemoOne(){
		wx.navigateTo({
			url: baseNavbarUrl + "/demo1/demo1"
		});
	},
})
