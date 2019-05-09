/*
 * createTime: 2019/5/6 9:38
 * author: wei.wang
 * description: 本地缓存
 */

let STORAGE_EXPIRE_MAP = 'STORAGE_EXPIRE_MAP';

const storage = window.localStorage;

let Storage = {
    // 获取缓存
    get: function (key) {
        let value = storage.getItem(key);
        try {
            return JSON.parse(value);
        } catch (e) {
            return null;
        }
    },
    // 设置缓存
    set: function (key, object, expire) {
        if (object !== null && object !== undefined) {
            let value = object;
            if (typeof value !== 'string') {
                try {
                    value = JSON.stringify(object);
                } catch (e) {
                    value = null;
                }
            }
            if (value !== null) {
                storage.setItem(key, value);
                if (expire && expire > 0) {
                    let expireAt = new Date().getTime() + expire * 1000;
                    addExpire(key, expireAt);
                }
            }
        }
    },
    // 移除
    remove: function (key) {
        try {
            storage.removeItem(key);
        } catch (e) {
            throw new Error(e.message);
        }
    },
    // 清理
    clear: function () {
        storage.clear();
    }
};

// 设置过期
function addExpire (key, expireAt) {
    let map = Storage.get(STORAGE_EXPIRE_MAP) || {};
    map[key] = expireAt;
    Storage.set(STORAGE_EXPIRE_MAP, map);
}

// 清理过期
async function clearExpire () {
    let map = Storage.get(STORAGE_EXPIRE_MAP) || {};
    let now = new Date().getTime();
    // 记录被删key
    let removedKeys = [];
    for (let key in map) {
        if (map[key] * 1 < now) {
            removedKeys.push(key);
            Storage.remove(key);
            delete map[key];
        }
    }
    Storage.set(STORAGE_EXPIRE_MAP, map);
    return removedKeys;
}

// 过期轮询（每十分钟一次）
setInterval(function () {
    clearExpire().then(removedKeys => {
        afterClear(removedKeys);
    })
},600000);

// 初始化 清理过期缓存
clearExpire().then(removedKeys => {
    afterClear(removedKeys);
});

// 清理过期缓存后操作（更新store中数据）
function afterClear(keys) {
    if (keys.indexOf('USER_INFO') !== -1) {
        Store.commit('user/setData', {storeKey: 'userInfo',storeValue: null});
        Store.commit('user/setData', {storeKey: 'shoppingCartNum',storeValue: null});
    }
}

export default Storage;
