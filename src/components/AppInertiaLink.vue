<template>
  <Link v-bind="$props" @click="$emit('click')" :as="inertiaAs">
    <slot></slot>
  </Link>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { Link } from "@inertiajs/inertia-vue3";

const props = withDefaults(
  defineProps<{
    data?: Record<string, unknown>;
    headers?: Record<string, unknown>;
    href: string;
    link?: string;
    method?: string;
    newTab?: boolean;
    only?: Array<any>;
    preserveScroll?: boolean;
    preserveState?: boolean;
    replace?: boolean;
  }>(),
  { headers: () => ({}), method: "get", only: () => [] }
);

const inertiaAs = computed(() => {
  return props.method.toLowerCase() !== "get" ? "button" : "a";
});
</script>
