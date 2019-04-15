<template>
    <div class="daytime">
      <mt-popup v-model="dayFlag" position="right" class="daytime">
        <div class="head">
          <mt-header title="选择日期">
              <mt-button icon="back"  @click.native="goBack" slot="left"></mt-button>
          </mt-header>
        </div>
      </mt-popup>
    </div>
</template>

<script>
export default {
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
  width: 375px;
  height: 100%;
}
</style>
