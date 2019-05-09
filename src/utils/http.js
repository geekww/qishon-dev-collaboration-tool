/*
 * createTime: 2019/5/6 10:00
 * author: wei.wang
 * description: axios二次封装
 */

import axios from 'axios'
import Storage from './storage'

axios.default.timeout = 20000;
// axios.default.baseUrl = baseConstant.serverUrl;

// 添加请求拦截器
axios.interceptors.request.use((config) => {
    return config;
});

const http = {
    // get请求方法
    async get(url, params = {}) {
        let token = await tokenManager.getCilentToken()
        let company = Storage.get('COMPANYID')
        let userInfo = Storage.get('USER_INFO')
        try {
            if (company !== null) {
                params.ownCompanyId = company.company_id
                params.companyId = company.company_id
            }
            if (userInfo !== null) {
                params.usrId = userInfo.usrId
            }
        } catch (e) {}
        // 全局请求加时间戳
        // params.timeStamp = Date.parse(new Date());
        return axios.get(url, {
            params: params,
            headers: {
                Authorization: 'Bearer ' + token,
                ownCompanyId: params.ownCompanyId,
                'Cache-Control':'no-cache',
                'Pragma':'no-cache',
            }
        })
    },
    // post请求方法
    post: async function (url, data = {}) {
        let token = await tokenManager.getCilentToken()
        let company = Storage.get('COMPANYID')
        let userInfo = Storage.get('USER_INFO')
        try {
            if (company !== null) {
                data.ownCompanyId = company.company_id
                data.companyId = company.company_id
            }
            if (userInfo !== null) {
                data.usrId = userInfo.usrId
            }
        } catch (e) {}
        return axios.post(url, data,{
            headers: {
                Authorization: 'Bearer ' + token,
                ownCompanyId: data.ownCompanyId,
            }
        })
            .then((res) =>{
                return res
            })
    },
}











