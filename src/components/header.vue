<template>
   <mt-header :title="title">
        <router-link :to="link" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header> 
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:"酒店"
        },
        link:{
            type:String,
            default:"/"
        }
    },
    data(){
        return{
            
        }
    },

}
</script>


<style>

</style>

