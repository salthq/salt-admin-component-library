<script lang="ts">
export default {
  name: "SltAdminTablePagination",
};
</script>

<script setup lang="ts">
import { computed, reactive, toRefs } from "vue";
// import { Inertia } from "@inertiajs/inertia";

import state from "../../state/adminTableState";
import { TablePagination } from "../../types/adminTable";

import AppInertiaLink from "../AppInertiaLink.vue";
import IconArrowNext from "../../components/IconArrowNext/IconArrowNext.vue";
import IconArrowPrev from "../../components/IconArrowPrev/IconArrowPrev.vue";

interface PageNumber {
  [key: number]: number | string;
}

const props = withDefaults(
  defineProps<{
    pagination: TablePagination;
    advanced?: boolean;
  }>(),
  {
    advanced: true,
  }
);

const data = reactive({
  inputIsValid: true,
  pageInput: props.pagination.current_page,
  perPage: props.pagination.per_page,
  rowOptions: [10, 25, 50, 100],
});

const { tablePerPageOption } = toRefs(state);
const { pageInput } = toRefs(data);

const filteredRowOptions = computed(() => {
  // We don't want the user to pick more options per page than there are items in total
  let filteredRowOptions = data.rowOptions.filter((option, index) => {
    return (
      (option > props.pagination.total &&
        data.rowOptions[index - 1] < props.pagination.total) ||
      option < props.pagination.total
    );
  });

  return filteredRowOptions;
});

const moreThanOnePage = computed(() => {
  // Determine if there are more items than the lowest possible option for items per row
  return props.pagination.total > data.rowOptions[0];
});

const pageNumbers = computed(() => {
  let pageNumbers = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
  } as PageNumber;

  let currentPage = props.pagination.current_page;
  let lastPage = props.pagination.last_page;

  // Deviate from sequential numbering if 8 pages or more
  if (lastPage >= 8) {
    // Always print last page number
    pageNumbers[7] = lastPage;

    switch (true) {
      // Changes when current page is 1-3
      case currentPage < 4:
        pageNumbers[5] = "...";
        pageNumbers[6] = lastPage - 1;
        break;

      // Changes when current page is 4
      case currentPage === 4:
        pageNumbers[6] = "...";
        break;

      // Changes when current page is between 5 and final 4 pages
      case currentPage > 4 && currentPage < lastPage - 3:
        pageNumbers[2] = "...";
        pageNumbers[3] = currentPage - 1;
        pageNumbers[4] = currentPage;
        pageNumbers[5] = currentPage + 1;
        pageNumbers[6] = "...";
        break;

      // Changes when current page is one of final 4 pages
      case currentPage >= lastPage - 3:
        pageNumbers[2] = "...";
        pageNumbers[3] = props.pagination.last_page - 4;
        pageNumbers[4] = props.pagination.last_page - 3;
        pageNumbers[5] = props.pagination.last_page - 2;
        pageNumbers[6] = props.pagination.last_page - 1;
        break;
    }
  }
  return pageNumbers;
});

const prevPageUrl = computed(() => {
  return props.pagination.prev_page_url ?? "";
});

const nextPageUrl = computed(() => {
  return props.pagination.next_page_url ?? "";
});

const adjustRowsPerPage = () => {
  {
    state.tablePerPageOption = data.perPage;

    const params = new URLSearchParams(location.search);
    /**
     * We need to clear the page query param, otherwise the table view will sometmies break if the user changes rows per page while viewing a
     * page other than 1
     */

    params.delete("page");
    params.set("perPage", `${data.perPage}`);

    // Inertia.visit(`${location.pathname}?${params}`);
  }
};

const pageUrl = (page: number) => {
  // We set the page query param in this manner so it doesn't overwrite the perPage param.
  const params = new URLSearchParams(location.search);
  params.set("page", `${pageNumbers.value[page]}`);

  return `${location.pathname}?${params}`;
};

const validatePageInput = () => {
  if (
    data.pageInput > props.pagination.last_page ||
    typeof data.pageInput !== "number"
  ) {
    data.inputIsValid = false;
    return "#";
  } else {
    return `${props.pagination.path}?page=${data.pageInput}`;
  }
};

const userAlert = () => {
  if (!data.inputIsValid) {
    alert(
      `Please choose a page number between one and ${props.pagination.last_page}`
    );
  }
};
</script>

<template>
  <div
    class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
  >
    <div class="flex-1 flex items-center justify-between flex-wrap">
      <!-- Rows per page selector -->
      <div
        v-if="moreThanOnePage"
        class="flex justify-between items-center text-gray-700"
      >
        <span class="mr-2">Rows per page: </span>
        <select
          class="bg-white"
          name="Rows per page"
          id="rows_per_page"
          @change="adjustRowsPerPage"
        >
          <option
            :key="option"
            v-for="option in filteredRowOptions"
            :value="option"
            :selected="option === tablePerPageOption"
          >
            {{ option }}
          </option>
        </select>
      </div>

      <!-- Current page indicator -->
      <div>
        <p class="text-sm leading-5 text-gray-700">
          Showing {{ pagination.from }} to {{ pagination.to }} of
          {{ pagination.total }} results
        </p>
      </div>

      <!-- Pagination navigation -->
      <div v-if="pagination.last_page > 1">
        <!-- Simple pagination -->
        <nav class="relative z-0 inline-flex shadow-sm" v-if="!advanced">
          <app-inertia-link
            preserve-scroll
            :href="prevPageUrl"
            tag="button"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 transition ease-in-out duration-150"
            v-bind:class="{
              'opacity-50 text-gray-300 cursor-default':
                !pagination.prev_page_url,
            }"
            aria-label="previous"
            title="Previous"
          >
            <icon-arrow-prev fill="grey-darkest" />
          </app-inertia-link>
          <app-inertia-link
            preserve-scroll
            :href="nextPageUrl"
            tag="button"
            class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 transition ease-in-out duration-150"
            v-bind:class="{
              'opacity-50 text-gray-300 cursor-default':
                !pagination.next_page_url,
            }"
            aria-label="next"
            title="Next"
          >
            <icon-arrow-next fill="grey-darkest" />
          </app-inertia-link>
        </nav>

        <!-- Advanced Pagination -->
        <nav class="relative z-0 inline-flex mt-2 lg:mt-0" v-if="advanced">
          <!-- Back button -->
          <app-inertia-link
            preserve-scroll
            :href="prevPageUrl"
            tag="button"
            class="shadow-sm relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 transition ease-in-out duration-150"
            v-bind:class="{
              'opacity-50 text-gray-300 cursor-default':
                !pagination.prev_page_url,
            }"
            aria-label="Next"
            title="Previous"
          >
            <icon-arrow-prev fill="grey-darkest" />
          </app-inertia-link>
          <!-- Page number buttons -->
          <app-inertia-link
            preserve-scroll
            :href="pageUrl(page)"
            tag="button"
            class="-ml-px shadow-sm relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 transition ease-in-out duration-150"
            :class="[
              {
                'cursor-default font-bold bg-primary-100':
                  pageNumbers[page] === pagination.current_page,
              },
              {
                'text-gray-300 cursor-default': pageNumbers[page] === '...',
              },
            ]"
            v-for="page in Math.min(pagination.last_page, 7)"
            v-bind:key="page"
          >
            {{ pageNumbers[page] }}
          </app-inertia-link>

          <!-- Next button -->
          <app-inertia-link
            preserve-scroll
            :href="nextPageUrl"
            tag="button"
            class="shadow-sm -ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 transition ease-in-out duration-150"
            v-bind:class="{
              'opacity-50 text-gray-300 cursor-default':
                !pagination.next_page_url,
            }"
            aria-label="Next"
            title="Next"
          >
            <icon-arrow-next fill="grey-darkest" />
          </app-inertia-link>

          <!-- User page input -->
          <div>
            <input
              type="number"
              name="page-number"
              id="page-number"
              :placeholder="`${pagination.current_page}`"
              class="text-gray-500 focus:text-black shadow-sm relative inline-flex w-12 ml-6 border border-gray-300 px-2 py-2 rounded-md text-sm leading-5"
              v-model="pageInput"
              min="1"
              :max="`${pagination.last_page}`"
            />
            <app-inertia-link
              preserve-scroll
              :href="validatePageInput()"
              tag="button"
              class="shadow-sm relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm leading-5 font-medium transition ease-in-out duration-150"
              aria-label="$t('nav.pagination.next')"
              title="$t('nav.pagination.next')"
              v-on:click="userAlert()"
            >
              Go
            </app-inertia-link>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
