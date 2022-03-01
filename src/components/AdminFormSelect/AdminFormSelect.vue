<script lang="ts">
export default {
  name: "SltAdminFormSelect",
};
</script>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";

import AdminDropdownList from "../../components/AdminDropdownList/AdminDropdownList.vue";
import AdminFormItemWrapper from "../AdminFormItemWrapper/AdminFormItemWrapper.vue";

import { DropdownListItem } from "../../types";

const emit = defineEmits<{
  (event: "input", item: DropdownListItem | null): void;
  (event: "selected", item: DropdownListItem | null): void;
}>();

const props = defineProps<{
  error?: string;
  info?: string;
  inputId: string;
  label: string;
  options: Array<DropdownListItem>;
  readonly?: boolean;
  required?: boolean;
  showButton?: boolean;
  value?: DropdownListItem;
}>();

const inputValue = ref<DropdownListItem>();

onMounted(() => {
  inputValue.value = props.options.find(
    (item: DropdownListItem) => item.id === props.value?.id
  );
});

watch(
  () => props.value,
  () => {
    inputValue.value = props.options.find(
      (item: DropdownListItem) => item.id === props?.value?.id
    );
  }
);

const existingSelection = computed((): DropdownListItem | null => {
  let selectedOption = props.options.find(
    (item: DropdownListItem) => item.id === props.value?.id
  );

  if (selectedOption) {
    return {
      id: selectedOption.id,
      name: selectedOption.name,
    };
  } else {
    return null;
  }
});

const emitReset = () => {
  emit("input", null);
  emit("selected", null);
};

const emitInput = (event: DropdownListItem | null) => {
  emit("input", event);
  emit("selected", event);
};
</script>

<template>
  <admin-form-item-wrapper
    :error="error"
    :inputId="inputId"
    :label="label"
    :info="info"
  >
    <admin-dropdown-list
      :existing-selection="existingSelection ?? undefined"
      item-identifier="value"
      item-label="label"
      :item-list="options"
      @on-item-select="emitInput"
      @on-item-reset="emitReset"
      :show-button="showButton"
      :value="inputValue"
      :error="error"
    />
  </admin-form-item-wrapper>
</template>
