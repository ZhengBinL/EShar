<template>
  <div class="order-item">
    <div class="top">
      <!-- <p class="title">{{itemInfo.title}}</p> -->
      <!--具体怎么显示看实际情况、、-->
      <span v-if="itemInfo.orderStatus==2?true:false">已关闭</span>
      <span v-if="itemInfo.orderStatus==4?true:false">交易成功</span>
      <span v-if="itemInfo.orderStatus==5?true:false">退款成功</span>
      <span v-if="itemInfo.orderStatus==3?true:false">待入住</span>
      <span v-if="itemInfo.orderStatus==1?true:false">待付款</span>
    </div>
    <div class="info" @click="goDetail(itemInfo)">
      <div class="info-left">
        <span class="iconfont icon-chengshi"></span>
        <div class="text">
          <p class="text-tit">{{itemInfo.hotelName}}</p>
          <p class="text-house">{{itemInfo.roomName}}</p>
          <p class="text-time">入住时间 {{itemInfo.liveStartTime}} 至 {{itemInfo.liveEndTime}} </p>
        </div>
      </div>
      <div class="info-right">￥{{itemInfo.orderPrice}}</div>
    </div>
    <div class="total">合计：￥{{itemInfo.orderPrice}}</div>
    <div class="order-item-btn">
      <!--具体怎么显示看情况-->
      <mt-button size="small" v-if="itemInfo.orderStatus==2||itemInfo.orderStatus==1||itemInfo.orderStatus==4||itemInfo.orderStatus==5?true:false"
                 @click="deleteOrder(itemInfo.id)">删除订单
      </mt-button>
      <mt-button size="small" v-if="itemInfo.orderStatus==3?true:false" @click="refund(itemInfo.id)">退款</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "orderItem",
    props: ['itemInfo'],
    data(){
      return {

      }
    },
    mounted(){

    },
    methods: {
      // 跳转到详情页面 需要传入一个订单的唯一值 暂无
      goDetail(itemInfo) {
        this.$router.push({
          path: '/me/order/detail',
          name: 'detail',
          params: {
            itemInfo: itemInfo
          }//传参
        })
      },
      // 删除订单
      deleteOrder(id) {
        // console.log('删除订单', id)
      },
      // 退款
      refund(id) {
        // console.log('退款', id)
      }
    }
  }
</script>

<style scoped lang='scss'>
  .order-item {
    margin-top: 0.1rem;
    border-bottom: 0.02rem solid #efefef;

    .top {
      padding: 0 0.1rem;
      line-height: 0.4rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.14rem;

      span {
        color: #eb5d2b;
        font-size: 0.12rem;
      }
    }

    .info {
      display: flex;
      justify-content: space-between;
      padding: 0 0.1rem;
      background: #fbfbfb;

      .info-left {
        display: flex;
        justify-content: space-between;
        padding: 0.1rem 0;

        span {
          &.iconfont {
            color: #eb5d2b;
            margin-right: 0.1rem;
            font-size: 0.18rem;
          }
        }

        .text {
          display: flex;
          flex-direction: column;
          color: #828282;
          font-size: 0.12rem;
          line-height: 0.25rem;

          .text-tit {
            color: #333;
            font-size: 0.14rem;
          }

          .text-house {
            max-width: 2.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }

      .info-right {
        padding: 0.1rem 0;
        color: #333;
      }
    }

    .total {
      margin: 0 0.1rem;
      line-height: 0.4rem;
      color: #333;
      text-align: right;
      border-bottom: 1px solid #eee;
    }

    .order-item-btn {
      text-align: right;
      margin: 0.1rem;

      .mint-button--default {
        color: #656b79;
        background-color: #fff;
        box-shadow:none;
        border: 1px solid #e4e4e4;
        display: inline-block;
        font-size: 0.12rem;
        padding: 0 0.12rem;
        height: 0.25rem;
      }

    }
  }
</style>
