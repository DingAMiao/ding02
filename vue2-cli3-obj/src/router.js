import Vue from 'vue'
import Router from 'vue-router'

import collage from './components/collage.vue'
import home from './components/home.vue'
import member from './components/member.vue'
import collages from './components/collages.vue'
Vue.use(Router)

const routes=[
  {path:'/collages',component:collages},
  {path:'/member',component:member},
  {path:'/collage',component:collage},
  {path:'/home',component:home},
  {path:'/',redirect:'/home'},
]

 
 const router = new Router({
 routes
})
 
export default router;