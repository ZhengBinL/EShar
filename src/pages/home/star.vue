<template>
    <div>
        <mt-popup v-model="starFlag" popup-transition="popup-fade" position="bottom" class="popW">
            <div class="showPop">
                <div class="tit"><span>价格（每晚均价）</span></div>
                <mt-range class="rang-cont" v-model="rangeValue" :min="0" :max="2000" :step="10" :bar-height="5">
                    <div class="rang-num min-num" slot="start">¥0</div>
                    <div class="rang-num max-num" slot="end">¥2000+</div>
                </mt-range>
                <div>
                    <div class="tit"><span>星级</span></div>
                    <div class="level">
                        <span :class="index==0?'active':''" v-for="(item,index) in star" :key="item.id">{{item.name}}</span>
                    </div>
                </div>
                <div class="btns">
                    <mt-button class="btn reset" type="primary">重置</mt-button>
                    <mt-button class="btn over" type="danger">完成</mt-button>
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
        rangeValue:{
            type:Number,
            default:0
        }
    },
    data(){
        return {
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
    }

}
</script>

<style scoped lang="scss">
  .popW {
    width: 100%;
    .showPop {
        width: 100%;
        padding: 15px 9px;
        box-sizing: border-box;
        .tit {
            font-size: 14px;
            color: #999;
            margin-bottom: 15px;
            margin-left: 3px;
        }
        .rang-cont {
            margin: 30px auto 0;
            width: 90%;
            .rang-num {
                position: absolute;
                top: -30px;
                &.min-num {
                    left: -10px;
                }
                &.max-num {
                 right: -10px;
                }
            }

        }
        .level {
            span {
                display: inline-block;
                width: 23%;
                margin: 3px;
                line-height: 30px;
                justify-content: center;
                align-items: center;
                background-color: #f6f6f6;
                border-radius: 5px;
                box-sizing: border-box;
                color: #333;
                font-size: 13px;
                padding: 5px 0;
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
                font-size: 14px;
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
