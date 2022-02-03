<template>
  <admin-form-item-wrapper
    :input-id="inputId"
    :label="label"
    :info="info"
    :required="required"
  >
    <div class="max-w-4xl rounded-md shadow-sm">
      <input
        v-bind="$attrs"
        v-if="!loading"
        :id="inputId"
        :name="inputId"
        :required="required"
        :readonly="readonly"
        :type="type ? type : 'text'"
        :value="inputValue"
        @input="emitInput($event.target.value)"
        class="block w-full shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 sm:text-sm sm:leading-5 transition duration-150 ease-in-out"
      />
      <span
        class="input-loading block w-full shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 sm:text-sm sm:leading-5 transition duration-150 ease-in-out"
        v-if="loading"
      >
        Loading...
      </span>
    </div>
  </admin-form-item-wrapper>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref, toRefs } from "vue";

import AdminFormItemWrapper from "../AdminFormItemWrapper.vue";
// import IconLoading from "../IconLoading/IconLoading.vue";

type InputType = "date" | "email" | "number" | "text" | "tel" | "url";

export default defineComponent({
  name: "SltAdminFormInput",
  components: {
    AdminFormItemWrapper,
    //IconLoading,
  },
  props: {
    inputId: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    info: {
      type: String,
      required: false,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
    type: {
      type: String as PropType<InputType>,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
  },
  setup(props, { emit }) {
    const test = ref(5);

    const state = reactive({
      inputValue: props.value ? props.value : "",
    });

    const emitInput = (value: string) => {
      emit("input", value);
    };

    return {
      ...toRefs(state),
      emitInput,
    };
  },
});
</script>
