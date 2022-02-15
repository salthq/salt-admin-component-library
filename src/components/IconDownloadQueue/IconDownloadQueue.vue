<template>
  <icon-wrapper v-bind="props">
    <g id="download_queue" data-name="download queue"
      ><path
        d="M8.707,23.294a1,1,0,0,1,0,1.414l-3,3a1,1,0,0,1-1.416,0l-3-3a1,1,0,1,1,1.414-1.414L4,24.587V19a1,1,0,0,1,2,0v5.587l1.293-1.293A1,1,0,0,1,8.707,23.294ZM30,22H13a1,1,0,0,0,0,2H30a1,1,0,0,0,0-2ZM7.293,9.294,6,10.587V5A1,1,0,0,0,4,5v5.587L2.707,9.294a1,1,0,0,0-1.414,1.414l3,3a1,1,0,0,0,1.416,0l3-3A1,1,0,0,0,7.293,9.294ZM13,10H30a1,1,0,0,0,0-2H13a1,1,0,0,0,0,2Z"
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
