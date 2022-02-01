<template>
  <div class="bg-white rounded-lg shadow">
    <div
      v-if="!!$slots.header"
      class="mx-auto pt-12 pb-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200"
    >
      <slot name="header"></slot>
    </div>

    <div :class="classes" v-if="!!$slots.default">
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
    const classes = computed(() => ({
      "p-6": props.hasPadding,
    }));

    return {
      classes,
    };
  },
});
</script>
