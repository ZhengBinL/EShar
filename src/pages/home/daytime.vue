<template>
    <div class="daytime">
      <mt-popup v-model="dayFlag" position="right" class="daytime">
        <div class="head">
          <mt-header title="选择日期">
              <mt-button icon="back"  @click.native="goBack" slot="left"></mt-button>
          </mt-header>
        </div>
        <calendar></calendar>
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
      return{

      }
  },
  methods:{
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
