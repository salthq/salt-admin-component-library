<template>
  <icon-wrapper v-bind="props">
    <g
      ><path
        d="M20.415,15.665a8,8,0,1,0-8.83,0A15.025,15.025,0,0,0,1,30a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1A15.025,15.025,0,0,0,20.415,15.665ZM10,9a6,6,0,1,1,6,6A6.006,6.006,0,0,1,10,9ZM3.038,29a13,13,0,0,1,25.924,0Z"
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
