<template>
  <div>
    <svg width="0" height="0">
      <radialGradient id="rg" r="150%" cx="25%" cy="107%">
        <stop stop-color="#7ed56f" offset="0.25" />
        <stop stop-color="#28b485" offset="1" />
      </radialGradient>
    </svg>
    <font-awesome-icon :icon="iconName" :class="classes" />
  </div>
</template>

<script>
export default {
  props: { iconName: {type: [String, Array]}, classes: String },
};
</script>
