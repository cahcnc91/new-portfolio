<template>
  <fragment>
    <Navigation></Navigation>
    <Hero @click="handleClick"></Hero>
    <About></About>
    <Footer></Footer>
  </fragment>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Hero from "./components/HeroSection/Hero.vue";
import About from "./components/AboutSection/About.vue";
import Footer from "./components/Footer/Footer.vue";
import anime from "animejs/lib/anime.es.js";

export default {
  components: {
    Navigation,
    Hero,
    About,
    Footer,
  },
  //
  // }
  methods: {
    handleClick() {
      
      let el = document.querySelector('#about-section-top'),
        offset = 0,
        duration = 800,
        easing = "easeOutExpo",
        callback = null;
        console.log(el)

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
