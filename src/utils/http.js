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
        // let token = await tokenManager.getCilentToken();
    }
}











