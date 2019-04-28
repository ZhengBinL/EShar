<template>
    <div>
        <mt-header class="header">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div>
            <img src="" alt="" class="">
            <p>酒店预订</p>
        </div>
        <mt-field placeholder="请输入手机号码" v-model="username"></mt-field>
        <mt-field placeholder="请输入登录密码" type="password" v-model="password"></mt-field>
        <mt-button type="default">登录</mt-button>
        <div>
            <a href="">忘记密码？</a>
        </div>
        <div>
            <p>没有账号，<a href="">立即注册</a></p>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style>

</style>
