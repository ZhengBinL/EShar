<template>
  <div class="hoteInfo">
    <mt-header class="header" :title="title">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="topInfo">
      <div class="top"><i class="iconfont icon-rili"/><span>03月16日今天-03月17日住1晚</span></div>
      <div class="bot"><i class="iconfont icon-rili"/><span>预定后可随时免费取消，请放心预定！</span></div>
    </div>
    <div class="info">
      <h4>入住信息</h4>
      <div class="flexSpan">
        <div class="flex1">房间数</div>
        <div class="flex3">

        </div>
      </div>
      <div class="flexSpan">
        <div class="flex1">入住人<i class="iconfont icon-rili pl5"/></div>
        <div class="flex3">
          <input type="text" placeholder="填写实际入住人姓名">
          <i class="iconfont icon-rili rlr"/>
        </div>
      </div>
      <div class="flexSpan">
        <div class="flex1">手机号</div>
        <div class="flex3">
          <input type="text" placeholder="填写实际入住人手机号">
          <i class="iconfont icon-rili rlr"/>
        </div>
      </div>
      <div class="flexSpan">
        <div class="flex1">到店时间</div>
        <div class="flex3 p10">
          <p>14:00点后办理入住</p>
          <p class="note">免费留房，您可在14:00后随时到店办理入住</p>
        </div>
      </div>
    </div>
    <div class="detail">
      <div class="price-cont">
        <div class="price-left">
          <span><i>￥</i>124.99</span>
          <span>已优惠￥1.50</span>
        </div>
        <div class="price-right">
          <span>明细<i class="iconfont icon-shangjiantou"></i></span>
          <button @click="goToPay">立即支付</button>
        </div>
      </div>
      <div class="price-detail">费用明细</div>
      <div class="detail-item">
        <span>03月16日 房费 不含早餐</span>
        <span>￥126.49x1间</span>
      </div>
      <div class="detail-item">
        <span>省1.50元:卖家立减</span>
        <span>-￥1.50</span>
      </div>
      <div class="detail-item">
        <span>总计</span>
        <span>￥124.99</span>
      </div>
    </div>
    <mt-popup
      class="pay-container"
      v-model="popupVisible"
      position="bottom">
      <div class="pay-top">
        <i class="iconfont icon-wenti" @click="popupVisible=false"></i>
        <span>确认付款</span>
        <i class="iconfont icon-wenti help"></i>
      </div>
      <div class="pay-price">￥124.99</div>
      <div class="pay-item">
        <span>微信账号</span>
        <span>159********42</span>
      </div>
      <div class="pay-item">
        <span>支付方式</span>
        <span>招商银行信用卡（3867）<i class="iconfont icon-youjiantou"></i></span>
      </div>
      <div class="pay-btn"> <button>立即付款</button></div>
    </mt-popup>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '酒店'
      }
    },
    data() {
      return {
        popupVisible: false,
        hotelId: ''
      }
    },
    mounted() {
      this.hotelId = this.$route.query.hotelId
      this.initDetail()
    },
    methods: {
      //初始化
      initDetail() {

      },
      // 立即支付
      goToPay(){
        this.popupVisible=true
      }
    }

  }
</script>

<style scoped lang="scss">
  .hoteInfo {
    .topInfo {
      padding: 0.1rem;
      border-bottom: 0.04rem solid #efefef;
      font-size: 0.14rem;

      > div {
        margin-top: 0.05rem;
        padding: 0.03rem 0;

        span {
          vertical-align: top;
          padding-left: 0.05rem
        }

        &.bot {
          span {
            color: #1cd208;
          }
        }
      }

    }

    .info {
      padding: 0.1rem;
      border-bottom: 0.04rem solid #efefef;
      h4{
        padding: 0 0 0.1rem;
        margin: 0;
        font-size: 0.16rem;
        color: #333;
        border-bottom: 1px solid #efefef;
      }

      .flexSpan {
        display: flex;
        font-size: 0.14rem;
        color: #333;
        border-bottom: 1px solid #efefef;
        align-items: center;
        &:last-child{
          border-bottom: 0;
        }
        .flex1 {
          flex: 1;
          height: 0.4rem;
          line-height: 0.4rem;

          .pl5 {
            color:#a9acb1;
            vertical-align: middle;
            padding-left: 0.05rem
          }
        }

        .flex3 {
          flex: 2;
          line-height: 0.4rem;
          display: flex;
          justify-content: space-between;
          .rlr{
            color: #fca500;
          }
          &.p10{
            display: flex;
            flex-direction: column;
            line-height: 0.2rem;
            justify-content: center;
            padding: 0.05rem 0 0;
            .note{
              color: #a9acb1;
              font-size: 0.13rem;
            }
          }
        }

      }
    }
    .detail{
      padding-top: 0.1rem;
      .price-cont{
        display: flex;
        justify-content: space-between;
        font-size: 0.12rem;
        color: #a9acb1;
        .price-left{
          padding-left: 0.1rem;
          display: flex;
          flex-direction: column;
          span{
            &:first-child{
              color: #eb5d2b;
              font-size: 0.18rem;
              font-weight: bold;
              i{
                font-size: 0.12rem;
                font-weight: normal;
                font-style: normal;
              }
            }
          }
        }
        .price-right{
          span{
            margin-right: 0.05rem;
          }
          button{
            background: linear-gradient(270deg,#f35,#ff9300);
            border: 0;
            outline: none;
            color: #fff;
            padding: 0.1rem 0.15rem;
            font-size: 0.16rem;
          }
        }
      }
      .price-detail{
        text-align: center;
        line-height: 0.5rem;
        font-size: 0.14rem;
        color: #333;
      }
      .detail-item{
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #efefef;
        line-height: 0.35rem;
        font-size: 0.14rem;
        color: #333;
        padding: 0 0.1rem;
        span{
          &:last-child{
            color: #eb5d2b;
          }
        }
      }
    }
    .pay-container{
      width: 100%;
      border-top: 0.03rem solid #333;
      .pay-top{
        display: flex;
        justify-content: space-between;
        padding: 0 0.1rem;
        line-height: 0.5rem;
        border-bottom: 1px solid #efefef;
        .help{
          color: #26a2ff;
        }
      }
      .pay-price{
        text-align: center;
        font-size: 0.3rem;
        line-height: 0.7rem;
      }
      .pay-item{
        display: flex;
        justify-content: space-between;
        padding: 0 0.1rem 0 0.05rem;
        margin-left: 0.1rem;
        font-size: 0.14rem;
        color: #333;
        line-height: 0.4rem;
        border-bottom: 1px solid #efefef;
      }
      .pay-btn{
        text-align: center;
        padding:1rem 0 0.2rem;
        button{
          width: 80%;
          background: #eb5d2b;
          border: 0;
          outline: none;
          color: #fff;
          padding:  0.1rem 0;
          border-radius: 0.03rem;
          font-size: 0.14rem;
          letter-spacing: 0.02rem;
        }
      }
    }
  }

</style>

