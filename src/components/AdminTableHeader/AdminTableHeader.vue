<template>
  <th
    class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 text-gray-600 uppercase tracking-wider"
    @click="$emit('click')"
    :class="{ 'cursor-pointer hover:bg-gray-100': sort }"
  >
    <div class="flex items-center">
      <div class="inline-block pr-3" v-if="sort">
        <span><icon-sort-up :fill="iconSortUpFill" /></span>
        <span><icon-sort-down :fill="iconSortDownFill" /></span>
      </div>
      <span v-if="label">{{ label }}</span>
      <span v-else><slot /></span>
    </div>
  </th>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import state from "../../state/adminTableState";

import IconSortUp from "../../components/IconSortUp/IconSortUp.vue";
import IconSortDown from "../../components/IconSortDown/IconSortDown.vue";

export default defineComponent({
  name: "SltAdminTableHeader",
  props: {
    label: {
      type: String,
      required: false,
    },
    sort: {
      type: String,
      required: false,
      default: null,
    },
  },
  components: { IconSortUp, IconSortDown },
  setup(props) {
    const activeSortFill = computed(() => {
      return getComputedStyle(document.documentElement).getPropertyValue(
        "--primary-700"
      );
    });

    const iconSortUpFill = computed(() => {
      return state.activeSortState === "desc" &&
        state.activeSortColumn === props.sort
        ? activeSortFill
        : "#CFD3E1";
    });

    const iconSortDownFill = computed(() => {
      return state.activeSortState === "asc" &&
        state.activeSortColumn === props.sort
        ? activeSortFill
        : "#CFD3E1";
    });

    return {
      iconSortUpFill,
      iconSortDownFill,
    };
  },
});
</script>
