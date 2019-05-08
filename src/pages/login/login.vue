<template>
  <div class="login">
    <mt-header class="header">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="loginTop">
      <img src="../../assets/img/sh.jpg" alt="login" class="loginImg">
      <p class="logTitle">酒店预订</p>
    </div>
    <mt-field placeholder="请输入手机号码" type="tel" v-model="username" :attr="{ maxlength: 11 }"></mt-field>
    <mt-field placeholder="请输入登录密码" type="password" v-model="password" :attr="{ maxlength: 15 }"
              @blur="handlePassword"></mt-field>
    <div class="btn">
      <mt-button class="btnlog" @click="handleLogin">登录</mt-button>
    </div>
    <div class="reset">
      <a href="" @click="resetPass">忘记密码？</a>
    </div>
    <div class="foot">
      <span>没有账号，</span><a href="" @click="registered">立即注册</a>
    </div>
  </div>
</template>


<script>
  import {login} from '@/axios/login/login.js'
  import { MessageBox } from 'mint-ui';
  export default {
    data() {
      return {
        username: '',
        password: '',
        flagDisabled: true
      }
    },
    methods: {
      //登录
      handleLogin() {
        if(this.username==''||this.password==''){
          MessageBox.alert('手机或密码不能为空')
          return;
        }
        login(this.username, this.password).then((res) => {
          console.log(res, 'res')
        })
      },
      //忘记密码
      resetPass(e) {
        e.preventDefault();
        this.$router.push({name: 'resetPassword'})
      },
      //立即注册
      registered(e) {
        e.preventDefault();
        this.$router.push({name: 'registered'})
      },
      //登录密码失焦
      handlePassword() {
        if (this.username) {
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .login {
    .loginTop {
      width: 100%;
      padding: 0.4rem 0;
      text-align: center;

      .loginImg {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 0.25rem;
      }

      .logTitle {
        font-size: 0.16rem;
        padding: 0.1rem 0;
      }
    }

    .btn {
      width: 100%;
      text-align: center;
      padding: 0.3rem 0;

      .btnlog {
        font-size: 0.16rem;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        border-radius: 2.4rem;
        width: 80%;
        background-color: #27a2ff;
        color: #fff;
        letter-spacing: 0.05rem;
      }
    }

    .reset {
      text-align: end;
      padding-right: 0.3rem;

      a {
        color: #27a2ff;
      }
    }

    .foot {
      height: 3rem;
      line-height: 3rem;
      text-align: center;

      span {
        color: black
      }

      a {
        color: #27a2ff;
      }
    }

  }
</style>
<style>
  .login .mint-cell-wrapper {
    background: none;
    border-bottom: 1px solid #eee;
  }
</style>

