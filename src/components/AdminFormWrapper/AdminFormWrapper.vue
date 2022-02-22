<script lang="ts">
export default {
  name: "SltAdminFormWrapper",
};
</script>

<script setup lang="ts">
import AdminButton from "../AdminButton/AdminButton.vue";

const emit = defineEmits<{
  (e: "submit", event: Event): void;
}>();

withDefaults(
  defineProps<{
    button?: string;
    loading?: boolean;
  }>(),
  {
    button: "Save",
    loading: false,
  }
);

const submit = (event: Event) => {
  emit("submit", event);
};
</script>

<template>
  <form
    class="bg-white shadow container mx-auto sm:rounded-md"
    @submit.prevent="submit"
  >
    <div
      v-if="!!$slots.heading"
      class="mx-auto pt-12 pb-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200"
    >
      <slot name="heading"></slot>
    </div>
    <div
      v-if="!!$slots.fields"
      class="mx-auto py-12 px-4 sm:px-6 lg:px-8"
      :class="{ 'pt-6': $slots.heading }"
    >
      <slot name="fields"></slot>
    </div>

    <div class="sm:px-6 lg:px-8 py-4 bg-gray-100 flex items-center justify-end">
      <slot name="actions">
        <slot name="unsaved-changes"></slot>
        <admin-button
          :disabled="loading"
          type="submit"
          variation="primary"
          :text="button"
        />
      </slot>
    </div>
  </form>
</template>
