<template>
    <div>
        <mt-header :title="title">
            <router-link :to="link" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div>
            <div><span>大同浩海国际酒店</span><span>高档型</span></div>
            <div><span>4.7分</span><span>非常好</span><span>性价比高</span><span>服务周到</span></div>
        </div>
        <div>
            <div><span>2012年装修</span><span>2005年开业</span></div>
            <div>
                <div>
                    <span><i></i><span></span></span>
                    <span><i></i><span></span></span>
                    <span><i></i><span></span></span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    
}
</script>

<style>

</style>

