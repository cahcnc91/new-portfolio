<template>
  <fragment>
    <Hero @click="handleClick"></Hero>
    <About></About>
  </fragment>
</template>

<script>
import Hero from "../components/HeroSection/Hero.vue";
import About from "../components/AboutSection/About.vue";
import anime from "animejs/lib/anime.es.js";

export default {
  components: { Hero, About },
  methods: {
    handleClick() {
      let el = document.querySelector("#about-section-top"),
        offset = 0,
        duration = 800,
        easing = "easeOutExpo",
        callback = null;

      if (el) {
        anime({
          targets: ["html", "body"],
          scrollTop: el.offsetTop + offset,
          duration: duration,
          easing: easing,
          complete: callback,
        }).finished.then(() => {
          bus.$emit("scroll:finished", true);
        });
      }
    },
  },
};
</script>
