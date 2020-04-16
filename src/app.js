import Vue from "vue";
import App from './App.vue';
import Profile from './components/Profile.vue';

new Vue({
    el: "#app",
    components: {Profile},
    render: h => h(App)
})