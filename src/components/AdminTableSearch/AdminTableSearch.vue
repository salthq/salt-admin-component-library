<script lang="ts">
export default {
  name: "SltAdminTableSearch",
};
</script>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

const emit = defineEmits<{
  (event: "search", value: string): void;
}>();

const isTyping = ref(false);
const searchString = ref("");

watch(searchString, () => {
  isTyping.value = false;
});

const emitSearch = () => {
  emit("search", searchString.value);
};

watch(isTyping, () => {
  if (isTyping.value === false) {
    emitSearch();
  }
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
      @input="isTyping = true"
      v-model="searchString"
      placeholder="Search"
    />
  </div>
</template>
