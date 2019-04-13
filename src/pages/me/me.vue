<template>
  <div class="me">
    <div class="head">
      <mt-header title="个人中心">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="info-container">
      <div class="header-img">
        <p><img src="../../assets/img/BJ.jpg"></p>
        <mt-button v-if="isShowEdit" @click="actionSheet" class="change-header" size="small" type="default">更换头像</mt-button>
      </div>
      <div class="info">
        <p><span class="iconfont icon-character"></span>：{{phone}}</p>
        <p v-if="!isShowEdit"><span class="iconfont icon-xingxing"></span>：{{name}}</p>
      </div>
      <div class="edit-btn" @click="editBtn"><span class="iconfont icon-wenti1"></span></div>
    </div>
    <div v-if="!isShowEdit" class="btns">
      <div class="item" @click="goOrder">
        <p class="item-left"><span class="iconfont icon-quxiaodingdanxiao
"></span>我的订单</p>
        <p class="item-right"><span class="iconfont icon-youjiantou"></span></p>
      </div>
      <div class="item">
        <p class="item-left"><span class="iconfont icon-tongxunlu"></span>我的二维码</p>
        <p class="item-right"><span class="iconfont icon-youjiantou"></span></p>
      </div>
      <div class="item">
        <p class="item-left"><span class="iconfont icon-character"></span>联系客服</p>
        <p class="item-right"><span class="iconfont icon-youjiantou"></span></p>
      </div>
      <div class="item">
        <p class="item-left"><span class="iconfont icon-wenti"></span>系统通知</p>
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
          console.log("打开照相机")
          this.isShowEdit=false
        },
        getLibrary: function(){
          console.log("打开相册")
          this.isShowEdit=false
        },
        // 隐藏编辑层
        hideChangeEdit(val){
          console.log(val,'valvaval')
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
      padding: 20px 15px;
      position: relative;
      display: flex;
      border-bottom: 2px solid #ccc;
      .header-img{
        margin-right: 15px;
        display: flex;
        flex-direction: column;
        p{
          width:80px ;
          height:80px ;
          border-radius: 50%;
          overflow: hidden;
          img{
            height: 100%;
          }
        }
        .change-header{
          margin: 5px auto 0;
          width: 80%;
          height: 25px;
          font-size: 12px;
          line-height: 12px;
          background: orange;
          color: #fff;
          border-radius: 10px;
          padding: 5px;
        }
      }
      .info{
        display: flex;
        flex-direction: column;
        padding-top: 14px;
        p{
          color: #333;
          margin: 0;
          padding-bottom: 12px;
          span{
            font-size: 20px;
            margin-right: 10px;
          }
        }
      }
      .edit-btn{
        position: absolute;
        right: 15px;
        top: 15px;
        span{
          font-size: 30px;
        }
      }
    }
    .btns{
      .item{
        border-bottom: 1px solid #ccc;
        line-height: 45px;
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
        .item-left{
          color: #333;
          font-size: 14px;
          span{
            margin-right: 10px;
            font-size: 18px;
            color: #ff0000;
          }
        }
        .item-right{
         >span{
           font-size: 18px;
         }
          .mint-badge{
            &.is-error{
              font-size: 12px;
              line-height: 14px;
            }
          }
        }
      }
    }
  }
</style>
