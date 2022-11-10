import { createStore } from 'vuex'

export default createStore({
    //全局的状态初始化值
    state:{
        count:1,
    },
    //计算state.获取对应的值
    getters:{

    },
    //更新状态的方法--更新state的唯一方法，提交 commit mutations
    mutations:{

    },
    //可以异步操作，可以返回 promise ,更改数据还是传递到mutations去更改
    actions:{

    },
    //数据比较多，分模块
    modules:{

    }
})