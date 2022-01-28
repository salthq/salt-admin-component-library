<template>
  <span class="inline-block rounded-md">
    <button
      :type="type"
      class="inline-flex justify-center py-2 px-4 border text-sm leading-5 font-medium rounded-md shadow-sm transition duration-150 ease-in-out"
      :class="variationClasses"
      :disabled="disabled"
      @click="onClick"
    >
      <div v-if="loading">
        <slot name="loadingPlaceholder">Loading...</slot>
      </div>

      <div class="flex items-center" v-else>
        <span class="mr-1" v-if="!!$slots.icon">
          <slot name="icon"></slot>
        </span>

        {{ label }}
      </div>
    </button>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";

export default defineComponent({
  name: "SltAdminButton",
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: false,
      default: (): string => {
        return "Save";
      },
    },
    type: {
      type: String,
      required: false,
      default: (): string => {
        return "button";
      },
      validator: (value: string): boolean => {
        return ["submit", "button", "reset"].indexOf(value) !== -1;
      },
    },
    variation: {
      default: "primary",
      type: String,
      validator: (value: string): boolean => {
        return (
          ["danger", "primary", "secondary", "white"].indexOf(value) !== -1
        );
      },
      required: false,
    },
  },
  setup(props, { emit }) {
    props = reactive(props);
    return {
      variationClasses: computed(() => ({
        "admin-button-primary text-white border-transparent bg-primary-700 hover:opacity-75":
          props.variation == "primary" && !props.disabled,
        "admin-button-secondary text-primary-700 border-primary-700 bg-white hover:opacity-75":
          props.variation == "secondary" && !props.disabled,
        "admin-button-white text-gray-700 bg-white hover:bg-gray-100":
          props.variation == "white" && !props.disabled,
        "admin-button-danger text-white border-transparent bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring active:bg-red-700":
          props.variation == "danger" && !props.disabled,
        "admin-button-disabled bg-gray-200 text-white cursor-none border-transparent":
          props.disabled,
      })),
      onClick() {
        emit("click");
      },
    };
  },
});
</script>
