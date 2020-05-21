import Vue from "vue";
import Router from "vue-router";
// async component that will be automatically code-split by webpack
const Home = () => import("./layout/Home.vue");
const Projects = () => import("./layout/Projects.vue")
const Thinkempire = () => import("./components/ProjectsSection/Thinkempire.vue")
const Resovere = () => import("./components/ProjectsSection/Resovere.vue")
const NotFound = () => import("./components/NotFound.vue")
const Autocomplete = () => import("./components/ProjectsSection/Autocomplete.vue")
const ClickAndScroll = () => import("./components/ProjectsSection/ClickAndScroll.vue")
const Portfolio = () => import("./components/ProjectsSection/Portfolio.vue");
const ContactMe = () => import("./components/ContactMeSection/ContactMe.vue")
const SeeMore = () => import("./components/ProjectsSection/SeeMore.vue")
const D3 = () => import("./components/ProjectsSection/D3.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
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
    { path: "/d3", component: D3 },
    { path: "/autocomplete", component: Autocomplete },
    { path: "/clickscroll", component: ClickAndScroll },
    { path: "/portfolio", component: Portfolio },
    { path: "/contact-me", component: ContactMe },
    { path: "/see-more", component: SeeMore },
    { path: "*", component: NotFound },
  ],
});
