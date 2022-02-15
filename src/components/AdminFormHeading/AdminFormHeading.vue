<template>
  <div class="pr-6">
    <h3 class="text-xl leading-6 font-medium text-gray-900">
      {{ title }}
    </h3>
    <p class="mt-1 text-sm leading-5 text-gray-500">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string;
    title: string;
  }>(),
  {
    text: "",
  }
);
</script>
