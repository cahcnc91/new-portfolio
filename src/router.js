import Vue from 'vue'
import Router from 'vue-router';
import Home from './layout/Home.vue';
import Projects from './layout/Projects.vue';
import Thinkempire from './components/ProjectsSection/ThinkEmpire.vue';
import Resovere from './components/ProjectsSection/Resovere.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      children: [
        { path: '/projects/resovere', component: Resovere}
      ]
    },
    {
      path: '/thinkempire',
      component: Thinkempire
    }
  ]
})