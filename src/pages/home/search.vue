<template>
    <div class="searchIndex">
        <div class="head">
            <mt-header title="搜索">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="allBg">
            <div class="search">
                <mt-search v-model="value" cancel-text="取消" placeholder="中文/拼音/首字母" autofocus :result="filterResult">
                </mt-search>
            </div>
            <div class="show">
                <div class="title">
                    <div>
                        <i class="iconfont icon-shijian pr5 red"></i><span>搜索历史</span>
                    </div>
                    <div>
                        <i class="iconfont icon-shanchu pr5"></i><span>清空</span>
                    </div>
                </div>
                <div class="content">
                    <span v-for="item in history" :key="item.id" class="spanBorder">{{item.name}}</span>
                </div>
            </div>
            <div class="show">
                <div class="title">
                    <div>
                        <i class="iconfont icon-chengshi pr5 red"></i><span>热门品牌</span>
                    </div>
                    <div>
                        <i class="iconfont icon-xiajiantou">--</i>
                    </div>
                </div>
                <div class="content">
                    <span v-for="item in history" :key="item.id" class="spanBorder">{{item.name}}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            citySearch:[],
            value:'',
            history:[
                {
                    id:0,
                    name:"同理大酒店"
                },
                {
                    id:1,
                    name:"同理大酒店1"
                },
                {
                    id:2,
                    name:"同理大酒店2"
                },
                {
                    id:3,
                    name:"同理大酒店3"
                },
                {
                    id:4,
                    name:"同理大酒店4"
                },
                {
                    id:5,
                    name:"同理大酒店5"
                },
                {
                    id:6,
                    name:"同理大酒店6"
                },
            ]
        }
    },
    computed:{
        filterResult(){
            return this.citySearch.filter(value => new RegExp(this.value, 'i').test(value))
        }
    }
}
</script>

<style scoped>
.searchIndex{
    height: 100%;
}
.search{
    height: 50px;
}
.allBg{
    background-color: #d3d3d3;
    height: 100%;
}
.show{
    padding:10px;
    margin:10px;
    background-color: #ffffff;
}
.show+.show{
 padding-top:10px;
}
.show .title{
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;
}
.pr5{
    padding-right: 5px;
}
.content{
    padding-top: 10px;
}
.spanBorder{
    border:1px solid #d3d3d3;
    padding:5px 10px;
    display:inline-block;
    width:18%;
    height: 30px;
    overflow: hidden;
}
</style>
