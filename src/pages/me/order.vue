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
 import axios from 'axios'
  export default {
    name: 'order',
    components: {
      'v-order-item': orderItem
    },
    data() {
      return {
        selected: '1',
        orderArry:[],
        data: [
          {
            id: 1,
            title: '贵州遨游胜率九点专营',
            type: 1,//1--代付款，2--待处理，3--带出行，4--待评价，5--退款/售后 ，主要后端怎么返回
            hotel: '大同浩海国际九点',
            standard: '标准间B-标准间B（酒店开具发票）[预定实惠]优惠政策',
            checkInTime: '2019-03-16',
            leaveTime: '2019-03-17',
            price: '124.99',
            totalPrice: '124.99'
          },
          {
            id: 2,
            title: '贵州遨游胜率九点专营2',
            type: 2,//1--代付款，2--待处理，3--带出行，4--待评价，5--退款/售后 ，主要后端怎么返回
            hotel: '大同浩海国际九点2',
            standard: '标准间B1-标准间B（酒店开具发票）[预定实惠]优惠政策',
            checkInTime: '2019-03-18',
            leaveTime: '2019-03-19',
            price: '136.22',
            totalPrice: '136.99'
          },
          {
            id: 3,
            title: '贵州遨游胜率九点专营3',
            type: 3,//1--代付款，2--待处理，3--带出行，4--待评价，5--退款/售后 ，主要后端怎么返回
            hotel: '大同浩海国际九点3',
            standard: '标准间B1-标准间B（酒店开具发票）[预定实惠]优惠政策',
            checkInTime: '2019-03-18',
            leaveTime: '2019-03-19',
            price: '136.22',
            totalPrice: '136.99'
          },
          {
            id: 4,
            title: '贵州遨游胜率九点专营4',
            type: 4,//1--代付款，2--待处理，3--带出行，4--待评价，5--退款/售后 ，主要后端怎么返回
            hotel: '大同浩海国际九点4',
            standard: '标准间B1-标准间B（酒店开具发票）[预定实惠]优惠政策',
            checkInTime: '2019-03-18',
            leaveTime: '2019-03-19',
            price: '136.22',
            totalPrice: '136.99'
          },
          {
            id: 5,
            title: '贵州遨游胜率九点专营5',
            type: 5,//1--代付款，2--待处理，3--带出行，4--待评价，5--退款/售后 ，主要后端怎么返回
            hotel: '大同浩海国际九点5',
            standard: '标准间B1-标准间B（酒店开具发票）[预定实惠]优惠政策',
            checkInTime: '2019-03-18',
            leaveTime: '2019-03-19',
            price: '136.22',
            totalPrice: '136.99'
          }
        ]
      }
    },
    mounted(){
      this.initList()
    },
    methods: {
      //获取我的订单列表
      initList(){
        let url = '/api/ordersList?user_id=4'
        axios.get(url).then((res)=>{
          if(res.status == 200){
            console.log(res,'ordersList')
            let orderList  = res.data
            this.orderArry  = orderList.data
          }
        })
      },
      // 切换点击事件
      clickItem() {
        console.log(this.selected); // 这个currentTab就是实时更新的当前tab
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
