<template>
    <div class="daytime">
        <div class="head">
            <mt-header title="请选择日期">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.search{
    height: 50px;
}
</style>
