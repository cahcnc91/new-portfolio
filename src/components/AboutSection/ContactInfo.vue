<template>
  <ul>
    <li v-for="item in contactInfo" :key="item.link">
      <a :href="item.link" target="_blank" rel="noopener noreferrer" class="about__text-icon">
        <IconGradient :iconName="item.icon" classes="about__icon"></IconGradient>
        <p class="about__text--sm u-margin-left">{{ item.label }}</p>
      </a>
    </li>
  </ul>
</template>

<script>
import IconGradient from "../IconGradient.vue";

export default {
  components: {
    IconGradient,
  },
  data() {
    return {
      contactInfo: [
        { icon: "envelope", label: "camila.coder91@gmail.com", link:"mailto:camila.coder91@gmail.com" },
        // { icon: "phone", label: "631-988-6195", link="" },
        { icon: ['fab', 'github'], label: "@cahcnc91", link: "https://github.com/cahcnc91" },
        { icon: ['fab', 'linkedin-in'], label: "@cahcnc91", link: "https://www.linkedin.com/in/cahcnc91/"}
      ],
    };
  },
};
</script>
