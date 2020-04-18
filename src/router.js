import Vue from 'vue'
import Router from 'vue-router';
import Home from './layout/Home.vue';
import Projects from './layout/Projects.vue';

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    }
  ]
})