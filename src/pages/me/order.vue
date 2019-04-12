<template>
    <div class="my-order">
      <div class="head">
        <mt-header title="我的订单">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
      </div>
      <mt-navbar v-model="selected" @click.native.prevent="clickItem">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">代付款</mt-tab-item>
        <mt-tab-item id="3">处理中</mt-tab-item>
        <mt-tab-item id="4">待出行</mt-tab-item>
        <mt-tab-item id="5">待评价</mt-tab-item>
        <mt-tab-item id="6">退款/售后</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="order-item">
            <div class="top">
              <p class="title">贵州遨游胜率九点专营店</p>
              <span>已关闭</span>
              <!--<span>交易成功</span>-->
              <!--<span>退款成功</span>-->
              <!--<span>待入住</span>-->
              <!--<span>待付款</span>-->
            </div>
            <div class="info">
              <div class="info-left">
                <span class="iconfont icon-chengshi
"></span>
                <div class="text">
                  <p class="text-tit">大同浩海国际九点</p>
                  <p class="text-house">标准间B-标准间B（酒店开具发票）[预定实惠]优惠政策</p>
                  <p class="text-time">入住时间 2019-03-16 至 2019-03-17 </p>
               </div>
              </div>
              <div class="info-right">￥124.99</div>
            </div>
            <div class="total">合计：￥124.99</div>
            <div class="order-item-btn">
              <mt-button size="small">删除订单</mt-button>
              <!--<mt-button size="small">退款</mt-button>-->
            </div>
          </div>
          <div class="order-item">
            <div class="top">
              <p class="title">贵州遨游胜率九点专营店</p>
              <span>待出行</span>
            </div>
            <div class="info">
              <div class="info-left">
                <span class="iconfont icon-chengshi
"></span>
                <div class="text">
                  <p class="text-tit">大同浩海国际九点</p>
                  <p class="text-house">标准间B-标准间B（酒店开具发票）[预定实惠]优惠政策</p>
                  <p class="text-time">入住时间 2019-03-16 至 2019-03-17 </p>
                </div>
              </div>
              <div class="info-right">￥124.99</div>
            </div>
            <div class="total">合计：￥124.99</div>
            <div class="order-item-btn">
              <mt-button size="small">删除订单</mt-button>
              <!--<mt-button size="small">退款</mt-button>-->
            </div>
          </div>
          <div class="order-item">
            <div class="top">
              <p class="title">贵州遨游胜率九点专营店</p>
              <span>处理中</span>
            </div>
            <div class="info">
              <div class="info-left">
                <span class="iconfont icon-chengshi
"></span>
                <div class="text">
                  <p class="text-tit">大同浩海国际九点</p>
                  <p class="text-house">标准间B-标准间B（酒店开具发票）[预定实惠]优惠政策</p>
                  <p class="text-time">入住时间 2019-03-16 至 2019-03-17 </p>
                </div>
              </div>
              <div class="info-right">￥124.99</div>
            </div>
            <div class="total">合计：￥124.99</div>
            <div class="order-item-btn">
              <mt-button size="small">删除订单</mt-button>
              <!--<mt-button size="small">退款</mt-button>-->
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="order-item">
            <div class="top">
              <p class="title">贵州遨游胜率九点专营店</p>
              <span>待付款</span>
            </div>
            <div class="info">
              <div class="info-left">
                <span class="iconfont icon-chengshi
"></span>
                <div class="text">
                  <p class="text-tit">大同浩海国际九点</p>
                  <p class="text-house">标准间B-标准间B（酒店开具发票）[预定实惠]优惠政策</p>
                  <p class="text-time">入住时间 2019-03-16 至 2019-03-17 </p>
                </div>
              </div>
              <div class="info-right">￥124.99</div>
            </div>
            <div class="total">合计：￥124.99</div>
            <div class="order-item-btn">
              <mt-button size="small">删除订单</mt-button>
              <!--<mt-button size="small">退款</mt-button>-->
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <div class="order-item">
            <div class="top">
              <p class="title">贵州遨游胜率九点专营店</p>
              <span>处理中</span>
            </div>
            <div class="info">
              <div class="info-left">
                <span class="iconfont icon-chengshi
"></span>
                <div class="text">
                  <p class="text-tit">大同浩海国际九点</p>
                  <p class="text-house">标准间B-标准间B（酒店开具发票）[预定实惠]优惠政策</p>
                  <p class="text-time">入住时间 2019-03-16 至 2019-03-17 </p>
                </div>
              </div>
              <div class="info-right">￥124.99</div>
            </div>
            <div class="total">合计：￥124.99</div>
            <div class="order-item-btn">
              <mt-button size="small">删除订单</mt-button>
              <!--<mt-button size="small">退款</mt-button>-->
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <div class="order-item">
            <div class="top">
              <p class="title">贵州遨游胜率九点专营店</p>
              <span>待出行</span>
            </div>
            <div class="info">
              <div class="info-left">
                <span class="iconfont icon-chengshi
"></span>
                <div class="text">
                  <p class="text-tit">大同浩海国际九点</p>
                  <p class="text-house">标准间B-标准间B（酒店开具发票）[预定实惠]优惠政策</p>
                  <p class="text-time">入住时间 2019-03-16 至 2019-03-17 </p>
                </div>
              </div>
              <div class="info-right">￥124.99</div>
            </div>
            <div class="total">合计：￥124.99</div>
            <div class="order-item-btn">
              <mt-button size="small">删除订单</mt-button>
              <!--<mt-button size="small">退款</mt-button>-->
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <div class="order-item">
            <div class="top">
              <p class="title">贵州遨游胜率九点专营店</p>
              <span>待评价</span>
            </div>
            <div class="info">
              <div class="info-left">
                <span class="iconfont icon-chengshi
"></span>
                <div class="text">
                  <p class="text-tit">大同浩海国际九点</p>
                  <p class="text-house">标准间B-标准间B（酒店开具发票）[预定实惠]优惠政策</p>
                  <p class="text-time">入住时间 2019-03-16 至 2019-03-17 </p>
                </div>
              </div>
              <div class="info-right">￥124.99</div>
            </div>
            <!--<div class="total">合计：￥124.99</div>-->
            <div class="order-item-btn">
              <mt-button size="small">删除订单</mt-button>
              <!--<mt-button size="small">退款</mt-button>-->
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="6">
          <div class="order-item">
            <div class="top">
              <p class="title">贵州遨游胜率九点专营店</p>
              <span>退款/售后</span>
            </div>
            <div class="info">
              <div class="info-left">
                <span class="iconfont icon-chengshi
"></span>
                <div class="text">
                  <p class="text-tit">大同浩海国际九点</p>
                  <p class="text-house">标准间B-标准间B（酒店开具发票）[预定实惠]优惠政策</p>
                  <p class="text-time">入住时间 2019-03-16 至 2019-03-17 </p>
                </div>
              </div>
              <div class="info-right">￥124.99</div>
            </div>
            <div class="total">合计：￥124.99</div>
            <div class="order-item-btn">
              <mt-button size="small">删除订单</mt-button>
              <!--<mt-button size="small">退款</mt-button>-->
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
</template>

<script>
export default {
    name:'order',
  data(){
      return{
        selected:'1'
      }
  },
  methods:{
      // 切换点击事件
    clickItem(){
      console.log(this.selected); // 这个currentTab就是实时更新的当前tab
    }
  }
}
</script>

<style scoped lang="scss">
.my-order{

  .head{
    background-color: #ffffff;
  }
  .order-item{
    margin-top: 10px;
    border-bottom: 2px solid #eee;
    .top{
      padding: 0 10px;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      span{
        color: orange;
        font-size: 12px;
      }
    }
    .info{
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      background: #eee;
      .info-left{
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        span{
          &.iconfont{
            color: orange;
            margin-right: 10px;
            font-size: 18px;
          }
        }
        .text{
          display: flex;
          flex-direction: column;
          color: #828282;
          font-size: 12px;
          line-height: 25px;
          .text-tit{
            color: #333;
            font-size: 14px;
          }
          .text-house{
            max-width: 250px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
        }
      }
      .info-right{
        padding: 10px 0;
        color: #333;
      }
    }
    .total{
      margin: 0 10px;
      line-height: 40px;
      color: #333;
      text-align: right;
      border-bottom: 1px solid #eee;
    }
    .order-item-btn{
      text-align: right;
      margin: 10px;
      .mint-button--default{
        color: #656b79;
        background-color: #fff;
        box-shadow: 0 0 1px #b8bbbf;
        display: inline-block;
        font-size: 12px;
        padding: 0 12px;
        height: 25px;
      }

    }
  }
}
</style>
