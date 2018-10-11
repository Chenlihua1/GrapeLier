Page({

  /**
   * 页面的初始数据
   */
  data: {
    switch:true
  },
  onChange(event) {
    const detail = event.detail;
    this.setData({
      'switch1': detail.value
    });

  }
})