<script lang="ts">
export default {
  name: "SltIconDashboard",
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
        d="M15.276,6.017A15.183,15.183,0,0,0,1,21.4V23a3,3,0,0,0,3,3H28a3,3,0,0,0,3-3V21A14.991,14.991,0,0,0,15.276,6.017ZM29,23a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V21.4A13.186,13.186,0,0,1,15.37,8.015,12.99,12.99,0,0,1,29,21ZM18,21a2,2,0,1,1-3-1.721V17a1,1,0,0,1,2,0v2.279A1.993,1.993,0,0,1,18,21Zm5.778-6.364-.707.707a1,1,0,0,1-1.414-1.414l.707-.707a1,1,0,0,1,1.414,1.414ZM8,21a1,1,0,0,1-1,1H6a1,1,0,0,1,0-2H7A1,1,0,0,1,8,21Zm17-1h1a1,1,0,0,1,0,2H25a1,1,0,0,1,0-2ZM10.343,13.929a1,1,0,0,1-1.414,1.414l-.707-.707a1,1,0,1,1,1.414-1.414ZM15,12V11a1,1,0,1,1,2,0v1a1,1,0,0,1-2,0Z"
      />
    </g>
  </icon-wrapper>
</template>
