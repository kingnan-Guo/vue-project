import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Main from '@/pages/main/index'
// import home from '@/pages/home/home'
// import tensorflow from '@/pages/tensorflow/tensorflow'
import testOne from '@/pages/testOne/index'

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
        }
      ]
    }
  ]
})
