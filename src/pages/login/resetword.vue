<template>
  <div class="resetPass">
    <mt-header title="重置密码" class="header">
      <router-link to="/login/login" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-field placeholder="请输入新密码" type="password" v-model="newPassword"></mt-field>
    <mt-field placeholder="请再次输入密码" type="password" @blur.native="handleVerification"
              v-model="resetPassword"></mt-field>
    <div class="btn">
      <button class="btnNext" @click="handleReset" :disabled="flagDisabled">确定</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newPassword: '',
        resetPassword: '',
        flagDisabled: true
      }
    },
    methods: {
      //重置密码
      handleReset() {
        MessageBox.alert('密码修改成功').then(action => {

        }, () => {
          console.log(2)
        })
      },
      //验证密码
      handleVerification() {
        if (!this.newPassword) {

        }
        if (this.newPassword === this.resetPassword) {
          alert('chengg')
        }
      }
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
        border: 0;
        outline: none;
        letter-spacing: 0.05rem;
      }
    }

    .obtain {
      border: 1px solid #27a2ff;
      color: #27a2ff;
      background-color: #fff;
      border-radius: 0.08rem;
    }
  }
</style>
