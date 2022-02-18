<script lang="ts">
export default {
  name: "SltIconDislike",
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
    size: 24,
    strokeWidth: 0.5,
    viewBox: "0 0 32 32",
  }
);
</script>

<template>
  <icon-wrapper v-bind="props">
    <g
      ><path
        d="M24.879,3H19.551a6.094,6.094,0,0,0-3.395,1.028l-.421.28A4.1,4.1,0,0,1,13.449,5H13V4a1,1,0,0,0-1-1H2A1,1,0,0,0,1,4V22a1,1,0,0,0,1,1H12a1,1,0,0,0,1-1V21h2.219l1.26,5.038a3.91,3.91,0,1,0,7.587-1.9L23.281,21h1.6A6.118,6.118,0,0,0,31,14.879V9.121A6.118,6.118,0,0,0,24.879,3ZM11,21H3V5h8Zm18-6.121A4.119,4.119,0,0,1,24.879,19H22a1,1,0,0,0-.97,1.243l1.095,4.383a1.91,1.91,0,1,1-3.706.927l-1.449-5.8A1,1,0,0,0,16,19H13V7h.449a6.094,6.094,0,0,0,3.4-1.028l.421-.28A4.1,4.1,0,0,1,19.551,5h5.328A4.119,4.119,0,0,1,29,9.121ZM9,8A1,1,0,1,1,8,7,1,1,0,0,1,9,8Z"
    /></g>
  </icon-wrapper>
</template>
