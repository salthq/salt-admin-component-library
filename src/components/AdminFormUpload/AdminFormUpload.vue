<script lang="ts">
export default {
  name: "SltAdminFormUpload",
};
</script>

<script setup lang="ts">
import { computed, onMounted, toRefs, withDefaults } from "vue";

import state from "@/state/adminFormUploadState";
import { calculateFileSize } from "@/composables/useFileSizeCalculator";
import { dragAndDropFileUpload } from "@/composables/useDragAndDrop";

import { AllowedFileType } from "@/types";
import AdminFormItemWrapper from "../AdminFormItemWrapper/AdminFormItemWrapper.vue";

const emit = defineEmits<{
  (event: "input", file: File | null): void;
}>();

const props = withDefaults(
  defineProps<{
    fileTypes?: Array<AllowedFileType>;
    inputId: string;
    info?: string;
    label: string;
  }>(),
  { fileTypes: () => ["png", "docx", "pdf", "jpeg"] }
);

const fileTypesList = computed(() => {
  const fileTypeExtensions = props.fileTypes.map((item) => {
    return `.${item}`;
  });

  return fileTypeExtensions.join();
});

const fileName = computed(() => {
  return state.file?.name;
});

const fileSize = computed(() => {
  return calculateFileSize(state.file?.size ?? 0);
});

const resetFile = () => {
  state.file = null;
};

const launchFileBrowser = () => {
  state.fileInput?.click();
};

const processFileChange = () => {
  if (state.fileInput) {
    state.file = state.fileInput?.files?.[0] ?? null;
  }
  emit("input", state.file);
};

const { fileInput } = toRefs(state);
const { dragover, drop, fileDropClasses } = dragAndDropFileUpload(emit);

onMounted(() => {
  state.fileInput?.focus();
});
</script>

<template>
  <admin-form-item-wrapper :input-id="inputId" :label="label" :info="info">
    <div
      class="p-3 rounded-lg mb-2"
      @dragover="dragover"
      @drop="drop"
      :class="fileDropClasses"
    >
      <!-- Real hidden input -->
      <input
        type="file"
        class="hidden"
        ref="fileInput"
        @input="processFileChange"
        :accept="fileTypesList"
        data-test="real-hidden-input"
      />
      <!-- Fake input container -->
      <div
        class="my-2 flex rounded-md shadow-sm bg-white border border-gray-300 items-center cursor-pointer"
        @click="launchFileBrowser"
        data-test="fake-input-container"
      >
        <div
          class="text-gray-500 px-4 py-2 rounded-none rounded-l-md pl-4 transition ease-in-out duration-150 sm:text-sm sm:leading-5 flex flex-grow focus-within:z-10"
        >
          <span data-test="file-name" v-if="fileName"> {{ fileName }}</span>
          <span v-else>Choose file...</span>
        </div>

        <span
          class="flex self-stretch px-4 py-2 border-l border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
        >
          <span v-if="fileName" class="flex self-center">Change</span>
          <span v-else class="flex self-center">Browse</span>
        </span>
      </div>

      <div class="flex justify-between text-sm px-3" v-if="fileName">
        <span data-test="file-size">File size: {{ fileSize }}</span>
        <span
          data-test="reset-file"
          class="underline cursor-pointer text-primary-700"
          @click="resetFile"
          >Remove selected file</span
        >
      </div>
    </div>
    <div class="flex justify-between items-center" v-if="!fileName">
      <em class="text-gray-500 text-sm" data-test="allowed-uploads"
        >Allowed uploads:
        <span :key="index" v-for="(file, index) in fileTypes"
          >{{ file }}{{ index !== fileTypes.length - 1 ? ", " : "" }}</span
        >
      </em>
    </div>
  </admin-form-item-wrapper>
</template>
