<script lang="ts">
export default {
  name: "SltIconRemove",
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
    size: 18,
    strokeWidth: 0.5,
    viewBox: "0 0 32 32",
  }
);
</script>

<template>
  <icon-wrapper v-bind="props">
    <g
      ><path
        d="M30.707,8.293l-7-7A1,1,0,0,0,23,1H9a1,1,0,0,0-.707.293l-7,7A1,1,0,0,0,1,9V23a1,1,0,0,0,.293.707l7,7A1,1,0,0,0,9,31H23a1,1,0,0,0,.707-.293l7-7A1,1,0,0,0,31,23V9A1,1,0,0,0,30.707,8.293ZM29,22.586,22.586,29H9.414L3,22.586V9.414L9.414,3H22.586L29,9.414ZM22.707,9.293a1,1,0,0,1,0,1.414L17.414,16l5.293,5.293a1,1,0,0,1-1.414,1.414L16,17.414l-5.293,5.293a1,1,0,0,1-1.414-1.414L14.586,16,9.293,10.707a1,1,0,0,1,1.414-1.414L16,14.586l5.293-5.293A1,1,0,0,1,22.707,9.293Z"
    /></g>
  </icon-wrapper>
</template>
