<template>
  <div class="navigation">
    <input
      type="checkbox"
      name="check-test"
      class="navigation__checkbox"
      id="navi-toggle"
    />
    <div
      v-if="!isOpen"
      for="navi-toggle"
      class="navigation__button"
      v-on:click="isOpen = !isOpen"
    >
      <span class="navigation__icon">&nbsp;</span>
    </div>
    <div
      class="navigation__background"
      v-on:click="isOpen = !isOpen"
      v-bind:class="{ 'navigation__background--open': isOpen }"
    >
      &nbsp;
    </div>

    <nav class="navigation__nav" v-bind:class="{ 'navigation__nav--open': isOpen }">
      <ul class="navigation__list">
        <li class="navigation__item" v-on:click="isOpen = !isOpen">
          <router-link
            to="/"
            v-slot="{ href, route, navigate, isActive, isExactActive }"
          >
            <a
              :active="isActive"
              :href="href"
              @click="navigate"
              class="navigation__link"
              >HOME</a
            >
          </router-link>
        </li>
        <li class="navigation__item" v-on:click="isOpen = !isOpen">
          <router-link
            to="/projects"
            v-slot="{ href, route, navigate, isActive }"
          >
            <a
              :active="isActive"
              :href="href"
              @click="navigate"
              class="navigation__link"
              >PROJECTS</a
            >
          </router-link>
        </li>
        <li class="navigation__item">
          <a href="#code-samples" class="navigation__link">COMPONENTS</a>
        </li>
        <li class="navigation__item">
          <a href="#contact" class="navigation__link">CONTACT ME</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
