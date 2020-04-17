import Vue from "vue";
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faAngleDoubleRight, faDatabase, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Typewriter from 'vue-typewriter';

Vue.use(Typewriter);

library.add(faCode, faAngleDoubleRight, faDatabase, faCodeBranch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    el: "#app",
    render: h => h(App)
})