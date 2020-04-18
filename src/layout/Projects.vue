<template>
  <fragment>
    <Navigation></Navigation>
    <Cards></Cards>
    <Footer></Footer>
  </fragment>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Cards from "../components/ProjectsSection/Cards.vue";
import Footer from "../components/Footer/Footer.vue";

export default {
  components: {
    Navigation,
    Cards,
    Footer,
  },
};
</script>
