<template>
  <div class="order-detail">
    <div class="head">
      <mt-header title="我的订单">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <!-- <mt-button icon="more" slot="right"></mt-button> -->
      </mt-header>
    </div>
    <div class="hotel-standards" @click="goHotelDetail">
      <p class="tit">{{itemInfo.hotelName}}</p>
      <div class="standards">
        <span>{{itemInfo.roomName}}</span>
        <!-- <span>{{itemInfo.standard}}-{{itemInfo.standardInfo}}</span>
        <span>| {{itemInfo.bedType}} | {{itemInfo.breakfast}}</span> -->
      </div>
    </div>
    <div class="time">
      <p><span class="label">入住时间</span> <span>{{itemInfo.liveStartTime}}</span></p>
      <p><span class="label">离店时间</span> <span>{{itemInfo.liveEndTime}}</span> <span>共{{itemInfo.roomCount}}间晚</span></p>
    </div>
    <div class="person">
      <p><span class="label">入住人</span><span>{{itemInfo.userName}}</span></p>
      <p><span class="label">联系手机</span><span>{{itemInfo.userPhone}}</span></p>
    </div>
    <div class="contact">
      <p @click="contactBuy" ><span>联系卖家</span><span>催确认/协商退改</span></p>
      <p @click="contactHotel" ><span>联系酒店</span><span>延时到店/特殊服务</span></p>
    </div>
    <div class="order-num">订单号<span>{{itemInfo.orderNumber}}</span></div>
    <div class="btn">
      <!-- <mt-button size="normal" plain>退款</mt-button> -->
      <!--具体怎么显示看情况-->
      <mt-button size="normal" v-if="itemInfo.orderStatus==2||itemInfo.orderStatus==1||itemInfo.orderStatus==4||itemInfo.orderStatus==5?true:false"
                 @click.native="deleteOrder(itemInfo.id)">删除订单
      </mt-button>
      <mt-button size="small" v-if="itemInfo.orderStatus==3?true:false" @click.native="refund(itemInfo.id)">退款</mt-button>
    </div>
  </div>
</template>

<script>
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
        },
        itemInfo:{}
      }
    },
    mounted(){
       this.itemInfo = this.$route.params.itemInfo
      //  console.log(this.itemInfo,'itemInfoddd')
    },
    methods: {
      //联系酒店
      contactHotel(){
        MessageBox.confirm(this.itemInfo.hotelTelephone,'联系酒店').then(action => {
            // console.log('ok')
        })
        .catch(err => {
            if (err == 'cancel') {     //取消的回调
              // console.log(2);
            }
        })
      },
      //联系买家
      contactBuy(){
        MessageBox.confirm('123094832023','联系卖家').then(action => {
          // console.log('ok')
        })
        .catch(err => {
            if (err == 'cancel') {     //取消的回调
              // console.log(2);
            }
        })
      },
      // 删除订单
      deleteOrder(id) {
        // console.log('删除订单', id)
        // console.log('删除订单')
        MessageBox.confirm('', {
          message: '确定删除订单?',//判断是否有手续费
          title: '删除订单',
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        })
          .then(action => {
            if (action == 'confirm') {     //确认的回调
              // console.log(1);
            }
          })
          .catch(err => {
            if (err == 'cancel') {     //取消的回调
              // console.log(2);
            }
          });
      },
      // 退款
      refund() {
        // console.log('退款')
        MessageBox.confirm('', {
          message: this.price ? '确定申请退款吗？<br/>手续费：￥' + this.price : '确定申请退款吗？',//判断是否有手续费
          title: '退款',
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        })
          .then(action => {
            if (action == 'confirm') {     //确认的回调
              // console.log(1);
            }
          })
          .catch(err => {
            if (err == 'cancel') {     //取消的回调
              // console.log(2);
            }
          });
      },
      // 进入酒店详情
      goHotelDetail() {
        // console.log('进入酒店详情')
        this.$router.push({
          path: '/hotel/detail',
          name: 'hoteDetail',
          query:{
            hotelId:1
          }
        })
        // this.$router.push({
        //   path:'',
        //   name:'',
        //   params:{}
        // })
      }
    },
    created() {
      // console.log(this.$route.params.id)
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
      font-size: 0.14rem;

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
      font-size: 0.14rem;

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
      border-bottom: 0.02rem solid #efefef;
      font-size: 0.14rem;

      p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #828282;

        span {
          &:first-child {
            color: #eb5d2b;
            font-size: 0.16rem;
            padding-bottom: 0.05rem;
          }
        }
      }
    }

    .order-num {
      color: #828282;
      padding: 0.15rem;
      font-size: 0.14rem;

      span {
        color: #333;
        padding-left: 0.2rem;
      }
    }

    .btn {
      text-align: center;
      margin-top: 0.2rem;

      .mint-button--default {
        border: 0;
        outline: none;
        width: 50%;
        background: #eb5d2b;
        text-align: center;
        color: #fff;
        border-radius: 0.04rem;
        height: 0.44rem;
        line-height: 0.44rem;
        font-size: 0.18rem;
        -webkit-box-shadow: 0 0.02rem 0.04rem #ffceb7;
        box-shadow: 0 0.02rem 0.04rem #ffceb7;
      }
    }
  }

</style>
