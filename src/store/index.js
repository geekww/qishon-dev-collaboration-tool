import Vue from "vue";
import Vuex from "vuex";

// 数据持久化
import createPersistedState from "vuex-persistedstate";

import user from "./modules/user";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user
    },
    plugins: [
        createPersistedState({
            key: "store",
            storage: window.sessionStorage
        })
    ]
});
