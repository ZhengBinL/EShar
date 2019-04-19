<template>
    <div class="city">
        <mt-popup v-model="cityFlag" position="right" class="city">
            <div class="seleCity">
                <mt-header title="请选择城市">
                    <mt-button icon="back" @click.native="goBack" slot="left"></mt-button>
                </mt-header>
            </div>
            <div class="search">
                <mt-search v-model="searchValue" @keyup.enter.native="handleSearch" cancel-text="取消" placeholder="中文/拼音/首字母" autofocus :result="filterResult">
                </mt-search>
            </div>
            <div class="searchList">
               <mt-index-list>
                    <mt-index-section v-for="item in title" :key="item" :index="item">
                      <div v-if="item=='当前'">
                        <div class="current">
                          <p><span class="iconfont iconlocation"></span> {{current}}</p>
                          <p class="gray">{{currPostion}}</p>
                        </div>
                      </div>
                      <div v-else-if="item=='热门'">
                        <div class="hot"><span v-for="(item,index) in hotInfo" :key="index">{{item}}</span></div>
                      </div>
                      <div v-else>
                        <mt-cell title="Aaron1" @click.native="chooseCity('Aaron1')"></mt-cell>
                        <mt-cell title="Aaron2"></mt-cell>
                        <mt-cell title="Aaron3"></mt-cell>
                      </div>
                    </mt-index-section>
                </mt-index-list>
            </div>
        </mt-popup>
    </div>
</template>

<script>
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
            title:["当前","热门","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
            city:[
                {
                    id: 1,
                    name: '',
                    keyValye:  0,
                }
            ],
            searchValue:'',
            citySearch:[],
          current:'北京',
          currPostion:'北京站',
          hotInfo:["北京","上海","广州","深圳","成都","杭州","台北","武汉","香港","澳门","西安","重庆","青岛","南京","厦门","大连","天津","三亚"]
        }
    },
    computed:{
        filterResult(){
            return this.citySearch.filter(value => new RegExp(this.value, 'i').test(value))
        }
    },
    mounted(){
        //首次渲染
        // this.hasAllCity()
    },
    methods:{
        //搜索
        handleSearch(){
            // console.log("搜索",this.searchValue)
        },
        hasAllCity(){

        },
        chooseCity(title){
            // console.log(title,'a')
            MessageBox.confirm('确定选择'+title+'?').then(action => {
                this.$emit('switchCity',{
                    title
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


