import { createRouter, createWebHistory } from "vue-router";
 
import debounce from '@/views/debounce/debounce-page.vue'

import boradCastSend from '@/views/BoradCast/boradCastSend.vue'
import boradCastReceive from '@/views/BoradCast/boradCastReceive.vue'

import serviceWorkerSend from '@/views/serviceWorker/indexSend.vue'
import serviceWorkerReceive from '@/views/serviceWorker/indexReceive.vue'

import webWorkerSend from '@/views/webWorker/indexSend.vue'
import webWorkerReceive from '@/views/webWorker/indexReceive.vue'

import otherTest from '@/views/testOne/indexTest.vue'
import customIce from '@/views/custom-ice/index.vue'

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
  {
    //indexSend
    path: "/webWorkerSend",
    name: "webWorkerSend",
    component: webWorkerSend
  },
  {
    //indexSend
    path: "/webWorkerReceive",
    name: "webWorkerReceive",
    component: webWorkerReceive
  },
  {
    path: "/otherPage",
    name: "otherPage",
    component: otherTest
  },
  {
    path: "/customIce",
    name: "customIce",
    component: customIce
  },
  
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
export default router;