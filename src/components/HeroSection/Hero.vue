<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__logo-box">
        <h1 class="header__logo-name">Camila</h1>
        <h1 class="header__logo-name">Coder</h1>
      </div>

      <div class="header__text-box">
        <typewriter
          class="typewrite"
          :speed="200"
          :full-erase="true"
          :interval="800"
          :words="[
            `Hey, I'm Camila`,
            `I'm a full-stack developer`,
            `Let's talk about coding`,
          ]"
        >
        </typewriter>
      </div>

      <div class="header__button">
        <button class="button button--green button--size1">VIEW MY WORK</button>
        <button
          class="button button--white button--size1 button--about"
          v-on:click="handleClick"
        >
          ABOUT
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
