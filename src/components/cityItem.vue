<template>
    <div class="Hcontent">
        <div class="Hleft">
            <img src="../assets/img/BJ.jpg" alt="">
        </div>
        <div class="Hright">
            <div class="HTop">
                <div>
                    <span class="title">大同浩海国际酒店</span><span class="mintitle">高档型</span>
                </div>
                <div>
                    <span class="title score">4.7分</span><span class="medtitle">非常好</span><span class="mintitle">486条点评</span>
                </div>
            </div>
            <div class="HBottom">
                <div class="red ">提前2天预订</div>
                <div class="HBBottom">
                    <span class="red">法定节假日不可预订</span>
                    <div>
                        <span class="oldprice">¥126</span>
                        <span class="newprice red">¥124起<i>></i></span>
                        <i>立减icon</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
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
    width: 100px;
    height: 100px;
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
    justify-content: space-between
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
