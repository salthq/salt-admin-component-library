<template>
  <Link v-bind="$props" @click="$emit('click')" :as="inertiaAs">
    <slot></slot>
  </Link>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
  props: {
    data: {
      type: Object,
      required: false,
    },
    href: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      default: "get",
    },
    replace: {
      type: Boolean,
      default: false,
    },
    preserveScroll: {
      type: Boolean,
      default: false,
    },
    preserveState: {
      type: Boolean,
      default: null,
    },
    only: {
      type: Array,
      default: () => [],
    },
    headers: {
      type: Object,
      default: () => ({}),
    },
    newTab: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: null,
    },
  },
  components: {
    Link,
  },
  setup(props) {
    const inertiaAs = computed(() => {
      return props.method.toLowerCase() !== "get" ? "button" : "a";
    });

    return {
      inertiaAs,
    };
  },
});
</script>
