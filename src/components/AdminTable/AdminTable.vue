<script lang="ts">
export default {
  name: "SltAdminTable",
};
</script>

<script setup lang="ts">
import { computed, onMounted, reactive, toRefs } from "vue";

import state from "../../state/adminTableState";

import { Columns, TableOptions, TableData, TablePagination } from "../../types";

import AdminTableHeader from "../AdminTableHeader/AdminTableHeader.vue";
import AdminTablePagination from "../AdminTablePagination/AdminTablePagination.vue";
import AdminTableSearch from "../AdminTableSearch/AdminTableSearch.vue";
import IconLoading from "../../components/IconLoading/IconLoading.vue";

const emit = defineEmits<{
  (event: "change-table-state", form: TableOptions): void;
}>();

const props = withDefaults(
  defineProps<{
    tableData: TableData;
    tablePagination?: TablePagination;
    hasFilters?: boolean;
    hasPagination?: boolean;
    hasSearch?: boolean;
    hasSelect?: boolean;
    hasExport?: boolean;
    columns: Array<Columns>;
    loading?: boolean;
  }>(),
  {}
);

const data = reactive({
  currentSort: "id",
  currentSortDir: "asc",
});

const { allRowsSelected } = toRefs(state);

const allRowIds = computed((): number[] => {
  return props.tableData.map((item) => {
    if (item.user_id) return item.user_id;

    return item.id;
  }) as number[];
});

const emptyTable = computed(() => {
  return !props.tableData?.length;
});

const searchOrSort = (query: string | null, sort: string | null) => {
  if (query === null) {
    query = state.activeQuery;
  }

  if (sort && sort === data.currentSort) {
    data.currentSortDir = data.currentSortDir === "asc" ? "desc" : "asc";
    state.activeSortState = data.currentSortDir;
  }

  if (sort) {
    data.currentSort = sort;
  } else {
    data.currentSort = state.activeSortColumn;
    data.currentSortDir = state.activeSortState;
  }

  state.activeSortColumn = data.currentSort;
  state.activeQuery = query;

  const params = new URLSearchParams(location.search);

  let form: TableOptions = {
    query: state.activeQuery,
    column: data.currentSort,
    direction: data.currentSortDir,
    perPage: props.tablePagination?.per_page ?? 0,
  };

  console.log(form);

  for (const [key, value] of params) {
    if (
      key !== "query" &&
      key !== "column" &&
      key !== "direction" &&
      key !== "perPage"
    ) {
      form.key = value;
    }
  }

  emit("change-table-state", form);
};

const toggleSelectAll = () => {
  state.allUsersSelected = !state.allUsersSelected;
  state.allRowsSelected = !state.allRowsSelected;

  if (state.allRowsSelected) {
    state.selectedRows = allRowIds.value;
  } else {
    state.selectedRows = [];
  }
};

onMounted(() => {
  const params = new URLSearchParams(location.search);

  if (params.get("column") && params.get("direction")) {
    state.activeSortColumn = params.get("column") ?? "id";
    state.activeSortState = params.get("direction") ?? "asc";
  } else {
    state.activeSortColumn = data.currentSort;
    state.activeSortState = data.currentSortDir;
  }

  state.allRowIDs = allRowIds.value;
  state.selectedRows = [];
});
</script>

<template>
  <div class="flex flex-col">
    <div class="flex items-end justify-end">
      <slot name="customActions"> </slot>

      <admin-table-search
        v-if="hasSearch"
        @search="searchOrSort($event, null)"
      />
    </div>

    <div
      class="-my-2 pt-2 pb-24 lg:pb-8 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
    >
      <div
        class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
      >
        <table class="min-w-full">
          <slot name="header">
            <thead>
              <tr>
                <admin-table-header
                  v-if="hasSelect"
                  class="hover:bg-gray-50 cursor-pointer w-6"
                  @click="toggleSelectAll"
                >
                  <div class="flex items-center justify-center">
                    <input
                      type="checkbox"
                      class="border form-checkbox cursor-pointer h-4 w-4 text-primary-700 transition duration-150 ease-in-out"
                      :checked="allRowsSelected"
                    />
                  </div>
                </admin-table-header>
                <admin-table-header
                  v-for="column in columns"
                  :key="column.label"
                  @clicked="
                    column.sort ? searchOrSort(null, column.sort) : null
                  "
                  :label="column.label"
                  :sort="column.sort ?? undefined"
                />
              </tr>
            </thead>
          </slot>
          <tbody v-if="!emptyTable && !loading">
            <slot name="rows"> </slot>
          </tbody>
          <tbody class="p-6 flex justify-center" v-if="loading">
            <span>
              <icon-loading />
            </span>
          </tbody>
        </table>
        <div v-if="emptyTable">
          <slot name="empty"> </slot>
        </div>
        <admin-table-pagination
          v-if="hasPagination && tablePagination?.total"
          :pagination="tablePagination"
          @change-pagination="emit('change-table-state', $event)"
        />
      </div>
    </div>
  </div>
</template>
