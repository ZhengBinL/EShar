import Vue from 'vue'
import http from '@/axios/common/http';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import './assets/scss/index.scss'
import './assets/js/rem.js'


//引入MintUI
Vue.use(MintUI)

//  这样就可以通过$http发起请求了
Vue.prototype.$http = http;

Vue.config.productionTip = false
// Vue.use(VueLazyLoad,{
//   error:'../static/images/404.png',
//   loading:'../static/images/404.png'
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
