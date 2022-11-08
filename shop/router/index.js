import Vue from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import Layout from '../src/components/HelloWorld'


//路由配置
const routes =[
    //登陆页面
    {
        path:"/login",
        name:"login",
        component:()=>import("../src/components/login")
    },
    {
      path:"/page",
      name:"layout",
      component: Layout,
      children:[
          {       //角色列表页
              path: "roles",
              name:'roles',
              component:()=>import("../src/components/LayOut/rolesList")
          },
          {
              //用户列表页
              path: "user",
              name:'user',
              component:()=>import("../src/components/LayOut/userList")
          },
      ]
    },
    {

    }

]


//生成hash路由对象
const router= createRouter({
    history: createWebHashHistory(),
    routes
})
//暴露路由对象
export default router