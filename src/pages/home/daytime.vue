<template>
    <div class="daytime">
        <div class="head">
            <mt-header title="请选择日期">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
      <div>
        <calendar :range="calendar2.range" :lunar="calendar2.lunar" :value="calendar2.value" :begin="calendar2.begin" :end="calendar2.end" @select="calendar2.select"></calendar>
      </div>
    </div>
</template>

<script>
  import calendar from '../../components/calendar/calendar'
export default {
    components:{
      calendar
    },
  data(){
      return{
        calendar2:{
          range:true,
          value:[[2017,12,1],[2019,2,16]], //默认日期
          lunar:true, //显示农历
          begin:[2017,2,16], //可选开始日期
          end:[2019,2,16], //可选结束日期
          select(begin,end){
            // console.log(begin.toString(),end.toString());
          }
        }
      }
  }
}
</script>

<style scoped>
.search{
    height: 50px;
}
</style>
