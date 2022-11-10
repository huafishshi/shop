export default {
    state:{
        userinfo:{
            username:'',
            password:''
        }
    },
    mutations:{
        setUserInfo(state,uInfo){
            state.userInfo = uInfo
        }
    }
}