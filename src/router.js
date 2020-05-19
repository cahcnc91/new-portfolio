import Vue from "vue";
import Router from "vue-router";
import Home from "./layout/Home.vue";
import Projects from "./layout/Projects.vue";
import Thinkempire from "./components/ProjectsSection/ThinkEmpire.vue";
import Resovere from "./components/ProjectsSection/Resovere.vue";
import NotFound from "./components/NotFound.vue";
import Autocomplete from "./components/ProjectsSection/Autocomplete.vue";
import ClickAndScroll from "./components/ProjectsSection/ClickAndScroll.vue";
import Portfolio from './components/ProjectsSection/Portfolio.vue';
import ContactMe from './components/ContactMeSection/ContactMe.vue';
import SeeMore from './components/ProjectsSection/SeeMore.vue';
import D3 from './components/ProjectsSection/D3.vue';

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
    { path: "/d3", component: D3},
    { path: "/autocomplete", component: Autocomplete },
    { path: "/clickscroll", component: ClickAndScroll },
    { path: "/portfolio", component: Portfolio},
    { path: "/contact-me", component: ContactMe},
    { path: "/see-more", component: SeeMore},
    { path: "*", component: NotFound },
  ],
});
