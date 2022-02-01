<template>
  <div class="bg-white rounded-lg shadow">
    <div
      v-if="!!$slots.title"
      class="mx-auto border-b border-gray-200 py-6 px-4 sm:px-6 lg:px-8"
    >
      <div class="w-full flex justify-between items-center">
        <div>
          <slot name="title"></slot>
        </div>
        <div class="space-x-2" v-if="!!$slots.actions">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>

    <div :class="paddingClasses" v-if="!!$slots.default">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "SltAdminCardWrapper",
  props: {
    hasPadding: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const paddingClasses = computed(() => ({
      "py-6 px-4 sm:px-6 lg:px-8": props.hasPadding,
    }));

    return {
      paddingClasses,
    };
  },
});
</script>
