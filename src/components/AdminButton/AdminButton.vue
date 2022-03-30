<script lang="ts">
export default {
  name: "SltAdminButton",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

import IconArchive from "../IconArchive/IconArchive.vue";
import IconCopy from "../IconCopy/IconCopy.vue";

type iconType = "IconArchive" | "IconCopy";
type buttonType = "submit" | "button" | "reset";
type variationType = "primary" | "secondary" | "danger" | "white";

const emit = defineEmits<{
  (event: "clicked"): void;
}>();

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    icon?: iconType;
    loading?: boolean;
    label?: string;
    type?: buttonType;
    variation?: variationType;
  }>(),
  {
    disabled: false,
    loading: false,
    label: "Save",
    type: "button",
    variation: "primary",
  }
);

const iconComponent = computed(() => {
  if (props.icon) {
    return {
      IconArchive: IconArchive,
      IconCopy: IconCopy,
    }[props.icon];
  }
  return null;
});

const variationClasses = computed(() => ({
  "admin-button-primary text-white border-transparent bg-primary-700 hover:opacity-75":
    props.variation === "primary" && !props.disabled,
  "admin-button-secondary text-primary-700 border-primary-700 bg-white hover:opacity-75":
    props.variation === "secondary" && !props.disabled,
  "admin-button-white text-gray-700 bg-white hover:bg-gray-100":
    props.variation === "white" && !props.disabled,
  "admin-button-danger text-white border-transparent bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring active:bg-red-700":
    props.variation === "danger" && !props.disabled,
  "admin-button-disabled bg-gray-200 text-white cursor-none border-transparent":
    props.disabled,
}));

const onClick = () => {
  emit("clicked");
};
</script>

<template>
  <span class="inline-block rounded-md">
    <button
      :type="type"
      class="inline-flex justify-center items-center py-2 px-4 border text-sm leading-5 font-medium rounded-md shadow-sm transition duration-150 ease-in-out"
      :class="variationClasses"
      :disabled="disabled"
      @click="onClick"
    >
      <component class="mr-2" v-if="icon" :is="iconComponent" :size="24" />

      <div v-if="loading">
        <slot name="loadingPlaceholder">Loading...</slot>
      </div>

      <div class="flex items-center" v-else>
        {{ label }}
      </div>
    </button>
  </span>
</template>
