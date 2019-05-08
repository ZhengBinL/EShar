<template>
    <div class="city">
        <mt-popup v-model="cityFlag" position="right" class="city">
            <div class="seleCity">
                <mt-header title="请选择城市">
                    <mt-button icon="back" @click.native="goBack" slot="left"></mt-button>
                </mt-header>
            </div>
            <div class="search">
                <mt-search v-model="searchValue" @keyup.native="handleSearch" cancel-text="取消" placeholder="中文/拼音/首字母" autofocus :result="filterResult">
                      <mt-cell v-for="item in resultSearch" :title="item.name" @click.native="chooseCity(item)"></mt-cell>
                </mt-search>
            </div>
            <div class="searchList">
               <mt-index-list>
                    <mt-index-section v-for="item in allCityArray" :key="item.id" :index="item.name">
                      <div v-if="item.name=='当前'">
                        <div class="current">
                          <p><span class="iconfont iconlocation"></span> {{item.cities[0].current}}</p>
                          <p class="gray">{{item.cities[0].currPostion}}</p>
                        </div>
                      </div>
                      <div v-else-if="item.name=='热门'">
                        <div class="hot"><span v-for="(item,index) in item.cities" :key="index" @click="chooseCity(item)">{{item.name}}</span></div>
                      </div>
                      <div v-else>
                        <mt-cell :title="item.name" v-for="(item,index) in item.cities" :key="index" @click.native="chooseCity(item)"></mt-cell>
                      </div>
                    </mt-index-section>
                </mt-index-list>
            </div>
        </mt-popup>
    </div>
</template>

<script>
import {cityArray} from '@/axios/common/city.js'
import { MessageBox } from 'mint-ui';
export default {
    props:{
        cityFlag:{
            type:Boolean,
            default:false,
        },
    },
    data(){
        return{
            city:[
                {
                    id: 1,
                    name: '',
                    keyValye:  0,
                }
            ],
            searchValue:'',
            citySearch:[],
            allCityArray:[],
            resultSearch:[]
        }
    },
    computed:{
        filterResult(){
            return this.citySearch.filter(value => new RegExp(this.value, 'i').test(value))
        }
    },
    mounted(){
        //首次渲染
        this.allCityArray = cityArray
    },
    methods:{
        //搜索
        handleSearch(){
            this.resultSearch = []
           for(var i =2;i<this.allCityArray.length;i++){
               for(var j=0;j<this.allCityArray[i].cities.length;j++){
                   if(this.allCityArray[i].cities[j].tags.indexOf(this.searchValue.toUpperCase()) !== -1){
                       this.resultSearch.push(this.allCityArray[i].cities[j])
                   }
               }
           }
           this.resultSearch = this.resultSearch.slice(0,10)
        },
        chooseCity(title){
            MessageBox.confirm('确定选择'+title.name+'?').then(action => {
                this.$emit('switchCity',{
                    title:title.name
                })
            },()=>{
                console.log(2)
            })
        },
        goBack(){
            this.$emit('switchCity')
        }
    }
}
</script>
<style>
 .city .mint-cell .mint-cell-wrapper{
    border-top: 1px solid #efefef;
   font-size: 0.14rem;
   color: #333;
  }
 .city .mint-cell:first-child .mint-cell-wrapper{
   border-top: 0;
 }
 .city  .mint-indexsection-index{
   padding: 5px 10px;
  font-size: 0.12rem;
   color: rgba(32,37,37,.4);
   border-bottom: 1px solid #e1e1e1;
 }
 .city  .mint-indexlist-nav {
 background: transparent;
   max-height: calc(100% - 1rem);
    border-left: 0;
   font-size: 0.12rem;
   color: rgba(32,35,37,.6)
 }
.city .mint-searchbar{
    z-index: 9
}
.city .mint-search-list{
    top:45px;
    z-index: 5
}
</style>
<style scoped lang="scss">
.city{
    width: 3.75rem;
    height: 100%;
    .search{
        height: 0.5rem;
        .searchList{
            height: 5rem;
        }
    }
  .current{
    padding: 0.1rem;
    display: flex;
    flex-direction: column;
    line-height: 0.25rem;
    p{
      font-size: 0.14rem;
      color: #333;
      span{
        color: #666;
      }
      &.gray{
        padding-left: 0.2rem;
        color: #a9acb1;
      }
    }
  }
  .hot{
    padding: 0.1rem;
    span{
      display: inline-block;
      margin: 0 0.15rem 0.1rem 0;
      padding: 0.05rem 0.21rem;
      border: 1px solid #efefef;
      border-radius: 0.03rem;
      color: #333;
      font-size: 0.13rem;

    }
  }
}

</style>


