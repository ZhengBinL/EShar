<template>
    <div class="zbl">
        <div class="head">
            <!-- <v-head :title="title" :link="goLink"></v-head> -->
            <mt-swipe :auto="4000" class="w">
                <mt-swipe-item>111111111</mt-swipe-item>
                <mt-swipe-item>222222222</mt-swipe-item>
                <mt-swipe-item>333333333</mt-swipe-item>
            </mt-swipe>
            <div class="">
                <span><i></i></span>
            </div>
        </div>
        <div class="search">
            <div class="local">
                <div class="localLeft">
                    <mt-cell title="北京" to="/index/city" is-link>
                    </mt-cell>
                </div>
                <div class="localRight">
                    <span class="iconfont icon-dingwei"></span>
                    <span>我的附近</span>
                </div>
            </div>
            <mt-cell to="/index/daytime" is-link>
                <div class="fontSize">3.16今天-<span class="minBorder">1晚</span>- 3.17明天</div>
            </mt-cell>
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
                <div><span>价格（每晚均价）</span></div>
                <mt-range v-model="rangeValue" :min="0" :max="2000" :step="10" :bar-height="5">
                    <div slot="start">¥0</div>
                    <div slot="end">¥2000+</div>
                </mt-range>
                <div>
                    <div><span>星级</span></div>
                    <div>
                        <span v-for="item in star" :key="item.id">{{item.name}}</span>
                    </div>
                </div>
                <div>
                    <mt-button type="primary">重置</mt-button>
                    <mt-button type="danger">完成</mt-button>
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
    height: 200px;
}

.Htitle{
    padding-left: 5px;
    border-left: 5px solid yellow;
    padding-bottom:10px;
}

.local{
    display: flex;
}
.local .localLeft{
    flex:4
}
.local .localRight{
    flex:1;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    
}
.minBorder{
    font-size: 12px;
    display: inline-block;
    width: 30px;
    height: 15px;
    line-height: 15px;
    text-align: center;
    border-radius: 10px;
    border:1px solid #d3d3d3;
}
.fontSize{
    width: 650px;
    font-size: 12px;
}
</style>
