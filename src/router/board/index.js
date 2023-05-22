import Vue from 'vue'
import VueRouter from 'vue-router'

import BoardWritePage from '@/views/board/BoardWritePage.vue'
import BoardListPage from '@/views/board/BoardListPage.vue'
import BoardReadPage from "@/views/board/BoardReadPage.vue";
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
  {
    path: '/board-read-page/:baordId',
    name: 'BoardReadPage',
    component: BoardReadPage,
    props: true
  }
  

]

export default BoardRoutes
