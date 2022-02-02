<template>
  <admin-form-item-wrapper
    :input-id="inputId"
    :label="label"
    :info="info"
    :required="required"
  >
    <div class="max-w-full rounded-md shadow-sm relative">
      <textarea
        v-bind="$attrs"
        :id="inputId"
        :name="inputId"
        :required="required"
        :readonly="readonly"
        :placeholder="placeholder"
        v-model="inputValue"
        @input="emitInput($event.target.value)"
        :rows="this.rows"
        class="block w-full shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 sm:text-sm sm:leading-5 transition duration-150 ease-in-out"
      ></textarea>
      <span
        v-if="inputValue && $attrs.maxlength"
        class="absolute"
        :class="{ 'text-red-500': inputValue.length > $attrs.maxlength }"
        style="bottom: 0px; right: 15px"
        >{{ inputValue.length }}/{{ $attrs.maxlength }}</span
      >
    </div>
  </admin-form-item-wrapper>
</template>

<script lang="ts">
import AdminFormItemWrapper from "../AdminFormItemWrapper.vue";

import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "SltAdminFormTextArea",
  components: { AdminFormItemWrapper },
  inheritAttrs: false,
  props: {
    inputId: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    rows: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  setup(props, { emit }) {
    props = reactive(props);

    const state = reactive({
      inputValue: props.value ? props.value : "",
    });

    const emitInput = (value: string) => {
      state.inputValue = value;
      emit("input", value);
    };

    return {
      ...toRefs(state),
      emitInput,
    };
  },
});
</script>
