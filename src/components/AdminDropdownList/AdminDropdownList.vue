<template>
  <div>
    <div
      :id="uniqueId"
      class="dropdown relative flex flex-row-reverse md:flex-col"
    >
      <!-- Dropdown menu button/search input -->
      <div
        class="relative"
        v-if="Object.keys(selectedItem).length === 0 || !showSelection"
      >
        <input
          @click="inputActive = true"
          ref="dropdowninput"
          v-model.trim="inputValue"
          type="search"
          inputmode="search"
          :placeholder="placeholder"
          class="w-full py-2 pl-3 border border-gray-300 rounded-md"
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
        class="dropdown-selected w-full py-2 pl-3 border border-gray-300 rounded-md cursor-pointer"
      >
        <div @click="inputActive = true">
          <div v-if="showSelection" class="flex justify-between">
            <span>{{ selectedItem[itemLabel] }}</span>
            <span
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
        style="max-height: 15rem"
      >
        <div
          v-for="item in searchDropdownList"
          :key="item[itemIdentifier]"
          :title="item[itemLabel]"
          @click="selectItem(item)"
          class="pl-2 py-1 dropdown-item cursor-pointer hover:bg-blue-500 hover:text-white z-10 relative overflow-y-scroll"
        >
          <span class="">{{ item[itemLabel] }}</span>

          <slot name="option"></slot>
        </div>
        <slot name="noResult" v-if="noResultsFound">
          <div class="pl-2 py-1 italic">No results found</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  reactive,
  toRefs,
} from "vue";

import searchWithFuse from "../../composables/dropdown/searchWithFuse";

import IconRemove from "../../components/IconRemove/IconRemove.vue";

export default defineComponent({
  components: {
    IconRemove,
  },
  props: {
    // The unique field which identifies each item in the list
    itemIdentifier: {
      required: false,
      default: "id",
    },
    // The field to be used to display each item
    itemLabel: {
      type: String,
      required: false,
      default: "name",
    },
    // The list of items displayed when the dropdown is activated
    itemList: {
      type: Array as PropType<Array<string>>,
      required: true,
    },
    // The text shown when the dropdown input is inactive and nothing has been selected
    placeholder: {
      type: String,
      required: false,
      default: "Select or search...",
    },
    // The optional existing selection from a prior session
    existingSelection: {
      type: Object,
      required: false,
    },
    // Optional boolean for showing selection (input) or not
    showSelection: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      inputActive: false,
      inputValue: "",
      selectedItem: {},
      uniqueId: "dropdown_" + (Math.random() * 1e32).toString(36),
    });

    const { searchList } = searchWithFuse();

    const noResultsFound = computed(() => {
      return searchDropdownList.value.length < 1;
    });

    const searchDropdownList = computed(() => {
      return searchList(state.inputValue, props.itemList, props.itemLabel);
    });

    const showItemList = computed(() => {
      return state.inputActive;
    });

    const itemVisible = (item: any) => {
      if (!state.inputValue) return true;

      let currentName = item[props.itemLabel].toLowerCase();
      let currentInput = state.inputValue.toLowerCase();
      return currentName.includes(currentInput);
    };

    const resetSelection = () => {
      state.selectedItem = {};
      state.inputActive = false;
      emit("on-item-reset", "");
    };

    const selectItem = (item: Record<string, unknown>) => {
      state.selectedItem = item;
      state.inputActive = false;
      state.inputValue = "";
      emit("on-item-select", item);
    };

    onMounted(() => {
      if (props.existingSelection) state.selectedItem = props.existingSelection;
      const thisElement = document.getElementById(state.uniqueId);

      document.addEventListener("click", (event) => {
        if (event.target instanceof Element) {
          const isClickInside = thisElement?.contains(event.target);
          if (!isClickInside && state.inputActive) {
            state.inputActive = false;
            if (Object.keys(state.selectedItem).length === 0) {
              emit("on-item-selected", "");
            }
          }
        }
      });
    });

    return {
      ...toRefs(state),
      itemVisible,
      noResultsFound,
      resetSelection,
      selectItem,
      searchDropdownList,
      showItemList,
    };
  },
});
</script>
