<script lang="ts">
export default {
  name: "SltAdminDropdownList",
};
</script>

<script setup lang="ts">
import { computed, onMounted, reactive, toRefs } from "vue";

import IconRemove from "../../components/IconRemove/IconRemove.vue";

// Composables
import searchWithFuse from "../../composables/dropdown/searchWithFuse";

// Types
import { DropdownListItem } from "../../types/adminDropdownList";

const emit = defineEmits<{
  (event: "on-item-reset"): void;
  (event: "on-item-select", item: DropdownListItem | null): void;
}>();

const props = withDefaults(
  defineProps<{
    error?: string;
    existingSelection?: DropdownListItem;
    itemList: Array<DropdownListItem>;
    placeholder?: string;
    showSelection?: boolean;
  }>(),
  {
    placeholder: "Select or search...",
    showSelection: true,
  }
);

interface AdminDropdownListState {
  inputActive: boolean;
  inputValue: string;
  selectedItem: DropdownListItem | null;
  uniqueId: string;
}

const state: AdminDropdownListState = reactive({
  inputActive: false,
  inputValue: "",
  selectedItem: null,
  uniqueId: "dropdown_" + (Math.random() * 1e32).toString(36),
});

const { inputValue, selectedItem, uniqueId } = toRefs(state);

const { searchList } = searchWithFuse();

const noResultsFound = computed(() => {
  return searchDropdownList.value.length < 1;
});

const searchDropdownList = computed(() => {
  return searchList(state.inputValue, props.itemList);
});

const showItemList = computed(() => {
  return state.inputActive;
});

const resetSelection = () => {
  state.selectedItem = null;
  state.inputActive = false;
  emit("on-item-reset");
};

const selectItem = (item: DropdownListItem) => {
  state.selectedItem = item;
  state.inputActive = false;
  state.inputValue = "";
  emit("on-item-select", item);
};

const setInputActive = () => {
  state.inputActive = true;
};

onMounted(() => {
  if (props.existingSelection) state.selectedItem = props.existingSelection;
  const thisElement = document.getElementById(state.uniqueId);

  document.addEventListener("click", (event) => {
    if (event.target instanceof Element) {
      const isClickInside = thisElement?.contains(event.target);
      if (!isClickInside && state.inputActive) {
        state.inputActive = false;
        if (!state.selectedItem) {
          emit("on-item-select", null);
        }
      }
    }
  });
});
</script>

<template>
  <div>
    <div
      :id="uniqueId"
      class="dropdown relative flex flex-row-reverse md:flex-col"
    >
      <!-- Dropdown menu button/search input -->
      <div class="relative" v-if="!selectedItem || !showSelection">
        <input
          @click="setInputActive"
          ref="dropdowninput"
          v-model="inputValue"
          type="search"
          inputmode="search"
          :placeholder="placeholder"
          class="w-full py-2 pl-3 border rounded-md"
          :class="{
            'border-gray-300': !props.error,
            'border-red-500': props.error,
          }"
        />
        <span
          class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <!-- Heroicon name: solid/selector -->
          <svg
            class="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </div>

      <!-- Selected item display -->
      <div
        v-else
        class="dropdown-selected w-full py-2 pl-3 border rounded-md cursor-pointer"
        :class="{
          'border-gray-300': !props.error,
          'border-red-500': props.error,
        }"
      >
        <div @click="setInputActive">
          <div v-if="showSelection" class="flex justify-between">
            <span data-test="selected-item-name">{{ selectedItem?.name }}</span>
            <span
              data-test="reset-selection"
              class="cursor-pointer inline-block px-2 hover:text-red-600"
              style="padding-top: 0.25rem"
              @click="resetSelection"
            >
              <icon-remove />
            </span>
          </div>
        </div>
      </div>

      <!-- Dropdown item list -->
      <div
        v-show="showItemList"
        class="dropdown-list w-full rounded-md border bg-white border-gray-300 shadow-lg z-10 absolute overflow-y-auto mb-12 mt-0 md:mt-12 md:mb-0"
        data-test="dropdown-list"
        style="max-height: 15rem"
      >
        <div
          v-for="item in searchDropdownList"
          :key="item.id"
          :title="item.name"
          @click="selectItem(item)"
          class="pl-2 py-1 dropdown-item cursor-pointer hover:bg-blue-500 hover:text-white z-10 relative overflow-y-scroll"
          data-test="dropdown-list-item"
        >
          <span class="">{{ item.name }}</span>

          <slot name="option"></slot>
        </div>
        <slot name="noResult" v-if="noResultsFound">
          <div class="pl-2 py-1 italic">No results found</div>
        </slot>
      </div>
    </div>
  </div>
</template>
