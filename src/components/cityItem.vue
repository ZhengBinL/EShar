<template>
  <div class="Hcontent">
    <div class="Hleft">
      <img :src="cityItem.imageUrl" alt="">
    </div>
    <div class="Hright">
      <div class="HTop">
        <div>
          <span class="title">{{cityItem.brandName}}</span>
          <span class="mintitle">{{cityItem.starName}}</span>
        </div>
        <div>
          <span class="title score">{{cityItem.scoreName}}<i>分</i></span>
          <!-- <span class="medtitle">{{cityItem.hotelEvaluate}}</span><span class="mintitle">{{cityItem.reviewScore}}条点评</span> -->
        </div>
      </div>
      <div class="HBottom">
        <div class="red ">提前{{cityItem.bookInfo}}天预订</div>
        <div class="HBBottom">
          <span class="red">{{cityItem.bookFlage=='1'?'法定节假日不可预订':'法定节假日可预订'}}</span>
          <div class="price">
            <span class="oldprice">¥{{cityItem.discountPrice}}起</span>
            <div class="nowpice">
              <span class="newprice"><span class="fontSize">¥</span>{{cityItem.price}}<span class="fontSize">起</span> <i class="iconfont iconnext"></i></span>
              <div>
                  <span class="reduce">立减¥{{cityItem.discountPrice/1 - cityItem.price/1}}
                  </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      cityItem: {
        type: Object
      }
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .Hcontent {
    display: flex;
    padding: 0.18rem 0.12rem 0;
    .Hleft {
      flex: 1;
      img {
        width: 1.1rem;
        height: 1.1rem;
        border-radius: 0.08rem;
      }
    }
    .Hright {
      flex: 3;
      display: flex;
      padding-left: 0.1rem;
      flex-direction: column;
      .HTop{
        .title {
          font-weight: 900;
          font-size: 0.16rem;
        }
        .score {
          font-size: 0.18rem;
          font-weight: 400;
          border-bottom: 0.02rem solid yellow;
          i{
            font-size: 0.13rem;
            font-style: normal;
          } 
        }
        .medtitle {
          font-size: 0.13rem;
          padding-left: 0.05rem;
          font-weight: 500;
        }
        .mintitle {
          font-size: 0.12rem;
          color: #999;
          padding-left: 0.05rem;
        }
      }
      .HBottom {
        margin-top: 0.1rem;
        display: flex;
        flex-direction: column;
        .red{
          font-size: 0.12rem;
        }
        .HBBottom {
          display: flex;
          padding-top: 0.05rem;
          text-align: center;
          justify-content: space-between;
          .price {
            display: flex;
            .nowpice {
              display: flex;
              flex-direction: column;
              padding-left: 0.05rem;
              color: #ff5000;
              font-weight: 600;
              .newprice {
                font-size: 0.16rem;
                  .fontSize {
                    font-size: 0.12rem;
                    font-weight: 400;
                    padding: 0 0.02rem;
                  }
              }
            }
            .oldprice {
              text-decoration: line-through;
              color: #999;
              font-size: 0.12rem;
            }
            .reduce {
              font-size: 0.12rem;
              padding: 0 0.02rem;
              font-weight: 400;
              color: #ff5000;
              border: 1px solid rgb(255, 188, 188) ;
            }
          }
        }
      }
    }
  }
  .newprice i.iconfont{
    display: inline-block;
    width: 0.13rem;
    height: 0.13rem;
    border-radius: 50%;
    background: linear-gradient(270deg,#f35,#ff9300);
    margin-left: -0.03rem;
    font-size: 0.12rem;
    color: #fff;
  }
</style>
