<template>
  <icon-wrapper v-bind="props">
    <g>
      <path
        d="M30.707,29.293l-8.552-8.552a12.007,12.007,0,1,0-1.415,1.414l8.553,8.552a1,1,0,0,0,1.414-1.414ZM20.069,20.069a10,10,0,1,1,0-14.145A10.014,10.014,0,0,1,20.069,20.069Z"
      />
    </g>
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
    size: 20,
    strokeWidth: 0.5,
    viewBox: "0 0 32 32",
  }
);
</script>
