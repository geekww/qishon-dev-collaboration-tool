import Vue from 'vue'

// 两位小数过滤器
Vue.filter('Fix2',function (value) {
    value = Number(value);
    let times = Math.pow(10,2);
    let des = value * times + 0.5;
    des = parseInt(des,10) / times;
    return des;
});

// 金额分割器 150000 > 150,000
Vue.filter('goldDivide',function (value) {
    if (value) {
        return Number(value).toLocaleString()
    }
    return value;
});

// 手机号掩码器
Vue.filter('phoneMask',function (value) {
    if (value) {
        return value.substring(0,3) + '****' + value.substring(7,11);
    }
    return value;
});

// 空值置为0
Vue.filter('nullToZero',function (value) {
    if (!value) {
        return 0;
    }
    return value;
});

// 图片过滤器
Vue.filter('imageFilter', function(url) {
    let reg = /(http|https):\/\/([\w.]+\/?)\S*/;
    // 有http头的不处理
    if (reg.test(url)) {
        return url;
    } else{
        // 无http头的先判断是否为空
        if (!!url) {
            // 图片上传兼容IE
            if (url.substring(0,5) === 'blob:') {
                return url;
            }
        }else {
            return getImg(url);
        }
    }
    return url;
});

// 特殊字符过滤器
Vue.filter('filterInput',function (value) {
    return value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\.]/g, "");
});
