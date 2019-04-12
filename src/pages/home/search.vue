<template>
    <div class="search">
        <div class="head">
            <mt-header title="搜索">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="search">
            <mt-search v-model="value" cancel-text="取消" placeholder="中文/拼音/首字母" autofocus :result="filterResult">
            </mt-search>
        </div>
        <div>
            <div>
                <div>
                    <i class="iconfont icon-shijian"></i><span>搜索历史</span>
                </div>
                <div>
                    <i class="iconfont icon-shanchu"></i><span>清空</span>
                </div>
            </div>
            <div>
                <span>同利大酒店</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            citySearch:[],
            value:''
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
.search{
    height: 50px;
}
</style>
