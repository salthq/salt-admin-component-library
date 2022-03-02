<script lang="ts">
export default {
  name: "SltIconArrowPrev",
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
    viewBox: "0 0 20 20",
  }
);
</script>

<template>
  <icon-wrapper v-bind="props">
    <g>
      <path
        fill-rule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clip-rule="evenodd"
      />
    </g>
  </icon-wrapper>
</template>
