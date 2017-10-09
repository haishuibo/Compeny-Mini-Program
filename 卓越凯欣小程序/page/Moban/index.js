// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobaninfo: [

    ],
    imgUrls: [

    ],
    xiangqingtitle: "",
    market_price:"",
    sell_price:"",
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    defaultSize: 'mini',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  input_goumai:function(e){
    wx.requestPayment({
      "timeStamp": "",
      "nonceStr": "",
      "package": "",
      "signType": "MD5",
      "paySign": "",
      "success": function (res) {
      },
      "fail": function (res) {
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获得模版详情
    wx.request({
      //缺少用户唯一标识，现在的在服务器的控制器里有一个假id = 2
      url: 'https://zykx.cn/xcx/hand.ashx',
      method: 'GET',
      data: {
        action: "GetMobanInfo",
        id: options.id
      },

      header: {

        'Accept': 'application/json'

      },
      success: function (res) {

        that.setData({

          mobaninfo: res.data.info,
          xiangqingtitle: res.data.name,
          sell_price: res.data.sell_price,
          market_price: res.data.market_price

        })
        console.log(res.data);

      },

      fail: function () {

        wx.showToast({

          title: '服务器网络错误!',

          icon: 'loading',

          duration: 1500

        })

      }

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})