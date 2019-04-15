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
            <i class="iconfont icon-shijian pr5"></i><span>搜索历史</span>
          </div>
          <div @click="clearValue">
            <i class="iconfont icon-shanchu pr5 clear-pr5"></i><span>清空</span>
          </div>
        </div>
        <div class="content">
          <span v-for="item in history" :key="item.id" class="spanBorder" @click="chooseHotel(item)">{{item.name}}</span>
        </div>
      </div>
      <div class="show">
        <div class="title">
          <div>
            <i class="iconfont icon-chengshi pr5"></i><span>热门品牌</span>
          </div>
          <div @click="checkUp">
            <i class="iconfont" :class="checkShow?'icon-xiajiantou':'icon-shangjiantou'"></i>
          </div>
        </div>
        <div class="content" v-show="checkShow">
          <span v-for="item in history" :key="item.id" class="spanBorder" @click="chooseHotel(item)">{{item.name}}</span>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
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
        checkShow:false,
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
        ]
      }
    },
    mounted(){
      // this.checkShow = false
    },
    methods:{
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
          MessageBox.confirm('确定选择'+item.name+'?').then(action => {
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
  width: 375px;
  height: 100%;
  .search{
      height: 50px;
  }
  .show{
      padding:10px;
      margin:10px;
      background-color: #ffffff;
      .title{
        display: flex;
        justify-content: space-between;
        padding: 0 10px 10px;
        border-bottom: 1px solid #d3d3d3;
        height: 30px;
        line-height: 30px;
        .pr5{
          margin-right: 6px;
          color: orange;
          padding-right: 5px;
        }
        .clear-pr5 {
          color: #333;
        }
      }
      .content{
        padding: 10px 0;
        .spanBorder{
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: top;
          border: 1px solid #d3d3d3;
          margin: 0 5px 10px 0;
          padding: 0 2px;
          width: 23.5%;
          box-sizing: border-box;
          height: 45px;
          text-align: center;
          border-radius: 3px;
          }
      }
  }
}
.show+.show{
 padding-top:10px;
}
</style>
