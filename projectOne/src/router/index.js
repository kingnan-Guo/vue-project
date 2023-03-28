import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Main from '@/pages/main/index'
// import home from '@/pages/home/home'
import testOne from '@/pages/testOne/index'
import defer from '@/pages/defer/index'
import debounce from '@/pages/debounce/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main', // 主屏
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/testOne',
          name: 'testOne',
          component: testOne
        },
        {
          path: '/defer',
          name: 'defer',
          component: defer
        },
        {
          path: '/debounce',
          name: 'debounce',
          component: debounce
        }
      ]
    }
  ]
})
