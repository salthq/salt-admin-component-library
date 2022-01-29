<template>
  <span
    class="inline-flex items-center px-2 py-1 cursor-pointer hover:opacity-75 my-1 rounded-md text-sm font-medium leading-5"
    :class="variationClasses"
  >
    <span v-if="$slots.label" class="mr-3 italic text-xs text-gray-600">
      <slot name="label"></slot>:
    </span>

    <span v-if="$slots.text" class="text-xs font-medium text-gray-600">
      <slot name="text"></slot>
    </span>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";

export default defineComponent({
  name: "SltAdminBadge",
  props: {
    variation: {
      default: "default",
      validator: (value: string): boolean => {
        return (
          ["default", "success", "warning", "failure"].indexOf(value) !== -1
        );
      },
      required: false,
    },
  },
  setup(props) {
    props = reactive(props);

    const variationClasses = computed(() => ({
      "admin-badge-default bg-gray-200": props.variation === "default",
      "admin-badge-success bg-green-200": props.variation === "success",
      "admin-badge-warning bg-yellow-100": props.variation === "warning",
      "admin-badge-failure bg-red-200": props.variation === "failure",
    }));

    return {
      variationClasses,
    };
  },
});
</script>
