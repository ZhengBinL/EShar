<template>
    <div class="hoteInfo">
        <mt-header class="header" :title="title">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="topInfo">
            <div class="top"><i class="iconfont icon-rili"/><span>03月16日今天-03月17日住1晚</span></div>
            <div class="bot"><i class="iconfont icon-rili"/><span class="red">预定后可随时免费取消，请放心预定！</span></div>
        </div>
        <div class="info">
            <div><h4>入住信息</h4></div>
            <div class="flexSpan">
                <div class="flex1">房间数</div>
                <div class="flex3">

                </div>
            </div>
            <div class="flexSpan">
                <div class="flex1">入住人<i class="iconfont icon-rili pl5"/></div>
                <div class="flex3">
                    <input type="text" placeholder="填写实际入住人姓名">
                    <i class="iconfont icon-rili rlr"/>
                </div>
            </div>
            <div class="flexSpan">
                <div class="flex1">手机号</div>
                <div class="flex3">
                    <input type="text" placeholder="填写实际入住人手机号">
                    <i class="iconfont icon-rili"/>
                </div>
            </div>
            <div class="flexSpan">
                <div class="flex1 heig">到店时间</div>
                <div class="flex3 heig p10">
                    <div class="h03">14:00点后办理入住</div>
                    <div class="h03">免费留房，您可在14:00后随时到店办理入住</div>
                </div>
            </div>
        </div>
        <div class="detail">
            <div>
                <div>
                    <span>￥124.99</span>
                    <span>已优惠￥1.50</span>
                </div>
                <div>
                    <span>明细<i class="iconfont icon-shangjiantou"></i></span>
                    <button>立即支付</button>
                </div>
            </div>
            <div><span>费用明细</span></div>
            <div>
                <span>03月16日 房费 不含早餐</span>
                <span>￥126.49x1间</span>
            </div>
            <div>
                <span>省1.50元:卖家立减</span>
                <span>-￥1.50</span>
            </div>
            <div>
                <span>总计</span>
                <span>￥124.99</span>
            </div>
        </div>
        <mt-popup
            v-model="popupVisible"
            position="bottom">
            <div>
                <i class="iconfont icon-cha"></i>
                <span>确认付款</span>
                <i class="iconfont icon-bangzhu"></i>
            </div>
            <div><span>￥124.99</span></div>
            <div>
                <span>微信账号</span>
                <span></span>
            </div>
            <div>
                <span>支付方式</span>
                <span>招商银行信用卡（3867）<i class="iconfont icon-youjiantou"></i></span>
            </div>
            <button>立即付款</button>
        </mt-popup>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:'酒店'
        }
    },
    data(){
        return{
            popupVisible:false,
            hotelId:''
        }
    },
    mounted(){
        this.hotelId = this.$route.query.hotelId
        console.log(this.hotelId,'xxx')
        // this.initDetail()
    },
    methods:{
        //初始化
        initDetail(){

        }
    }

}
</script>

<style scoped lang="scss">
.hoteInfo{
    .topInfo{
        padding:0.1rem;
        .bot{
            margin-top:0.05rem; 
            span{
                padding-left: 0.05rem
            }
        }
        .top{
            margin-top:0.05rem;
            span{
                padding-left: 0.05rem
            }
        }
    }
    .info{
        padding:0.1rem;
        .flexSpan{
            display: flex;
            .flex1{
                flex: 1;
                height: 0.4rem;
                line-height: 0.4rem;
                .pl5{
                    padding-left:0.05rem
                }
            }
            .flex3{
                flex: 2;
                height: 0.4rem;
                line-height: 0.4rem;
                display: flex;
                justify-content: space-between;
            }
            .heig{
                height: 0.6rem;
                line-height: 0.6rem;
                flex-direction: column;
                .h03{
                    height: 0.1rem;
                    line-height: 0.1rem;
                    font-size: 12px
                }
            }
            .p10{
                padding:0.05rem 0;
            }
        }
    }
}

</style>

