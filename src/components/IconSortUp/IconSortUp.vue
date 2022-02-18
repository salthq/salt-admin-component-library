<script lang="ts">
export default {
  name: "SltIconSortUp",
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
    fill: "#CFD3E1", // Light grey (default unsorted state)
    size: 10,
    strokeWidth: 0,
    viewBox: "0 0 94 56",
  }
);
</script>

<template>
  <icon-wrapper v-bind="props">
    <g>
      <path
        d="m8.18 55.2500078c-3.1686752-.0030101-6.02401056-1.9131285-7.23620392-4.8407724s-.54288787-6.2971427 1.69620392-8.5392354l38.82-38.82c1.4626317-1.47419109 3.4533366-2.30336168 5.53-2.30336168s4.0673683.82917059 5.53 2.30336168l38.82 38.82c2.2558267 2.2310638 2.9400346 5.6040077 1.7318969 8.5377431-1.2081376 2.9337353-4.0691411 4.8467305-7.2418969 4.8422647z"
      />
    </g>
  </icon-wrapper>
</template>
