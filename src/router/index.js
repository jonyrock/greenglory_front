import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Game from '@/components/game'
import Analytics from '@/components/analytics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/analytics',
      name: 'Analytics',
      component: Analytics
    }
  ]
});
