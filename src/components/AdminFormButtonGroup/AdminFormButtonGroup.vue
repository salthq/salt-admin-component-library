<script lang="ts">
export default {
  name: "SltAdminFormButtonGroup",
};
</script>

<script setup lang="ts">
import { ref } from "vue";

// Types
import { FormButtonGroupItem } from "@/types";

const emit = defineEmits<{
  (event: "selected", value: FormButtonGroupItem): void;
}>();

const props = defineProps<{
  inputId: string;
  label: string;
  info?: string;
  value?: FormButtonGroupItem;
  options: Array<FormButtonGroupItem>;
}>();

const selectedOption = ref<FormButtonGroupItem>(
  props.value ?? props.options[0]
);

const setChecked = (value: FormButtonGroupItem) => {
  selectedOption.value = value;
  emit("selected", selectedOption.value);
};
</script>

<template>
  <div class="flex flex-col text-sm items-start">
    <label for="comments" class="font-medium text-gray-700 mb-1">
      {{ label }}
    </label>
    <span class="relative z-0 inline-flex">
      <button
        :key="option.value"
        v-for="(option, index) in options"
        type="button"
        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium hover:opacity-75 transition ease-in-out duration-150"
        :class="{
          'bg-primary-700  border-primary-700 text-white':
            selectedOption.value === option.value,
          ' bg-white  border-gray-200 text-gray-700':
            selectedOption.value !== option.value,
          'rounded-l-md': index === 0,
          'rounded-r-md': index === options.length - 1,
        }"
        @click="setChecked(option)"
      >
        {{ option.label }}
      </button>
    </span>

    <div class="text-sm leading-5">
      <p v-if="info" class="text-gray-500">
        {{ info }}
      </p>
    </div>
  </div>
</template>
