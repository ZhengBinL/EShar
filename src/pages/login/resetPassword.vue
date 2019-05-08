<template>
  <div class="resetPass">
    <mt-header title="忘记密码" class="header">
      <router-link to="/login/login" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-field placeholder="请输入手机号码" type="tel" v-model="username"></mt-field>
    <mt-field placeholder="请输入验证码" v-model="obtain">
      <button class="obtain" @click="handleObtain">获取验证码</button>
    </mt-field>
    <div class="btn">
      <button class="btnNext" @click="resetPass">下一步</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        obtain: '',
        // flagDisabled:true
      }
    },
    methods: {
      handleObtain(e) {
        e.preventDefault();
      },
      //忘记密码
      resetPass(e) {
        e.preventDefault();
        this.$router.push({name: 'resetword'})
      },
    }
  }
</script>


<style scoped lang="scss">
  .resetPass {
    .btn {
      width: 100%;
      text-align: center;
      padding: 0.3rem 0;

      .btnNext {
        font-size: 0.16rem;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        border-radius: 2.4rem;
        width: 80%;
        background-color: #27a2ff;
        color: #fff;
        outline: none;
        border: 0;
        letter-spacing: 0.05rem;
      }
    }

    .obtain {
      border: 1px solid #27a2ff;
      color: #27a2ff;
      background-color: #fff;
      border-radius: 0.08rem;
      outline: none;
    }
  }
</style>
<style>
  .resetPass .mint-cell-wrapper {
    background: none;
    border-bottom: 1px solid #eee;
  }
</style>

