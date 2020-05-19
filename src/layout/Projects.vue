<template>
  <div>
    <Navbar></Navbar>
    <Cards></Cards>
  </div>
</template>

<script>
import Cards from "../components/ProjectsSection/components/Cards.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Cards,
    Navbar
  },
};
</script>
