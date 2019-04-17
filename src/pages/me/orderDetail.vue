<template>
  <div class="order-detail">
    <div class="head">
      <mt-header title="我的订单">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="hotel-standards" @click="goHotelDetail">
      <p class="tit">{{data.name}}</p>
      <div class="standards">
        <span>{{data.standard}}-{{data.standardInfo}}</span>
        <span>| {{data.bedType}} | {{data.breakfast}}</span>
      </div>
    </div>
    <div class="time">
      <p><span class="label">入住时间</span> <span>{{data.checkInTime}}</span></p>
      <p><span class="label">离店时间</span> <span>{{data.departureTime}}</span> <span>共1间1晚</span></p>
    </div>
    <div class="person">
      <p><span class="label">入住人</span><span>{{data.name}}</span></p>
      <p><span class="label">联系手机</span><span>{{data.phone}}</span></p>
    </div>
    <div class="contact">
      <p><span>联系卖家</span><span>催确认/协商退改</span></p>
      <p><span>联系酒店</span><span>延时到店/特殊服务</span></p>
    </div>
    <div class="order-num">订单号<span>{{data.orderNum}}</span></div>
    <div class="btn" @click="refund">
      <mt-button size="normal" plain>退款</mt-button>
    </div>
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui';

  export default {
    name: "orderDetail",
    data() {
      return {
        price: 10,//手续费
        data: {
          name: '大同浩海国际酒店',
          standard: '标准间B',
          standardInfo: '标准间B（酒店开具发票）【预订实惠】',
          bedType: '其他床型',
          breakfast: '无早',
          checkInTime: '3月16日',
          departureTime: '3月17日',
          person: '张明',
          phone: '15900005342',
          orderNum: '380019489387745343'
        }
      }
    },
    methods: {
      // 退款
      refund() {
        console.log('退款')

        MessageBox.confirm('', {
          message: this.price ? '确定申请退款吗？<br/>手续费：￥' + this.price : '确定申请退款吗？',//判断是否有手续费
          title: '退款',
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        })
          .then(action => {
            if (action == 'confirm') {     //确认的回调
              console.log(1);
            }
          })
          .catch(err => {
            if (err == 'cancel') {     //取消的回调
              console.log(2);
            }
          });
      },
      // 进入酒店详情
      goHotelDetail() {
        console.log('进入酒店详情')
        // this.$router.push({
        //   path:'',
        //   name:'',
        //   params:{}
        // })
      }
    },
    created() {
      console.log(this.$route.params.id)
    }
  }
</script>

<style scoped lang='scss'>
  .order-detail {
    padding: 0 0 0.1rem;

    .hotel-standards {
      cursor: pointer;
      border-bottom: 1px solid #eee;
      padding: 0.15rem;

      .tit {
        font-size: 0.14rem;
        color: #333;
      }

      .standards {
        color: #838383;
        font-size: 0.12rem;
        padding-top: 0.1rem;
        display: flex;
        justify-content: space-between;

        span {
          &:first-child {
            display: inline-block;
            max-width: 2.5rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }

    }

    .time {
      display: flex;
      flex-direction: column;
      padding: 0.15rem;
      border-bottom: 1px solid #eee;

      p {
        &:last-child {
          padding-top: 0.1rem;
        }

        span {
          color: #333;
          display: inline-block;

          &.label {
            width: 0.8rem;
            color: #838383;
          }
        }
      }
    }

    .person {
      display: flex;
      flex-direction: column;
      padding: 0.15rem;
      border-bottom: 1px solid #eee;

      p {
        &:last-child {
          padding-top: 0.1rem;
        }

        span {
          color: #333;
          display: inline-block;

          &.label {
            width: 0.8rem;
            color: #838383;
          }
        }
      }
    }

    .contact {
      display: flex;
      justify-content: space-between;
      padding: 0.15rem;
      border-bottom: 0.02rem solid #eee;

      p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #838383;

        span {
          &:first-child {
            color: orange;
            font-size: 0.16rem;
            padding-bottom: 0.05rem;
          }
        }
      }
    }

    .order-num {
      color: #838383;
      padding: 0.15rem;

      span {
        color: #333;
        padding-left: 0.2rem;
      }
    }

    .btn {
      text-align: center;
      margin-top: 0.2rem;

      .mint-button--default {
        width: 50%;
        color: orange;
      }
    }
  }

</style>
