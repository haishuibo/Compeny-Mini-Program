// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [

    ],
    moban:[

    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    //获得幻灯片
    wx.request({
      //缺少用户唯一标识，现在的在服务器的控制器里有一个假id = 2
      url: 'https://zykx.cn/xcx/hand.ashx',

      method: 'GET',
      data: {
        action: "GetCarousel"
      },

      header: {

        'Accept': 'application/json'

      },
      success: function (res) {

        that.setData({

          imgUrls: res.data.info

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

    }),
    //获得模版
    wx.request({
      //缺少用户唯一标识，现在的在服务器的控制器里有一个假id = 2
      url: 'https://zykx.cn/xcx/hand.ashx',

      method: 'GET',
      data: {
        action: "GetMoban"
      },

      header: {

        'Accept': 'application/json'

      },
      success: function (res) {

        that.setData({

          moban: res.data.info

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