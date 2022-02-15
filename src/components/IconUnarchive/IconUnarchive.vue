<!-- Viewport: 0 0 32 32 -->
<template>
  <icon-wrapper v-bind="props">
    <g
      ><path
        d="M30,10H27V9a3,3,0,0,0-3-3H10.414L8.707,4.293A1,1,0,0,0,8,4H4A3,3,0,0,0,1,7V27a1.028,1.028,0,0,0,1,1H26a1,1,0,0,0,.97-.758l4-16A1,1,0,0,0,30,10ZM3,7A1,1,0,0,1,4,6H7.586L9.293,7.707A1,1,0,0,0,10,8H24a1,1,0,0,1,1,1v1H6a1,1,0,0,0-.97.758L3,18.877ZM25.219,26H3.281l3.5-14H28.719Z"
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
