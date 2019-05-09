import Vue from 'vue';

// 获取图片完整路径
global.getImg = function (e) {
    return filter.imgFilter(e);
};

// 获取错误图片
global.errImg = function (e) {
    // e.target.src = require('../assets/images/common/error.png');
};

// 获取视频完整路径
global.getVideo = function (e) {
    return filters.videoFilter(e);
};

// 跳转路由
global.goToPath = function (path, params) {
    this.$router.push({
        path: path,
        params: params
    })
};

// 手机号验证
global.isPhone = function (value) {
    let reg = /^1(((5[0-35-9][0-9])|([34879][0-9]{2}))[0-9]{7})$/;
    if (typeof value === 'string') {
        value = parseInt(value);
    }
    return reg.test(value);
};

// 验证密码复杂程度 6-20个字母、数字、符号
global.checkPasswordLevel = function (value) {
    let ls = 0;
    if (value.length < 6) {
        return ls;
    }
    if (value.match(/([a-z])+/)) {
        ls++;
    }
    if (value.match(/([0-9])+/)) {
        ls++;
    }
    if (value.match(/([A-Z])+/)) {
        ls++;
    }
    if (value.match(/[^a-zA-Z0-9]+/)) {
        ls++;
    }
    return ls;
};

// 邮箱校验
global.isEmail = function (value) {
    let reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/g;
    return reg.test(value);
};

// 时间格式化
global.formatTime = function (date) {
    date = new Date(date);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    let h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    let min = date.getMinutes();
    min = min < 10 ? ('0' + min) : min;
    let s = date.getSeconds();
    s = s < 10 ? ('0' + s) : s;
    return y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s;
};















