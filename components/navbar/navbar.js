// 在自定义组件的 js 文件中，需要使用 Component() 来注册组件，并提供组件的属性定义、内部数据和自定义方法。
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    navTitle: {
      type: String,
      value: 'default value',
    },
  },
  data: {
    // 这里是一些组件内部数据
		// 导航栏高度
		statusBarHeight: 0,
  },
	created(){
		
	},
	attached(){
		// 导航栏高度
		this.setData({
			statusBarHeight: 	wx.getSystemInfoSync().statusBarHeight
		})
	}
})
