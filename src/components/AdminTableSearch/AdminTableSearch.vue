<template>
  <div class="pl-3 my-4">
    <input
      type="search"
      class="form-control h-10 px-5 w-64 rounded-md shadow"
      @input="isTyping"
      v-model.trim="searchString"
      :placeholder="$t('global.action.search')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";

import debounce from "lodash";

export default defineComponent({
  name: "SltAdminTableSearch",
  setup(_, { emit }) {
    const isTyping = ref(false);
    const searchString = ref("");

    watch(searchString, () =>
      debounce(function () {
        isTyping.value = false;
      })
    );

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

    return {
      searchString,
      isTyping,
    };
  },
});
</script>
