<script lang="ts">
export default {
  name: "SltAdminTableSearch",
};
</script>

<script setup lang="ts">
import { onMounted, watch } from "vue";

// Composables
import useDebouncedRef from "../../composables/useDebouncedRef";

const emit = defineEmits<{
  (event: "search", value: string): void;
}>();

const searchString = useDebouncedRef(null, 1000, false);

const emitSearch = () => {
  let query = searchString.value[0];

  if (query !== null) {
    emit("search", query);
  }
};

watch(searchString, () => {
  emitSearch();
});

onMounted(() => {
  const params = new URLSearchParams(location.search);
  searchString.value = params.get("query") ?? null;
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
