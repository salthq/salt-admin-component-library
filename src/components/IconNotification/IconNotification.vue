<template>
  <icon-wrapper v-bind="props">
    <g>
      <path
        d="M26,21V15a10.013,10.013,0,0,0-9-9.949V2a1,1,0,0,0-2,0V5.051A10.013,10.013,0,0,0,6,15v6a3,3,0,0,0,0,6h7.184A2.966,2.966,0,0,0,13,28a3,3,0,0,0,6,0,2.966,2.966,0,0,0-.184-1H26a3,3,0,0,0,0-6ZM8,15a8,8,0,0,1,16,0v6H8Zm8,14a1,1,0,1,1,1-1A1,1,0,0,1,16,29Zm10-4H6a1,1,0,0,1,0-2H26a1,1,0,0,1,0,2Z"
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
    size: 25,
    strokeWidth: 0,
    viewBox: "0 0 32 32",
  }
);
</script>
