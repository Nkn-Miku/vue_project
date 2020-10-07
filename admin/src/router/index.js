import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Create from '../components/categories/Create.vue'
import List from '../components/categories/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome, name: 'welcome' },
      { path: '/categories/edit/:id', component: Create, props: true },
      { path: '/categories/create', component: Create, name: 'create' },
      { path: '/categories/list', component: List, name: 'list' }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
