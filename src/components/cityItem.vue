<template>
    <div class="Hcontent">
        <div class="Hleft">
            <img src="../assets/img/BJ.jpg">
        </div>
        <div class="Hright">
            <div class="HTop">
                <div>
                    <span class="title">{{cityItem.hotelName}}</span><span class="mintitle">{{cityItem.hotelType}}</span>
                </div>
                <div>
                    <span class="title score">{{cityItem.hotelScore}}分</span><span class="medtitle">{{cityItem.hotelEvaluate}}</span><span class="mintitle">{{cityItem.reviewScore}}条点评</span>
                </div>
            </div>
            <div class="HBottom">
                <div class="red ">提前{{cityItem.bookTime}}天预订</div>
                <div class="HBBottom">
                    <span class="red">{{bookFlage==1?'法定节假日不可预订':'法定节假日可预订'}}</span>
                    <div class="price">
                        <span class="oldprice">¥{{cityItem.oldPrice}}起</span>
                        <div class="nowpice">
                            <span class="newprice red"><span class="fontSize">¥</span>{{cityItem.newPrice}}起</span>
                            <div>
                                <span class="reduce red">立减¥{{cityItem.oldPrice/1 - cityItem.newPrice/1}}
                                </span>  
                                <i class="iconfont icon-wenti"></i>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        cityItem:{
            type:Object,
            default:{
                id:1,
                imgLink:'../assets/img/BJ.jpg',
                hotelName:'大同浩海国际酒店',
                hotelType:'高档型',
                hotelScore:'4.7',
                hotelEvaluate:'非常好',
                reviewScore:'486',
                bookTime:'2',
                bookFlage:'1',
                oldPrice:126,
                newPrice:124,
            }
        }
    },
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style scoped>
.Hcontent{
   display: flex; 
   padding: 5px;
}
.Hleft{
    flex: 1;
}
.Hleft img{
    width: 110px;
    height: 110px;
    border-radius: 8px;
}
.Hright{
    flex: 3;
    display: flex;
    padding-left: 10px;
    flex-direction: column;
}
.title{
    font-weight: 900;
    font-size: 18px;
}
.score{
    border-bottom:2px solid yellow; 
}
.medtitle{
    font-size: 16px;
    padding-left:5px;
}
.mintitle{
    font-size: 14px;
    color:#d3d3d3;
    padding-left:5px;
}
.HBottom{
    margin-top:10px;
    display: flex;
    flex-direction: column;
}
.HBBottom{
    display: flex;
    padding-top:5px;
    text-align: center;
    justify-content: space-between
}
.HBBottom .price{
    display: flex;
}
.HBBottom .price .nowpice{
    display: flex;
    flex-direction: column;
    padding-left: 5px;
}
.fontSize{
    font-size: 12px;
}
.reduce{
    font-size: 12px;
    padding:2px 4px;
    background-color: rgba(195,176,145,0.3)
}
.oldprice{
    text-decoration: line-through;
    color:#d3d3d3;
    font-size: 12px;
}
.newprice{
font-size: 16px;
}
</style>
