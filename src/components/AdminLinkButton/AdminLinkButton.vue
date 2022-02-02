<template>
  <span class="self-start rounded-md shadow-sm">
    <slot name="link" :classes="classes" :link="link" :text="text">
      <a :class="classes" :href="link">
        {{ text }}
      </a>
    </slot>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

type variationType = "primary" | "danger" | "secondary" | "white";

export default defineComponent({
  name: "SltAdminLink",
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: null,
    },
    method: {
      type: String,
      default: "get",
    },
    variation: {
      type: String as PropType<variationType>,
      default: "primary",
      required: false,
    },
  },
  setup(props) {
    const classes = computed(() => {
      const variationClasses = {
        primary:
          "admin-link-primary text-white border-transparent bg-primary-700 hover:opacity-75",
        secondary:
          "admin-link-secondary text-primary-700 border-primary-700 bg-white hover:opacity-75",
        white: "admin-link-white text-gray-700 bg-white hover:bg-gray-100",
        danger:
          "admin-link-danger text-white border-transparent bg-red-600 hover:bg-red-500",
      }[props.variation];

      return (
        variationClasses +
        " " +
        "admin-link inline-flex text-center justify-center py-2 px-4 border text-sm leading-5 font-medium rounded-md transition duration-150 ease-in-out "
      );
    });

    return {
      classes,
    };
  },
});
</script>
