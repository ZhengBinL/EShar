<template>
    <div class="hoteInfo">
        <mt-header class="header" :title="title">
            <router-link :to="link" slot="left">
            <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div>
            <div><i class="iconfont icon-rili"/><span>03月16日今天-03月17日住1晚</span></div>
            <div><i class="iconfont icon-quxiao"/><span>预定后可随时免费取消，请放心预定！</span></div>
        </div>
        <div class="info">
            <div><span>入住信息</span></div>
            <div>
                <div>房间数</div>
                <div>

                </div>
            </div>
            <div>
                <div>入住人<i class="iconfont icon-zhuyi"/></div>
                <div>
                    <input type="text" placeholder="填写实际入住人姓名">
                    <i class="iconfont icon-renwu"/>
                </div>
            </div>
            <div>
                <div>手机号</div>
                <div>
                    <input type="text" placeholder="填写实际入住人手机号">
                    <i class="iconfont icon-通讯录"/>
                </div>
            </div>
            <div>
                <div>到店时间</div>
                <div>
                    <span label="免费留房，您可在14:00后随时到店办理入住">14:00点后办理入住</span>
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
            popupVisible:false
        }
    }

}
</script>

<style>


</style>

