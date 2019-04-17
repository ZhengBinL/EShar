<template>
  <div class="zbl">
    <div class="head">
      <mt-swipe :auto="4000" class="w">
        <mt-swipe-item><img src="../../assets/img/1.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/img/2.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/img/3.jpg"></mt-swipe-item>
      </mt-swipe>
      <div class="">
        <span><i></i></span>
      </div>
    </div>
    <div class="search">
      <div class="local">
        <div class="localLeft">
          <mt-cell :title="titleCity?titleCity:'北京'" is-link @click.native="switchCityFlag">
          </mt-cell>
        </div>
        <div class="localRight">
          <span class="iconfont icon-dingwei"></span>
          <span>我的附近</span>
        </div>
      </div>
      <mt-cell class="search-item" is-link @click.native="switchDayFlag">
        <div class="fontSize">3.16<span class="gray">今天</span> —<span class="minBorder">1晚</span>— 3.17<span
          class="gray">明天</span></div>
      </mt-cell>
      <mt-cell class="search-item" :title="titleSearch" :label="titleSearch?'':'住北京的人都在搜：王府井'" is-link
               @click.native="switchSearchFlag"></mt-cell>
      <mt-cell class="search-item" :title="titlePN" :label="titlePN?'':'价格/星级'" is-link
               @click.native="switchStarFlag"></mt-cell>
      <div class="searchButton">
        <mt-button class="search-btn" type="danger" size="large" @click.native="handleGosearch">开始搜索</mt-button>
      </div>
    </div>
    <div class="content">
      <div class="selfButton">
        <mt-button class="imgButton">
          <img src="../../assets/img/BJ.jpg" slot="icon">
        </mt-button>
        <mt-button class="imgButton">
          <img src="../../assets/img/BJ.jpg" slot="icon">
        </mt-button>
        <mt-button class="imgButton">
          <img src="../../assets/img/BJ.jpg" slot="icon">
        </mt-button>
        <mt-button class="imgButton">
          <img src="../../assets/img/BJ.jpg" slot="icon">
        </mt-button>
      </div>
      <div class="hotel">
        <div class="Htitle">猜你喜欢</div>
        <ul v-infinite-scroll="loadMore" 
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
            >
          <li v-for="item in cityArry" :key="item.id" @click="handleDetail(item.id)">
            <v-cityItem :cityItem="item"></v-cityItem>
          </li>
        </ul>
      </div>
    </div>

    <v-search :searchFlag="searchFlag" @switchSearch="switchSearchFlag"></v-search>

    <v-daytime :dayFlag="dayFlag" @switchDay="switchDayFlag"></v-daytime>

    <v-star :starFlag="starFlag" @switchStar="switchStarFlag"></v-star>

    <v-city :cityFlag="cityFlag" @switchCity="switchCityFlag"></v-city>
  </div>
</template>

<script>
  import cityItem from "../../components/cityItem";
  import vCity from "./city";
  import vStar from "./star";
  import vDaytime from './daytime'
  import vSearch from './search'
  export default {
    components: {
      "v-cityItem": cityItem,
      "v-city":vCity,
      "v-star":vStar,
      "v-daytime":vDaytime,
      "v-search":vSearch
    },
    data() {
      return {
        searchFlag:false,
        cityFlag:false,
        starFlag:false,
        dayFlag:false,
        titleSearch:'',
        titlePN:'',
        titleCity:'',
        active: "book",
        popupVisible: false,
        rangeValue: 0,
        //   title: "酒店",
        goLink: "/",
        loading: true,
        cityArry: [
          {
            id: 1,
            imgLink: "../assets/img/BJ.jpg",
            hotelName: "大同浩海国际酒店",
            hotelType: "高档型",
            hotelScore: "4.7",
            hotelEvaluate: "非常好",
            reviewScore: "486",
            bookTime: "2",
            bookFlage: "1",
            oldPrice: 126,
            newPrice: 124
          },
          {
            id: 2,
            imgLink: "../assets/img/BJ.jpg",
            hotelName: "大同浩海国际酒店",
            hotelType: "高档型",
            hotelScore: "4.7",
            hotelEvaluate: "非常好",
            reviewScore: "486",
            bookTime: "2",
            bookFlage: "1",
            oldPrice: 126,
            newPrice: 124
          },
          {
            id: 3,
            imgLink: "../assets/img/BJ.jpg",
            hotelName: "大同浩海国际酒店",
            hotelType: "高档型",
            hotelScore: "4.7",
            hotelEvaluate: "非常好",
            reviewScore: "486",
            bookTime: "2",
            bookFlage: "1",
            oldPrice: 126,
            newPrice: 124
          }
        ],
      };
    },
    methods: {
      handleCity() {
        debugger;
        this.$router.push({ name: "city" });
      },
      handleGosearch() {
        this.$router.push({ name: "hotel" });
      },
      loadMore() {
        this.loading = true;
        // setTimeout(() => {
        //     let last = this.list[this.list.length - 1];
        //     for (let i = 1; i <= 10; i++) {
        //     this.list.push(last + i);
        //     }
        //     this.loading = false;
        // }, 2500);
      },
      //选择城市切换
      switchCityFlag(item){
        console.log(item)
        item&&(this.titleCity = item.title);
        this.cityFlag = !this.cityFlag;
      },
      //选择日期切换
      switchDayFlag(){
        this.dayFlag = !this.dayFlag;
      },
      //选择最热搜索切换
      switchSearchFlag(item){
        item&&(this.titleSearch = item.name);
        this.searchFlag = !this.searchFlag;
      },
      //选择价格星级切换
      switchStarFlag(item){
        console.log(item,'item')
        item.name&&(this.titlePN = `¥${item.price}-¥2000+/${item.name}`);
        this.starFlag = !this.starFlag;
      },  
      //酒店详情
      handleDetail(itemId){
        console.log(itemId)
        this.$router.push({name:'hoteInfo',query:{hotelId:itemId}})
      }
    }
  };
</script>
<style>
  .localLeft .mint-cell-wrapper {
    font-size: 0.18rem;
  }

  .search-item .mint-cell-label {
    font-size: 0.14rem;
  }
</style>
<style scoped lang="scss">
  .zbl {
    /*background-color: #d3d3d3;*/
    padding-bottom:0.4rem;
    .head {
      background-color: #ffffff;

      .w {
        width: 3.75rem;
        height: 1.5rem;

        img {
          width: 3.75rem;
          height: 1.5rem;
          overflow: hidden;
        }
      }
    }

    .search {
      padding: 0 1px;
      background: #fff;

      .local {
        display: flex;
        border-bottom: 1px solid #efefef;

        .localLeft {
          flex: 4;
        }

        .localRight {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #ffffff;
          font-size: 0.12rem;

          span.iconfont {
            font-size: 0.2rem;
            color: #ff9300;
          }
        }

      }

      .search-item {
        border-bottom: 1px solid #efefef;

        .fontSize {
          width: 6.5rem;
          font-size: 0.18rem;
          color: #333;

          .gray {
            font-size: 0.12rem;
            color: #828282;
            padding: 0 0.05rem;
          }

          .minBorder {
            font-size: 0.12rem;
            display: inline-block;
            width: 0.3rem;
            height: 0.15rem;
            line-height: 0.15rem;
            text-align: center;
            border-radius: 0.1rem;
            border: 1px solid #d3d3d3;
          }
        }
      }


      .searchButton {
        padding: 0.15rem 0.05rem;
        background-color: #ffffff;

        .search-btn {
          background: #eb5d2b;
          text-align: center;
          color: #fff;
          border-radius: 0.04rem;
          /*background: linear-gradient(270deg,#f35,#ff9300);*/
          height: 0.44rem;
          line-height: 0.44rem;
          font-size: 0.18rem;
          box-shadow: 0 0.02rem 0.04rem #ffceb7;
        }
      }
    }

    .content {
      background-color: #ffffff;
      overflow: hidden;
      border-top: 0.06rem solid #efefef;

      .selfButton {
        display: flex;
        justify-content: space-between;
        padding: 0.1rem;
        margin-top: 0.2rem;

        .imgButton {
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 0.2rem;
        }
      }

      .hotel {
        .Htitle {
          border-left: 0.05rem solid yellow;
          margin: 0.1rem;
          border-left: 0.03rem solid yellow;
          padding: 0 0 0 0.1rem;
          font-size: 0.16rem;
          font-weight: bold;
          color: #333;
        }
      }
    }
  }
</style>
