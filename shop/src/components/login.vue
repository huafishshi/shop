<template>

    <div class="login_wrap">
        <div class="form_wrap">
            <el-form
            ref="formRef" :model="loginDate" label-width="100px" class="demo-dynamic">
                <el-form-item
                    prop="username"
                    label="用户名"
                    :rules="[
                        {
                            required:true,
                            message:'此项为必填项',
                            trigger:'blur'
                        },

                    ]">

                    <el-input v-model="loginDate.username" />
                </el-form-item>

                <el-form-item
                        prop="password"
                        label="密码"
                        :rules="[
                        {
                            required:true,
                            message:'此项为必填项',
                            trigger:'blur'
                        },

                    ]"
                >
                    <el-input type="password" v-model="loginDate.password" />
                </el-form-item>
            </el-form>

            <el-button type="primary" class="login_btn">登录</el-button>
        </div>
    </div>
</template>

<script>
    import {reactive, toRefs} from "vue";
    import {useStore} from 'vuex'
    export default {
        name:"login",
        setup(){
            const store=useStore()
            const count = store.state.number.count
            const  data=reactive({
                loginDate:{
                    username:"",
                    password:""
                },
                num:count
            })
            return {...toRefs(data),}
        }
    }
</script>

<style>

    .login_wrap{
        width: 100%;
        height: 100vh;
        background-color: rgb(56,86,139);
        position: relative;

    }
    .form_wrap{
        position: fixed;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        padding: 30px 40px;
        border-radius: 5px;
    }
    .login_btn{
        display: block;
        margin: 10px auto;
    }
</style>