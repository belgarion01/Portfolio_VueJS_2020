import Vue from 'vue'
import VueRouter from 'vue-router'
import HC3P from "@/views/HC3P";
import Home from "@/views/Home";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/HC3P',
    name:'HC3P',
    component: HC3P
  }

]

const router = new VueRouter({
  routes
})

export default router
