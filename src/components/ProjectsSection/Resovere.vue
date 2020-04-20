<template>
  <fragment>
  <Navbar></Navbar>
  <section class="section-project">
    <ArrowRight link="/mystuff"></ArrowRight>
    <ArrowLeft link="/thinkempire"></ArrowLeft>
    <div class="row single-project">
      <div class="col-1-of-2">
        <h2>Front End Contractor</h2>
        <div class="single-project__divider"></div>
        <a href="" class="paragraph">Resovere</a>
        <p class="paragraph u-margin-top-s">
         Contractor for a Creative Digital Marketing Agency, where I developed fully responsive websites, created custom WordPress templates, ACFs, animations, setup CMS for clients and plugins.
        </p>
        <p class="paragraph"><b>Technologies:</b> HTML, CSS, SCSS, Wepback, Wordpress, Vue and Tailwind.</p>
      </div>
      <div class="col-1-of-2">
        <img src="../../images/resovere.png" class="single-project__img"/>
      </div>
    <div>
  </div>
  </section>
  </fragment>
</template>

<script>
import Navbar from '../Navbar.vue';
import ArrowRight from '../ArrowRight.vue';
import ArrowLeft from '../ArrowLeft.vue';

export default {
    components: {
        Navbar,
        ArrowRight,
        ArrowLeft
    }
}
</script>