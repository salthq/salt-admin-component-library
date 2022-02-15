<template>
  <icon-wrapper v-bind="props">
    <g>
      <path
        d="M26,16V28a3,3,0,0,1-3,3H4a3,3,0,0,1-3-3V9A3,3,0,0,1,4,6H16a1,1,0,0,1,0,2H4A1,1,0,0,0,3,9V28a1,1,0,0,0,1,1H23a1,1,0,0,0,1-1V16a1,1,0,0,1,2,0ZM31,2v9a1,1,0,0,1-1.707.707L27,9.414,15.707,20.707a1,1,0,0,1-1.414,0l-3.121-3.121a1,1,0,0,1,0-1.414L22.465,4.879,20.293,2.707A1,1,0,0,1,21,1h9A1,1,0,0,1,31,2ZM29,3H23.414l1.172,1.172a1,1,0,0,1,0,1.414L13.293,16.879,15,18.586,26.293,7.293a1,1,0,0,1,1.414,0L29,8.586Z"
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
    size: 28,
    strokeWidth: 0,
    viewBox: "0 0 32 32",
  }
);
</script>
