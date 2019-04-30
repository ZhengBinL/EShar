<template>
  <div class='hotel'>
    <mt-header class="header" :title="title">
      <router-link :to="link" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <mt-navbar class="select-nav" v-model="selected" @click.native.prevent="clickItem">
      <mt-tab-item id="1">综合筛选<span class="iconfont "
                                    :class="popupVisible?'icondown':'iconupward'"></span></mt-tab-item>
      <!-- <mt-tab-item id="2">位置区域<span class="iconfont "
                                    :class="popupVisible1?'icondown':'iconupward'"></span></mt-tab-item> -->
      <mt-tab-item id="3">价格/星级<span class="iconfont "
                                     :class="popupVisible2?'icondown':'iconupward'"></span></mt-tab-item>
      <mt-tab-item id="4">智能排序<span class="iconfont " :class="selected==4?'icondown':'iconupward'"></span>
      </mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container class="tab-cont" v-model="selected">
      <mt-tab-container-item id="1">
        <mt-popup
          v-model="popupVisible"
          :modal="popupVisible"
          :closeOnClickModal="Tflag"
          popup-transition="popup-fade">
          <div class="showPop">
            <div class='tit'><span>品牌</span></div>
            <div class="show-item">
              <div class="item-tit">
                <span>高端连锁</span>
              </div>
              <div class="item-info" >
                <span v-if="item.remark == '1'" :class="item.dictLabel==cityFlag?'active':''"
                      v-for="item in filterArry" :key="item.id"
                      @click="handleSelect(item)">{{item.dictLabel}}</span>
              </div>
            </div>
            <div class="show-item">
              <div class="item-tit">
                 <span>中端连锁</span>
              </div>
              <div class="item-info" >
                <span v-if="item.remark == '2'" :class="item.dictLabel==cityFlag?'active':''"
                      v-for="item in filterArry" :key="item.id"
                      @click="handleSelect(item)">{{item.dictLabel}}</span>
              </div>
            </div>
            <div class="show-item">
              <div class="item-tit">
                <span>快捷连锁</span>
              </div>
              <div class="item-info" >
                <span v-if="item.remark == '3'" :class="item.dictLabel==cityFlag?'active':''"
                      v-for="item in filterArry" :key="item.id"
                      @click="handleSelect(item)">{{item.dictLabel}}</span>
              </div>
            </div>
            <div class="btns">
              <button class="clear-btn" @click="handleClear">清空</button>
              <button class="sure-btn" @click="handleChose('popupVisible')">确定</button>
            </div>
          </div>
        </mt-popup>
      </mt-tab-container-item>
      <!-- <mt-tab-container-item id="2">
        <mt-popup
          v-model="popupVisible1"
          :modal="popupVisible1"
          :closeOnClickModal="Tflag"
          popup-transition="popup-fade">
          <div class="showPop position">
            <mt-cell v-for="item in distance" :key="item.id"
                     :title="item.score+'以内'"
                     :class="item.id==distanceFlag?'distance':''"
                     @click.native="handleDistance(item)"/>
            <div class="btns">
              <button class="clear-btn" @click="handleClear">清空</button>
              <button class="sure-btn" @click="handleChose('popupVisible1')">确定</button>
            </div>
          </div>
        </mt-popup>
      </mt-tab-container-item> -->
      <mt-tab-container-item id="3">
        <mt-popup
          v-model="popupVisible2"
          :modal="popupVisible2"
          :closeOnClickModal="Tflag"
          popup-transition="popup-fade">
          <div class="showPop">
            <div class="star-tit"><span>价格（每晚均价）</span></div>
            <mt-range class="rang-cont" v-model="rangeValue" :min="0" :max="2000" :step="10" :bar-height="5">
              <div class="rang-num min-num" slot="start">¥0</div>
              <div class="rang-num max-num" slot="end">¥2000+</div>
            </mt-range>
            <div>
              <div class="star-tit"><span>星级</span></div>
              <div class="level">
                <span :class="item.dictLabel==actionFlag?'active':''" v-for="item in starArry" :key="item.id"
                      @click="checkAction(item)">{{item.dictLabel}}</span>
              </div>
            </div>
            <div class="btns">
              <button class="clear-btn" @click="handleClear">清空</button>
              <button class="sure-btn" @click="handleChose('popupVisible2')">确定</button>
            </div>
          </div>
        </mt-popup>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <!--<div class="showPop">-->
        <!--<div class="condition">-->
        <!--<div class="condition-cont">-->
        <!--<span v-for="item in sortArr" :key="item">{{item}}</span>-->
        <!--</div>-->
        <!--</div>-->
        <!--&lt;!&ndash;<mt-cell v-for="n in 6" :key="n.id" :title="'智能排序 ' + n"/>&ndash;&gt;-->
        <!--</div>-->
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- <div class="condition">
      <div class="condition-cont">
        <span :class="hasClass(item)" @click="clickItemSelect(item)" v-for="item in sortArr" :key="item">{{item}}</span>
      </div>
    </div> -->
    <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        class="padd23">
      <li v-for="item in cityArry" :key="item.id" @click="handleDetail(item)">
        <v-cityItem :cityItem="item"></v-cityItem>
      </li>
    </ul>

  </div>
</template>

<script>
  import cityItem from "../../components/cityItem";
  import axios from 'axios'
  export default {
    components: {
      "v-cityItem": cityItem
    },
    data() {
      return {
        popupVisible: false,
        popupVisible1: false,
        popupVisible2: false,
        loading: true,
        rangeValue: 0,
        actionFlag: 0,
        cityFlag: '',
        distanceFlag: 0,
        chooseCity: {},
        chooseDistance: {},
        filterArry:[],
        starArry:[],
        title: "请选择酒店",
        link: "/",
        selected: "4",
        chain: [
          {
            title: "高端连锁",
            name: [
              {
                name: "全部高端连锁",
                id: 0
              },
              {
                name: "豪生",
                id: 1
              }
            ]
          },
          {
            title: "中端连锁",
            name: [
              {
                name: "全部中端连锁",
                id: 0
              },
              {
                name: "维也纳",
                id: 1
              },
              {
                name: "锦江之星品尚",
                id: 2
              },
              {
                name: "如家商旅",
                id: 3
              },
              {
                name: "锦江都城",
                id: 4
              },
              {
                name: "汉庭优佳",
                id: 5
              },
              {
                name: "汉庭优佳1",
                id: 6
              },
              {
                name: "汉庭优佳2",
                id: 7
              }
            ]
          },
          {
            title: "快捷连锁",
            name: [
              {
                name: "汉庭优佳3",
                id: 0
              },
              {
                name: "汉庭优佳4",
                id: 1
              },
              {
                name: "汉庭优佳5",
                id: 2
              }
            ]
          }
        ],
        distance: [
          {
            score: "500米",
            id: 0
          },
          {
            score: "1公里",
            id: 1
          },
          {
            score: "2公里",
            id: 2
          },
          {
            score: "3公里",
            id: 3
          },
          {
            score: "4公里",
            id: 4
          },
          {
            score: "8公里",
            id: 5
          },
          {
            score: "10公里",
            id: 6
          }
        ],
        Tflag: false,
        star: [
          {
            id: 0,
            name: "不限"
          },
          {
            id: 1,
            name: "二星/经济"
          },
          {
            id: 2,
            name: "三星/舒适"
          },
          {
            id: 3,
            name: "四星/高档"
          },
          {
            id: 4,
            name: "五星/豪华"
          }
        ],
        sortArr: [
          "4.5分及以上",
          "优惠促销",
          "双床",
          "大床",
          "含早餐",
          "信用住",
          "免费取消",
          "闪电确认",
          "终点房",
          "已收藏"
        ],
        sureSort:[],//选中的项存放变量
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
          },
          {
            id: 4,
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
            id: 5,
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
            id: 6,
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
        ]
      };
    },
    mounted(){
      this.initList()
      this.filterAll()
      this.priceStar()
    },
    methods: {
      //带有结果的查询
      initList(){
        console.log('chufa')
        let url = '/api/hotelList'
        axios.get(url).then((res)=>{
          if(res.status == 200){
            console.log(res,'dddsss')
            let cityList  = res.data
            this.cityArry  = cityList.data
          }
        })
      },
      //综合筛选
      filterAll(){
        let url = '/api/brandList'
        axios.get(url).then((res)=>{
          if(res.status == 200){
            console.log(res,'dddsss')
            let filterList  = res.data
            this.filterArry  = filterList.data
          }
        })
      },
      //位置区域
      //价格星级
      priceStar(){
        let url = '/api/starList'
        axios.get(url).then((res)=>{
          if(res.status == 200){
            console.log(res,'dddsss')
            let starList  = res.data
            this.starArry  = starList.data
          }
        })
      },
      //切换tab
      clickItem() {
        if (this.selected == "1") {
          this.popupVisible = !this.popupVisible;
          this.popupVisible1 = false;
          this.popupVisible2 = false;
        } else if (this.selected == "2") {
          this.popupVisible = false;
          this.popupVisible1 = !this.popupVisible1;
          this.popupVisible2 = false;
        } else if (this.selected == "3") {
          this.popupVisible = false;
          this.popupVisible1 = false;
          this.popupVisible2 = !this.popupVisible2;
        }
      },
      // 点击切换下面的选项
      clickItemSelect(val){
        console.log(val)
        if(this.sureSort.indexOf(val)==-1){
          this.sureSort.push(val)
        }
        // console.log(this.sureSort)
      },
      hasClass(val){
        let flag='';
        for (let item of this.sureSort){
          if(item==val){
            flag='is-active'
          }
        }
        return flag
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
      //选择品牌
      handleSelect(item) {
        console.log(item, 'item')
        this.chooseCity = item;
        this.cityFlag = item.dictLabel;
        this.actionFlag = item.dictLabel;
      },
      //清空
      handleClear() {
        this.chooseCity = {};
        this.cityFlag = '';
        this.actionFlag = '';
        this.chooseDistance = {};
        this.distanceFlag = 0;
        this.rangeValue = 0;
      },
      //确定
      handleChose(s) {
        this[s] = !this[s]
        console.log(s)
        console.log(this.chooseCity, 'd')
      },
      //选择区域
      handleDistance(s) {
        this.distanceFlag = s.id;
        this.chooseDistance = s;
      },
      //切换星级状态
      checkAction(item) {
        this.actionFlag = item.dictLabel;
        // this.actionName = item.name
      },
      //酒店详情
      handleDetail(itemId) {
        console.log(itemId)
        this.$router.push({name: 'hoteDetail', query: {hoteDetail: itemId}})
      }
    }
  };
</script>

<style>
  .hotel .mint-tab-item-label {
    font-size: 0.13rem;
  }
  .hotel .mint-navbar .mint-tab-item{
    padding: 0.15rem 0;
  }
  .hotel ul.padd23 {
    padding-top: 0.93rem;
  }


  .hotel .mint-popup {
    width: 100%;
    position: absolute;
    background: #fff;
    top: 90px;
    left: 0;
    transform: translate(0, 0);
    backface-visibility: hidden;
    transition: 0.2s ease-out;
  }

  .hotel .mint-cell-wrapper {
    background-image: none;
    border-bottom: 1px solid #d9d9d9;
  }
  .hotel  .mint-navbar .mint-tab-item.is-selected{
    border-bottom: 0;
  }
  .hotel  .position .mint-cell-wrapper{
    font-size: 0.14rem;
    color: #333;
  }
  .hotel .position .distance .mint-cell-wrapper{
    color: #fca500;
  }
</style>
<style scoped lang='scss'>
  .hotel {
    height: 100%;
    .header {
      position: fixed;
      width: 100%;
      height: 0.4rem;
      top:0;
      z-index: 10000;
    }

    .select-nav {
      position: fixed;
      width: 100%;
      height: 0.5rem;
      top:0.4rem;
      z-index: 10000;
      border-bottom: 0.02rem solid #f2f3f4;
    }
  }

  .tab-cont {
    overflow: visible;
    width: 100%;
    position: absolute;
  }

  .condition {
    width: 100%;
    overflow: hidden;
    position: absolute;
    padding: 0.1rem;
    box-sizing: border-box;
    background: #f2f3f4;
    .condition-cont {
      white-space: nowrap;
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      span {
        display: inline-block;
        padding: 0.05rem 0.09rem;
        margin-right: 0.07rem;
       background: #fff;
        border-radius: 0.3rem;
        color: #333;
        font-size: 0.12rem;
        border: 1px solid #fff;
        box-sizing: border-box;
        &.is-active{
          border: 1px solid #ffb200;
          color: #ffb200;
        }
      }
    }
  }

  .showPop {
    padding-top: 0.1rem;
    padding-left: 0.1rem;
    width: 100%;
    box-sizing: border-box;

    .tit {
      font-size: 0.16rem;
      color: #333;
      font-weight: bold;
      padding: 0.1rem;
    }

    .star-tit {
      font-size: 0.14rem;
      color: #999;
      margin-bottom: 0.15rem;
      margin-left: 0.03rem;
    }

    .rang-cont {
      margin: 0.3rem auto 0;
      width: 90%;

      .rang-num {
        position: absolute;
        top: -0.3rem;

        &.min-num {
          left: -0.1rem;
        }

        &.max-num {
          right: -0.1rem;
        }
      }
    }

    .level {
      span {
        display: inline-block;
        width: 23%;
        margin: 0.03rem;
        line-height: 0.3rem;
        justify-content: center;
        align-items: center;
        background-color: #f6f6f6;
        border-radius: 0.05rem;
        box-sizing: border-box;
        color: #333;
        font-size: 0.13rem;
        padding: 0.05rem 0;
        text-align: center;
        overflow: hidden;

        &.active {
          background-color: #fff7d4;
          color: #fca500;
        }
      }
    }

    .show-item {
      border-top: 1px solid #eee;
      margin-left: 0.1rem;

      .item-tit {
        font-size: 0.14rem;
        color: #838383;
        padding: 0.1rem 0;
      }

      .item-info {
        padding-bottom: 0.1rem;

        span {
          display: inline-block;
          width: 31.5%;
          background: #f9f9f9;
          color: #333;
          text-align: center;
          padding: 0.1rem 0;
          border-radius: 0.05rem;
          margin: 0 0.05rem 0.1rem 0;
          font-size: 0.12rem;
        }

        .active {
          background-color: #fff7d4;
          color: #fca500;
        }
      }
    }

    .btns {
      display: flex;
      padding: 0.15rem 0.2rem;
      justify-content: space-between;

      button {
        border-radius: 0.2rem;
        width: 45%;
        padding: 0.08rem 0;
        border: 0;
        outline: none;
        font-size: 0.14rem;
        letter-spacing: 0.05rem;

        &.clear-btn {
          background: #fff;
          color: #333;
          border: 1px solid #929090;
          box-shadow: 0 0.02rem 0.04rem #e0dddd;
        }

        &.sure-btn {
          background: #ef5a00;
          color: #fff;
          box-shadow: 0 0.02rem 0.04rem #ffceb7;
        }
      }
    }

    .distance {
      /*background-color: #fff7d4;*/
      color: #fca500;
      position: relative;
      &::after{
        font-family: "iconfont";
        content: '\e633';
        color: #fca500;
        position: absolute;
        right: 0.05rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .select-nav {
    span {
      margin-left: 0.05rem;
    }
  }
</style>
