<template>
  <div class="col-1-of-3">
    <div class="card">
      <div class="card__side card__side--front">
        <div :class="item.class"></div>
        <h4 class="card__heading">
          <span class="card__heading--span">
            {{ item.title }}
          </span>
        </h4>
        <div class="card__details">
          <ul>
            <li v-for="tool in item.tools" :key="tool">{{ tool }}</li>
          </ul>
        </div>
      </div>
      <div class="card__side card__side--back card__side--back-1">
        <div class="card__cta">
          <p class="card__name">{{ item.title }}</p>
          <a href="#popup-thinkempire" class="button button--transparent-green"
            >LEARN MORE</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    item: Object
  },
};
</script>
