<template>
    <div class='hotel'>
        <mt-header :title="title">
            <router-link :to="link" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <mt-navbar class="select-nav" v-model="selected">
            <mt-tab-item id="1">综合筛选<span class="iconfont icon-character"></span></mt-tab-item>
            <mt-tab-item id="2">位置区域<span class="iconfont icon-character"></span></mt-tab-item>
            <mt-tab-item id="3">价格/星级<span class="iconfont icon-character"></span></mt-tab-item>
            <mt-tab-item id="4">智能排序<span class="iconfont icon-character"></span></mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-popup v-model="popupVisible"   :modal="Tflag" popup-transition="popup-fade" class="popW">
                    <div class="showPop">
                        <div class='tit'><span>品牌</span></div>
                        <div class="show-item" v-for="item in chain" :key="item.id">
                            <div class="item-tit">
                                <span>{{item.title}}</span>
                            </div>
                            <div class="item-info">
                                <span v-for="item in item.name" :key="item.id">{{item.name}}</span>
                            </div>
                        </div>
                        <div class="btns">
                            <mt-button type="primary">清空</mt-button>
                            <mt-button type="danger">确定</mt-button>
                        </div>
                    </div>

                </mt-popup>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-popup v-model="popupVisible1"  :modal="Tflag" popup-transition="popup-fade" class="popW">
                    <div class="showPop">
                        <mt-cell v-for="item in distance"  :key="item.id" :title="item.score+'以内'" />
                        <div>
                            <mt-button type="primary">清空</mt-button>
                            <mt-button type="danger">确定</mt-button>
                        </div>
                    </div>
                </mt-popup>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <!-- <mt-cell v-for="n in 6"  :key="n.id" :title="'选项 ' + n" /> -->
                <mt-popup v-model="popupVisible" :modal="Tflag" popup-transition="popup-fade" class="popW">
                    <div class="showPop">
                        <div><span>价格（每晚均价）</span></div>
                        <mt-range v-model="rangeValue" :min="0" :max="2000" :step="10" :bar-height="5">
                            <div slot="start">¥0</div>
                            <div slot="end">¥2000+</div>
                        </mt-range>
                        <div>
                            <div><span>星级</span></div>
                            <div>
                                <span v-for="item in star" :key="item.id">{{item.name}}</span>
                            </div>
                        </div>
                        <div>
                            <mt-button type="primary">重置</mt-button>
                            <mt-button type="danger">完成</mt-button>
                        </div>
                    </div>
                </mt-popup>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <!-- <mt-cell v-for="n in 6"  :key="n.id" :title="'智能排序 ' + n" /> -->
                <div class="condition">
                    <span v-for="item in sortArr" :key="item">{{item}}</span>
                </div>
                <mt-cell v-for="n in 6"  :key="n.id" :title="'智能排序 ' + n" />
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            popupVisible:true,
            popupVisible1:true,
            rangeValue:0,
            title:"请选择酒店",
            link:"/",
            selected:'4',
            chain:[
                {
                    title:'高端连锁',
                    name:[
                        {
                            name:'全部高端连锁',
                            id:0
                        },
                        {
                            name:'豪生',
                            id:1
                        }
                    ]
                },
                {
                    title:'中端连锁',
                    name:[
                        {
                            name:'全部中端连锁',
                            id:0
                        },
                        {
                            name:'维也纳',
                            id:1
                        },
                        {
                            name:'锦江之星品尚',
                            id:2
                        },
                        {
                            name:'如家商旅',
                            id:3
                        },
                        {
                            name:'锦江都城',
                            id:4
                        },
                        {
                            name:'汉庭优佳',
                            id:5
                        },
                        {
                            name:'汉庭优佳1',
                            id:6
                        },
                        {
                            name:'汉庭优佳2',
                            id:7
                        },
                    ]
                },
                {
                    title:'快捷连锁',
                    name:[
                        {
                            name:'汉庭优佳3',
                            id:0
                        },
                        {
                            name:'汉庭优佳4',
                            id:1
                        },
                        {
                            name:'汉庭优佳5',
                            id:2
                        },
                    ]
                },

            ],
            distance:[
                {
                    score:'500米',
                    id:0
                },
                {
                    score:'1公里',
                    id:1
                },
                {
                    score:'2公里',
                    id:2
                },
                {
                    score:'3公里',
                    id:3
                },
                {
                    score:'4公里',
                    id:4
                },
                {
                    score:'8公里',
                    id:5
                },
                {
                    score:'10公里',
                    id:6
                }
            ],
            Tflag:false,
             star:[
              {
                  id:0,
                  name:"不限"
              },
              {
                  id:1,
                  name:"二星/经济"
              },
              {
                  id:2,
                  name:"三星/舒适"
              },
              {
                  id:3,
                  name:"四星/高档"
              },
              {
                  id:4,
                  name:"五星/豪华"
              },
          ],
            sortArr:['4.5分及以上','优惠促销','双床','大床','含早餐','信用住','免费取消','闪电确认','终点房','已收藏']
        }
    },
    methods:{

    }

}
</script>

<style>
  .hotel .mint-tab-item-label{
    font-size: 13px;
  }
</style>
<style scoped lang='scss'>
.condition{
    width: 650px;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 30px;
    line-height: 30px;

}
.popW{
    width: 100%;
    position: fixed;
    top:200px;
}
.showPop{
    width: 100%;
    height: 200px;
  .tit{
    font-size: 18px;
    color: #333;
    font-weight: bold;
    padding: 0 10px;
  }
  .show-item{
    border-top: 1px solid #eee;
    margin-left: 10px;
    .item-tit{
      font-size: 14px;
      color: #838383;
      padding: 10px 0;
    }
    .item-info{
      padding-bottom: 10px;
      span{
        display: inline-block;
        width: 31.5%;
        background: #fbfbfb;
        color: #333;
        text-align: center;
        padding: 10px 0;
        border-radius: 5px;
        margin:0 5px 10px 0;

      }
    }
    .btns{
      padding: 0 10px;
    }
  }
}
  .select-nav{
    span{
      margin-left: 5px;
    }
  }
</style>
