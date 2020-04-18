<template>
  <div class="col-1-of-3 feature-box__column">
    <div class="feature-box">
      <IconGradient
        :iconName="iconName"
        classes="feature-box__icon"
      ></IconGradient>
      <h3 class="heading-tertiary u-margin-bottom-small">{{ title }}</h3>
      <ul>
        <li v-for="skill in skills" :key="skill" class="feature-box__skills">
          <IconGradient
            iconName="angle-double-right"
            classes="feature-box__skills--small-icon"
          ></IconGradient>
          <p class="feature-box__text">{{ skill }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconGradient from "../IconGradient.vue";

export default {
  components: {
    IconGradient,
  },
  props: {
    skills: { type: Array, default: () => {} },
    iconName: String,
    title: String,
  },
};
</script>
