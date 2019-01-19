//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '北大软微',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //课表

    data: {

      colorArrays: [ "#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],

  wlist: [

    { "xqj": 1, "skjc": 1, "skcd": 3, "kcmc": "算法" },
    
    { "xqj": 1, "skjc": 5, "skcd": 3, "kcmc": "人工智能实践" },

    { "xqj": 2, "skjc": 1, "skcd": 2, "kcmc": "离散数学" },

    { "xqj": 2, "skjc": 8, "skcd": 2, "kcmc": "面向对象" },

    { "xqj": 3, "skjc": 4, "skcd": 1, "kcmc": "数据分析工具实践" },

    { "xqj": 3, "skjc": 8, "skcd": 1, "kcmc": "移动平台与应用开发" },

    { "xqj": 3, "skjc": 5, "skcd": 2, "kcmc": "机器学习" },

    { "xqj": 4, "skjc": 2, "skcd": 3, "kcmc": "计算机基础" },

    { "xqj": 4, "skjc": 8, "skcd": 2, "kcmc": "英语" },

    { "xqj": 5, "skjc": 1, "skcd": 2, "kcmc": "素质教育" },

    { "xqj": 6, "skjc": 3, "skcd": 2, "kcmc": "云计算技术与应用" },



    { "xqj": 7, "skjc": 5, "skcd": 3, "kcmc": "数据挖掘" }]

},
 onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
