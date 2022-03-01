<script setup lang="ts">
defineProps<{
  error?: string;
  inputId: string;
  label?: string;
  info?: string;
  required?: boolean;
}>();
</script>

<template>
  <div class="max-w-4xl flex flex-col" :class="{ 'pt-4': label }">
    <label
      :for="inputId"
      class="block text-sm font-medium leading-5 text-gray-700"
      :class="{ 'mb-2': !info }"
      v-if="label"
    >
      {{ label }}:
      <span v-if="required" class="required text-red-500 text-sm">*</span>
    </label>
    <p v-if="info" class="mb-2 mt-1 text-sm leading-5 text-gray-500">
      {{ info }}
    </p>
    <div class="sm:col-span-2">
      <slot> </slot>

      <!-- Error -->
      <span
        v-if="error"
        data-test="error"
        class="block mt-1 text-sm text-red-600"
        >{{ error }}</span
      >
    </div>
  </div>
</template>
