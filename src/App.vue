<template>
  <div>
    <Navigation></Navigation>
    <Hero></Hero>
    <About></About>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Hero from "./components/HeroSection/Hero.vue";
import About from "./components/AboutSection/About.vue";

export default {
  components: {
    Navigation,
    Hero,
    About,
  },
};
</script>
