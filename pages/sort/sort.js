// pages/sort/sort.js
Page({
    data: {
      cateItems: [
        {
          cate_id: 1,
          cate_name: "娱乐",
          ishaveChild: true,
          children:
            [
              {
                child_id: 1,
                name: '大西瓜',
                image: "../../img/watermelon.png",
                route:"../detail/detail"
              },
              {
                child_id: 2,
                name: '石榴',
                image: "../../img/pomegranate.png",
                route:"../all/all"
              },
              {
                child_id: 3,
                name: '火龙果',
                image: "../../img/pitaya.png"
              },
              {
                child_id: 4,
                name: '杨桃',
                image: "../../img/starfruit.png"
              }
            ]
        },
        {
          cate_id: 2,
          cate_name: "体育",
          ishaveChild: true,
          children:
            [
              {
                child_id: 1,
                name: '菠萝',
                image: "../../img/pineapple.png"
              },
              {
                child_id: 2,
                name: '桃子',
                image: "../../img/pink.png"
              },
              {
                child_id: 3,
                name: '荔枝',
                image: "../../img/lichi.png"
              },
              {
                child_id: 4,
                name: '葡萄',
                image: "../../img/grape.png"
              },
              {
                child_id: 5,
                name: '柠檬',
                image: "../../img/lemon.png"
              },
              {
                child_id: 6,
                name: '车厘子',
                image: "../../img/cherry.png"
              },
              {
                child_id: 7,
                name: '蓝莓',
                image: "../../img/blueberry.png"
              },
              {
                child_id: 8,
                name: '榴莲',
                image: "../../img/durian.png"
              }
            ]
        },
        {
          cate_id: 3,
          cate_name: "科技",
          ishaveChild: true,
          children:
            [
              {
                child_id: 1,
                name: '香蕉',
                image: "../../img/banana.png"
              },
              {
                child_id: 2,
                name: '猕猴桃',
                image: "../../img/kiwi.png"
              },
              {
                child_id: 3,
                name: '芒果',
                image: "../../img/mango.png"
              },
              {
                child_id: 4,
                name: '甜瓜',
                image: "../../img/melon.png"
              }
            ]
        },
        {
          cate_id: 4,
          cate_name: "游戏",
          ishaveChild: false,
          children: []
        },
        {
          cate_id:5,
          cate_name:"财经",
          ishaveChile:false,
          children:[]
        }
      ],
      curNav: 1,
      curIndex: 0
      },
  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  cateItems: function () {
    this.setData({
      route: route
    })
  }
})