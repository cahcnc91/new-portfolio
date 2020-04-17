<template>
  <div>
    <Hero></Hero>
    <About></About>
  </div>
</template>

<script>
import Hero from "./components/HeroSection/Hero.vue";
import About from "./components/AboutSection/About.vue";

export default {
  components: {
    Hero,
    About,
  },
};
</script>
