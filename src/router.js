import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/keyboard'
    },
    {
      path: '/keyboard',
      name: 'keyboard',
      component: () => import('./views/Keyboard.vue'),
      meta: {
        title: 'Klingon Keyboard | Klingon Zero to Hero',
        metaTags: [
          {
            name: 'description',
            content: 'Type Klingon with the Klingon script.'
          }
        ]
      }
    }
  ]
})
