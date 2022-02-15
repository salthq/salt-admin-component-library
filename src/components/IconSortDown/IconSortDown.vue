<template>
  <icon-wrapper v-bind="props">
    <g>
      <path
        d="m85.83.74999958c3.170495-.00103831 6.0295291 1.90759859 7.2442863 4.83614847 1.2147573 2.92854988.5460893 6.30047125-1.6942863 8.54385195l-38.83 38.87c-1.4652643 1.4692502-3.454983 2.2950023-5.53 2.2950023s-4.0647357-.8257521-5.53-2.2950023l-38.86-38.87c-2.24037557-2.2433807-2.90904357-5.61530207-1.69428633-8.54385195s4.07379134-4.83718678 7.24428633-4.83614847z"
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
    fill: "#CFD3E1", // Light grey (default unsorted state)
    size: 10,
    strokeWidth: 0,
    viewBox: "0 0 94 56",
  }
);
</script>
