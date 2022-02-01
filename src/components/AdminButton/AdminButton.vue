<template>
  <span class="inline-block rounded-md">
    <button
      :type="type"
      class="inline-flex justify-center items-center py-2 px-4 border text-sm leading-5 font-medium rounded-md shadow-sm transition duration-150 ease-in-out"
      :class="variationClasses"
      :disabled="disabled"
      @click="onClick"
    >
      <component class="mr-2" v-if="icon" :is="icon" :size="24" />

      <div v-if="loading">
        <slot name="loadingPlaceholder">Loading...</slot>
      </div>

      <div class="flex items-center" v-else>
        {{ label }}
      </div>
    </button>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive, ref } from "vue";

import IconArchive from "../Icons/IconArchive/IconArchive.vue";
import IconCopy from "../Icons/IconCopy/IconCopy.vue";

type iconType = "icon-archive" | "icon-copy";
type buttonType = "submit" | "button" | "reset";
type variationType = "primary" | "secondary" | "danger" | "white";

export default defineComponent({
  name: "SltAdminButton",
  components: {
    IconArchive,
    IconCopy,
  },
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    icon: {
      type: String as PropType<iconType>,
      required: false,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: false,
      default: "Save",
    },
    type: {
      type: String as PropType<buttonType>,
      required: false,
      default: "button",
    },
    variation: {
      default: "primary",
      type: String as PropType<variationType>,
      required: false,
    },
  },
  setup(props, { emit, slots }) {
    props = reactive(props);

    const hasIcon = ref(false);

    if (slots.icon && slots.icon().length) {
      hasIcon.value = true;
    }

    return {
      hasIcon,
      variationClasses: computed(() => ({
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
      })),
      onClick() {
        emit("click");
      },
    };
  },
});
</script>
