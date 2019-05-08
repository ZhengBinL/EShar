<template>
  <div class="my-order">
    <mt-header title="我的订单" class="header">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
    <mt-navbar v-model="selected" @click.native.prevent="clickItem" class="navbar">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">代付款</mt-tab-item>
      <mt-tab-item id="3">处理中</mt-tab-item>
      <mt-tab-item id="4">待出行</mt-tab-item>
      <!-- <mt-tab-item id="5">待评价</mt-tab-item> -->
      <mt-tab-item id="6">退款/售后</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected" class="order-contant">
      <mt-tab-container-item id="1">
        <div v-for="item in orderArry" :key="item.id">
          <v-order-item :itemInfo="item"></v-order-item>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div v-for="item in orderArry" :key="item.id" v-if="item.orderStatus==1">
          <v-order-item :itemInfo="item"></v-order-item>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div v-for="item in orderArry" :key="item.id" v-if="item.orderStatus==2">
          <v-order-item :itemInfo="item"></v-order-item>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <div v-for="item in orderArry" :key="item.id" v-if="item.orderStatus==3">
          <v-order-item :itemInfo="item"></v-order-item>
        </div>
      </mt-tab-container-item>
      <!-- <mt-tab-container-item id="5">
        <div v-for="item in orderArry" :key="item.id" v-if="item.orderStatus==4">
          <v-order-item :itemInfo="item"></v-order-item>
        </div>
      </mt-tab-container-item> -->
      <mt-tab-container-item id="6">
        <div v-for="item in orderArry" :key="item.id" v-if="item.orderStatus==5">
          <v-order-item :itemInfo="item"></v-order-item>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import orderItem from './orderItem'
  export default {
    name: 'order',
    components: {
      'v-order-item': orderItem
    },
    data() {
      return {
        selected: '1',
        orderArry:[]
      }
    },
    mounted(){
      // this.initList()
    },
    methods: {
      //获取我的订单列表
      initList(){
        let url = '/api/ordersList?user_id=4'
        $http.get(url).then((res)=>{
          if(res.status == 200){
            // console.log(res,'ordersList')
            let orderList  = res.data
            this.orderArry  = orderList.data
          }
        })
      },
      // 切换点击事件
      clickItem() {
        // console.log(this.selected); // 这个currentTab就是实时更新的当前tab
      }
    }
  }
</script>

<style scoped lang="scss">
  .my-order {
    .header {
      position: fixed;
      width: 100%;
      height: 0.4rem;
      top:0;
      z-index: 10000;
    }
    .navbar{
      position: fixed;
      width: 100%;
      height: 0.5rem;
      top:0.4rem;
      z-index: 10000;
    }
    .order-contant{
      padding-top:0.93rem;
    }

  }
</style>
