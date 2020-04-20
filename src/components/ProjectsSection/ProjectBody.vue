<template>
  <fragment>
  <Navbar></Navbar>
  <section class="section-project">
    <ArrowRight v-if="project.arrowRight" :link="project.arrowRight"></ArrowRight>
    <ArrowLeft v-if="project.arrowLeft" :link="project.arrowLeft"></ArrowLeft>
    <div class="row single-project">
      <div class="col-1-of-2">
        <h2>{{ project.title }}</h2>
        <div class="single-project__divider"></div>
        <a href="" class="paragraph">{{ project.subtitle }}</a>
        <p class="paragraph u-margin-top-s">
         {{ project.body }}
        </p>
        <p class="paragraph"><b>Technologies:</b> {{ project.technologies }}</p>
      </div>
      <div class="col-1-of-2">
        <img :src="project.img" class="single-project__img"/>
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
    },
    props: {
        project: Object
    }
}
</script>