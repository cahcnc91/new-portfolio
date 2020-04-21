<template>
  <div>
  <Navbar></Navbar>
  <section class="section-project">
    <ArrowLeft link="./clickscroll"></ArrowLeft>
    <ArrowRight link="./see-more"></ArrowRight>
    <div class="row single-project">
      <div class="col-1-of-2">
        <h2>This Portfolio</h2>
        <div class="single-project__divider"></div>
        <a href="" class="paragraph">Web App</a>
        <p class="paragraph u-margin-top-s">
         This portfolio was designed and developed by me, it is autoprefixing and minifying CSS, also compressing all other assets for best performance, deployed through Heroku.
        </p>
        <p class="paragraph"><b>Technologies:</b> Vue, Vue-router, SCSS, Webpack and Heroku.</p>
      </div>
      <div class="col-1-of-2">
        <img src="../../images/screenshot.png" class="single-project__img"/>
      </div>
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
