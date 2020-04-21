<template>
  <nav class="section-nav navbar">
    <div class="row">
      <router-link to="/" v-slot="{ href, route, navigate, isActive }">
        <a
          :active="isActive"
          :href="href"
          @click="navigate"
          class="navbar__logo"
          >Camila Coder</a
        >
      </router-link>
    </div>
  </nav>
</template>
