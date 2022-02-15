<template>
  <icon-wrapper v-bind="props">
    <g>
      <path
        d="M14,7a3,3,0,1,0,3,3A3.009,3.009,0,0,0,14,7Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,14,11Zm0-4a3,3,0,1,0,3,3A3.009,3.009,0,0,0,14,7Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,14,11Zm0-4a3,3,0,1,0,3,3A3.009,3.009,0,0,0,14,7Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,14,11Zm0-4a3,3,0,1,0,3,3A3.009,3.009,0,0,0,14,7Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,14,11ZM25.89,7.55l-3-6A.988.988,0,0,0,22,1H14a1,1,0,0,0-.9.55L12.38,3H10a.988.988,0,0,0-.89.55l-3,6A1,1,0,0,0,6,10V30a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V29h3a1,1,0,0,0,1-1V8A1,1,0,0,0,25.89,7.55ZM20,29H8V10.24L10.62,5h6.76L20,10.24Zm4-2H22V10a1,1,0,0,0-.11-.45l-3-6A.988.988,0,0,0,18,3h3.38L24,8.24ZM14,7a3,3,0,1,0,3,3A3.009,3.009,0,0,0,14,7Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,14,11Z"
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
