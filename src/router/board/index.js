import Vue from 'vue'
import VueRouter from 'vue-router'

import BoardWritePage from '@/views/board/BoardWritePage.vue'
import BoardListPage from '@/views/board/BoardListPage.vue'
Vue.use(VueRouter)

const BoardRoutes = [
  {
    path: '/board-write-page',
    name: 'BoardWritePage',
    component: BoardWritePage
  },
  {
    path: '/board-list-page',
    name: 'BoardListPage',
    component: BoardListPage
  },
  

]

export default BoardRoutes
