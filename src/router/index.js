/*
 * createTime: 2019/5/8 10:53
 * author: wei.wang
 * description: 项目总路由表
 */

import Vue from 'vue';
import Router from 'vue-router';

import collaborative from '@/router/modules/collaborative'    // 协同开发
import developer from '@/router/modules/developer'    // 开发者

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: {
                name: 'index'
            }
        },
        {
            path: '/index',
            name: 'index',
            meta: {
                title: '启尚开发协同平台'
            },
            component: () => import('@/pages/index/page'),
        },
        ...collaborative,
        ...developer
    ]
});

router.beforeEach((to, from, next) => {
    // 路由进入前执行，路由变化修改title？
    if(to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});
router.afterEach((to, from) =>{});

export default router
