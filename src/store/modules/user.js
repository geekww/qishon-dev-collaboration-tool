export default {
    state: {
        count: 0,
        flag: true
    },
    // mutations里面的提交必须是同步的
    // 更改state中的值只能在mutations中进行
    mutations: {
        increment (state) {
            state.count++
        },
        setFlag (state,newValue) {
            state.flag = newValue
        }
    },
    // actions用于支持异步更改state状态
    actions: {
        increment (context) {
            context.commit('increment')
        },
        // 异步操作
        incrementAsync ({ commit }) {
            setTimeout(() => {
                commit('increment')
            })
        }
    }
};

