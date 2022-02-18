<script lang="ts">
export default {
  name: "SltIconTrash",
};
</script>

<script setup lang="ts">
import IconWrapper from "../IconWrapper.vue";

const props = withDefaults(
  defineProps<{
    fill?: string;
    size?: number;
    strokeWidth?: number;
    viewBox?: string;
  }>(),
  {
    fill: "currentColor",
    size: 18,
    strokeWidth: 0.5,
    viewBox: "0 0 32 32",
  }
);
</script>

<template>
  <icon-wrapper v-bind="props">
    <g>
      <path
        d="M30,7H26.72L25.177,2.368A2,2,0,0,0,23.279,1H8.721a2,2,0,0,0-1.9,1.367L5.279,7H2A1,1,0,0,0,2,9H5.127L7.891,29.271A2.008,2.008,0,0,0,9.873,31H22.127a2.007,2.007,0,0,0,1.982-1.729L26.873,9H30a1,1,0,0,0,0-2ZM8.721,3H23.279l1.333,4H7.387ZM22.127,29H9.873L7.146,9H24.854ZM12,26V12a1,1,0,0,1,2,0V26a1,1,0,0,1-2,0Zm6,0V12a1,1,0,0,1,2,0V26a1,1,0,0,1-2,0Z"
    /></g>
  </icon-wrapper>
</template>
