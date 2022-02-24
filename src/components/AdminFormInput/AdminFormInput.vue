<script lang="ts">
export default {
  name: "SltAdminFormInput",
};
</script>

<script setup lang="ts">
import { ref, watch } from "vue";

import AdminFormItemWrapper from "../AdminFormItemWrapper/AdminFormItemWrapper.vue";

type InputType = "date" | "email" | "number" | "text" | "tel" | "url";

const emit = defineEmits<{
  (event: "input", value: string | number): void;
}>();

const props = withDefaults(
  defineProps<{
    error?: string;
    inputId: string;
    loading?: boolean;
    label?: string;
    info?: string;
    readonly?: boolean;
    required?: boolean;
    type?: InputType;
    value?: string | number;
  }>(),
  {
    type: "text",
    value: "",
  }
);

const inputValue = ref(props.value);

watch(inputValue, () => {
  emit("input", inputValue.value);
});
</script>

<template>
  <admin-form-item-wrapper
    :input-id="inputId"
    :label="label"
    :info="info"
    :required="required"
  >
    <div class="max-w-4xl rounded-md shadow-sm">
      <input
        v-bind="$attrs"
        v-if="!loading"
        :id="inputId"
        :name="inputId"
        :required="required"
        :readonly="readonly"
        :type="type"
        v-model="inputValue"
        class="block w-full shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 sm:text-sm sm:leading-5 transition duration-150 ease-in-out"
        :class="{ 'border-red-500': error }"
      />
      <!-- Loading -->
      <span
        class="input-loading block w-full shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 sm:text-sm sm:leading-5 transition duration-150 ease-in-out"
        v-if="loading"
      >
        Loading...
      </span>
    </div>
    <!-- Error -->
    <span
      v-if="error"
      data-test="error"
      class="block mt-1 text-sm text-red-600"
      >{{ error }}</span
    >
  </admin-form-item-wrapper>
</template>
