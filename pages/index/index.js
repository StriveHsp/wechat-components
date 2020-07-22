//index.js
//获取应用实例
const app = getApp()

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
		console.log(1)
		wx.navigateTo({
			url: "../demo1/index"
		});
	},
})
