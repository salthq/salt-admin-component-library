<script lang="ts">
export default {
  name: "SltIconPlay",
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
    size: 20,
    strokeWidth: 0,
    viewBox: "0 0 32 32",
  }
);
</script>

<template>
  <icon-wrapper v-bind="props">
    <g>
      <path
        d="M2,27.783V4.217A3.187,3.187,0,0,1,6.7,1.391L28.331,13.174a3.227,3.227,0,0,1,0,5.652L6.7,30.609A3.187,3.187,0,0,1,2,27.783ZM4,4.217V27.783a1.187,1.187,0,0,0,1.745,1.07L27.374,17.07a1.225,1.225,0,0,0,0-2.14L5.745,3.147A1.186,1.186,0,0,0,4,4.217Z"
      />
    </g>
  </icon-wrapper>
</template>
