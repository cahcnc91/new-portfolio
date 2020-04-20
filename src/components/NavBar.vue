<template>
  <div class="row">
    <nav class="section-nav navbar">
      <router-link to="/" v-slot="{ href, route, navigate, isActive }">
        <a
          :active="isActive"
          :href="href"
          @click="navigate"
          class="navbar__logo"
          >Camila Coder</a
        >
      </router-link>
    </nav>
  </div>
</template>
