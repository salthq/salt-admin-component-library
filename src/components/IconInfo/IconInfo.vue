<script lang="ts">
export default {
  name: "SltIconInfo",
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
    size: 28,
    strokeWidth: 0,
    viewBox: "0 0 30 30",
  }
);
</script>

<template>
  <icon-wrapper v-bind="props">
    <path
      d="m16 24c-.5522847 0-1-.4477153-1-1v-10c0-.5522847.4477153-1 1-1s1 .4477153 1 1v10c0 .5522847-.4477153 1-1 1zm1-15c0 .26521649-.1053568.5195704-.2928932.70710678s-.4418903.29289322-.7071068.29289322c-.5522847 0-1-.44771525-1-1s.4477153-1 1-1 1 .44771525 1 1zm-1-8c-8.28427125 0-15 6.71572875-15 15 0 8.2842712 6.71572875 15 15 15 8.2842712 0 15-6.7157288 15-15-.0093685-8.28038757-6.7196124-14.99063148-15-15zm0 28c-7.17970175 0-13-5.8202983-13-13 0-7.17970175 5.82029825-13 13-13 7.1797017 0 13 5.82029825 13 13-.008266 7.1762751-5.8237249 12.991734-13 13z"
      transform="translate(-1 -1)"
    />
  </icon-wrapper>
</template>
