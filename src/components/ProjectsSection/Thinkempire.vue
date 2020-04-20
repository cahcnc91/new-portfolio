<template>
  <fragment>
    <Navbar></Navbar>
    <section class="section-project">
      <ArrowRight link="/resovere"></ArrowRight>
      <div class="row single-project">
        <div class="col-1-of-2">
          <h2>Full-stack developer</h2>
          <div class="single-project__divider"></div>
          <a href="" class="paragraph">Think Empire</a>
          <p class="paragraph u-margin-top-s">
            This is my full-time job. It is a data-driven app, where I have
            planned the architecture, implementation and refactor of several
            different features, created unit / integration / end-to-end tests,
            created User Interfaces and implemented designs provides, designed
            REST and Graph API's, and others.<br />
          </p>
          <p class="paragraph">
            <b>Technologies:</b> TypeScript, React, Redux, Redux-Saga, Apollo,
            Nodejs, Express, MySQL, GraphQL, Jest, Cypress, Storybook, and Git
          </p>
        </div>
        <div class="col-1-of-2">
          <img src="../../images/thinkempire.png" class="single-project__img" />
        </div>
      </div>
    </section>
  </fragment>
</template>

<script>
import Navbar from "../Navbar.vue";
import ArrowRight from "../ArrowRight.vue";

export default {
  components: {
    Navbar,
    ArrowRight,
  },
};
</script>
