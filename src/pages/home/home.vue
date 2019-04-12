<template>
    <div class="zbl">
        <div class="head">
            <mt-header title="酒店">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <mt-swipe :auto="4000" class="w">
                <mt-swipe-item>111111111</mt-swipe-item>
                <mt-swipe-item>222222222</mt-swipe-item>
                <mt-swipe-item>333333333</mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="search">
            <mt-cell title="北京" to="/index/city" is-link class="location"></mt-cell>
            <mt-cell label="3.16今天-3.17明天" to="/index/daytime" is-link></mt-cell>
            <mt-cell label="住北京的人都在搜：王府井" to="/index/search" is-link></mt-cell>
            <mt-cell label="价格/星级" to="/index/star" is-link></mt-cell>
            <div class="searchButton">
               <mt-button type="danger" size="large">开始搜索</mt-button>
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
    </div>
</template>

<script>
import cityItem from '../../components/cityItem'
export default {
  components: {
    'v-cityItem':cityItem
  },
  data(){
      return {
          active:'book'
      }

  },
  methods:{
    handleCity(){
        debugger
        this.$router.push({ name: 'city' });
    },
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

</style>
