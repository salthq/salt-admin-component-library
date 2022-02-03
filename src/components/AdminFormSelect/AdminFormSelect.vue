<template>
  <admin-form-item-wrapper :inputId="inputId" :label="label" :info="info">
    <admin-dropdown-list
      :existing-selection="existingSelection"
      item-identifier="value"
      item-label="label"
      :item-list="options"
      @on-item-selected="emitInput"
      @on-item-reset="emitInput"
      :show-button="showButton"
      :value="input_value"
    />
  </admin-form-item-wrapper>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, PropType } from "vue";

import AdminDropdownList from "../../components/AdminDropdownList/AdminDropdownList.vue";
import AdminFormItemWrapper from "../../components/AdminFormItemWrapper.vue";

export default defineComponent({
  name: "SltAdminFormSelect",
  components: {
    AdminDropdownList,
    AdminFormItemWrapper,
  },
  props: {
    info: {
      type: String,
      required: false,
    },
    inputId: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array as PropType<Array<any>>,
      required: true,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
    showButton: {
      type: Boolean,
      required: false,
      default: false,
    },
    value: {
      required: false,
    },
  },
  emits: ["input", "selected"],
  data() {
    return {
      input_value: this.options.find(
        (option: any) => option.value === this.value
      ),
    };
  },
  watch: {
    value: function () {
      this.input_value = this.options.find(
        (option: any) => option.value === this.value
      );
    },
  },
  computed: {
    // Determine whether a previous selection exists from a prior session
    // Pass this value to the existing-selection prop of AdminDropDownList component
    existingSelection() {
      let selectedOption = this.options.find(
        (item: any) => item.value === this.value
      );

      if (selectedOption) {
        let label = selectedOption.label;

        return {
          label: label,
          value: this.value,
        };
      } else {
        return null;
      }
    },
  },
  methods: {
    emitInput(event: any) {
      let value = event && event.value ? event.value : null;
      this.$emit("input", value);
      this.$emit("selected", value);
    },
  },
});
</script>
