<template>
  <fragment>
    <Navbar></Navbar>
    <Cards></Cards>
  </fragment>
</template>

<script>
import Cards from "../components/ProjectsSection/Cards.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Cards,
    Navbar
  },
};
</script>
