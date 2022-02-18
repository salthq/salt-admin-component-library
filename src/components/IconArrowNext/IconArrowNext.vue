<script lang="ts">
export default {
  name: "SltIconArrowNext",
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
    size: 16,
    strokeWidth: 0,
    viewBox: "0 0 32 32",
  }
);
</script>

<template>
  <icon-wrapper v-bind="props">
    <g>
      <path
        fill-rule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      />
    </g>
  </icon-wrapper>
</template>
