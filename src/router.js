import Vue from "vue";
import Router from "vue-router";
import Home from "./layout/Home.vue";
import Projects from "./layout/Projects.vue";
import Thinkempire from "./components/ProjectsSection/ThinkEmpire.vue";
import Resovere from "./components/ProjectsSection/Resovere.vue";
import NotFound from "./components/NotFound.vue";
import Autocomplete from "./components/ProjectsSection/Autocomplete.vue";

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/work",
      component: Projects,
    },
    {
      path: "/thinkempire",
      component: Thinkempire,
    },
    { path: "/resovere", component: Resovere },
    { path: "/autocomplete", component: Autocomplete },
    { path: "*", component: NotFound },
  ],
});
