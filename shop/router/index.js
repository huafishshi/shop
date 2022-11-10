import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
//哈希与历史模式
import Layout from '../src/components/HelloWorld.vue'
import store from '../store/index.js'  //路由配置

//路由配置
const routes =[
    //登陆页面
    {
        path:'/login',
        name:'login',
        component:()=>import('../src/components/login.vue')
    },

    {
      path:"/",
      name:"layout",
      component: Layout,
      children:[
          {       //角色列表页
              path: '/roles',
              name:'roles',
              component:()=>import("../src/components/LayOut/rolesList.vue")
          },
          {
              //用户列表页
              path: '/user',
              name:'user',
              component:()=>import("../src/components/LayOut/userList.vue")
          },
      ]
    },

    {

    }

]
//生成hash路由对象
const router= createRouter({
    history: createWebHashHistory(process.env.BASE_URL),//哈希模式
    // history: createWebHistory(),
    routes
})

// 全局路由守卫
// router.beforeEach((to,form,next)=>{
// //    to 从哪个页面来，
// //    from 到那个页面
// //     next：只有执行next页面，才会执行跳转
//     //判断用户是否登录 直接next 否则 跳转到 next页面。
//     console.log("store",store.state.userinfo)
//     // const uInfo = store.state.userinfo
//     // if (!uInfo.username){
//     //     if (to.path === "/login"){
//     //         next()
//     //         return
//     //     }
//     //     next("/login")
//     // }
//     // next()
// })
//暴露路由对象
export default router