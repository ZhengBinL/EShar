<template>
  <div class="hotel-detail-container">
    <mt-header :title="hoteDetailList.brandName" class="header">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="imgs">
      <div class="img-cont">
        <img :src="hoteDetailList.imageUrl">
      </div>
      <!-- <mt-swipe class="img-cont" :auto="4000">
        <mt-swipe-item><img src="../../assets/img/1.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/img/2.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/img/3.jpg"></mt-swipe-item>
      </mt-swipe> -->
    </div>
    <div class="info">
      <div class="title">{{hoteDetailList.brandName}}<span>{{hoteDetailList.starName}}</span></div>
      <div class="score">
        <span class="yellow fen">{{hoteDetailList.scoreName}}<i>分</i></span>
        <span class="yellow">{{hoteDetailList.scoreEstimate}}</span>
        <!-- <span class="gray">性价比高</span>
        <span class="gray">服务周到</span> -->
      </div>
    </div>
    <div class="introduce">
      <div class="start">{{hoteDetailList.fitmentDate}}年装修 {{hoteDetailList.startBusiness}}年开业</div>
      <div class="equipment">
        <div class="equ-left">
          <p>{{hoteDetailList.services}}</p>
          <!-- <p><i class="iconfont iconright-1"></i><span>行李寄存</span></p>
          <p><i class="iconfont iconright-1"></i><span>娱乐场/棋牌室</span></p>
          <p><i class="iconfont iconright-1"></i><span>洗衣服务</span></p> -->
        </div>
        <div class="eqi-right">须知/电话 <i class="iconfont iconnext"></i>
        </div>
      </div>
      <div class="address">
        <p>{{hoteDetailList.address}}</p>
        <!-- <p class="note"><i class="iconfont iconfeiji"></i> 距东王庄机场驾车14.6公里 约39分钟</p> -->
      </div>
    </div>
    <div class="room">
      <div class="time">
        <p><span class="start">04/18 今天</span>
          <span class="count">1晚<i></i></span>
          <span class="end">04/19 明天</span>
        </p>
        <p>修改日期 <i class="iconfont iconnext"></i></p>
      </div>
      <div class="condition">
        <div class="condition-cont">
          <span>免费取消</span>
          <span>闪电确认</span>
          <span>大床</span>
          <span>双床</span>
          <span>含早</span>
          <span>会员权益</span>
          <span>信誉度</span>
        </div>
      </div>
      <div class="item-container">
        <div v-for="item in roomArry" :key="item.a">
          <v-detail-item :info="item"></v-detail-item>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import detailItem from './detialItem'
  import {hotelRoomList} from '@/axios/hotel/index.js'
  export default {
    components:{
      'v-detail-item':detailItem
    },
    data() {
      return {
        hoteDetailList:{},
        roomArry:[],
        data:[]
      }
    },
    mounted(){
      this.hoteDetailList = this.$route.query.hoteDetail
      this.initRoomList()
    },
    methods:{
      //获取酒店 房间列表
      initRoomList(){
        hotelRoomList('6').then((res)=>{
          if(res.status == 200){
            let roomList  = res.data
            this.roomArry  = roomList.data
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .hotel-detail-container {
    .header{
      position: fixed;
      width: 100%;
      height: 0.4rem;
      top:0;
      z-index: 10000;
    }
    .imgs {
      padding: 0.1rem;
      padding-top:0.5rem;
      overflow: hidden;
      .img-cont {
        height: 1.5rem;
        border-radius: 0.15rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .info {
      padding: 0 0.12rem;

      .title {
        font-size: 0.18rem;
        color: #333;
        font-weight: bold;
        line-height: 0.26rem;

        span {
          font-size: 0.13rem;
          color: #a9acb1;
          font-weight: normal;
          padding-left: 0.05rem;
        }
      }

      .score {
        padding-top: 0.05rem;
        font-size: 0.12rem;

        .yellow {
          margin-right: 0.03rem;
          color: #ffb200;

          &.fen {
            font-size: 0.2rem;
            font-weight: bold;

            i {
              font-weight: normal;
              font-size: 0.12rem;
              font-style: normal;
            }
          }
        }

        .gray {
          margin-right: 0.03rem;
          padding: 0.02rem;
          color: #a9acb1;
          border: 1px solid #efefef;
        }
      }
    }

    .introduce {
      padding-left: 0.1rem;
      font-size: 0.13rem;
      color: #333;
      border-bottom: 0.04rem solid #efefef;

      .start {
        margin-top: 0.1rem;
        border-top: 1px solid #efefef;
        line-height: 0.35rem;
      }

      .equipment {
        display: flex;
        justify-content: space-between;
        padding-right: 0.1rem;
        border-bottom: 1px solid #efefef;
        padding-bottom: 0.1rem;

        .equ-left {
          display: flex;

          p {
            padding-right: 0.06rem;
            color: #a9acb1;

            i {
              color: #04ba41;
              margin-right: 0.03rem;
            }
          }
        }

        .eqi-right {
          color: #ffb200;
        }
      }

      .address {
        padding: 0.1rem 0;
        line-height: 0.2rem;

        .note {
          padding-top: 0.05rem;
          color: #a9acb1;
          font-size: 0.12rem;
        }
      }

    }

    .room {
      padding: 0.1rem 0;

      .time {
        padding: 0 0.1rem 0.1rem;
        display: flex;
        justify-content: space-between;
        color: #ffb200;
        font-size: 0.13rem;
        border-bottom: 1px solid #efefef;

        .count {
          border: 1px solid #ffb200;
          padding: 0.01rem 0.05rem;
          border-radius: 0.2rem;
          position: relative;
          z-index: 1;
          background: #fff;
          margin: 0 0.15rem;

          i {
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            top: 50%;
            display: inline-block;
            height: 1px;
            width: 180%;
            z-index: -1;
            background: #ffb200;
          }
        }
      }

      .condition {
        width: 100%;
        overflow: hidden;
        padding: 0.1rem;
        box-sizing: border-box;

        .condition-cont {
          white-space: nowrap;
          overflow-y: auto;

          &::-webkit-scrollbar {
            display: none;
          }

          span {
            display: inline-block;
            font-size: 0.12rem;
            padding: 0.05rem 0.1rem;
            border-radius: 0.03rem;
            color: #333;
            margin-right: 0.03rem;
            background: #f4f4f4;
          }
        }
      }
    }
  }
</style>

