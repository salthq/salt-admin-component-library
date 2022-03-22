<script lang="ts">
export default {
  name: "SltAdminFormDatePicker",
};
</script>

<template>
  <admin-form-item-wrapper
    :input-id="inputId"
    :label="label"
    :required="required"
  >
    <DatePicker
      :mode="mode"
      class="block cursor-pointer max-w-6xl bg-white border rounded-md shadow-sm appearance-none text-gray-700 sm:leading-5 transition duration-150 ease-in-out"
      v-model="date"
      :is-inline="false"
      :is-range="range"
      :max-date="!futureDatesAllowed ? new Date() : null"
      :min-date="!pastDatesAllowed ? new Date() : null"
      is24hr
    >
      <template v-slot="{ inputValue, inputEvents }">
        <div v-if="range" class="flex justify-center items-center">
          <input
            :value="inputValue.start"
            v-on="inputEvents.start"
            class="px-2 py-4 rounded focus:outline-none focus:border-primary-300 w-full"
          />
          <svg
            class="w-10 h-10 mx-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          <input
            :value="inputValue.end"
            v-on="inputEvents.end"
            class="px-2 py-4 rounded focus:outline-none focus:border-primary-300 w-full"
          />
        </div>
        <div v-else>
          <input
            class="bg-whitepx-2 py-4 px-2 w-full rounded"
            :value="inputValue"
            v-on="inputEvents"
          />
        </div>
      </template>
    </DatePicker>
  </admin-form-item-wrapper>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

import AdminFormItemWrapper from "../AdminFormItemWrapper/AdminFormItemWrapper.vue";

// V-calendar
import "v-calendar/dist/style.css";
import { DatePicker } from "v-calendar";

const emit = defineEmits<{
  (event: "input", value: any): void;
}>();

const props = withDefaults(
  defineProps<{
    inputId: string;
    label: string;
    mode?: string;
    range?: boolean;
    readonly?: boolean;
    required?: boolean;
    value?: any;
    pastDatesAllowed?: boolean;
    futureDatesAllowed?: boolean;
  }>(),
  { futureDatesAllowed: true, mode: "date", pastDatesAllowed: true }
);

const date = ref(props.value ?? "");

watch(
  () => date.value,
  () => {
    emit("input", date.value);
  }
);
</script>
