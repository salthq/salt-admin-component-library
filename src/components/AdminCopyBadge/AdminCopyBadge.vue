<template>
  <button
    type="button"
    class="inline-flex items-center px-2 py-1 cursor-pointer hover:opacity-75 my-1 rounded-md text-sm leading-5 bg-gray-100 text-primary-700"
    @click="emitCopy($slots.text)"
    title="Copy"
  >
    <span v-if="$slots.label" class="font-bold">
      <slot name="label"></slot>:
    </span>

    <span v-if="$slots.text" class="ml-3 font-medium mr-2">
      <slot name="text"></slot>
    </span>
    <icon-copy />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconCopy from "../IconCopy/IconCopy.vue";

export default defineComponent({
  name: "SltAdminCopyBadge",
  components: {
    IconCopy,
  },
  emits: {
    copyText(payload: string) {
      return payload.length > 0;
    },
  },
  methods: {
    emitCopy(text: string) {
      this.$emit("copyText", text);
    },
  },
});
</script>
