<template>
    <div class="daytime">
      <mt-popup v-model="dayFlag" position="right" class="daytime">
        <div class="head">
          <mt-header title="选择日期">
              <mt-button icon="back"  @click.native="goBack" slot="left"></mt-button>
          </mt-header>
        </div>
        <calendar :config="config"></calendar>
      </mt-popup>
    </div>
</template>

<script>
import calendar from '../../components/calendar.vue';
export default {

  components: {
      calendar: calendar
  },
  props:{
      dayFlag:{
          type:Boolean,
          default:false,
      },
  },
  data(){
    let _this = this
      return{
        config: {
          mode: 'future',
          startDate: this.handleDateTime.getDateTime().substr(0, 10),
          endDate:this.handleDateTime.getDateTime('',90).substr(0, 10),
          disabledData: [{startDate:this.handleDateTime.getDateTime('',90).substr(0, 10), endDate: '2019-12-31'}],
          initData: [
            {date: '2019-04-30', status: 'disabled', type: 'work', info: '100%'},
            {date: '2019-05-01', flag: 'holiday', type: 'rest', note: '五一'},
            {date: '2019-05-02', flag: 'holiday', type: 'rest'},
            {date: '2019-06-01', flag: 'holiday', type: 'rest',note:'六一'}
          ],
          onSelected(selectedData) {  
              _this.$emit('switchDay',{selectedData})
          }
        }
      }
  },
  mounted(){
    // this.initTime()
  },
  methods:{
    initTime(){

    },
    goBack(){
      this.$emit('switchDay')
    }
  }
}
</script>

<style scoped>
.daytime{
  width: 3.75rem;
  height: 100%;
}
</style>
