<template>
  <div>
    <ul class="flex text-gray-500 text-sm mb-1">
      <li
        class="inline-flex items-center"
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
      >
        <slot
          name="link"
          :breadcrumb="breadcrumb"
          :breadcrumbs="breadcrumbs"
          :index="index"
        >
          <a
            class="hover:underline"
            :class="{ 'text-primary-700': index === breadcrumbs.length - 1 }"
            :href="breadcrumb.url"
            >{{ breadcrumb.title }}</a
          >
        </slot>

        <svg
          class="h-5 w-auto text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          v-if="index !== breadcrumbs.length - 1"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

interface Breadcrumb {
  url: string;
  title: string;
}

/**
 * Test!
 */
export default {
  name: "SltAdminBreadcrumbs",
  props: {
    breadcrumbs: {
      required: true,
      type: Array as PropType<Array<Breadcrumb>>,
    },
  },
};
</script>
