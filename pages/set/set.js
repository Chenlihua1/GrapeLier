// pages/set/set.js
Page({
  data: {
    switch1: true,
    switch2: false,
    switch3: false
  },
  onChange1(event) {
    const detail = event.detail;
    this.setData({
      'switch1': detail.value,
    })
  },
  onChange2(event) {
    const detail = event.detail;
    this.setData({
      'switch2': detail.value,
    })
  },
  onChange3(event) {
    const detail = event.detail;
    this.setData({
      'switch3': detail.value,
    })
  }
})