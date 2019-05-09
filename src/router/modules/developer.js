/*
 * createTime: 2019/5/8 18:49
 * author: wei.wang
 * description: 开发者路由
 */

export default [
    {
        path: '/developer',
        name: 'developer',
        component: () => import('@/pages/developer/page'),
        meta: {
            title: '开发者'
        }
    }
]
