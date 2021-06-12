import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component:()=>import('../views/Error404.vue'),
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component:()=>import('../views/Home.vue'),
    children:[
      {
        path:'',
        component:()=>import('../views/Complements/home.vue'),
      },
      {
        path:'about',
        component:()=>import('../views/PlayMusic.vue'),
      }  
    ]
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
