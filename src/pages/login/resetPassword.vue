<template>
    <div>
        <mt-header title="忘记密码" class="header">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <mt-field placeholder="请输入手机号码" v-model="username"></mt-field>
        <mt-field placeholder="请输入验证码" >
            <button >获取验证码</button>
        </mt-field>
        <mt-button type="default">下一步</mt-button>
    </div>
</template>

<script>
export default {
    

}
</script>


<style>


</style>
