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
        <mt-field placeholder="请输入验证码" type="email" v-model="email"></mt-field>
        <mt-field placeholder="请设置6-20位密码" type="password" v-model="password"></mt-field>
        <mt-button type="default">注册</mt-button>
        <div>
            <p>已有账号，<a href="">立即登录</a></p>
        </div>
    </div>
</template>


<script>
export default {
    

}
</script>


<style>


</style>
