<script lang="ts">
export default {
  name: "SltAdminStepItem",
};
</script>

<script setup lang="ts">
import { computed } from "vue";
import AppInertiaLink from "../AppInertiaLink.vue";

type stepStatusType = "completed" | "current" | "upcoming";

const props = defineProps<{
  label: string;
  stepNumber: string;
  stepStatus: stepStatusType;
  url: string;
}>();

const linkClasses = computed(() => {
  return {
    "group border-primary-700 hover:opacity-75 transition ease-in-out duration-150":
      props.stepStatus === "completed",
    "border-primary-700": props.stepStatus === "current",
    "cursor-default group border-gray-200 transition ease-in-out duration-150":
      props.stepStatus === "upcoming",
  };
});

const stepClasses = computed(() => {
  return {
    "text-primary-700 group-hover:opacity-75 transition ease-in-out duration-150":
      props.stepStatus === "completed",
    "text-primary-700": props.stepStatus === "current",
    "text-gray-500 transition ease-in-out duration-150":
      props.stepStatus === "upcoming",
  };
});
</script>

<template>
  <li class="list-none md:flex-1">
    <app-inertia-link
      :href="url ?? ''"
      class="block pl-4 py-2 border-t-4 md:pl-0 md:pt-4 md:pb-0"
      :class="linkClasses"
    >
      <h4 class="text-xs leading-4 font-bold uppercase" :class="stepClasses">
        Step: {{ stepNumber }}
      </h4>

      <span class="text-sm leading-5 font-medium">{{ label }}</span>
    </app-inertia-link>
  </li>
</template>
