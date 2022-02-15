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
      />
      <span
        class="input-loading block w-full shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 sm:text-sm sm:leading-5 transition duration-150 ease-in-out"
        v-if="loading"
      >
        Loading...
      </span>
    </div>
  </admin-form-item-wrapper>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

import AdminFormItemWrapper from "../AdminFormItemWrapper.vue";

type InputType = "date" | "email" | "number" | "text" | "tel" | "url";

const emit = defineEmits<{
  (event: "input", value: string): void;
}>();

const props = withDefaults(
  defineProps<{
    inputId: string;
    loading?: boolean;
    label?: string;
    info?: string;
    readonly?: boolean;
    required?: boolean;
    type?: InputType;
    value?: string;
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
