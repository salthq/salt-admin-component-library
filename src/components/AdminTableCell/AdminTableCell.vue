<template>
  <td class="px-6 py-4 text-sm leading-5 text-gray-600">
    <slot></slot>
  </td>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SltAdminTableCell",
});
</script>
