<template>
  <div class="me">
    <div class="head">
      <mt-header title="个人中心">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="info-container">
      <div class="header-img">
        <p><img src="../../assets/img/BJ.jpg"></p>
        <mt-button v-if="isShowEdit" @click="actionSheet" class="change-header" size="small" type="default">更换头像</mt-button>
      </div>
      <div class="info">
        <p><span class="iconfont iconrenshu"></span>：{{phone}}</p>
        <p v-if="!isShowEdit"><span class="iconfont icontubiao_wuxing-"></span>：{{name}}</p>
      </div>
      <div class="edit-btn" @click="editBtn"><span class="iconfont iconbianji"></span></div>
    </div>
    <div v-if="!isShowEdit" class="btns">
      <div class="item" @click="goOrder">
        <p class="item-left"><span class="iconfont icondingdan
"></span>我的订单</p>
        <p class="item-right"><span class="iconfont iconnext"></span></p>
      </div>
      <div class="item">
        <p class="item-left"><span class="iconfont iconico"></span>我的二维码</p>
        <p class="item-right"><span class="iconfont iconnext"></span></p>
      </div>
      <div class="item">
        <p class="item-left"><span class="iconfont iconhuaban-1"></span>联系客服</p>
        <p class="item-right"><span class="iconfont iconnext"></span></p>
      </div>
      <div class="item">
        <p class="item-left"><span class="iconfont icontongzhi"></span>系统通知</p>
        <p class="item-right"><mt-badge type="error" size="small">{{noteNum}}</mt-badge></p>
      </div>
    </div>
    <div v-if="isShowEdit">
      <v-edit :basicInfo="basicInfo" @hideEidt="hideChangeEdit"></v-edit>
    </div>
    <!--点击更改头像从下面出来的弹出-->
    <mt-actionsheet
      v-model="isShowChangeHeader"
      :actions="changeHeaderSetData">
    </mt-actionsheet>
  </div>
</template>

<script>
import editContainer from './meEditContainer'
    export default {
        name: "me",
      components:{
          "v-edit":editContainer
      },
      data(){
          return{
            headerImg:'',
            phone:'13802341342',
            name:'张军',
            noteNum:10,
            isShowEdit:false,//是否展示编辑
            basicInfo:{
              number:12352435,
              mobile:13212345609,
              province:'北京市',
              city:'北京市',
              region:'朝阳区',
              address:'北京市朝阳区工体北路北京市海龙石油大厦'
            },
            changeHeaderSetData: [{
              name: '拍照',
              method : this.getCamera	// 调用methods中的函数
            }, {
              name: '从相册中选择',
              method : this.getLibrary	// 调用methods中的函数
            }],//点击更改头像出现弹出信息设置
            isShowChangeHeader: false,//是否显示更换头像弹出层
          }
      },
      created(){
        
      },
      mounted(){
        // this.$router.push({name:"login"})
      },
      methods:{
           // 编辑基本信息
        editBtn(){
          this.isShowEdit=true
        },
        // 更换头像
        actionSheet: function(){
          // 打开action sheet
          this.isShowChangeHeader = true;
        },
        getCamera: function(){
          // console.log("打开照相机")
          this.isShowEdit=false
        },
        getLibrary: function(){
          // console.log("打开相册")
          this.isShowEdit=false
        },
        // 隐藏编辑层
        hideChangeEdit(val){
          this.isShowEdit=val
        },
        goOrder(){
          this.$router.push({
            path:'/me/order',
            name:'order'
          })
        }
      }
    }
</script>

<style scoped lang="scss">
  .me{
    .head{
      background-color: #ffffff;
    }
    .info-container{
      padding: 0.2rem 0.15rem;
      position: relative;
      display: flex;
      border-bottom: 0.02rem solid #efefef;
      .header-img{
        margin-right: 0.15rem;
        display: flex;
        flex-direction: column;
        p{
          width:0.8rem ;
          height:0.8rem;
          border-radius: 50%;
          overflow: hidden;
          img{
            height: 100%;
          }
        }
        .change-header{
          margin: 0.05rem auto 0;
          width: 80%;
          height: 0.25rem;
          font-size: 0.12rem;
          line-height: 0.12rem;
          background: orange;
          color: #fff;
          border-radius: 0.1rem;
          padding:0.05rem;
        }
      }
      .info{
        display: flex;
        flex-direction: column;
        padding-top: 0.14rem;
        p{
          color: #333;
          margin: 0;
          padding-bottom: 0.12rem;
          span{
            font-size: 0.2rem;
            margin-right: 0.1rem;
          }
        }
      }
      .edit-btn{
        position: absolute;
        right: 0.15rem;
        top: 0.15rem;
        color: #eb5d2b;
        span{
          font-size: 0.2rem;
        }
      }
    }
    .btns{
      .item{
        border-bottom: 1px solid #efefef;
        line-height: 0.45rem;
        padding: 0 0.15rem;
        display: flex;
        justify-content: space-between;
        .item-left{
          color: #333;
          font-size: 0.14rem;
          span{
            margin-right: 0.1rem;
            font-size: 0.18rem;
            color: #eb5d2b;
          }
        }
        .item-right{
         >span{
           font-size:  0.18rem;
         }
          .mint-badge{
            &.is-error{
              font-size:  0.12rem;;
              line-height:  0.14rem;
            }
          }
        }
      }
    }
  }
</style>
