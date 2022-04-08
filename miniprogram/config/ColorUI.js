//框架核心配置
import ColorUI from '../mp-cu/main'
export const colorUI = new ColorUI({
    config: {
        theme: 'light',
        main: 'purple',
        text: 1,
        footer: true,
        share: true,
        shareTitle: 'GO商城',
        homePath: '/pages/home/home',
        tabBar: [{
            title: '首页',
            icon: '_icon-home-o icon-sm',
            curIcon: '_icon-home icon-sm',
            url: '/pages/home/home',
            type: 'tab'
        },
        {
            title: '产品',
            icon: 'cicon-circle-o icon-sm',
            curIcon: 'cicon-circle icon-sm',
            url: '/pages/template/home',
            type: 'tab'
        },
        {
            title: '选型',
            icon: 'cicon-search-o icon-sm',
            curIcon: 'cicon-search icon-sm',
            url: '/pages/custom/home',
            type: 'tab'
        },
        {
            title: '我的',
            icon: 'cicon-my-o icon-sm',
            curIcon: 'cicon-my icon-sm',
            url: '/pages/my/home',
            type: 'tab'
        }],
    }
})