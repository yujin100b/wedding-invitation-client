import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// const checkOpening = () => async (to, from, next) => {
//   if (localStorage.getItem('vuex')){
//     next()
//   }
//   else{
//     //TODO: code 유효한지 확인 후 next
//     next('/')
//   }
// }

const routes = [
  {
    path: '/open',
    name: 'Invitation',
    component: () => import('../views/Invitation.vue'),
  },
  {
    path: '/:code',
    name: 'Home',
    component: Home,
    props: true, 
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
