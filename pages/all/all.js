// pages/all/all.js
Page({
  scrollTopFun(e) {
    let that = this;
    that.top = e.detail.scrollTop;
  },
  detail: function () {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  add_answer:function(){
    wx.navigateTo({
      url: '../add_answer/add_answer'
    })
  },
})