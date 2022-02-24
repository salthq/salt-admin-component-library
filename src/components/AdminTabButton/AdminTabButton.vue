<script lang="ts">
export default {
  name: "SltAdminTabButton",
};
</script>

<script setup lang="ts">
const props = defineProps<{
  active?: boolean;
  label: string;
  tab: string;
}>();

const emit = defineEmits<{
  (event: "selected", value: string): void;
}>();

const setActiveTab = () => {
  emit("selected", props.tab);
};
</script>

<template>
  <button
    @click="setActiveTab"
    :class="{
      'active-tab border-primary-700 text-primary-700 cursor-default': active,
      'inactive-tab cursor-pointer': !active,
    }"
    class="whitespace-nowrap py-4 px-4 hover:border-primary-700 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-primary-700"
  >
    {{ label }}
  </button>
</template>
