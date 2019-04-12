<template>
    <div>
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="book">
                <!-- <mt-cell title="酒店预定"></mt-cell> -->
                <v-book></v-book>
            </mt-tab-container-item>
            <mt-tab-container-item id="life">
                <mt-cell title="e享生活"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="me">
                <!--<mt-cell title="我的"></mt-cell>-->
              <v-me></v-me>
            </mt-tab-container-item>
        </mt-tab-container>
        <div class="foot">
            <mt-tabbar v-model="active">
                <mt-tab-item @click.native.prevent="active = 'book'" id="book">
                    酒店预定
                </mt-tab-item>
                <mt-tab-item @click.native.prevent="active = 'life'" id="life">
                    e享生活
                </mt-tab-item>
                <mt-tab-item @click.native.prevent="active = 'me'" id="me">
                    我的
                </mt-tab-item>
            </mt-tabbar>
        </div>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import Book from './home/home'
import Me from './me/me'
export default {
    components:{
        'v-book':Book,
      'v-me':Me
    },
    data(){
      return {
          active:'book'
      }
    },
    methods:{

    }
}
</script>

<style>

</style>
