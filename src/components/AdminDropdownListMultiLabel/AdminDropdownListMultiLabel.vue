<template>
  <div class="w-full flex">
    <div class="flex-grow">
      <div
        :id="uniqueId"
        class="dropdown relative flex flex-col-reverse md:flex-col"
      >
        <!-- Dropdown menu button/search input -->
        <div
          class="relative"
          v-if="
            !selectedItem ||
            Object.keys(selectedItem).length === 0 ||
            !showSelection
          "
        >
          <input
            @click="inputActive = true"
            ref="dropdowninput"
            v-model.trim="inputValue"
            type="text"
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
          v-if="
            selectedItem &&
            Object.keys(selectedItem).length !== 0 &&
            showSelection
          "
          class="dropdown-selected w-full py-2 pl-3 border bg-white border-gray-300 rounded-md cursor-pointer"
        >
          <div @click="inputActive = true">
            <div v-if="showSelection" class="flex justify-between">
              <span>{{ selectedItemLabel }}</span>
              <span
                class="inline-block cursor-pointer px-2 hover:text-red-600"
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
          class="dropdown-list w-full rounded-md border border-gray-300 shadow-lg z-10 absolute bg-white overflow-y-auto mb-12 mt-0 md:mt-12 md:mb-0"
          style="max-height: 15rem"
        >
          <div
            v-for="item in searchDropdownList"
            :key="item.id"
            :title="item.title"
            @click="selectItem(item)"
            class="pl-2 py-1 dropdown-item cursor-pointer hover:bg-blue-500 hover:text-white z-10 relative overflow-y-auto"
          >
            <div v-if="Array.isArray(label)">
              {{ item.id }}
              <span v-for="labelItem in label" :key="labelItem">
                - {{ item[labelItem] }}
              </span>
            </div>
            <div v-else-if="typeof label === 'string'">
              {{ item.id }} - {{ item[label.toLowerCase()] }}
            </div>
            <span class="">{{ item[itemLabel] }}</span>

            <slot name="option"></slot>
          </div>
          <slot name="noResult" v-if="noResultsFound">
            <div class="pl-2 py-1 italic">No results found</div>
          </slot>
        </div>
      </div>
    </div>
    <admin-button
      type="button"
      v-if="showButton"
      :variation="buttonVariation"
      :label="buttonText"
      class="ml-4 whitespace-nowrap"
      @clicked="submitItem(selectedItem)"
      :disabled="Object.keys(selectedItem).length === 0"
    />
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  watchEffect,
} from "vue";

import searchWithFuse from "../../composables/dropdown/searchWithFuse";

import AdminButton from "../AdminButton/AdminButton.vue";
import IconRemove from "../../components/IconRemove/IconRemove.vue";

export default defineComponent({
  components: {
    AdminButton,
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
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: null,
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
      required: false,
      default: true,
    },
    // Optional boolean for showing the input button on right hand side
    showButton: {
      type: Boolean,
      default: true,
    },
    // Type of visual treatment of button
    buttonVariation: {
      type: String,
      default: "primary",
    },
    // Label text for the button
    buttonText: {
      default: () => {
        return "Select";
      },
    },
    value: {
      required: false,
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
      return searchList(state.inputValue, props.itemList, props.label, true);
    });

    const selectedItemLabel = computed(() => {
      if (props.label) {
        let selectedLabel = state.selectedItem?.id;
        if (Array.isArray(props.label)) {
          for (let i = 0; i < props.label.length; i++) {
            selectedLabel += ` - ${state.selectedItem[props.label[i]]}`;
          }
          return selectedLabel;
        }
        if (typeof props.label === "string") {
          selectedLabel += ` - ${
            state.selectedItem[props.label.toLowerCase()]
          }`;
          return selectedLabel;
        }
      }

      return state.selectedItem[props.itemLabel];
    });

    const showItemList = computed(() => {
      return state.inputActive;
    });

    const itemVisible = (item) => {
      if (!state.inputValue) return true;

      let currentName = item.id;
      let currentInput = state.inputValue.toLowerCase();

      if (Array.isArray(props.label)) {
        for (let i = 0; i < props.label.length; i++) {
          currentName += ` - ${item[props.label[i]].toLowerCase()}`;
        }
        return currentName.includes(currentInput);
      }
      if (typeof props.label === "string") {
        currentName += ` - ${item[props.label].toLowerCase()}`;
        return currentName.includes(currentInput);
      }
    };

    const resetSelection = () => {
      state.selectedItem = {};
      state.inputActive = false;
      emit("on-item-reset", null);
    };

    const selectItem = (item) => {
      state.selectedItem = item;
      state.inputActive = false;
      state.inputValue = "";
      if (!props.showButton) {
        emit("on-item-selected", item);
      }
    };

    const submitItem = (item) => {
      state.inputActive = false;
      state.inputValue = "";
      emit("on-item-selected", item);
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

    watchEffect(() => {
      if (props.value) {
        state.selectItem = props.value;
      }
    });

    return {
      ...toRefs(state),
      noResultsFound,
      itemVisible,
      resetSelection,
      searchDropdownList,
      selectItem,
      selectedItemLabel,
      showItemList,
      submitItem,
    };
  },
});
</script>
