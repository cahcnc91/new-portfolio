<template>
  <div class="navigation">
    <input
      type="checkbox"
      name="check-test"
      class="navigation__checkbox"
      id="navi-toggle"
    />
    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>
    <div class="navigation__background">&nbsp;</div>

    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
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
        <li class="navigation__item">
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
