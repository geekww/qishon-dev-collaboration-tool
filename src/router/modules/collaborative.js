/*
 * createTime: 2019/5/8 13:54
 * author: wei.wang
 * description: 主页面路由
 */

export default [
    {
        path: '/collaborative',
        name: 'collaborative',
        component: () => import('@/pages/collaborative/page'),
        meta: {
            title: '协同开发'
        },
        children: [
            {
                path: '/collaborative/guid',
                name: 'collaborativeGuid',
                component: () => import('@/pages/collaborative/components/guid'),
                meta: {
                    title: '协同开发指南 | Qstool'
                }
            },
            {
                path: '/collaborative/color',
                name: 'collaborativeColor',
                component: () => import('@/pages/collaborative/components/color'),
                meta: {
                    title: '颜色 | Qstool'
                }
            }
        ]
    }
]
