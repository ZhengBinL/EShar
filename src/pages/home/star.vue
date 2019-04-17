<template>
    <div>
        <mt-popup v-model="starFlag" popup-transition="popup-fade" position="bottom" class="popW" closeOnClickModal="modelFlag">
            <div class="showPop">
                <div class="tit"><span>价格（每晚均价）</span></div>
                <mt-range class="rang-cont" v-model="rangeValue" :min="0" :max="2000" :step="10" :bar-height="5">
                    <div class="rang-num min-num" slot="start">¥{{rangeValue==0?'0':rangeValue}}</div>
                    <div class="rang-num max-num" slot="end">¥2000+</div>
                </mt-range>
                
                <div>
                    <div class="tit"><span>星级</span></div>
                    <div class="level">
                        <span :class="item.id==actionFlag?'active':''" v-for="item in star" :key="item.id" @click="checkAction(item)">{{item.name}}</span>
                    </div>
                </div>
                <div class="btns">
                    <mt-button class="btn reset"  @click.native="handleReset">重置</mt-button>
                    <mt-button class="btn over" @click.native="handleOver">完成</mt-button>
                </div>
            </div>
        </mt-popup>
    </div>
</template>

<script>
export default {
    props:{
        starFlag:{
            type:Boolean,
            default:false
        },
    },
    data(){
        return {
            rangeValue:0,
            actionFlag:0,
            actionName:'',
            modelFlag:false,
            star: [
                {
                id: 0,
                name: "不限"
                },
                {
                id: 1,
                name: "二星/经济"
                },
                {
                id: 2,
                name: "三星/舒适"
                },
                {
                id: 3,
                name: "四星/高档"
                },
                {
                id: 4,
                name: "五星/豪华"
                }
            ]
        }
    },
    methods:{
        //切换星级状态
        checkAction(item){
            this.actionFlag = item.id;
            this.actionName = item.name
        },
        //重置
        handleReset(){
            this.actionFlag = 0;
            this.rangeValue = 0;
        },
        //完成
        handleOver(){
            this.$emit('switchStar',{
                price:this.rangeValue,
                name:this.actionName||'星级不限'
            })
        }
    }

}
</script>

<style scoped lang="scss">
  .popW {
    width: 100%;
    .showPop {
        width: 100%;
        padding: 0.15rem 0.09rem;
        box-sizing: border-box;
        .tit {
            font-size: 0.14rem;
            color: #999;
            margin-bottom: 0.15rem;
            margin-left: 0.03rem;
        }
        .rang-cont {
            margin: 0.3rem auto 0;
            width: 90%;
            .rang-num {
                position: absolute;
                top: -0.3rem;
                &.min-num {
                    left: -0.1rem;
                }
                &.max-num {
                 right: -0.1rem;
                }
            }

        }
        .level {
            span {
                display: inline-block;
                width: 23%;
                margin: 0.03rem;
                line-height: 0.3rem;
                justify-content: center;
                align-items: center;
                background-color: #f6f6f6;
                border-radius: 0.05rem;
                box-sizing: border-box;
                color: #333;
                font-size: 0.13rem;
                padding: 0.05rem 0;
                text-align: center;
                overflow: hidden;
                &.active {
                    background-color: #fff7d4;
                    color: #fca500;
                }
            }
        }
        .btns {
            display: flex;
            justify-content: space-between;
            .btn {
                width: 50%;
                background: #fff;
                color: #333;
                font-size: 0.14rem;
                &.reset {
                    color: #ffc900;
                }
                &.over {
                    background: #ffc900;
                }
            }
        }
    }
  }
</style>
