<script lang="ts">
export default {
  name: "SltIconDanger",
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
    strokeWidth: 0,
    viewBox: "0 0 32 32",
  }
);
</script>

<template>
  <icon-wrapper v-bind="props">
    <g>
      <path
        d="M16,22.978a1,1,0,0,1-1-1v-10a1,1,0,0,1,2,0v10A1,1,0,0,1,16,22.978Zm-1,3a1,1,0,1,0,1-1A1,1,0,0,0,15,25.978Zm15.893,3.573-14-28.042a1.039,1.039,0,0,0-1.788,0l-14,28.042A1,1,0,0,0,2,31H30A1,1,0,0,0,30.893,29.551ZM16,4.2,28.381,29H3.619Z"
    /></g>
  </icon-wrapper>
</template>
