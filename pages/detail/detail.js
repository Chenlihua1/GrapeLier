// pages/detail/detail.js
Page({
  data :{
    top: 0
  },
//控制回到顶部按钮的显示与消失
scrollTopFun(e) {
    let that = this;
    that.top = e.detail.scrollTop;
  },
  all: function () {
    wx.navigateTo({
      url: '../all/all'
    })
  },
  input_answer:function(){
    wx.navigateTo({
      url:'../answer/answer',
    })
  },
})