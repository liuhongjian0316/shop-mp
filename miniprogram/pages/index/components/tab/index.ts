// pages/index/components/tab/index.ts
Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    sysInfo: {
      type: Object,
      value: {}
    }
  },
  lifetimes: {
    attached() {

    },
    ready() {
      this.getALlNodeList()
    },
  },
  data: {
    tab: ["首页", "补贴爆款", "拍拍二首", "电脑办公", "男鞋", "数码", "手机", "箱包皮具", "女鞋", "宠物", "爱车", "腕表珠宝", "大家电", "女装"],
    tabNodeList: [{
      bottom: 77,
      dataset: { index: 0, item: "首页" },
      height: 44,
      id: "",
      left: 0,
      right: 52,
      top: 33,
      width: 52,
    }],
    cur: 0,
    left: 0,

    isExpand: false, //展开状态
  },
  methods: {
    // 切换tab
    changeTab(e: any) {
      const { index } = e.currentTarget.dataset
      this.setData({
        cur: index
      })
      this.autoLeft(index)
    },

    // 获取所有tab的节点数据
    getALlNodeList() {
      let _this = this
      for (let i = 0; i < this.data.tab.length; i++) {
        let item = '.tab-scroll-item-' + i
        wx.createSelectorQuery().in(this).select(item).boundingClientRect(data => {
          if (data != null) {
            _this.setData({
              [`tabNodeList[` + i + `]`]: data
            })
          }
        }).exec();
      }
    },

    // 自动left
    autoLeft(index: number) {
      // 总长度
      let scrollWidth = this.data.sysInfo.screenWidth - 80 * (this.data.sysInfo.screenWidth / 750)
      let itemWidth = scrollWidth / 5
      this.setData({
        left: (index - 2) * itemWidth
      })
    },

    // 打开分类
    openClass() {
      this.setData({
        isExpand: !this.data.isExpand
      })
    },
    // 关闭遮罩
    closeMask() {
      this.setData({
        isExpand: !1
      })
    },
  }
})
