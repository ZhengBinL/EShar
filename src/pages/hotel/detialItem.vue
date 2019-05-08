<template>
  <div class="item">
    <div class="item-img"><img :src="info.imageUrl"></div>
    <div class="item-info">
      <div class="book">
        <div class="book-tit">
          <p>{{info.name}}</p>
          <span>{{info.area}}m<sup>2</sup> {{info.bedinfo}} {{info.d}}</span>
        </div>
        <div class="book-img" @click="goBook">
          <p>订</p>
          <span>在线付</span>
        </div>
      </div>
      <div class="book-price">
        <div class="book-price-top">
          <del>￥{{info.price}}</del>
          <span><i>￥</i>{{info.discountPrice}}</span>起<i class="iconfont icondown"></i>
        </div>
        <p>立减</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "detialItem",
      props:['info'],
      data(){
          return{}
      },
      methods:{
          // 预定
        goBook(){
          this.$router.push({name: 'hoteInfo', query: {hotelId: 1}})
        }
      }
    }
</script>

<style scoped lang="scss">
  .item {
    border-top: 1px solid #efefef;
    padding: 0.1rem;
    display: flex;

    .item-img {
      width: 1rem;
      height: 1rem;
      border-radius: 0.05rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .item-info {
      width: 2.55rem;
      padding-left: 0.1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .book {
        display: flex;
        justify-content: space-between;

        .book-tit {
          display: flex;
          flex-direction: column;
          color: #333;

          p {
            font-size: 0.14rem;
          }

          span {
            font-size: 0.12rem;
            color: #a9acb1;
          }
        }

        .book-img {
          width: 0.5rem;
          background: linear-gradient(270deg, #f35, #ff9300);
          border-radius: 0.03rem;
          text-align: center;
          color: #fff;
          font-size: 0.14rem;
          padding: 0.01rem;

          p {
            line-height: 0.3rem;
          }

          span {
            width: 100%;
            display: inline-block;
            color: #ff9300;
            background: #fff;
            border-radius: 0.03rem;
          }
        }
      }

      .book-price {
        text-align: right;

        .book-price-top {
          color: #a9acb1;
          font-size: 0.12rem;
          span {
            color: #ff9300;
            font-size: 0.16rem;
            font-weight: bold;
            padding-right: 0.05rem;
            i {
              display: inline-block;
              width: 0.13rem;
              height: 0.13rem;
              font-style: normal;
              font-size: 0.12rem;
            }
          }
          .iconfont{
            display: inline-block;
            width: 0.13rem;
            height: 0.13rem;
            border-radius: 50%;
            background: linear-gradient(270deg,#f35,#ff9300);
            font-size: 0.12rem;
            margin-left: 0.03rem;
            color: #fff;
          }
        }
        p{
          margin-right: 0.16rem;
          display: inline-block;
          font-size: 0.12rem;
          line-height: 0.12rem;
          color: #ff9300;
          border: 1px solid #ff9300;
          padding: 0.01rem 0.03rem;
        }
      }
    }
  }
</style>
