<script lang="ts">
export default {
  name: "SltAdminLinkButton",
};
</script>

<script setup lang="ts">
import { computed } from "vue";
import AppInertiaLink from "../AppInertiaLink.vue";

type variationType = "primary" | "danger" | "secondary" | "white";

const props = withDefaults(
  defineProps<{
    link: string;
    method?: string;
    text: string;
    variation?: variationType;
  }>(),
  {
    method: "get",
    variation: "primary",
  }
);

const classes = computed(() => {
  const variationClasses = {
    primary:
      "admin-link-primary text-white border-transparent bg-primary-700 hover:opacity-75",
    secondary:
      "admin-link-secondary text-primary-700 border-primary-700 bg-white hover:opacity-75",
    white: "admin-link-white text-gray-700 bg-white hover:bg-gray-100",
    danger:
      "admin-link-danger text-white border-transparent bg-red-600 hover:bg-red-500",
  }[props.variation];

  return (
    variationClasses +
    " " +
    "admin-link inline-flex text-center justify-center py-2 px-4 border text-sm leading-5 font-medium rounded-md transition duration-150 ease-in-out "
  );
});
</script>

<template>
  <span class="self-start rounded-md shadow-sm">
    <app-inertia-link :class="classes" :href="link">
      {{ text }}
    </app-inertia-link>
  </span>
</template>
