<template>
  <div class="col-1-of-3">
    <div class="feature-box">
      <svg width="0" height="0">
        <radialGradient id="rg" r="150%" cx="25%" cy="107%">
          <stop stop-color="#7ed56f" offset="0.25" />
          <stop stop-color="#28b485" offset="1" />
        </radialGradient>
      </svg>
      <font-awesome-icon :icon="iconName" class="feature-box__icon" />
      <h3 class="heading-tertiary u-margin-bottom-small">{{ title }}</h3>
      <ul>
        <li v-for="skill in skills" :key="skill" class="feature-box__skills">
          <IconArrowRight></IconArrowRight>
          <p class="feature-box__text">{{ skill }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconArrowRight from "./IconArrowRight.vue";

export default {
  components: {
    IconArrowRight,
  },
  props: { skills: { type: Array, default: () => {} }, iconName: String, title: String},
};

</script>
