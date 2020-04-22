<template>
  <div>
    <Navbar></Navbar>
    <section class="section-project">
      <ArrowRight
        v-if="project.arrowRight"
        :link="project.arrowRight"
      ></ArrowRight>
      <ArrowLeft v-if="project.arrowLeft" :link="project.arrowLeft"></ArrowLeft>
      <div class="row single-project">
        <div class="col-1-of-2">
          <h2>{{ project.title }}</h2>
          <div class="single-project__divider"></div>
          <a href="" class="paragraph">{{ project.subtitle }}</a>
          <p class="paragraph u-margin-top-s">
            {{ project.body }}
            <span v-if="project.link"><a :href="project.link" target="__blank" class="single-project__link">{{ project.linkName }}</a></span>
            <span v-if="project.multipleLinks"><a :href="project.link1" target="__blank" class="single-project__link">See Know Your Rivals</a>, <a :href="project.link2" target="__blank" class="single-project__link">see Fieldedge</a>, <a :href="project.link3" target="__blank" class="single-project__link">see JWB Pinellas</a></span>
          .
          </p>
          <p class="paragraph">
            <b>Technologies:</b> {{ project.technologies }}
          </p>
        </div>
        <div class="col-1-of-2">
          <img :src="project.img" class="single-project__img" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "../Navbar.vue";
import ArrowRight from "../ArrowRight.vue";
import ArrowLeft from "../ArrowLeft.vue";

export default {
  components: {
    Navbar,
    ArrowRight,
    ArrowLeft,
  },
  props: {
    project: Object,
  },
};
</script>
