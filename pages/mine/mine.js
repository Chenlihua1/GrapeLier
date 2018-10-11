// pages/mine/mine.js
var app = getApp()
var routes = require('routes');
Page({
  data: {
    motto: '欢迎登录',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    cellHeight: '100px',
    pageItems: []
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
    var that = this
    console.log(app);
    //调用应用实例的方法获取全局数据
      var pageItems = [];
      var row = [];
      var len = routes.PageItems.length;//重组PageItems
      len = Math.floor((len + 2) / 3) * 3;
      for (var i = 0; i < len; i++) {
        if ((i + 1) % 3 == 0) {
          row.push(routes.PageItems[i]);
          pageItems.push(row);
          row = [];
          continue;
        }
        else {
          row.push(routes.PageItems[i]);
        }
      }
      wx.getSystemInfo({
        success: function (res) {
          var windowWidth = res.windowWidth;
          that.setData({
            cellHeight: (windowWidth / 3) + 'px'
          })
        },
        complete: function () {
          that.setData({
            pageItems: pageItems
          })
        }
      })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
