<template>
  <button
    type="button"
    class="inline-flex items-center p-2 cursor-pointer hover:opacity-75 rounded-md text-sm leading-5 text-primary-700 bg-gray-100"
    @click="emitRemove"
    :title="text"
  >
    <span v-if="label">{{ label }}:</span>
    <span class="ml-3 font-medium mr-3">{{ text }}</span>
    <icon-remove :size="16" :stroke-width="1" class="mr-1" />
  </button>
</template>

<script setup lang="ts">
import IconRemove from "../IconRemove/IconRemove.vue";

const emit = defineEmits<{
  (event: "remove"): void;
}>();

defineProps<{
  label?: string;
  text: string;
}>();

const emitRemove = () => {
  emit("remove");
};
</script>
