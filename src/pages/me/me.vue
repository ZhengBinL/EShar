<template>
  <div class="me">
    <div class="head">
      <mt-header title="个人中心">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="info-container">
      <div class="header-img"><img src="../../assets/img/BJ.jpg"></div>
      <div class="info">
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "me"
    }
</script>

<style scoped lang="scss">
  .my-order{

    .head{
      background-color: #ffffff;
    }
  }
</style>
