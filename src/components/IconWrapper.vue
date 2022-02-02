<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    :width="size"
    :height="size"
    :fill="fill"
    :stroke-width="strokeWidth"
    preserveAspectRatio="xMidYMid meet"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="text-current stroke-current"
  >
    <slot />
  </svg>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SltIconWrapper",
  props: {
    fill: {
      type: String,
      required: true,
      default: "currentColor",
    },
    size: {
      type: Number,
      required: true,
    },
    strokeWidth: {
      type: Number,
      required: false,
      default: 0,
    },
    viewBox: {
      type: String,
      required: true,
    },
  },
});
</script>
