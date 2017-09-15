import Vue from 'vue'
import Router from 'vue-router'
import loading from '@/page/loading'
import index from '@/page/index'
// import up from '@/page/up'
import video from '@/page/video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loading',
      component: loading
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
        path: '/index',
        name: 'index',
        component: index
    }
  ]
})
