// Index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    webtype:[
      {images:"https://zykx.cn/images/index_01.jpg",name:"产品型网站建设"},
      {images: "https://zykx.cn/images/index_02.jpg", name: "营销型网站建设"},
      {images: "https://zykx.cn/images/index_03.jpg", name: "手机网站建设"},
      {images:"https://zykx.cn/images/index_04.jpg", name: "小程序制作"},
    ],
    hezuotitle:{
      images: "../../image/icon_hezuo.png", 
      heuzoliu: "我们的合作流程"
    },
    hezuocontent:[
      {images:"../../image/liu1.jpg", name: "网站策划"},
      {images:"../../image/liu2.jpg", name: "网站制作"},
      {images:"../../image/liu3.jpg", name: "网站推广"},
      {images:"../../image/liu4.jpg", name: "网站运营"},
    ],
    anlititle: {
      images: "../../image/icon_anli.png",
      heuzoliu: "案例展示"
    },
    anli:[
     
    ]
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
      //案例
      wx.request({
        //缺少用户唯一标识，现在的在服务器的控制器里有一个假id = 2
        url: 'https://zykx.cn/xcx/hand.ashx',

        method: 'GET',
        data: {
          action: "GetAnLi"
        },

        header: {

          'Accept': 'application/json'

        },
        success: function (res) {

          that.setData({

            anli: res.data.info

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