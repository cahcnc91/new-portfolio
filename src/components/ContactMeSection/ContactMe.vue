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
      <div class="row flex justify-center">
        <div class="u-margin-bottom"></div>
        <div class="figure-shape__image--mobile-div">
          <img
            src="../../images/camilaluna.png"
            alt="camila coder web developer"
            class="figure-shape__image--mobile-img"
          />
        </div>

        <figure class="figure-shape">
          <img
            src="../../images/camilaluna.png"
            alt="camila coder web developer"
            class="figure-shape__image"
          />
          <figcaption class="figure-shape__caption">
            Luna says hello!
          </figcaption>
        </figure>
      </div>
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
