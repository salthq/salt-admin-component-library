<template>
  <div class="flex items-end my-4 mr-3">
    <template v-if="selectedRows.length">
      <admin-form-select
        input-id="bulk_action"
        :value="selectedAction"
        label="Bulk actions"
        :options="actionOptionsFiltered"
        @input="selectedAction = $event"
        :show-button="false"
        class="w-full"
      ></admin-form-select>
      <admin-button
        type="button"
        v-if="selectedAction"
        variation="white"
        class="ml-4 py-1"
        @clicked="submitAction"
        text="Submit"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import state from "../../state/adminTableState";

import AdminButton from "../AdminButton/AdminButton.vue";
import AdminFormSelect from "../AdminFormSelect/AdminFormSelect.vue";

export default defineComponent({
  name: "SltAdminTableBulkActions",
  components: {
    AdminButton,
    AdminFormSelect,
  },
  props: {
    bulkActions: {
      type: Array,
      required: false,
      default: () => [],
    },
    data: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const actionOptions = ref([
      {
        value: "download-all",
        label: "Download all",
      },
      {
        value: "download-selected",
        label: "Download selected",
      },
      {
        value: "message-users",
        label: "Message users",
      },
      {
        value: "archive",
        label: "Archive",
      },
      {
        value: "unarchive",
        label: "Unarchive",
      },
      {
        value: "notify-all",
        label: "Notify all",
      },
      {
        value: "notify-selected",
        label: "Notify selected",
      },
    ]);

    const selectedAction = ref("");
    const selectedRows = state.selectedRows;

    const actionOptionsFiltered = computed(() => {
      return actionOptions.value.filter((x) =>
        props.bulkActions.includes(x.value)
      );
    });

    const submitAction = () => {
      emit("action", selectedAction.value);
      emit(selectedAction.value);
    };

    return {
      actionOptions,
      actionOptionsFiltered,
      selectedAction,
      selectedRows,
      submitAction,
    };
  },
});
</script>
