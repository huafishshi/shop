import { createStore } from 'vuex'
import number from '../store/num.state.js'
import userInfo from '../store/userinfo.state.js'

export default createStore({
    modules:{
        number,
        userInfo
    }
})