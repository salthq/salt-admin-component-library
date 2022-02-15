<template>
  <icon-wrapper v-bind="props">
    <g
      ><path
        d="M26,16V28a3,3,0,0,1-3,3H4a3,3,0,0,1-3-3V9A3,3,0,0,1,4,6H16a1,1,0,0,1,0,2H4A1,1,0,0,0,3,9V28a1,1,0,0,0,1,1H23a1,1,0,0,0,1-1V16a1,1,0,0,1,2,0ZM30.714,5.7,19.528,17.114l2.179,2.179A1,1,0,0,1,21,21H12a1,1,0,0,1-1-1V11a1,1,0,0,1,1.707-.707L15,12.586,26.293,1.293a1,1,0,0,1,1.414,0l3,3A1,1,0,0,1,30.714,5.7Zm-2.121-.693L27,3.414,15.707,14.707a1,1,0,0,1-1.414,0L13,13.414V19h5.586l-1.172-1.172a1,1,0,0,1-.007-1.407Z"
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
