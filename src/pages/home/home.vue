<template>
    <div class="zbl">
        <div class="head">
            <!-- <v-head :title="title" :link="goLink"></v-head> -->
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
            <mt-cell title="北京" to="/index/city" is-link class="location"></mt-cell>
            <mt-cell label="3.16今天-3.17明天" to="/index/daytime" is-link></mt-cell>
            <mt-cell label="住北京的人都在搜：王府井" to="/index/search" is-link></mt-cell>
            <mt-cell label="价格/星级" is-link @click.native="handleVisible"></mt-cell>
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
                <v-cityItem ></v-cityItem>
            </div>
        </div>
        <!-- <router-view></router-view> -->
        <mt-popup v-model="popupVisible" popup-transition="popup-fade" position="bottom" class="popW">
            <div class="showPop">
                <div class="tit"><span>价格（每晚均价）</span></div>
                <mt-range class="rang-cont" v-model="rangeValue" :min="0" :max="2000" :step="10" :bar-height="5">
                    <div class="rang-num min-num" slot="start">¥0</div>
                    <div class="rang-num max-num" slot="end">¥2000+</div>
                </mt-range>
                <div>
                    <div class="tit"><span>星级</span></div>
                    <div class="level">
                        <span :class="index==0?'active':''" v-for="(item,index) in star" :key="item.id">{{item.name}}</span>
                    </div>
                </div>
                <div class="btns">
                    <mt-button class="btn reset" type="primary">重置</mt-button>
                    <mt-button class="btn over" type="danger">完成</mt-button>
                </div>
            </div>
        </mt-popup>
    </div>
</template>

<script>
import cityItem from '../../components/cityItem'
import vHead from '../../components/header'
export default {
  components: {
    'v-cityItem':cityItem,
    'v-head':vHead
  },
  data(){
      return {
          active:'book',
          popupVisible:false,
          rangeValue:0,
          title:'酒店',
          goLink:'/',
          star:[
              {
                  id:0,
                  name:"不限"
              },
              {
                  id:1,
                  name:"二星/经济"
              },
              {
                  id:2,
                  name:"三星/舒适"
              },
              {
                  id:3,
                  name:"四星/高档"
              },
              {
                  id:4,
                  name:"五星/豪华"
              },
          ]
      }

  },
  methods:{
    handleCity(){
        debugger
        this.$router.push({ name: 'city' });
    },
    handleVisible(){
        this.popupVisible = true;
    },
    handleGosearch(){
        this.$router.push({ name: 'hotel' });
    }
  }
};
</script>
<style>

</style>
<style scoped>
.zbl{
    background-color: #d3d3d3;
}

.head{
    background-color: #ffffff;
}
.head .w {
  width: 100%;
  height: 150px;
  background-color: red;
}

.search{
    padding:0 1px;
}
.search .searchButton{
    padding:10px 5px;
    background-color: #ffffff;
}
.search .location{
    width: 80%;
}

.content{
background-color: #ffffff;
overflow: hidden;
}
.content .selfButton{
    display: flex;
    justify-content: space-between;
    padding:10px;
    margin-top:20px;
}
.content .selfButton .imgButton{
    width: 40px;
    height: 40px;
    border-radius: 20px;
}
.popW{
    width: 100%;
}
.showPop{
    width: 100%;
  padding: 15px 9px;
  box-sizing: border-box;
}
.showPop .tit{
  font-size: 14px;
  color: #999;
  margin-bottom: 15px;
  margin-left: 3px;
}
.rang-cont{
  margin: 30px auto 0;
  width: 90%;
}
.rang-num{
  position: absolute;
  top: -30px;
}
.rang-num.min-num{
  left: -10px;
}
.rang-num.max-num{
  right: -10px;
}
.level span{
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
}
.level span.active{
  background-color: #fff7d4;
  color: #fca500;
}
.btns{
  display: flex;
  justify-content: space-between;
}
.btns .btn{
  width: 50%;
  background: #fff;
  color: #333;
  font-size: 14px;
}
.btns .btn.reset{
  color: #ffc900;
}
.btns .btn.over{
  background: #ffc900;
}
  .Htitle{
    margin: 10px;
    border-left: 3px solid yellow;
    padding-left: 20px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
</style>
