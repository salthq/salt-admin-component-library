<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    :width="size"
    :height="size"
    :fill="fill"
    :stroke-width="strokeWidth"
    preserveAspectRatio="xMidYMid meet"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="text-current stroke-current"
  >
    <slot />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  fill: string;
  size: number;
  strokeWidth: number;
  viewBox: string;
}>();
</script>
