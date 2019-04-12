<template>
    <div class="city">
        <div class="head">
            <mt-header title="请选择城市">
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
            <mt-index-list>
                <mt-index-section v-for="item in title" :key="item.id" :index="item">
                    <mt-cell title="Aaron"></mt-cell>
                    <mt-cell title="Aaron"></mt-cell>
                    <mt-cell title="Aaron"></mt-cell>
                </mt-index-section>
            </mt-index-list>
        </div>
    </div>
</template>

<script>
export default {
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
            value:'',
            citySearch:[]
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


