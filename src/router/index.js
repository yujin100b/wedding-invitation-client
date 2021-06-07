import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeEN from '../views/HomeEN.vue'

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
    path: '/KO/open',
    name: 'Invitation',
    component: () => import('../views/Invitation.vue'),
  },
  {
    path: '/EN/open',
    name: 'Home',
    component: () => import('../views/InvitationEN.vue'),
  },
  {
    path: '/KO',
    name: 'Home',
    component: Home,
  },
  {
    path: '/EN',
    name: 'Home',
    component: HomeEN,
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
