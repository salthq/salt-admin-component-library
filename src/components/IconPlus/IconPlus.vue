<script lang="ts">
export default {
  name: "SltIconPlus",
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
    viewBox: "0 0 32 32",
  }
);
</script>

<template>
  <icon-wrapper v-bind="props">
    <g>
      <path
        d="M16,1A15,15,0,1,0,31,16,15.017,15.017,0,0,0,16,1Zm0,28A13,13,0,1,1,29,16,13.015,13.015,0,0,1,16,29Zm6-13a1,1,0,0,1-1,1H17v4a1,1,0,0,1-2,0V17H11a1,1,0,0,1,0-2h4V11a1,1,0,0,1,2,0v4h4A1,1,0,0,1,22,16Z"
      />
    </g>
  </icon-wrapper>
</template>
