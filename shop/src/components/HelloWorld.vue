<template>
<!--    <div class="common-layout">-->
<!--        <el-container>-->
<!--            <el-header class="common-header flex-float">-->
<!--                <div class="flex">-->
<!--                    <img class="logo" src="../assets/logo.png" alt="">-->
<!--                    <h1 class="title">商铺后台管理系统</h1>-->
<!--                </div>-->
<!--                <el-button type="info" plain>退出</el-button>-->
<!--            </el-header>-->

<!--            <el-container>-->
<!--                <el-aside class="common-aside" width="200px">-->
<!--                    <el-menu background-color="none" text-color="#fff" :router="true">-->
<!--&lt;!&ndash;                    //一级导航&ndash;&gt;-->
<!--                        <el-sub-menu index="1">-->
<!--                            <template #title>-->
<!--                                <el-icon><Avatar /></el-icon>-->
<!--                                <span>账号管理</span>-->
<!--                            </template>-->

<!--                            <el-menu-item-group>-->
<!--                                <el-menu-item index="/user">账号列表</el-menu-item>-->
<!--                            </el-menu-item-group>-->
<!--                        </el-sub-menu>-->

<!--                        <el-sub-menu index="2">-->
<!--                            <template #title>-->
<!--                                <el-icon><Box /></el-icon>-->
<!--                                <span>角色管理</span>-->
<!--                            </template>-->

<!--                            <el-menu-item-group>-->
<!--                                <el-menu-item index="/roles">角色列表</el-menu-item>-->
<!--                            </el-menu-item-group>-->
<!--                        </el-sub-menu>-->
<!--                    </el-menu>-->

<!--                </el-aside>-->

<!--                <el-main>-->
<!--&lt;!&ndash;                    展示路由对应的组件内容&ndash;&gt;-->
<!--                    <router-view/>-->
<!--                </el-main>-->

<!--            </el-container>-->

<!--        </el-container>-->
<!--    </div>-->
    <div>
        <h1>我是导航</h1>
        <h1>
            <router-link to="/roles">角色列表</router-link>
            <router-link to="/user">用户列表</router-link>
        </h1>
        <h1>我是侧边栏</h1>
            <router-view/>

    </div>
</template>

<script>


    export default {
    name:"home",
    setup() {


    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    el-container{
        height: 100vh;
    }

.common-header{
    background-color: black;
    display: flex;

}
.common-aside{
    background-color: rgb(48,25,30);
}
.logo{
    height: 65px;
}
.title{
    color: aliceblue;
}
</style>
