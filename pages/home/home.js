// pages/home/home.js
Page({
  data: {
    bindtapenter: '进入',
  },
  suo:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  all: function () {
    wx.navigateTo({
      url: '../all/all'
    })
  },
})