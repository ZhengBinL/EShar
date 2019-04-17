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
                        <mt-cell title="Aaron1" @click.native="chooseCity('Aaron1')"></mt-cell>
                        <mt-cell title="Aaron2"></mt-cell>
                        <mt-cell title="Aaron3"></mt-cell>
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
            citySearch:[]
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

<style scoped lang="scss">
.city{
    width: 375px;
    height: 100%;
    .search{
        height: 50px;
        .searchList{
            height: 500px;
        }
    }
}

</style>


