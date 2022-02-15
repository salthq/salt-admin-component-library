<template>
  <admin-form-item-wrapper
    :input-id="inputId"
    :label="label"
    :info="info"
    :required="required"
  >
    <div class="max-w-full rounded-md shadow-sm relative">
      <textarea
        :id="inputId"
        :name="inputId"
        :required="required"
        :readonly="readonly"
        :placeholder="placeholder"
        v-model="inputValue"
        @input="emitInput"
        :rows="rows"
        class="block w-full shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 sm:text-sm sm:leading-5 transition duration-150 ease-in-out"
      ></textarea>
      <span
        v-if="inputValue && maxLength"
        class="absolute"
        :class="{ 'text-red-500': inputValue.length > maxLength }"
        style="bottom: 0px; right: 15px"
        data-test="character-limit"
        >{{ inputValue.length }}/{{ maxLength }}</span
      >
    </div>
  </admin-form-item-wrapper>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import AdminFormItemWrapper from "../AdminFormItemWrapper.vue";

const emit = defineEmits<{
  (event: "input", value: string): void;
}>();

const props = withDefaults(
  defineProps<{
    inputId: string;
    label: string;
    info?: string;
    maxLength?: number;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    rows?: number;
    value?: string;
  }>(),
  {
    rows: 10,
  }
);

const inputValue = ref("");

const emitInput = () => {
  emit("input", inputValue.value);
};

onMounted(() => {
  inputValue.value = props.value ?? "";
});
</script>
