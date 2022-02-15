<template>
  <icon-wrapper v-bind="props">
    <g
      ><path
        d="M20.5,11h-9a3.5,3.5,0,0,0,0,7h9a3.5,3.5,0,0,0,0-7Zm0,5h-9a1.5,1.5,0,0,1,0-3h9a1.5,1.5,0,0,1,0,3Zm0-5h-9a3.5,3.5,0,0,0,0,7h9a3.5,3.5,0,0,0,0-7Zm0,5h-9a1.5,1.5,0,0,1,0-3h9a1.5,1.5,0,0,1,0,3ZM30,1H2A1,1,0,0,0,1,2V7A1,1,0,0,0,2,8H3V30a1,1,0,0,0,1,1H28a1,1,0,0,0,1-1V8h1a1,1,0,0,0,1-1V2A1,1,0,0,0,30,1ZM27,29H5V8H27ZM29,6H3V3H29ZM11.5,18h9a3.5,3.5,0,0,0,0-7h-9a3.5,3.5,0,0,0,0,7Zm0-5h9a1.5,1.5,0,0,1,0,3h-9a1.5,1.5,0,0,1,0-3Z"
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
