<template>
  <div class="pr-6">
    <h3
      data-test="form-heading-title"
      class="text-xl leading-6 font-medium text-gray-900"
    >
      {{ title }}
    </h3>
    <p
      data-test="form-heading-text"
      class="mt-1 text-sm leading-5 text-gray-500"
    >
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
