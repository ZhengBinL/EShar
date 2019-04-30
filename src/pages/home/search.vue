<template>
  <div class="search-container">
    <mt-popup v-model="searchFlag" position="right" class="search-container">
      <div class="head">
        <mt-header title="搜索">
          <!-- <div @click="goBack" slot="left"> -->
            <mt-button icon="back" @click="goBack" slot="left"></mt-button>
          <!-- </div> -->
        </mt-header>
      </div>
      <div class="search">
        <mt-search v-model="searchValue" @keyup.enter.native="handleSearch" cancel-text="取消" placeholder="中文/拼音/首字母" autofocus :result="filterResult">
        </mt-search>
      </div>
      <div class="show">
        <div class="title">
          <div>
            <i class="iconfont iconshijian pr5"></i><span>搜索历史</span>
          </div>
          <div @click="clearValue">
            <i class="iconfont iconqingkongshanchu pr5 clear-pr5"></i><span>清空</span>
          </div>
        </div>
        <div class="content">
          <span v-for="item in history" :key="item.id" class="spanBorder" @click="chooseHotel(item)">{{item.name}}</span>
        </div>
      </div>
      <div class="show">
        <div class="title">
          <div>
            <i class="iconfont iconhotel pr5"></i><span>热门品牌</span>
          </div>
          <div @click="checkUp">
            <i class="iconfont" :class="checkShow?'iconupward':'icondown'"></i>
          </div>
        </div>
        <div class="content" v-show="checkShow">
          <span v-for="item in hotHotel" :key="item.id" class="spanBorder" @click="chooseHotel(item)">{{item.dictLabel}}</span>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui';
  export default {
    props:{
        searchFlag:{
            type:Boolean,
            default:false,
        },
    },
    data() {
      return {
        checkShow:true,
        citySearch: [],
        searchValue: '',
        history: [
          {
            id: 0,
            name: "同理大酒店"
          },
          {
            id: 1,
            name: "同理大酒店1"
          },
          {
            id: 2,
            name: "同理大酒店2"
          },
          {
            id: 3,
            name: "同理大酒店3"
          },
          {
            id: 4,
            name: "同理大酒店4"
          },
          {
            id: 5,
            name: "同理大酒店5"
          },
          {
            id: 6,
            name: "同理大酒店6"
          },
        ],
        hotHotel:[]
      }
    },
    mounted(){
      // this.checkShow = false
      this.handleBrandList()
    },
    methods:{
      //热门品牌
      handleBrandList(){
        let url = '/api/brandList'
        axios.get(url).then((res)=>{
          if(res.status == 200){
            console.log(res,'dddsss')
            let hotList  = res.data
            this.hotHotel  = hotList.data
          }
        })
      },
      //搜索
        handleSearch(){
            console.log("搜索",this.searchValue)
        },
        //清空
        clearValue(){
          //发送请求，渲染页面
          console.log("请求")
          
        },
        //显示/隐藏
        checkUp(){
          this.checkShow=!this.checkShow
        },
        //选择酒店
        chooseHotel(item){
          console.log(item,'a')
          MessageBox.confirm('确定选择'+item.dictLabel+'?').then(action => {
                this.$emit('switchSearch',{
                  ...item
                })
            },()=>{
                console.log(2)
            })
        },
        goBack(){
            this.$emit('switchSearch')
        }
    },

    computed: {
      filterResult() {
        return this.citySearch.filter(value => new RegExp(this.value, 'i').test(value))
      }
    }
  }
</script>

<style scoped lang="scss">
.search-container {
  background: #eee;
  width: 3.75rem;
  height: 100%;
  .search{
      height: 0.5rem;
  }
  .show{
      padding:0 0.1rem 0.1rem;
      margin:0.1rem;
      background-color: #ffffff;
      .title{
        display: flex;
        justify-content: space-between;
        padding: 0.1rem 0.1rem;
        border-bottom: 1px solid #d3d3d3;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.14rem;
        color: #333;
        .pr5{
          margin-right: 0.06rem;
          color: orange;
          padding-right: 0.05rem;
        }
        .clear-pr5 {
          color: #333;
        }
      }
      .content{
        padding: 0.1rem 0;
        .spanBorder{
          overflow: hidden;
          display: inline-flex;
          margin: 0 0.05rem 0.1rem 0;
          padding: 0.07rem 0.05rem;
          width: 23.5%;
          box-sizing: border-box;
          border-radius: 0.1rem;
          font-size: 0.12rem;
          background: #f9f9f9;
          color: #212121;
          }
      }
  }
}
/*.show+.show{*/
 /*padding-top:0.01rem;*/
/*}*/
</style>
