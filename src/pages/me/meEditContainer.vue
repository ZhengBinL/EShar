<template>
  <div class="edit-container">
    <h4>基本信息</h4>
    <ul>
      <li>微信号：{{basicInfo.number}}</li>
      <li>手机号：{{basicInfo.mobile}}</li>
      <li>授权省份：{{basicInfo.province}}</li>
      <li>授权城市：{{basicInfo.city}}</li>
      <li>授权地区：{{basicInfo.region}}</li>
      <li>地址：{{basicInfo.address}}</li>
    </ul>
    <mt-button class="sign-out" @click="signOut" size="small" type="primary">退出登录</mt-button>
  </div>
</template>

<script>
  export default {
    name: "meEditInf",
    props: ['basicInfo'],
    methods:{
      signOut(){
        this.$emit('hideEidt',false)
      }
    }
  }
</script>

<style scoped lang="scss">
  .edit-container {
    h4 {
      color: #333;
      background: #eee;
      border-bottom: 1px solid #ccc;
      line-height: 35px;
      padding-left: 10px;
      margin: 0;
    }

    ul {
      margin: 0;
      padding: 0 10px;

      li {
        padding: 0 5px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        color: #333;
        font-size: 14px;
      }
    }
    .sign-out{
      margin: 30px 10% 0;
      width: 80%;
    }
  }
</style>
