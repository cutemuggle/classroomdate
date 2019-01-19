Page({

  /**
   * 页面的初始数据
   */
  data: {
    output: "none"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var url = "http://localhost:8080/classroom/showByBName?buildingName=研发楼";
    var params = {
      output: "json",
    }
      wx.request({
        url: url,
        data: params,
        success: function(res) {
          console.log(res)
          var id = res.data.data[0].id;
          var buildingName = res.data.data[0].buildingName;
          var roomNumber = res.data.data[0].roomNumber;
          var capacity = res.data.data[0].capacity;
          that.setData({
            output: {
              id: id,
              buildingName: buildingName,
              roomNumber: roomNumber,
              capacity: capacity  
            },
          })
          console.log("id:" + id + " buildingName:" + buildingName + "roomNumber:" +roomNumber + "capacity:" + capacity);
        },
        fail: function(res) {},
        complete: function(res) {},
      })

  },

  inputid: function (e) {
    this.setData({
      id: e.detail.value
    });
  },
  inputbuildingName: function (e) {
    this.setData({
      buildingName: e.detail.value
    })
  },
  inputroomNumber: function (e) {
    this.setData({
      roomNumber: e.detail.value
    })
  },
  inputcapacity: function (e) {
    this.setData({
      capacity: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})


