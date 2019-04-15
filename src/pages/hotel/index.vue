<template>
  <div class='hotel'>
    <mt-header class="header" :title="title">
      <router-link :to="link" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <mt-navbar class="select-nav" v-model="selected" @click.native.prevent="clickItem">
      <mt-tab-item id="1">综合筛选<span class="iconfont icon-character"></span></mt-tab-item>
      <mt-tab-item id="2">位置区域<span class="iconfont icon-character"></span></mt-tab-item>
      <mt-tab-item id="3">价格/星级<span class="iconfont icon-character"></span></mt-tab-item>
      <mt-tab-item id="4">智能排序<span class="iconfont icon-character"></span></mt-tab-item>
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
            <div class="show-item" v-for="item in chain" :key="item.id">
              <div class="item-tit">
                <span>{{item.title}}</span>
              </div>
              <div class="item-info">
                <span v-for="item in item.name" :key="item.id">{{item.name}}</span>
              </div>
            </div>
            <div class="btns">
              <button class="clear-btn">清空</button>
              <button class="sure-btn">确定</button>
            </div>
          </div>
        </mt-popup>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-popup
          v-model="popupVisible1"
          :modal="popupVisible1"
          :closeOnClickModal="Tflag"
          popup-transition="popup-fade">
          <div class="showPop">
            <mt-cell v-for="item in distance" :key="item.id" :title="item.score+'以内'"/>
            <div class="btns">
              <button class="clear-btn">清空</button>
              <button class="sure-btn">确定</button>
            </div>
          </div>
        </mt-popup>
      </mt-tab-container-item>
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
                <span :class="index==0?'active':''" v-for="(item,index) in star" :key="item.id">{{item.name}}</span>
              </div>
            </div>
            <div class="btns">
              <button class="clear-btn">清空</button>
              <button class="sure-btn">确定</button>
            </div>
          </div>
        </mt-popup>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
          <div class="showPop">
            <div class="condition">
              <div class="condition-cont">
              <span v-for="item in sortArr" :key="item">{{item}}</span>
              </div>
            </div>
            <!--<mt-cell v-for="n in 6" :key="n.id" :title="'智能排序 ' + n"/>-->
          </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        popupVisible: true,
        popupVisible1: false,
        popupVisible2: false,

        rangeValue: 0,
        title: "请选择酒店",
        link: "/",
        selected: '4',
        chain: [
          {
            title: '高端连锁',
            name: [
              {
                name: '全部高端连锁',
                id: 0
              },
              {
                name: '豪生',
                id: 1
              }
            ]
          },
          {
            title: '中端连锁',
            name: [
              {
                name: '全部中端连锁',
                id: 0
              },
              {
                name: '维也纳',
                id: 1
              },
              {
                name: '锦江之星品尚',
                id: 2
              },
              {
                name: '如家商旅',
                id: 3
              },
              {
                name: '锦江都城',
                id: 4
              },
              {
                name: '汉庭优佳',
                id: 5
              },
              {
                name: '汉庭优佳1',
                id: 6
              },
              {
                name: '汉庭优佳2',
                id: 7
              },
            ]
          },
          {
            title: '快捷连锁',
            name: [
              {
                name: '汉庭优佳3',
                id: 0
              },
              {
                name: '汉庭优佳4',
                id: 1
              },
              {
                name: '汉庭优佳5',
                id: 2
              },
            ]
          },

        ],
        distance: [
          {
            score: '500米',
            id: 0
          },
          {
            score: '1公里',
            id: 1
          },
          {
            score: '2公里',
            id: 2
          },
          {
            score: '3公里',
            id: 3
          },
          {
            score: '4公里',
            id: 4
          },
          {
            score: '8公里',
            id: 5
          },
          {
            score: '10公里',
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
          },
        ],
        sortArr: ['4.5分及以上', '优惠促销', '双床', '大床', '含早餐', '信用住', '免费取消', '闪电确认', '终点房', '已收藏']
      }
    },
    methods: {
      clickItem(){
        console.log(this.selected)
        if(this.selected=='1'){
          this.popupVisible=true;
          this.popupVisible1=false;
          this.popupVisible2=false;
        }else  if(this.selected=='2'){
          this.popupVisible=false;
          this.popupVisible1=true;
          this.popupVisible2=false;
        }
        else  if(this.selected=='3'){
          this.popupVisible=false;
          this.popupVisible1=false;
          this.popupVisible2=true;
        }
      }
    }

  }
</script>

<style>
  .hotel .mint-tab-item-label {
    font-size: 13px;
  }

  .hotel  .mint-popup {
    width: 100%;
    position: absolute;
    background: #fff;
    top: 0;
    left: 0;
    transform: translate(0, 0);
    backface-visibility: hidden;
    transition: .2s ease-out;
  }
  .hotel   .mint-cell-wrapper{
    background-image: none;
    border-bottom: 1px solid #d9d9d9;
  }
</style>
<style scoped lang='scss'>

  .hotel {
    height: 100%;
    .header {
      position: relative;
      z-index: 10000;
    }
    .select-nav {
      position: relative;
      z-index: 10000;
    }
  }

  .tab-cont {
    height: 100%;
    position: relative;
  }

  .condition {
    width: 650px;
    overflow: hidden;
    .condition-cont{
      white-space: nowrap;
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      span{
        display: inline-block;
        padding: 5px 15px;
        margin-right: 5px;
        background: #fbfbfb;
        border-radius: 20px;
        color: #333;
      }
    }
  }

  .showPop {
    padding-top: 10px;
    padding-left: 10px;
    width: 100%;
    box-sizing: border-box;
    .tit {
      font-size: 18px;
      color: #333;
      font-weight: bold;
      padding: 10px;
    }
    .star-tit{
      font-size: 14px;
      color: #999;
      margin-bottom: 15px;
      margin-left: 3px;
    }
    .rang-cont{
      margin: 30px auto 0;
      width: 90%;
      .rang-num{
        position: absolute;
        top: -30px;
        &.min-num{
          left: -10px;
        }
        &.max-num{
          right: -10px;
        }
      }
    }
    .level{
      span{
        display: inline-block;
        width: 23%;
        margin: 3px;
        line-height: 30px;
        justify-content: center;
        align-items: center;
        background-color: #f6f6f6;
        border-radius: 5px;
        box-sizing: border-box;
        color: #333;
        font-size: 13px;
        padding: 5px 0;
        text-align: center;
        overflow: hidden;
        &.active{
          background-color: #fff7d4;
          color: #fca500;
        }
      }
    }
    .show-item {
      border-top: 1px solid #eee;
      margin-left: 10px;

      .item-tit {
        font-size: 14px;
        color: #838383;
        padding: 10px 0;
      }
      .item-info {
        padding-bottom: 10px;
        span {
          display: inline-block;
          width: 31.5%;
          background: #fbfbfb;
          color: #333;
          text-align: center;
          padding: 10px 0;
          border-radius: 5px;
          margin: 0 5px 10px 0;

        }
      }
    }
    .btns {
      display: flex;
      padding: 15px 20px;
      justify-content: space-between;
      button {
        border-radius: 20px;
        width: 45%;
        padding: 10px 0;
        border: 0;
        outline: none;
        font-size: 14px;
        letter-spacing: 5px;
        &.clear-btn {
          background: #fff;
          color: #333;
          border: 1px solid #929090;
        }
        &.sure-btn {
          background: #ef5a00;
          color: #fff;
        }
      }
    }
  }

  .select-nav {
    span {
      margin-left: 5px;
    }
  }
</style>
