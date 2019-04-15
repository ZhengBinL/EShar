<template>
    <div class="zbl">
        <div class="head">
            <mt-swipe :auto="4000" class="w">
                <mt-swipe-item><img src="../../assets/img/1.jpg"> </mt-swipe-item>
                <mt-swipe-item><img src="../../assets/img/2.jpg"> </mt-swipe-item>
                <mt-swipe-item><img src="../../assets/img/3.jpg"> </mt-swipe-item>
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
            <mt-cell is-link @click.native="switchDayFlag">
                <div class="fontSize">3.16今天-<span class="minBorder">1晚</span>- 3.17明天</div>
            </mt-cell>
            <mt-cell :title="titleSearch" :label="titleSearch?'':'住北京的人都在搜：王府井'" is-link @click.native="switchSearchFlag"></mt-cell>
            <mt-cell :title="titlePN" :label="titlePN?'':'价格/星级'" is-link @click.native="switchStarFlag"></mt-cell>
            <div class="searchButton">
               <mt-button type="danger" size="large" @click.native="handleGosearch">开始搜索</mt-button>
            </div>
        </div>
        <div class="content">
            <div class="selfButton">
                <mt-button class="imgButton">
                    <img src="../../assets/img/BJ.jpg"  slot="icon">
                </mt-button>
                <mt-button class="imgButton">
                    <img src="../../assets/img/BJ.jpg"  slot="icon">
                </mt-button>
                <mt-button class="imgButton">
                    <img src="../../assets/img/BJ.jpg"  slot="icon">
                </mt-button>
                <mt-button class="imgButton">
                    <img src="../../assets/img/BJ.jpg"  slot="icon">
                </mt-button>
            </div>
            <div class="hotel">
                <div class="Htitle">猜你喜欢</div>
                <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
                    infinite-scroll-distance="10">
                    <li v-for="item in cityArry" :key="item.id">
                        <v-cityItem :cityItem="item"></v-cityItem>
                    </li>
                </ul>
            </div>
        </div>

        <v-search  :searchFlag="searchFlag" @switchSearch="switchSearchFlag"></v-search>

        <v-daytime :dayFlag="dayFlag" @switchDay="switchDayFlag"></v-daytime>

        <v-star :starFlag="starFlag" @switchStar="switchStarFlag"></v-star>

        <v-city :cityFlag="cityFlag" @switchCity="switchCityFlag"></v-city>
    </div>
</template>

<script>
import cityItem from "../../components/cityItem";
// import vHead from "../../components/header";
import vCity from "./city";
import vStar from "./star";
import vDaytime from './daytime'
import vSearch from './search'
export default {
  components: {
    "v-cityItem": cityItem,
    // "v-head": vHead,
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
      title: "酒店",
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
        item.title&&(this.titleCity = item.title);
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
    }
  }
};
</script>

<style scoped lang="scss">
.zbl {
  background-color: #d3d3d3;
  .head {
    background-color: #ffffff;
    .w {
        width: 375px;
        height: 150px;
        img {
            width: 375px;
            height: 150px;
            overflow: hidden;
        }
    }
  }
  .search {
    padding: 0 1px;
    .local {
        display: flex;
        .localLeft {
            flex: 4;
        }
        .localRight {
            flex: 1;
            display: flex;
            flex-direction: column;
            background-color: #ffffff;
        }

    }
    .fontSize {
        width: 650px;
        font-size: 12px;
        .minBorder {
            font-size: 12px;
            display: inline-block;
            width: 30px;
            height: 15px;
            line-height: 15px;
            text-align: center;
            border-radius: 10px;
            border: 1px solid #d3d3d3;
        }
    }
    
    .searchButton {
        padding: 10px 5px;
        background-color: #ffffff;
    }
  }
  .content {
    background-color: #ffffff;
    overflow: hidden;
    .selfButton {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        margin-top: 20px;
        .imgButton {
            width: 40px;
            height: 40px;
            border-radius: 20px;
        }
    }
    .hotel{
        .Htitle {
            padding-left: 5px;
            border-left: 5px solid yellow;
            padding-bottom: 10px;
            margin: 10px;
            border-left: 3px solid yellow;
            padding-left: 20px;
            font-size: 16px;
            font-weight: bold;
            color: #333;
        }
    }
  }
}
</style>
