<script lang="ts">
export default {
  name: "SltIconTick",
};
</script>

<template>
  <icon-wrapper v-bind="props">
    <g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.91421 1.41431L3.70711 7.62141L0.5 4.41431L1.91421 3.00009L3.70711 4.79299L8.5 9.29832e-05L9.91421 1.41431Z"
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
    size: 18,
    strokeWidth: 0,
    viewBox: "0 0 10 8",
  }
);
</script>
