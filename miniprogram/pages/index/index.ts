const app = getApp<IAppOption>()

Page({
  data: {
    swiperList: [
      {
        img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
        url: '/pages/document/system/system',
        type: 'navigateTo' //直接跳转类型
      },
      {
        img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
        url: '/pages/custom/home',
        type: 'switchTab' //直接跳转类型
      },
      {
        img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg',
        type: 'eve' //事件方式
      },
      {
        img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
        type: 'eve'
      },
    ],
    mainCur: 0,
  },

  onLoad() {

  },

  // 切换swiper
  changeSwiper(e: any) {
    let { current } = e.detail
    this.setData({
      mainCur: current
    })
  },


})
