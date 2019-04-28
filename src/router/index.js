import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// {
//   path: '/',
//   redirect: '/recommend'
// },
// {
//   path: '/recommend',
//   component: Recommend,
//   children: [
//     {
//       path: ':id',
//       component: Disc
//     }
//   ]
// }
const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path: '/index',
    name: 'home',
    component: () => import ('@/pages/index')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import ('@/pages/me/me')
  },
  {
    path: '/me/order',
    name: 'order',
    component: () => import ('@/pages/me/order')
  },
  {
    path: '/me/order/detail',
    name: 'detail',
    component: () => import ('@/pages/me/orderDetail')
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: () => import ('@/pages/hotel/index')
  },
  {
    path: '/hotel/hoteInfo',
    name: 'hoteInfo',
    component: () => import ('@/pages/hotel/hoteInfo')
  },
  {
    path: '/hotel/detail',
    name: 'hoteDetail',
    component: () => import ('@/pages/hotel/detail')
  }
]
const router = new Router({
  routes
});

//路由拦截
// router.beforeEach((to, from, next) => {
//   if(localStorage.getItem('path')){
//     let urlStr = localStorage.getItem('path');
//     let arr = to.path.split('/');
//     if (urlStr.indexOf(arr[1])>-1) {
//       next();
//     }
//     else {
//       next({
//         path: '/404'
//       })
//     }
//   }else {
//     if (to.name == 'login'){
//       next()
//     }else {
//       next({
//         path: '/'
//       })
//     }
//   }

// })
export default router;
