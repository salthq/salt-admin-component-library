<script lang="ts">
export default {
  name: "SltAdminTableSearch",
};
</script>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

// Composables
import useDebouncedRef from "../../composables/useDebouncedRef";

const emit = defineEmits<{
  (event: "search", value: string): void;
}>();

const searchString = useDebouncedRef("", 1000, false);

const emitSearch = () => {
  emit("search", searchString.value);
};

watch(searchString, () => {
  emitSearch();
});

onMounted(() => {
  const params = new URLSearchParams(location.search);
  searchString.value = params.get("query") ?? "";
});
</script>

<template>
  <div class="pl-3 my-4">
    <input
      type="search"
      class="form-control h-10 px-5 w-64 rounded-md shadow"
      v-model="searchString"
      placeholder="Search"
    />
  </div>
</template>
