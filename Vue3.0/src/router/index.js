import { createRouter, createWebHistory } from "vue-router";
 
import debounce from '@/pages/debounce/debounce-page.vue'

const routes = [
  {
    //登录页面
    path: "/login",
    name: "login",
    // component: () => import("@/page/debounce/index.vue"),
    component: debounce
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
export default router;