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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SltAdminFormItemWrapper",
  props: {
    inputId: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    info: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
