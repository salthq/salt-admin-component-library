<template>
  <button
    type="button"
    class="inline-flex items-center px-2 py-1 cursor-pointer hover:opacity-75 my-1 rounded-md text-sm leading-5 bg-gray-100 text-primary-700"
    @click="emitCopy(text)"
    title="Copy"
  >
    <span v-if="$slots.label" class="font-bold">
      <slot name="label"></slot>:
    </span>

    <span class="ml-3 font-medium mr-2">
      {{ text }}
    </span>
    <icon-copy />
  </button>
</template>

<script setup lang="ts">
import IconCopy from "../IconCopy/IconCopy.vue";

defineProps<{
  text: string;
}>();

const emit = defineEmits<{
  (event: "copyText", text: string): void;
}>();

const emitCopy = (text: string) => {
  emit("copyText", text);
};
</script>
