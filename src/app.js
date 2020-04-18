import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import Fragment from 'vue-fragment';
import router from './router';
import App from './App.vue';

import {
  faCode,
  faAngleDoubleRight,
  faDatabase,
  faCodeBranch,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faNpm,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Typewriter from "vue-typewriter";

Vue.use(Typewriter);
Vue.use(Fragment.Plugin)

library.add(
  faCode,
  faAngleDoubleRight,
  faDatabase,
  faCodeBranch,
  faPhone,
  faEnvelope,
  faLinkedinIn,
  faNpm,
  faGithub
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
