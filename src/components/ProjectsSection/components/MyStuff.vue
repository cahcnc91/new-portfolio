<template>
  <div>
  <Navbar></Navbar>
  <section class="section-project">
    <ArrowLeft :link="project.arrowLeft"></ArrowLeft>
    <ArrowRight :link="project.arrowRight"></ArrowRight>
    <div class="row single-project">
        <div class="col-1-of-4">
          <h2>{{ project.title }}</h2>
          <div class="single-project__divider"></div>
          <a href="" class="paragraph">{{ project.subtitle }}</a>
          <p class="paragraph u-margin-top-s">
            {{project.body }} <span v-if="project.link"><a class="single-project__link" :href="project.link" target="_blank">npm package</a></span>.
          </p>
          <p class="paragraph">
            <b>Technologies:</b> {{ project.technologies }}
          </p>
        </div>
        <div class="col-3-of-4 single-project__img">
            <iframe
              :src="project.iframe"
              style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
              title="scatterplot-with-menus"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
        </div>
      </div>
    </section>
  </section>
  </div>
</template>

<script>
import Navbar from '../../Navbar.vue';
import ArrowLeft from '../../ArrowLeft.vue';
import ArrowRight from '../../ArrowRight.vue';

export default {
    components: {
        Navbar,
        ArrowLeft,
        ArrowRight
    },
      props: {
    project: Object
  },
}
</script>