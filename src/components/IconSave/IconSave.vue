<template>
  <icon-wrapper v-bind="props">
    <g id="save">
      <path
        d="M30.707,9.293l-8-8A1,1,0,0,0,22,1H3A2,2,0,0,0,1,3V29a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V10A1,1,0,0,0,30.707,9.293ZM24,29H8V18a1,1,0,0,1,1-1H23a1,1,0,0,1,1,1Zm2,0V18a3,3,0,0,0-3-3H9a3,3,0,0,0-3,3V29H3V3H21.586L29,10.414V29Z"
    /></g>
  </icon-wrapper>
</template>

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
    size: 28,
    strokeWidth: 0,
    viewBox: "0 0 32 32",
  }
);
</script>
