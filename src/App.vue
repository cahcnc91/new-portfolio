<template>
  <div>
    <Navigation></Navigation>
    <router-view></router-view>
    <router-view name="projects" />
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navigation,
    Footer
  },
};
</script>
