import { createRouter, createWebHistory } from "vue-router";
 
import debounce from '@/views/debounce/debounce-page.vue'

import boradCastSend from '@/views/BoradCast/boradCastSend.vue'
import boradCastReceive from '@/views/BoradCast/boradCastReceive.vue'

import serviceWorkerSend from '@/views/serviceWorker/indexSend.vue'
import serviceWorkerReceive from '@/views/serviceWorker/indexReceive.vue'
const routes = [
  {
    //登录页面
    path: "/debounce",
    name: "debounce",
    // component: () => import("@/page/debounce/index.vue"),
    component: debounce
  },
  // {
  //   //登录页面
  //   path: "/boradCast",
  //   name: "boradCast",
  //   component: boradCastSend
  // },
  {
    path: '/main', // 主屏
    name: 'Main',
    children: [
      {
        path: '/boradCastSend',
        name: 'boradCast',
        component: boradCastSend
      },
      {
        path: '/boradCastReceive',
        name: 'boradCastReceive',
        component: boradCastReceive
      }
    ]
  },


  {
    //indexSend
    path: "/serviceWorkerSend",
    name: "serviceWorkerSend",
    component: serviceWorkerSend
  },
  {
    //indexSend
    path: "/serviceWorkerReceive",
    name: "serviceWorkerReceive",
    component: serviceWorkerReceive
  },


];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
export default router;