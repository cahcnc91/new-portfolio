<template>
  <fragment>
    <Navbar></Navbar>
    <section class="section-contact">
      <div class="row">
        <p class="about__text--sm u-margin-bottom u-padding-top">
          Interested in working together?<br />Contact me:
        </p>
      </div>
      <ContactInfo></ContactInfo>
    </section>
  </fragment>
</template>

<script>
import ContactInfo from "./ContactInfo.vue";
import Navbar from "../Navbar.vue";

export default {
  components: {
    ContactInfo,
    Navbar,
  },
};
</script>
