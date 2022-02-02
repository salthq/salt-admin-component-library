<template>
  <div class="relative flex items-start py-4">
    <div class="absolute flex items-center">
      <span
        role="checkbox"
        tabindex="0"
        @click="toggleChecked"
        :aria-checked="checked"
        class="form-toggle relative inline-block flex-shrink-0 h-6 w-10 border-2 rounded-full transition-colors ease-in-out duration-200 focus:outline-none focus:ring"
        :class="{
          'bg-primary-700  border-primary-700': checked,
          'bg-gray-200  border-gray-200': !checked,
          'cursor-pointer ': !readonly,
        }"
      >
        <span
          aria-hidden="true"
          class="translate-x-0 relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
          :class="{
            'translate-x-4': checked,
            'translate-x-0': !checked,
          }"
        >
          <span
            class="ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            :class="{
              'opacity-0 ease-out duration-100': checked,
              'opacity-100 ease-in duration-200': !checked,
            }"
          >
            <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
              <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span
            class="ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            :class="{
              'opacity-100 ease-in duration-200': checked,
              'opacity-0 ease-out duration-100': !checked,
            }"
          >
            <svg
              class="h-3 w-3 text-primary-700"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path
                d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
              />
            </svg>
          </span>
        </span>
      </span>
    </div>
    <div class="pl-16 text-sm leading-5">
      <label class="font-medium text-gray-700">
        {{ label }}
      </label>
      <p v-if="info" class="text-gray-500">
        {{ info }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "SltAdminFormToggle",
  props: {
    inputID: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    info: {
      type: String,
    },
    value: {
      type: Boolean,
      required: false,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
  },
  setup(props, { emit }) {
    props = reactive(props);

    const state = reactive({
      checked: props.value ? props.value : false,
    });

    const toggleChecked = () => {
      if (!props.readonly) {
        state.checked = !state.checked;
        emit("input", state.checked);
      }
    };

    return {
      ...toRefs(state),
      toggleChecked,
    };
  },
});
</script>
